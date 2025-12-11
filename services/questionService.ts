/**
 * Question Service
 * Handles loading questions from const arrays based on adaptive level
 */

import { AdaptiveLevel } from '@/types/adaptive';
import { SeedMultipleChoice } from '@/types/seed';

// Import all multiple choice questions
import { multipleChoiceInggrisEasy } from '@/data/multiple-choice/inggris/easy';
import { multipleChoiceInggrisHard } from '@/data/multiple-choice/inggris/hard';
import { multipleChoiceInggrisMedium } from '@/data/multiple-choice/inggris/medium';
import { multipleChoiceMatematikaEasy } from '@/data/multiple-choice/matematika/easy';
import { multipleChoiceMatematikaHard } from '@/data/multiple-choice/matematika/hard';
import { multipleChoiceMatematikaMedium } from '@/data/multiple-choice/matematika/medium';
import { multipleChoiceSainsEasy } from '@/data/multiple-choice/sains/easy';
import { multipleChoiceSainsHard } from '@/data/multiple-choice/sains/hard';
import { multipleChoiceSainsMedium } from '@/data/multiple-choice/sains/medium';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

export type CategoryType = 'matematika' | 'sains' | 'inggris';
export type DifficultyType = 'easy' | 'medium' | 'hard';

// Map adaptive level to difficulty
const LEVEL_TO_DIFFICULTY: Record<AdaptiveLevel, DifficultyType> = {
    1: 'easy',      // Dasar
    2: 'medium',    // Menengah
    3: 'hard',      // Mahir
};

// ==========================================
// QUESTION POOLS
// ==========================================

const QUESTION_POOLS: Record<CategoryType, Record<DifficultyType, SeedMultipleChoice[]>> = {
    matematika: {
        easy: multipleChoiceMatematikaEasy,
        medium: multipleChoiceMatematikaMedium,
        hard: multipleChoiceMatematikaHard,
    },
    sains: {
        easy: multipleChoiceSainsEasy,
        medium: multipleChoiceSainsMedium,
        hard: multipleChoiceSainsHard,
    },
    inggris: {
        easy: multipleChoiceInggrisEasy,
        medium: multipleChoiceInggrisMedium,
        hard: multipleChoiceInggrisHard,
    },
};

// ==========================================
// HELPER: Shuffle array (Fisher-Yates)
// ==========================================

const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// ==========================================
// MAIN SERVICE
// ==========================================

export const questionService = {
    /**
     * Get a random question based on category and adaptive level
     * Excludes previously answered question IDs
     */
    getRandomQuestion: (
        category: CategoryType,
        level: AdaptiveLevel,
        answeredIds: string[] = []
    ): SeedMultipleChoice | null => {
        const difficulty = LEVEL_TO_DIFFICULTY[level];
        const pool = QUESTION_POOLS[category]?.[difficulty] || [];

        // Filter out already answered questions
        const available = pool.filter(q => !answeredIds.includes(q.id));

        // If all questions answered, reset and use full pool
        const questionsToUse = available.length > 0 ? available : pool;

        if (questionsToUse.length === 0) {
            return null;
        }

        // Return random question
        const randomIndex = Math.floor(Math.random() * questionsToUse.length);
        return questionsToUse[randomIndex];
    },

    /**
     * Get questions for a quiz session
     * Returns shuffled questions based on level
     */
    getQuizQuestions: (
        category: CategoryType,
        level: AdaptiveLevel,
        count: number = 5
    ): SeedMultipleChoice[] => {
        const difficulty = LEVEL_TO_DIFFICULTY[level];
        const pool = QUESTION_POOLS[category]?.[difficulty] || [];

        const shuffled = shuffleArray(pool);
        return shuffled.slice(0, count);
    },

    /**
     * Get all questions for a category (all difficulties)
     */
    getAllQuestionsForCategory: (category: CategoryType): SeedMultipleChoice[] => {
        const categoryPool = QUESTION_POOLS[category];
        if (!categoryPool) return [];

        return [
            ...categoryPool.easy,
            ...categoryPool.medium,
            ...categoryPool.hard,
        ];
    },

    /**
     * Get difficulty name in Indonesian
     */
    getDifficultyName: (level: AdaptiveLevel): string => {
        switch (level) {
            case 1: return 'Mudah';
            case 2: return 'Sedang';
            case 3: return 'Sulit';
            default: return 'Mudah';
        }
    },

    /**
     * Get question count for a category and level
     */
    getQuestionCount: (category: CategoryType, level: AdaptiveLevel): number => {
        const difficulty = LEVEL_TO_DIFFICULTY[level];
        return QUESTION_POOLS[category]?.[difficulty]?.length || 0;
    },

    /**
     * Get total question count for a category
     */
    getTotalQuestionCount: (category: CategoryType): number => {
        const pool = QUESTION_POOLS[category];
        if (!pool) return 0;
        return pool.easy.length + pool.medium.length + pool.hard.length;
    },
};

export default questionService;
