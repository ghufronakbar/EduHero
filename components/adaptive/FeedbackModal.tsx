import { AdaptiveLevel, AdaptiveOutput, LEVEL_NAMES, NextAction } from '@/types/adaptive';
import React from 'react';
import {
    Dimensions,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface FeedbackModalProps {
    visible: boolean;
    result: AdaptiveOutput | null;
    onContinue: () => void;
    onViewRemedial?: () => void;
}

const ACTION_CONFIG: Record<NextAction, { bg: string; emoji: string; title: string }> = {
    NaikLevel: {
        bg: '#4CAF50',
        emoji: '🚀',
        title: 'Level Up!',
    },
    TurunLevel: {
        bg: '#FF9800',
        emoji: '📚',
        title: 'Mari Review',
    },
    Tetap: {
        bg: '#2196F3',
        emoji: '✨',
        title: 'Lanjutkan!',
    },
};

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
    visible,
    result,
    onContinue,
    onViewRemedial,
}) => {
    if (!result) return null;

    const config = ACTION_CONFIG[result.nextAction];
    const isCorrect = result.updatedScore > 0;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            statusBarTranslucent
        >
            <View style={styles.overlay}>
                <View style={[styles.container, { borderColor: config.bg }]}>
                    {/* Header */}
                    <View style={[styles.header, { backgroundColor: config.bg }]}>
                        <Text style={styles.emoji}>{config.emoji}</Text>
                        <Text style={styles.title}>{config.title}</Text>
                    </View>

                    {/* Content */}
                    <View style={styles.content}>
                        {/* Result Icon */}
                        <View style={[styles.resultIcon, isCorrect ? styles.resultCorrect : styles.resultWrong]}>
                            <Text style={styles.resultEmoji}>
                                {isCorrect ? '✅' : '❌'}
                            </Text>
                        </View>

                        {/* Feedback Message */}
                        <Text style={styles.feedbackMessage}>
                            {result.feedbackMessage}
                        </Text>

                        {/* Score */}
                        {isCorrect && (
                            <View style={styles.scoreContainer}>
                                <Text style={styles.scoreLabel}>Skor Diperoleh</Text>
                                <Text style={styles.scoreValue}>+{result.updatedScore}</Text>
                            </View>
                        )}

                        {/* Level Change */}
                        {result.nextAction !== 'Tetap' && (
                            <View style={styles.levelChange}>
                                <Text style={styles.levelChangeLabel}>
                                    {result.nextAction === 'NaikLevel' ? '⬆️ Naik ke' : '⬇️ Turun ke'}
                                </Text>
                                <Text style={styles.levelChangeValue}>
                                    Level {result.nextLevel} - {LEVEL_NAMES[result.nextLevel as AdaptiveLevel]}
                                </Text>
                            </View>
                        )}

                        {/* Streak Info */}
                        <View style={styles.statsRow}>
                            <View style={styles.statItem}>
                                <Text style={styles.statEmoji}>🔥</Text>
                                <Text style={styles.statValue}>{result.newCorrectStreak}</Text>
                                <Text style={styles.statLabel}>Streak</Text>
                            </View>
                            <View style={styles.statDivider} />
                            <View style={styles.statItem}>
                                <Text style={styles.statEmoji}>💔</Text>
                                <Text style={styles.statValue}>{result.newWrongCount}</Text>
                                <Text style={styles.statLabel}>Salah</Text>
                            </View>
                        </View>

                        {/* Remedial Suggestion */}
                        {result.recommendedMaterial && result.remedialTopics && (
                            <View style={styles.remedialContainer}>
                                <Text style={styles.remedialTitle}>📖 Materi yang Disarankan:</Text>
                                {result.remedialTopics.slice(0, 2).map((topic, index) => (
                                    <Text key={index} style={styles.remedialItem}>
                                        • {topic}
                                    </Text>
                                ))}
                                {onViewRemedial && (
                                    <TouchableOpacity
                                        style={styles.remedialButton}
                                        onPress={onViewRemedial}
                                    >
                                        <Text style={styles.remedialButtonText}>
                                            Lihat Materi →
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                    </View>

                    {/* Close Button */}
                    <TouchableOpacity
                        style={[styles.continueButton, { backgroundColor: config.bg }]}
                        onPress={onContinue}
                    >
                        <Text style={styles.continueButtonText}>Tutup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        width: width - 40,
        maxWidth: 400,
        backgroundColor: '#fff',
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        paddingVertical: 16,
    },
    emoji: {
        fontSize: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    resultIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    resultCorrect: {
        backgroundColor: '#E8F5E9',
    },
    resultWrong: {
        backgroundColor: '#FFEBEE',
    },
    resultEmoji: {
        fontSize: 32,
    },
    feedbackMessage: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        lineHeight: 24,
        marginBottom: 16,
    },
    scoreContainer: {
        backgroundColor: '#FFF8E1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 16,
    },
    scoreLabel: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    scoreValue: {
        fontSize: 28,
        fontWeight: '800',
        color: '#FF6D00',
        textAlign: 'center',
    },
    levelChange: {
        backgroundColor: '#E3F2FD',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 16,
        alignItems: 'center',
    },
    levelChangeLabel: {
        fontSize: 12,
        color: '#1565C0',
    },
    levelChangeValue: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1565C0',
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    statItem: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    statDivider: {
        width: 1,
        height: 40,
        backgroundColor: '#E0E0E0',
    },
    statEmoji: {
        fontSize: 20,
    },
    statValue: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
    },
    statLabel: {
        fontSize: 11,
        color: '#666',
    },
    remedialContainer: {
        backgroundColor: '#FFF3E0',
        padding: 12,
        borderRadius: 12,
        width: '100%',
    },
    remedialTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#E65100',
        marginBottom: 8,
    },
    remedialItem: {
        fontSize: 13,
        color: '#BF360C',
        marginLeft: 8,
        marginBottom: 4,
    },
    remedialButton: {
        marginTop: 8,
        alignSelf: 'flex-end',
    },
    remedialButtonText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#E65100',
    },
    continueButton: {
        paddingVertical: 16,
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
});

export default FeedbackModal;
