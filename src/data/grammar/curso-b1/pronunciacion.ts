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
  49: {
    tips: [
      {
        head: 'used to suena «iust tu»',
        body: 'En used to la d se une con el to y suena /juːst tə/ (como una s). Es distinto de use /juːz/. En did you use to… sí suena /juːs/.',
        examples: ['used to /ˈjuːst tə/', 'use to /ˈjuːs tə/', 'I used to play /aɪ ˈjuːst tə pleɪ/'],
      },
      {
        head: "would y 'd",
        body: "would suena /wʊd/ (la l es muda). La contracción 'd se pega al sujeto: I'd /aɪd/, we'd /wiːd/, she'd /ʃiːd/.",
        examples: ['would /wʊd/', "we'd visit /wiːd ˈvɪzɪt/", "she'd bake /ʃiːd beɪk/"],
      },
      {
        head: 'let me y make me',
        body: 'let me se une: /ˈletmi/. En make me la e final de make no suena y la palabra se une con me: /ˈmeɪk mi/.',
        examples: ['let me /ˈletmi/', 'make me /ˈmeɪk mi/', 'help me /ˈhelp mi/'],
      },
    ],
    vocab: palabras('boss', 'teacher', 'mechanic', 'doctor', 'manager', 'driver'),
  },
  50: {
    tips: [
      {
        head: 'enough: la gh suena f',
        body: 'En enough la terminación gh suena /f/: /ɪˈnʌf/. El acento va en la segunda sílaba.',
        examples: ['enough /ɪˈnʌf/', 'tough /tʌf/'],
      },
      {
        head: 'a few y a little',
        body: 'a few suena /ə ˈfjuː/ y little suena /ˈlɪtl/ (la tt suena como una d rápida en inglés americano). La a es muy débil.',
        examples: ['a few /ə ˈfjuː/', 'a little /ə ˈlɪtl/', 'very little /ˈveri ˈlɪtl/'],
      },
      {
        head: 'too y to',
        body: 'too suena /tuː/ (larga y fuerte) y to suena /tə/ (corta y débil). No se confunden al hablar.',
        examples: ['too much /tuː ˈmʌtʃ/', 'to go /tə ɡoʊ/', 'too many /tuː ˈmeni/'],
      },
    ],
    vocab: palabras('information', 'advice', 'luggage', 'news', 'furniture', 'weather'),
  },
  51: {
    tips: [
      {
        head: 'ought to: la gh es muda',
        body: 'En ought la gh no suena: /ɔːt/. ought to suena /ˈɔːt tə/. Se parece a «ot».',
        examples: ['ought /ɔːt/', 'ought to /ˈɔːt tə/', 'thought /θɔːt/'],
      },
      {
        head: "had better y I'd better",
        body: "En el habla rápida had better se reduce: I'd better suena /aɪd ˈbetər/. La t de better suena casi como una d en inglés americano.",
        examples: ["I'd better /aɪd ˈbetər/", "you'd better /juːd ˈbetər/"],
      },
      {
        head: 'would rather',
        body: "would rather suena /wʊd ˈræðər/ y se contrae a 'd rather /d ˈræðər/. La th de rather es suave (la lengua entre los dientes).",
        examples: ["I'd rather /aɪd ˈræðər/", 'would rather /wʊd ˈræðər/'],
      },
    ],
    vocab: palabras('deadline', 'meeting', 'project', 'report', 'task', 'interview'),
  },
  52: {
    tips: [
      {
        head: 'Los pronombres relativos suenan débiles',
        body: 'En una frase normal who suena /hu/, which suena /wɪtʃ/ y that suena /ðət/ (débil). Se pegan al sustantivo anterior.',
        examples: ['the man who /ðə mæn hu/', 'the book that /ðə bʊk ðət/'],
      },
      {
        head: 'El acento en los phrasal verbs',
        body: 'En un phrasal verb la partícula lleva el acento: turn OFF, give UP, sit DOWN. En un verbo con preposición el acento va en el verbo.',
        examples: ['give UP /ɡɪv ˈʌp/', 'sit DOWN /sɪt ˈdaʊn/', 'turn OFF /tɜːrn ˈɔːf/'],
      },
      {
        head: 'whose y who\'s',
        body: "whose suena igual que who's: /huːz/. El contexto dice cuál es.",
        examples: ['whose /huːz/', "who's /huːz/"],
      },
    ],
    vocab: palabras('neighbor', 'nurse', 'manager', 'customer', 'colleague', 'client'),
  },
  53: {
    tips: [
      {
        head: 'wish y would',
        body: 'wish suena /wɪʃ/ y would suena /wʊd/ (la l es muda). Con I wish se oye el contraste con I would.',
        examples: ['wish /wɪʃ/', 'would /wʊd/', 'I wish I could /aɪ wɪʃ aɪ kʊd/'],
      },
      {
        head: 'were débil',
        body: 'En If I were you, were suena débil /wər/: /ɪf aɪ wər juː/. Con énfasis suena /wɜːr/.',
        examples: ['If I were you /ɪf aɪ wər juː/', 'I wish I were /aɪ wɪʃ aɪ wər/'],
      },
      {
        head: "I'd: dos significados",
        body: "I'd es la contracción de I would y también de I had. Aquí es I would: I'd travel /aɪd ˈtrævəl/. El verbo siguiente aclara cuál es.",
        examples: ["I'd travel /aɪd ˈtrævəl/", "she'd help /ʃiːd help/"],
      },
    ],
    vocab: palabras('rich', 'poor', 'dream', 'luck', 'success', 'freedom'),
  },
  54: {
    tips: [
      {
        head: 'La entonación de la pregunta indirecta',
        body: 'En una pregunta indirecta con orden afirmativo la voz baja al final, como en una afirmación: Do you know where the bank IS. La parte de Do you know sube.',
        examples: ['Do you know where it is?', 'I wonder why she left.'],
      },
      {
        head: 'whether y weather',
        body: 'whether y weather suenan exactamente igual: /ˈweðər/. whether une una pregunta; weather es el clima.',
        examples: ['whether /ˈweðər/', 'weather /ˈweðər/'],
      },
      {
        head: 'how to y what to',
        body: 'En how to, what to y where to la palabra to es débil /tə/ y se une con el verbo siguiente.',
        examples: ['how to swim /haʊ tə swɪm/', 'what to say /wʌt tə seɪ/', 'where to park /wer tə pɑːrk/'],
      },
    ],
    vocab: palabras('map', 'address', 'station', 'airport', 'library', 'museum'),
  },
  55: {
    tips: [
      {
        head: 'been, since y for',
        body: "En una frase normal been suena /bɪn/, since suena /sɪns/ y for suena /fər/ (débil). El acento va en el verbo con -ing: I've been WORKing.",
        examples: ["I've been working /aɪv bɪn ˈwɜːrkɪŋ/", 'since eight /sɪns ˈeɪt/', 'for an hour /fər ən ˈaʊər/'],
      },
      {
        head: 'already, yet y still',
        body: 'already suena /ɔːlˈredi/ con el acento en la segunda sílaba. yet suena /jet/ y still suena /stɪl/.',
        examples: ['already /ɔːlˈredi/', 'yet /jet/', 'still /stɪl/'],
      },
      {
        head: 'haven\'t y hasn\'t',
        body: "haven't suena /ˈhævənt/ y hasn't suena /ˈhæzənt/. La t final casi no se oye en el habla rápida.",
        examples: ["haven't /ˈhævənt/", "hasn't /ˈhæzənt/", "I haven't yet /aɪ ˈhævənt jet/"],
      },
    ],
    vocab: palabras('always', 'never', 'sometimes', 'usually', 'often', 'rarely'),
  },
  56: {
    tips: [
      {
        head: 'must have: «musta»',
        body: 'En el habla rápida must have suena /ˈmʌstəv/ y might have suena /ˈmaɪtəv/. La palabra have se reduce a /əv/.',
        examples: ['must have /ˈmʌstəv/', 'might have /ˈmaɪtəv/', "can't have /ˈkæntəv/"],
      },
      {
        head: "can y can't",
        body: "can suena débil /kən/ y can't suena fuerte /kænt/. Al especular, la diferencia es clave: He can be (posible) · He can't be (imposible).",
        examples: ['can /kən/', "can't /kænt/", "He can't be here. /hi kænt ˈbiː hɪr/"],
      },
      {
        head: 'La terminación -ed de los adjetivos',
        body: 'En los adjetivos en -ed la terminación suena /d/ (bored /bɔːrd/), /t/ (tired no, pero worked sí) o /ɪd/ después de t y d (excited /ɪkˈsaɪtɪd/).',
        examples: ['bored /bɔːrd/', 'excited /ɪkˈsaɪtɪd/', 'surprised /sərˈpraɪzd/'],
      },
    ],
    vocab: palabras('angry', 'afraid', 'nervous', 'relaxed', 'proud', 'jealous'),
  },
  57: {
    tips: [
      {
        head: 'was y were son débiles',
        body: 'En la pasiva was suena /wəz/ y were suena /wər/. El acento va en el participio: The window was BROken.',
        examples: ['was built /wəz ˈbɪlt/', 'were made /wər ˈmeɪd/'],
      },
      {
        head: 'by',
        body: 'by suena /baɪ/ (como «bai»). Se une con el nombre siguiente: painted by Picasso /ˈpeɪntɪd baɪ pɪˈkɑːsoʊ/.',
        examples: ['by /baɪ/', 'written by /ˈrɪtn baɪ/'],
      },
      {
        head: 'Participios regulares',
        body: 'Los participios regulares terminan en /t/, /d/ o /ɪd/: stopped /stɑːpt/, cleaned /kliːnd/, painted /ˈpeɪntɪd/.',
        examples: ['cleaned /kliːnd/', 'stopped /stɑːpt/', 'painted /ˈpeɪntɪd/'],
      },
    ],
    vocab: palabras('artist', 'writer', 'singer', 'scientist', 'engineer', 'designer'),
  },
};
