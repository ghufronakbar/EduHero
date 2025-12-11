import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ScoreDisplayProps {
    score: number;
    questionsAnswered: number;
    accuracy?: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
    score,
    questionsAnswered,
    accuracy,
}) => {
    const formatScore = (num: number): string => {
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}k`;
        }
        return num.toString();
    };

    return (
        <View style={styles.container}>
            {/* Main Score */}
            <View style={styles.mainScore}>
                <Text style={styles.starEmoji}>⭐</Text>
                <Text style={styles.scoreValue}>{formatScore(score)}</Text>
            </View>

            {/* Stats Row */}
            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{questionsAnswered}</Text>
                    <Text style={styles.statLabel}>Soal</Text>
                </View>
                {accuracy !== undefined && (
                    <>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={[styles.statValue, accuracy >= 70 && styles.statValueGood]}>
                                {accuracy}%
                            </Text>
                            <Text style={styles.statLabel}>Akurasi</Text>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDE7',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFD600',
    },
    mainScore: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    starEmoji: {
        fontSize: 24,
    },
    scoreValue: {
        fontSize: 28,
        fontWeight: '800',
        color: '#F9A825',
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    statItem: {
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    statDivider: {
        width: 1,
        height: 24,
        backgroundColor: '#FFE082',
    },
    statValue: {
        fontSize: 14,
        fontWeight: '700',
        color: '#666',
    },
    statValueGood: {
        color: '#4CAF50',
    },
    statLabel: {
        fontSize: 10,
        color: '#999',
    },
});

export default ScoreDisplay;
