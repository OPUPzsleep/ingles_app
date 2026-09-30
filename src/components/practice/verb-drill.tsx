import { useState } from 'react';
import { Keyboard, Platform, StyleSheet, View } from 'react-native';

import { FeedbackBox } from '@/components/practice/feedback-box';
import { PracticeInput } from '@/components/practice/practice-input';
import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import { calificarVerbo, type Rating } from '@/lib/grading';
import { aproxForma, EjercicioDe, ETIQUETA_FORMA, formaTexto, MARCO_FORMA } from '@/lib/practice';

interface VerbDrillProps {
  ejercicio: EjercicioDe<'verbo'>;
  onTerminar: (rating: Rating) => void;
}

/** Ves el verbo en español y una forma (pasado, participio…); escribes la forma en inglés. */
export function VerbDrill({ ejercicio, onTerminar }: VerbDrillProps) {
  const { verbo, forma } = ejercicio;
  const correcta = formaTexto(verbo, forma);
  const aprox = aproxForma(verbo, forma);
  const [texto, setTexto] = useState('');
  const [rating, setRating] = useState<Rating | null>(null);

  const comprobar = () => {
    if (rating === null && texto.trim()) {
      setRating(calificarVerbo(correcta, texto));
      if (Platform.OS !== 'web') Keyboard.dismiss();
    }
  };
  // Enter comprueba y, ya corregido, pasa al siguiente.
  const enviar = () => (rating === null ? comprobar() : onTerminar(rating));

  const titulo =
    rating === 2
      ? '✅ ¡Correcto! +3 XP'
      : rating === 1
        ? `🤏 Casi — escribiste “${texto.trim()}”`
        : '❌ No es esa';

  return (
    <Card>
      <ThemedText type="label" themeColor="primary">
        🧩 Práctica de verbos
      </ThemedText>
      <ThemedText style={styles.verbo}>
        {verbo.es} <ThemedText themeColor="textSecondary">· {verbo.base}</ThemedText>
      </ThemedText>
      <ThemedText>
        Escribe el <ThemedText type="smallBold">{ETIQUETA_FORMA[forma]}</ThemedText>
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary" style={styles.marco}>
        {MARCO_FORMA[forma]}
      </ThemedText>

      {/* Sigue "editable" tras corregir para que Enter pase al siguiente; solo se ignoran los cambios. */}
      <PracticeInput
        value={texto}
        onChangeText={(nuevo) => rating === null && setTexto(nuevo)}
        autoFocus
        returnKeyType="done"
        submitBehavior="submit"
        // La web solo respeta blurOnSubmit (por defecto quita el foco al pulsar Enter, y el segundo Enter se perdería).
        blurOnSubmit={false}
        onSubmitEditing={enviar}
        placeholder="Escribe aquí…"
      />

      {rating === null ? (
        <View style={styles.row}>
          <Button variant="primary" onPress={comprobar} disabled={!texto.trim()}>
            Comprobar
          </Button>
          <Button variant="ghost" onPress={() => setRating(0)}>
            No lo sé
          </Button>
        </View>
      ) : (
        <>
          <FeedbackBox rating={rating} titulo={titulo}>
            <View style={styles.respuesta}>
              <ThemedText>
                Respuesta: <ThemedText type="smallBold">{correcta}</ThemedText>
              </ThemedText>
              <SpeakButton text={correcta.split('/')[0].trim()} size={22} />
            </View>
            {!!aprox && (
              <ThemedText type="small" themeColor="textSecondary">
                Se dice {aprox}
              </ThemedText>
            )}
          </FeedbackBox>
          <Button variant="primary" onPress={() => onTerminar(rating)}>
            Siguiente →
          </Button>
        </>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  verbo: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: '700',
  },
  marco: {
    fontStyle: 'italic',
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
});
