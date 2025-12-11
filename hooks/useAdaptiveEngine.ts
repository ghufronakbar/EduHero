import { adaptiveSession } from '@/database/query/adaptive-session';
import { processAnswer } from '@/services/adaptiveEngine';
import {
    AdaptiveInput,
    AdaptiveLevel,
    AdaptiveOutput,
    AdaptiveSessionState,
    LEVEL_NAMES
} from '@/types/adaptive';
import { useCallback, useEffect, useState } from 'react';

// ==========================================
// useAdaptiveEngine Hook (Simplified)
// ==========================================
// React hook for managing adaptive learning - single user, auto-init

interface UseAdaptiveEngineOptions {
    userId: string;
    category: string;
    autoLoad?: boolean;
}

interface UseAdaptiveEngineReturn {
    // Loading/error state
    isLoading: boolean;
    error: string | null;

    // Current state
    currentLevel: AdaptiveLevel;
    levelName: string;
    correctStreak: number;
    wrongCount: number;
    totalScore: number;
    questionsAnswered: number;

    // Actions
    submitAnswer: (params: SubmitAnswerParams) => Promise<AdaptiveOutput>;
    resetSession: () => Promise<void>;

    // Last result
    lastResult: AdaptiveOutput | null;
}

interface SubmitAnswerParams {
    questionId: string;
    isCorrect: boolean;
    answerTime: number;
    attemptCount?: number;
    topic?: string;
}

// Default initial session state
const createDefaultSession = (userId: string, category: string): AdaptiveSessionState => ({
    sessionId: `${userId}-${category}`,
    userId,
    category,
    currentLevel: 1,
    correctStreak: 0,
    wrongCount: 0,
    totalScore: 0,
    questionsAnswered: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
});

export const useAdaptiveEngine = (
    options: UseAdaptiveEngineOptions
): UseAdaptiveEngineReturn => {
    const { userId, category, autoLoad = true } = options;

    // State - start with default session immediately (no null state)
    const [session, setSession] = useState<AdaptiveSessionState>(() =>
        createDefaultSession(userId, category)
    );
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastResult, setLastResult] = useState<AdaptiveOutput | null>(null);

    // Derived state
    const currentLevel = session.currentLevel;
    const levelName = LEVEL_NAMES[currentLevel as AdaptiveLevel] || "Dasar";
    const correctStreak = session.correctStreak;
    const wrongCount = session.wrongCount;
    const totalScore = session.totalScore;
    const questionsAnswered = session.questionsAnswered;

    /**
     * Initialize or load existing session from database
     */
    const initSession = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const sessionData = await adaptiveSession.getOrCreateSession(userId, category);
            setSession(sessionData);
            console.log(`[Adaptive] Session loaded for ${category}:`, sessionData);
        } catch (err) {
            // On error, just use default session (will be created on first answer)
            console.log('[Adaptive] Using default session, will save on first answer');
            setSession(createDefaultSession(userId, category));
        } finally {
            setIsLoading(false);
        }
    }, [userId, category]);

    /**
     * Submit an answer and get adaptive response
     */
    const submitAnswer = useCallback(async (params: SubmitAnswerParams): Promise<AdaptiveOutput> => {
        const { questionId, isCorrect, answerTime, attemptCount = 1, topic } = params;

        // Build input for adaptive engine
        const input: AdaptiveInput = {
            userID: userId,
            questionID: questionId,
            currentLevel: session.currentLevel,
            isCorrect,
            answerTime,
            attemptCount,
            correctStreak: session.correctStreak,
            wrongCount: session.wrongCount,
            category,
            topic,
        };

        // Process through adaptive engine
        const result = processAnswer(input);

        // Calculate new values
        const newQuestionsAnswered = session.questionsAnswered + 1;
        const newTotalScore = session.totalScore + result.updatedScore;

        // Try to save to database (but don't fail if it doesn't work)
        try {
            // Ensure session exists in database
            const dbSession = await adaptiveSession.getOrCreateSession(userId, category);

            // Log the answer
            await adaptiveSession.logAnswer({
                sessionId: dbSession.sessionId,
                questionId,
                isCorrect,
                answerTime,
                attemptCount,
                scoreEarned: result.updatedScore,
                levelAtAnswer: session.currentLevel,
                actionTaken: result.nextAction,
            });

            // Update session in database
            await adaptiveSession.updateSession(dbSession.sessionId, {
                currentLevel: result.nextLevel,
                correctStreak: result.newCorrectStreak,
                wrongCount: result.newWrongCount,
                totalScore: newTotalScore,
                questionsAnswered: newQuestionsAnswered,
            });
        } catch (err) {
            console.warn('[Adaptive] Failed to save to database:', err);
            // Continue anyway - local state will still be updated
        }

        // Update local state (always works)
        setSession(prev => ({
            ...prev,
            currentLevel: result.nextLevel,
            correctStreak: result.newCorrectStreak,
            wrongCount: result.newWrongCount,
            totalScore: newTotalScore,
            questionsAnswered: newQuestionsAnswered,
            updatedAt: new Date(),
        }));

        setLastResult(result);

        // Log for debugging
        console.log('[Adaptive] Answer processed:', {
            isCorrect,
            score: result.updatedScore,
            action: result.nextAction,
            newLevel: result.nextLevel,
            streak: result.newCorrectStreak,
            wrongCount: result.newWrongCount,
        });

        return result;
    }, [session, userId, category]);

    /**
     * Reset the session to initial state
     */
    const resetSessionHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            // Try to reset in database
            const dbSession = await adaptiveSession.getOrCreateSession(userId, category);
            await adaptiveSession.resetSession(dbSession.sessionId);
        } catch (err) {
            console.warn('[Adaptive] Failed to reset in database:', err);
        }

        // Always reset local state
        setSession(createDefaultSession(userId, category));
        setLastResult(null);
        setIsLoading(false);
        console.log('[Adaptive] Session reset');
    }, [userId, category]);

    // Auto-load session on mount
    useEffect(() => {
        if (autoLoad && userId && category) {
            initSession();
        }
    }, [autoLoad, userId, category, initSession]);

    return {
        // Loading/error state
        isLoading,
        error,

        // Current state
        currentLevel: currentLevel as AdaptiveLevel,
        levelName,
        correctStreak,
        wrongCount,
        totalScore,
        questionsAnswered,

        // Actions
        submitAnswer,
        resetSession: resetSessionHandler,

        // Last result
        lastResult,
    };
};

export default useAdaptiveEngine;
