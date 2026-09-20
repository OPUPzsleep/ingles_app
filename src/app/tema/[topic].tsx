import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UnitListItem } from '@/components/unit-list-item';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { UNITS } from '@/data/grammar/units';
import { getTopic, isAtOrBelowLevel, unitsForTopic } from '@/lib/grammar';

export default function TemaScreen() {
  const { topic: topicParam } = useLocalSearchParams<{ topic: string }>();
  const topicName = decodeURIComponent(topicParam ?? '');
  const router = useRouter();
  const { doneUnits, userLevel } = useProgress();

  const topic = getTopic(topicName);
  const units = unitsForTopic(topicName);
  const hasContent = units.some((u) => UNITS[u]);

  // Dentro del tema, primero las unidades a tu nivel (en su orden original),
  // luego el resto — así no tienes que adivinar por cuál empezar.
  const orderedUnits = useMemo(() => {
    const atLevel = units.filter((u) => UNITS[u] && isAtOrBelowLevel(UNITS[u].level, userLevel));
    const rest = units.filter((u) => UNITS[u] && !isAtOrBelowLevel(UNITS[u].level, userLevel));
    return [...atLevel, ...rest];
  }, [units, userLevel]);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: topicName }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">
            {topic?.icon} {topicName}
          </ThemedText>

          {!hasContent ? (
            <Card>
              <ThemedText themeColor="textSecondary">
                Este tema todavía no tiene contenido — llega en una próxima actualización.
              </ThemedText>
            </Card>
          ) : (
            <>
              {orderedUnits.map((num) => (
                <UnitListItem
                  key={num}
                  num={num}
                  title={ALL_UNIT_TITLES[num] ?? `Unit ${num}`}
                  done={doneUnits.includes(num)}
                  level={UNITS[num]?.level}
                  atUserLevel={UNITS[num] ? isAtOrBelowLevel(UNITS[num].level, userLevel) : true}
                  onPress={() => router.push(`/unidad/${num}`)}
                />
              ))}

              <Button
                variant="secondary"
                onPress={() => router.push(`/quiz/tema/${encodeURIComponent(topicName)}`)}
                style={styles.quizButton}>
                🏁 Quiz de todo el tema
              </Button>
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
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  quizButton: {
    marginTop: Spacing.two,
  },
});
