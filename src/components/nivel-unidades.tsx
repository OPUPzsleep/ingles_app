import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Cuadricula } from '@/components/cuadricula';
import { TemaQuizItem } from '@/components/tema-quiz-item';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UnitListItem } from '@/components/unit-list-item';
import { Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { useHorizontal } from '@/hooks/use-horizontal';
import {
  cantidadPreguntasQuizNivel,
  cantidadPreguntasQuizTema,
  claveQuizTema,
  etiquetaDeTema,
  etiquetaDeUnidad,
  numeroEnNivel,
  progresoDeNivel,
  progresoDeSeccion,
  seccionesDeNivel,
} from '@/lib/grammar';
import type { CefrLevel } from '@/types/grammar';

interface NivelUnidadesProps {
  nivel: CefrLevel;
  onSelectUnit: (num: number) => void;
  /** Unidad resaltada (la que se está viendo en la columna derecha). */
  selectedUnit?: number | null;
}

/**
 * Lo que hay dentro de un nivel: sus temas como secciones (cada una con sus unidades en orden y, al final, el quiz de
 * ese tema) y, al cerrar todo, el quiz del nivel. Así cada tema y cada nivel terminan con sus propias preguntas.
 */
export function NivelUnidades({ nivel, onSelectUnit, selectedUnit }: NivelUnidadesProps) {
  const router = useRouter();
  const horizontal = useHorizontal();
  const { doneUnits, levelBest, temaBest } = useProgress();

  const { hechas, total } = progresoDeNivel(nivel, doneUnits);
  const mejor = levelBest?.[nivel];
  const preguntas = cantidadPreguntasQuizNivel(nivel);

  return (
    <View style={styles.lista}>
      {seccionesDeNivel(nivel).map((seccion) => {
        const { tema } = seccion;
        const { nombre, icono } = etiquetaDeTema(nivel, tema);
        const avance = progresoDeSeccion(seccion, doneUnits);
        const filas = [
          ...seccion.unidades.map((num) => (
            <UnitListItem
              key={num}
              num={numeroEnNivel(num) ?? num}
              title={ALL_UNIT_TITLES[num] ?? etiquetaDeUnidad(num)}
              done={doneUnits.includes(num)}
              selected={num === selectedUnit}
              onPress={() => onSelectUnit(num)}
            />
          )),
          <TemaQuizItem
            key="quiz"
            tema={nombre}
            preguntas={cantidadPreguntasQuizTema(nivel, seccion)}
            examen={!!tema.examen}
            mejor={temaBest?.[claveQuizTema(nivel, tema.name)]}
            onPress={() => router.push(`/quiz/tema/${nivel}/${encodeURIComponent(tema.name)}`)}
          />,
        ];
        return (
          <View key={tema.name} style={styles.seccion}>
            <View style={styles.encabezado} accessibilityRole="header">
              <ThemedText type="smallBold" style={styles.nombreTema}>
                {`${icono} ${nombre}`}
              </ThemedText>
              <ThemedText type="small" themeColor={avance.hechas === avance.total ? 'success' : 'textSecondary'}>
                {`${avance.hechas}/${avance.total}`}
              </ThemedText>
            </View>
            {horizontal ? (
              // Celular girado: las unidades y el quiz del tema en dos columnas, para no recorrer una lista larguísima.
              <Cuadricula minColumna={360} maxColumnas={2}>
                {filas.map((fila, i) => (
                  <View key={i} style={styles.celda}>
                    {fila}
                  </View>
                ))}
              </Cuadricula>
            ) : (
              filas
            )}
          </View>
        );
      })}

      <Card style={styles.quiz}>
        <ThemedText type="cardTitle">🏁 Quiz del nivel {nivel}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {preguntas} preguntas de todos los temas de este nivel
          {mejor !== undefined ? ` · Tu mejor resultado: ${mejor}%` : ''}
          {hechas < total ? `. Te faltan ${total - hechas} unidades por estudiar.` : '.'}
        </ThemedText>
        <Button variant="primary" onPress={() => router.push(`/quiz/nivel/${nivel}`)}>
          {mejor === undefined ? '🏁 Empezar el quiz' : '🔁 Repetir el quiz'}
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    gap: Spacing.three,
  },
  seccion: {
    gap: Spacing.two,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
    paddingHorizontal: Spacing.one,
  },
  nombreTema: {
    flex: 1,
  },
  celda: {
    flex: 1,
  },
  quiz: {
    marginTop: Spacing.one,
  },
});
