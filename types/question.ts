
export type QuestionDifficulty = "easy" | "medium" | "hard";

export type QuestionType = "multiple_choice" | "drag_and_drop" | "puzzle_sequence"

export type QuestionCategory = "matematika" | "inggris" | "sains";


type BaseQuestion = {
    questionId: string;
    type: QuestionType;
    category: QuestionCategory;
    difficulty: QuestionDifficulty;
    topic: string;
    questionText: string;
    questionImage?: string | null;
    explanationText: string;
    explanationImage?: string | null;

}

type MultipleChoiceQuestion = BaseQuestion & {
    type: "multiple_choice";
    options: { optionId: string; text: string; image?: string | null }[];
    answerKey: string; // optionId
}

type DragAndDropQuestion = BaseQuestion & {
    type: "drag_and_drop";
    items: { itemId: string; text: string; image?: string | null }[];
    dropZones: { zoneId: string; label: string; }[];
    matchingPairs: { itemId: string, zoneId: string }[];
}

type PuzzleSequenceQuestion = BaseQuestion & {
    type: "puzzle_sequence";
    puzzlePieces: { pieceId: string; text: string; image?: string | null }[];
    correctOrder: string[];
}

type MinigameQuestion = BaseQuestion & {
    type: "minigame";
    gameObjects: { objectId: string; text: string; image?: string | null; isCorrect: boolean }[];
}
