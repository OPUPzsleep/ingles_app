import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ConceptoView } from '@/components/gramatica/concepto-view';
import { ExploradorGramatica } from '@/components/gramatica/explorador';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import { useIsWide } from '@/hooks/use-is-wide';

export default function GramaticaConceptoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const isWide = useIsWide();
  const concept = GRAM_CONCEPTS.find((c) => c.id === id);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: isWide ? 'Gramática ES' : (concept?.title ?? 'Concepto') }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        {isWide ? (
          <ExploradorGramatica conceptoId={id} />
        ) : (
          <ScrollView contentContainerStyle={styles.content}>
            {!concept ? (
              <ThemedText themeColor="textSecondary">No se encontró este concepto.</ThemedText>
            ) : (
              <ConceptoView concepto={concept} />
            )}
          </ScrollView>
        )}
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
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
