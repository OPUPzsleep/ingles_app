import { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { DatoDeVentana, VentanaEmergente } from '@/components/ventana-emergente';
import { Spacing } from '@/constants/theme';
import type { FraseUtil } from '@/data/vocabulario/frases-utiles';

interface TarjetaFraseProps {
  frase: FraseUtil;
  /** De qué situación viene (solo en los resultados de una búsqueda). */
  pie?: string;
  /** Todo a la vista (como respuesta del asistente). Sin esto, la traducción y la nota salen en una ventana al tocar. */
  completa?: boolean;
}

function Ingles({ frase, grande }: { frase: FraseUtil; grande?: boolean }) {
  return (
    <View style={styles.fila}>
      <ThemedText type={grande ? 'cardTitle' : undefined} style={[styles.texto, styles.ingles]}>
        {frase.en}
      </ThemedText>
      <SpeakButton text={frase.en} size={grande ? 22 : 18} />
    </View>
  );
}

/**
 * Una frase lista para usar: en inglés (con voz). La traducción y la nota de uso salen en una ventana emergente al
 * tocar la tarjeta (o a la vista con `completa`).
 */
export const TarjetaFrase = memo(function TarjetaFrase({ frase, pie, completa = false }: TarjetaFraseProps) {
  const [abierta, setAbierta] = useState(false);

  if (completa) {
    return (
      <Card style={styles.card}>
        <Ingles frase={frase} />
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
  }

  return (
    <>
      <Card style={styles.card} onPress={() => setAbierta(true)}>
        <Ingles frase={frase} />
        <ThemedText type="small" themeColor="primary">
          Toca para ver la traducción
        </ThemedText>
        {!!pie && (
          <ThemedText type="small" themeColor="textSecondary">
            → {pie}
          </ThemedText>
        )}
      </Card>
      <VentanaEmergente visible={abierta} onClose={() => setAbierta(false)}>
        <Ingles frase={frase} grande />
        {!!frase.es && (
          <DatoDeVentana etiqueta="Significado">
            <ThemedText>{frase.es}</ThemedText>
          </DatoDeVentana>
        )}
        {!!frase.nota && (
          <DatoDeVentana etiqueta="Nota de uso">
            <ThemedText type="small" themeColor="textSecondary" style={styles.nota}>
              💡 {frase.nota}
            </ThemedText>
          </DatoDeVentana>
        )}
        {!!pie && (
          <ThemedText type="small" themeColor="textSecondary">
            → {pie}
          </ThemedText>
        )}
      </VentanaEmergente>
    </>
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
