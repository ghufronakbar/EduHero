import { CATEGORIES, CategoryType, DIFFICULTIES, DifficultyType, LEVELS, score, ScoreReport } from "@/database/query/score";

// ==========================================
// 1. DEFINISI TIPE & RANK
// ==========================================

// Saya merekomendasikan nama rank ala RPG agar lebih menarik buat siswa SMP
export type PlayerRank = "Novice" | "Apprentice" | "Adept" | "Expert" | "Master";

interface CurrentLevel {
    [key: string]: PlayerRank; // key adalah CategoryType
}

// ==========================================
// 2. RULES & CONFIGURATION
// ==========================================

const RULES = {
    // Berapa XP yang didapat untuk 1 jawaban BENAR berdasarkan kesulitan
    XP_PER_CORRECT: {
        easy: 10,
        medium: 20,
        intermediate: 35,
        hard: 60,
        expert: 100,
    } as Record<DifficultyType, number>,

    // (Opsional) Penalti jika salah? Saya set 0 agar tidak membuat frustasi
    XP_PENALTY: 0,

    // Batas XP minimum untuk mencapai Rank tertentu
    // Contoh: Untuk jadi "Apprentice", butuh 200 XP total di mapel itu
    RANK_THRESHOLDS: {
        Novice: 0,        // 0 - 199 XP
        Apprentice: 200,  // 200 - 999 XP
        Adept: 1000,      // 1000 - 2499 XP
        Expert: 2500,     // 2500 - 4999 XP
        Master: 5000,     // 5000+ XP
    } as Record<PlayerRank, number>
};

// ==========================================
// 3. HELPER FUNCTIONS
// ==========================================

/**
 * Menghitung Rank berdasarkan Total XP
 */
const getRankFromXP = (totalXP: number): PlayerRank => {
    if (totalXP >= RULES.RANK_THRESHOLDS.Master) return "Master";
    if (totalXP >= RULES.RANK_THRESHOLDS.Expert) return "Expert";
    if (totalXP >= RULES.RANK_THRESHOLDS.Adept) return "Adept";
    if (totalXP >= RULES.RANK_THRESHOLDS.Apprentice) return "Apprentice";
    return "Novice";
};

/**
 * Menghitung Total XP untuk satu Kategori (Mapel)
 * Menggabungkan skor dari smp_7, smp_8, dan smp_9
 */
const calculateCategoryXP = (data: ScoreReport, category: CategoryType): number => {
    let currentXP = 0;

    // Loop semua jenjang kelas (SMP 7, 8, 9)
    LEVELS.forEach((schoolLevel) => {
        // Loop semua tingkat kesulitan (Easy - Expert)
        DIFFICULTIES.forEach((diff) => {
            const stat = data[schoolLevel][category][diff];

            // Rumus: (Benar * Poin)
            if (stat) {
                currentXP += stat.correct * RULES.XP_PER_CORRECT[diff];

                // Jika ingin menerapkan penalti pengurangan poin:
                // currentXP -= stat.wrong * RULES.XP_PENALTY;
            }
        });
    });

    // Cegah XP negatif (jika pakai penalti)
    return Math.max(0, currentXP);
};

// ==========================================
// 4. MAIN FUNCTION
// ==========================================

export const getLevelNow = async () => {
    // 1. Ambil data mentah dari database
    const [aggregatedScore, globalScore] = await Promise.all([
        score.getAggregatedScores(),
        score.getGlobalScore()
    ]);

    // 2. Inisialisasi object result
    const currentLevel: Partial<CurrentLevel> = {};
    const xpPerCategory: Record<string, number> = {}; // Opsional: jika ingin menampilkan progress bar XP

    // 3. Loop setiap kategori (Matematika, Fisika, dll) untuk hitung rank
    CATEGORIES.forEach((cat) => {
        // Hitung total XP user di kategori ini
        const totalXP = calculateCategoryXP(aggregatedScore, cat);

        // Tentukan Rank berdasarkan XP
        currentLevel[cat] = getRankFromXP(totalXP);

        // Simpan XP mentah juga (berguna buat UI progress bar: "150/200 XP to Apprentice")
        xpPerCategory[cat] = totalXP;
    });

    return {
        aggregatedScore,
        globalScore,
        currentLevel: currentLevel as CurrentLevel,
        xpDetails: xpPerCategory // Bonus: Data XP mentah untuk UI
    };
};