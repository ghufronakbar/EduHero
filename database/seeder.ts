import { multipleChoiceData } from "@/data/multiple-choice";
import { getDatabase } from "./sqlite";

export const seedDatabase = async () => {
  const db = await getDatabase();
  console.log("🌱 Starting Seed Process (Safe Mode)...");

  try {
    // =========================================================
    // 1. SEED MULTIPLE CHOICE
    // =========================================================
    for (const q of multipleChoiceData) {
      // Cek Parent
      const checkQ = await db.getFirstAsync(
        "SELECT id FROM questions WHERE id = ?",
        [q.id]
      );

      if (!checkQ) {
        await db.runAsync(
          `INSERT INTO questions (id, type, category, difficulty, topic, question_text, explanation_text) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            q.id,
            q.type,
            q.category,
            q.difficulty,
            q.topic,
            q.questionText,
            q.explanationText || "",
          ]
        );
        console.log(`✅ Inserted MC Question Parent: ${q.id}`);
      }

      // Cek & Insert Children (Options) - Loop terpisah agar aman meskipun Parent sudah ada
      for (const opt of q.options) {
        const checkOpt = await db.getFirstAsync(
          "SELECT id FROM question_choices WHERE id = ?",
          [opt.id]
        );
        if (!checkOpt) {
          await db.runAsync(
            `INSERT INTO question_choices (id, question_id, text, is_correct) VALUES (?, ?, ?, ?)`,
            [opt.id, q.id, opt.text, opt.isCorrect ? 1 : 0]
          );
        }
      }
    }
    // =========================================================
    // 4. SEED USER PROFILE
    // =========================================================
    const checkProfile = await db.getFirstAsync(
      "SELECT id FROM user_profile WHERE id = ?",
      ["the_chosen_one"]
    );
    if (!checkProfile) {
      await db.runAsync(`INSERT INTO user_profile (id, name) VALUES (?, ?)`, [
        "the_chosen_one",
        "EduHeronian",
      ]);
      console.log("✅ Inserted User Profile");
    }

    console.log("✨ Seed Process Finished Successfully!");
  } catch (error) {
    console.error("❌ Error Seeding Database:", error);
  }
};
