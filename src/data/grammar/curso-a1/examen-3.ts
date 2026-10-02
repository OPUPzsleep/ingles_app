import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from './ayuda';

/** Examen del bloque 3 (unidades 7–9): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_BLOQUE_3: QuizQuestion[] = [
  // ─── Unidad 7 · Presente continuo (7) ───
  ejercicio(
    'Shh! The baby ___ right now.',
    'is sleeping',
    ['sleeps', 'sleep', 'is sleep'],
    'right now (ahora mismo) pide presente continuo: am / is / are + verbo-ing → «The baby is sleeping».'
  ),
  ejercicio(
    'They are ___ to the park. (run)',
    'running',
    ['runing', 'runs', 'runned'],
    'run termina en una vocal + una consonante: se dobla la n antes de -ing → running.'
  ),
  ejercicio(
    "I ___ not working today.",
    'am',
    ['is', 'are', 'do'],
    "Con I el verbo to be es am: «I am not working» (I'm not working). No se usa do con el presente continuo."
  ),
  ejercicio(
    'Where ___ she going?',
    'is',
    ['does', 'are', 'do'],
    'she pide is: palabra interrogativa + is + sujeto + verbo-ing → «Where is she going?». does y do son del presente simple.'
  ),
  ejercicio(
    "What are you doing? — I ___ my homework.",
    "'m doing",
    ['doing', 'am do', 'do doing'],
    "La respuesta usa el presente continuo: I'm (I am) + doing. Siempre hace falta am / is / are antes del verbo con -ing."
  ),
  ejercicio(
    'Are they eating? — Yes, ___. (respuesta corta)',
    'they are',
    ["they're", 'they do', 'they eating'],
    "La respuesta corta repite el verbo to be de la pregunta: «Yes, they are». En el Yes no se contrae («Yes, they're» no se usa)."
  ),
  ejercicio(
    'I ___ a new phone. (Quiero un teléfono nuevo.)',
    'want',
    ['am wanting', 'wanting', 'is want'],
    'want es un verbo de estado: no se usa en presente continuo. Se dice «I want a new phone».'
  ),

  // ─── Unidad 8 · Imperativos y verbos + infinitivo (7) ───
  ejercicio(
    '___ your phone in class. (No uses tu teléfono en clase.)',
    "Don't use",
    ['Not use', "Don't to use", "Use don't"],
    "El imperativo negativo es Don't + verbo en base: «Don't use your phone in class»."
  ),
  ejercicio(
    'Please ___ here and wait. (Siéntate aquí y espera.)',
    'sit',
    ['sits', 'sitting', 'to sit'],
    'El imperativo es el verbo en forma base: «Please sit here and wait». Sin -s, sin -ing y sin to.'
  ),
  ejercicio(
    'We ___ go home now. (Queremos ir a casa ahora.)',
    'want to',
    ['wants to', 'want', 'are want to'],
    'want + to + verbo en base. Con we el verbo no lleva -s, así que wants to no va, y sin to («want go») está incompleto.'
  ),
  ejercicio(
    'He ___ work on Sundays. (Él tiene que trabajar los domingos.)',
    'has to',
    ['have to', 'has', 'does to'],
    'Con he el verbo have se vuelve has: has to + verbo en base. have to es para I / you / we / they.'
  ),
  ejercicio(
    "I ___ to wait. (No hace falta que espere.)",
    "don't have",
    ["haven't", "don't has", 'no have'],
    "La negativa de have to se hace con do: «I don't have to wait» (no es necesario). «I haven't to wait» no se usa."
  ),
  ejercicio(
    '___ she need to study? — Yes, she does.',
    'Does',
    ['Do', 'Is', 'Are'],
    'La pregunta con need to se arma con do / does. Con she va Does: «Does she need to study?» y se contesta «Yes, she does».'
  ),
  ejercicio(
    '¿Cuál oración es correcta? (Quiero ir a casa.)',
    'I want to go home.',
    ['I want go home.', 'I wants to go home.', 'I want going home.'],
    'want va seguido de to + verbo en base: «I want to go home». Sin to, con -s o con -ing está mal.'
  ),

  // ─── Unidad 9 · How much, this / that y can (6) ───
  ejercicio(
    'How much ___ this notebook? (¿Cuánto cuesta este cuaderno?)',
    'is',
    ['are', 'do', 'does'],
    'notebook es una sola cosa, así que va is: «How much is this notebook?». Con varias cosas se dice How much are…?'
  ),
  ejercicio(
    '___ are my parents, over there. (Esos son mis padres.)',
    'Those',
    ['That', 'This', 'These'],
    'Los padres son varios y están lejos («over there»): those. that es para una sola cosa lejana, y this / these son para cosas cercanas.'
  ),
  ejercicio(
    'Is ___ your car over there? (¿Ese es tu auto?)',
    'that',
    ['this', 'these', 'those'],
    'El auto está lejos y es uno solo: that. this es para algo cercano y these / those van con varias cosas.'
  ),
  ejercicio(
    'She ___ drive a car. (Ella no sabe manejar.)',
    "can't",
    ['cans', "can't to", "isn't"],
    "La negativa de can es can't y va seguida del verbo en base: «She can't drive». can no lleva -s con she."
  ),
  ejercicio(
    'Can he cook? — No, ___.',
    "he can't",
    ["he doesn't", "he isn't", 'he can'],
    "La respuesta corta repite el can de la pregunta: «No, he can't». doesn't y isn't no se usan con can."
  ),
  ejercicio(
    '___ I sit here, please? (¿Puedo sentarme aquí?)',
    'Can',
    ['Do', 'Am', 'Does'],
    'Para pedir permiso se usa Can I…?: «Can I sit here, please?». Do I y Am I no sirven para pedir permiso.'
  ),
];
