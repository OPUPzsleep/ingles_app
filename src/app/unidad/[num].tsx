import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { UnitView } from '@/components/unit-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { useIsWide } from '@/hooks/use-is-wide';
import { getUnit } from '@/lib/grammar';

export default function UnidadScreen() {
  const { num: numParam } = useLocalSearchParams<{ num: string }>();
  const num = Number(numParam);
  const isWide = useIsWide();
  const title = getUnit(num)?.title ?? ALL_UNIT_TITLES[num] ?? `Unit ${num}`;

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={[styles.content, isWide && styles.contentAncho]}>
          <UnitView num={num} />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    padding: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  // En pantalla ancha la unidad se reparte en dos columnas (UnitView limita su propio ancho).
  contentAncho: {
    maxWidth: 1400,
    padding: Spacing.four,
  },
});
