/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useSettings } from '@/context/settings-context';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTheme() {
  const scheme = useColorScheme();
  const theme = scheme === 'unspecified' ? 'light' : scheme;
  const { focusModeEnabled } = useSettings();

  const base = Colors[theme];
  // En Modo TDAH usamos un fondo más cálido y de menor contraste en toda la
  // app, sin tocar los demás colores (tarjetas, texto, etc.).
  return focusModeEnabled ? { ...base, background: base.focusBackground } : base;
}
