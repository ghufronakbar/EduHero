import { dragDropData } from '@/data/drag-and-drop';
import { multipleChoiceData } from '@/data/multiple-choice';
import { puzzleSequenceData } from '@/data/puzzle-sequence';
import { getDatabase } from './sqlite';

export const seedDatabase = async () => {
    const db = await getDatabase();
    console.log('🌱 Starting Seed Process (Safe Mode)...');

    try {
        // =========================================================
        // 1. SEED MULTIPLE CHOICE
        // =========================================================
        for (const q of multipleChoiceData) {
            // Cek Parent
            const checkQ = await db.getFirstAsync('SELECT id FROM questions WHERE id = ?', [q.id]);

            if (!checkQ) {
                await db.runAsync(
                    `INSERT INTO questions (id, type, category, difficulty, topic, question_text, explanation_text) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [q.id, q.type, q.category, q.difficulty, q.topic, q.questionText, q.explanationText || '']
                );
                console.log(`✅ Inserted MC Question Parent: ${q.id}`);
            }

            // Cek & Insert Children (Options) - Loop terpisah agar aman meskipun Parent sudah ada
            for (const opt of q.options) {
                const checkOpt = await db.getFirstAsync('SELECT id FROM question_choices WHERE id = ?', [opt.id]);
                if (!checkOpt) {
                    await db.runAsync(
                        `INSERT INTO question_choices (id, question_id, text, is_correct) VALUES (?, ?, ?, ?)`,
                        [opt.id, q.id, opt.text, opt.isCorrect ? 1 : 0]
                    );
                }
            }
        }

        // =========================================================
        // 2. SEED DRAG AND DROP
        // =========================================================
        for (const q of dragDropData) {
            // Cek Parent
            const checkQ = await db.getFirstAsync('SELECT id FROM questions WHERE id = ?', [q.id]);

            if (!checkQ) {
                await db.runAsync(
                    `INSERT INTO questions (id, type, category, difficulty, topic, question_text, explanation_text) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [q.id, q.type, q.category, q.difficulty, q.topic, q.questionText, q.explanationText || '']
                );
                console.log(`✅ Inserted DragDrop Question Parent: ${q.id}`);
            }

            // Cek & Insert Zones
            for (const zone of q.zones) {
                const checkZone = await db.getFirstAsync('SELECT id FROM drag_drop_zones WHERE id = ?', [zone.id]);
                if (!checkZone) {
                    await db.runAsync(
                        `INSERT INTO drag_drop_zones (id, question_id, label) VALUES (?, ?, ?)`,
                        [zone.id, q.id, zone.label]
                    );
                }
            }

            // Cek & Insert Items (Ini sumber error sebelumnya)
            for (const item of q.items) {
                const checkItem = await db.getFirstAsync('SELECT id FROM drag_drop_items WHERE id = ?', [item.id]);

                if (!checkItem) {
                    await db.runAsync(
                        `INSERT INTO drag_drop_items (id, question_id, correct_zone_id, text) VALUES (?, ?, ?, ?)`,
                        [item.id, q.id, item.correctZoneId, item.text]
                    );
                } else {
                    console.warn(`⚠️ Skipped Duplicate Item ID: ${item.id} (in question ${q.id})`);
                }
            }
        }

        // =========================================================
        // 3. SEED PUZZLE SEQUENCE
        // =========================================================
        for (const q of puzzleSequenceData) {
            // Cek Parent
            const checkQ = await db.getFirstAsync('SELECT id FROM questions WHERE id = ?', [q.id]);

            if (!checkQ) {
                await db.runAsync(
                    `INSERT INTO questions (id, type, category, difficulty, topic, question_text, explanation_text) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [q.id, q.type, q.category, q.difficulty, q.topic, q.questionText, q.explanationText || '']
                );
                console.log(`✅ Inserted Puzzle Question Parent: ${q.id}`);
            }

            // Cek & Insert Pieces
            for (const piece of q.pieces) {
                const checkPiece = await db.getFirstAsync('SELECT id FROM puzzle_pieces WHERE id = ?', [piece.id]);
                if (!checkPiece) {
                    await db.runAsync(
                        `INSERT INTO puzzle_pieces (id, question_id, text, correct_order_index) VALUES (?, ?, ?, ?)`,
                        [piece.id, q.id, piece.text, piece.correctOrderIndex]
                    );
                }
            }
        }

        // =========================================================
        // 4. SEED USER PROFILE
        // =========================================================
        const checkProfile = await db.getFirstAsync('SELECT id FROM user_profile WHERE id = ?', ['the_chosen_one']);
        if (!checkProfile) {
            await db.runAsync(
                `INSERT INTO user_profile (id, name) VALUES (?, ?)`,
                ['the_chosen_one', 'EduHeronian']
            );
            console.log('✅ Inserted User Profile');
        }

        console.log('✨ Seed Process Finished Successfully!');
    } catch (error) {
        console.error('❌ Error Seeding Database:', error);
    }
};