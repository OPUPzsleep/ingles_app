import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from './ayuda';

/** Examen del bloque 4 (unidades 10–12): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_BLOQUE_4: QuizQuestion[] = [
  // ─── Unidad 10 · Pasado simple y pasado de to be (7) ───
  ejercicio(
    'He ___ for the exam last night. (study)',
    'studied',
    ['studyed', 'studed', 'studys'],
    'study termina en consonante + y: la y cambia a -ied en el pasado → studied.'
  ),
  ejercicio(
    'We ___ a big dinner. (eat)',
    'ate',
    ['eated', 'eaten', 'eats'],
    'eat es irregular: eat → ate. «Eated» no existe y eaten se usa con have, no solo.'
  ),
  ejercicio(
    'She ___ come to the party. (No vino a la fiesta.)',
    "didn't",
    ["doesn't", "wasn't", "don't"],
    "La negativa del pasado simple es didn't + verbo en base: «She didn't come». doesn't y don't son del presente."
  ),
  ejercicio(
    'Did she ___ home early?',
    'go',
    ['went', 'goes', 'going'],
    'Después de Did el verbo va en forma base: «Did she go home early?». Con did ya se marca el pasado, no se usa went.'
  ),
  ejercicio(
    'Where ___ you yesterday?',
    'were',
    ['did', 'was', 'are'],
    'El pasado de to be con you es were: «Where were you yesterday?». No se usa did con to be.'
  ),
  ejercicio(
    'Was he at school? — No, ___.',
    "he wasn't",
    ["he weren't", "he didn't", 'he not'],
    "La respuesta corta repite el verbo de la pregunta (was): «No, he wasn't». weren't es para you / we / they y didn't no se usa con to be."
  ),
  ejercicio(
    'What time ___ the film start?',
    'did',
    ['does', 'was', 'do'],
    'La pregunta de información en pasado lleva did + verbo en base: «What time did the film start?». does y do son del presente.'
  ),

  // ─── Unidad 11 · Contables e incontables, How much / How many y Would you like (7) ───
  ejercicio(
    '¿Cuál de estas palabras es incontable?',
    'rice',
    ['egg', 'apple', 'banana'],
    'rice (arroz) no se cuenta en unidades: no tiene plural ni lleva a / an. egg, apple y banana se cuentan (an egg, two apples).'
  ),
  ejercicio(
    'There is ___ on the table. (Hay pan sobre la mesa.)',
    'some bread',
    ['a bread', 'two breads', 'many bread'],
    'bread es incontable: no lleva a ni plural, y con un incontable en afirmativa se usa some: «some bread».'
  ),
  ejercicio(
    'How ___ brothers do you have?',
    'many',
    ['much', 'any', 'some'],
    'brothers es contable en plural, así que va How many: «How many brothers do you have?».'
  ),
  ejercicio(
    'How ___ money do you have?',
    'much',
    ['many', 'any', 'a'],
    'money es incontable, así que va How much: «How much money do you have?».'
  ),
  ejercicio(
    '___ you like to sit down?',
    'Would',
    ['Are', 'Is', 'Can'],
    'Para ofrecer algo con amabilidad se usa Would you like to…?: «Would you like to sit down?».'
  ),
  ejercicio(
    "I'd like ___ pay, please. (Quisiera pagar.)",
    'to',
    ['a', 'some', 'the'],
    "Antes de un verbo se usa to: «I'd like to pay». a, some y the van antes de sustantivos."
  ),
  ejercicio(
    'Would you like some tea? — ___.',
    'Yes, please',
    ['Yes, I like', "Yes, I'm", 'Yes, I does'],
    'Para aceptar una oferta se dice «Yes, please» (o «Yes, I would»). Las otras opciones no responden a la pregunta.'
  ),

  // ─── Unidad 12 · Some y any, a lot of, much y many (6) ───
  ejercicio(
    'There is ___ bread on the table. (Hay un poco de pan.)',
    'some',
    ['any', 'many', 'a few'],
    'En una afirmativa con un incontable se usa some: «There is some bread». many y a few van con plurales.'
  ),
  ejercicio(
    'Are there ___ apples?',
    'any',
    ['much', 'a', 'a little'],
    'En las preguntas con un plural se usa any: «Are there any apples?». much y a little van con incontables, y a no va con plurales.'
  ),
  ejercicio(
    "She doesn't drink ___ coffee.",
    'much',
    ['many', 'a few', 'a'],
    "coffee es incontable y la oración es negativa: «She doesn't drink much coffee». many y a few son para plurales."
  ),
  ejercicio(
    'He has ___ books. (Él tiene muchos libros.)',
    'a lot of',
    ['much', 'a lot', 'lot of'],
    'En afirmativas se usa a lot of + sustantivo: «He has a lot of books». much no se usa así en afirmativas.'
  ),
  ejercicio(
    'I have ___ friends here. (unos pocos amigos)',
    'a few',
    ['a little', 'much', 'a lot'],
    'a few + sustantivo en plural significa unos pocos: «a few friends». a little es para incontables, y «a lot» necesita of.'
  ),
  ejercicio(
    '¿Cuál oración es correcta?',
    "I don't have any brothers.",
    ["I don't have some brothers.", 'I have any brothers.', "I don't has any brothers."],
    "En negativas se usa any, y el auxiliar don't va con el verbo en base: «I don't have any brothers»."
  ),
];
