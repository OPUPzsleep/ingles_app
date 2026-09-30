import { useEffect, useState, type ReactNode, type Ref } from 'react';
import { Animated, Easing, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { BottomTabInset, Radius, Spacing } from '@/constants/theme';
import { useSettings } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';

const ANCHO_LISTA = 380;
/** Ancho del panel izquierdo cuando está escondido: solo cabe el botón para volver a mostrarlo. */
const ANCHO_RIEL = 56;
const DURACION_MS = 200;

interface SplitLayoutProps {
  /** Panel izquierdo (lista); tiene su propio scroll y se puede esconder. */
  izquierda: ReactNode;
  /** Panel derecho (detalle); ocupa todo el ancho que quede y tiene su propio scroll. */
  derecha: ReactNode;
  /** Al cambiar, el panel derecho vuelve arriba (por ejemplo, al elegir otra unidad). */
  claveDerecha?: string | number;
  /** Ancho del panel izquierdo cuando está visible. */
  anchoIzquierda?: number;
  /** Deja espacio abajo para la barra de pestañas (true). Las pantallas fuera de las pestañas lo desactivan. */
  espacioPestanas?: boolean;
  /** Qué hay en el panel izquierdo, para los botones de ocultar y mostrar ("la lista de temas", "el mapa"). */
  nombrePanel?: string;
  /** Ancho máximo del contenido del panel derecho (centrado). Sin esto ocupa todo el ancho disponible. */
  anchoMaxDetalle?: number;
  /** Para mover el scroll del panel izquierdo desde fuera (por ejemplo, subir hasta la categoría que se acaba de abrir). */
  refLista?: Ref<ScrollView>;
}

function Paneles({
  izquierda,
  derecha,
  claveDerecha,
  anchoIzquierda,
  espacioPestanas,
  nombrePanel,
  anchoMaxDetalle,
  refLista,
}: Required<Omit<SplitLayoutProps, 'claveDerecha' | 'anchoMaxDetalle' | 'refLista'>> &
  Pick<SplitLayoutProps, 'claveDerecha' | 'anchoMaxDetalle' | 'refLista'>) {
  const theme = useTheme();
  const { panelListaAbierto, setPanelListaAbierto } = useSettings();
  const abajo = (espacioPestanas ? BottomTabInset : 0) + Spacing.four;

  const [ancho] = useState(() => new Animated.Value(panelListaAbierto ? anchoIzquierda : ANCHO_RIEL));

  useEffect(() => {
    Animated.timing(ancho, {
      toValue: panelListaAbierto ? anchoIzquierda : ANCHO_RIEL,
      duration: DURACION_MS,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false, // el ancho no se puede animar con el driver nativo
    }).start();
  }, [ancho, panelListaAbierto, anchoIzquierda]);

  return (
    <View style={styles.contenedor}>
      <Animated.View style={[styles.izquierda, { width: ancho, borderRightColor: theme.border }]}>
        {panelListaAbierto ? (
          <>
            <View style={styles.cabecera}>
              <Pressable
                onPress={() => setPanelListaAbierto(false)}
                accessibilityRole="button"
                accessibilityLabel={`Ocultar ${nombrePanel}`}
                style={({ pressed }) => [
                  styles.boton,
                  { borderColor: theme.border, backgroundColor: theme.backgroundElement },
                  pressed && styles.pressed,
                ]}>
                <ThemedText type="smallBold">◀ Ocultar</ThemedText>
              </Pressable>
            </View>
            <ScrollView
              ref={refLista}
              style={styles.lista}
              contentContainerStyle={[styles.panel, { paddingBottom: abajo }]}>
              {izquierda}
            </ScrollView>
          </>
        ) : (
          <View style={styles.riel}>
            <Pressable
              onPress={() => setPanelListaAbierto(true)}
              accessibilityRole="button"
              accessibilityLabel={`Mostrar ${nombrePanel}`}
              style={({ pressed }) => [
                styles.boton,
                styles.botonRiel,
                { borderColor: theme.border, backgroundColor: theme.backgroundElement },
                pressed && styles.pressed,
              ]}>
              <ThemedText type="smallBold">▶</ThemedText>
            </Pressable>
          </View>
        )}
      </Animated.View>

      <ScrollView
        key={claveDerecha}
        style={styles.derecha}
        contentContainerStyle={[
          styles.panel,
          styles.panelDetalle,
          anchoMaxDetalle ? { maxWidth: anchoMaxDetalle, width: '100%', alignSelf: 'center' } : null,
          { paddingBottom: abajo },
        ]}>
        {derecha}
      </ScrollView>
    </View>
  );
}

/** Dos columnas que ocupan toda la pantalla: lista a la izquierda (se puede esconder) y detalle a la derecha. */
export function SplitLayout({
  anchoIzquierda = ANCHO_LISTA,
  espacioPestanas = true,
  nombrePanel = 'la lista',
  ...resto
}: SplitLayoutProps) {
  const { loading } = useSettings();

  // Espera a que carguen los ajustes para arrancar ya con el panel abierto o escondido, sin animación de más.
  if (loading) return <View style={styles.contenedor} />;

  return (
    <Paneles
      anchoIzquierda={anchoIzquierda}
      espacioPestanas={espacioPestanas}
      nombrePanel={nombrePanel}
      {...resto}
    />
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  izquierda: {
    flexGrow: 0,
    flexShrink: 0,
    borderRightWidth: 1,
    overflow: 'hidden',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
  },
  riel: {
    alignItems: 'center',
    paddingTop: Spacing.two,
  },
  boton: {
    minHeight: 36,
    paddingHorizontal: Spacing.three,
    borderWidth: 1,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonRiel: {
    width: 40,
    paddingHorizontal: 0,
  },
  pressed: {
    opacity: 0.7,
  },
  lista: {
    flex: 1,
  },
  derecha: {
    flex: 1,
  },
  panel: {
    padding: Spacing.three,
    gap: Spacing.three,
  },
  panelDetalle: {
    paddingHorizontal: Spacing.four,
  },
});
