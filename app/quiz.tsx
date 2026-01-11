import {
    FeedbackModal
} from '@/components/adaptive';
import { BorderRadius, Colors, Gradients, Shadows, Spacing } from '@/constants/theme';
import { useAdaptiveEngine } from '@/hooks/useAdaptiveEngine';
import { CategoryType, questionService } from '@/services/questionService';
import { AdaptiveOutput, LEVEL_NAMES } from '@/types/adaptive';
import { SeedMultipleChoice } from '@/types/seed';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const USER_ID = 'user-default';

const CATEGORIES: Record<CategoryType, { label: string; emoji: string; gradient: string[] }> = {
    matematika: { label: 'Matematika', emoji: '🔢', gradient: Gradients.primary },
    sains: { label: 'Sains', emoji: '🔬', gradient: Gradients.secondary },
    inggris: { label: 'B. Inggris', emoji: '📚', gradient: Gradients.accent },
};

export default function QuizScreen() {
    const params = useLocalSearchParams<{ category?: string }>();
    const category = (params.category as CategoryType) || 'matematika';
    const categoryInfo = CATEGORIES[category] || CATEGORIES.matematika;

    // State
    const [currentQuestion, setCurrentQuestion] = useState<SeedMultipleChoice | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastResult, setLastResult] = useState<AdaptiveOutput | null>(null);
    const [isLoadingQuestion, setIsLoadingQuestion] = useState(true);
    const [answeredIds, setAnsweredIds] = useState<string[]>([]);

    // Timer
    const startTimeRef = useRef<number>(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    // Adaptive engine
    const adaptive = useAdaptiveEngine({
        userId: USER_ID,
        category: category,
        autoLoad: true,
    });

    // Timer effect
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (currentQuestion && !isAnswered) {
            startTimeRef.current = Date.now();
            interval = setInterval(() => {
                setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [currentQuestion, isAnswered]);

    // Load only on mount (when adaptive engine is ready)
    useEffect(() => {
        if (!adaptive.isLoading) {
            loadNextQuestion();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adaptive.isLoading]);

    const loadNextQuestion = useCallback(() => {
        setIsLoadingQuestion(true);
        setSelectedOption(null);
        setIsAnswered(false);
        setElapsedTime(0);

        try {
            // Get random question based on current adaptive level
            const question = questionService.getRandomQuestion(
                category,
                adaptive.currentLevel,
                answeredIds
            );

            if (question) {
                setCurrentQuestion(question);
            } else {
                // Reset answered IDs if no questions available
                setAnsweredIds([]);
                const freshQuestion = questionService.getRandomQuestion(category, adaptive.currentLevel, []);
                setCurrentQuestion(freshQuestion);
            }
        } catch (error) {
            console.error('Error loading question:', error);
            Alert.alert('Error', 'Gagal memuat soal');
        } finally {
            setIsLoadingQuestion(false);
        }
    }, [category, adaptive.currentLevel, answeredIds]);

    const handleOptionSelect = (optionId: string) => {
        if (isAnswered) return;
        setSelectedOption(optionId);
    };

    const handleSubmitAnswer = async () => {
        if (!selectedOption || !currentQuestion || isAnswered) return;

        const answerTime = (Date.now() - startTimeRef.current) / 1000;
        const selectedOptionData = currentQuestion.options.find(o => o.id === selectedOption);
        const isCorrect = selectedOptionData?.isCorrect ?? false;

        setIsAnswered(true);

        // Track answered question to avoid repetition
        setAnsweredIds(prev => [...prev, currentQuestion.id]);

        try {
            const result = await adaptive.submitAnswer({
                questionId: currentQuestion.id,
                isCorrect,
                answerTime,
                attemptCount: 1,
                topic: currentQuestion.topic,
            });

            setLastResult(result);
            setTimeout(() => setShowFeedback(true), 500);
        } catch (error) {
            console.error('Error submitting answer:', error);
        }
    };

    // Close feedback modal (just closes, doesn't load next question)
    const handleCloseFeedback = () => {
        setShowFeedback(false);
    };

    // Load next question (called from footer button)
    const handleNextQuestion = () => {
        setShowFeedback(false);
        setLastResult(null);
        loadNextQuestion();
    };

    const handleBack = () => {
        router.back();
    };


    // No question
    if (!currentQuestion) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorEmoji}>😢</Text>
                    <Text style={styles.errorText}>Tidak ada soal tersedia</Text>
                    <TouchableOpacity style={styles.retryButton} onPress={loadNextQuestion}>
                        <Text style={styles.retryButtonText}>Coba Lagi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                        <Text style={styles.backButtonText}>← Kembali</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }


    // Loading state
    if (adaptive.isLoading || isLoadingQuestion) {
        return (
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={categoryInfo.gradient as [string, string]}
                    style={styles.loadingContainer}
                >
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={styles.loadingText}>Memuat soal...</Text>
                </LinearGradient>
            </SafeAreaView>
        );
    }



    return (
        <SafeAreaView style={styles.container}>
            {/* Header with Gradient */}
            <LinearGradient
                colors={categoryInfo.gradient as [string, string]}
                style={styles.header}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <TouchableOpacity style={styles.headerBack} onPress={handleBack}>
                    <Text style={styles.headerBackText}>✕</Text>
                </TouchableOpacity>

                <View style={styles.headerCenter}>
                    <Text style={styles.headerEmoji}>{categoryInfo.emoji}</Text>
                    <Text style={styles.headerTitle}>{categoryInfo.label}</Text>
                </View>

                <View style={styles.headerRight}>
                    <View style={styles.timerBadge}>
                        <Text style={styles.timerText}>⏱️ {elapsedTime}s</Text>
                    </View>
                </View>
            </LinearGradient>

            {/* Stats Bar */}
            <View style={styles.statsBar}>
                <View style={styles.statItem}>
                    <Text style={styles.statEmoji}>🎯</Text>
                    <Text style={styles.statLabel}>Level {adaptive.currentLevel}</Text>
                    <Text style={styles.statValue}>{LEVEL_NAMES[adaptive.currentLevel]}</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                    <Text style={styles.statEmoji}>🔥</Text>
                    <Text style={styles.statLabel}>Streak</Text>
                    <Text style={styles.statValue}>{adaptive.correctStreak}/3</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                    <Text style={styles.statEmoji}>⭐</Text>
                    <Text style={styles.statLabel}>Skor</Text>
                    <Text style={styles.statValue}>{adaptive.totalScore}</Text>
                </View>
            </View>

            {/* Question Content */}
            <ScrollView
                style={styles.questionContainer}
                contentContainerStyle={styles.questionContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Topic Badge */}
                <View style={styles.topicRow}>
                    <View style={styles.topicBadge}>
                        <Text style={styles.topicText}>📚 {currentQuestion.topic}</Text>
                    </View>
                    <View style={[
                        styles.difficultyBadge,
                        currentQuestion.difficulty === 'easy' && styles.difficultyEasy,
                        currentQuestion.difficulty === 'medium' && styles.difficultyMedium,
                        currentQuestion.difficulty === 'hard' && styles.difficultyHard,
                    ]}>
                        <Text style={styles.difficultyText}>
                            {currentQuestion.difficulty === 'easy' ? '🟢 Mudah' :
                                currentQuestion.difficulty === 'medium' ? '🟡 Sedang' : '🔴 Sulit'}
                        </Text>
                    </View>
                </View>

                {/* Question Card */}
                <View style={styles.questionCard}>
                    <Text style={styles.questionText}>{currentQuestion.questionText}</Text>
                </View>

                {/* Options */}
                <View style={styles.optionsContainer}>
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedOption === option.id;
                        const showResult = isAnswered;
                        const isCorrectOption = option.isCorrect;

                        const getCardStyle = () => {
                            if (showResult && isCorrectOption) {
                                return [styles.optionCard, { borderColor: Colors.success }];
                            }
                            if (showResult && isSelected && !isCorrectOption) {
                                return [styles.optionCard, { borderColor: Colors.error }];
                            }
                            if (isSelected) {
                                return [styles.optionCard, { borderColor: Colors.primary }];
                            }
                            return [styles.optionCard];
                        };

                        return (
                            <TouchableOpacity
                                key={option.id}
                                style={getCardStyle()}
                                onPress={() => handleOptionSelect(option.id)}
                                disabled={isAnswered}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={
                                        showResult && isCorrectOption
                                            ? ['#38EF7D', '#11998E']
                                            : showResult && isSelected && !isCorrectOption
                                                ? ['#FF5858', '#F857A6']
                                                : isSelected
                                                    ? categoryInfo.gradient as [string, string]
                                                    : ['#fff', '#fff']
                                    }
                                    style={styles.optionGradient}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                >
                                    <View style={[
                                        styles.optionIndex,
                                        (isSelected || (showResult && isCorrectOption)) && styles.optionIndexActive
                                    ]}>
                                        <Text style={[
                                            styles.optionIndexText,
                                            (isSelected || (showResult && isCorrectOption)) && styles.optionIndexTextActive
                                        ]}>
                                            {String.fromCharCode(65 + index)}
                                        </Text>
                                    </View>
                                    <Text style={[
                                        styles.optionText,
                                        (isSelected || (showResult && (isCorrectOption || (isSelected && !isCorrectOption))))
                                        && styles.optionTextActive
                                    ]}>
                                        {option.text}
                                    </Text>
                                    {showResult && isCorrectOption && (
                                        <Text style={styles.optionIcon}>✅</Text>
                                    )}
                                    {showResult && isSelected && !isCorrectOption && (
                                        <Text style={styles.optionIcon}>❌</Text>
                                    )}
                                </LinearGradient>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Explanation */}
                {isAnswered && currentQuestion.explanationText && (
                    <View style={styles.explanationCard}>
                        <Text style={styles.explanationTitle}>💡 Penjelasan</Text>
                        <Text style={styles.explanationText}>{currentQuestion.explanationText}</Text>
                    </View>
                )}
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                {!isAnswered ? (
                    <TouchableOpacity
                        onPress={handleSubmitAnswer}
                        disabled={!selectedOption}
                        activeOpacity={0.9}
                    >
                        <LinearGradient
                            colors={selectedOption ? Gradients.secondary as [string, string] : [Colors.gray[300], Colors.gray[400]]}
                            style={styles.submitButton}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.submitButtonText}>
                                {selectedOption ? '✓ Jawab Sekarang!' : 'Pilih Jawaban'}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleNextQuestion} activeOpacity={0.9}>
                        <LinearGradient
                            colors={Gradients.secondary as [string, string]}
                            style={styles.submitButton}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.submitButtonText}>Soal Berikutnya →</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
            </View>

            {/* Feedback Modal */}
            <FeedbackModal
                visible={showFeedback}
                result={lastResult}
                onContinue={handleCloseFeedback}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },

    // Loading
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },

    // Error
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Spacing.lg,
    },
    errorEmoji: {
        fontSize: 64,
        marginBottom: 16,
    },
    errorText: {
        fontSize: 18,
        color: Colors.gray[600],
        marginBottom: 20,
    },
    retryButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: BorderRadius.md,
        marginBottom: 12,
    },
    retryButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    backButton: {
        padding: 12,
    },
    backButtonText: {
        color: Colors.primary,
        fontWeight: '600',
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.md,
        paddingTop: Spacing.sm,
    },
    headerBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBackText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    headerCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerEmoji: {
        fontSize: 24,
        marginRight: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    headerRight: {},
    timerBadge: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    timerText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },

    // Stats Bar
    statsBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: Spacing.md,
        marginTop: -20,
        marginBottom: Spacing.md,
        borderRadius: BorderRadius.lg,
        padding: Spacing.md,
        ...Shadows.md,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statDivider: {
        width: 1,
        backgroundColor: Colors.gray[200],
    },
    statEmoji: {
        fontSize: 20,
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 11,
        color: Colors.gray[500],
    },
    statValue: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.black,
    },

    // Question
    questionContainer: {
        flex: 1,
    },
    questionContent: {
        padding: Spacing.md,
        paddingTop: 0,
    },
    topicRow: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: Spacing.sm,
    },
    topicBadge: {
        backgroundColor: Colors.primaryLight + '40',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    topicText: {
        fontSize: 12,
        color: Colors.primaryDark,
        fontWeight: '600',
    },
    difficultyBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    difficultyEasy: {
        backgroundColor: '#E8F5E9',
    },
    difficultyMedium: {
        backgroundColor: '#FFF3E0',
    },
    difficultyHard: {
        backgroundColor: '#FFEBEE',
    },
    difficultyText: {
        fontSize: 12,
        fontWeight: '600',
    },
    questionCard: {
        backgroundColor: '#fff',
        borderRadius: BorderRadius.lg,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        ...Shadows.md,
    },
    questionText: {
        fontSize: 18,
        lineHeight: 28,
        color: Colors.black,
        fontWeight: '500',
    },

    // Options
    optionsContainer: {
        gap: Spacing.sm,
    },
    optionCard: {
        borderRadius: BorderRadius.md,
        overflow: 'hidden',
        ...Shadows.sm,
    },
    optionGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Spacing.md,
        borderWidth: 2,
        borderColor: Colors.gray[200],
        borderRadius: BorderRadius.md,
    },
    optionSelected: {
        borderColor: Colors.primary,
    },
    optionCorrect: {
        borderColor: Colors.success,
    },
    optionWrong: {
        borderColor: Colors.error,
    },
    optionIndex: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.gray[100],
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.sm,
    },
    optionIndexActive: {
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    optionIndexText: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.gray[600],
    },
    optionIndexTextActive: {
        color: '#fff',
    },
    optionText: {
        flex: 1,
        fontSize: 15,
        color: Colors.black,
    },
    optionTextActive: {
        color: '#fff',
        fontWeight: '600',
    },
    optionIcon: {
        fontSize: 22,
        marginLeft: 8,
    },

    // Explanation
    explanationCard: {
        backgroundColor: '#E3F2FD',
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        marginTop: Spacing.md,
    },
    explanationTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1565C0',
        marginBottom: 8,
    },
    explanationText: {
        fontSize: 14,
        lineHeight: 22,
        color: Colors.gray[700],
    },

    // Footer
    footer: {
        padding: Spacing.md,
        backgroundColor: '#fff',
        ...Shadows.lg,
    },
    submitButton: {
        borderRadius: BorderRadius.md,
        paddingVertical: 16,
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 17,
        fontWeight: '700',
        color: '#fff',
    },
});
