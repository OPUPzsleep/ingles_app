import type { QuizQuestion } from '@/types/grammar';

import { p } from './ayuda';

// Preguntas extra por tema para el nivel A1 (se suman a las de las unidades del tema, hasta llegar a 12 o más).
export const PREGUNTAS_TEMA_A1: Record<string, QuizQuestion[]> = {
  'Past Perfect': [
    p('I ___ a new phone. It is very fast.', 'have got', ['has got', 'am having', 'haves got'], "Con I → 'have got' (= have): 'I have got a new phone'."),
    p('He ___ a car, but he has a bike.', "hasn't got", ["haven't got", "doesn't has", "isn't got"], "Negativa con he/she/it → 'hasn't got'."),
    p('___ she got a brother?', 'Has', ['Have', 'Does', 'Is'], "Pregunta con 'got' y she → 'Has she got…?'."),
    p('Do you ___ a pen I can borrow?', 'have', ['have got', 'has', 'having'], "Con 'do' el verbo va en forma base: 'Do you have…?' (no 'Do you have got')."),
    p('We ___ a big garden when I was a child.', 'had', ['have', 'have got', 'has'], "Posesión en pasado → 'had'."),
    p("She ___ a headache. She's going to take an aspirin.", 'has got', ['have got', 'is having', 'haves'], "Con she → 'has got': 'She has got a headache'."),
    p('They ___ any children.', "don't have", ["doesn't have", "don't has", "haven't have"], "Negativa con 'have' (sin got) → 'don't have'."),
    p('How many brothers ___ you got?', 'have', ['do', 'are', 'does'], "'How many … have you got?' es la pregunta con 'got'."),
    p("I'm sorry, I ___ any change.", "haven't got", ["hasn't got", "don't has", 'not have got'], "'I haven't got any change' = no tengo cambio."),
  ],
  'Articles & Nouns': [
    p('I ate ___ orange for breakfast.', 'an', ['a', 'many', 'much'], "'Orange' empieza con sonido de vocal → 'an'."),
    p('There are two ___ in the photo.', 'women', ['woman', 'womans', 'womens'], "Plural irregular de 'woman' → 'women'."),
    p('Can I have ___ water, please?', 'some', ['a', 'an', 'many'], "'Water' es incontable: no lleva a/an; en peticiones se usa 'some'."),
  ],
  Pronouns: [
    p('There are ___ apples in the bag.', 'some', ['any', 'a', 'much'], "Afirmativa con plural → 'some'."),
    p('Are there ___ eggs in the fridge?', 'any', ['some', 'a', 'an'], "Pregunta → normalmente 'any'."),
    p("We haven't got ___ bread.", 'any', ['some', 'no', 'a'], "Negativa → 'any': 'We haven't got any bread'."),
    p('Can I have ___ milk in my coffee, please?', 'some', ['any', 'a', 'much'], "Petición → 'some' (se espera un sí)."),
    p("She didn't buy ___ vegetables.", 'any', ['some', 'a', 'an'], "Negativa → 'any'."),
    p('There is ___ cheese on the table.', 'some', ['any', 'a', 'an'], "Afirmativa con incontable → 'some'."),
    p('Do you have ___ brothers or sisters?', 'any', ['some', 'a', 'an'], "Pregunta → 'any'."),
    p("I've got ___ good news for you!", 'some', ['any', 'a', 'an'], "'News' es incontable; afirmativa → 'some good news'."),
    p("There aren't ___ buses after midnight.", 'any', ['some', 'a', 'an'], "Negativa → 'any'."),
    p('Is there ___ milk in the fridge?', 'any', ['some', 'a', 'an'], "Pregunta con incontable → 'any'."),
  ],
  'Adjectives & Adverbs': [
    p('My brother is ___ than me. (old)', 'older', ['more old', 'oldest', 'olders'], "Adjetivo corto → -er: 'older than'."),
    p('This book is ___ than that one. (interesting)', 'more interesting', ['interestinger', 'most interesting', 'more interestinger'], "Adjetivo largo → 'more interesting than'."),
    p('Today is ___ than yesterday. (hot)', 'hotter', ['more hot', 'hoter', 'hottest'], "Se duplica la consonante: hot → 'hotter'."),
    p('Her house is ___ than mine. (big)', 'bigger', ['more big', 'biger', 'biggest'], "big → 'bigger' (se duplica la g)."),
    p('A car is ___ than a bicycle. (fast)', 'faster', ['more fast', 'fastest', 'fastter'], "Adjetivo corto → -er: 'faster than'."),
    p('This test is ___ than the last one. (easy)', 'easier', ['more easy', 'easyer', 'easiest'], "Adjetivo terminado en -y → 'easier' (y → ier)."),
    p('Yesterday was ___ than today. (good)', 'better', ['gooder', 'more good', 'best'], "Comparativo irregular: good → 'better'."),
    p('My coffee is hotter ___ yours.', 'than', ['that', 'then', 'as'], "El comparativo se une con 'than'."),
    p('This bag is ___ than that one. (heavy)', 'heavier', ['more heavy', 'heavyer', 'heaviest'], "heavy → 'heavier' (y → ier)."),
  ],
  Prepositions: [
    p('My birthday is ___ June.', 'in', ['on', 'at', 'to'], "Con meses → 'in'."),
    p("We have lunch ___ 1 o'clock.", 'at', ['on', 'in', 'by'], "Con horas → 'at'."),
    p('See you ___ Saturday!', 'on', ['in', 'at', 'to'], "Con días → 'on'."),
    p('The keys are ___ the table.', 'on', ['in', 'at', 'to'], "Sobre una superficie → 'on'."),
    p('Turn left ___ the traffic lights.', 'at', ['in', 'on', 'to'], "Un punto concreto del camino → 'at'."),
  ],
};
