// ==========================================
// EduHero Adaptive Learning Engine Types
// ==========================================

/**
 * Difficulty Levels:
 * 1 = Dasar (Basic) - Entry level for new users
 * 2 = Menengah (Intermediate) - Middle difficulty
 * 3 = Mahir (Advanced) - Highest challenge level
 */
export type AdaptiveLevel = 1 | 2 | 3;

export const LEVEL_NAMES: Record<AdaptiveLevel, string> = {
    1: "Dasar",
    2: "Menengah",
    3: "Mahir"
};

export const LEVEL_NAMES_EN: Record<AdaptiveLevel, string> = {
    1: "Basic",
    2: "Intermediate",
    3: "Advanced"
};

/**
 * Next action decision from the adaptive algorithm
 * - NaikLevel: Student performed well, increase difficulty
 * - TurunLevel: Student struggling, decrease difficulty + recommend remedial
 * - Tetap: Keep current level, student doing okay
 */
export type NextAction = "NaikLevel" | "TurunLevel" | "Tetap";

/**
 * Input data structure received from a question session
 */
export interface AdaptiveInput {
    /** Unique user identifier */
    userID: string;

    /** ID of the question being answered */
    questionID: string;

    /** Current difficulty level (1-3) */
    currentLevel: AdaptiveLevel;

    /** Whether the user answered correctly */
    isCorrect: boolean;

    /** Time taken to answer in seconds */
    answerTime: number;

    /** Number of attempts for this question */
    attemptCount: number;

    /** Current correct streak BEFORE this answer */
    correctStreak: number;

    /** Current wrong count in this level/session */
    wrongCount: number;

    /** Category/subject of the question (for remedial recommendation) */
    category?: string;

    /** Topic of the question (for remedial recommendation) */
    topic?: string;
}

/**
 * Output data structure with processed results and next action
 */
export interface AdaptiveOutput {
    /** User identifier (passed through) */
    userID: string;

    /** Calculated score based on speed, accuracy, attempts */
    updatedScore: number;

    /** New correct streak after this answer */
    newCorrectStreak: number;

    /** New wrong count after this answer */
    newWrongCount: number;

    /** Decision: NaikLevel, TurunLevel, or Tetap */
    nextAction: NextAction;

    /** The next level to use (1-3) */
    nextLevel: AdaptiveLevel;

    /** True if TurunLevel - remedial materials recommended */
    recommendedMaterial: boolean;

    /** Motivational message for the student */
    feedbackMessage: string;

    /** Specific remedial topics to review (if recommendedMaterial is true) */
    remedialTopics?: string[];
}

/**
 * Session state for tracking progress within a learning session
 */
export interface AdaptiveSessionState {
    sessionId: string;
    userId: string;
    category: string;
    currentLevel: AdaptiveLevel;
    correctStreak: number;
    wrongCount: number;
    totalScore: number;
    questionsAnswered: number;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Remedial material recommendation
 */
export interface RemedialMaterial {
    id: string;
    category: string;
    topic: string;
    level: AdaptiveLevel;
    type: "summary" | "video" | "example";
    title: string;
    contentUrl?: string;
    description: string;
}

/**
 * Configuration for the adaptive algorithm
 */
export interface AdaptiveConfig {
    /** Number of correct answers in a row to level up */
    streakToLevelUp: number;

    /** Number of wrong answers to trigger level down */
    wrongsToLevelDown: number;

    /** Minimum level (cannot go lower) */
    minLevel: AdaptiveLevel;

    /** Maximum level (cannot go higher) */
    maxLevel: AdaptiveLevel;

    /** Base score for a correct answer */
    baseScore: number;

    /** Maximum speed bonus */
    maxSpeedBonus: number;

    /** Time limit for max speed bonus (in seconds) */
    speedBonusTimeLimit: number;
}

/**
 * Default configuration values
 */
export const DEFAULT_ADAPTIVE_CONFIG: AdaptiveConfig = {
    streakToLevelUp: 3,
    wrongsToLevelDown: 2,
    minLevel: 1,
    maxLevel: 3,
    baseScore: 100,
    maxSpeedBonus: 50,
    speedBonusTimeLimit: 30,
};
