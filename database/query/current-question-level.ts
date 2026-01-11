import * as SQLite from "expo-sqlite";
import { DB_NAME } from "../index";

// ==========================================
// 1. CONFIGURATION
// ==========================================

// Bobot Poin jika jawaban BENAR
const DIFFICULTY_POINTS: Record<string, number> = {
  easy: 1,
  medium: 3,
  hard: 5,
};

// Batas Poin untuk menentukan level selanjutnya
// Total Poin Maksimal (jika 10x Benar Expert) = 50
const THRESHOLDS = {
  medium: 12, // Jika poin > 12, naik ke Medium
  hard: 20, // Jika poin > 20, naik ke Hard
  expert: 30, // Jika poin > 30, naik ke Expert
};

type Difficulty = "easy" | "medium" | "hard";
type QuestionCategory =
  | "matematika"
  | "fisika"
  | "kimia"
  | "biologi"
  | "inggris";

// ==========================================
// 2. MAIN LOGIC
// ==========================================

export const currentQuestionLevel = {
  /**
   * Menentukan tingkat kesulitan soal selanjutnya berdasarkan
   * performa user pada 10 jawaban terakhir di kategori tersebut.
   */
  getNextDifficulty: async (
    category: QuestionCategory
  ): Promise<Difficulty> => {
    const db = await SQLite.openDatabaseAsync(DB_NAME);

    // 1. Ambil 10 jawaban terakhir user untuk kategori spesifik ini
    // Kita perlu JOIN ke tabel questions untuk tahu difficulty soal tsb
    const history = await db.getAllAsync<{
      is_correct: number;
      difficulty: string;
    }>(
      `
      SELECT ua.is_correct, q.difficulty 
      FROM user_answers ua
      JOIN questions q ON ua.question_id = q.id
      WHERE q.category = ?
      ORDER BY ua.created_at DESC
      LIMIT 10
      `,
      [category]
    );

    // Jika belum pernah menjawab sama sekali, mulai dari Easy
    if (history.length === 0) {
      return "easy";
    }

    // 2. Hitung Total Poin
    let totalScore = 0;

    history.forEach((record) => {
      // Hanya dapat poin jika BENAR (is_correct === 1)
      if (record.is_correct === 1) {
        // Ambil poin berdasarkan difficulty (default 1 jika typo/error)
        const points = DIFFICULTY_POINTS[record.difficulty] || 1;
        totalScore += points;
      }
      // Jika SALAH, poin 0 (tidak mengurangi, tapi tidak menambah)
    });

    console.log(
      `[Adaptive] Category: ${category} | Last 10 Score: ${totalScore}`
    );

    // 3. Tentukan Difficulty Selanjutnya berdasarkan Threshold
    if (totalScore >= THRESHOLDS.hard) return "hard";
    if (totalScore >= THRESHOLDS.medium) return "medium";

    // Default (Score 0-7)
    return "easy";
  },

  /**
   * HELPER: Mengambil 1 Soal Random berdasarkan Difficulty yang sudah dihitung.
   * Fungsi ini menggabungkan logika getNextDifficulty + Query Soal Random.
   */
  getAdaptiveQuestion: async (category: QuestionCategory) => {
    const db = await SQLite.openDatabaseAsync(DB_NAME);

    // A. Tentukan level user saat ini
    const targetDifficulty = await currentQuestionLevel.getNextDifficulty(
      category
    );

    // B. Ambil soal random yang BELUM dijawab oleh user (Optional tapi Recommended)
    // Query ini mencari soal dengan difficulty target, yang ID-nya TIDAK ADA di tabel user_answers
    const question = await db.getFirstAsync<any>(
      `
      SELECT * FROM questions 
      WHERE category = ? 
      AND difficulty = ? 
      AND id NOT IN (SELECT question_id FROM user_answers)
      ORDER BY RANDOM() 
      LIMIT 1
      `,
      [category, targetDifficulty]
    );

    // C. Fallback Mechanism (PENTING)
    // Jika soal di level "Hard" habis, turunkan level atau ambil ulang soal lama
    if (!question) {
      console.log("Soal habis untuk level ini, mengambil soal random ulang...");
      return await db.getFirstAsync<any>(
        `SELECT * FROM questions WHERE category = ? AND difficulty = ? ORDER BY RANDOM() LIMIT 1`,
        [category, targetDifficulty]
      );
    }

    // Return soal raw (nanti bisa diolah pakai helper single-question untuk ambil opsi/child)
    return {
      questionData: question, // Ini hanya data tabel questions parent
      suggestedDifficulty: targetDifficulty,
    };
  },
};
