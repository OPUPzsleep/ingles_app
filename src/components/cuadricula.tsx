import { Children, useState, type ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Spacing } from '@/constants/theme';

const SEPARACION = Spacing.three;

interface CuadriculaProps {
  children: ReactNode;
  /** Ancho mínimo de cada columna: define cuántas caben. */
  minColumna?: number;
  maxColumnas?: number;
}

/**
 * Cuadrícula de tarjetas: tantas columnas como quepan (1 en celulares). Las tarjetas de una misma fila
 * miden lo mismo de alto. Cada hijo debe llenar su celda: por ejemplo <Card style={{ flex: 1 }}>.
 */
export function Cuadricula({ children, minColumna = 420, maxColumnas = 3 }: CuadriculaProps) {
  const [ancho, setAncho] = useState(() => Dimensions.get('window').width);
  const items = Children.toArray(children);
  const columnas = Math.max(1, Math.min(maxColumnas, Math.floor((ancho + SEPARACION) / (minColumna + SEPARACION))));

  const filas: ReactNode[][] = [];
  for (let i = 0; i < items.length; i += columnas) filas.push(items.slice(i, i + columnas));

  return (
    <View onLayout={(evento) => setAncho(evento.nativeEvent.layout.width)} style={styles.cuadricula}>
      {filas.map((fila, i) => (
        <View key={i} style={styles.fila}>
          {fila.map((item, j) => (
            <View key={j} style={styles.celda}>
              {item}
            </View>
          ))}
          {/* Celdas vacías para que la última fila no estire sus tarjetas. */}
          {Array.from({ length: columnas - fila.length }, (_, k) => (
            <View key={`vacia-${k}`} style={styles.celda} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cuadricula: {
    gap: SEPARACION,
  },
  fila: {
    flexDirection: 'row',
    gap: SEPARACION,
  },
  // La celda es una fila: así su hijo (con flex: 1) se estira también a lo alto.
  celda: {
    flex: 1,
    flexDirection: 'row',
    minWidth: 0,
  },
});
