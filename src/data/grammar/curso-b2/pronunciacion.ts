import type { PronunUnit } from '@/types/grammar';

import { palabras } from '../curso/ayuda';

/** La pronunciación de cada unidad del curso B2 (ids 113–124): consejos propios de sus temas y palabras con su sonido. */
export const PRONUN_CURSO_B2: Record<number, PronunUnit> = {  113: {
    tips: [
      {
        head: 'remember to y remember -ing',
        body: 'En remember to el to es débil /tə/ y se une al verbo: /rɪˈmembər tə lɑːk/. En remember -ing el acento del -ing es suave: /rɪˈmembər ˈlɑːkɪŋ/.',
        examples: ['remember to lock /rɪˈmembər tə lɑːk/', 'remember locking /rɪˈmembər ˈlɑːkɪŋ/'],
      },
      {
        head: 'stop y try',
        body: 'stop suena /stɑːp/ y try suena /traɪ/. Con to o -ing el significado cambia, así que pronuncia bien la terminación: stopped smoking /stɑːpt ˈsmoʊkɪŋ/.',
        examples: ['stop /stɑːp/', 'try /traɪ/', 'stopped smoking /stɑːpt ˈsmoʊkɪŋ/'],
      },
      {
        head: 'El contraste simple y continuo',
        body: 'En el continuo el auxiliar se contrae y el acento va en el verbo: I\'m WORKing /aɪm ˈwɜːrkɪŋ/. En el simple el acento va en el verbo sin auxiliar: I WORK.',
        examples: ["I'm working /aɪm ˈwɜːrkɪŋ/", 'I work /aɪ wɜːrk/'],
      },
    ],
    vocab: palabras('moment', 'habit', 'culture', 'opinion', 'decision', 'choice'),
  },
  114: {
    tips: [
      {
        head: 'as… as: débiles',
        body: 'En as tall as los dos as son débiles /əz/ y el acento va en el adjetivo: /əz ˈtɔːl əz/. Se pronuncian casi como una sola sílaba.',
        examples: ['as tall as /əz ˈtɔːl əz/', 'as good as /əz ˈɡʊd əz/'],
      },
      {
        head: 'La entonación de la pregunta negativa',
        body: "En Don't you like it? la voz sube al final si de verdad preguntas, y baja si buscas que te den la razón. El auxiliar contraído suena muy corto: /doʊnt ju/.",
        examples: ["Don't you /doʊnt ju/", "Isn't she /ˈɪzənt ʃi/"],
      },
      {
        head: 'as y like',
        body: 'as suena /əz/ (débil) o /æz/ (fuerte) y like suena /laɪk/. La diferencia de sonido ayuda a recordar la de significado.',
        examples: ['as a nurse /əz ə nɜːrs/', 'like a nurse /laɪk ə nɜːrs/'],
      },
    ],
    vocab: palabras('as', 'than', 'even', 'quite', 'almost', 'exactly'),
  },
  115: {
    tips: [
      {
        head: 'La pasiva: auxiliar débil, participio fuerte',
        body: 'En la pasiva el auxiliar es débil y el acento va en el participio: made /meɪd/ en These shoes are MADE in Italy. are suena /ər/.',
        examples: ['are made /ər meɪd/', 'is cleaned /əz kliːnd/'],
      },
      {
        head: 'look forward to + -ing',
        body: 'En look forward to meeting el to es débil y se une con el verbo: /lʊk ˈfɔːrwərd tə ˈmiːtɪŋ/. Aunque es una preposición, no suena fuerte.',
        examples: ['forward to /ˈfɔːrwərd tə/', 'to meeting /tə ˈmiːtɪŋ/'],
      },
      {
        head: 'not antes de to',
        body: 'En decided not to go el acento va en not y en go; to es débil: /dɪˈsaɪdɪd ˈnɑːt tə ɡoʊ/.',
        examples: ['not to go /ˈnɑːt tə ɡoʊ/', 'not knowing /ˈnɑːt ˈnoʊɪŋ/'],
      },
    ],
    vocab: palabras('advice', 'opinion', 'decision', 'habit', 'choice', 'attention'),
  },
  116: {
    tips: [
      {
        head: 'supposed to: la d casi no suena',
        body: 'En supposed to la d final se une con to: /səˈpoʊstə/ (como «supposta»). Se escribe supposed, pero se oye casi igual que suppose.',
        examples: ['supposed to /səˈpoʊstə/', "isn't supposed to /ˈɪzənt səˈpoʊstə/"],
      },
      {
        head: 'was going to',
        body: 'En el habla rápida was going to se reduce a /wəz ˈɡʌnə/ (gonna). Se escribe going to, pero se oye gonna.',
        examples: ['was going to /wəz ˈɡoʊɪŋ tə/', 'was gonna /wəz ˈɡʌnə/'],
      },
      {
        head: 'El acento en los phrasal verbs',
        body: 'En los phrasal verbs inseparables el acento va en el verbo: LOOK after, RUN into. En los de tres partes se oye fuerte el verbo y la última partícula.',
        examples: ['look after /lʊk ˈæftər/', 'run into /rʌn ˈɪntu/'],
      },
    ],
    vocab: palabras('rule', 'meeting', 'plan', 'neighbor', 'reason', 'attention'),
  },
  117: {
    tips: [
      {
        head: 'been débil',
        body: 'En should have been el have se reduce a /əv/ y been a /bɪn/: /ʃʊd əv bɪn/. Se oye como «shouldabeen».',
        examples: ['should have been /ʃʊd əv bɪn/', 'must be /məst bi/'],
      },
      {
        head: 'get passive',
        body: 'En got fired el acento va en el participio: /ɡɑːt ˈfaɪərd/. got se une con el siguiente sonido.',
        examples: ['got fired /ɡɑːt ˈfaɪərd/', 'got lost /ɡɑːt ˈlɔːst/'],
      },
      {
        head: 'caught: la gh es muda',
        body: 'caught suena /kɔːt/ (la gh no se pronuncia). Rima con thought /θɔːt/ y bought /bɔːt/.',
        examples: ['caught /kɔːt/', 'thought /θɔːt/', 'bought /bɔːt/'],
      },
    ],
    vocab: palabras('police officer', 'injury', 'museum', 'problem', 'risk', 'trouble'),
  },
  118: {
    tips: [
      {
        head: "had y 'd",
        body: "had suena /həd/ (débil) o /d/ en la contracción: I'd finished /aɪd ˈfɪnɪʃt/. No se confunde con would: aquí 'd es had porque sigue un participio.",
        examples: ["I'd finished /aɪd ˈfɪnɪʃt/", "she'd left /ʃiːd left/"],
      },
      {
        head: 'So y Neither en las respuestas',
        body: 'En So do I el acento va en do y en I: /soʊ ˈduː aɪ/. En Neither do I, neither suena /ˈniːðər/ o /ˈnaɪðər/ (las dos son correctas).',
        examples: ['So do I /soʊ ˈduː aɪ/', 'Neither do I /ˈniːðər duː aɪ/'],
      },
      {
        head: 'by the time',
        body: 'En by the time el acento va en time y la palabra the es débil /ðə/: /baɪ ðə ˈtaɪm/.',
        examples: ['by the time /baɪ ðə ˈtaɪm/', 'before /bɪˈfɔːr/'],
      },
    ],
    vocab: palabras('birthday', 'surprise', 'timetable', 'station', 'ticket', 'platform'),
  },
  119: {
    tips: [
      {
        head: 'had y get con participio',
        body: "En I had my hair cut el acento va en el participio: /aɪ hæd maɪ her ˈkʌt/. had suena débil /həd/ si no hay énfasis.",
        examples: ["I had it cut /aɪ hæd ɪt ˈkʌt/", 'got it fixed /ɡɑːt ɪt ˈfɪkst/'],
      },
      {
        head: 'needs washing',
        body: 'En the car needs washing el acento va en el verbo: /ðə ˈkɑːr niːdz ˈwɑːʃɪŋ/. La s de needs suena /z/.',
        examples: ['needs washing /niːdz ˈwɑːʃɪŋ/', 'needs cleaning /niːdz ˈkliːnɪŋ/'],
      },
      {
        head: 'Terminaciones del participio',
        body: 'Los participios regulares terminan en /t/, /d/ o /ɪd/: fixed /fɪkst/, repaired /rɪˈperd/, painted /ˈpeɪntɪd/.',
        examples: ['fixed /fɪkst/', 'repaired /rɪˈperd/', 'painted /ˈpeɪntɪd/'],
      },
    ],
    vocab: palabras('mechanic', 'plumber', 'electrician', 'builder', 'broken', 'delivery'),
  },
  120: {
    tips: [
      {
        head: 'should have: «shoulda»',
        body: "En el habla rápida should have se reduce a /ˈʃʊdə/ (shoulda), could have a /ˈkʊdə/ y would have a /ˈwʊdə/. No se escribe así, pero se oye siempre.",
        examples: ['should have /ˈʃʊdəv/', 'could have /ˈkʊdəv/', 'would have /ˈwʊdəv/'],
      },
      {
        head: "can't have y couldn't have",
        body: "can't suena /kænt/ y couldn't suena /ˈkʊdnt/. Con have: /ˈkæntəv/ y /ˈkʊdntəv/. La t suena muy suave.",
        examples: ["can't have /ˈkæntəv/", "couldn't have /ˈkʊdntəv/"],
      },
      {
        head: 'must have',
        body: 'must have suena /ˈmʌstəv/. La t de must casi no se oye cuando va antes de have.',
        examples: ['must have /ˈmʌstəv/', 'might have /ˈmaɪtəv/'],
      },
    ],
    vocab: palabras('mistake', 'chance', 'luck', 'trouble', 'emergency', 'decision'),
  },
  121: {
    tips: [
      {
        head: 'said y told',
        body: 'said suena /sed/ (como «sed»), no /seɪd/. told suena /toʊld/. Se parecen en la escritura pero no en el sonido.',
        examples: ['said /sed/', 'told /toʊld/', 'asked /æskt/'],
      },
      {
        head: 'La entonación de la pregunta indirecta',
        body: 'En She asked where I lived la voz baja al final, como en una afirmación, porque ya no es una pregunta.',
        examples: ['asked where I lived', 'asked if I was ready'],
      },
      {
        head: 'if y whether',
        body: 'if suena /ɪf/ y whether suena /ˈweðər/ (la th es suave). whether se parece a weather.',
        examples: ['if /ɪf/', 'whether /ˈweðər/', 'weather /ˈweðər/'],
      },
    ],
    vocab: palabras('interview', 'manager', 'company', 'salary', 'contract', 'colleague'),
  },
  122: {
    tips: [
      {
        head: "would have y 'd have",
        body: "En el tercer condicional would have se reduce a /ˈwʊdəv/ y la contracción 'd have a /dəv/: I'd have gone /aɪd əv ɡɔːn/.",
        examples: ['would have /ˈwʊdəv/', "I'd have gone /aɪd əv ɡɔːn/", "hadn't /ˈhædnt/"],
      },
      {
        head: 'La entonación de las tag questions',
        body: 'Si la voz baja en la tag, pides confirmación: It\'s cold, isn\'t it ↘. Si sube, preguntas de verdad: You\'re not coming, are you ↗.',
        examples: ["isn't it? /ˈɪzənt ɪt/", 'are you? /ɑːr ju/'],
      },
      {
        head: "aren't I? y shall we?",
        body: "aren't I suena /ˈɑːrənt aɪ/ y shall we suena /ʃæl wi/. En shall la a es corta /æ/.",
        examples: ["aren't I /ˈɑːrənt aɪ/", 'shall we /ʃæl wi/'],
      },
    ],
    vocab: palabras('chance', 'fear', 'success', 'luck', 'dream', 'choice'),
  },
  123: {
    tips: [
      {
        head: 'being y been',
        body: 'being suena /ˈbiːɪŋ/ y been suena /bɪn/. En la pasiva el acento va en el participio: is being BUILT, has been BROken.',
        examples: ['being built /ˈbiːɪŋ bɪlt/', 'been broken /bɪn ˈbroʊkən/'],
      },
      {
        head: 'although y though',
        body: 'although suena /ɔːlˈðoʊ/ y though suena /ðoʊ/. La gh no se pronuncia. La th es suave (lengua entre los dientes).',
        examples: ['although /ɔːlˈðoʊ/', 'though /ðoʊ/'],
      },
      {
        head: 'however y therefore',
        body: 'however suena /haʊˈevər/ y therefore suena /ˈðerfɔːr/. Al inicio de una frase hay una pausa corta y después la coma.',
        examples: ['however /haʊˈevər/', 'therefore /ˈðerfɔːr/', 'moreover /mɔːrˈoʊvər/'],
      },
    ],
    vocab: palabras('news', 'result', 'system', 'level', 'problem', 'culture'),
  },
  124: {
    tips: [
      {
        head: "I'll be y I'll have",
        body: "En el futuro continuo y perfecto la contracción 'll es muy corta: I'll be /aɪl bi/, I'll have /aɪl əv/. El acento va en el verbo principal.",
        examples: ["I'll be flying /aɪl bi ˈflaɪɪŋ/", "I'll have left /aɪl əv ˈleft/"],
      },
      {
        head: 'What clauses',
        body: 'En What I need is rest el acento va en need y en rest: /wʌt aɪ ˈniːd ɪz ˈrest/. What suena /wʌt/.',
        examples: ['What I need is /wʌt aɪ ˈniːd ɪz/', 'What happened was /wʌt ˈhæpənd wəz/'],
      },
      {
        head: 'by the time',
        body: 'En by the time y by then, by suena fuerte /baɪ/ y the suena /ðə/ (débil).',
        examples: ['by then /baɪ ˈðen/', 'by the time /baɪ ðə ˈtaɪm/'],
      },
    ],
    vocab: palabras('success', 'dream', 'freedom', 'peace', 'hope', 'result'),
  },
};
