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
  16: {
    tips: [
      {
        head: 'going to suena «gonna»',
        body: "Al hablar rápido going to se pronuncia /ˈɡʌnə/ (gonna). Se escucha mucho en inglés informal; al escribir se usa going to. En I'm going to el to es muy débil /tə/.",
        examples: ["I'm going to /aɪm ˈɡoʊɪŋ tə/", "I'm gonna go /aɪm ˈɡʌnə ɡoʊ/"],
      },
      {
        head: 'Las contracciones del futuro',
        body: "En una conversación se usan las formas cortas: I'm, he's, she's, we're, they're. La negativa se contrae con n't: isn't, aren't.",
        examples: ["she's going /ʃiːz ˈɡoʊɪŋ/", "we're going /wɪr ˈɡoʊɪŋ/", "isn't /ˈɪzənt/"],
      },
      {
        head: 'tomorrow y tonight',
        body: 'En tomorrow el acento va en la segunda sílaba /təˈmɑːroʊ/. En tonight también /təˈnaɪt/. La primera sílaba es muy débil.',
        examples: ['tomorrow /təˈmɑːroʊ/', 'tonight /təˈnaɪt/'],
      },
    ],
    vocab: palabras('tomorrow', 'weekend', 'plan', 'trip', 'gift', 'present'),
  },
  17: {
    tips: [
      {
        head: 'La terminación -ed: tres sonidos',
        body: 'La -ed del pasado suena /t/ después de sonidos sordos, /d/ después de sonidos sonoros y /ɪd/ solo después de t o d. Casi nunca es una sílaba extra.',
        examples: ['worked /wɜːrkt/', 'played /pleɪd/', 'wanted /ˈwɑːntɪd/'],
      },
      {
        head: 'was y were son débiles',
        body: 'En una frase normal was suena /wəz/ y were suena /wər/. En una respuesta corta se dicen completos: «Yes, I was» /wʌz/.',
        examples: ['I was at home /aɪ wəz/', 'Yes, I was. /jes aɪ ˈwʌz/'],
      },
      {
        head: 'the: dos sonidos',
        body: 'The suena /ðə/ antes de una consonante (the book) y /ði/ antes de una vocal (the apple). Con the + énfasis se dice /ðiː/.',
        examples: ['the book /ðə bʊk/', 'the apple /ði ˈæpəl/'],
      },
    ],
    vocab: palabras('yesterday', 'birthday', 'party', 'story', 'life', 'year'),
  },
  18: {
    tips: [
      {
        head: "there's y there are",
        body: "there's suena /ðerz/ y there are suena /ðer ər/. Se parece a theirs /ðerz/ (de ellos), así que el contexto ayuda a distinguirlas.",
        examples: ["there's /ðerz/", 'there are /ðer ər/', 'Is there? /ɪz ðer/'],
      },
      {
        head: 'Could you… suena «cudyu»',
        body: 'En Could you la d y la y se unen y suenan /dʒ/: /ˈkʊdʒu/. Pasa igual con Would you /ˈwʊdʒu/ y Can I /kən aɪ/.',
        examples: ['Could you /ˈkʊdʒu/', 'Would you /ˈwʊdʒu/', 'Can I /ˈkæn aɪ/'],
      },
      {
        head: 'one y some',
        body: 'one suena /wʌn/ (empieza como una w) y some suena /sʌm/. La o de las dos suena como una a corta.',
        examples: ['one /wʌn/', 'some /sʌm/', "there's one /ðerz wʌn/"],
      },
    ],
    vocab: palabras('bank', 'pharmacy', 'restaurant', 'street', 'near', 'far'),
  },
  19: {
    tips: [
      {
        head: 'should: la l no suena',
        body: 'En should y shouldn\'t la l es muda: should suena /ʃʊd/ y shouldn\'t suena /ˈʃʊdnt/. Pasa igual con could y would.',
        examples: ['should /ʃʊd/', "shouldn't /ˈʃʊdnt/", 'could /kʊd/'],
      },
      {
        head: 'to de propósito es débil',
        body: 'En I went to buy bread el to suena débil /tə/ y se une con el verbo. En It\'s easy to learn, igual.',
        examples: ['to buy /tə baɪ/', "easy to learn /ˈiːzi tə lɜːrn/"],
      },
      {
        head: "Let's y Why don't we",
        body: "Let's suena /lets/ y se une con el verbo siguiente. En Why don't we la t casi no se oye: /waɪ doʊn wi/.",
        examples: ["Let's go /lets ɡoʊ/", "Why don't we /waɪ doʊn wi/"],
      },
    ],
    vocab: palabras('doctor', 'headache', 'sleep', 'important', 'dangerous', 'healthy'),
  },
  20: {
    tips: [
      {
        head: 'Whose y who\'s suenan igual',
        body: "Whose y who's se pronuncian igual /huːz/. Solo el contexto y la escritura las distinguen: «Whose bag is this?» · «Who's that?».",
        examples: ['Whose /huːz/', "Who's /huːz/"],
      },
      {
        head: 'Los pronombres posesivos',
        body: 'Los pronombres posesivos terminan en un sonido /z/ (menos mine y his). Suenan como una palabra corta y fuerte.',
        examples: ['mine /maɪn/', 'yours /jɔːrz/', 'hers /hɜːrz/', 'ours /ˈaʊərz/'],
      },
      {
        head: 'one y ones',
        body: 'one empieza con el sonido /w/ aunque se escribe con o: /wʌn/. ones suena /wʌnz/ con una /z/ al final.',
        examples: ['one /wʌn/', 'ones /wʌnz/', 'the red one /ðə red wʌn/'],
      },
    ],
    vocab: palabras('bag', 'jacket', 'shoes', 'key', 'umbrella', 'watch'),
  },
  21: {
    tips: [
      {
        head: 'was y were con -ing',
        body: 'En el pasado continuo was suena /wəz/ y were suena /wər/ (débiles). El -ing suena /ɪŋ/ y el acento va en el verbo.',
        examples: ['I was cooking /aɪ wəz ˈkʊkɪŋ/', 'they were playing /ðeɪ wər ˈpleɪɪŋ/'],
      },
      {
        head: 'when y while',
        body: 'when suena /wen/ y while suena /waɪl/. Son parecidas, pero while es larga (un diptongo) y when es corta.',
        examples: ['when /wen/', 'while /waɪl/'],
      },
      {
        head: 'Los reflexivos',
        body: 'En los reflexivos el acento va en -self: myself /maɪˈself/, yourself /jɔːrˈself/. En himself, la h casi no se oye: /hɪmˈself/.',
        examples: ['myself /maɪˈself/', 'herself /hərˈself/', 'themselves /ðəmˈselvz/'],
      },
    ],
    vocab: palabras('myself', 'yourself', 'himself', 'herself', 'ourselves', 'themselves'),
  },
};
