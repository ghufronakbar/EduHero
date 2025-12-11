import { BorderRadius, Colors, Gradients, Shadows, Spacing } from '@/constants/theme';
import { ACHIEVEMENTS, checkAchievementUnlocked } from '@/data/achievements';
import { adaptiveSession } from '@/database/query/adaptive-session';
import { AdaptiveLevel, LEVEL_NAMES } from '@/types/adaptive';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Categories for quiz
const CATEGORIES = [
    { id: 'matematika', label: 'Matematika', emoji: '🔢', gradient: Gradients.primary },
    { id: 'sains', label: 'Sains', emoji: '🔬', gradient: Gradients.secondary },
    { id: 'inggris', label: 'B. Inggris', emoji: '📚', gradient: Gradients.accent },
];

// Quick stats component
interface QuickStatProps {
    emoji: string;
    value: string | number;
    label: string;
    gradient: string[];
}

const QuickStat: React.FC<QuickStatProps> = ({ emoji, value, label, gradient }) => (
    <LinearGradient
        colors={gradient as [string, string]}
        style={styles.quickStatCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <Text style={styles.quickStatEmoji}>{emoji}</Text>
        <Text style={styles.quickStatValue}>{value}</Text>
        <Text style={styles.quickStatLabel}>{label}</Text>
    </LinearGradient>
);

// Category card component
interface CategoryCardProps {
    id: string;
    label: string;
    emoji: string;
    gradient: string[];
    level?: number;
    onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, label, emoji, gradient, level = 1, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
        <LinearGradient
            colors={gradient as [string, string]}
            style={styles.categoryCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.categoryContent}>
                <Text style={styles.categoryEmoji}>{emoji}</Text>
                <View style={styles.categoryInfo}>
                    <Text style={styles.categoryLabel}>{label}</Text>
                    <View style={styles.categoryLevelBadge}>
                        <Text style={styles.categoryLevelText}>
                            Level {level} • {LEVEL_NAMES[level as AdaptiveLevel] || 'Dasar'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.categoryArrow}>
                <Text style={styles.categoryArrowText}>→</Text>
            </View>
        </LinearGradient>
    </TouchableOpacity>
);

export default function HomeScreen() {
    const [userStats, setUserStats] = useState({
        totalScore: 0,
        streak: 0,
        questionsAnswered: 0,
    });
    const [categoryLevels, setCategoryLevels] = useState<Record<string, number>>({});
    const [achievementStats, setAchievementStats] = useState({
        unlocked: 0,
        total: ACHIEVEMENTS.length,
    });

    // Load user stats when screen is focused (reload on return from quiz)
    useFocusEffect(
        useCallback(() => {
            loadUserStats();
        }, [])
    );

    const loadUserStats = async () => {
        try {
            // Get sessions for all categories
            const sessions = await adaptiveSession.getUserSessions('user-default');

            let totalScore = 0;
            let totalQuestions = 0;
            let totalCorrect = 0;
            let maxStreak = 0;
            let maxLevel = 1;
            const levels: Record<string, number> = {};
            const categoryCorrect: Record<string, number> = {};

            for (const session of sessions) {
                totalScore += session.totalScore;
                totalQuestions += session.questionsAnswered;
                levels[session.category] = session.currentLevel;
                maxStreak = Math.max(maxStreak, session.correctStreak);
                maxLevel = Math.max(maxLevel, session.currentLevel);

                // Get correct count from history
                try {
                    const history = await adaptiveSession.getSessionHistory(session.sessionId);
                    const correctCount = history.filter(h => h.is_correct === 1).length;
                    totalCorrect += correctCount;
                    categoryCorrect[session.category] = (categoryCorrect[session.category] || 0) + correctCount;
                } catch (e) {
                    // Fallback
                    totalCorrect += session.questionsAnswered;
                    categoryCorrect[session.category] = session.questionsAnswered;
                }
            }

            setUserStats({
                totalScore: Math.round(totalScore),
                streak: maxStreak,
                questionsAnswered: totalQuestions,
            });
            setCategoryLevels(levels);

            // Calculate unlocked achievements
            const stats = {
                totalCorrect,
                categoryCorrect,
                maxStreak,
                maxLevel,
                totalScore,
            };
            const unlockedCount = ACHIEVEMENTS.filter(a => checkAchievementUnlocked(a, stats)).length;
            setAchievementStats({
                unlocked: unlockedCount,
                total: ACHIEVEMENTS.length,
            });
        } catch (error) {
            console.log('Stats not loaded yet:', error);
        }
    };

    const handleCategoryPress = (categoryId: string) => {
        router.push({
            pathname: '/quiz',
            params: { category: categoryId },
        });
    };

    const handleQuickPlay = () => {
        // Random category
        const randomCategory = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
        handleCategoryPress(randomCategory.id);
    };

    // Calculate achievement progress
    const achievementProgress = Math.round((achievementStats.unlocked / achievementStats.total) * 100);
    const hasUnlockedAll = achievementStats.unlocked >= achievementStats.total;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Halo, Pejuang! 👋</Text>
                        <Text style={styles.subtitle}>Siap belajar hari ini?</Text>
                    </View>
                    <View style={styles.avatarContainer}>
                        <LinearGradient
                            colors={Gradients.gold as [string, string]}
                            style={styles.avatar}
                        >
                            <Text style={styles.avatarText}>🦸</Text>
                        </LinearGradient>
                    </View>
                </View>

                {/* Quick Stats */}
                <View style={styles.quickStatsContainer}>
                    <QuickStat
                        emoji="⭐"
                        value={userStats.totalScore}
                        label="Skor"
                        gradient={Gradients.gold}
                    />
                    <QuickStat
                        emoji="🔥"
                        value={userStats.streak}
                        label="Streak"
                        gradient={Gradients.fire}
                    />
                    <QuickStat
                        emoji="📝"
                        value={userStats.questionsAnswered}
                        label="Soal"
                        gradient={Gradients.ocean}
                    />
                </View>

                {/* Quick Play Button */}
                <TouchableOpacity onPress={handleQuickPlay} activeOpacity={0.9}>
                    <LinearGradient
                        colors={Gradients.primary as [string, string]}
                        style={styles.quickPlayButton}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <View style={styles.quickPlayContent}>
                            <View style={styles.quickPlayIcon}>
                                <Text style={styles.quickPlayEmoji}>🎮</Text>
                            </View>
                            <View style={styles.quickPlayText}>
                                <Text style={styles.quickPlayTitle}>Main Sekarang!</Text>
                                <Text style={styles.quickPlaySubtitle}>Latihan soal acak semua mapel</Text>
                            </View>
                        </View>
                        <View style={styles.quickPlayArrow}>
                            <Text style={styles.quickPlayArrowText}>▶</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Category Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>📚 Pilih Pelajaran</Text>
                    <Text style={styles.sectionSubtitle}>Latihan berdasarkan mata pelajaran</Text>
                </View>

                <View style={styles.categoriesContainer}>
                    {CATEGORIES.map((category) => (
                        <CategoryCard
                            key={category.id}
                            {...category}
                            level={categoryLevels[category.id] || 1}
                            onPress={() => handleCategoryPress(category.id)}
                        />
                    ))}
                </View>

                {/* Daily Target Achievement - Clickable */}
                <TouchableOpacity
                    style={styles.achievementSection}
                    onPress={() => router.push('/target')}
                    activeOpacity={0.9}
                >
                    <LinearGradient
                        colors={hasUnlockedAll ? Gradients.secondary as [string, string] : ['#1A1A2E', '#16213E'] as [string, string]}
                        style={styles.achievementCard}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.achievementHeader}>
                            <Text style={styles.achievementTitle}>
                                Target & Pencapaian
                            </Text>
                            <View style={[
                                styles.achievementBadgeContainer,
                                hasUnlockedAll && styles.achievementBadgeComplete
                            ]}>
                                <Text style={[
                                    styles.achievementBadge,
                                    hasUnlockedAll && styles.achievementBadgeTextComplete
                                ]}>
                                    {achievementStats.unlocked}/{achievementStats.total}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.achievementProgress}>
                            <View style={styles.progressBar}>
                                <LinearGradient
                                    colors={hasUnlockedAll ? ['#fff', '#f0f0f0'] as [string, string] : Gradients.gold as [string, string]}
                                    style={[styles.progressFill, { width: `${achievementProgress}%` }]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                />
                            </View>
                        </View>
                        <View style={styles.achievementFooter}>
                            <Text style={[styles.achievementHint, hasUnlockedAll && styles.achievementHintComplete]}>
                                {hasUnlockedAll
                                    ? 'Semua pencapaian terbuka! 🌟'
                                    : `${achievementStats.total - achievementStats.unlocked} pencapaian lagi menunggumu →`}
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Tips Section */}
                <View style={styles.tipsSection}>
                    <View style={styles.tipCard}>
                        <Text style={styles.tipEmoji}>💡</Text>
                        <Text style={styles.tipText}>
                            Jawab 3 soal benar berturut-turut untuk naik level!
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: Spacing.md,
        paddingBottom: Spacing.xxl,
    },

    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.lg,
        marginTop: Spacing.sm,
    },
    greeting: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.black,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.gray[500],
        marginTop: 4,
    },
    avatarContainer: {
        ...Shadows.md,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 28,
    },

    // Quick Stats
    quickStatsContainer: {
        flexDirection: 'row',
        gap: Spacing.sm,
        marginBottom: Spacing.lg,
    },
    quickStatCard: {
        flex: 1,
        borderRadius: BorderRadius.lg,
        padding: Spacing.md,
        alignItems: 'center',
        ...Shadows.md,
    },
    quickStatEmoji: {
        fontSize: 24,
        marginBottom: 4,
    },
    quickStatValue: {
        fontSize: 22,
        fontWeight: '800',
        color: '#fff',
    },
    quickStatLabel: {
        fontSize: 11,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: '600',
    },

    // Quick Play Button
    quickPlayButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: BorderRadius.xl,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
        ...Shadows.lg,
    },
    quickPlayContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quickPlayIcon: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.md,
    },
    quickPlayEmoji: {
        fontSize: 28,
    },
    quickPlayText: {},
    quickPlayTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
    },
    quickPlaySubtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        marginTop: 2,
    },
    quickPlayArrow: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quickPlayArrowText: {
        fontSize: 18,
        color: '#fff',
    },

    // Section Header
    sectionHeader: {
        marginBottom: Spacing.md,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.black,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: Colors.gray[500],
        marginTop: 2,
    },

    // Categories
    categoriesContainer: {
        gap: Spacing.sm,
        marginBottom: Spacing.lg,
    },
    categoryCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: BorderRadius.lg,
        padding: Spacing.md,
        ...Shadows.md,
    },
    categoryContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryEmoji: {
        fontSize: 36,
        marginRight: Spacing.md,
    },
    categoryInfo: {},
    categoryLabel: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    categoryLevelBadge: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 12,
        marginTop: 4,
    },
    categoryLevelText: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.9)',
        fontWeight: '600',
    },
    categoryArrow: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryArrowText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },

    // Achievement Section
    achievementSection: {
        marginBottom: Spacing.lg,
    },
    achievementCard: {
        borderRadius: BorderRadius.xl,
        padding: Spacing.lg,
        ...Shadows.lg,
    },
    achievementHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    achievementTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
    achievementBadgeContainer: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    achievementBadgeComplete: {
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    achievementBadge: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.warning,
    },
    achievementBadgeTextComplete: {
        color: '#fff',
    },
    achievementProgress: {
        marginBottom: Spacing.sm,
    },
    progressBar: {
        height: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    achievementHint: {
        fontSize: 13,
        color: Colors.gray[400],
    },
    achievementHintComplete: {
        color: '#fff',
    },
    achievementFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // Tips Section
    tipsSection: {
        marginBottom: Spacing.lg,
    },
    tipCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryLight + '30',
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.primaryLight,
    },
    tipEmoji: {
        fontSize: 24,
        marginRight: Spacing.sm,
    },
    tipText: {
        flex: 1,
        fontSize: 14,
        color: Colors.primaryDark,
        fontWeight: '500',
    },
});
