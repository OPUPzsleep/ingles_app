import { useState, type ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Spacing } from '@/constants/theme';

/** Ancho del contenedor a partir del cual se usan dos columnas. */
export const ANCHO_DOS_COLUMNAS = 940;

interface ColumnasProps {
  /** Contenido principal: va a la izquierda con dos columnas, y arriba con una sola. */
  principal: ReactNode;
  /** Contenido secundario: va a la derecha con dos columnas, y debajo con una sola. */
  lateral?: ReactNode;
  /** Ancho mínimo del propio contenedor para usar dos columnas. */
  desde?: number;
  /** Cuánto ocupa cada columna: [principal, lateral]. */
  proporcion?: [number, number];
  /** Si hay ancho de sobra pero solo una columna de contenido, ese ancho máximo (para que no se estire). */
  anchoSolo?: number;
}

/**
 * Reparte el contenido en dos columnas cuando hay ancho de sobra y lo apila cuando no (celulares).
 * Se decide por el ancho del propio contenedor, no por el de la ventana: así funciona igual con la
 * barra lateral abierta o escondida.
 */
export function Columnas({
  principal,
  lateral,
  desde = ANCHO_DOS_COLUMNAS,
  proporcion = [3, 2],
  anchoSolo = 820,
}: ColumnasProps) {
  // Se arranca con el ancho de la ventana como estimación (así no parpadea); onLayout da el ancho real.
  const [ancho, setAncho] = useState(() => Dimensions.get('window').width);
  const dos = !!lateral && ancho >= desde;
  const solaYAncha = !lateral && ancho >= desde;

  return (
    <View onLayout={(evento) => setAncho(evento.nativeEvent.layout.width)} style={dos ? styles.fila : styles.apilado}>
      <View style={[styles.columna, dos && { flex: proporcion[0] }, solaYAncha && { maxWidth: anchoSolo }]}>
        {principal}
      </View>
      {!!lateral && <View style={[styles.columna, dos && { flex: proporcion[1] }]}>{lateral}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  apilado: {
    gap: Spacing.three,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.four,
  },
  columna: {
    gap: Spacing.three,
    minWidth: 0,
  },
});
