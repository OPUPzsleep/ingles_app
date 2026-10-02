import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import type { FraseUtil } from '@/data/vocabulario/frases-utiles';

interface TarjetaFraseProps {
  frase: FraseUtil;
  /** De qué situación viene (solo en los resultados de una búsqueda). */
  pie?: string;
}

/** Una frase lista para usar: en inglés (con voz), su traducción y, si hace falta, una nota de uso. */
export const TarjetaFrase = memo(function TarjetaFrase({ frase, pie }: TarjetaFraseProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.fila}>
        <ThemedText style={[styles.texto, styles.ingles]}>{frase.en}</ThemedText>
        <SpeakButton text={frase.en} size={18} />
      </View>
      {!!frase.es && <ThemedText themeColor="textSecondary">{frase.es}</ThemedText>}
      {!!frase.nota && (
        <ThemedText type="small" themeColor="textSecondary" style={styles.nota}>
          💡 {frase.nota}
        </ThemedText>
      )}
      {!!pie && (
        <ThemedText type="small" themeColor="textSecondary">
          → {pie}
        </ThemedText>
      )}
    </Card>
  );
});

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  texto: {
    flex: 1,
  },
  ingles: {
    fontWeight: 700,
  },
  nota: {
    fontStyle: 'italic',
  },
});
