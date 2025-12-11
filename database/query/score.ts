import * as SQLite from 'expo-sqlite';
import { DB_NAME } from '../index'; // Sesuaikan path import DB_NAME Anda

// ==========================================
// 1. CONSTANTS & TYPES
// ==========================================

export const LEVELS = ["smp_7", "smp_8", "smp_9"] as const;
export const CATEGORIES = ["matematika", "fisika", "kimia", "biologi", "inggris"] as const;
export const DIFFICULTIES = ["easy", "medium", "intermediate", "hard", "expert"] as const;

export type LevelType = typeof LEVELS[number];
export type CategoryType = typeof CATEGORIES[number];
export type DifficultyType = typeof DIFFICULTIES[number];

// Tipe data hasil hitungan per item
export type ScoreDetail = {
    correct: number;
    wrong: number;
};

// Struktur Data Nested: Level -> Category -> Difficulty -> Score
export type ScoreReport = {
    [L in LevelType]: {
        [C in CategoryType]: {
            [D in DifficultyType]: ScoreDetail;
        };
    };
};

// ==========================================
// 2. HELPER: Generate Empty Skeleton
// ==========================================
// Fungsi ini membuat object kosong lengkap dengan nilai 0
// Agar frontend tidak perlu menangani undefined/null
const createEmptyScoreReport = (): ScoreReport => {
    const report: any = {};

    for (const lvl of LEVELS) {
        report[lvl] = {};
        for (const cat of CATEGORIES) {
            report[lvl][cat] = {};
            for (const diff of DIFFICULTIES) {
                report[lvl][cat][diff] = { correct: 0, wrong: 0 };
            }
        }
    }

    return report as ScoreReport;
};

// ==========================================
// 3. MAIN QUERY FUNCTION
// ==========================================

const getAggregatedScores = async (): Promise<ScoreReport> => {
    const db = await SQLite.openDatabaseAsync(DB_NAME);

    // Inisialisasi struktur data kosong (semua 0)
    const finalReport = createEmptyScoreReport();

    try {
        // Query SQL untuk grouping dan counting
        // Kita join user_answers ke questions untuk dapat metadata (level, category, difficulty)
        const results = await db.getAllAsync<{
            level: LevelType;
            category: CategoryType;
            difficulty: DifficultyType;
            total_correct: number;
            total_wrong: number;
        }>(`
      SELECT 
        q.level,
        q.category,
        q.difficulty,
        SUM(CASE WHEN ua.is_correct = 1 THEN 1 ELSE 0 END) as total_correct,
        SUM(CASE WHEN ua.is_correct = 0 THEN 1 ELSE 0 END) as total_wrong
      FROM user_answers ua
      JOIN questions q ON ua.question_id = q.id
      GROUP BY q.level, q.category, q.difficulty
    `);

        // Mapping hasil SQL ke dalam struktur object kita
        // Jika ada hasil di SQL, kita timpa nilai 0 di object finalReport
        for (const row of results) {
            // Validasi safety check (jaga-jaga jika ada data kotor di DB yang tidak sesuai enum)
            if (
                finalReport[row.level] &&
                finalReport[row.level][row.category] &&
                finalReport[row.level][row.category][row.difficulty]
            ) {
                finalReport[row.level][row.category][row.difficulty] = {
                    correct: row.total_correct,
                    wrong: row.total_wrong,
                };
            }
        }

        return finalReport;

    } catch (error) {
        console.error("Error calculating scores:", error);
        // Jika error, return object kosong agar aplikasi tidak crash
        return finalReport;
    }
};

// ==========================================
// 4. EXTRA: Helper untuk Total Global (Opsional)
// ==========================================
// Jika anda butuh total skor keseluruhan tanpa grouping
const getGlobalScore = async () => {
    const db = await SQLite.openDatabaseAsync(DB_NAME);
    const result = await db.getFirstAsync<{ total_correct: number, total_wrong: number }>(`
        SELECT 
            SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as total_correct,
            SUM(CASE WHEN is_correct = 0 THEN 1 ELSE 0 END) as total_wrong
        FROM user_answers
    `);

    return result || { total_correct: 0, total_wrong: 0 };
}

export const score = {
    getAggregatedScores,
    getGlobalScore
}
