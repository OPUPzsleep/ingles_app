import type { PronunUnit } from '@/types/grammar';

import { palabras } from '../curso/ayuda';

/** La pronunciación de cada unidad del curso A2 (ids 13–24): consejos propios de sus temas y palabras con su sonido. */
export const PRONUN_CURSO_A2: Record<number, PronunUnit> = {
  13: {
    tips: [
      {
        head: 'La -s del presente simple',
        body: 'La -s de he works, she plays o it watches suena de tres maneras: /s/ después de sonidos sordos, /z/ después de sonidos sonoros y /ɪz/ después de s, sh, ch, x.',
        examples: ['works /wɜːrks/', 'plays /pleɪz/', 'watches /ˈwɑːtʃɪz/', 'studies /ˈstʌdiz/'],
      },
      {
        head: "don't y doesn't",
        body: "don't suena /doʊnt/ y doesn't suena /ˈdʌzənt/ (la oe es como una a corta). En la conversación la t final casi no se oye.",
        examples: ["don't /doʊnt/", "doesn't /ˈdʌzənt/", "I don't know /aɪ doʊn ˈnoʊ/"],
      },
      {
        head: 'too y either',
        body: 'too suena como la u larga de «tú» /tuː/. either se dice /ˈiːðər/ (la th es suave) o /ˈaɪðər/; las dos son correctas.',
        examples: ['too /tuː/', 'either /ˈiːðər/', 'neither /ˈniːðər/'],
      },
    ],
    vocab: palabras('work', 'study', 'teacher', 'student', 'family', 'coffee'),
  },
  14: {
    tips: [
      {
        head: 'Los pronombres objeto suenan débiles',
        body: 'En una frase normal him, her y them pierden la h o la th inicial y se pegan al verbo: «give him» suena /ɡɪv ɪm/. Con fuerza se dicen completos: /hɪm/, /hɜːr/, /ðem/.',
        examples: ['tell him /ˈtel ɪm/', 'call her /ˈkɔːl ər/', 'see them /ˈsiː əm/', 'with us /wɪð əs/'],
      },
      {
        head: 'something, nothing, everything',
        body: 'Las palabras con -thing llevan el acento en la primera sílaba y terminan en /ɪŋ/ (no una n y una g separadas). La o de nothing suena /ʌ/, como en «sun».',
        examples: ['something /ˈsʌmθɪŋ/', 'nothing /ˈnʌθɪŋ/', 'everything /ˈevriθɪŋ/'],
      },
      {
        head: 'La preposición al final',
        body: 'Al final de la pregunta la preposición suena débil, sin acento: «Who are you talking to?» suena /huː ɑːr ju ˈtɔːkɪŋ tə/.',
        examples: ['talking to /ˈtɔːkɪŋ tə/', 'looking at /ˈlʊkɪŋ æt/', 'waiting for /ˈweɪtɪŋ fər/'],
      },
    ],
    vocab: palabras('music', 'language', 'phone', 'nobody', 'everyone', 'something'),
  },
  15: {
    tips: [
      {
        head: 'know: la k no se pronuncia',
        body: 'En know y now solo cambia una vocal: know suena /noʊ/ (la k es muda) y now suena /naʊ/. Escucha la diferencia, porque confundirlas cambia el sentido.',
        examples: ['know /noʊ/', 'now /naʊ/', 'I know now /aɪ noʊ naʊ/'],
      },
      {
        head: 'Verbo + -ing al hablar',
        body: 'En el presente continuo el -ing suena /ɪŋ/ (no «in-g»). El verbo auxiliar se contrae: «I\'m studying» /aɪm ˈstʌdiɪŋ/.',
        examples: ["I'm working /aɪm ˈwɜːrkɪŋ/", "she's reading /ʃiːz ˈriːdɪŋ/"],
      },
      {
        head: 'if y when',
        body: 'if suena corto /ɪf/ y when suena /wen/ (la h casi no se oye). En una frase con coma hay una pequeña pausa después de la primera cláusula.',
        examples: ['if /ɪf/', 'when /wen/', 'When it rains, I stay.'],
      },
    ],
    vocab: palabras('usually', 'always', 'weather', 'rain', 'ice', 'temperature'),
  },
};
