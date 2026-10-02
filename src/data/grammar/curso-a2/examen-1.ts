import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 1 (ids 13–15, Unidad 1–3 de A2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_A2_BLOQUE_1: QuizQuestion[] = [
  // ─── Unidad 1 · Presente simple, to be, too y either (7) ───
  ejercicio(
    'My sister ___ at a bank.',
    'works',
    ['work', 'is work', 'working'],
    'Una rutina o un trabajo con she va en presente simple con -s: «My sister works». work no lleva la -s y working necesitaría is.'
  ),
  ejercicio(
    'They ___ from Brazil. They are Chilean.',
    "aren't",
    ["don't", "isn't", "doesn't"],
    "from Brazil es un complemento de to be, y con they la negativa es aren't. don't y doesn't son auxiliares de otros verbos e isn't es para he, she, it."
  ),
  ejercicio(
    '___ she like spicy food?',
    'Does',
    ['Do', 'Is', 'Are'],
    'like es un verbo común y con she la pregunta empieza con Does: «Does she like spicy food?». Do es para I, you, we, they; Is y Are son de to be.'
  ),
  ejercicio(
    'A: Are you hungry? B: No, I ___.',
    'am not',
    ["don't", "isn't", "amn't"],
    "La respuesta corta repite el verbo de la pregunta: «No, I am not» (o I'm not). don't es del presente simple, isn't es para he, she, it y amn't no existe."
  ),
  ejercicio(
    "A: I'm studying English. B: I am ___.",
    'too',
    ['either', 'neither', 'so'],
    'La frase de A es afirmativa, así que se agrega too al final: «I am too». either es para frases negativas y so va al principio (So am I).'
  ),
  ejercicio(
    "A: She doesn't eat meat. B: He doesn't ___.",
    'either',
    ['too', 'neither', 'also'],
    "Después de una frase negativa se usa either al final: «He doesn't either». too y also son para frases afirmativas y neither ya es negativo."
  ),
  ejercicio(
    'A: I like rainy days. B: ___ do I.',
    'So',
    ['Neither', 'Too', 'Either'],
    'La frase de A es afirmativa, y para decir «yo también» al inicio se usa So + auxiliar + sujeto: «So do I». Neither es para frases negativas.'
  ),

  // ─── Unidad 2 · Formas verbales, preposiciones y pronombres (7) ───
  ejercicio(
    'She can ___ three languages. (speak)',
    'speak',
    ['speaks', 'to speak', 'speaking'],
    'Después de can el verbo va en base: «She can speak». speaks lleva -s de más, to speak lleva to de más y speaking es una forma en -ing.'
  ),
  ejercicio(
    'Do you mind ___ the window? (close)',
    'closing',
    ['close', 'to close', 'closes'],
    'mind pide el verbo siguiente en -ing: «Do you mind closing the window?». Con mind no se usa to + verbo.'
  ),
  ejercicio(
    'We decided ___ a new car. (buy)',
    'to buy',
    ['buying', 'buy', 'buys'],
    'decide va seguido de to + verbo base: «We decided to buy». Con decide no se usa -ing ni el verbo suelto.'
  ),
  ejercicio(
    "She's afraid ___ dogs.",
    'of',
    ['from', 'at', 'for'],
    'La combinación fija es afraid of: «She is afraid of dogs». Las otras preposiciones no van con afraid.'
  ),
  ejercicio(
    'Who are you waiting ___?',
    'for',
    ['at', 'to', 'from'],
    'El verbo wait va con for (esperar a alguien). En la pregunta, la preposición queda al final: «Who are you waiting for?».'
  ),
  ejercicio(
    "I can't find my keys. Can you help ___?",
    'me',
    ['I', 'my', 'mine'],
    'Después del verbo help va un pronombre objeto: me. I es pronombre sujeto, my va antes de un sustantivo y mine significa «mío».'
  ),
  ejercicio(
    'Nobody ___ the answer. It is too difficult.',
    'knows',
    ['know', "doesn't know", "don't know"],
    "Nobody ya es negativo y se usa con el verbo en singular y afirmativo: «Nobody knows». No se dobla la negación con doesn't ni don't."
  ),

  // ─── Unidad 3 · Presente simple vs. continuo; if y when (6) ───
  ejercicio(
    'Listen! Someone ___ the piano.',
    'is playing',
    ['plays', 'play', 'is play'],
    'Listen! indica que algo pasa ahora mismo: presente continuo, is playing. plays sería una costumbre y is play no lleva -ing.'
  ),
  ejercicio(
    'My father ___ a new car, so he is very happy.',
    'has',
    ['is having', 'have', 'having'],
    'have como «tener» es un verbo de estado y va en presente simple, con has para he. «is having» no se usa con este significado.'
  ),
  ejercicio(
    'She ___ to music every night before bed.',
    'listens',
    ['is listening', 'listen', 'listening'],
    'every night marca un hábito, así que va en presente simple con -s: «She listens». is listening sería algo de este momento.'
  ),
  ejercicio(
    'A: Are you busy? B: Yes, I ___ my homework.',
    'am doing',
    ['do', 'does', 'doing'],
    'La pregunta y la respuesta hablan de este momento: presente continuo, am doing. do es presente simple y doing solo no tiene auxiliar.'
  ),
  ejercicio(
    'If it ___ on Sundays, we stay at home.',
    'rains',
    ['will rain', 'is raining', 'rain'],
    'En una condición habitual se usa presente simple, con -s para it: «If it rains». Después de if no se usa will.'
  ),
  ejercicio(
    'We play football ___ the weather is good.',
    'when',
    ['then', 'which', 'so'],
    'when (cuando) une la actividad con el momento en que pasa: «We play football when the weather is good». then, which y so no tienen ese sentido.'
  ),
];
