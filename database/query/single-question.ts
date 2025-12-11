import { DB_NAME } from '@/database';
import * as SQLite from 'expo-sqlite';



// ==========================================
// 1. TYPE DEFINITIONS (Return Types)
// ==========================================

// Base properties yang dimiliki semua soal
type BaseQuestionResult = {
    id: string;
    type: string;
    category: string;
    level: string;
    difficulty: string;
    topic: string;
    questionText: string;
    questionImage: string | null;
    explanationText: string | null;
    explanationImage: string | null;
};

// Return Type: Multiple Choice
export type MultipleChoiceResult = BaseQuestionResult & {
    options: {
        id: string;
        text: string;
        image: string | null;
        isCorrect: boolean;
    }[];
};

// Return Type: Drag and Drop
export type DragAndDropResult = BaseQuestionResult & {
    zones: {
        id: string;
        label: string;
    }[];
    items: {
        id: string;
        text: string;
        image: string | null;
        correctZoneId: string;
    }[];
};

// Return Type: Puzzle Sequence
export type PuzzleSequenceResult = BaseQuestionResult & {
    pieces: {
        id: string;
        text: string;
        image: string | null;
        correctOrderIndex: number;
    }[];
};

// Return Type: Minigame
export type MinigameResult = BaseQuestionResult & {
    gameObjects: {
        id: string;
        text: string;
        image: string | null;
        isCorrectTarget: boolean;
    }[];
};

// ==========================================
// 2. QUERY OBJECT
// ==========================================

export const singleQuestion = {
    /**
     * Mengambil 1 soal Multiple Choice pertama yang ditemukan
     */
    getMultipleChoice: async (): Promise<MultipleChoiceResult | null> => {
        const db = await SQLite.openDatabaseAsync(DB_NAME);

        // 1. Ambil Parent (Soal)
        const question = await db.getFirstAsync<any>(
            `SELECT * FROM questions WHERE type = 'multiple_choice' LIMIT 1`
        );

        if (!question) return null;

        // 2. Ambil Children (Opsi Jawaban)
        const options = await db.getAllAsync<any>(
            `SELECT * FROM question_choices WHERE question_id = ?`,
            [question.id]
        );

        // 3. Gabungkan dan Map ke CamelCase
        return {
            id: question.id,
            type: question.type,
            category: question.category,
            level: question.level,
            difficulty: question.difficulty,
            topic: question.topic,
            questionText: question.question_text,
            questionImage: question.question_image,
            explanationText: question.explanation_text,
            explanationImage: question.explanation_image,
            options: options.map((opt) => ({
                id: opt.id,
                text: opt.text,
                image: opt.image,
                isCorrect: opt.is_correct === 1, // Convert SQLite Integer (0/1) to Boolean
            })),
        };
    },

    /**
     * Mengambil 1 soal Drag and Drop pertama yang ditemukan
     */
    getDragAndDrop: async (): Promise<DragAndDropResult | null> => {
        const db = await SQLite.openDatabaseAsync(DB_NAME);

        // 1. Ambil Parent
        const question = await db.getFirstAsync<any>(
            `SELECT * FROM questions WHERE type = 'drag_and_drop' LIMIT 1`
        );

        if (!question) return null;

        // 2. Ambil Zones
        const zones = await db.getAllAsync<any>(
            `SELECT * FROM drag_drop_zones WHERE question_id = ?`,
            [question.id]
        );

        // 3. Ambil Items
        const items = await db.getAllAsync<any>(
            `SELECT * FROM drag_drop_items WHERE question_id = ?`,
            [question.id]
        );

        // 4. Return
        return {
            id: question.id,
            type: question.type,
            category: question.category,
            level: question.level,
            difficulty: question.difficulty,
            topic: question.topic,
            questionText: question.question_text,
            questionImage: question.question_image,
            explanationText: question.explanation_text,
            explanationImage: question.explanation_image,
            zones: zones.map((z) => ({
                id: z.id,
                label: z.label,
            })),
            items: items.map((i) => ({
                id: i.id,
                text: i.text,
                image: i.image,
                correctZoneId: i.correct_zone_id,
            })),
        };
    },

    /**
     * Mengambil 1 soal Puzzle Sequence pertama yang ditemukan
     */
    getPuzzleSequence: async (): Promise<PuzzleSequenceResult | null> => {
        const db = await SQLite.openDatabaseAsync(DB_NAME);

        // 1. Ambil Parent
        const question = await db.getFirstAsync<any>(
            `SELECT * FROM questions WHERE type = 'puzzle_sequence' LIMIT 1`
        );

        if (!question) return null;

        // 2. Ambil Pieces
        const pieces = await db.getAllAsync<any>(
            `SELECT * FROM puzzle_pieces WHERE question_id = ? ORDER BY correct_order_index ASC`,
            [question.id]
        );

        // 3. Return
        return {
            id: question.id,
            type: question.type,
            category: question.category,
            level: question.level,
            difficulty: question.difficulty,
            topic: question.topic,
            questionText: question.question_text,
            questionImage: question.question_image,
            explanationText: question.explanation_text,
            explanationImage: question.explanation_image,
            pieces: pieces.map((p) => ({
                id: p.id,
                text: p.text,
                image: p.image,
                correctOrderIndex: p.correct_order_index,
            })),
        };
    },

    /**
     * Mengambil 1 soal Minigame pertama yang ditemukan
     */
    getMinigame: async (): Promise<MinigameResult | null> => {
        const db = await SQLite.openDatabaseAsync(DB_NAME);

        // 1. Ambil Parent
        const question = await db.getFirstAsync<any>(
            `SELECT * FROM questions WHERE type = 'minigame' LIMIT 1`
        );

        if (!question) return null;

        // 2. Ambil Game Objects
        const gameObjects = await db.getAllAsync<any>(
            `SELECT * FROM game_objects WHERE question_id = ?`,
            [question.id]
        );

        // 3. Return
        return {
            id: question.id,
            type: question.type,
            category: question.category,
            level: question.level,
            difficulty: question.difficulty,
            topic: question.topic,
            questionText: question.question_text,
            questionImage: question.question_image,
            explanationText: question.explanation_text,
            explanationImage: question.explanation_image,
            gameObjects: gameObjects.map((obj) => ({
                id: obj.id,
                text: obj.text,
                image: obj.image,
                isCorrectTarget: obj.is_correct_target === 1,
            })),
        };
    },
};