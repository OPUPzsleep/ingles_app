import { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { DatoDeVentana, VentanaEmergente } from '@/components/ventana-emergente';
import { Spacing } from '@/constants/theme';
import { VocabEntry } from '@/types/grammar';

interface TarjetaPalabraProps {
  entrada: VocabEntry;
  /** De qué tema viene (solo en los resultados de una búsqueda). */
  pie?: string;
  /** Todo a la vista (como respuesta del asistente). Sin esto, el significado y el ejemplo salen en una ventana al tocar. */
  completa?: boolean;
}

/** La palabra y su pronunciación, con voz. */
function Encabezado({ entrada, grande }: { entrada: VocabEntry; grande?: boolean }) {
  return (
    <>
      <View style={styles.fila}>
        <ThemedText type={grande ? 'subtitle' : 'cardTitle'} style={styles.texto}>
          {entrada.w}
        </ThemedText>
        <SpeakButton text={entrada.w} size={grande ? 22 : 18} />
      </View>
      <ThemedText type="small" themeColor="textSecondary">
        {!!entrada.aprox && <ThemedText type="smallBold">{entrada.aprox}   </ThemedText>}
        <ThemedText type="small" themeColor="textSecondary" style={styles.ipa}>
          {entrada.ipa}
        </ThemedText>
      </ThemedText>
    </>
  );
}

function Ejemplo({ ex }: { ex: string }) {
  return (
    <View style={styles.fila}>
      <ThemedText type="small" themeColor="textSecondary" style={[styles.texto, styles.ejemplo]}>
        &quot;{ex}&quot;
      </ThemedText>
      <SpeakButton text={ex} size={16} />
    </View>
  );
}

/**
 * Una palabra con su pronunciación; cada parte en inglés se puede escuchar. El significado y el ejemplo salen en una
 * ventana emergente al tocar la tarjeta (o a la vista con `completa`).
 */
export const TarjetaPalabra = memo(function TarjetaPalabra({ entrada, pie, completa = false }: TarjetaPalabraProps) {
  const [abierta, setAbierta] = useState(false);

  if (completa) {
    return (
      <Card style={styles.card}>
        <Encabezado entrada={entrada} />
        <ThemedText>{entrada.def}</ThemedText>
        {!!entrada.ex && <Ejemplo ex={entrada.ex} />}
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
        <Encabezado entrada={entrada} />
        <ThemedText type="small" themeColor="primary">
          Toca para ver el significado
        </ThemedText>
        {!!pie && (
          <ThemedText type="small" themeColor="textSecondary">
            → {pie}
          </ThemedText>
        )}
      </Card>
      <VentanaEmergente visible={abierta} onClose={() => setAbierta(false)}>
        <Encabezado entrada={entrada} grande />
        <DatoDeVentana etiqueta="Significado">
          <ThemedText>{entrada.def}</ThemedText>
        </DatoDeVentana>
        {!!entrada.ex && (
          <DatoDeVentana etiqueta="Ejemplo">
            <Ejemplo ex={entrada.ex} />
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
  ipa: {
    fontFamily: 'monospace',
  },
  ejemplo: {
    fontStyle: 'italic',
  },
});
