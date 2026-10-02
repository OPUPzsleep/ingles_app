import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 4 (ids 122–124, Unidad 10–12 de B2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B2_BLOQUE_4: QuizQuestion[] = [
  // ─── Unidad 10 · Tercer condicional y tag questions (7) ───
  ejercicio(
    'If it ___ so cold, we would have gone for a walk.',
    "hadn't been",
    ["wasn't", "wouldn't be", "hasn't been"],
    'En el tercer condicional la cláusula con if lleva pasado perfecto: hadn\'t been. wasn\'t es del segundo condicional y wouldn\'t be y hasn\'t been no se usan después de if.'
  ),
  ejercicio(
    'If I ___ your number, I would have called you.',
    'had had',
    ['had', 'have', 'would have'],
    'Con el verbo have, el pasado perfecto es had had: «If I had had your number». had es pasado simple, have es presente y would have no se usa después de if.'
  ),
  ejercicio(
    'She would have won if she ___ so nervous.',
    "hadn't been",
    ["wasn't", "weren't", "wouldn't be"],
    'En el tercer condicional la cláusula con if lleva pasado perfecto: hadn\'t been. Las otras formas no son pasado perfecto.'
  ),
  ejercicio(
    "I wish I ___ him the truth. Now he's angry.",
    'had told',
    ['told', 'would tell', 'tell'],
    'Un arrepentimiento sobre el pasado se expresa con wish + pasado perfecto: had told. told, would tell y tell no forman esa estructura.'
  ),
  ejercicio(
    'They ___ the plane if they had left on time.',
    "wouldn't have missed",
    ["wouldn't miss", "hadn't missed", "won't have missed"],
    'En el tercer condicional la cláusula principal lleva would have + participio: wouldn\'t have missed. wouldn\'t miss es del segundo condicional y las otras no son correctas.'
  ),
  ejercicio(
    'He is a good driver, ___?',
    "isn't he",
    ["doesn't he", 'is he', "isn't she"],
    'La frase es afirmativa con is, así que la tag es negativa con el mismo auxiliar y sujeto: isn\'t he. Las otras opciones cambian el auxiliar, la polaridad o el sujeto.'
  ),
  ejercicio(
    "Let's have lunch, ___?",
    'shall we',
    ['will we', "don't we", "let's we"],
    "La tag de Let's es shall we? will we, don't we y let's we no forman esa tag."
  ),

  // ─── Unidad 11 · Pasiva continua y perfecta; conectores (7) ───
  ejercicio(
    'The streets ___ cleaned right now.',
    'are being',
    ['are', 'have been', 'being'],
    'Una acción pasiva en progreso ahora se expresa con are being + participio. are solo no marca el proceso, have been indica que ya terminó y being no tiene auxiliar.'
  ),
  ejercicio(
    'The house ___ sold. We can move in next week.',
    'has been',
    ['is being', 'was being', 'have been'],
    'La venta ya terminó, así que se usa el presente perfecto pasivo: has been sold. is being y was being indican proceso y have been no concuerda con house.'
  ),
  ejercicio(
    '___ the traffic, we arrived on time.',
    'Despite',
    ['Although', 'Because', 'However'],
    'Despite se usa con un sustantivo (the traffic) para expresar contraste. Although necesita una cláusula, Because expresa causa y However empieza una frase nueva.'
  ),
  ejercicio(
    "She didn't pass the exam. ___, she got a job.",
    'However',
    ['Because', 'So that', 'Although'],
    'However une dos ideas contrastantes al empezar una frase nueva. Because, So that y Although no se usan así al inicio de una frase separada.'
  ),
  ejercicio(
    'He went to the bank ___ get some money.',
    'in order to',
    ['in order of', 'for to', 'so that to'],
    'Para expresar el propósito se usa in order to + verbo. in order of, for to y so that to no son correctos.'
  ),
  ejercicio(
    'The company lost a lot of money; ___, it had to close some shops.',
    'therefore',
    ['although', 'because', 'whereas'],
    'Therefore indica el resultado de lo anterior. although, because y whereas no expresan resultado.'
  ),
  ejercicio(
    "He couldn't come ___ he was ill.",
    'because',
    ['because of', 'although', 'despite'],
    'Because se usa con una cláusula completa (he was ill). because of necesita un sustantivo y although y despite expresan contraste.'
  ),

  // ─── Unidad 12 · What clauses, frases largas, futuro continuo y perfecto (6) ───
  ejercicio(
    '___ she did was surprising.',
    'What',
    ['That', 'Which', 'Who'],
    'What clause: What she did funciona como sujeto. That, Which y Who no forman esta estructura.'
  ),
  ejercicio(
    "All I want ___ a good night's sleep.",
    'is',
    ['are', 'do', 'be'],
    'Después de All I want el verbo es is: «All I want is…». are, do y be no completan la estructura.'
  ),
  ejercicio(
    'This time tomorrow, I ___ the exam.',
    'will be taking',
    ['will have taken', 'take', 'took'],
    'Una acción en curso en un momento futuro se expresa con will be + -ing. will have taken es perfecto, take es presente y took es pasado.'
  ),
  ejercicio(
    'By the time you read this email, I ___ the country.',
    'will have left',
    ['have left', 'left', 'will leaving'],
    'Con by the time se usa el futuro perfecto: will have left. have left y left no son futuro y will leaving no existe.'
  ),
  ejercicio(
    'The man ___ at the door is my uncle. (stand)',
    'standing',
    ['stood', 'stand', 'to stand'],
    'La cláusula con -ing reduce who is standing: the man standing. stood, stand y to stand no forman esa cláusula.'
  ),
  ejercicio(
    'The books ___ by Tom are on the table. (write)',
    'written',
    ['writing', 'wrote', 'write'],
    'La cláusula con participio pasivo reduce which were written: the books written by Tom. writing, wrote y write no forman esa cláusula.'
  ),
];
