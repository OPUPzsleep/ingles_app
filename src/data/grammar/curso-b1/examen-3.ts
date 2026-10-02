import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 3 (ids 52–54, Unidad 7–9 de B1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B1_BLOQUE_3: QuizQuestion[] = [
  // ─── Unidad 7 · Cláusulas relativas y phrasal verbs (7) ───
  ejercicio(
    'The girl ___ is sitting next to me is my cousin.',
    'who',
    ['whom', 'whose', 'which'],
    'Se habla de una persona y el pronombre es el sujeto de is sitting: who. whom es para objetos, whose indica posesión y which es para cosas.'
  ),
  ejercicio(
    'The phone ___ I bought last week is already broken.',
    'that',
    ['who', 'whose', 'what'],
    'Se habla de una cosa y es un objeto: that (o which, o se omite). who es para personas, whose indica posesión y what no es relativo.'
  ),
  ejercicio(
    'Choose the correct sentence.',
    'The man I talked to was very kind.',
    ['The man I talked to him was very kind.', 'The man who I talked was very kind to.', 'The man what I talked to was very kind.'],
    'En una relativa de objeto no se repite el objeto (him), la preposición va al final y para personas no se usa what.'
  ),
  ejercicio(
    "That's the woman ___ husband is a famous actor.",
    'whose',
    ['who', 'that', 'which'],
    'El esposo es «de» esa mujer, así que se usa whose para la posesión. who, that y which no indican posesión.'
  ),
  ejercicio(
    'The city ___ I was born is very small.',
    'where',
    ['who', 'which', 'whose'],
    'Se habla de un lugar, así que se usa where. who es para personas, which sin preposición no encaja y whose indica posesión.'
  ),
  ejercicio(
    'Please sit ___. The doctor will see you soon.',
    'down',
    ['away', 'off', 'out'],
    'El phrasal verb para sentarse es sit down. sit away, sit off y sit out no tienen ese significado.'
  ),
  ejercicio(
    'My brother grew ___ in a small village.',
    'up',
    ['out', 'down', 'on'],
    'El phrasal verb para criarse o crecer es grow up. grew out, grew down y grew on no tienen ese significado.'
  ),

  // ─── Unidad 8 · Wish y condicional imaginario (7) ───
  ejercicio(
    'I wish I ___ more free time.',
    'had',
    ['have', 'would have', 'will have'],
    'Para un deseo sobre el presente se usa wish + pasado simple: «I wish I had». have, would have y will have no forman esta estructura.'
  ),
  ejercicio(
    'If I ___ you, I would tell the truth.',
    'were',
    ['am', 'will be', 'would be'],
    'En «If I were you» se usa were con todas las personas. am, will be y would be no se usan después de if.'
  ),
  ejercicio(
    "If it didn't rain, we ___ to the beach.",
    'would go',
    ['will go', 'go', 'went'],
    'Es una situación imaginaria: la cláusula principal lleva would + verbo base. will go es del primer condicional y go y went no son correctas.'
  ),
  ejercicio(
    'I wish he ___ stop talking. It is annoying.',
    'would',
    ['will', 'can', 'does'],
    'Una queja sobre lo que hace otra persona se expresa con wish + would. will, can y does no se usan después de wish con ese sentido.'
  ),
  ejercicio(
    'Where ___ you live if you could choose?',
    'would',
    ['will', 'do', 'did'],
    'La pregunta de una situación imaginaria lleva would: «Where would you live…?». will, do y did no forman el segundo condicional.'
  ),
  ejercicio(
    'If I had a car, I ___ it to work every day.',
    'would drive',
    ['drive', 'will drive', 'drove'],
    'En el segundo condicional la cláusula principal lleva would + verbo base: «would drive». drive, will drive y drove no son correctas.'
  ),
  ejercicio(
    'She wishes she ___ in Italy now.',
    'were',
    ['is', 'will be', 'would be'],
    'Un deseo sobre el presente lleva pasado simple, y con to be se usa were: «she wishes she were». is, will be y would be no se usan después de wish.'
  ),

  // ─── Unidad 9 · Preguntas indirectas, phrasal verbs separables, how to (6) ───
  ejercicio(
    'Do you know what time the bank ___?',
    'closes',
    ['does the bank close', 'closes it', 'does close'],
    'Dentro de otra frase se usa el orden de una afirmación y sin does: «what time the bank closes». Las otras opciones invierten el orden o usan does.'
  ),
  ejercicio(
    'I wonder why she ___ so late yesterday.',
    'arrived',
    ['did she arrive', 'she did arrive', 'does she arrive'],
    'Dentro de otra frase no se usa did, y el verbo va en pasado: «why she arrived». Las otras opciones invierten el orden o usan auxiliares.'
  ),
  ejercicio(
    'Can you tell me ___ the library is open on Sundays?',
    'whether',
    ['that', 'what', 'where'],
    'Una pregunta de sí / no dentro de otra frase se une con whether o if. that, what y where no forman esa pregunta.'
  ),
  ejercicio(
    "It's cold. Put your coat ___.",
    'on',
    ['up', 'out', 'in'],
    'Para ponerse una prenda se usa put on. put up, put out y put in no tienen ese significado.'
  ),
  ejercicio(
    'The music is too loud. Please turn it ___.',
    'down',
    ['up', 'on', 'over'],
    'Si la música está muy fuerte se baja el volumen: turn it down. turn up lo sube, turn on la enciende y turn over no tiene ese sentido.'
  ),
  ejercicio(
    "I don't know ___ to say. I am so surprised.",
    'what',
    ['that', 'where', 'whom'],
    'what to + verbo expresa «qué decir»: «I don\'t know what to say». that, where y whom no forman esta estructura con say.'
  ),
];
