import { Stack, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExploradorGramatica } from '@/components/gramatica/explorador';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/ui/card';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { GRAM_CATS } from '@/data/gramatica/categories';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import { useIsWide } from '@/hooks/use-is-wide';
import { useEstiloHorizontal } from '@/hooks/use-horizontal';

export default function GramaticaIndexScreen() {
  const estiloHorizontal = useEstiloHorizontal(1000);
  const router = useRouter();
  const isWide = useIsWide();

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: 'Gramática ES' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        {isWide ? (
          <ExploradorGramatica />
        ) : (
          <ScrollView contentContainerStyle={[styles.content, estiloHorizontal]}>
            <ThemedText type="subtitle">📚 Gramática para Hispanohablantes</ThemedText>
            <ThemedText themeColor="textSecondary" style={styles.subtitle}>
              Conceptos gramaticales explicados en español
            </ThemedText>

            {GRAM_CATS.map((cat) => {
              const count = GRAM_CONCEPTS.filter((c) => c.cat === cat.id).length;
              return (
                <Card key={cat.id} onPress={() => router.push(`/gramatica/${cat.id}`)}>
                  <ThemedText style={styles.icon}>{cat.icon}</ThemedText>
                  <ThemedText type="cardTitle">{cat.name}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {count > 0 ? `${count} conceptos` : 'Próximamente'}
                  </ThemedText>
                </Card>
              );
            })}
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
  subtitle: {
    marginBottom: Spacing.two,
  },
  icon: {
    fontSize: 24,
  },
});
