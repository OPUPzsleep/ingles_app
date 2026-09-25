/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Palette, Palettes } from '@/constants/theme';
import { useFocusMode, useThemeName } from '@/context/settings-context';
import { useColorScheme } from '@/hooks/use-color-scheme';

/** Tema resuelto: paleta de colores y si es oscuro (para la barra de estado y la navegación). */
export function useResolvedTheme(): { colors: Palette; dark: boolean } {
  const scheme = useColorScheme();
  const themeName = useThemeName();
  const focusModeEnabled = useFocusMode();

  const name = themeName === 'auto' ? (scheme === 'dark' ? 'oscuro' : 'claro') : themeName;
  const { colors, dark } = Palettes[name];

  // En Modo TDAH usamos un fondo de menor contraste en toda la app,
  // sin tocar los demás colores (tarjetas, texto, etc.).
  return {
    colors: focusModeEnabled ? { ...colors, background: colors.focusBackground } : colors,
    dark,
  };
}

export function useTheme(): Palette {
  return useResolvedTheme().colors;
}
