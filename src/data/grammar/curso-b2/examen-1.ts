import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 1 (ids 113–115, Unidad 1–3 de B2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B2_BLOQUE_1: QuizQuestion[] = [
  // ─── Unidad 1 · Tiempos simples y continuos; verbo + -ing o to (7) ───
  ejercicio(
    "I'll never forget ___ the Eiffel Tower for the first time. (see)",
    'seeing',
    ['to see', 'see', 'saw'],
    'Se habla de un recuerdo de algo que ya pasó: forget + -ing. forget to see significaría olvidarse de hacerlo en el futuro.'
  ),
  ejercicio(
    "Don't forget ___ the lights when you leave. (turn off)",
    'to turn off',
    ['turning off', 'turn off', 'turned off'],
    'Se pide no olvidar una acción pendiente: forget + to + verbo. forget turning off hablaría de algo ya hecho.'
  ),
  ejercicio(
    'I tried ___ the box, but it was too heavy. (lift)',
    'to lift',
    ['lifting', 'lift', 'lifted'],
    'Se intentó hacer algo difícil: try + to + verbo. try lifting significaría probar como experimento.'
  ),
  ejercicio(
    'My doctor told me to stop ___. I smoked too much. (smoke)',
    'smoking',
    ['to smoke', 'smoke', 'smoked'],
    'Dejar de fumar se dice stop + -ing. stop to smoke significaría detenerse para fumar un cigarrillo.'
  ),
  ejercicio(
    'She ___ for three hours and she still is not finished.',
    'has been studying',
    ['studies', 'is studying', 'studied'],
    'Una actividad que empezó hace tres horas y sigue pide presente perfecto continuo: has been studying. Los otros tiempos no marcan la duración hasta ahora.'
  ),
  ejercicio(
    'I ___ what you mean. It is very clear now.',
    'see',
    ['am seeing', 'was seeing', 'have seen'],
    'see con el sentido de «entender» es un verbo de estado y va en presente simple: see. am seeing, was seeing y have seen no expresan ese significado.'
  ),
  ejercicio(
    "A: Where is Ana? B: She ___ lunch right now.",
    'is having',
    ['has', 'have', 'having'],
    'have como actividad (almorzar) se usa en continuo: is having. has y have significan «tener» y having solo no tiene auxiliar.'
  ),

  // ─── Unidad 2 · As… as y preguntas negativas (7) ───
  ejercicio(
    'My sister is as clever ___ me.',
    'as',
    ['than', 'like', 'that'],
    'La igualdad se expresa con as… as. than es del comparativo y like y that no forman esta estructura.'
  ),
  ejercicio(
    "The new road isn't as ___ as the old one. (wide)",
    'wide',
    ['wider', 'widest', 'more wide'],
    'Entre as… as va el adjetivo en su forma base: wide. wider es comparativo, widest es superlativo y more wide no se usa.'
  ),
  ejercicio(
    'This bag costs ___ as much as that one. This is 100 and the other is 50.',
    'twice',
    ['two', 'double times', 'second'],
    'Para una proporción se usa twice as much as (el doble). two, double times y second no forman esta estructura.'
  ),
  ejercicio(
    'She works ___ a teacher in a small school.',
    'as',
    ['like', 'than', 'that'],
    'Para indicar la función o profesión se usa as: «works as a teacher». like indica parecido y than y that no se usan así.'
  ),
  ejercicio(
    "A: Haven't you finished? B: ___, I'm still working.",
    "No, I haven't",
    ["Yes, I haven't", 'No, I have', 'Yes, I have not'],
    'Sigue trabajando, así que la respuesta es negativa: «No, I haven\'t». «Yes» con una negación y «No» con una afirmación no son correctas.'
  ),
  ejercicio(
    "A: Isn't he coming? B: ___, he's on his way.",
    'Yes, he is',
    ['No, he is', "Yes, he isn't", "No, he isn't"],
    'Viene en camino, así que la respuesta es afirmativa: «Yes, he is». Las otras mezclan «Yes» o «No» con la polaridad equivocada.'
  ),
  ejercicio(
    '___ you tell me earlier? I would have helped.',
    "Why didn't",
    ["Why don't", 'Why not', "Don't why"],
    'Para reprochar algo que no se hizo se usa Why didn\'t you…? Las otras formas no corresponden al pasado ni forman esa pregunta.'
  ),

  // ─── Unidad 3 · Pasiva, verbo + -ing y to, posición de not (6) ───
  ejercicio(
    'Rice ___ with most Asian dishes.',
    'is served',
    ['serves', 'is serving', 'serve'],
    'El arroz recibe la acción de servirse: is served. serves y serve son activas y is serving es continuo.'
  ),
  ejercicio(
    'She apologized for ___ late.',
    'being',
    ['to be', 'be', 'been'],
    'Después de una preposición (for) el verbo va en -ing: being. to be, be y been no se usan después de for.'
  ),
  ejercicio(
    "It's not worth ___ the car. It is too old. (repair)",
    'repairing',
    ['to repair', 'repair', 'repaired'],
    'Después de worth va -ing: «not worth repairing». to repair, repair y repaired no se usan después de worth.'
  ),
  ejercicio(
    "I can't help ___ when I see that video. (laugh)",
    'laughing',
    ['to laugh', 'laugh', 'laughed'],
    'Después de can\'t help va -ing: «can\'t help laughing». Las otras formas no se usan con can\'t help.'
  ),
  ejercicio(
    'He promised ___ late again.',
    'not to be',
    ['not being', "don't be", 'not be'],
    'Después de promise va to + verbo, y not va antes de to: «promised not to be». Las otras formas no son correctas.'
  ),
  ejercicio(
    "I don't like ___ about my private life. (be asked)",
    'being asked',
    ['to ask', 'asking', 'asked'],
    'Se necesita el gerundio pasivo: being + participio. to ask y asking son activos y asked solo no tiene auxiliar.'
  ),
];
