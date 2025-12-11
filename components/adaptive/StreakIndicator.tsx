import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StreakIndicatorProps {
    streak: number;
    maxStreak?: number;
    showFireAnimation?: boolean;
}

export const StreakIndicator: React.FC<StreakIndicatorProps> = ({
    streak,
    maxStreak = 3,
    showFireAnimation = true,
}) => {
    const isOnFire = streak >= 2;
    const isMaxStreak = streak >= maxStreak;

    // Dynamic fire emoji based on streak
    const getFireEmoji = () => {
        if (streak === 0) return '💤';
        if (streak === 1) return '✨';
        if (streak === 2) return '🔥';
        return '🔥🔥🔥';
    };

    // Progress dots
    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < maxStreak; i++) {
            const isFilled = i < streak;
            dots.push(
                <View
                    key={i}
                    style={[
                        styles.dot,
                        isFilled ? styles.dotFilled : styles.dotEmpty,
                        isMaxStreak && styles.dotMax,
                    ]}
                />
            );
        }
        return dots;
    };

    return (
        <View style={[styles.container, isOnFire && styles.containerOnFire]}>
            <View style={styles.header}>
                <Text style={styles.fireEmoji}>{getFireEmoji()}</Text>
                <Text style={[styles.streakNumber, isOnFire && styles.streakNumberOnFire]}>
                    {streak}
                </Text>
            </View>
            <View style={styles.dotsContainer}>{renderDots()}</View>
            <Text style={styles.label}>
                {isMaxStreak
                    ? '🚀 Naik Level!'
                    : streak === 0
                        ? 'Mulai streak!'
                        : `${maxStreak - streak} lagi naik level`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        padding: 12,
        minWidth: 100,
    },
    containerOnFire: {
        backgroundColor: '#FFF8E1',
        borderColor: '#FFB300',
        borderWidth: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    fireEmoji: {
        fontSize: 24,
    },
    streakNumber: {
        fontSize: 24,
        fontWeight: '800',
        color: '#666',
    },
    streakNumberOnFire: {
        color: '#FF6D00',
    },
    dotsContainer: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 8,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    dotEmpty: {
        backgroundColor: '#E0E0E0',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },
    dotFilled: {
        backgroundColor: '#4CAF50',
    },
    dotMax: {
        backgroundColor: '#FF6D00',
    },
    label: {
        marginTop: 4,
        fontSize: 11,
        color: '#757575',
        fontWeight: '500',
    },
});

export default StreakIndicator;
