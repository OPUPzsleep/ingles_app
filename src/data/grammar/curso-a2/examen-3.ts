import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 3 (ids 19–21, Unidad 7–9 de A2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_A2_BLOQUE_3: QuizQuestion[] = [
  // ─── Unidad 7 · Propósito, It's + adjetivo + to, consejos y sugerencias (7) ───
  ejercicio(
    'She went to the library ___ a book. (borrow)',
    'to borrow',
    ['for borrow', 'borrowing', 'to borrowing'],
    'Para decir para qué fue se usa to + verbo base: «to borrow». for borrow y to borrowing no son formas correctas, y borrowing solo no expresa propósito.'
  ),
  ejercicio(
    "It's difficult ___ up early. (get)",
    'to get',
    ['get', 'for get', 'to getting'],
    "Después de It's + adjetivo va to + verbo base: «It's difficult to get up early». Las otras formas no completan la estructura."
  ),
  ejercicio(
    'You have a headache. You ___ take an aspirin.',
    'should',
    ['must to', 'are should', 'does should'],
    'Should va directamente antes del verbo base y sirve para aconsejar: «You should take an aspirin». Las otras opciones están mal formadas.'
  ),
  ejercicio(
    'Should I ___ the doctor?',
    'call',
    ['to call', 'calling', 'calls'],
    'Después de should el verbo va en base: «Should I call the doctor?». No lleva to, -ing ni -s.'
  ),
  ejercicio(
    "I'm saving money ___ buy a new phone.",
    'to',
    ['for', 'at', 'so'],
    'Para expresar el propósito se usa to + verbo: «to buy». for buy no es correcto y at y so no unen el propósito con el verbo.'
  ),
  ejercicio(
    '___ about going to the beach on Saturday?',
    'How',
    ['Why', 'Where', 'When'],
    'How about + -ing es una forma de sugerir: «How about going to the beach?». Why, Where y When no forman una sugerencia con about.'
  ),
  ejercicio(
    "Why don't we ___ to the beach on Saturday?",
    'go',
    ['to go', 'going', 'goes'],
    "Después de Why don't we el verbo va en base: «Why don't we go?». No lleva to, -ing ni -s."
  ),

  // ─── Unidad 8 · Whose, posesivos, adjetivos, one y ones, ubicación (7) ───
  ejercicio(
    "That's not my phone. Is it ___?",
    'yours',
    ['your', 'you', 'yourself'],
    'Sin sustantivo después se usa el pronombre posesivo: «Is it yours?». your necesita un sustantivo, you es sujeto u objeto y yourself es reflexivo.'
  ),
  ejercicio(
    "These keys aren't ours. They are ___.",
    'theirs',
    ['their', 'them', 'they'],
    'Sin sustantivo después se usa el pronombre posesivo: «They are theirs». their necesita un sustantivo, them es objeto y they es sujeto.'
  ),
  ejercicio(
    '___ car is parked outside? It is blocking the road.',
    'Whose',
    ['Who', "Who's", "What's"],
    'Para preguntar de quién es algo se usa Whose + sustantivo: «Whose car is parked outside?». Who, Who\'s y What\'s no preguntan por el dueño.'
  ),
  ejercicio(
    'She lives in a ___ house.',
    'beautiful big old',
    ['big old beautiful', 'old big beautiful', 'big beautiful old'],
    'El orden de los adjetivos es opinión (beautiful), tamaño (big) y edad (old): «a beautiful big old house». Las demás combinaciones rompen ese orden.'
  ),
  ejercicio(
    "I like both bags, but I'll take the black ___.",
    'one',
    ['ones', 'them', 'it'],
    'bag es singular, así que se reemplaza con one: «the black one». ones es plural, them reemplaza todo el grupo y it no lleva the black.'
  ),
  ejercicio(
    'Which pens do you want? — The ___ on the table.',
    'ones',
    ['one', 'them', 'it'],
    'pens es plural, así que se usa ones: «the ones on the table». one es singular, y them e it no llevan the antes.'
  ),
  ejercicio(
    'The girl ___ the left is my sister.',
    'on',
    ['at', 'in', 'by'],
    'La expresión fija es on the left (a la izquierda). at, in y by no forman esa expresión de lugar.'
  ),

  // ─── Unidad 9 · Pasado continuo y pronombres reflexivos (6) ───
  ejercicio(
    'What ___ you doing at ten last night?',
    'were',
    ['was', 'did', 'are'],
    'La pregunta del pasado continuo empieza con was / were, y con you va were. was no concuerda con you, did no se usa con -ing y are es presente.'
  ),
  ejercicio(
    'I was ___ a shower when the lights went out. (take)',
    'taking',
    ['take', 'took', 'taken'],
    'Después de was va el verbo en -ing: «I was taking a shower». take, took y taken no forman el pasado continuo.'
  ),
  ejercicio(
    'While she ___ home, it started to rain. (walk)',
    'was walking',
    ['are walking', 'walk', 'were walking'],
    'La acción larga que estaba en curso va en pasado continuo, y con she va was: «While she was walking». are walking es presente, walk no tiene el auxiliar y were no concuerda con she.'
  ),
  ejercicio(
    'He cut ___ with a knife.',
    'himself',
    ['him', 'his', 'he'],
    'El que corta y el que recibe la acción son la misma persona, así que se usa el reflexivo himself. him es pronombre objeto, his es posesivo y he es sujeto.'
  ),
  ejercicio(
    'Be careful or you will hurt ___. (one person)',
    'yourself',
    ['yourselves', 'you', 'your'],
    'Se habla con una sola persona y el sujeto y el objeto son iguales: yourself. yourselves es plural, you es sujeto u objeto y your es posesivo.'
  ),
  ejercicio(
    'The kids ___ in the garden when it started to rain. (play)',
    'were playing',
    ['was playing', 'are playing', 'play'],
    'Una acción en curso interrumpida va en pasado continuo, y con the kids (they) va were: «were playing». was no concuerda, are es presente y play no tiene auxiliar.'
  ),
];
