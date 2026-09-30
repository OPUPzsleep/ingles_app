import * as Speech from 'expo-speech';
import { useState } from 'react';
import { Keyboard, Platform, StyleSheet, View } from 'react-native';

import { FeedbackBox } from '@/components/practice/feedback-box';
import { TipoInfo } from '@/components/practice/flashcard-face';
import { PracticeInput } from '@/components/practice/practice-input';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import { calificarDictado, type Rating, type ResultadoDictado } from '@/lib/grading';
import type { EjercicioDe } from '@/lib/practice';

interface DictationProps {
  ejercicio: EjercicioDe<'dictado'>;
  onTerminar: (rating: Rating) => void;
}

/** Suena una frase en inglés y la escribes; se corrige palabra por palabra. */
export function Dictation({ ejercicio, onTerminar }: DictationProps) {
  const { card } = ejercicio;
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState<ResultadoDictado | null>(null);
  const [verTraduccion, setVerTraduccion] = useState(false);

  // Sin reproducción automática: los navegadores la bloquean hasta que el usuario toca algo.
  const escuchar = async (rate: number) => {
    await Speech.stop();
    Speech.speak(card.en, { language: 'en-US', rate });
  };

  const comprobar = () => {
    if (!resultado && texto.trim()) {
      setResultado(calificarDictado(card.en, texto));
      if (Platform.OS !== 'web') Keyboard.dismiss();
    }
  };
  const rendirse = () => setResultado(calificarDictado(card.en, ''));
  // Enter corrige y, ya corregido, pasa al siguiente.
  const enviar = () => (resultado ? onTerminar(resultado.rating) : comprobar());

  const titulo =
    resultado?.rating === 2
      ? '✅ ¡Perfecto! +3 XP'
      : resultado?.rating === 1
        ? `🤏 Casi — ${resultado.fallas === 1 ? '1 palabra' : `${resultado.fallas} palabras`} por corregir`
        : '❌ Escucha otra vez y compara';

  return (
    <Card>
      <ThemedText type="label" themeColor="primary">
        🎧 Dictado
      </ThemedText>
      <ThemedText themeColor="textSecondary">Escucha la frase y escríbela en inglés.</ThemedText>

      <View style={styles.row}>
        <Button variant="primary" onPress={() => escuchar(1)}>
          ▶️ Escuchar
        </Button>
        <Button variant="secondary" onPress={() => escuchar(0.6)}>
          🐢 Lento
        </Button>
      </View>

      {verTraduccion || resultado ? (
        <ThemedText type="small" themeColor="textSecondary" style={styles.traduccion}>
          🌎 {card.es}
        </ThemedText>
      ) : (
        <Button variant="ghost" onPress={() => setVerTraduccion(true)}>
          💡 Ver traducción
        </Button>
      )}

      {/* Sigue "editable" tras corregir para que Enter pase al siguiente; solo se ignoran los cambios. */}
      <PracticeInput
        value={texto}
        onChangeText={(nuevo) => !resultado && setTexto(nuevo)}
        multiline
        numberOfLines={3}
        returnKeyType="done"
        submitBehavior="submit"
        onSubmitEditing={enviar}
        // En web, Enter en un campo de varias líneas solo agrega un salto: aquí debe corregir / pasar al siguiente.
        onKeyPress={(evento) => {
          if (Platform.OS === 'web' && evento.nativeEvent.key === 'Enter') {
            evento.preventDefault();
            enviar();
          }
        }}
        placeholder="Escribe lo que escuchas…"
        style={styles.input}
      />

      {!resultado ? (
        <View style={styles.row}>
          <Button variant="primary" onPress={comprobar} disabled={!texto.trim()}>
            Comprobar
          </Button>
          <Button variant="ghost" onPress={rendirse}>
            No lo sé
          </Button>
        </View>
      ) : (
        <>
          <FeedbackBox rating={resultado.rating} titulo={titulo}>
            <ThemedText>
              {resultado.palabras.map((p, i) => (
                <ThemedText
                  key={i}
                  themeColor={p.ok ? 'success' : 'danger'}
                  style={p.ok ? undefined : styles.mal}>
                  {p.texto}
                  {i < resultado.palabras.length - 1 ? ' ' : ''}
                </ThemedText>
              ))}
            </ThemedText>
            {resultado.sobran.length > 0 && (
              <ThemedText type="small" themeColor="textSecondary">
                Sobraban: {resultado.sobran.join(' ')}
              </ThemedText>
            )}
          </FeedbackBox>
          <TipoInfo card={card} />
          <Button variant="primary" onPress={() => onTerminar(resultado.rating)}>
            Siguiente →
          </Button>
        </>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  traduccion: {
    fontStyle: 'italic',
  },
  input: {
    minHeight: 84,
    textAlignVertical: 'top',
  },
  mal: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
