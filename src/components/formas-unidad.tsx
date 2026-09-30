import { StyleSheet, View } from 'react-native';

import { GrammarFormula } from '@/components/grammar-formula';
import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Radius, Spacing, type ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { FormaDetalle, FormasUnidad as FormasUnidadData } from '@/types/grammar';

const PANELES: { clave: 'afirmativa' | 'negativa' | 'pregunta'; etiqueta: string; color: ThemeColor }[] = [
  { clave: 'afirmativa', etiqueta: '✅ Afirmativa', color: 'success' },
  { clave: 'negativa', etiqueta: '❌ Negativa', color: 'danger' },
  { clave: 'pregunta', etiqueta: '❓ Pregunta', color: 'primary' },
];

/** La voz no debe leer la barra entre variantes ("I have… / I've got…"): las separa con un punto. */
const paraVoz = (ingles: string) => ingles.replace(/\s*\/\s*/g, '. ');

interface PanelFormaProps {
  etiqueta: string;
  color: ThemeColor;
  detalle: FormaDetalle;
  /** En fila (pantalla ancha) cada panel ocupa lo mismo y todos miden igual de alto. */
  enFila: boolean;
}

function PanelForma({ etiqueta, color, detalle, enFila }: PanelFormaProps) {
  const theme = useTheme();

  return (
    <Card style={[enFila && styles.panelEnFila, { borderLeftWidth: 4, borderLeftColor: theme[color] }]}>
      <ThemedText type="label" themeColor={color}>
        {etiqueta}
      </ThemedText>
      <GrammarFormula formulas={detalle.formulas} />
      <View style={styles.ejemplos}>
        {detalle.ejemplos.map(([ingles, espanol]) => (
          <View key={ingles} style={[styles.ejemplo, { backgroundColor: theme.backgroundSelected }]}>
            <View style={styles.ejemploTexto}>
              <ThemedText style={styles.ingles}>{ingles}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {espanol}
              </ThemedText>
            </View>
            <SpeakButton text={paraVoz(ingles)} size={18} />
          </View>
        ))}
      </View>
    </Card>
  );
}

interface CajaNotaProps {
  titulo: string;
  texto: string;
  fondo: 'backgroundSelected' | 'warningMuted';
  enFila: boolean;
}

function CajaNota({ titulo, texto, fondo, enFila }: CajaNotaProps) {
  const theme = useTheme();

  return (
    <View style={[styles.nota, enFila && styles.notaEnFila, { backgroundColor: theme[fondo] }]}>
      <ThemedText type="label">{titulo}</ThemedText>
      <ThemedText type="small" style={styles.textoNota}>
        {texto}
      </ThemedText>
    </View>
  );
}

interface FormasUnidadProps {
  formas: FormasUnidadData;
  /** Con ancho de sobra los tres paneles van en fila; si no, uno debajo de otro. */
  ancha: boolean;
}

/**
 * La forma afirmativa, la negativa y la pregunta de una unidad de verbos, siempre a la vista: fórmula con colores,
 * ejemplos con traducción y audio, y debajo las contracciones, las respuestas cortas y el error típico.
 */
export function FormasUnidad({ formas, ancha }: FormasUnidadProps) {
  return (
    <View style={styles.contenedor}>
      <View style={ancha ? styles.fila : styles.columna}>
        {PANELES.map(({ clave, etiqueta, color }) => (
          <PanelForma key={clave} etiqueta={etiqueta} color={color} detalle={formas[clave]} enFila={ancha} />
        ))}
      </View>

      {(!!formas.nota || !!formas.ojo) && (
        <View style={ancha ? styles.fila : styles.columna}>
          {!!formas.nota && (
            <CajaNota
              titulo="📌 Para recordar"
              texto={formas.nota}
              fondo="backgroundSelected"
              enFila={ancha}
            />
          )}
          {!!formas.ojo && <CajaNota titulo="⚠️ Ojo" texto={formas.ojo} fondo="warningMuted" enFila={ancha} />}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: Spacing.three,
  },
  fila: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  columna: {
    gap: Spacing.three,
  },
  panelEnFila: {
    flex: 1,
    minWidth: 0,
  },
  ejemplos: {
    gap: Spacing.two,
  },
  ejemplo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderRadius: Radius.small,
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.three,
  },
  ejemploTexto: {
    flex: 1,
    gap: Spacing.half,
  },
  ingles: {
    fontWeight: '600',
  },
  nota: {
    borderRadius: Radius.small,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  notaEnFila: {
    flex: 1,
    minWidth: 0,
  },
  textoNota: {
    lineHeight: 21,
  },
});
