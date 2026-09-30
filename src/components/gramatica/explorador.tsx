import { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ConceptoView } from '@/components/gramatica/concepto-view';
import { SplitLayout } from '@/components/split-layout';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { GRAM_CATS } from '@/data/gramatica/categories';
import { useTheme } from '@/hooks/use-theme';
import { conceptoInicial, conceptosDeCategoria } from '@/lib/gramatica';
import type { GramConcept } from '@/types/gramatica';

interface ConceptoFilaProps {
  concepto: GramConcept;
  seleccionado: boolean;
  onPress: () => void;
}

function ConceptoFila({ concepto, seleccionado, onPress }: ConceptoFilaProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      aria-selected={seleccionado}
      style={({ pressed }) => [
        styles.concepto,
        seleccionado
          ? { backgroundColor: theme.backgroundSelected, borderColor: theme.primary }
          : { backgroundColor: theme.backgroundElement, borderColor: theme.border },
        pressed && styles.pressed,
      ]}>
      <ThemedText type="small">{concepto.title}</ThemedText>
    </Pressable>
  );
}

interface ExploradorGramaticaProps {
  /** Si se llegó directo a un concepto, con él abre. */
  conceptoId?: string;
  /** Si se llegó directo a una categoría, abre con la suya desplegada y su primer concepto. */
  categoriaId?: string;
}

/**
 * Gramática en pantalla ancha: las categorías y sus conceptos a la izquierda (se puede esconder)
 * y el concepto elegido a la derecha. Elegir otro no navega: solo cambia lo que se ve a la derecha.
 */
export function ExploradorGramatica({ conceptoId, categoriaId }: ExploradorGramaticaProps) {
  const theme = useTheme();
  const [elegido, setElegido] = useState<GramConcept | undefined>(() => conceptoInicial(conceptoId, categoriaId));
  // Una categoría desplegada a la vez; arranca con la del concepto que se ve.
  const [catAbierta, setCatAbierta] = useState<string | null>(() => elegido?.cat ?? null);

  // Al desplegar una categoría, la lista sube hasta ella para que sus conceptos queden a la vista. El scroll
  // se hace cuando la categoría ya tiene su tamaño nuevo (onLayout): antes, su posición todavía es la vieja.
  const refLista = useRef<ScrollView>(null);
  const subirA = useRef<string | null>(null);

  const alternar = (id: string, abierta: boolean) => {
    subirA.current = abierta ? null : id;
    setCatAbierta(abierta ? null : id);
  };

  const lista = (
    <>
      <ThemedText type="subtitle">📚 Gramática</ThemedText>
      <ThemedText themeColor="textSecondary">Para hispanohablantes: conceptos explicados en español</ThemedText>

      {GRAM_CATS.map((cat) => {
        const conceptos = conceptosDeCategoria(cat.id);
        const abierta = catAbierta === cat.id;
        // Si la categoría está plegada pero contiene el concepto que se ve, se marca para no perderlo de vista.
        const contieneElegido = !abierta && elegido?.cat === cat.id;
        return (
          <View
            key={cat.id}
            style={styles.categoria}
            onLayout={(evento) => {
              if (subirA.current !== cat.id) return;
              subirA.current = null;
              refLista.current?.scrollTo({ y: Math.max(0, evento.nativeEvent.layout.y - Spacing.three), animated: true });
            }}>
            <Card
              onPress={conceptos.length > 0 ? () => alternar(cat.id, abierta) : undefined}
              style={[
                styles.categoriaCard,
                conceptos.length === 0 && styles.vacia,
                contieneElegido && { borderColor: theme.primary },
              ]}>
              <View style={styles.filaCategoria}>
                <ThemedText style={styles.icono}>{cat.icon}</ThemedText>
                <ThemedText type="smallBold" numberOfLines={1} style={styles.nombreCategoria}>
                  {cat.name}
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {conceptos.length > 0 ? conceptos.length : 'Próximamente'}
                </ThemedText>
                {conceptos.length > 0 && <ThemedText themeColor="textSecondary">{abierta ? '▾' : '▸'}</ThemedText>}
              </View>
            </Card>
            {abierta &&
              conceptos.map((concepto) => (
                <ConceptoFila
                  key={concepto.id}
                  concepto={concepto}
                  seleccionado={concepto.id === elegido?.id}
                  onPress={() => setElegido(concepto)}
                />
              ))}
          </View>
        );
      })}
    </>
  );

  return (
    <SplitLayout
      izquierda={lista}
      derecha={
        elegido ? (
          <ConceptoView concepto={elegido} />
        ) : (
          <ThemedText themeColor="textSecondary">Elige un concepto de la lista.</ThemedText>
        )
      }
      claveDerecha={elegido?.id}
      espacioPestanas={false}
      nombrePanel="la lista de conceptos"
      anchoMaxDetalle={1320}
      refLista={refLista}
    />
  );
}

const styles = StyleSheet.create({
  categoria: {
    gap: Spacing.two,
  },
  categoriaCard: {
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.three,
  },
  vacia: {
    opacity: 0.55,
  },
  filaCategoria: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  icono: {
    fontSize: 22,
  },
  nombreCategoria: {
    flex: 1,
  },
  // Los conceptos van un poco metidos hacia la derecha, para que se vea que son de la categoría de arriba.
  concepto: {
    marginLeft: Spacing.three,
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.medium,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.8,
  },
});
