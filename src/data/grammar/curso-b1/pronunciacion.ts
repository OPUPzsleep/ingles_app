import type { PronunUnit } from '@/types/grammar';

import { palabras } from '../curso/ayuda';

/** La pronunciación de cada unidad del curso B1 (ids 46–57): consejos propios de sus temas y palabras con su sonido. */
export const PRONUN_CURSO_B1: Record<number, PronunUnit> = {  46: {
    tips: [
      {
        head: 'La terminación -ly',
        body: 'Los adverbios en -ly terminan en /li/ y el acento se queda en la sílaba del adjetivo: quick → quickly /ˈkwɪkli/. No se pronuncia como «li» fuerte.',
        examples: ['quickly /ˈkwɪkli/', 'carefully /ˈkerfəli/', 'easily /ˈiːzəli/'],
      },
      {
        head: 'hard y hardly',
        body: 'hard /hɑːrd/ y hardly /ˈhɑːrdli/ son parecidas, pero hardly significa «casi no». Escucha bien la terminación.',
        examples: ['hard /hɑːrd/', 'hardly /ˈhɑːrdli/'],
      },
      {
        head: 'Los prefijos: el acento va en la raíz',
        body: 'En unhappy, impossible o illegal el prefijo no lleva el acento principal: unhappy /ʌnˈhæpi/, impossible /ɪmˈpɑːsəbəl/.',
        examples: ['unhappy /ʌnˈhæpi/', 'impossible /ɪmˈpɑːsəbəl/', 'illegal /ɪˈliːɡəl/'],
      },
    ],
    vocab: palabras('quite', 'really', 'almost', 'especially', 'exactly', 'actually'),
  },
  47: {
    tips: [
      {
        head: 'have y has son débiles',
        body: "En una frase normal have suena /həv/ y has suena /həz/. Con la contracción se oye 've: I've seen suena /aɪv siːn/. En una respuesta corta se dicen completos: «Yes, I have» /hæv/.",
        examples: ["I've seen /aɪv siːn/", "she's done /ʃiz dʌn/", 'Yes, I have. /jes aɪ ˈhæv/'],
      },
      {
        head: 'been y gone',
        body: 'been suena /bɪn/ en una frase rápida (en inglés británico /biːn/). gone suena /ɡɔːn/. No se pronuncian igual.',
        examples: ['been /bɪn/', 'gone /ɡɔːn/'],
      },
      {
        head: 'ever y never',
        body: 'ever suena /ˈevər/ y never /ˈnevər/. La v es un sonido de dientes y labio (no una b). El acento va en la primera sílaba.',
        examples: ['ever /ˈevər/', 'never /ˈnevər/', 'Have you ever…? /həv ju ˈevər/'],
      },
    ],
    vocab: palabras('travel', 'journey', 'tourist', 'passport', 'ticket', 'airport'),
  },
  48: {
    tips: [
      {
        head: 'the delante de una vocal',
        body: 'The suena /ðə/ antes de consonante (the best) y /ði/ antes de vocal (the easiest /ði ˈiːziɪst/).',
        examples: ['the best /ðə best/', 'the easiest /ði ˈiːziɪst/', 'the oldest /ði ˈoʊldɪst/'],
      },
      {
        head: 'La terminación -est',
        body: 'La terminación -est suena /ɪst/, muy corta: tallest /ˈtɔːlɪst/, biggest /ˈbɪɡɪst/. El acento está en la primera sílaba.',
        examples: ['tallest /ˈtɔːlɪst/', 'biggest /ˈbɪɡɪst/', 'happiest /ˈhæpiɪst/'],
      },
      {
        head: 'Las palabras How + adjetivo',
        body: 'En How tall? el acento va en el adjetivo y la voz baja al final: /haʊ ˈtɔːl/. How se une con el verbo siguiente.',
        examples: ['How tall? /haʊ ˈtɔːl/', 'How far? /haʊ ˈfɑːr/', 'How often? /haʊ ˈɔːfən/'],
      },
    ],
    vocab: palabras('mountain', 'river', 'island', 'ocean', 'desert', 'lake'),
  },
};
