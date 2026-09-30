import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { FeedbackBox } from '@/components/practice/feedback-box';
import { TipoInfo } from '@/components/practice/flashcard-face';
import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { calificarOrden, type Rating } from '@/lib/grading';
import { barajar, type EjercicioDe } from '@/lib/practice';

/** Baraja las palabras procurando que no queden ya en el orden correcto. */
function mezclar(palabras: string[]): string[] {
  if (new Set(palabras).size < 2) return palabras;
  for (let intento = 0; intento < 10; intento++) {
    const mezcladas = barajar(palabras);
    if (mezcladas.some((palabra, i) => palabra !== palabras[i])) return mezcladas;
  }
  return [...palabras].reverse();
}

interface SentenceOrderProps {
  ejercicio: EjercicioDe<'orden'>;
  onTerminar: (rating: Rating) => void;
}

/** La traducción es la pista; tocas las palabras revueltas en el orden correcto. */
export function SentenceOrder({ ejercicio, onTerminar }: SentenceOrderProps) {
  const { card } = ejercicio;
  const theme = useTheme();
  const correcta = useMemo(() => card.en.split(/\s+/).filter(Boolean), [card.en]);
  const [fichas] = useState(() => mezclar(correcta));
  const [colocadas, setColocadas] = useState<number[]>([]);
  const [rating, setRating] = useState<Rating | null>(null);

  const bloqueado = rating !== null;
  const completa = colocadas.length === fichas.length;
  const pendientes = fichas.map((_, i) => i).filter((i) => !colocadas.includes(i));

  const poner = (i: number) => setColocadas((actuales) => [...actuales, i]);
  const quitar = (i: number) => setColocadas((actuales) => actuales.filter((x) => x !== i));
  const comprobar = () => setRating(calificarOrden(correcta, colocadas.map((i) => fichas[i])));

  const ficha = (i: number, onPress: () => void) => (
    <Pressable
      key={i}
      onPress={onPress}
      disabled={bloqueado}
      style={({ pressed }) => [
        styles.ficha,
        { backgroundColor: theme.backgroundSelected, borderColor: theme.border },
        pressed && styles.pressed,
      ]}>
      <ThemedText>{fichas[i]}</ThemedText>
    </Pressable>
  );

  const titulo =
    rating === 2 ? '✅ ¡Perfecto! +3 XP' : rating === 1 ? '🤏 Casi — te faltó poco' : '❌ No es el orden';
  const colorZona = rating === null ? theme.border : rating === 2 ? theme.success : theme.danger;

  return (
    <Card>
      <ThemedText type="label" themeColor="primary">
        🔀 Ordena la frase
      </ThemedText>
      <ThemedText style={styles.traduccion}>{card.es}</ThemedText>

      <View style={[styles.zona, { borderColor: colorZona }]}>
        {colocadas.length === 0 ? (
          <ThemedText type="small" themeColor="textSecondary">
            Toca las palabras en orden
          </ThemedText>
        ) : (
          colocadas.map((i) => ficha(i, () => quitar(i)))
        )}
      </View>

      {!bloqueado && <View style={styles.fichas}>{pendientes.map((i) => ficha(i, () => poner(i)))}</View>}

      {rating === null ? (
        <View style={styles.row}>
          <Button variant="primary" onPress={comprobar} disabled={!completa}>
            Comprobar
          </Button>
          <Button variant="secondary" onPress={() => setColocadas([])} disabled={colocadas.length === 0}>
            Reiniciar
          </Button>
        </View>
      ) : (
        <>
          <FeedbackBox rating={rating} titulo={titulo}>
            <View style={styles.respuesta}>
              <ThemedText style={styles.correcta}>{card.en}</ThemedText>
              <SpeakButton text={card.en} size={22} />
            </View>
          </FeedbackBox>
          <TipoInfo card={card} />
          <Button variant="primary" onPress={() => onTerminar(rating)}>
            Siguiente →
          </Button>
        </>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  traduccion: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
  },
  zona: {
    minHeight: 72,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: Radius.medium,
    padding: Spacing.two,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: Spacing.two,
  },
  fichas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  ficha: {
    minHeight: 44,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: Radius.small,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  pressed: {
    opacity: 0.7,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  respuesta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  correcta: {
    flex: 1,
    fontWeight: '600',
  },
});
