import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Spacing } from '@/constants/theme';
import { INFO_NIVEL } from '@/data/grammar/niveles';
import type { CefrLevel } from '@/types/grammar';

interface NivelCardProps {
  nivel: CefrLevel;
  hechas: number;
  total: number;
  /** Mejor resultado (0–100) del quiz final del nivel, si ya lo hizo. */
  mejor?: number;
  esTuNivel?: boolean;
  /** Versión de dos líneas para listas laterales: caben todos los niveles a la vista. */
  compact?: boolean;
  /** Solo en la versión compacta: si el nivel está desplegado (▾) o plegado (▸). */
  abierto?: boolean;
  onPress: () => void;
}

/** Un nivel del recorrido (A1, A2…): cuántas unidades llevas y cómo te fue en su quiz final. */
export function NivelCard({ nivel, hechas, total, mejor, esTuNivel, compact, abierto, onPress }: NivelCardProps) {
  const info = INFO_NIVEL[nivel];
  const pct = total > 0 ? Math.round((hechas / total) * 100) : 0;
  const quiz = mejor === undefined ? 'quiz pendiente' : `quiz ${mejor}%`;

  if (compact) {
    return (
      <Card onPress={onPress} style={styles.compacta}>
        <View style={styles.fila}>
          <ThemedText style={styles.iconoCompacto}>{info.icono}</ThemedText>
          <View style={styles.texto}>
            <ThemedText type="smallBold" numberOfLines={1}>
              Nivel {nivel} · {info.nombre}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
              {esTuNivel ? '★ ' : ''}
              {hechas}/{total} unidades · {quiz}
            </ThemedText>
          </View>
          <ThemedText themeColor="textSecondary">{abierto ? '▾' : '▸'}</ThemedText>
        </View>
        <ProgressBar percent={pct} />
      </Card>
    );
  }

  return (
    <Card onPress={onPress}>
      <View style={styles.encabezado}>
        <ThemedText style={styles.icono}>{info.icono}</ThemedText>
        {esTuNivel && (
          <ThemedText type="label" themeColor="primary">
            ★ Tu nivel
          </ThemedText>
        )}
      </View>
      <ThemedText type="cardTitle">
        Nivel {nivel} · {info.nombre}
      </ThemedText>
      {!!info.resumen && (
        <ThemedText type="small" themeColor="textSecondary">
          {info.resumen}
        </ThemedText>
      )}
      <ProgressBar percent={pct} />
      <ThemedText type="small" themeColor="textSecondary">
        {hechas} de {total} unidades · {quiz}
      </ThemedText>
    </Card>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icono: {
    fontSize: 26,
  },
  compacta: {
    padding: Spacing.three,
    gap: Spacing.two,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  iconoCompacto: {
    fontSize: 22,
  },
  texto: {
    flex: 1,
  },
});
