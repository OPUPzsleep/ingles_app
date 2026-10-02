import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

/**
 * El curso A2: 12 unidades en 4 bloques (ids internos 13–24, que se ven como Unidad 1–12 del nivel). Se llena por
 * bloques (docs/plan-a2.md, fases 1–4); mientras tanto el nivel sigue mostrando las unidades viejas del libro.
 * Sin repartir las respuestas: eso lo hace `curso/index.ts`.
 */
export const UNIDADES_CURSO_A2: Record<number, Unit> = {};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del curso A2 que las tienen. */
export const FORMAS_CURSO_A2: Record<number, FormasUnidad | FormasUnidad[]> = {};

/** Los exámenes de bloque del A2: 20 ejercicios por tema (bloque), distintos a los de las unidades. */
export const EXAMENES_CURSO_A2: Record<string, QuizQuestion[]> = {};
