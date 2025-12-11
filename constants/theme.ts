/**
 * EduHero Modern Theme
 * Designed for Middle School (SMP) students
 * Vibrant, engaging, and modern color palette
 */

import { Platform } from 'react-native';

// ==========================================
// COLOR PALETTE
// ==========================================

// Primary gradient colors (Purple to Blue - modern tech feel)
export const Gradients = {
  primary: ['#667EEA', '#764BA2'],      // Purple-blue gradient
  secondary: ['#11998E', '#38EF7D'],    // Teal-green gradient (success)
  accent: ['#FC466B', '#3F5EFB'],       // Pink-blue gradient
  sunset: ['#FA709A', '#FEE140'],       // Pink-yellow (warm)
  ocean: ['#2193B0', '#6DD5ED'],        // Ocean blue
  fire: ['#F857A6', '#FF5858'],         // Fire red-pink
  gold: ['#F2994A', '#F2C94C'],         // Gold (achievements)
  dark: ['#1A1A2E', '#16213E'],         // Dark gradient (cards)
};

// Main colors
export const Colors = {
  // Primary
  primary: '#667EEA',
  primaryDark: '#5A67D8',
  primaryLight: '#A3BFFA',

  // Secondary (Success/Correct)
  success: '#38EF7D',
  successDark: '#11998E',

  // Accent (Warning/Streak)
  accent: '#FC466B',
  accentLight: '#FED7D7',

  // Warning/Orange
  warning: '#F2994A',
  warningLight: '#FEEBC8',

  // Error
  error: '#FF5858',
  errorLight: '#FED7D7',

  // Neutrals
  white: '#FFFFFF',
  black: '#1A1A2E',
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },

  // Theme
  light: {
    text: '#1A1A2E',
    textSecondary: '#4A5568',
    background: '#F7FAFC',
    card: '#FFFFFF',
    tint: '#667EEA',
    border: '#E2E8F0',
  },
  dark: {
    text: '#F7FAFC',
    textSecondary: '#A0AEC0',
    background: '#1A1A2E',
    card: '#2D3748',
    tint: '#A3BFFA',
    border: '#4A5568',
  },
};

// Level colors (for adaptive system)
export const LevelColors = {
  1: { bg: '#E8F5E9', text: '#2E7D32', border: '#4CAF50', gradient: ['#11998E', '#38EF7D'] }, // Dasar - Green
  2: { bg: '#FFF3E0', text: '#E65100', border: '#FF9800', gradient: ['#F2994A', '#F2C94C'] }, // Menengah - Orange
  3: { bg: '#FCE4EC', text: '#C2185B', border: '#E91E63', gradient: ['#F857A6', '#FF5858'] }, // Mahir - Pink
};

// Category colors
export const CategoryColors = {
  matematika: { emoji: '🔢', gradient: ['#667EEA', '#764BA2'], color: '#667EEA' },
  sains: { emoji: '🔬', gradient: ['#11998E', '#38EF7D'], color: '#11998E' },
  inggris: { emoji: '📚', gradient: ['#FC466B', '#3F5EFB'], color: '#FC466B' },
};

// ==========================================
// FONTS
// ==========================================

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// ==========================================
// SHADOWS
// ==========================================

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  glow: (color: string) => ({
    shadowColor: color,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  }),
};

// ==========================================
// SPACING
// ==========================================

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// ==========================================
// BORDER RADIUS
// ==========================================

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  full: 9999,
};
