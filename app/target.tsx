import { BorderRadius, Colors, Gradients, Shadows, Spacing } from '@/constants/theme';
import {
    Achievement,
    ACHIEVEMENTS,
    checkAchievementUnlocked,
    getAchievementProgress,
    TIER_COLORS,
} from '@/data/achievements';
import { adaptiveSession } from '@/database/query/adaptive-session';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface UserStats {
    totalCorrect: number;
    categoryCorrect: Record<string, number>;
    maxStreak: number;
    maxLevel: number;
    totalScore: number;
}

// Achievement Card Component
interface AchievementCardProps {
    achievement: Achievement;
    isUnlocked: boolean;
    progress: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
    achievement,
    isUnlocked,
    progress,
}) => {
    const tierColor = TIER_COLORS[achievement.tier];

    return (
        <View style={[
            styles.achievementCard,
            { borderColor: isUnlocked ? tierColor.border : Colors.gray[300] },
            !isUnlocked && styles.achievementLocked,
        ]}>
            {/* Left: Emoji/Icon */}
            <View style={[
                styles.achievementIcon,
                { backgroundColor: isUnlocked ? tierColor.bg : Colors.gray[100] },
            ]}>
                <Text style={[
                    styles.achievementEmoji,
                    !isUnlocked && styles.achievementEmojiLocked,
                ]}>
                    {isUnlocked ? achievement.emoji : '🔒'}
                </Text>
            </View>

            {/* Center: Info */}
            <View style={styles.achievementInfo}>
                <Text style={[
                    styles.achievementTitle,
                    { color: isUnlocked ? tierColor.text : Colors.gray[500] },
                ]}>
                    {achievement.title}
                </Text>
                <Text style={styles.achievementDescription}>
                    {achievement.description}
                </Text>

                {/* Progress Bar */}
                {!isUnlocked && (
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <LinearGradient
                                colors={tierColor.gradient as [string, string]}
                                style={[styles.progressFill, { width: `${progress}%` }]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            />
                        </View>
                        <Text style={styles.progressText}>{progress}%</Text>
                    </View>
                )}

                {/* Reward badge */}
                {achievement.reward && (
                    <View style={styles.rewardBadge}>
                        <Text style={styles.rewardText}>
                            🎁 +{achievement.reward} poin
                        </Text>
                    </View>
                )}
            </View>

            {/* Right: Tier Badge */}
            <View style={[
                styles.tierBadge,
                { backgroundColor: isUnlocked ? tierColor.border : Colors.gray[300] },
            ]}>
                <Text style={styles.tierText}>
                    {achievement.tier === 'bronze' ? '🥉' :
                        achievement.tier === 'silver' ? '🥈' :
                            achievement.tier === 'gold' ? '🥇' :
                                achievement.tier === 'platinum' ? '💎' : '👑'}
                </Text>
            </View>
        </View>
    );
};

export default function TargetScreen() {
    const [userStats, setUserStats] = useState<UserStats>({
        totalCorrect: 0,
        categoryCorrect: {},
        maxStreak: 0,
        maxLevel: 1,
        totalScore: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    // Load user stats on focus
    useFocusEffect(
        useCallback(() => {
            loadUserStats();
        }, [])
    );

    const loadUserStats = async () => {
        setIsLoading(true);
        try {
            const sessions = await adaptiveSession.getUserSessions('user-default');

            let totalCorrect = 0;
            let totalScore = 0;
            let maxStreak = 0;
            let maxLevel = 1;
            const categoryCorrect: Record<string, number> = {};

            for (const session of sessions) {
                totalScore += session.totalScore;
                maxStreak = Math.max(maxStreak, session.correctStreak);
                maxLevel = Math.max(maxLevel, session.currentLevel);

                // Get history for total correct count
                try {
                    const history = await adaptiveSession.getSessionHistory(session.sessionId);
                    const correctCount = history.filter(h => h.is_correct === 1).length;
                    totalCorrect += correctCount;
                    categoryCorrect[session.category] = (categoryCorrect[session.category] || 0) + correctCount;
                } catch (e) {
                    // Use questions answered as fallback
                    totalCorrect += session.questionsAnswered;
                    categoryCorrect[session.category] = session.questionsAnswered;
                }
            }

            setUserStats({
                totalCorrect,
                categoryCorrect,
                maxStreak,
                maxLevel,
                totalScore,
            });
        } catch (error) {
            console.log('Error loading stats:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Calculate unlocked achievements
    const achievementsWithStatus = ACHIEVEMENTS.map(achievement => ({
        achievement,
        isUnlocked: checkAchievementUnlocked(achievement, userStats),
        progress: getAchievementProgress(achievement, userStats),
    }));

    // Sort: unlocked first, then by tier
    const sortedAchievements = [...achievementsWithStatus].sort((a, b) => {
        if (a.isUnlocked !== b.isUnlocked) {
            return a.isUnlocked ? -1 : 1;
        }
        // If both locked, sort by progress (highest first)
        if (!a.isUnlocked && !b.isUnlocked) {
            return b.progress - a.progress;
        }
        return 0;
    });

    const unlockedCount = achievementsWithStatus.filter(a => a.isUnlocked).length;
    const totalCount = ACHIEVEMENTS.length;

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <LinearGradient
                colors={Gradients.gold as [string, string]}
                style={styles.header}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.headerEmoji}>🏆</Text>
                    <Text style={styles.headerTitle}>Target & Pencapaian</Text>
                </View>
                <View style={styles.headerRight} />
            </LinearGradient>

            {/* Stats Summary */}
            <View style={styles.summaryCard}>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>{unlockedCount}</Text>
                    <Text style={styles.summaryLabel}>Tercapai</Text>
                </View>
                <View style={styles.summaryDivider} />
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>{totalCount - unlockedCount}</Text>
                    <Text style={styles.summaryLabel}>Terkunci</Text>
                </View>
                <View style={styles.summaryDivider} />
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>{Math.round((unlockedCount / totalCount) * 100)}%</Text>
                    <Text style={styles.summaryLabel}>Progress</Text>
                </View>
            </View>

            {/* Achievements List */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Section: Unlocked */}
                {unlockedCount > 0 && (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionEmoji}>✅</Text>
                            <Text style={styles.sectionTitle}>Sudah Dicapai ({unlockedCount})</Text>
                        </View>
                        {sortedAchievements
                            .filter(a => a.isUnlocked)
                            .map(({ achievement, isUnlocked, progress }) => (
                                <AchievementCard
                                    key={achievement.id}
                                    achievement={achievement}
                                    isUnlocked={isUnlocked}
                                    progress={progress}
                                />
                            ))}
                    </>
                )}

                {/* Section: In Progress */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionEmoji}>🎯</Text>
                    <Text style={styles.sectionTitle}>Target Berikutnya ({totalCount - unlockedCount})</Text>
                </View>
                {sortedAchievements
                    .filter(a => !a.isUnlocked)
                    .map(({ achievement, isUnlocked, progress }) => (
                        <AchievementCard
                            key={achievement.id}
                            achievement={achievement}
                            isUnlocked={isUnlocked}
                            progress={progress}
                        />
                    ))}

                {/* Bottom Spacer */}
                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.md,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    headerCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerEmoji: {
        fontSize: 28,
        marginRight: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    headerRight: {
        width: 40,
    },

    // Summary Card
    summaryCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: Spacing.md,
        marginTop: -20,
        marginBottom: Spacing.md,
        borderRadius: BorderRadius.lg,
        padding: Spacing.lg,
        ...Shadows.md,
    },
    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },
    summaryDivider: {
        width: 1,
        backgroundColor: Colors.gray[200],
    },
    summaryValue: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.black,
    },
    summaryLabel: {
        fontSize: 12,
        color: Colors.gray[500],
        marginTop: 2,
    },

    // Scroll
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: Spacing.md,
        paddingTop: 0,
    },

    // Section Header
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Spacing.md,
        marginBottom: Spacing.sm,
    },
    sectionEmoji: {
        fontSize: 20,
        marginRight: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.black,
    },

    // Achievement Card
    achievementCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        marginBottom: Spacing.sm,
        borderWidth: 2,
        ...Shadows.sm,
    },
    achievementLocked: {
        opacity: 0.8,
    },
    achievementIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.sm,
    },
    achievementEmoji: {
        fontSize: 26,
    },
    achievementEmojiLocked: {
        fontSize: 22,
    },
    achievementInfo: {
        flex: 1,
    },
    achievementTitle: {
        fontSize: 15,
        fontWeight: '700',
    },
    achievementDescription: {
        fontSize: 12,
        color: Colors.gray[500],
        marginTop: 2,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    progressBar: {
        flex: 1,
        height: 6,
        backgroundColor: Colors.gray[200],
        borderRadius: 3,
        overflow: 'hidden',
        marginRight: 8,
    },
    progressFill: {
        height: '100%',
        borderRadius: 3,
    },
    progressText: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.gray[500],
        width: 35,
    },
    rewardBadge: {
        marginTop: 4,
    },
    rewardText: {
        fontSize: 11,
        color: Colors.warning,
        fontWeight: '600',
    },
    tierBadge: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Spacing.sm,
    },
    tierText: {
        fontSize: 16,
    },

    bottomSpacer: {
        height: 40,
    },
});
