import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1B1B1B',
    textSecondary: '#6E6E6E',
    background: '#F4F4F3',
    /** Fondo alternativo para el Modo TDAH: gris aún más neutro, sin brillo. */
    focusBackground: '#ECECEA',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#E7E7E6',
    border: '#D8D8D7',
    primary: '#2B2B2B',
    primaryMuted: '#E3E3E2',
    onPrimary: '#FFFFFF',
    /** Único color no-gris de la paleta: resalta lo relacionado al Modo TDAH. */
    focusAccent: '#B45309',
    focusAccentMuted: '#FDECD3',
    success: '#0FA968',
    successMuted: '#E3F8EE',
    warning: '#E08A00',
    warningMuted: '#FFF3DD',
    danger: '#E43F5A',
    dangerMuted: '#FDE8EB',
  },
  dark: {
    text: '#EDEDED',
    textSecondary: '#9C9C9C',
    background: '#121212',
    /** Fondo alternativo para el Modo TDAH: casi negro, mínimo brillo. */
    focusBackground: '#0D0D0D',
    backgroundElement: '#1D1D1D',
    backgroundSelected: '#292929',
    border: '#333333',
    primary: '#E9E9E9',
    primaryMuted: '#2E2E2E',
    onPrimary: '#141414',
    /** Único color no-gris de la paleta: resalta lo relacionado al Modo TDAH. */
    focusAccent: '#FBBF24',
    focusAccentMuted: '#3A2A0E',
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
