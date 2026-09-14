import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChatSimulator } from '@/components/chat-simulator';
import { ContrastCard } from '@/components/contrast-card';
import { ExplainBlock } from '@/components/explain-block';
import { GrammarFormula } from '@/components/grammar-formula';
import { PronunciationCard } from '@/components/pronunciation-card';
import { ReadingStory } from '@/components/reading-story';
import { ReferenceTable } from '@/components/reference-table';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VocabCard } from '@/components/vocab-card';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { useTheme } from '@/hooks/use-theme';
import { getPronunVocab, getUnit } from '@/lib/grammar';

type Tab = 'teoria' | 'lectura' | 'consejos';

function EmptyTab() {
  return (
    <Card>
      <ThemedText type="small" themeColor="textSecondary" style={styles.emptyText}>
        🚧 Todavía no hay contenido en esta sección.
      </ThemedText>
    </Card>
  );
}

export default function UnidadScreen() {
  const { num: numParam } = useLocalSearchParams<{ num: string }>();
  const num = Number(numParam);
  const router = useRouter();
  const theme = useTheme();
  const { doneUnits, markUnitDone } = useProgress();
  const [tab, setTab] = useState<Tab>('teoria');

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

  const hasLectura = !!unit.simulatedChat?.length || !!unit.readingText || !!pv?.tips.length;
  const hasConsejos = !!unit.tips?.length || !!unit.dailyWords?.length || !!pv?.vocab.length;

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

          <View style={styles.tabRow}>
            <Button
              variant={tab === 'teoria' ? 'primary' : 'secondary'}
              onPress={() => setTab('teoria')}
              style={styles.tabButton}>
              📖 Teoría
            </Button>
            <Button
              variant={tab === 'lectura' ? 'primary' : 'secondary'}
              onPress={() => setTab('lectura')}
              style={styles.tabButton}>
              💬 Zona Lectora
            </Button>
            <Button
              variant={tab === 'consejos' ? 'primary' : 'secondary'}
              onPress={() => setTab('consejos')}
              style={styles.tabButton}>
              💡 Consejos
            </Button>
          </View>

          {tab === 'teoria' && (
            <>
              <Card>
                <ThemedText type="label" themeColor="primary">
                  📖 Teoría
                </ThemedText>
                {unit.explain.map((block, i) => (
                  <ExplainBlock key={i} block={block} />
                ))}
                {!!unit.syntaxChips?.length && <GrammarFormula formulas={unit.syntaxChips} />}
              </Card>

              {unit.contrastCard && (
                <Card>
                  <ThemedText type="label" themeColor="primary">
                    🔍 Compara la diferencia
                  </ThemedText>
                  <ContrastCard data={unit.contrastCard} />
                </Card>
              )}

              {unit.table && (
                <Card>
                  <ThemedText type="label" themeColor="primary">
                    📊 Tabla de referencia rápida
                  </ThemedText>
                  <ReferenceTable table={unit.table} />
                </Card>
              )}
            </>
          )}

          {tab === 'lectura' &&
            (hasLectura ? (
              <>
                {!!unit.readingText && (
                  <Card>
                    <ThemedText type="label" themeColor="primary">
                      📰 Lectura
                    </ThemedText>
                    <ReadingStory story={unit.readingText} />
                  </Card>
                )}

                {!!unit.simulatedChat?.length && (
                  <Card>
                    <ThemedText type="label" themeColor="primary">
                      💬 Diálogo simulado
                    </ThemedText>
                    <ChatSimulator messages={unit.simulatedChat} />
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
              </>
            ) : (
              <EmptyTab />
            ))}

          {tab === 'consejos' &&
            (hasConsejos ? (
              <>
                {!!unit.tips?.length && (
                  <Card>
                    <ThemedText type="label" themeColor="primary">
                      💡 Consejos
                    </ThemedText>
                    {unit.tips.map((tip, i) => (
                      <View key={i} style={[styles.tipBox, { backgroundColor: theme.warningMuted }]}>
                        <ThemedText type="small" style={styles.tipText}>
                          💡 {tip}
                        </ThemedText>
                      </View>
                    ))}
                  </Card>
                )}

                {!!unit.dailyWords?.length && (
                  <Card>
                    <ThemedText type="label" themeColor="primary">
                      🗓️ Palabras del día a día
                    </ThemedText>
                    <View style={styles.vocabGrid}>
                      {unit.dailyWords.map((entry, i) => (
                        <VocabCard key={i} entry={entry} />
                      ))}
                    </View>
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
              </>
            ) : (
              <EmptyTab />
            ))}

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
  tabRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  tabButton: {
    flex: 1,
  },
  vocabGrid: {
    gap: Spacing.two,
  },
  tipBox: {
    borderRadius: Radius.small,
    padding: Spacing.three,
  },
  tipText: {
    lineHeight: 21,
  },
  emptyText: {
    textAlign: 'center',
  },
  navRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  navButton: {
    flex: 1,
  },
});
