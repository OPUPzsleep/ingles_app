import type { CefrLevel } from '@/types/grammar';

/** Lo que cambia de un curso a otro en `scripts/valida-curso.ts`. */
export interface ConfigCurso {
  nivel: 'A1' | 'A2';
  /** El primer y el último id interno de las unidades del curso. */
  ids: [primero: number, ultimo: number];
  /** Los nombres de los temas (bloques) del curso, en orden. */
  bloques: string[];
  /** El bloque al que pertenece cada unidad. */
  bloqueDeUnidad: Record<number, string>;
  /** Las unidades de verbos, que deben traer sus tres formas (afirmativa, negativa y pregunta). */
  conFormas: number[];
  /**
   * Lista de verificación: los temas del plan de estudios de cada unidad. Cada uno se busca en los títulos de los bloques
   * de teoría de la unidad: si falta, la unidad se quedó a medias.
   */
  cobertura: Record<number, [tema: string, buscar: RegExp][]>;
  /** Los niveles de Vocabulario cuyas palabras ya se conocen (para los avisos de palabras raras). */
  nivelesDeVocabulario: CefrLevel[];
}
