import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/ui/card';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { GRAM_CATS } from '@/data/gramatica/categories';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';

export default function GramaticaCategoriaScreen() {
  const { categoria } = useLocalSearchParams<{ categoria: string }>();
  const router = useRouter();

  const cat = GRAM_CATS.find((c) => c.id === categoria);
  const concepts = GRAM_CONCEPTS.filter((c) => c.cat === categoria);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: cat?.name ?? 'Gramática' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          {concepts.length === 0 ? (
            <ThemedText themeColor="textSecondary">
              Esta categoría todavía no tiene conceptos cargados.
            </ThemedText>
          ) : (
            concepts.map((concept) => (
              <Card key={concept.id} onPress={() => router.push(`/gramatica/concepto/${concept.id}`)}>
                <ThemedText type="label" themeColor="primary">
                  {concept.tag}
                </ThemedText>
                <ThemedText type="cardTitle">{concept.title}</ThemedText>
              </Card>
            ))
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
    padding: Spacing.three,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
