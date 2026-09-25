import { StyleProp, StyleSheet, TextStyle } from 'react-native';

import { useTextScale } from '@/context/settings-context';

const DEFAULT_FONT_SIZE = 14;

/**
 * Aplana el estilo de un texto y multiplica fontSize/lineHeight por la escala
 * de texto elegida por el usuario (botones A− / A+).
 */
export function useScaledTextStyle(style: StyleProp<TextStyle>): StyleProp<TextStyle> {
  const scale = useTextScale();
  if (scale === 1) return style;

  const flat = StyleSheet.flatten(style) ?? {};
  return {
    ...flat,
    fontSize: (flat.fontSize ?? DEFAULT_FONT_SIZE) * scale,
    lineHeight: flat.lineHeight !== undefined ? flat.lineHeight * scale : undefined,
  };
}
