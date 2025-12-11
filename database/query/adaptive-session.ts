import { AdaptiveLevel, AdaptiveSessionState, RemedialMaterial } from '@/types/adaptive';
import { getDatabase } from '../sqlite';

// ==========================================
// ADAPTIVE SESSION DATABASE QUERIES
// ==========================================

// Generate UUID for new records
const generateId = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

// ==========================================
// 1. SESSION MANAGEMENT
// ==========================================

/**
 * Get or create an adaptive session for a user + category
 * Each user has one session per category (subject)
 */
const getOrCreateSession = async (
    userId: string,
    category: string
): Promise<AdaptiveSessionState> => {
    const db = await getDatabase();

    // Try to find existing session
    const existing = await db.getFirstAsync<{
        id: string;
        user_id: string;
        category: string;
        current_level: number;
        correct_streak: number;
        wrong_count: number;
        total_score: number;
        questions_answered: number;
        created_at: string;
        updated_at: string;
    }>(`
        SELECT * FROM adaptive_session 
        WHERE user_id = ? AND category = ?
    `, [userId, category]);

    if (existing) {
        return {
            sessionId: existing.id,
            userId: existing.user_id,
            category: existing.category,
            currentLevel: existing.current_level as AdaptiveLevel,
            correctStreak: existing.correct_streak,
            wrongCount: existing.wrong_count,
            totalScore: existing.total_score,
            questionsAnswered: existing.questions_answered,
            createdAt: new Date(existing.created_at),
            updatedAt: new Date(existing.updated_at),
        };
    }

    // Create new session
    const sessionId = generateId();
    const now = new Date().toISOString();

    await db.runAsync(`
        INSERT INTO adaptive_session (id, user_id, category, current_level, correct_streak, wrong_count, total_score, questions_answered, created_at, updated_at)
        VALUES (?, ?, ?, 1, 0, 0, 0, 0, ?, ?)
    `, [sessionId, userId, category, now, now]);

    return {
        sessionId,
        userId,
        category,
        currentLevel: 1,
        correctStreak: 0,
        wrongCount: 0,
        totalScore: 0,
        questionsAnswered: 0,
        createdAt: new Date(now),
        updatedAt: new Date(now),
    };
};

/**
 * Update session state after processing an answer
 */
const updateSession = async (
    sessionId: string,
    updates: {
        currentLevel: AdaptiveLevel;
        correctStreak: number;
        wrongCount: number;
        totalScore: number;
        questionsAnswered: number;
    }
): Promise<void> => {
    const db = await getDatabase();
    const now = new Date().toISOString();

    await db.runAsync(`
        UPDATE adaptive_session 
        SET current_level = ?,
            correct_streak = ?,
            wrong_count = ?,
            total_score = ?,
            questions_answered = ?,
            updated_at = ?
        WHERE id = ?
    `, [
        updates.currentLevel,
        updates.correctStreak,
        updates.wrongCount,
        updates.totalScore,
        updates.questionsAnswered,
        now,
        sessionId
    ]);
};

/**
 * Reset a session (for new learning session)
 */
const resetSession = async (sessionId: string): Promise<void> => {
    const db = await getDatabase();
    const now = new Date().toISOString();

    await db.runAsync(`
        UPDATE adaptive_session 
        SET current_level = 1,
            correct_streak = 0,
            wrong_count = 0,
            total_score = 0,
            questions_answered = 0,
            updated_at = ?
        WHERE id = ?
    `, [now, sessionId]);
};

/**
 * Get all sessions for a user
 */
const getUserSessions = async (userId: string): Promise<AdaptiveSessionState[]> => {
    const db = await getDatabase();

    const results = await db.getAllAsync<{
        id: string;
        user_id: string;
        category: string;
        current_level: number;
        correct_streak: number;
        wrong_count: number;
        total_score: number;
        questions_answered: number;
        created_at: string;
        updated_at: string;
    }>(`SELECT * FROM adaptive_session WHERE user_id = ?`, [userId]);

    return results.map(row => ({
        sessionId: row.id,
        userId: row.user_id,
        category: row.category,
        currentLevel: row.current_level as AdaptiveLevel,
        correctStreak: row.correct_streak,
        wrongCount: row.wrong_count,
        totalScore: row.total_score,
        questionsAnswered: row.questions_answered,
        createdAt: new Date(row.created_at),
        updatedAt: new Date(row.updated_at),
    }));
};

// ==========================================
// 2. ANSWER LOG MANAGEMENT
// ==========================================

/**
 * Log an answer with adaptive data
 */
const logAnswer = async (data: {
    sessionId: string;
    questionId: string;
    isCorrect: boolean;
    answerTime: number;
    attemptCount: number;
    scoreEarned: number;
    levelAtAnswer: AdaptiveLevel;
    actionTaken: string;
}): Promise<string> => {
    const db = await getDatabase();
    const id = generateId();
    const now = new Date().toISOString();

    await db.runAsync(`
        INSERT INTO adaptive_answer_log 
        (id, session_id, question_id, is_correct, answer_time, attempt_count, score_earned, level_at_answer, action_taken, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        id,
        data.sessionId,
        data.questionId,
        data.isCorrect ? 1 : 0,
        data.answerTime,
        data.attemptCount,
        data.scoreEarned,
        data.levelAtAnswer,
        data.actionTaken,
        now
    ]);

    return id;
};

/**
 * Get answer history for a session
 */
const getSessionHistory = async (sessionId: string, limit: number = 100) => {
    const db = await getDatabase();

    return await db.getAllAsync<{
        id: string;
        question_id: string;
        is_correct: number;
        answer_time: number;
        attempt_count: number;
        score_earned: number;
        level_at_answer: number;
        action_taken: string;
        created_at: string;
    }>(`
        SELECT * FROM adaptive_answer_log 
        WHERE session_id = ? 
        ORDER BY created_at DESC 
        LIMIT ?
    `, [sessionId, limit]);
};

// ==========================================
// 3. REMEDIAL MATERIALS
// ==========================================

/**
 * Get remedial materials for a category and level
 */
const getRemedialMaterials = async (
    category: string,
    level: AdaptiveLevel
): Promise<RemedialMaterial[]> => {
    const db = await getDatabase();

    const results = await db.getAllAsync<{
        id: string;
        category: string;
        topic: string;
        level: number;
        material_type: string;
        title: string;
        content_url: string | null;
        description: string | null;
    }>(`
        SELECT * FROM remedial_materials 
        WHERE category = ? AND level <= ?
        ORDER BY level DESC, material_type
    `, [category, level]);

    return results.map(row => ({
        id: row.id,
        category: row.category,
        topic: row.topic,
        level: row.level as AdaptiveLevel,
        type: row.material_type as "summary" | "video" | "example",
        title: row.title,
        contentUrl: row.content_url || undefined,
        description: row.description || "",
    }));
};

/**
 * Add a remedial material
 */
const addRemedialMaterial = async (material: Omit<RemedialMaterial, 'id'>): Promise<string> => {
    const db = await getDatabase();
    const id = generateId();

    await db.runAsync(`
        INSERT INTO remedial_materials (id, category, topic, level, material_type, title, content_url, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        id,
        material.category,
        material.topic,
        material.level,
        material.type,
        material.title,
        material.contentUrl || null,
        material.description
    ]);

    return id;
};

// ==========================================
// 4. STATISTICS
// ==========================================

/**
 * Get session statistics
 */
const getSessionStats = async (sessionId: string) => {
    const db = await getDatabase();

    const stats = await db.getFirstAsync<{
        total_answers: number;
        correct_answers: number;
        total_score: number;
        avg_time: number;
        level_ups: number;
        level_downs: number;
    }>(`
        SELECT 
            COUNT(*) as total_answers,
            SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct_answers,
            SUM(score_earned) as total_score,
            AVG(answer_time) as avg_time,
            SUM(CASE WHEN action_taken = 'NaikLevel' THEN 1 ELSE 0 END) as level_ups,
            SUM(CASE WHEN action_taken = 'TurunLevel' THEN 1 ELSE 0 END) as level_downs
        FROM adaptive_answer_log
        WHERE session_id = ?
    `, [sessionId]);

    if (!stats) {
        return {
            totalAnswers: 0,
            correctAnswers: 0,
            accuracy: 0,
            totalScore: 0,
            avgTime: 0,
            levelUps: 0,
            levelDowns: 0,
        };
    }

    return {
        totalAnswers: stats.total_answers || 0,
        correctAnswers: stats.correct_answers || 0,
        accuracy: stats.total_answers > 0
            ? Math.round((stats.correct_answers / stats.total_answers) * 100)
            : 0,
        totalScore: stats.total_score || 0,
        avgTime: Math.round((stats.avg_time || 0) * 10) / 10,
        levelUps: stats.level_ups || 0,
        levelDowns: stats.level_downs || 0,
    };
};

// ==========================================
// EXPORTS
// ==========================================

export const adaptiveSession = {
    // Session
    getOrCreateSession,
    updateSession,
    resetSession,
    getUserSessions,

    // Answer Log
    logAnswer,
    getSessionHistory,

    // Remedial
    getRemedialMaterials,
    addRemedialMaterial,

    // Stats
    getSessionStats,
};
