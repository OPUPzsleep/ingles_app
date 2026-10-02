import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 2 (ids 149–151, Unidad 4–6 de C1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_C1_BLOQUE_2: QuizQuestion[] = [
  // ─── Unidad 4 · Sustantivos y artículos; adverbios de actitud; In fact (7) ───
  ejercicio(
    'We bought some new ___ for the office.',
    'equipment',
    ['equipments', 'an equipment', 'many equipment'],
    'equipment es incontable: no tiene plural ni lleva a / an ni many. «some new equipment» es la forma correcta.'
  ),
  ejercicio(
    "There isn't enough ___ in the car for five people.",
    'room',
    ['rooms', 'a room', 'the rooms'],
    'room con el sentido de «espacio» es incontable: no lleva plural ni a. rooms y a room significarían habitaciones.'
  ),
  ejercicio(
    '___ tigers are in danger of extinction. (in general)',
    'No article',
    ['The', 'A', 'An'],
    'Para generalizar con un plural no se usa artículo. The tigers especificaría un grupo concreto y a / an no se usan con plurales.'
  ),
  ejercicio(
    '___, nobody complained, which was strange.',
    'Surprisingly',
    ['Surprising', 'Surprise', 'Surprised'],
    'Surprisingly es el adverbio que muestra la actitud de sorpresa del hablante. Surprising es adjetivo, Surprise es sustantivo y Surprised es participio.'
  ),
  ejercicio(
    '___, I think the whole idea is a mistake.',
    'Frankly',
    ['Frank', 'Frankness', 'Frankful'],
    'Frankly es el adverbio que introduce una opinión sincera. Frank es adjetivo, Frankness es sustantivo y Frankful no existe.'
  ),
  ejercicio(
    "It wasn't expensive. ___, it was quite cheap.",
    'In fact',
    ['In effect of', 'At fact', 'On fact'],
    'In fact refuerza lo anterior añadiendo algo más fuerte. Las otras opciones no son expresiones del inglés.'
  ),
  ejercicio(
    'The young ___ more likely to use social media.',
    'are',
    ['is', 'be', 'does'],
    'The + adjetivo se refiere a un grupo y lleva verbo plural: are. is, be y does no concuerdan.'
  ),

  // ─── Unidad 5 · Condicionales mixtos; wish y hope; What if (7) ───
  ejercicio(
    "If she hadn't moved abroad, she ___ here now.",
    'would still be',
    ['would still have been', 'will still be', 'still is'],
    'Condición en el pasado con resultado en el presente (now): would be. would have been habla del pasado, will be es futuro y still is no es condicional.'
  ),
  ejercicio(
    "If he were more careful, he ___ that mistake.",
    "wouldn't have made",
    ["wouldn't make", "hadn't made", "won't have made"],
    'Una característica actual con un resultado en el pasado: wouldn\'t have + participio. wouldn\'t make habla del presente y las otras no son condicionales.'
  ),
  ejercicio(
    'I wish I ___ listened to my parents.',
    'had',
    ['have', 'would have', 'having'],
    'Un arrepentimiento sobre el pasado lleva wish + pasado perfecto: had listened. have, would have y having no forman esa estructura.'
  ),
  ejercicio(
    "I wish you ___ stop making that noise.",
    'would',
    ['will', 'can', 'do'],
    'Una queja sobre lo que hace otra persona se expresa con wish + would. will, can y do no se usan así después de wish.'
  ),
  ejercicio(
    "I hope it ___ rain tomorrow.",
    "doesn't",
    ["won't", "didn't", "wouldn't"],
    'Después de hope se usa el presente para hablar del futuro: «I hope it doesn\'t rain». won\'t, didn\'t y wouldn\'t no se usan en esta estructura.'
  ),
  ejercicio(
    '___ we missed the flight? What would we do?',
    'What if',
    ['What for', 'What of', 'What so'],
    'What if introduce una hipótesis. What for, What of y What so no tienen ese uso.'
  ),
  ejercicio(
    "A: Is it too late to apply? B: ___ not, but check the website.",
    'I suppose',
    ['I supposing', 'I supposed', "I'm suppose"],
    'I suppose not responde con duda: «I suppose not». Las otras formas están mal construidas.'
  ),

  // ─── Unidad 6 · Futuro y modales de expectativa; would; respuestas cortas (6) ───
  ejercicio(
    'She ___ be home by now. She left an hour ago.',
    'should',
    ['would to', 'shall to', 'must to'],
    'Una expectativa razonable se expresa con should + verbo base. would to, shall to y must to no forman esa estructura.'
  ),
  ejercicio(
    'The lights are on, so they ___ be at home.',
    'must',
    ['would to', 'shall', 'ought'],
    'Una deducción casi segura se expresa con must + verbo base. would to, shall y ought (sin to) no forman esa deducción.'
  ),
  ejercicio(
    '___ you mind opening the window?',
    'Would',
    ['Will', 'Do', 'Can'],
    'La petición cortés es Would you mind + -ing? Will, Do y Can no forman esa estructura con mind.'
  ),
  ejercicio(
    "I ___ imagine they'll agree.",
    "'d",
    ["'ll to", 'did', 'do to'],
    "Para suavizar una opinión se usa 'd (would): «I'd imagine». 'll to, did y do to no forman esta estructura."
  ),
  ejercicio(
    'A: Will it be sunny tomorrow? B: I hope ___.',
    'so',
    ['yes', 'it', 'that'],
    'La respuesta corta es «I hope so». yes, it y that no forman esa respuesta.'
  ),
  ejercicio(
    'A: Are they still open? B: I\'m afraid ___.',
    'not',
    ['no', 'never', 'nothing'],
    'La respuesta corta negativa es «I\'m afraid not». no, never y nothing no forman esa respuesta.'
  ),
];
