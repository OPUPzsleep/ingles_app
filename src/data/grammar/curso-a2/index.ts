import { BLOQUE_A2_1 } from '@/data/grammar/topics';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

import { FORMAS_BLOQUE_1, UNIDADES_BLOQUE_1 } from './bloque-1';
import { EXAMEN_A2_BLOQUE_1 } from './examen-1';

/**
 * El curso A2: 12 unidades en 4 bloques (ids internos 13–24, que se ven como Unidad 1–12 del nivel). Se llena por
 * bloques (docs/plan-a2.md, fases 1–4); mientras tanto el nivel sigue mostrando las unidades viejas del libro.
 * Sin repartir las respuestas: eso lo hace `curso/index.ts`.
 */
export const UNIDADES_CURSO_A2: Record<number, Unit> = {
  ...UNIDADES_BLOQUE_1,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del curso A2 que las tienen. */
export const FORMAS_CURSO_A2: Record<number, FormasUnidad | FormasUnidad[]> = {
  ...FORMAS_BLOQUE_1,
};

/** Los exámenes de bloque del A2: 20 ejercicios por tema (bloque), distintos a los de las unidades. */
export const EXAMENES_CURSO_A2: Record<string, QuizQuestion[]> = {
  [BLOQUE_A2_1]: EXAMEN_A2_BLOQUE_1,
};
