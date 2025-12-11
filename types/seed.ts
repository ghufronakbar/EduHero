// src/types/seed-types.ts

import { QuestionCategory, QuestionDifficulty, QuestionType } from "./question";

// Tipe dasar untuk semua soal
export interface SeedBaseQuestion {
    id: string; // Kita wajibkan ID disini
    type: QuestionType;
    category: QuestionCategory;
    difficulty: QuestionDifficulty;
    topic: string;
    questionText: string;
    questionImage?: string;
    explanationText?: string;
    explanationImage?: string;
}

// 1. Multiple Choice
export interface SeedMultipleChoice extends SeedBaseQuestion {
    type: 'multiple_choice';
    options: {
        id: string;
        text: string;
        image?: string;
        isCorrect: boolean;
    }[];
}

// 2. Drag and Drop
export interface SeedDragAndDrop extends SeedBaseQuestion {
    type: 'drag_and_drop';
    zones: {
        id: string;
        label: string;
    }[];
    items: {
        id: string;
        text: string;
        image?: string;
        correctZoneId: string; // Kunci jawaban (harus match dengan id zones di atas)
    }[];
}

// 3. Puzzle / Sequence
export interface SeedPuzzle extends SeedBaseQuestion {
    type: 'puzzle_sequence';
    pieces: {
        id: string;
        text: string;
        image?: string;
        correctOrderIndex: number; // 1, 2, 3...
    }[];
}
