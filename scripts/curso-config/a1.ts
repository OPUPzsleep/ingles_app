import { BLOQUE_1, BLOQUE_2, BLOQUE_3, BLOQUE_4 } from '@/data/grammar/topics';

import type { ConfigCurso } from './tipos';

const BLOQUE_DE_UNIDAD: Record<number, string> = {
  1: BLOQUE_1,
  2: BLOQUE_1,
  3: BLOQUE_1,
  4: BLOQUE_2,
  5: BLOQUE_2,
  6: BLOQUE_2,
  7: BLOQUE_3,
  8: BLOQUE_3,
  9: BLOQUE_3,
  10: BLOQUE_4,
  11: BLOQUE_4,
  12: BLOQUE_4,
};

const CON_FORMAS = [1, 4, 5, 7, 9, 10];

const COBERTURA: Record<number, [tema: string, buscar: RegExp][]> = {
  1: [
    ['Verbo BE con I, you, we, he, she, they', /to be: ser o estar/i],
    ['Afirmativas', /Afirmativa/i],
    ['Negativas', /Negativa/i],
    ['Preguntas de Sí / No', /Preguntas de S/i],
    ['Respuestas cortas', /Respuestas cortas/i],
    ["What's…? y Where…?", /What's…\? y Where/i],
  ],
  2: [
    ['Artículos a / an', /A y an/],
    ['Artículo the', /The: el, la/],
    ['This y these', /This y these/],
    ['Plurales regulares', /Plurales regulares/],
    ['Plurales irregulares', /Plurales irregulares/],
  ],
  3: [
    ["Posesivo con 's", /Posesivo con 's/],
    ["Posesivo con s'", /Posesivo con s'/],
    ['Adjetivos posesivos', /Adjetivos posesivos/],
  ],
  4: [
    ['Presente simple: cuándo se usa', /Presente simple: ¿cuándo/],
    ['Afirmativas', /Afirmativa/],
    ['Negativas', /Negativa/],
    ['Preguntas de Sí / No', /Preguntas de Sí/],
    ['Respuestas cortas', /Respuestas cortas/],
    ['Preguntas de información', /Preguntas de información/],
    ['Adverbios de frecuencia', /Adverbios de frecuencia/],
  ],
  5: [
    ['There is / There are', /There is \/ There are/],
    ['Negativa, pregunta y respuestas cortas', /Negativa, pregunta/],
    ['Cuantificadores', /Cuantificadores/],
    ['Adjetivos antes del sustantivo', /Adjetivos antes del sustantivo/],
  ],
  7: [
    ['Presente continuo: cuándo se usa', /Presente continuo: ¿cuándo/],
    ['Afirmativas', /Afirmativa/],
    ['Negativas', /Negativa/],
    ['Preguntas de Sí / No', /Preguntas de Sí/],
    ['Respuestas cortas', /Respuestas cortas/],
    ['Preguntas de información', /Preguntas de información/],
  ],
  8: [
    ['Imperativos', /Imperativos/],
    ['Imperativo negativo', /Imperativo negativo/],
    ['Verbos seguidos de infinitivo (like to, want to, need to, have to)', /like to \/ want to \/ need to \/ have to/],
  ],
  9: [
    ['Preguntas con How much', /How much/],
    ['This / these / that / those', /This \/ these \/ that \/ those/],
    ["Can y can't", /Can y can't/],
  ],
  10: [
    ['Pasado simple: cuándo se usa', /Pasado simple: ¿cuándo/],
    ['Verbos regulares', /Verbos regulares/],
    ['Verbos irregulares', /Verbos irregulares/],
    ['Negativa', /Negativa/],
    ['Preguntas de Sí / No', /Preguntas de Sí/],
    ['Preguntas de información con did', /Preguntas de información con did/],
    ['Pasado de to be: afirmativa y negativa', /Pasado de to be/],
    ['Pasado de to be: preguntas de información', /was \/ were/],
  ],
  11: [
    ['Sustantivos contables e incontables', /Sustantivos contables e incontables/],
    ['How much / How many', /How much\? \/ How many\?/],
    ['Would you like (to)…?', /Would you like/],
  ],
  12: [
    ['Some', /Some:/],
    ['Any', /Any:/],
    ['A lot of, much y many', /A lot of, much y many/],
  ],
  6: [
    ['La hora', /La hora/],
    ['A qué hora', /A qué hora/],
    ["Sugerencias con Let's", /Let's: sugerencias/],
  ],
};

export const CONFIG_A1: ConfigCurso = {
  nivel: 'A1',
  ids: [1, 12],
  bloques: [BLOQUE_1, BLOQUE_2, BLOQUE_3, BLOQUE_4],
  bloqueDeUnidad: BLOQUE_DE_UNIDAD,
  conFormas: CON_FORMAS,
  cobertura: COBERTURA,
  nivelesDeVocabulario: ['A1'],
};
