import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTextScale } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';
import { ReferenceTable as ReferenceTableData } from '@/types/grammar';

/** Ancho aproximado de un carácter a tamaño normal. Es un poco más de lo real a propósito: mejor que sobre espacio que partir un texto por unos píxeles. */
const ANCHO_CARACTER = 8;
/** Lo mismo, para que quepa la palabra más larga sin partirse a media palabra (mayúsculas y barras como "We/You/They" ocupan más). */
const ANCHO_CARACTER_PALABRA = 8;
const PADDING_HORIZONTAL = Spacing.two + Spacing.one;
const BORDE_TABLA = 2;
/** Una columna no se estrecha más que esto, aunque su texto sea corto: más angosta sería ilegible. */
const ANCHO_MIN_COLUMNA = 88;
/** Una columna no pasa de este ancho: un texto más largo baja a otra línea en vez de ensanchar toda la tabla. */
const ANCHO_MAX_COLUMNA = 300;
/** Una columna no se aprieta a menos de esta fracción de lo que pide su texto: más, y quedan renglones cortísimos. */
const FRACCION_MIN = 0.5;
/** Cuánto puede crecer la tabla sobre su ancho natural para llenar el espacio que tenga; más allá se vería estirada. */
const CRECIMIENTO_MAX = 1.6;

interface Columna {
  /** Ancho que pide el texto más largo de la columna, en una sola línea (con tope). */
  natural: number;
  /** Ancho mínimo: que quepa la palabra más larga y no menos de la mitad de lo que pide el texto. */
  minimo: number;
}

const conPadding = (caracteres: number, anchoCaracter: number, escala: number) =>
  caracteres * anchoCaracter * escala + PADDING_HORIZONTAL * 2;

const suma = (valores: number[]) => valores.reduce((total, valor) => total + valor, 0);

/** Mide una columna por su texto más largo (encabezado incluido). Todo crece con la escala de letra del usuario. */
function medirColumna(textos: string[], escala: number): Columna {
  const lineas = textos.flatMap((texto) => texto.split('\n'));
  const masLarga = Math.max(...lineas.map((linea) => [...linea].length));
  const palabraMasLarga = Math.max(...lineas.flatMap((linea) => linea.split(/\s+/).map((palabra) => [...palabra].length)));

  const natural = Math.min(
    ANCHO_MAX_COLUMNA * escala,
    Math.max(ANCHO_MIN_COLUMNA * escala, conPadding(masLarga, ANCHO_CARACTER, escala))
  );
  const minimo = Math.min(
    natural,
    Math.max(ANCHO_MIN_COLUMNA * escala, conPadding(palabraMasLarga, ANCHO_CARACTER_PALABRA, escala), natural * FRACCION_MIN)
  );
  return { natural: Math.round(natural), minimo: Math.round(minimo) };
}

/**
 * Ancho de cada columna dentro de `disponible` (sin contar el borde), calculado aquí y no por el motor de layout:
 * así las columnas miden lo mismo en todas las filas y en todas las plataformas.
 * Si sobra espacio se reparte en proporción (sin pasar de CRECIMIENTO_MAX); si falta, cada columna cede en
 * proporción a lo que puede apretarse (natural − mínimo). Solo se llama cuando todos los mínimos caben.
 */
function repartirAncho(columnas: Columna[], disponible: number): number[] {
  const natural = suma(columnas.map((c) => c.natural));
  if (disponible >= natural) {
    const factor = Math.min(disponible / natural, CRECIMIENTO_MAX);
    return columnas.map((c) => Math.floor(c.natural * factor));
  }
  const cedible = natural - suma(columnas.map((c) => c.minimo));
  const aQuitar = natural - disponible;
  return columnas.map((c) => Math.floor(c.natural - (cedible > 0 ? (aQuitar * (c.natural - c.minimo)) / cedible : 0)));
}

/**
 * Tabla de referencia. Todas las filas comparten el ancho de cada columna (el que pide su texto más largo) y se
 * adapta al espacio como una tabla de HTML: si sobra, lo reparte sin estirarse de más; si falta, aprieta las
 * columnas y el texto baja a otra línea. Y si ni así caben (celular, o letra grande) pasa a una ficha por fila,
 * con el nombre de cada columna: así nunca se pierde una columna fuera de la pantalla.
 */
export function ReferenceTable({ table }: { table: ReferenceTableData }) {
  const theme = useTheme();
  const escala = useTextScale();
  const [ancho, setAncho] = useState(0);

  const columnas = table.cols.map((col, j) => medirColumna([col, ...table.rows.map((fila) => fila[j] ?? '')], escala));
  const medido = ancho > 0;
  const disponible = ancho - BORDE_TABLA;
  const apilada = medido && suma(columnas.map((c) => c.minimo)) > disponible;
  // Hasta medir el contenedor, la tabla va a su ancho natural y oculta (así no se ve saltar al acomodarse).
  const anchos = medido && !apilada ? repartirAncho(columnas, disponible) : columnas.map((c) => c.natural);

  return (
    <View onLayout={(e) => setAncho(e.nativeEvent.layout.width)} style={styles.contenedor}>
      {apilada ? (
        <View testID="tabla-referencia-apilada" style={[styles.tabla, { borderColor: theme.border }]}>
          {table.rows.map((fila, i) => (
            <View
              key={i}
              style={[
                styles.ficha,
                i < table.rows.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
              ]}>
              <ThemedText type="smallBold">{fila[0]}</ThemedText>
              {fila.slice(1).map((celda, j) => (
                <ThemedText key={j} type="small">
                  <ThemedText type="label" themeColor="primary">
                    {table.cols[j + 1]}
                    {'  '}
                  </ThemedText>
                  {celda}
                </ThemedText>
              ))}
            </View>
          ))}
        </View>
      ) : (
        <View
          testID="tabla-referencia"
          style={[styles.tabla, { borderColor: theme.border, width: suma(anchos) + BORDE_TABLA, opacity: medido ? 1 : 0 }]}>
          <View style={[styles.fila, { backgroundColor: theme.primaryMuted }]}>
            {table.cols.map((col, j) => (
              <ThemedText key={j} type="label" themeColor="primary" style={[styles.celda, { width: anchos[j] }]}>
                {col}
              </ThemedText>
            ))}
          </View>
          {table.rows.map((fila, i) => (
            <View
              key={i}
              style={[
                styles.fila,
                i < table.rows.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
              ]}>
              {fila.map((celda, j) => (
                <ThemedText key={j} type="small" style={[styles.celda, { width: anchos[j] }]}>
                  {celda}
                </ThemedText>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Lo que sobre del ancho natural no debe ensanchar la página mientras se mide.
  contenedor: {
    overflow: 'hidden',
  },
  tabla: {
    borderRadius: Radius.small,
    borderWidth: 1,
    overflow: 'hidden',
  },
  fila: {
    flexDirection: 'row',
  },
  celda: {
    paddingVertical: Spacing.two,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  ficha: {
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: PADDING_HORIZONTAL,
    gap: Spacing.one,
  },
});
