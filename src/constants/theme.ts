import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#0F1E20',
    textSecondary: '#5B6B6D',
    background: '#F5FAF9',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#DFF3F0',
    border: '#DCEAE8',
    primary: '#0D9488',
    primaryMuted: '#E1F5F2',
    onPrimary: '#FFFFFF',
    success: '#0FA968',
    successMuted: '#E3F8EE',
    warning: '#E08A00',
    warningMuted: '#FFF3DD',
    danger: '#E43F5A',
    dangerMuted: '#FDE8EB',
  },
  dark: {
    text: '#EAF6F4',
    textSecondary: '#9FB4B2',
    background: '#0C1615',
    backgroundElement: '#152220',
    backgroundSelected: '#1E3330',
    border: '#233A37',
    primary: '#2DD4BF',
    primaryMuted: '#153733',
    onPrimary: '#04302A',
    success: '#3DDC97',
    successMuted: '#123829',
    warning: '#FFB74D',
    warningMuted: '#3A2A0E',
    danger: '#FF6B81',
    dangerMuted: '#3B1622',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  small: 10,
  medium: 16,
  large: 24,
  pill: 999,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
