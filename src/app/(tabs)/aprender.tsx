import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NivelCard } from '@/components/nivel-card';
import { NivelUnidades } from '@/components/nivel-unidades';
import { SplitLayout } from '@/components/split-layout';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UnitView } from '@/components/unit-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useIsWide } from '@/hooks/use-is-wide';
import { useProgress } from '@/context/progress-context';
import { useSettings } from '@/context/settings-context';
import { getUnit, NIVELES, nextRecommendedUnit, progresoDeNivel, siguienteNivel } from '@/lib/grammar';
import { CEFR_LEVELS, type CefrLevel } from '@/types/grammar';
import { useEstiloHorizontal, useHorizontal } from '@/hooks/use-horizontal';

export default function AprenderScreen() {
  const horizontal = useHorizontal();
  const estiloHorizontal = useEstiloHorizontal(1000);
  const router = useRouter();
  const theme = useTheme();
  const isWide = useIsWide();
  const { doneUnits, userLevel, setUserLevel, levelBest } = useProgress();
  const { focusModeEnabled } = useSettings();
  const [showAll, setShowAll] = useState(false);
  // Solo en pantalla ancha: el nivel desplegado en la lista y la unidad que se ve a la derecha.
  // null = automático: se despliega el nivel de la unidad que se está viendo; 'ninguno' = todos plegados.
  const [nivelAbierto, setNivelAbierto] = useState<CefrLevel | 'ninguno' | null>(null);
  const [unidadElegida, setUnidadElegida] = useState<number | null>(null);

  // Al desplegar un nivel, la lista sube hasta él para que sus unidades queden a la vista (ver explorador de Gramática).
  const refLista = useRef<ScrollView>(null);
  const subirA = useRef<CefrLevel | null>(null);

  // Modo TDAH: solo tu nivel y el siguiente (el resto queda detrás de "Ver todos").
  const nivelBase = NIVELES.includes(userLevel) ? userLevel : NIVELES[NIVELES.length - 1];
  const nivelesVisibles: CefrLevel[] =
    focusModeEnabled && !showAll
      ? [nivelBase, siguienteNivel(nivelBase)].filter((nivel): nivel is CefrLevel => nivel !== null)
      : NIVELES;

  // Por defecto, la columna derecha muestra la siguiente unidad recomendada.
  const unidad = unidadElegida ?? nextRecommendedUnit(doneUnits, userLevel);
  const elegirUnidad = (num: number) => {
    setUnidadElegida(num);
    setNivelAbierto(null); // la lista vuelve a seguir a la unidad que se ve
  };
  const nivelDesplegado: CefrLevel | null =
    nivelAbierto === null ? (getUnit(unidad)?.level ?? null) : nivelAbierto === 'ninguno' ? null : nivelAbierto;

  const alternarNivel = (nivel: CefrLevel, abierto: boolean) => {
    subirA.current = abierto ? null : nivel;
    setNivelAbierto(abierto ? 'ninguno' : nivel);
  };

  const listaNiveles = nivelesVisibles.map((nivel) => {
    const { hechas, total } = progresoDeNivel(nivel, doneUnits);
    const abierto = isWide && nivelDesplegado === nivel;
    return (
      <View
        key={nivel}
        style={styles.bloqueNivel}
        onLayout={
          isWide
            ? (evento) => {
                if (subirA.current !== nivel) return;
                subirA.current = null;
                refLista.current?.scrollTo({ y: Math.max(0, evento.nativeEvent.layout.y - Spacing.three), animated: true });
              }
            : undefined
        }>
        <NivelCard
          nivel={nivel}
          hechas={hechas}
          total={total}
          mejor={levelBest?.[nivel]}
          esTuNivel={nivel === userLevel}
          compact={isWide}
          abierto={abierto}
          onPress={() => (isWide ? alternarNivel(nivel, abierto) : router.push(`/nivel/${nivel}`))}
        />
        {abierto && <NivelUnidades nivel={nivel} selectedUnit={unidad} onSelectUnit={elegirUnidad} />}
      </View>
    );
  });

  const lista = (
    <>
      <ThemedText type="subtitle">Aprender</ThemedText>
      {!horizontal && (
        <ThemedText themeColor="textSecondary">
          {focusModeEnabled
            ? 'Modo TDAH: solo tu nivel y el siguiente, sin lista larga'
            : 'Avanza nivel por nivel: cada tema y cada nivel terminan con su propio quiz'}
        </ThemedText>
      )}

      <View style={styles.levelRow}>
        <ThemedText type="smallBold" style={styles.levelLabel}>
          Tu nivel:
        </ThemedText>
        {CEFR_LEVELS.map((lvl) => (
          <Pressable
            key={lvl}
            onPress={() => setUserLevel(lvl)}
            style={[
              styles.levelChip,
              isWide && styles.levelChipCompacto,
              {
                backgroundColor: lvl === userLevel ? theme.primary : theme.backgroundSelected,
                borderColor: theme.border,
              },
            ]}>
            <ThemedText type="smallBold" themeColor={lvl === userLevel ? 'onPrimary' : 'text'}>
              {lvl}
            </ThemedText>
          </Pressable>
        ))}
      </View>
      {!horizontal && (
        <ThemedText type="small" themeColor="textSecondary" style={styles.levelHint}>
          Ajusta esto según tu resultado del EF SET u otro test de nivel.
        </ThemedText>
      )}

      <Card onPress={() => router.push('/tiempos')} style={isWide ? styles.mapaCompacto : undefined}>
        <ThemedText type={isWide ? 'smallBold' : 'cardTitle'}>🗺️ Mapa de tiempos verbales</ThemedText>
        {!isWide && (
          <ThemedText type="small" themeColor="textSecondary">
            Los 13 tiempos en un cuadro: cómo se forma cada uno y cuándo se usa.
          </ThemedText>
        )}
      </Card>

      {listaNiveles}

      {focusModeEnabled && (
        <Button variant="ghost" onPress={() => setShowAll((v) => !v)}>
          {showAll ? '🙈 Mostrar menos' : `👀 Ver todos los niveles (${NIVELES.length})`}
        </Button>
      )}
    </>
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        {isWide ? (
          <SplitLayout
            izquierda={lista}
            derecha={<UnitView num={unidad} onSelectUnit={elegirUnidad} />}
            claveDerecha={unidad}
            nombrePanel="la lista de niveles"
            refLista={refLista}
          />
        ) : (
          <ScrollView contentContainerStyle={[styles.content, estiloHorizontal]}>{lista}</ScrollView>
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
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  bloqueNivel: {
    gap: Spacing.two,
  },
  mapaCompacto: {
    padding: Spacing.three,
  },
  // Con letra grande los cinco niveles no caben en una línea: bajan a la siguiente en vez de salirse de la pantalla.
  levelRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: Spacing.two,
  },
  levelLabel: {
    flexShrink: 0,
  },
  levelChip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  // En la barra lateral (380 px) las cinco opciones y su etiqueta tienen que caber en una línea.
  levelChipCompacto: {
    paddingHorizontal: 10,
  },
  levelHint: {
    marginTop: -Spacing.two,
  },
});
