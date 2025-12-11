import {
    AdaptiveConfig,
    AdaptiveInput,
    AdaptiveLevel,
    AdaptiveOutput,
    DEFAULT_ADAPTIVE_CONFIG,
    LEVEL_NAMES,
    NextAction
} from "@/types/adaptive";

// ==========================================
// EduHero Adaptive Learning Engine
// ==========================================
// Core logic for adjusting difficulty based on student performance
// Following the algorithm specified in the EduHero Adaptive Engine prompt

// ==========================================
// 1. MOTIVATIONAL MESSAGES
// ==========================================

const FEEDBACK_MESSAGES = {
    correctLevelUp: [
        "🚀 Luar biasa! Kamu berhasil naik level! Terus semangat!",
        "🌟 Hebat! Streak 3x benar! Siap untuk tantangan lebih seru?",
        "🎉 Keren banget! Level naik! Kamu memang jagoan!",
        "💪 Wow! 3 jawaban benar berturut-turut! Kamu siap level selanjutnya!",
    ],
    correctKeep: [
        "✅ Bagus! Jawaban benar! Lanjutkan!",
        "👍 Mantap! Terus pertahankan!",
        "🎯 Tepat sasaran! Good job!",
        "⭐ Benar! Kamu semakin pintar!",
    ],
    wrongLevelDown: [
        "💡 Jangan menyerah! Mari kita review materinya dulu ya.",
        "📚 Tidak apa-apa, belajar dari kesalahan itu penting. Yuk kita pelajari lagi!",
        "🌱 Setiap Master pernah jadi pemula. Ayo kita kuatkan pondasimu!",
        "🔄 Kita mundur sebentar untuk maju lebih jauh. Semangat!",
    ],
    wrongKeep: [
        "🤔 Hmm, belum tepat. Coba lagi ya!",
        "💭 Tidak apa-apa, kesempatan belajar! Yuk coba lagi!",
        "📝 Hampir! Perhatikan lagi soalnya ya.",
        "🎓 Belajar butuh proses. Ayo terus mencoba!",
    ],
    atMaxLevel: [
        "🏆 Kamu sudah di level tertinggi! Pertahankan kehebatanmu!",
        "👑 Level Mahir! Kamu adalah yang terbaik!",
    ],
    atMinLevel: [
        "🌟 Ini adalah awal yang bagus! Ayo kita mulai dari sini.",
        "💪 Level Dasar adalah fondasi yang kuat. Semangat!",
    ],
};

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================

/**
 * Get random message from an array
 */
const getRandomMessage = (messages: string[]): string => {
    return messages[Math.floor(Math.random() * messages.length)];
};

/**
 * Calculate score based on correctness, answer time, and attempt count
 * 
 * Formula:
 * - Base Score: 100 points for correct answer, 0 for incorrect
 * - Speed Bonus: Up to 50 points for fast answers (< 30 seconds)
 * - Attempt Penalty: -10 points per additional attempt
 */
const calculateScore = (
    isCorrect: boolean,
    answerTime: number,
    attemptCount: number,
    config: AdaptiveConfig = DEFAULT_ADAPTIVE_CONFIG
): number => {
    if (!isCorrect) return 0;

    const { baseScore, maxSpeedBonus, speedBonusTimeLimit } = config;

    // Speed bonus: faster = more points (max 50 points if answered within limit)
    // Linear decrease: 50 points at 0s, 0 points at 30s+
    const speedBonus = Math.max(
        0,
        maxSpeedBonus - (answerTime / speedBonusTimeLimit) * maxSpeedBonus
    );

    // Attempt penalty: each retry after first attempt loses 10 points
    const attemptPenalty = Math.max(0, (attemptCount - 1) * 10);

    // Final score (minimum 0)
    return Math.max(0, Math.round(baseScore + speedBonus - attemptPenalty));
};

/**
 * Determine the next action based on streak and wrong count
 */
const determineNextAction = (
    isCorrect: boolean,
    currentStreak: number,
    currentWrongCount: number,
    currentLevel: AdaptiveLevel,
    config: AdaptiveConfig = DEFAULT_ADAPTIVE_CONFIG
): { action: NextAction; newStreak: number; newWrongCount: number } => {
    let newStreak = currentStreak;
    let newWrongCount = currentWrongCount;

    if (isCorrect) {
        // Correct answer: increment streak, keep wrong count
        newStreak = currentStreak + 1;

        // Check for level up (3 correct in a row)
        if (newStreak >= config.streakToLevelUp && currentLevel < config.maxLevel) {
            return {
                action: "NaikLevel",
                newStreak: 0, // Reset streak after leveling up
                newWrongCount: 0, // Reset wrong count for new level
            };
        }

        return { action: "Tetap", newStreak, newWrongCount };
    } else {
        // Wrong answer: reset streak, increment wrong count
        newStreak = 0;
        newWrongCount = currentWrongCount + 1;

        // Check for level down (more than 2 wrong)
        if (newWrongCount > config.wrongsToLevelDown && currentLevel > config.minLevel) {
            return {
                action: "TurunLevel",
                newStreak: 0,
                newWrongCount: 0, // Reset for new level
            };
        }

        return { action: "Tetap", newStreak, newWrongCount };
    }
};

/**
 * Calculate the next level based on action
 */
const calculateNextLevel = (
    currentLevel: AdaptiveLevel,
    action: NextAction,
    config: AdaptiveConfig = DEFAULT_ADAPTIVE_CONFIG
): AdaptiveLevel => {
    switch (action) {
        case "NaikLevel":
            return Math.min(currentLevel + 1, config.maxLevel) as AdaptiveLevel;
        case "TurunLevel":
            return Math.max(currentLevel - 1, config.minLevel) as AdaptiveLevel;
        case "Tetap":
        default:
            return currentLevel;
    }
};

/**
 * Generate appropriate feedback message
 */
const generateFeedbackMessage = (
    isCorrect: boolean,
    action: NextAction,
    currentLevel: AdaptiveLevel,
    nextLevel: AdaptiveLevel,
    config: AdaptiveConfig = DEFAULT_ADAPTIVE_CONFIG
): string => {
    if (isCorrect) {
        if (action === "NaikLevel") {
            if (nextLevel === config.maxLevel) {
                return getRandomMessage(FEEDBACK_MESSAGES.atMaxLevel);
            }
            return getRandomMessage(FEEDBACK_MESSAGES.correctLevelUp);
        }
        return getRandomMessage(FEEDBACK_MESSAGES.correctKeep);
    } else {
        if (action === "TurunLevel") {
            if (nextLevel === config.minLevel) {
                return getRandomMessage(FEEDBACK_MESSAGES.atMinLevel);
            }
            return getRandomMessage(FEEDBACK_MESSAGES.wrongLevelDown);
        }
        return getRandomMessage(FEEDBACK_MESSAGES.wrongKeep);
    }
};

/**
 * Generate remedial topic suggestions based on question context
 */
const generateRemedialTopics = (
    category?: string,
    topic?: string
): string[] => {
    const topics: string[] = [];

    if (topic) {
        topics.push(`Ringkasan: ${topic}`);
        topics.push(`Video Penjelasan: ${topic}`);
        topics.push(`Contoh Soal: ${topic}`);
    }

    if (category) {
        topics.push(`Latihan Dasar: ${category}`);
    }

    // Default fallback
    if (topics.length === 0) {
        topics.push("Materi Pengantar");
        topics.push("Latihan Soal Mudah");
    }

    return topics;
};

// ==========================================
// 3. MAIN ENGINE FUNCTION
// ==========================================

/**
 * Process a user's answer and determine the adaptive response
 * 
 * This is the main function of the EduHero Adaptive Engine.
 * It takes input from a question session and returns:
 * - Updated score
 * - New streak/wrong counts
 * - Level adjustment decision
 * - Remedial recommendations (if needed)
 * - Motivational feedback
 */
export const processAnswer = (
    input: AdaptiveInput,
    config: AdaptiveConfig = DEFAULT_ADAPTIVE_CONFIG
): AdaptiveOutput => {
    const {
        userID,
        currentLevel,
        isCorrect,
        answerTime,
        attemptCount,
        correctStreak,
        wrongCount,
        category,
        topic,
    } = input;

    // 1. Calculate score
    const updatedScore = calculateScore(isCorrect, answerTime, attemptCount, config);

    // 2. Determine next action
    const { action, newStreak, newWrongCount } = determineNextAction(
        isCorrect,
        correctStreak,
        wrongCount,
        currentLevel,
        config
    );

    // 3. Calculate next level
    const nextLevel = calculateNextLevel(currentLevel, action, config);

    // 4. Determine if remedial is needed
    const recommendedMaterial = action === "TurunLevel";

    // 5. Generate feedback message
    const feedbackMessage = generateFeedbackMessage(
        isCorrect,
        action,
        currentLevel,
        nextLevel,
        config
    );

    // 6. Generate remedial topics if needed
    const remedialTopics = recommendedMaterial
        ? generateRemedialTopics(category, topic)
        : undefined;

    // 7. Build and return output
    return {
        userID,
        updatedScore,
        newCorrectStreak: newStreak,
        newWrongCount: newWrongCount,
        nextAction: action,
        nextLevel,
        recommendedMaterial,
        feedbackMessage,
        remedialTopics,
    };
};

// ==========================================
// 4. SESSION MANAGEMENT HELPERS
// ==========================================

/**
 * Create initial session state for a new user/category
 */
export const createInitialSessionState = (
    userId: string,
    category: string
): {
    userId: string;
    category: string;
    currentLevel: AdaptiveLevel;
    correctStreak: number;
    wrongCount: number;
    totalScore: number;
} => ({
    userId,
    category,
    currentLevel: 1, // Always start at Dasar (Basic)
    correctStreak: 0,
    wrongCount: 0,
    totalScore: 0,
});

/**
 * Update session state after processing an answer
 */
export const updateSessionState = (
    currentState: {
        currentLevel: AdaptiveLevel;
        correctStreak: number;
        wrongCount: number;
        totalScore: number;
    },
    output: AdaptiveOutput
): {
    currentLevel: AdaptiveLevel;
    correctStreak: number;
    wrongCount: number;
    totalScore: number;
} => ({
    currentLevel: output.nextLevel,
    correctStreak: output.newCorrectStreak,
    wrongCount: output.newWrongCount,
    totalScore: currentState.totalScore + output.updatedScore,
});

// ==========================================
// 5. EXPORTS
// ==========================================

export const adaptiveEngine = {
    processAnswer,
    calculateScore,
    createInitialSessionState,
    updateSessionState,
    LEVEL_NAMES,
    DEFAULT_CONFIG: DEFAULT_ADAPTIVE_CONFIG,
};

export default adaptiveEngine;
