import * as SQLite from 'expo-sqlite';
import { DB_NAME } from '../index';

// ==========================================
// 1. HELPERS
// ==========================================

// Mengubah string tanggal database menjadi format YYYY-MM-DD berdasarkan LOKAL user
// Penting agar streak sesuai jam dinding user (bukan jam server/UTC)
const getLocalDateString = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Mengambil tanggal hari ini (YYYY-MM-DD)
const getTodayString = (): string => {
    return getLocalDateString(new Date().toISOString());
};

// Mengambil tanggal kemarin (YYYY-MM-DD)
const getYesterdayString = (): string => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return getLocalDateString(yesterday.toISOString());
};

// ==========================================
// 2. MAIN LOGIC
// ==========================================

export const streak = {
    /**
     * Mengambil daftar tanggal unik (YYYY-MM-DD) di mana user menjawab BENAR.
     * Diurutkan Descending (Terbaru -> Terlama)
     */
    getCorrectActivityDates: async (): Promise<string[]> => {
        const db = await SQLite.openDatabaseAsync(DB_NAME);

        // Ambil raw created_at dari jawaban benar
        const result = await db.getAllAsync<{ created_at: string }>(
            `SELECT created_at FROM user_answers WHERE is_correct = 1 ORDER BY created_at DESC`
        );

        // Konversi ke tanggal lokal unik menggunakan Set
        const uniqueDates = new Set<string>();
        result.forEach((row) => {
            uniqueDates.add(getLocalDateString(row.created_at));
        });

        // Kembalikan array terurut
        return Array.from(uniqueDates);
    },

    /**
     * Menghitung Streak SAAT INI (Current Streak).
     * Streak dihitung aktif jika user menjawab benar HARI INI atau KEMARIN.
     * Jika terakhir menjawab 2 hari lalu, streak reset ke 0.
     */
    getCurrentStreak: async (): Promise<number> => {
        const activityDates = await streak.getCorrectActivityDates();

        if (activityDates.length === 0) return 0;

        const today = getTodayString();
        const yesterday = getYesterdayString();
        const lastActiveDate = activityDates[0];

        // Cek apakah streak masih hidup?
        // Jika aktivitas terakhir bukan hari ini DAN bukan kemarin, berarti streak putus.
        if (lastActiveDate !== today && lastActiveDate !== yesterday) {
            return 0;
        }

        // Mulai hitung
        let currentStreak = 1;

        // Loop mundur dari index ke-0 ke belakang
        for (let i = 0; i < activityDates.length - 1; i++) {
            const currentDate = new Date(activityDates[i]);
            const prevDate = new Date(activityDates[i + 1]);

            // Hitung selisih hari (dalam miliseconds dibagi ms per hari)
            const diffTime = currentDate.getTime() - prevDate.getTime();
            const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

            if (diffDays === 1) {
                currentStreak++;
            } else {
                // Jika selisih hari > 1, berarti streak putus di sini
                break;
            }
        }

        return currentStreak;
    },

    /**
     * Menghitung Streak TERPANJANG (Longest Streak) sepanjang masa.
     */
    getLongestStreak: async (): Promise<number> => {
        const activityDates = await streak.getCorrectActivityDates();

        if (activityDates.length === 0) return 0;

        let maxStreak = 1;
        let tempStreak = 1;

        // Loop dari data terbaru ke terlama
        for (let i = 0; i < activityDates.length - 1; i++) {
            const currentDate = new Date(activityDates[i]);
            const prevDate = new Date(activityDates[i + 1]);

            const diffTime = currentDate.getTime() - prevDate.getTime();
            const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

            if (diffDays === 1) {
                // Jika berurutan, tambah temp streak
                tempStreak++;
            } else {
                // Jika putus, simpan max, lalu reset temp
                if (tempStreak > maxStreak) {
                    maxStreak = tempStreak;
                }
                tempStreak = 1;
            }
        }

        // Cek terakhir kali (jika streak terpanjang ada di akhir loop)
        if (tempStreak > maxStreak) {
            maxStreak = tempStreak;
        }

        return maxStreak;
    },

    /**
     * Helper untuk mengambil keduanya sekaligus (Current & Longest)
     * Berguna untuk UI Dashboard agar tidak query 2x.
     */
    getAllStreakInfo: async () => {
        const [current, longest] = await Promise.all([
            streak.getCurrentStreak(),
            streak.getLongestStreak()
        ]);
        return { current, longest };
    }
};