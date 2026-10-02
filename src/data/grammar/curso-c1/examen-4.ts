import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 4 (ids 155–157, Unidad 10–12 de C1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_C1_BLOQUE_4: QuizQuestion[] = [
  // ─── Unidad 10 · Estilo indirecto, sacar conclusiones y pedir detalles (7) ───
  ejercicio(
    'He said that he ___ the report the day before.',
    'had finished',
    ['has finished', 'finishes', 'will finish'],
    'En estilo indirecto con said en pasado, el pasado simple retrocede a pasado perfecto: had finished. has finished, finishes y will finish no encajan.'
  ),
  ejercicio(
    'She told me she ___ come to the party.',
    "couldn't",
    ["can't", "doesn't can", 'not could'],
    "Can pasa a could en estilo indirecto: she couldn't come. can't, doesn't can y not could no son correctas aquí."
  ),
  ejercicio(
    'He asked me ___ I had ever been to Japan.',
    'if',
    ['that', 'what', 'did'],
    'Las preguntas de sí o no se introducen con if o whether: asked me if. that, what y did no sirven para esto.'
  ),
  ejercicio(
    'The teacher told us ___ our phones in class.',
    "not to use",
    ["don't use", 'not using', 'to not using'],
    'Las instrucciones negativas en estilo indirecto usan not to + verbo base: told us not to use. Las otras opciones no forman esa estructura.'
  ),
  ejercicio(
    'He ___ that the plan was too risky.',
    'insisted',
    ['asked', 'told', 'advised'],
    'Insist se usa con that + oración. asked, told y advised no encajan con that + afirmación del hablante.'
  ),
  ejercicio(
    "A: I spent all weekend studying. B: So what you're saying ___ you're not coming tonight?",
    'is',
    ['are', 'does', 'was'],
    "En So what you're saying is… el verbo que sigue a saying es is. are, does y was no forman la expresión."
  ),
  ejercicio(
    'A: Prices have gone up a lot. B: ___ way have they changed?',
    'In what',
    ['Which', 'How much', 'Of what'],
    'In what way? pide más detalles sobre una afirmación. Which, How much y Of what no forman esa pregunta con way.'
  ),

  // ─── Unidad 11 · Oraciones de relativo con where, when, whose y verbos con dos objetos (7) ───
  ejercicio(
    'That is the school ___ my mother used to teach.',
    'where',
    ['when', 'whose', 'who'],
    'Where introduce un lugar: the school where. when, whose y who no se refieren a un lugar.'
  ),
  ejercicio(
    "I'll never forget the day ___ we won the cup.",
    'when',
    ['where', 'whose', 'which is'],
    'When introduce un momento: the day when. where, whose y which is no encajan con un tiempo.'
  ),
  ejercicio(
    'That is the reason ___ I left the company.',
    'why',
    ['where', 'whose', 'what'],
    'Why introduce una razón: the reason why. where, whose y what no se usan con reason.'
  ),
  ejercicio(
    'The architect ___ design won the award is very young.',
    'whose',
    ['who', 'which', 'whom'],
    'Whose indica posesión: the architect whose design. who, which y whom no expresan posesión.'
  ),
  ejercicio(
    'She sent a long letter ___ her brother.',
    'to',
    ['for', 'with', 'at'],
    'Send con complemento directo y persona usa to: sent a letter to her brother. for, with y at no encajan en este caso.'
  ),
  ejercicio(
    'The team has ___ finished the project, but it needs more work.',
    'kind of',
    ['kinds of', 'a kind', 'a lot'],
    'Kind of suaviza lo que se dice: kind of finished. kinds of, a kind y a lot no forman esa expresión.'
  ),
  ejercicio(
    "A: Do you want to come? B: Yeah, no. I'm ___ tired.",
    'a little',
    ['a few', 'a many', 'little of'],
    'A little suaviza un adjetivo: a little tired. a few, a many y little of no forman la expresión.'
  ),

  // ─── Unidad 12 · Adverbios de grado, as… as, comparativos y lenguaje vago (6) ───
  ejercicio(
    'The view from the top was ___ amazing.',
    'absolutely',
    ['very', 'quite', 'rather'],
    'Con adjetivos no graduables como amazing se usa absolutely. very, quite y rather no combinan con ese tipo de adjetivo.'
  ),
  ejercicio(
    'It was ___ cold that we stayed inside all day.',
    'so',
    ['such', 'too', 'very much'],
    'So + adjetivo + that expresa consecuencia: so cold that. such, too y very much no forman esa estructura con un adjetivo solo.'
  ),
  ejercicio(
    'He speaks English ___ fluently than his sister.',
    'more',
    ['most', 'much', 'as'],
    'Los adverbios largos forman el comparativo con more: more fluently than. most, much y as no completan la estructura con than.'
  ),
  ejercicio(
    'This is the ___ meal I have ever had.',
    'best',
    ['better', 'most good', 'goodest'],
    'El superlativo de good es best: the best meal. better, most good y goodest no son correctas.'
  ),
  ejercicio(
    'Our hotel is twice ___ big as theirs.',
    'as',
    ['so', 'than', 'more'],
    'Con multiplicadores se usa twice as… as. so, than y more no completan esa estructura.'
  ),
  ejercicio(
    "I like hiking, camping, ___ that kind of thing.",
    'and',
    ['or', 'but', 'with'],
    'And that kind of thing es una expresión vaga que cierra una lista. or, but y with no forman la expresión.'
  ),
];
