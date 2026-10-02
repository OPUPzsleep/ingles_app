import type { PronunUnit } from '@/types/grammar';

import { palabras } from '../curso/ayuda';

/** La pronunciación de cada unidad del curso C1 (ids 146–157): consejos propios de sus temas y palabras con su sonido. */
export const PRONUN_CURSO_C1: Record<number, PronunUnit> = {  146: {
    tips: [
      {
        head: 'tend to: la d final se une con to',
        body: 'En tend to la d y la t se unen y suena /ˈtendtə/ (casi «tenta»). El acento va en tend y el to es muy débil.',
        examples: ['tend to /ˈtendtə/', 'tends to /ˈtendztə/', 'tend not to /ˈtend nɑːt tə/'],
      },
      {
        head: 'will con énfasis',
        body: "will suena débil /wəl/ o 'll. Con énfasis (comportamiento molesto) se dice fuerte /wɪl/: He WILL leave it there! El énfasis cambia el significado.",
        examples: ["He'll sit /hiːl sɪt/", 'He WILL leave it /hi ˈwɪl liːv/'],
      },
      {
        head: 'And / But / So al inicio',
        body: 'Al iniciar una pregunta, And, But y So son débiles y la voz sube en la palabra clave: /ən ˈwʌt dɪd ju ˈduː/. No se hace pausa después.',
        examples: ['And what /ən ˈwʌt/', 'But isn\'t /bət ˈɪzənt/', 'So how /soʊ ˈhaʊ/'],
      },
    ],
    vocab: palabras('message', 'link', 'update', 'download', 'upload', 'search'),
  },
  147: {
    tips: [
      {
        head: 'La pausa en las no definitorias',
        body: 'Las comas se oyen como pausas breves y la voz baja: My brother, who lives in Madrid, is a journalist. Sin comas, no hay pausa.',
        examples: ['My brother, who lives', 'The man who called'],
      },
      {
        head: 'which comentario',
        body: 'Al comentar una idea con which la voz baja un poco antes de la coma y el which suena /wɪtʃ/ fuerte.',
        examples: ['which /wɪtʃ/', 'which is why /wɪtʃ ɪz waɪ/'],
      },
      {
        head: 'You know what?',
        body: 'En You know what? la entonación sube en what y hay una pausa antes del comentario: /ju noʊ ˈwʌt/. La t de what casi no se oye.',
        examples: ['You know what? /ju noʊ ˈwʌt/', 'whom /huːm/'],
      },
    ],
    vocab: palabras('journalist', 'writer', 'artist', 'actor', 'singer', 'photographer'),
  },
  148: {
    tips: [
      {
        head: "had y 'd en la narración",
        body: "En el pasado perfecto had se contrae a 'd y casi desaparece: she'd left /ʃiːd left/. El acento va en el participio.",
        examples: ["she'd left /ʃiːd ˈleft/", "I'd been /aɪd bɪn/"],
      },
      {
        head: 'Anyway y Where was I?',
        body: 'anyway suena /ˈeniweɪ/ con el acento en la primera sílaba. En Where was I? was es débil /wəz/.',
        examples: ['anyway /ˈeniweɪ/', 'Where was I? /wer wəz aɪ/'],
      },
      {
        head: 'No wonder',
        body: 'En no wonder el acento va en wonder /ˈwʌndər/ y la voz sube y baja como una exclamación.',
        examples: ['no wonder /noʊ ˈwʌndər/', 'wonder /ˈwʌndər/'],
      },
    ],
    vocab: palabras('suddenly', 'finally', 'immediately', 'recently', 'actually', 'especially'),
  },
  149: {
    tips: [
      {
        head: 'Los adverbios de actitud llevan pausa',
        body: 'Al inicio de la frase los adverbios de actitud se separan con una pausa breve: Frankly, I think it\'s a mistake. La voz baja en el adverbio.',
        examples: ['Frankly, /ˈfræŋkli/', 'Unfortunately, /ʌnˈfɔːrtʃənətli/'],
      },
      {
        head: 'In fact y As a matter of fact',
        body: 'In fact suena /ɪn ˈfækt/ con el acento en fact. As a matter of fact se reduce: /əz ə ˈmætər əv ˈfækt/.',
        examples: ['In fact /ɪn ˈfækt/', 'matter of fact /ˈmætər əv fækt/'],
      },
      {
        head: 'the delante de vocal',
        body: 'The suena /ðə/ antes de consonante y /ði/ antes de vocal: the rich /ðə rɪtʃ/, the unemployed /ði ˌʌnɪmˈplɔɪd/.',
        examples: ['the rich /ðə ˈrɪtʃ/', 'the elderly /ði ˈeldərli/'],
      },
    ],
    vocab: palabras('job', 'career', 'company', 'salary', 'experience', 'attention'),
  },
  150: {
    tips: [
      {
        head: "I'd have y would have",
        body: "En los condicionales, would have se reduce a /ˈwʊdəv/ y la contracción 'd have a /dəv/: I'd have asked /aɪd əv æskt/.",
        examples: ["I'd have asked /aɪd əv æskt/", 'would have /ˈwʊdəv/'],
      },
      {
        head: 'wish y if only',
        body: 'wish suena /wɪʃ/ y if only suena /ɪf ˈoʊnli/. If only se dice con más énfasis y la voz sube.',
        examples: ['wish /wɪʃ/', 'if only /ɪf ˈoʊnli/'],
      },
      {
        head: 'I suppose',
        body: 'I suppose suena /aɪ səˈpoʊz/, con el acento en pose. Se dice más lento y con la voz que baja, mostrando duda.',
        examples: ['I suppose /aɪ səˈpoʊz/', 'I suppose so /aɪ səˈpoʊz ˈsoʊ/'],
      },
    ],
    vocab: palabras('choice', 'hope', 'chance', 'luck', 'success', 'dream'),
  },
  151: {
    tips: [
      {
        head: 'should y ought to',
        body: 'should suena /ʃʊd/ (la l es muda) y ought to suena /ˈɔːtə/ (la gh es muda). En ought to se oye casi «otta».',
        examples: ['should /ʃʊd/', 'ought to /ˈɔːtə/'],
      },
      {
        head: "I'd say",
        body: "La contracción 'd se pega al sujeto: I'd /aɪd/. En I'd say it's expensive la voz sube y baja suavemente, con tono cortés.",
        examples: ["I'd say /aɪd ˈseɪ/", "I'd imagine /aɪd ɪˈmædʒɪn/"],
      },
      {
        head: 'I think so / I guess not',
        body: "En I don't think so el acento va en think y en so: /aɪ doʊnt ˈθɪŋk ˈsoʊ/. En I guess not, en guess y en not.",
        examples: ["don't think so /doʊnt ˈθɪŋk soʊ/", 'I guess not /aɪ ˈɡes nɑːt/'],
      },
    ],
    vocab: palabras('plan', 'meeting', 'project', 'deadline', 'result', 'risk'),
  },
  152: {
    tips: [
      {
        head: 'El acento en los phrasal verbs',
        body: 'En un phrasal verb la partícula lleva el acento: fall THROUGH, pull OFF, turn DOWN. En los de tres partes, el acento va en el verbo y en la última partícula.',
        examples: ['fall through /fɔːl ˈθruː/', 'pull off /pʊl ˈɔːf/', 'put up with /pʊt ˈʌp wɪð/'],
      },
      {
        head: 'tired of y fed up with',
        body: 'tired of suena /ˈtaɪərd əv/ y fed up with /ˈfed ʌp wɪð/. La preposición es débil en el habla rápida.',
        examples: ['tired of /ˈtaɪərd əv/', 'fed up with /fed ʌp wɪð/'],
      },
      {
        head: 'What I mean is',
        body: 'En What I mean is el acento va en mean y en la oración que sigue: /wʌt aɪ ˈmiːn ɪz/. I have to say se une: /aɪ hæftə ˈseɪ/.',
        examples: ['What I mean is /wʌt aɪ ˈmiːn ɪz/', 'I have to say /aɪ hæftə ˈseɪ/'],
      },
    ],
    vocab: palabras('neighbor', 'rent', 'rule', 'problem', 'trouble', 'attention'),
  },
  153: {
    tips: [
      {
        head: 'such as y like',
        body: 'such as suena /sʌtʃ æz/ (débil: /sʌtʃ əz/) y like suena /laɪk/. Después de ambos hay una pausa corta antes de la lista.',
        examples: ['such as /sʌtʃ əz/', 'for instance /fər ˈɪnstəns/'],
      },
      {
        head: 'La entonación de las preguntas retóricas',
        body: 'Una pregunta retórica baja la voz al final, como una afirmación, y se hace una pausa: Who wouldn\'t want that? ↘',
        examples: ["Who wouldn't want that?", "What's the alternative?"],
      },
      {
        head: 'result in y result from',
        body: 'result suena /rɪˈzʌlt/ con el acento en la segunda sílaba. in y from son débiles: result in /rɪˈzʌlt ɪn/.',
        examples: ['result in /rɪˈzʌlt ɪn/', 'result from /rɪˈzʌlt frəm/'],
      },
    ],
    vocab: palabras('ingredient', 'recipe', 'boil', 'fry', 'bake', 'chop'),
  },
  154: {
    tips: [
      {
        head: 'neither y either',
        body: 'neither suena /ˈniːðər/ o /ˈnaɪðər/ y either /ˈiːðər/ o /ˈaɪðər/. Las dos pronunciaciones son correctas.',
        examples: ['neither /ˈniːðər/', 'either /ˈiːðər/'],
      },
      {
        head: 'whole y hole',
        body: 'whole suena /hoʊl/, igual que hole. Se escribe con w, pero la w no suena.',
        examples: ['whole /hoʊl/', 'hole /hoʊl/'],
      },
      {
        head: 'As far as I\'m concerned',
        body: "En as far as el primer as es débil /əz/ y el acento va en far /fɑːr/ y en concerned /kənˈsɜːrnd/.",
        examples: ['as far as /əz fɑːr əz/', 'concerned /kənˈsɜːrnd/'],
      },
    ],
    vocab: palabras('proud', 'grateful', 'relaxed', 'calm', 'patient', 'creative'),
  },
  155: {
    tips: [
      {
        head: 'said y asked',
        body: 'said suena /sed/ (como set) y asked suena /æskt/. En asked la k y la t se unen al final.',
        examples: ['said /sed/', 'asked /æskt/'],
      },
      {
        head: 'told me y told us',
        body: 'told suena /toʊld/. Con me y us la d final se une al pronombre y se oye casi «tolme».',
        examples: ['told me /toʊld mi/', 'told us /toʊld ʌs/'],
      },
      {
        head: 'In what way?',
        body: 'El acento va en what y en way. in es débil y se une a what: /ɪn ˈwʌt ˈweɪ/.',
        examples: ['in what way /ɪn wʌt weɪ/'],
      },
    ],
    vocab: palabras('opinion', 'question', 'answer', 'meaning', 'sentence', 'word'),
  },
  156: {
    tips: [
      {
        head: 'where y whose',
        body: 'where suena /wer/ y whose suena /huːz/, igual que who’s. La w de whose no suena.',
        examples: ['where /wer/', 'whose /huːz/'],
      },
      {
        head: 'kind of y sort of',
        body: 'En conversación kind of suena /ˈkaɪndə/ y sort of suena /ˈsɔːrtə/. El of es muy débil.',
        examples: ['kind of /ˈkaɪndə/', 'sort of /ˈsɔːrtə/'],
      },
      {
        head: 'Yeah, no',
        body: 'Yeah suena /jeə/ y no /noʊ/. Entre las dos hay una pausa breve y el acento va en no.',
        examples: ['yeah, no /jeə noʊ/'],
      },
    ],
    vocab: palabras('village', 'town', 'city', 'country', 'neighborhood', 'address'),
  },
  157: {
    tips: [
      {
        head: 'as… as',
        body: 'En as… as el primer as es débil /əz/ y el segundo también. El acento va en el adjetivo: as big as /əz ˈbɪɡ əz/.',
        examples: ['as big as /əz bɪɡ əz/', 'as soon as /əz suːn əz/'],
      },
      {
        head: 'absolutely',
        body: 'absolutely suena /ˈæbsəluːtli/ con el acento en la primera sílaba y la t se une a ly.',
        examples: ['absolutely /ˈæbsəluːtli/'],
      },
      {
        head: 'No doubt',
        body: 'En doubt la b no suena: /daʊt/. No doubt suena /noʊ ˈdaʊt/.',
        examples: ['doubt /daʊt/', 'no doubt /noʊ daʊt/'],
      },
    ],
    vocab: palabras('level', 'power', 'success', 'experience', 'attention', 'habit'),
  },
};
