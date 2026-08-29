import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GramBlock } from '@/components/gram-block';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';

export default function GramaticaConceptoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const concept = GRAM_CONCEPTS.find((c) => c.id === id);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: concept?.title ?? 'Concepto' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          {!concept ? (
            <ThemedText themeColor="textSecondary">No se encontró este concepto.</ThemedText>
          ) : (
            <>
              <ThemedText type="label" themeColor="primary">
                {concept.tag}
              </ThemedText>
              <ThemedText type="subtitle">{concept.title}</ThemedText>
              {concept.blocks.map((block, i) => (
                <GramBlock key={i} block={block} />
              ))}
            </>
          )}
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
    padding: Spacing.four,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
