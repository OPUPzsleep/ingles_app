import type { QuizQuestion } from '@/types/grammar';

/**
 * Arma una pregunta de opción múltiple: la respuesta correcta y tres incorrectas. La correcta se coloca en una
 * posición que sale del propio texto de la pregunta (siempre la misma), así las respuestas correctas quedan
 * repartidas entre A, B, C y D sin tener que contar índices a mano.
 */
export function p(pregunta: string, correcta: string, incorrectas: [string, string, string], explicacion: string): QuizQuestion {
  let hash = 7;
  for (const letra of pregunta) hash = (hash * 31 + letra.charCodeAt(0)) >>> 0;
  const posicion = hash % 4;
  const opts = [...incorrectas];
  opts.splice(posicion, 0, correcta);
  return { q: pregunta, opts, ans: posicion, exp: explicacion };
}
