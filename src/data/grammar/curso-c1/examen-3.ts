import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 3 (ids 152–154, Unidad 7–9 de C1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_C1_BLOQUE_3: QuizQuestion[] = [
  // ─── Unidad 7 · Phrasal verbs, infinitivos y -ing, aclarar y enfatizar (7) ───
  ejercicio(
    'The negotiations fell ___ at the last minute.',
    'through',
    ['in', 'about', 'across'],
    'Fall through significa fracasar. fall in, fall about y fall across no tienen ese sentido.'
  ),
  ejercicio(
    'She really pulled ___ an amazing victory.',
    'off',
    ['out', 'over', 'away'],
    'Pull off significa lograr algo difícil. pull out, pull over y pull away no tienen ese sentido.'
  ),
  ejercicio(
    "I'd like you to sort this problem ___ before Friday.",
    'out',
    ['up', 'down', 'off'],
    'Sort out significa resolver. sort up, sort down y sort off no son phrasal verbs con ese significado.'
  ),
  ejercicio(
    "He's very keen ___ the new project.",
    'on',
    ['to', 'at', 'of'],
    'La combinación fija es keen on. to, at y of no se combinan con keen en este sentido.'
  ),
  ejercicio(
    'The residents were quick ___ to the crisis.',
    'to react',
    ['reacting', 'for react', 'of reacting'],
    'Quick va seguido de to + verbo base: quick to react. reacting, for react y of reacting no forman esa estructura.'
  ),
  ejercicio(
    'I have no reason ___ him.',
    'to doubt',
    ['doubting', 'doubt', 'for to doubt'],
    'Reason va seguido de to + verbo base: no reason to doubt. doubting, doubt y for to doubt no forman esa estructura.'
  ),
  ejercicio(
    "There's nothing to worry ___.",
    'about',
    ['for', 'of', 'at'],
    'Con nothing to worry la preposición del verbo va al final: nothing to worry about. for, of y at no se combinan con worry.'
  ),

  // ─── Unidad 8 · Pasiva, causa y efecto, retóricas y ejemplos (7) ───
  ejercicio(
    'Millions of jobs ___ lost by automation in the next decade.',
    'will be',
    ['will have', 'will to be', 'would'],
    'La pasiva en futuro es will be + participio: will be lost. will have, will to be y would no forman la pasiva en futuro.'
  ),
  ejercicio(
    'The new vaccine ___ tested at the moment.',
    'is being',
    ['has', 'is', 'was been'],
    'Una acción pasiva en progreso ahora se expresa con is being + participio. has, is y was been no marcan ese proceso.'
  ),
  ejercicio(
    'Heavy rain ___ flooding in several towns.',
    'resulted in',
    ['resulted from', 'was due to', 'stemmed from'],
    'La lluvia es la causa y las inundaciones son el efecto: resulted in. resulted from, was due to y stemmed from introducirían la causa.'
  ),
  ejercicio(
    'The shortage ___ a poor harvest.',
    'was due to',
    ['led to', 'resulted in', 'gave rise to'],
    'La causa de la escasez es la mala cosecha: was due to. led to, resulted in y gave rise to introducirían una consecuencia.'
  ),
  ejercicio(
    'He is said ___ the country last year.',
    'to have left',
    ['that left', 'has left', 'leaving'],
    'La pasiva impersonal con un hecho pasado es is said to have + participio. Las otras formas no forman esa estructura.'
  ),
  ejercicio(
    '___ Spain. The unemployment rate fell by ten percent in two years.',
    'Take',
    ['Make', 'Bring', 'Give'],
    'Take… introduce un ejemplo concreto. Make, Bring y Give no tienen ese uso.'
  ),
  ejercicio(
    'Who ___ want to live in a polluted city?',
    "wouldn't",
    ["doesn't", "isn't", "hasn't"],
    'Una pregunta retórica sobre algo hipotético lleva would: Who wouldn\'t want…? doesn\'t, isn\'t y hasn\'t no forman esta pregunta.'
  ),

  // ─── Unidad 9 · Determinantes, -ing, As far as (6) ───
  ejercicio(
    '___ of the two candidates was suitable.',
    'Neither',
    ['None', 'No', 'Both'],
    'Se habla de dos candidatos y ninguno es adecuado: Neither of. None se usa con tres o más, No no va con of y Both significaría que los dos lo eran.'
  ),
  ejercicio(
    'I spent the ___ weekend studying.',
    'whole',
    ['all', 'every', 'each'],
    'Whole se usa con un sustantivo singular contable: the whole weekend. all necesita ir antes de the, y every y each no se combinan con the.'
  ),
  ejercicio(
    '___ of the players scored at least one goal. (individually)',
    'Each',
    ['Every', 'Whole', 'No'],
    'Each of + plural destaca a cada individuo. Every no se usa con of directamente, Whole no se usa con plurales y No no va con of.'
  ),
  ejercicio(
    'People ___ near the airport complain about the noise.',
    'living',
    ['lived', 'live', 'to live'],
    'La cláusula con -ing reduce who live: people living. lived, live y to live no forman esa cláusula.'
  ),
  ejercicio(
    '___ what to say, she remained silent.',
    'Not knowing',
    ["Don't know", 'Knowing not', 'No knowing'],
    'La negación de una cláusula con -ing se forma con not + -ing: Not knowing. Las otras formas no son correctas.'
  ),
  ejercicio(
    'As ___ as I can tell, everything is fine.',
    'far',
    ['long', 'much', 'well'],
    'La expresión es as far as I can tell. as long as, as much as y as well as tienen otros significados.'
  ),
];
