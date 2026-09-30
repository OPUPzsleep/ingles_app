import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UnitListItem } from '@/components/unit-list-item';
import { Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { UNITS } from '@/data/grammar/units';
import { isAtOrBelowLevel, unitsForTopic } from '@/lib/grammar';

interface TopicUnitsProps {
  topicName: string;
  onSelectUnit: (num: number) => void;
  /** Unidad resaltada (la que se está viendo en la columna derecha). */
  selectedUnit?: number | null;
}

/** Las unidades de un tema (primero las de tu nivel) y el botón del quiz de todo el tema. */
export function TopicUnits({ topicName, onSelectUnit, selectedUnit }: TopicUnitsProps) {
  const router = useRouter();
  const { doneUnits, userLevel } = useProgress();

  const units = unitsForTopic(topicName);
  const hasContent = units.some((u) => UNITS[u]);

  // Dentro del tema, primero las unidades a tu nivel (en su orden original),
  // luego el resto — así no tienes que adivinar por cuál empezar.
  const orderedUnits = useMemo(() => {
    const atLevel = units.filter((u) => UNITS[u] && isAtOrBelowLevel(UNITS[u].level, userLevel));
    const rest = units.filter((u) => UNITS[u] && !isAtOrBelowLevel(UNITS[u].level, userLevel));
    return [...atLevel, ...rest];
  }, [units, userLevel]);

  if (!hasContent) {
    return (
      <Card>
        <ThemedText themeColor="textSecondary">
          Este tema todavía no tiene contenido — llega en una próxima actualización.
        </ThemedText>
      </Card>
    );
  }

  return (
    <View style={styles.lista}>
      {orderedUnits.map((num) => (
        <UnitListItem
          key={num}
          num={num}
          title={ALL_UNIT_TITLES[num] ?? `Unit ${num}`}
          done={doneUnits.includes(num)}
          level={UNITS[num]?.level}
          atUserLevel={UNITS[num] ? isAtOrBelowLevel(UNITS[num].level, userLevel) : true}
          selected={num === selectedUnit}
          onPress={() => onSelectUnit(num)}
        />
      ))}

      <Button
        variant="secondary"
        onPress={() => router.push(`/quiz/tema/${encodeURIComponent(topicName)}`)}
        style={styles.quizButton}>
        🏁 Quiz de todo el tema
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    gap: Spacing.two,
  },
  quizButton: {
    marginTop: Spacing.two,
  },
});
