import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';
import { ProgressProvider } from '@/context/progress-context';
import { SettingsProvider } from '@/context/settings-context';

const LightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: Colors.light.primary, background: Colors.light.background },
};
const DarkNavTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, primary: Colors.dark.primary, background: Colors.dark.background },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkNavTheme : LightTheme}>
      <ProgressProvider>
        <SettingsProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SettingsProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}
