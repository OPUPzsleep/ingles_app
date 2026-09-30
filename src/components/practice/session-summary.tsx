import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import type { Rating } from '@/lib/grading';
import { describirEjercicio, type Ejercicio } from '@/lib/practice';

export interface Resultado {
  ejercicio: Ejercicio;
  rating: Rating;
}

interface SessionSummaryProps {
  titulo: string;
  resultados: Resultado[];
  onRepetir: () => void;
  onSalir: () => void;
}

/** Pantalla final: cómo te fue, cuánta XP ganaste y qué conviene repasar. */
export function SessionSummary({ titulo, resultados, onRepetir, onSalir }: SessionSummaryProps) {
  const total = resultados.length;
  const aciertos = resultados.filter((r) => r.rating === 2).length;
  const casi = resultados.filter((r) => r.rating === 1).length;
  const fallos = total - aciertos - casi;
  const pct = total > 0 ? Math.round(((aciertos + casi * 0.5) / total) * 100) : 0;

  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '💪' : '📚';
  const mensaje =
    pct >= 90
      ? '¡Excelente! Lo dominas.'
      : pct >= 70
        ? '¡Muy bien! Sigue así.'
        : pct >= 50
          ? 'Buen esfuerzo. Lo que fallaste quedó para repasar.'
          : 'Sigue practicando: lo que fallaste volverá pronto.';

  const repasar = resultados.filter((r) => r.rating < 2);

  return (
    <View style={styles.contenedor}>
      <Card style={styles.resultados}>
        <ThemedText style={styles.emoji}>{emoji}</ThemedText>
        <ThemedText type="cardTitle" style={styles.centro}>
          Sesión completada — {titulo}
        </ThemedText>
        <ThemedText type="title" themeColor="primary" style={styles.pct}>
          {pct}%
        </ThemedText>
        <ThemedText themeColor="textSecondary">
          ✅ {aciertos} · 🤏 {casi} · ❌ {fallos}
        </ThemedText>
        <ThemedText type="smallBold" themeColor="primary">
          +{aciertos * 3} XP
        </ThemedText>
        <ThemedText style={styles.centro}>{mensaje}</ThemedText>
        <View style={styles.botones}>
          <Button variant="primary" onPress={onRepetir}>
            🔄 Otra sesión
          </Button>
          <Button variant="secondary" onPress={onSalir}>
            ↩️ Volver
          </Button>
        </View>
      </Card>

      {repasar.length > 0 && (
        <Card>
          <ThemedText type="label" themeColor="primary">
            🔁 Para repasar
          </ThemedText>
          {repasar.map(({ ejercicio, rating }, i) => {
            const { titulo: enunciado, respuesta } = describirEjercicio(ejercicio);
            return (
              <View key={i} style={styles.repaso}>
                <ThemedText type="smallBold">
                  {rating === 1 ? '🤏' : '❌'} {enunciado}
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {respuesta}
                </ThemedText>
              </View>
            );
          })}
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: Spacing.three,
  },
  resultados: {
    alignItems: 'center',
    paddingVertical: Spacing.five,
  },
  emoji: {
    fontSize: 48,
    lineHeight: 56,
  },
  centro: {
    textAlign: 'center',
  },
  pct: {
    fontSize: 40,
    lineHeight: 46,
  },
  botones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    justifyContent: 'center',
    marginTop: Spacing.two,
  },
  repaso: {
    gap: Spacing.half,
  },
});
