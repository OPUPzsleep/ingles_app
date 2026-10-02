import { BLOQUE_A2_1, BLOQUE_A2_2, BLOQUE_A2_3 } from '@/data/grammar/topics';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

import { FORMAS_BLOQUE_1, UNIDADES_BLOQUE_1 } from './bloque-1';
import { FORMAS_BLOQUE_2, UNIDADES_BLOQUE_2 } from './bloque-2';
import { FORMAS_BLOQUE_3, UNIDADES_BLOQUE_3 } from './bloque-3';
import { EXAMEN_A2_BLOQUE_1 } from './examen-1';
import { EXAMEN_A2_BLOQUE_2 } from './examen-2';
import { EXAMEN_A2_BLOQUE_3 } from './examen-3';

/**
 * El curso A2: 12 unidades en 4 bloques (ids internos 13–24, que se ven como Unidad 1–12 del nivel). Se llena por
 * bloques (docs/plan-a2.md, fases 1–4); mientras tanto el nivel sigue mostrando las unidades viejas del libro.
 * Sin repartir las respuestas: eso lo hace `curso/index.ts`.
 */
export const UNIDADES_CURSO_A2: Record<number, Unit> = {
  ...UNIDADES_BLOQUE_1,
  ...UNIDADES_BLOQUE_2,
  ...UNIDADES_BLOQUE_3,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del curso A2 que las tienen. */
export const FORMAS_CURSO_A2: Record<number, FormasUnidad | FormasUnidad[]> = {
  ...FORMAS_BLOQUE_1,
  ...FORMAS_BLOQUE_2,
  ...FORMAS_BLOQUE_3,
};

/** Los exámenes de bloque del A2: 20 ejercicios por tema (bloque), distintos a los de las unidades. */
export const EXAMENES_CURSO_A2: Record<string, QuizQuestion[]> = {
  [BLOQUE_A2_1]: EXAMEN_A2_BLOQUE_1,
  [BLOQUE_A2_2]: EXAMEN_A2_BLOQUE_2,
  [BLOQUE_A2_3]: EXAMEN_A2_BLOQUE_3,
};
