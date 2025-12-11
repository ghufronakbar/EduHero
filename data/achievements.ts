/**
 * Achievements/Milestones System
 * Permanent achievements that don't reset (like game achievements)
 */

// ==========================================
// TYPES
// ==========================================

export type AchievementCategory = 'general' | 'matematika' | 'sains' | 'inggris' | 'streak' | 'level';

export type AchievementTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export interface Achievement {
    id: string;
    title: string;
    description: string;
    emoji: string;
    category: AchievementCategory;
    tier: AchievementTier;
    requirement: {
        type: 'total_correct' | 'category_correct' | 'streak' | 'level_reach' | 'score';
        value: number;
        category?: string; // For category-specific achievements
    };
    reward?: number; // Bonus score
}

export interface UserAchievement {
    achievementId: string;
    unlockedAt: Date;
    progress: number;
}

// ==========================================
// TIER COLORS
// ==========================================

export const TIER_COLORS: Record<AchievementTier, { bg: string; border: string; text: string; gradient: string[] }> = {
    bronze: {
        bg: '#FBE9E7',
        border: '#E64A19',
        text: '#BF360C',
        gradient: ['#CD7F32', '#8B4513'],
    },
    silver: {
        bg: '#ECEFF1',
        border: '#607D8B',
        text: '#37474F',
        gradient: ['#C0C0C0', '#808080'],
    },
    gold: {
        bg: '#FFF8E1',
        border: '#FFC107',
        text: '#FF6F00',
        gradient: ['#FFD700', '#FFA500'],
    },
    platinum: {
        bg: '#E8EAF6',
        border: '#5C6BC0',
        text: '#283593',
        gradient: ['#E5E4E2', '#B4B4B4'],
    },
    diamond: {
        bg: '#E3F2FD',
        border: '#2196F3',
        text: '#1565C0',
        gradient: ['#B9F2FF', '#00BFFF'],
    },
};

// ==========================================
// ACHIEVEMENTS DATA
// ==========================================

export const ACHIEVEMENTS: Achievement[] = [
    // ===================
    // GENERAL - Total Correct
    // ===================
    {
        id: 'first_correct',
        title: 'Langkah Pertama',
        description: 'Jawab 1 soal dengan benar',
        emoji: '🌱',
        category: 'general',
        tier: 'bronze',
        requirement: { type: 'total_correct', value: 1 },
        reward: 10,
    },
    {
        id: 'getting_started',
        title: 'Mulai Belajar',
        description: 'Jawab 5 soal dengan benar',
        emoji: '📚',
        category: 'general',
        tier: 'bronze',
        requirement: { type: 'total_correct', value: 5 },
        reward: 25,
    },
    {
        id: 'dedicated_learner',
        title: 'Pelajar Rajin',
        description: 'Jawab 25 soal dengan benar',
        emoji: '📖',
        category: 'general',
        tier: 'silver',
        requirement: { type: 'total_correct', value: 25 },
        reward: 50,
    },
    {
        id: 'knowledge_seeker',
        title: 'Pencari Ilmu',
        description: 'Jawab 50 soal dengan benar',
        emoji: '🎓',
        category: 'general',
        tier: 'gold',
        requirement: { type: 'total_correct', value: 50 },
        reward: 100,
    },
    {
        id: 'master_student',
        title: 'Murid Teladan',
        description: 'Jawab 100 soal dengan benar',
        emoji: '🏆',
        category: 'general',
        tier: 'platinum',
        requirement: { type: 'total_correct', value: 100 },
        reward: 200,
    },
    {
        id: 'genius',
        title: 'Sang Jenius',
        description: 'Jawab 250 soal dengan benar',
        emoji: '💎',
        category: 'general',
        tier: 'diamond',
        requirement: { type: 'total_correct', value: 250 },
        reward: 500,
    },

    // ===================
    // MATEMATIKA
    // ===================
    {
        id: 'math_beginner',
        title: 'Penghitung Pemula',
        description: 'Jawab 10 soal Matematika dengan benar',
        emoji: '🔢',
        category: 'matematika',
        tier: 'bronze',
        requirement: { type: 'category_correct', value: 10, category: 'matematika' },
        reward: 30,
    },
    {
        id: 'math_calculator',
        title: 'Si Kalkulator Mini',
        description: 'Jawab 30 soal Matematika dengan benar',
        emoji: '🧮',
        category: 'matematika',
        tier: 'silver',
        requirement: { type: 'category_correct', value: 30, category: 'matematika' },
        reward: 75,
    },
    {
        id: 'math_expert',
        title: 'Ahlinya Matematika',
        description: 'Jawab 75 soal Matematika dengan benar',
        emoji: '📐',
        category: 'matematika',
        tier: 'gold',
        requirement: { type: 'category_correct', value: 75, category: 'matematika' },
        reward: 150,
    },
    {
        id: 'math_master',
        title: 'Master Matematika',
        description: 'Jawab 150 soal Matematika dengan benar',
        emoji: '🔣',
        category: 'matematika',
        tier: 'diamond',
        requirement: { type: 'category_correct', value: 150, category: 'matematika' },
        reward: 300,
    },

    // ===================
    // SAINS
    // ===================
    {
        id: 'science_curious',
        title: 'Penasaran Alam',
        description: 'Jawab 10 soal Sains dengan benar',
        emoji: '🔬',
        category: 'sains',
        tier: 'bronze',
        requirement: { type: 'category_correct', value: 10, category: 'sains' },
        reward: 30,
    },
    {
        id: 'science_explorer',
        title: 'Penjelajah Sains',
        description: 'Jawab 30 soal Sains dengan benar',
        emoji: '🧪',
        category: 'sains',
        tier: 'silver',
        requirement: { type: 'category_correct', value: 30, category: 'sains' },
        reward: 75,
    },
    {
        id: 'science_expert',
        title: 'Ilmuwan Muda',
        description: 'Jawab 75 soal Sains dengan benar',
        emoji: '🔭',
        category: 'sains',
        tier: 'gold',
        requirement: { type: 'category_correct', value: 75, category: 'sains' },
        reward: 150,
    },
    {
        id: 'science_master',
        title: 'Profesor Sains',
        description: 'Jawab 150 soal Sains dengan benar',
        emoji: '🧬',
        category: 'sains',
        tier: 'diamond',
        requirement: { type: 'category_correct', value: 150, category: 'sains' },
        reward: 300,
    },

    // ===================
    // BAHASA INGGRIS
    // ===================
    {
        id: 'english_starter',
        title: 'Hello World!',
        description: 'Jawab 10 soal B. Inggris dengan benar',
        emoji: '🇬🇧',
        category: 'inggris',
        tier: 'bronze',
        requirement: { type: 'category_correct', value: 10, category: 'inggris' },
        reward: 30,
    },
    {
        id: 'english_speaker',
        title: 'Bilingual Warrior',
        description: 'Jawab 30 soal B. Inggris dengan benar',
        emoji: '💬',
        category: 'inggris',
        tier: 'silver',
        requirement: { type: 'category_correct', value: 30, category: 'inggris' },
        reward: 75,
    },
    {
        id: 'english_expert',
        title: 'English Expert',
        description: 'Jawab 75 soal B. Inggris dengan benar',
        emoji: '📝',
        category: 'inggris',
        tier: 'gold',
        requirement: { type: 'category_correct', value: 75, category: 'inggris' },
        reward: 150,
    },
    {
        id: 'english_master',
        title: 'Native Speaker',
        description: 'Jawab 150 soal B. Inggris dengan benar',
        emoji: '🗣️',
        category: 'inggris',
        tier: 'diamond',
        requirement: { type: 'category_correct', value: 150, category: 'inggris' },
        reward: 300,
    },

    // ===================
    // STREAK ACHIEVEMENTS
    // ===================
    {
        id: 'streak_3',
        title: 'Tiga Serangkai',
        description: 'Dapatkan streak 3 jawaban benar',
        emoji: '🔥',
        category: 'streak',
        tier: 'bronze',
        requirement: { type: 'streak', value: 3 },
        reward: 15,
    },
    {
        id: 'streak_5',
        title: 'Lima Jari Emas',
        description: 'Dapatkan streak 5 jawaban benar',
        emoji: '✋',
        category: 'streak',
        tier: 'silver',
        requirement: { type: 'streak', value: 5 },
        reward: 35,
    },
    {
        id: 'streak_10',
        title: 'On Fire!',
        description: 'Dapatkan streak 10 jawaban benar',
        emoji: '🔥🔥',
        category: 'streak',
        tier: 'gold',
        requirement: { type: 'streak', value: 10 },
        reward: 75,
    },
    {
        id: 'streak_20',
        title: 'Unstoppable!',
        description: 'Dapatkan streak 20 jawaban benar',
        emoji: '⚡',
        category: 'streak',
        tier: 'platinum',
        requirement: { type: 'streak', value: 20 },
        reward: 150,
    },
    {
        id: 'streak_50',
        title: 'Legendary Streak',
        description: 'Dapatkan streak 50 jawaban benar',
        emoji: '🌟',
        category: 'streak',
        tier: 'diamond',
        requirement: { type: 'streak', value: 50 },
        reward: 500,
    },

    // ===================
    // LEVEL ACHIEVEMENTS
    // ===================
    {
        id: 'level_2_first',
        title: 'Naik Kelas!',
        description: 'Mencapai Level 2 (Menengah) pertama kali',
        emoji: '⬆️',
        category: 'level',
        tier: 'silver',
        requirement: { type: 'level_reach', value: 2 },
        reward: 50,
    },
    {
        id: 'level_3_first',
        title: 'Level Mahir!',
        description: 'Mencapai Level 3 (Mahir) pertama kali',
        emoji: '🚀',
        category: 'level',
        tier: 'gold',
        requirement: { type: 'level_reach', value: 3 },
        reward: 100,
    },

    // ===================
    // SCORE ACHIEVEMENTS
    // ===================
    {
        id: 'score_500',
        title: 'Skor 500',
        description: 'Kumpulkan total 500 poin',
        emoji: '⭐',
        category: 'general',
        tier: 'bronze',
        requirement: { type: 'score', value: 500 },
        reward: 25,
    },
    {
        id: 'score_2000',
        title: 'Skor 2000',
        description: 'Kumpulkan total 2000 poin',
        emoji: '🌟',
        category: 'general',
        tier: 'silver',
        requirement: { type: 'score', value: 2000 },
        reward: 50,
    },
    {
        id: 'score_5000',
        title: 'Skor 5000',
        description: 'Kumpulkan total 5000 poin',
        emoji: '💫',
        category: 'general',
        tier: 'gold',
        requirement: { type: 'score', value: 5000 },
        reward: 100,
    },
    {
        id: 'score_10000',
        title: 'Skor 10000',
        description: 'Kumpulkan total 10000 poin',
        emoji: '✨',
        category: 'general',
        tier: 'platinum',
        requirement: { type: 'score', value: 10000 },
        reward: 250,
    },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get achievements sorted by tier (bronze -> diamond)
 */
export const getAchievementsByTier = (): Achievement[] => {
    const tierOrder: AchievementTier[] = ['bronze', 'silver', 'gold', 'platinum', 'diamond'];
    return [...ACHIEVEMENTS].sort((a, b) =>
        tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier)
    );
};

/**
 * Get achievements by category
 */
export const getAchievementsByCategory = (category: AchievementCategory): Achievement[] => {
    return ACHIEVEMENTS.filter(a => a.category === category);
};

/**
 * Check if achievement is unlocked based on user stats
 */
export const checkAchievementUnlocked = (
    achievement: Achievement,
    stats: {
        totalCorrect: number;
        categoryCorrect: Record<string, number>;
        maxStreak: number;
        maxLevel: number;
        totalScore: number;
    }
): boolean => {
    const { type, value, category } = achievement.requirement;

    switch (type) {
        case 'total_correct':
            return stats.totalCorrect >= value;
        case 'category_correct':
            return (stats.categoryCorrect[category || ''] || 0) >= value;
        case 'streak':
            return stats.maxStreak >= value;
        case 'level_reach':
            return stats.maxLevel >= value;
        case 'score':
            return stats.totalScore >= value;
        default:
            return false;
    }
};

/**
 * Calculate progress towards achievement (0-100)
 */
export const getAchievementProgress = (
    achievement: Achievement,
    stats: {
        totalCorrect: number;
        categoryCorrect: Record<string, number>;
        maxStreak: number;
        maxLevel: number;
        totalScore: number;
    }
): number => {
    const { type, value, category } = achievement.requirement;
    let current = 0;

    switch (type) {
        case 'total_correct':
            current = stats.totalCorrect;
            break;
        case 'category_correct':
            current = stats.categoryCorrect[category || ''] || 0;
            break;
        case 'streak':
            current = stats.maxStreak;
            break;
        case 'level_reach':
            current = stats.maxLevel;
            break;
        case 'score':
            current = stats.totalScore;
            break;
    }

    return Math.min(100, Math.round((current / value) * 100));
};
