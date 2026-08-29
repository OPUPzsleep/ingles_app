import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExplainBlock } from '@/components/explain-block';
import { PronunciationCard } from '@/components/pronunciation-card';
import { ReferenceTable } from '@/components/reference-table';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VocabCard } from '@/components/vocab-card';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { getPronunVocab, getUnit } from '@/lib/grammar';

export default function UnidadScreen() {
  const { num: numParam } = useLocalSearchParams<{ num: string }>();
  const num = Number(numParam);
  const router = useRouter();
  const { doneUnits, markUnitDone } = useProgress();

  const unit = getUnit(num);
  const isDone = doneUnits.includes(num);
  const pv = getPronunVocab(num);
  const prevNum = num > 1 ? num - 1 : null;
  const nextNum = num < 145 ? num + 1 : null;

  if (!unit) {
    return (
      <ThemedView style={styles.container}>
        <Stack.Screen options={{ title: ALL_UNIT_TITLES[num] ?? `Unit ${num}` }} />
        <SafeAreaView style={styles.safeArea} edges={['bottom']}>
          <ScrollView contentContainerStyle={styles.content}>
            <Card>
              <ThemedText type="label" themeColor="primary">
                Unit {num}
              </ThemedText>
              <ThemedText type="cardTitle">{ALL_UNIT_TITLES[num]}</ThemedText>
              <ThemedText themeColor="textSecondary">
                Esta unidad todavía no tiene contenido cargado en la app.
              </ThemedText>
              <Button variant="secondary" onPress={() => markUnitDone(num)}>
                ✅ Marcar como estudiada
              </Button>
            </Card>
          </ScrollView>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: unit.title }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <Card>
            <ThemedText type="label" themeColor="primary">
              Unit {num} · {unit.topic}
            </ThemedText>
            <ThemedText type="cardTitle">{unit.title}</ThemedText>
            <Button variant="primary" onPress={() => router.push(`/quiz/unidad/${num}`)}>
              {isDone ? '🔁 Repetir quiz' : '✏️ Quiz de esta unidad'}
            </Button>
          </Card>

          <Card>
            <ThemedText type="label" themeColor="primary">
              📖 Teoría
            </ThemedText>
            {unit.explain.map((block, i) => (
              <ExplainBlock key={i} block={block} />
            ))}
          </Card>

          {unit.table && (
            <Card>
              <ThemedText type="label" themeColor="primary">
                📊 Tabla de referencia rápida
              </ThemedText>
              <ReferenceTable table={unit.table} />
            </Card>
          )}

          {!!pv?.tips.length && (
            <Card>
              <ThemedText type="label" themeColor="primary">
                🔊 Pronunciación
              </ThemedText>
              {pv.tips.map((tip, i) => (
                <PronunciationCard key={i} tip={tip} />
              ))}
            </Card>
          )}

          {!!pv?.vocab.length && (
            <Card>
              <ThemedText type="label" themeColor="primary">
                📝 Vocabulario frecuente
              </ThemedText>
              <View style={styles.vocabGrid}>
                {pv.vocab.map((entry, i) => (
                  <VocabCard key={i} entry={entry} />
                ))}
              </View>
            </Card>
          )}

          <View style={styles.navRow}>
            {prevNum ? (
              <Button variant="secondary" onPress={() => router.push(`/unidad/${prevNum}`)} style={styles.navButton}>
                {`← Unidad ${prevNum}`}
              </Button>
            ) : (
              <View style={styles.navButton} />
            )}
            {nextNum && (
              <Button variant="primary" onPress={() => router.push(`/unidad/${nextNum}`)} style={styles.navButton}>
                {`Unidad ${nextNum} →`}
              </Button>
            )}
          </View>
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
  vocabGrid: {
    gap: Spacing.two,
  },
  navRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  navButton: {
    flex: 1,
  },
});
