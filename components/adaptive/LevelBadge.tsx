import { AdaptiveLevel, LEVEL_NAMES } from '@/types/adaptive';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LevelBadgeProps {
    level: AdaptiveLevel;
    showLabel?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const LEVEL_COLORS: Record<AdaptiveLevel, { bg: string; text: string; border: string }> = {
    1: { bg: '#E8F5E9', text: '#2E7D32', border: '#4CAF50' }, // Green - Dasar
    2: { bg: '#FFF3E0', text: '#E65100', border: '#FF9800' }, // Orange - Menengah
    3: { bg: '#FCE4EC', text: '#C2185B', border: '#E91E63' }, // Pink - Mahir
};

const LEVEL_ICONS: Record<AdaptiveLevel, string> = {
    1: '🌱',
    2: '🌟',
    3: '🏆',
};

export const LevelBadge: React.FC<LevelBadgeProps> = ({
    level,
    showLabel = true,
    size = 'medium',
}) => {
    const colors = LEVEL_COLORS[level];
    const sizeStyles = SIZE_STYLES[size];
    const levelName = LEVEL_NAMES[level];

    return (
        <View style={[styles.container, { backgroundColor: colors.bg, borderColor: colors.border }, sizeStyles.container]}>
            <Text style={[styles.icon, sizeStyles.icon]}>{LEVEL_ICONS[level]}</Text>
            <View style={styles.textContainer}>
                <Text style={[styles.levelNumber, { color: colors.text }, sizeStyles.levelNumber]}>
                    Level {level}
                </Text>
                {showLabel && (
                    <Text style={[styles.levelName, { color: colors.text }, sizeStyles.levelName]}>
                        {levelName}
                    </Text>
                )}
            </View>
        </View>
    );
};

const SIZE_STYLES = {
    small: StyleSheet.create({
        container: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, borderWidth: 1 },
        icon: { fontSize: 14 },
        levelNumber: { fontSize: 10 },
        levelName: { fontSize: 8 },
    }),
    medium: StyleSheet.create({
        container: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, borderWidth: 2 },
        icon: { fontSize: 20 },
        levelNumber: { fontSize: 14 },
        levelName: { fontSize: 11 },
    }),
    large: StyleSheet.create({
        container: { paddingHorizontal: 16, paddingVertical: 12, borderRadius: 16, borderWidth: 2 },
        icon: { fontSize: 28 },
        levelNumber: { fontSize: 18 },
        levelName: { fontSize: 14 },
    }),
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    icon: {},
    textContainer: {
        flexDirection: 'column',
    },
    levelNumber: {
        fontWeight: '700',
    },
    levelName: {
        fontWeight: '500',
        opacity: 0.8,
    },
});

export default LevelBadge;
