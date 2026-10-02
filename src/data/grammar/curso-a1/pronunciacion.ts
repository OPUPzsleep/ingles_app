import type { PronunUnit } from '@/types/grammar';

import { palabras } from './ayuda';

/**
 * La pronunciación de cada unidad del curso A1: consejos propios de sus temas y palabras con su sonido. Donde las
 * anclas del libro (`PRONUN_DATA`) ya tenían lo mismo (el -ing del presente continuo, la -s del presente simple, la -ed
 * del pasado…) se reaprovechan.
 */
export const PRONUN_CURSO_A1: Record<number, PronunUnit> = {
  1: {
    tips: [
      {
        head: 'Contracciones con to be',
        body: 'En inglés hablado casi siempre se usan las formas cortas. Practica el sonido de cada una.',
        examples: ["I am → I'm /aɪm/", "He is → He's /hiːz/", "They are → They're /ðer/"],
      },
      {
        head: 'am, is, are suenan débiles',
        body: 'En una oración normal el verbo to be casi no se acentúa: «I am from Peru» suena /aɪ əm frəm pəˈruː/. En una respuesta corta sí se pronuncia completo y con fuerza: «Yes, I am».',
        examples: ['I am from Peru. /aɪ əm frəm pəˈruː/', 'Yes, I am. /jes aɪ ˈæm/'],
      },
      {
        head: "isn't y aren't",
        body: "En isn't la s suena como /z/ y la t es muy suave. aren't empieza con el sonido de la a de «carro».",
        examples: ["isn't /ˈɪzənt/", "aren't /ɑːrnt/"],
      },
    ],
    vocab: palabras('hungry', 'tired', 'happy', 'student', 'teacher', 'friend'),
  },
  2: {
    tips: [
      {
        head: 'this y these',
        body: 'this tiene la i corta /ɪ/ y termina en /s/; these tiene la i larga /iː/ y termina en /z/. La th se pronuncia con la punta de la lengua entre los dientes.',
        examples: ['this /ðɪs/ → This is my phone.', 'these /ðiːz/ → These are my keys.'],
      },
      {
        head: 'a, an y the',
        body: 'a /ə/ y an /ən/ son muy débiles. the se pronuncia /ðə/ antes de consonante y /ði/ antes de vocal.',
        examples: ['a book /ə bʊk/', 'an apple /ən ˈæpəl/', 'the book /ðə bʊk/', 'the apple /ði ˈæpəl/'],
      },
      {
        head: 'La -s del plural',
        body: 'Suena /s/ después de sonidos sordos (books), /z/ después de sonidos sonoros (dogs) y /ɪz/ después de s, x, ch, sh (boxes).',
        examples: ['books /bʊks/', 'dogs /dɔːɡz/', 'boxes /ˈbɑːksɪz/'],
      },
    ],
    vocab: palabras('apple', 'egg', 'orange', 'notebook', 'pencil', 'door'),
  },
  3: {
    tips: [
      {
        head: "El 's final",
        body: "El 's posesivo suena igual que la -s del plural: /s/ (Kate's), /z/ (Tom's) o /ɪz/ (James's). El apóstrofo no se pronuncia.",
        examples: ["Kate's /keɪts/", "Tom's /tɑːmz/", "James's /ˈdʒeɪmzɪz/"],
      },
      {
        head: 'her, their e its',
        body: "her se pronuncia con una h suave /hɜːr/. their suena igual que there y they're /ðer/. its suena igual que it's /ɪts/, por eso se confunden al escribir.",
        examples: ['her /hɜːr/', "their = there = they're /ðer/", "its = it's /ɪts/"],
      },
    ],
    vocab: palabras('family', 'mother', 'father', 'brother', 'sister', 'husband'),
  },
  4: {
    tips: [
      {
        head: 'La -s de he / she / it',
        body: 'Suena /s/ después de sonidos sordos (works), /z/ después de sonidos sonoros (lives) y /ɪz/ después de s, sh, ch, x (watches).',
        examples: ['works /wɜːrks/', 'lives /lɪvz/', 'watches /ˈwɑːtʃɪz/'],
      },
      {
        head: 'do y does en preguntas',
        body: 'En una pregunta do y does suenan débiles: «Do you like it?». En la respuesta corta sí suenan completos y con fuerza: «Yes, I do».',
        examples: ['Do you like it? /də jə ˈlaɪk ɪt/', 'Does she work? /dəz ʃi ˈwɜːrk/', 'Yes, I do. /jes aɪ ˈduː/'],
      },
      {
        head: "don't y doesn't",
        body: "En don't la o suena como en «go» y en doesn't la primera sílaba es /dʌz/, parecida a «das» con z.",
        examples: ["don't /doʊnt/", "doesn't /ˈdʌzənt/"],
      },
    ],
    vocab: palabras('always', 'usually', 'often', 'sometimes', 'never', 'breakfast'),
  },
  5: {
    tips: [
      {
        head: 'there is y there are',
        body: "there se pronuncia /ðer/, igual que their y they're. Al hablar se une con el verbo: there's /ðerz/ y there are /ðer ər/.",
        examples: ["there's /ðerz/", 'there are /ðer ər/', "there isn't /ðer ˈɪzənt/"],
      },
      {
        head: 'some, any y a lot of',
        body: 'some suena débil /səm/. En any la a suena como una e: /ˈeni/. En a lot of las palabras se unen al hablar.',
        examples: ['some /səm/', 'any /ˈeni/', 'a lot of /ə ˈlɑːt əv/'],
      },
      {
        head: 'La -er del comparativo',
        body: 'En taller y faster la terminación -er suena débil /ər/, y than suena /ðən/.',
        examples: ['taller /ˈtɔːlər/', 'faster /ˈfæstər/', 'than /ðən/'],
      },
    ],
    vocab: palabras('big', 'small', 'new', 'old', 'kitchen', 'bedroom'),
  },
  6: {
    tips: [
      {
        head: 'La hora',
        body: "o'clock se pronuncia /əˈklɑːk/. En half past la l no suena: /hæf pæst/. quarter suena /ˈkwɔːrtər/.",
        examples: ["o'clock /əˈklɑːk/", 'half past /hæf pæst/', 'quarter /ˈkwɔːrtər/'],
      },
      {
        head: "Let's",
        body: "Let's es una sola sílaba /lets/ y se une con el verbo que sigue.",
        examples: ["Let's go. /lets ɡoʊ/", "Let's not. /lets nɑːt/"],
      },
      {
        head: '-teen y -ty (15 y 50)',
        body: 'En los números terminados en -teen el acento va al final (fifteen) y en los terminados en -ty va al inicio (fifty). Es clave para entender la hora: 7:15 y 7:50 suenan parecido.',
        examples: ['fifteen /fɪfˈtiːn/', 'fifty /ˈfɪfti/', 'thirteen /θɜːrˈtiːn/', 'thirty /ˈθɜːrti/'],
      },
    ],
    vocab: palabras('clock', 'hour', 'minute', 'half', 'quarter', 'noon'),
  },
  7: {
    tips: [
      {
        head: 'La terminación -ing',
        body: 'La terminación -ing se pronuncia /ɪŋ/, NO /ɪng/. La g casi no se oye.',
        examples: ['working /ˈwɜːrkɪŋ/', 'eating /ˈiːtɪŋ/', 'going /ˈɡoʊɪŋ/'],
      },
      {
        head: 'Contracciones',
        body: 'En inglés hablado casi siempre se usan las formas cortas: I\'m, he\'s, she\'s, we\'re, they\'re.',
        examples: ["I am → I'm /aɪm/", "He is → He's /hiːz/", "They are → They're /ðer/"],
      },
      {
        head: 'Respuestas cortas con fuerza',
        body: 'En una respuesta corta el verbo to be suena completo y fuerte, y no se contrae: «Yes, I am».',
        examples: ['Yes, I am. /jes aɪ ˈæm/', "No, I'm not. /noʊ aɪm ˈnɑːt/"],
      },
    ],
    vocab: palabras('now', 'today', 'cook', 'rain', 'watch', 'window'),
  },
  8: {
    tips: [
      {
        head: 'Órdenes amables',
        body: 'En una orden la voz baja al final. Con please suena más amable y la voz sube un poco.',
        examples: ['Open the door. /ˈoʊpən ðə dɔːr/', 'Please sit down. /pliːz sɪt daʊn/'],
      },
      {
        head: 'want to, need to, have to',
        body: 'Al hablar la palabra to es muy débil /tə/ y se une con el verbo. En have to la v suena como f.',
        examples: ['want to /ˈwɑːn tə/', 'need to /ˈniːd tə/', 'have to /ˈhæf tə/', 'has to /ˈhæs tə/'],
      },
    ],
    vocab: palabras('careful', 'open', 'learn', 'like', 'money', 'time'),
  },
  9: {
    tips: [
      {
        head: "can y can't",
        body: "can suena débil /kən/ dentro de una frase; can't suena fuerte /kænt/. Así se distinguen al hablar.",
        examples: ['I can swim. /aɪ kən swɪm/', "I can't swim. /aɪ kænt swɪm/"],
      },
      {
        head: 'this, that, these, those',
        body: 'Las cuatro empiezan con el sonido th /ð/ (la lengua entre los dientes). this y that son cortas; these y those son largas.',
        examples: ['this /ðɪs/', 'that /ðæt/', 'these /ðiːz/', 'those /ðoʊz/'],
      },
      {
        head: 'Los precios',
        body: 'Los números -teen y -ty suenan parecido: fifteen (acento al final) y fifty (acento al inicio).',
        examples: ['fifteen dollars /fɪfˈtiːn/', 'fifty dollars /ˈfɪfti/'],
      },
    ],
    vocab: palabras('price', 'cost', 'cheap', 'expensive', 'money', 'shoes'),
  },
  10: {
    tips: [
      {
        head: 'La terminación -ed',
        body: 'Suena /t/ después de sonidos sordos (worked), /d/ después de sonidos sonoros (played) y /ɪd/ después de t o d (wanted).',
        examples: ['worked /wɜːrkt/', 'played /pleɪd/', 'wanted /ˈwɑːntɪd/'],
      },
      {
        head: "did y didn't",
        body: "did suena /dɪd/. En didn't la d y la n se unen casi sin vocal en medio: /ˈdɪdnt/.",
        examples: ['did /dɪd/', "didn't /ˈdɪdnt/"],
      },
      {
        head: 'was y were',
        body: 'Dentro de una frase was suena débil /wəz/ y were /wər/. En una respuesta corta suenan completos y con fuerza.',
        examples: ['I was tired. /aɪ wəz ˈtaɪərd/', 'Yes, I was. /jes aɪ ˈwʌz/'],
      },
    ],
    vocab: palabras('yesterday', 'ago', 'lunch', 'dinner', 'holiday', 'weekend'),
  },
  11: {
    tips: [
      {
        head: 'Would you like…?',
        body: 'Would you se une al hablar y suena /wʊdʒə/. I\'d like suena /aɪd ˈlaɪk/.',
        examples: ['Would you like…? /wʊdʒə ˈlaɪk/', "I'd like /aɪd ˈlaɪk/"],
      },
      {
        head: 'How many y how much',
        body: 'En many la a suena como una e /ˈmeni/. En much la u suena como una a corta /mʌtʃ/.',
        examples: ['How many? /haʊ ˈmeni/', 'How much? /haʊ ˈmʌtʃ/'],
      },
      {
        head: 'Palabras incontables',
        body: 'Cuidado con bread (la ea suena como e) y con water (la t suena casi como una d en inglés americano).',
        examples: ['water /ˈwɔːtər/', 'bread /bred/', 'rice /raɪs/', 'milk /mɪlk/'],
      },
    ],
    vocab: palabras('water', 'milk', 'juice', 'bread', 'rice', 'cheese'),
  },
  12: {
    tips: [
      {
        head: 'some y any',
        body: 'some suena débil /səm/. En any la a suena como una e: /ˈeni/.',
        examples: ['some /səm/', 'any /ˈeni/'],
      },
      {
        head: 'a lot of',
        body: 'Al hablar las tres palabras se unen en una sola: /ə ˈlɑːtəv/. También lots of.',
        examples: ['a lot of /ə ˈlɑːtəv/', 'lots of /ˈlɑːts əv/'],
      },
      {
        head: 'much y many',
        body: 'En much la u suena como una a corta; en many la a suena como una e.',
        examples: ['much /mʌtʃ/', 'many /ˈmeni/', 'a few /ə ˈfjuː/', 'a little /ə ˈlɪtl/'],
      },
    ],
    vocab: palabras('many', 'much', 'few', 'little', 'money', 'people'),
  },
};
