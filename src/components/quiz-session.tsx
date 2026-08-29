import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { useTheme } from '@/hooks/use-theme';
import { QuizQuestion } from '@/types/grammar';

interface PooledQuizQuestion extends QuizQuestion {
  unitTitle: string;
}

interface QuizSessionProps {
  pool: PooledQuizQuestion[];
  modeLabel: string;
  onFinish?: () => void;
  onExit: () => void;
}

export function QuizSession({ pool, modeLabel, onFinish, onExit }: QuizSessionProps) {
  const { registerQuizAnswer } = useProgress();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const theme = useTheme();

  if (!pool.length) {
    return (
      <Card>
        <ThemedText themeColor="textSecondary">Esta unidad todavía no tiene preguntas.</ThemedText>
      </Card>
    );
  }

  if (idx >= pool.length) {
    const pct = sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '💪' : '📚';
    const msg =
      pct >= 90
        ? '¡Excelente! Dominas este tema.'
        : pct >= 70
          ? '¡Muy bien! Sigue practicando.'
          : pct >= 50
            ? 'Buen esfuerzo. Repasa las unidades y vuelve a intentarlo.'
            : 'Sigue estudiando — la práctica hace al maestro.';

    return (
      <Card style={styles.resultsCard}>
        <ThemedText style={styles.resultsEmoji}>{emoji}</ThemedText>
        <ThemedText type="cardTitle">Quiz completado — {modeLabel}</ThemedText>
        <ThemedText type="title" themeColor="primary" style={styles.resultsPct}>
          {pct}%
        </ThemedText>
        <ThemedText themeColor="textSecondary">
          {sessionCorrect} de {sessionTotal} respuestas correctas
        </ThemedText>
        <ThemedText style={styles.resultsMsg}>{msg}</ThemedText>
        <View style={styles.resultsButtons}>
          <Button
            variant="primary"
            onPress={() => {
              setIdx(0);
              setSessionCorrect(0);
              setSessionTotal(0);
              setSelected(null);
            }}>
            🔄 Repetir
          </Button>
          <Button variant="secondary" onPress={onExit}>
            ↩️ Volver
          </Button>
        </View>
      </Card>
    );
  }

  const q = pool[idx];
  const answered = selected !== null;
  const pct = Math.round((idx / pool.length) * 100);

  const selectOption = (optIdx: number) => {
    if (answered) return;
    setSelected(optIdx);
    const correct = optIdx === q.ans;
    setSessionTotal((t) => t + 1);
    if (correct) setSessionCorrect((c) => c + 1);
    registerQuizAnswer(correct);
  };

  const next = () => {
    const nextIdx = idx + 1;
    setSelected(null);
    if (nextIdx >= pool.length) onFinish?.();
    setIdx(nextIdx);
  };

  return (
    <ScrollView>
      <Card style={styles.headerCard}>
        <View style={styles.headerRow}>
          <ThemedText type="label" themeColor="primary">
            ✏️ Quiz — {modeLabel}
          </ThemedText>
          <ThemedText type="smallBold" themeColor="primary">
            {sessionTotal > 0 ? `${Math.round((sessionCorrect / sessionTotal) * 100)}%` : '—'}
          </ThemedText>
        </View>
        <ProgressBar percent={pct} />
        <View style={styles.headerRow}>
          <ThemedText type="small" themeColor="textSecondary">
            Pregunta {idx + 1} de {pool.length}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {sessionCorrect} correctas · {sessionTotal} respondidas
          </ThemedText>
        </View>
      </Card>

      <Card>
        <ThemedText type="label" themeColor="primary">
          📌 {q.unitTitle}
        </ThemedText>
        <ThemedText style={styles.question}>{q.q}</ThemedText>
        <View style={styles.options}>
          {q.opts.map((opt, i) => {
            const isCorrect = answered && i === q.ans;
            const isWrong = answered && i === selected && i !== q.ans;
            return (
              <Pressable
                key={i}
                onPress={() => selectOption(i)}
                disabled={answered}
                style={[
                  styles.option,
                  { borderColor: theme.border, backgroundColor: theme.backgroundSelected },
                  isCorrect && { borderColor: theme.success, backgroundColor: theme.successMuted },
                  isWrong && { borderColor: theme.danger, backgroundColor: theme.dangerMuted },
                ]}>
                <ThemedText
                  themeColor={isCorrect ? 'success' : isWrong ? 'danger' : 'text'}
                  style={styles.optionText}>
                  {String.fromCharCode(65 + i)}. {opt}
                </ThemedText>
              </Pressable>
            );
          })}
        </View>

        {answered && (
          <View
            style={[
              styles.feedback,
              {
                backgroundColor: selected === q.ans ? theme.successMuted : theme.dangerMuted,
              },
            ]}>
            <ThemedText themeColor={selected === q.ans ? 'success' : 'danger'} style={styles.feedbackText}>
              {selected === q.ans ? '✅ ¡Correcto! +5 XP 🎉' : '❌ No del todo.'} {q.exp}
            </ThemedText>
          </View>
        )}

        <View style={styles.buttonsRow}>
          {answered && (
            <Button variant="primary" onPress={next}>
              Siguiente →
            </Button>
          )}
          <Button variant="secondary" onPress={onExit}>
            🔀 Cambiar modo
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerCard: {
    marginBottom: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 17,
    lineHeight: 24,
  },
  options: {
    gap: Spacing.two,
  },
  option: {
    borderWidth: 1,
    borderRadius: Radius.small,
    padding: Spacing.three,
  },
  optionText: {
    lineHeight: 20,
  },
  feedback: {
    borderRadius: Radius.small,
    padding: Spacing.three,
  },
  feedbackText: {
    lineHeight: 21,
  },
  buttonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  resultsCard: {
    alignItems: 'center',
    paddingVertical: Spacing.five,
  },
  resultsEmoji: {
    fontSize: 48,
  },
  resultsPct: {
    fontSize: 40,
    lineHeight: 46,
  },
  resultsMsg: {
    textAlign: 'center',
  },
  resultsButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    justifyContent: 'center',
    marginTop: Spacing.two,
  },
});
