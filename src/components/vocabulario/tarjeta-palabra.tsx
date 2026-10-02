import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import { VocabEntry } from '@/types/grammar';

interface TarjetaPalabraProps {
  entrada: VocabEntry;
  /** De qué tema viene (solo en los resultados de una búsqueda). */
  pie?: string;
}

/** Una palabra con su pronunciación, su significado y un ejemplo; cada parte en inglés se puede escuchar. */
export const TarjetaPalabra = memo(function TarjetaPalabra({ entrada, pie }: TarjetaPalabraProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.fila}>
        <ThemedText type="cardTitle" style={styles.texto}>
          {entrada.w}
        </ThemedText>
        <SpeakButton text={entrada.w} size={18} />
      </View>
      <ThemedText type="small" themeColor="textSecondary">
        {!!entrada.aprox && <ThemedText type="smallBold">{entrada.aprox}   </ThemedText>}
        <ThemedText type="small" themeColor="textSecondary" style={styles.ipa}>
          {entrada.ipa}
        </ThemedText>
      </ThemedText>
      <ThemedText>{entrada.def}</ThemedText>
      {!!entrada.ex && (
        <View style={styles.fila}>
          <ThemedText type="small" themeColor="textSecondary" style={[styles.texto, styles.ejemplo]}>
            &quot;{entrada.ex}&quot;
          </ThemedText>
          <SpeakButton text={entrada.ex} size={16} />
        </View>
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
  ipa: {
    fontFamily: 'monospace',
  },
  ejemplo: {
    fontStyle: 'italic',
  },
});
