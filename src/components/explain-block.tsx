import { StyleSheet, View } from 'react-native';

import { BionicText } from '@/components/bionic-text';
import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { useSettings } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';
import { ExplainBlock as ExplainBlockData } from '@/types/grammar';

interface ExplainBlockProps {
  block: ExplainBlockData;
  /**
   * Pantalla ancha: el bloque va en un cuadro, como las demás tarjetas de la unidad (estructura, tabla…),
   * con la explicación suelta dentro y los ejemplos en una caja aparte. Sin esto (celular) va suelto, con su barra al lado.
   */
  enCuadro?: boolean;
}

export function ExplainBlock({ block, enCuadro = false }: ExplainBlockProps) {
  const theme = useTheme();
  const { focusModeEnabled } = useSettings();

  const cuerpo = focusModeEnabled ? (
    <BionicText text={block.body} style={styles.body} />
  ) : (
    <ThemedText style={styles.body}>{block.body}</ThemedText>
  );

  if (enCuadro) {
    return (
      // En Modo TDAH el cuadro conserva la barra de color a la izquierda que ya marcaba los bloques.
      <Card style={focusModeEnabled ? { borderLeftWidth: 4, borderLeftColor: theme.focusAccent } : undefined}>
        <ThemedText type="label" themeColor="primary">
          {block.head}
        </ThemedText>
        {cuerpo}
        {!!block.note && (
          <View style={[styles.ejemplos, { backgroundColor: theme.backgroundSelected }]}>
            <ThemedText type="small" style={styles.noteText}>
              {block.note}
            </ThemedText>
            <SpeakButton text={block.note} />
          </View>
        )}
        {!!block.ejemplos?.length && <EjemplosTraducidos ejemplos={block.ejemplos} />}
      </Card>
    );
  }

  return (
    <View
      style={[
        styles.box,
        { borderLeftColor: focusModeEnabled ? theme.focusAccent : theme.primary },
      ]}>
      <ThemedText type="label" themeColor="primary">
        {block.head}
      </ThemedText>
      {cuerpo}
      {!!block.note && (
        <View style={styles.note}>
          <ThemedText type="small" style={styles.noteText}>
            {block.note}
          </ThemedText>
          <SpeakButton text={block.note} />
        </View>
      )}
      {!!block.ejemplos?.length && <EjemplosTraducidos ejemplos={block.ejemplos} />}
    </View>
  );
}

/** Los ejemplos de un bloque: la frase en inglés con su audio y, debajo, la traducción. */
function EjemplosTraducidos({ ejemplos }: { ejemplos: [string, string][] }) {
  const theme = useTheme();

  return (
    <View style={styles.listaEjemplos}>
      {ejemplos.map(([en, es]) => (
        <View key={en} style={[styles.ejemploTraducido, { backgroundColor: theme.backgroundSelected }]}>
          <View style={styles.textoEjemplo}>
            <ThemedText type="smallBold">{en}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {es}
            </ThemedText>
          </View>
          <SpeakButton text={en} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderLeftWidth: 4,
    paddingLeft: Spacing.three,
    paddingVertical: Spacing.one,
    gap: Spacing.two,
  },
  body: {
    lineHeight: 22,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingTop: Spacing.one,
  },
  // Los ejemplos de un bloque en cuadro: una caja con fondo propio, con el botón de audio a un lado.
  ejemplos: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderRadius: Radius.small,
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.three,
  },
  noteText: {
    flex: 1,
    fontStyle: 'italic',
  },
  listaEjemplos: {
    gap: Spacing.two,
  },
  ejemploTraducido: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderRadius: Radius.small,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  textoEjemplo: {
    flex: 1,
    gap: Spacing.half,
  },
});
