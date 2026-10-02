import { EXAMENES_CURSO_A1, FORMAS_CURSO_A1, UNIDADES_CURSO_A1 } from '@/data/grammar/curso-a1';
import { PRONUN_CURSO_A1 } from '@/data/grammar/curso-a1/pronunciacion';
import { EXAMENES_CURSO_A2, FORMAS_CURSO_A2, UNIDADES_CURSO_A2 } from '@/data/grammar/curso-a2';
import { PRONUN_CURSO_A2 } from '@/data/grammar/curso-a2/pronunciacion';
import type { CefrLevel, FormasUnidad, PronunUnit, QuizQuestion, Unit } from '@/types/grammar';

import { repartirRespuestas } from './ayuda';

/** Los cursos propios de la app (el resto de las unidades vienen del libro, en `units/`). */
export type NivelDeCurso = 'A1' | 'A2';

/** Un curso: sus unidades, formas, pronunciación y exámenes de bloque. */
export interface Curso {
  nivel: NivelDeCurso;
  /** El id interno de la primera unidad del curso (A1 = 1, A2 = 13). */
  primerId: number;
  unidades: Record<number, Unit>;
  formas: Record<number, FormasUnidad | FormasUnidad[]>;
  pronunciacion: Record<number, PronunUnit>;
  /** Un examen de 20 ejercicios por nombre de tema (bloque). */
  examenes: Record<string, QuizQuestion[]>;
}

/** Las unidades con la respuesta correcta de sus 5 ejercicios repartida entre A, B, C y D (cada unidad con otro reparto). */
const conRespuestasRepartidas = (unidades: Record<number, Unit>, primerId: number): Record<number, Unit> =>
  Object.fromEntries(
    Object.entries(unidades).map(([id, unit]) => [id, { ...unit, quiz: repartirRespuestas(unit.quiz, (Number(id) - primerId) * 5) }])
  );

const conExamenesRepartidos = (examenes: Record<string, QuizQuestion[]>): Record<string, QuizQuestion[]> =>
  Object.fromEntries(Object.entries(examenes).map(([tema, preguntas]) => [tema, repartirRespuestas(preguntas)]));

export const CURSOS: Record<NivelDeCurso, Curso> = {
  A1: {
    nivel: 'A1',
    primerId: 1,
    unidades: conRespuestasRepartidas(UNIDADES_CURSO_A1, 1),
    formas: FORMAS_CURSO_A1,
    pronunciacion: PRONUN_CURSO_A1,
    examenes: conExamenesRepartidos(EXAMENES_CURSO_A1),
  },
  A2: {
    nivel: 'A2',
    primerId: 13,
    unidades: conRespuestasRepartidas(UNIDADES_CURSO_A2, 13),
    formas: FORMAS_CURSO_A2,
    pronunciacion: PRONUN_CURSO_A2,
    examenes: conExamenesRepartidos(EXAMENES_CURSO_A2),
  },
};

const LISTA = Object.values(CURSOS);

/** Las unidades de todos los cursos por id interno (tapan a las del libro con el mismo id). */
export const UNIDADES_CURSO: Record<number, Unit> = Object.assign({}, ...LISTA.map((curso) => curso.unidades));

/** Las formas de las unidades de todos los cursos. */
export const FORMAS_CURSO: Record<number, FormasUnidad | FormasUnidad[]> = Object.assign({}, ...LISTA.map((curso) => curso.formas));

/** La pronunciación propia de cada unidad de los cursos. */
export const PRONUN_CURSO: Record<number, PronunUnit> = Object.assign({}, ...LISTA.map((curso) => curso.pronunciacion));

/** Los exámenes de bloque por nivel y nombre de tema. */
export const EXAMENES_CURSO: Partial<Record<CefrLevel, Record<string, QuizQuestion[]>>> = Object.fromEntries(
  LISTA.map((curso) => [curso.nivel, curso.examenes])
);

/**
 * Unidades del libro que se esconden (no se borran) y por qué: «absorbida en A2·U#» o «sin coincidencia». Se llena en
 * la Fase 0c; el validador la imprime.
 */
export const ESCONDIDAS: Record<number, string> = {};
