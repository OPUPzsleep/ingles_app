import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from './ayuda';

/** Examen del bloque 2 (unidades 4–6): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_BLOQUE_2: QuizQuestion[] = [
  // ─── Unidad 4 · Presente simple y adverbios de frecuencia (7) ───
  ejercicio(
    'She ___ TV every night.',
    'watches',
    ['watch', 'watchs', 'is watch'],
    'Con she el verbo lleva -s, y watch termina en -ch, así que se agrega -es → watches.'
  ),
  ejercicio(
    'My brother ___ English every day. (study)',
    'studies',
    ['studys', 'studyes', 'study'],
    'Con he / she / it el verbo lleva -s. Como study termina en consonante + y, la y cambia a -ies → studies.'
  ),
  ejercicio(
    "They ___ like fish. (A ellos no les gusta el pescado.)",
    "don't",
    ["doesn't", "isn't", "aren't"],
    "they pide don't + verbo en base: «They don't like fish». doesn't es para he / she / it, e isn't / aren't son de to be."
  ),
  ejercicio(
    '___ he play the guitar?',
    'Does',
    ['Do', 'Is', 'Are'],
    'he pide Does en la pregunta: «Does he play the guitar?» (y play queda sin -s).'
  ),
  ejercicio(
    'Do you walk to work? — Yes, ___. (respuesta corta)',
    'I do',
    ['I walk', 'I am', 'I does'],
    'La respuesta corta usa el auxiliar de la pregunta: «Yes, I do». «I am» es de to be y «I does» no concuerda con I.'
  ),
  ejercicio(
    'Where ___ your sister live?',
    'does',
    ['do', 'is', 'are'],
    'your sister = she, así que va does: palabra interrogativa + does + sujeto + verbo en base («Where does your sister live?»).'
  ),
  ejercicio(
    'He ___ late for work. (Nunca llega tarde.)',
    'is never',
    ['never is', 'does never', "doesn't never"],
    "Con to be el adverbio va DESPUÉS: «He is never late». never ya es negativo, así que no se usa don't / doesn't."
  ),

  // ─── Unidad 5 · There is / There are, cuantificadores y adjetivos (7) ───
  ejercicio(
    '___ a bank near here. (Hay un banco cerca de aquí.)',
    "There's",
    ['There are', 'They are', 'It are'],
    "bank es una sola cosa, así que va there is (there's): «There's a bank near here». There are es para varias cosas."
  ),
  ejercicio(
    '___ two cats in the garden. (Hay dos gatos en el jardín.)',
    'There are',
    ['There is', 'They are', 'It has'],
    'two cats son varias cosas, así que va there are: «There are two cats in the garden».'
  ),
  ejercicio(
    "Is there a restaurant here? — No, ___.",
    "there isn't",
    ["it isn't", "there aren't", 'there not'],
    "La respuesta corta repite there + el verbo de la pregunta (is): «No, there isn't». there aren't es para varias cosas."
  ),
  ejercicio(
    'Are there any chairs? — Yes, ___.',
    'there are',
    ['there is', "there're", 'we are'],
    "La respuesta repite there + are: «Yes, there are». there is es para una sola cosa y en el Yes no se contrae."
  ),
  ejercicio(
    "There aren't ___ eggs.",
    'any',
    ['some', 'a', 'an'],
    "En las negativas se usa any: «There aren't any eggs». some es para afirmativas, y a / an no van con plurales."
  ),
  ejercicio(
    '¿Cuál es correcta? (una casa blanca)',
    'a white house',
    ['a house white', 'a whites house', 'white a house'],
    'El adjetivo va ANTES del sustantivo y no cambia: «a white house». «a house white» es el orden del español.'
  ),
  ejercicio(
    'There are ___ people in the park. (mucha gente)',
    'a lot of',
    ['a lot', 'much', 'a few of'],
    'a lot of + sustantivo significa mucho / muchos. «a lot» sin of no puede ir antes de un sustantivo, y much no se usa así en afirmativas.'
  ),

  // ─── Unidad 6 · La hora y Let's (6) ───
  ejercicio(
    "It's 8:15. → It's quarter ___ eight.",
    'past',
    ['to', 'at', 'half'],
    'quarter past = y cuarto (8:15). quarter to sería 7:45 (menos cuarto).'
  ),
  ejercicio(
    'What time do you have lunch? — ___ noon.',
    'At',
    ['On', 'In', 'To'],
    'noon (mediodía) es un momento exacto, así que va at: «At noon».'
  ),
  ejercicio(
    '¿Cómo se dice 3:00?',
    "It's three o'clock.",
    ["It's three hour.", "They are three o'clock.", 'It is three clock.'],
    "Las horas en punto se dicen It's + número + o'clock: «It's three o'clock»."
  ),
  ejercicio(
    "Let's ___ to the beach.",
    'go',
    ['to go', 'going', 'goes'],
    "Después de Let's va el verbo en forma base, sin to ni -ing: «Let's go»."
  ),
  ejercicio(
    "I'm hungry. ___ eat something. (Comamos algo.)",
    "Let's",
    ['Let', 'Lets to', 'We let'],
    "Let's (let us) + verbo en base sirve para proponer algo entre todos: «Let's eat something»."
  ),
  ejercicio(
    'My birthday is ___ May.',
    'in',
    ['at', 'on', 'to'],
    'Los meses llevan in: «in May». on se usa con días y fechas («on May 5th») y at con horas.'
  ),
];
