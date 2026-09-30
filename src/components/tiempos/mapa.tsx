import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { CELDAS, COLUMNAS, FILAS, TIEMPOS_INFO } from '@/data/frases/tiempos-info';
import type { TipoOracion } from '@/data/frases/frases-tiempos';
import { useTheme } from '@/hooks/use-theme';

interface MapaProps {
  seleccionado: TipoOracion;
  onSelect: (tipo: TipoOracion) => void;
}

/** Cuadro de los 13 tiempos: filas = simple, continuo, perfecto, perfecto continuo; columnas = presente, pasado, futuro. */
export function MapaTiempos({ seleccionado, onSelect }: MapaProps) {
  const theme = useTheme();

  const celda = (tipo: TipoOracion) => {
    const activa = tipo === seleccionado;
    return (
      <Pressable
        key={tipo}
        onPress={() => onSelect(tipo)}
        accessibilityRole="button"
        accessibilityState={{ selected: activa }}
        style={({ pressed }) => [
          styles.celda,
          {
            backgroundColor: activa ? theme.backgroundSelected : theme.backgroundElement,
            borderColor: activa ? theme.primary : theme.border,
          },
          pressed && styles.pressed,
        ]}>
        <ThemedText type="smallBold" style={styles.modelo}>
          {TIEMPOS_INFO[tipo].modelo}
        </ThemedText>
      </Pressable>
    );
  };

  return (
    <View style={styles.mapa}>
      <View style={styles.fila}>
        {COLUMNAS.map((columna) => (
          <View key={columna.id} style={styles.columna}>
            <ThemedText type="smallBold" themeColor="primary" style={styles.encabezado}>
              {columna.icono} {columna.nombre}
            </ThemedText>
          </View>
        ))}
      </View>

      {FILAS.map((fila) => (
        <View key={fila.id} style={styles.grupo}>
          <ThemedText type="label" themeColor="textSecondary">
            {fila.nombre}
          </ThemedText>
          <View style={styles.fila}>
            {COLUMNAS.map((columna) => (
              <View key={columna.id} style={styles.columna}>
                {CELDAS[columna.id][fila.id].map((tipo) => celda(tipo))}
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mapa: {
    gap: Spacing.two,
  },
  grupo: {
    gap: Spacing.one,
  },
  fila: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  columna: {
    flex: 1,
    gap: Spacing.two,
  },
  encabezado: {
    textAlign: 'center',
  },
  celda: {
    flex: 1,
    minHeight: 64,
    borderWidth: 2,
    borderRadius: Radius.small,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelo: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
