import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { FRASES_POR_TIPO, TIPOS, type TipoOracion } from '@/data/frases/frases-tiempos';
import { FORMAS_TIEMPO, TIEMPOS_INFO } from '@/data/frases/tiempos-info';
import { useIsWide } from '@/hooks/use-is-wide';
import { useTheme } from '@/hooks/use-theme';

const TIEMPO_ICONO = { presente: '🕐', pasado: '⏪', futuro: '⏩' } as const;

const FILAS_FORMA = [
  { clave: 'afirmativa', etiqueta: '✅ Afirmativa', color: 'success' },
  { clave: 'negativa', etiqueta: '❌ Negativa', color: 'danger' },
  { clave: 'pregunta', etiqueta: '❓ Pregunta', color: 'primary' },
] as const;

/** Ficha del tiempo elegido en el mapa: cómo se forma, cuándo se usa, palabras clave, error típico y ejemplos. */
export function DetalleTiempo({ tipo, onPracticar }: { tipo: TipoOracion; onPracticar: () => void }) {
  const theme = useTheme();
  const isWide = useIsWide();
  const info = TIPOS[tipo];
  const ficha = TIEMPOS_INFO[tipo];
  const formas = FORMAS_TIEMPO[tipo];
  const ejemplos = FRASES_POR_TIPO[tipo].slice(0, 2);

  return (
    <Card>
      <ThemedText type="label" themeColor="primary">
        {TIEMPO_ICONO[info.tiempo]} {info.en}
      </ThemedText>
      <ThemedText type="cardTitle">{info.es}</ThemedText>

      <View style={[styles.formula, { backgroundColor: theme.backgroundSelected }]}>
        <ThemedText type="label" themeColor="textSecondary">
          Se forma
        </ThemedText>
        {FILAS_FORMA.map(({ clave, etiqueta, color }) => {
          const forma = formas[clave];
          return (
            <View key={clave} style={styles.filaForma}>
              <ThemedText type="label" themeColor={color}>
                {etiqueta}
              </ThemedText>
              <ThemedText type="smallBold">{forma.formula}</ThemedText>
              <View style={styles.ejemploForma}>
                <View style={styles.ejemploTexto}>
                  <ThemedText type="small" style={styles.enForma}>
                    {forma.ejemplo[0]}
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {forma.ejemplo[1]}
                  </ThemedText>
                </View>
                <SpeakButton text={forma.ejemplo[0]} size={18} />
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.seccion}>
        <ThemedText type="label" themeColor="textSecondary">
          Cuándo se usa
        </ThemedText>
        {ficha.cuando.map((uso) => (
          <ThemedText key={uso} type="small">
            • {uso}
          </ThemedText>
        ))}
      </View>

      <View style={styles.seccion}>
        <ThemedText type="label" themeColor="textSecondary">
          Palabras clave
        </ThemedText>
        <View style={styles.chips}>
          {ficha.senales.map((senal) => (
            <View key={senal} style={[styles.chip, { backgroundColor: theme.backgroundSelected }]}>
              <ThemedText type="small">{senal}</ThemedText>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.ojo, { backgroundColor: theme.warningMuted }]}>
        <ThemedText type="smallBold">👀 Ojo</ThemedText>
        <ThemedText type="small">{ficha.ojo}</ThemedText>
      </View>

      <View style={styles.seccion}>
        <ThemedText type="label" themeColor="textSecondary">
          Ejemplos
        </ThemedText>
        {ejemplos.map(([en, es]) => (
          <View key={en} style={styles.ejemplo}>
            <View style={styles.ejemploTexto}>
              <ThemedText style={styles.en}>{en}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {es}
              </ThemedText>
            </View>
            <SpeakButton text={en} size={22} />
          </View>
        ))}
      </View>

      <Button variant="primary" onPress={onPracticar} style={isWide ? styles.botonAncho : undefined}>
        🃏 Practicar estas frases
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  // En pantalla ancha el botón mide lo que su texto (no se estira por toda la ficha).
  botonAncho: {
    alignSelf: 'flex-start',
    minWidth: 280,
  },
  formula: {
    borderRadius: Radius.small,
    padding: Spacing.three,
    gap: Spacing.three,
  },
  filaForma: {
    gap: Spacing.half,
  },
  ejemploForma: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  enForma: {
    fontStyle: 'italic',
    fontWeight: '600',
  },
  seccion: {
    gap: Spacing.one,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    borderRadius: Radius.pill,
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
  },
  ojo: {
    borderRadius: Radius.small,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  ejemplo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  ejemploTexto: {
    flex: 1,
  },
  en: {
    fontWeight: '600',
  },
});
