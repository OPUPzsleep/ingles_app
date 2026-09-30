import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SplitLayout } from '@/components/split-layout';
import { DetalleTiempo } from '@/components/tiempos/detalle';
import { MapaTiempos } from '@/components/tiempos/mapa';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { esTipoOracion, type TipoOracion } from '@/data/frases/frases-tiempos';
import { useIsWide } from '@/hooks/use-is-wide';

export default function TiemposScreen() {
  const { tipo: tipoParam } = useLocalSearchParams<{ tipo?: string }>();
  const router = useRouter();
  const isWide = useIsWide();
  const [seleccionado, setSeleccionado] = useState<TipoOracion>(
    esTipoOracion(tipoParam) ? tipoParam : 'present-simple'
  );
  const scrollRef = useRef<ScrollView>(null);
  const detalleY = useRef(0);

  // En pantalla angosta la ficha queda debajo del cuadro: al elegir un tiempo, baja hasta ella.
  const elegir = (tipo: TipoOracion) => {
    setSeleccionado(tipo);
    scrollRef.current?.scrollTo({ y: Math.max(0, detalleY.current - Spacing.two), animated: true });
  };

  const intro = (
    <>
      <ThemedText type="subtitle">🗺️ Mapa de tiempos</ThemedText>
      <ThemedText themeColor="textSecondary">
        Los 13 tiempos en un cuadro (con el verbo work). Toca uno para ver cuándo se usa.
      </ThemedText>
    </>
  );

  const detalle = (
    <DetalleTiempo
      tipo={seleccionado}
      onPracticar={() => router.push({ pathname: '/tarjetas', params: { tipo: seleccionado } })}
    />
  );

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: 'Tiempos verbales' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        {isWide ? (
          <SplitLayout
            izquierda={
              <>
                {intro}
                <MapaTiempos seleccionado={seleccionado} onSelect={setSeleccionado} />
              </>
            }
            derecha={detalle}
            claveDerecha={seleccionado}
            anchoIzquierda={520}
            espacioPestanas={false}
            nombrePanel="el mapa"
            anchoMaxDetalle={860}
          />
        ) : (
          <ScrollView ref={scrollRef} contentContainerStyle={styles.content}>
            {intro}
            <MapaTiempos seleccionado={seleccionado} onSelect={elegir} />
            <View onLayout={(evento) => (detalleY.current = evento.nativeEvent.layout.y)}>{detalle}</View>
          </ScrollView>
        )}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    padding: Spacing.three,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
