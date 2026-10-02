import { useState, type ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useHorizontal } from '@/hooks/use-horizontal';

/** Ancho del contenedor a partir del cual se usan dos columnas. */
export const ANCHO_DOS_COLUMNAS = 940;

/** Lo mismo en un celular en horizontal: ahí lo que falta es alto, no ancho, así que las columnas empiezan antes. */
const ANCHO_DOS_COLUMNAS_HORIZONTAL = 700;

/** Desde qué ancho del contenedor se usan dos columnas en esta pantalla. */
export function useAnchoDosColumnas(): number {
  return useHorizontal() ? ANCHO_DOS_COLUMNAS_HORIZONTAL : ANCHO_DOS_COLUMNAS;
}

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
  desde: desdeIndicado,
  proporcion = [3, 2],
  anchoSolo = 820,
}: ColumnasProps) {
  const horizontal = useHorizontal();
  const desdePorDefecto = useAnchoDosColumnas();
  const desde = desdeIndicado ?? desdePorDefecto;
  // Se arranca con el ancho de la ventana como estimación (así no parpadea); onLayout da el ancho real.
  const [ancho, setAncho] = useState(() => Dimensions.get('window').width);
  const dos = !!lateral && ancho >= desde;
  const solaYAncha = !lateral && ancho >= desde;

  return (
    <View
      onLayout={(evento) => setAncho(evento.nativeEvent.layout.width)}
      style={dos ? [styles.fila, horizontal && styles.filaQueBaja] : styles.apilado}>
      <View
        style={[
          styles.columna,
          dos && (horizontal ? { flexGrow: proporcion[0], flexBasis: 320, maxWidth: '100%' } : { flex: proporcion[0] }),
          solaYAncha && { maxWidth: anchoSolo },
        ]}>
        {principal}
      </View>
      {!!lateral && (
        <View style={[styles.columna, dos && (horizontal ? { flexGrow: proporcion[1], flexBasis: 240, maxWidth: '100%' } : { flex: proporcion[1] })]}>
          {lateral}
        </View>
      )}
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
  // Celular girado: si las dos columnas no caben, la segunda baja debajo (nunca queda fuera de la pantalla).
  filaQueBaja: {
    flexWrap: 'wrap',
  },
  columna: {
    gap: Spacing.three,
    minWidth: 0,
  },
});
