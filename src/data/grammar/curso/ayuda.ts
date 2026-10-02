import { p } from '@/data/grammar/preguntas-tema/ayuda';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import type { ExplainBlock, Flashcard, QuizQuestion, VocabEntry } from '@/types/grammar';

/** Un ejercicio de opción múltiple: la pregunta, la correcta, tres incorrectas y la explicación en español. */
export const ejercicio = p;

/** Un bloque de teoría: título, explicación en español y ejemplos [inglés, español] (con audio en la pantalla). */
export const teoria = (head: string, body: string, ejemplos: [string, string][]): ExplainBlock => ({ head, body, ejemplos });

/** Una tarjeta de «Repaso rápido»: una pregunta y su respuesta. */
export const tarjeta = (front: string, back: string): Flashcard => ({ front, back });

/** Palabras que se pidieron a `palabras()` y no están en Vocabulario: las revisa `scripts/valida-curso.ts`. */
export const PALABRAS_FALTANTES: string[] = [];

/** Las palabras de Vocabulario que pide la unidad (por su nombre en inglés), con su pronunciación. */
export function palabras(...nombres: string[]): VocabEntry[] {
  const todas = VOCAB_TOPICS.flatMap((tema) => tema.words);
  return nombres.flatMap((nombre) => {
    const encontrada = todas.find((entrada) => entrada.w.toLowerCase() === nombre.toLowerCase());
    if (!encontrada) PALABRAS_FALTANTES.push(nombre);
    return encontrada ? [encontrada] : [];
  });
}

/** A qué letra (0 = A … 3 = D) va la respuesta correcta de cada ejercicio: cada 4 seguidos usan las cuatro letras. */
const LETRAS_DE_LA_RESPUESTA = [1, 3, 0, 2, 2, 0, 3, 1, 3, 1, 2, 0, 0, 2, 1, 3, 1, 0, 3, 2];

/**
 * Reparte la respuesta correcta de los ejercicios entre A, B, C y D en partes iguales (un examen de 20 tiene 5 de cada
 * letra), para que no se pueda adivinar por la posición. `desde` desfasa el reparto: cada unidad empieza en otro punto.
 */
export function repartirRespuestas(preguntas: QuizQuestion[], desde = 0): QuizQuestion[] {
  return preguntas.map((pregunta, i) => {
    const destino = LETRAS_DE_LA_RESPUESTA[(desde + i) % LETRAS_DE_LA_RESPUESTA.length];
    const opts = pregunta.opts.filter((_, posicion) => posicion !== pregunta.ans);
    opts.splice(destino, 0, pregunta.opts[pregunta.ans]);
    return { ...pregunta, opts, ans: destino };
  });
}
