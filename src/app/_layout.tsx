import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ReactNode, useMemo } from 'react';

import { TextSizeControl } from '@/components/text-size-control';
import { ProgressProvider } from '@/context/progress-context';
import { SettingsProvider } from '@/context/settings-context';
import { useResolvedTheme } from '@/hooks/use-theme';

/** Aplica el tema elegido a la navegación (cabeceras, fondos) y a la barra de estado. */
function NavigationTheme({ children }: { children: ReactNode }) {
  const { colors, dark } = useResolvedTheme();

  const navTheme = useMemo(() => {
    const base = dark ? DarkTheme : DefaultTheme;
    return {
      ...base,
      colors: {
        ...base.colors,
        primary: colors.primary,
        background: colors.background,
        card: colors.backgroundElement,
        text: colors.text,
        border: colors.border,
      },
    };
  }, [colors, dark]);

  return (
    <ThemeProvider value={navTheme}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <SettingsProvider>
      <NavigationTheme>
        <ProgressProvider>
          <Stack screenOptions={{ headerRight: () => <TextSizeControl /> }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ProgressProvider>
      </NavigationTheme>
    </SettingsProvider>
  );
}
