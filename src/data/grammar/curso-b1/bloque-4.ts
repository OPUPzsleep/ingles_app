import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B1_4 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 4 · Actualidad, impresiones y noticias (ids 55–57: Unidad 10–12 del nivel B1).

// ─── Unidad 10 (id 55) · Presente perfecto continuo; since, for, in; already, still, yet ───

const UNIDAD_55: Unit = {
  title: 'Present Perfect Continuous vs Present Perfect, Since, For, Already, Still and Yet',
  topic: BLOQUE_B1_4,
  level: 'B1',
  explain: [
    teoria(
      '1 · Presente perfecto continuo: la forma',
      "Se forma con have / has + been + verbo-ing:\n\n• I have been working. · She has been studying.\n• We have been waiting for an hour.\n\nContracciones: I've been, she's been. Negativa: haven't / hasn't been + -ing. Pregunta: Have / Has + sujeto + been + -ing.\n\n⚠️ Ojo: been no cambia nunca: «has been working», no «has being working».",
      [
        ["I've been working since eight.", 'He estado trabajando desde las ocho.'],
        ["She's been studying all day.", 'Ella ha estado estudiando todo el día.'],
        ["We've been waiting for an hour.", 'Hemos estado esperando una hora.'],
        ["They haven't been sleeping well.", 'No han estado durmiendo bien.'],
      ]
    ),
    teoria(
      '2 · Cuándo se usa: acciones que empezaron y siguen',
      "El presente perfecto continuo se usa para:\n\n• Una acción que empezó en el pasado y SIGUE ahora: «I've been living here for five years».\n• Una acción reciente que acaba de terminar y tiene resultado visible: «You're wet. Have you been swimming?».\n\nSe enfoca en la duración y la actividad, no en el resultado.",
      [
        ["I've been living here for five years.", 'He estado viviendo aquí cinco años.'],
        ["You're wet. Have you been swimming?", 'Estás mojado. ¿Has estado nadando?'],
        ["He's tired. He's been running.", 'Está cansado. Ha estado corriendo.'],
        ["It's been raining all morning.", 'Ha estado lloviendo toda la mañana.'],
      ]
    ),
    teoria(
      '3 · Presente perfecto continuo o simple',
      "• Continuo: enfatiza la actividad y su duración (puede no estar terminada): «I've been reading this book for two weeks».\n• Simple: enfatiza el resultado o la cantidad, y la acción está completa: «I've read three books this month».\n\nPregunta con How long? → continuo: «How long have you been waiting?». Con How many? → simple: «How many books have you read?».",
      [
        ["I've been reading this book for two weeks.", 'He estado leyendo este libro dos semanas.'],
        ["I've read three books this month.", 'He leído tres libros este mes.'],
        ['How long have you been waiting?', '¿Cuánto tiempo has estado esperando?'],
        ['How many books have you read?', '¿Cuántos libros has leído?'],
      ]
    ),
    teoria(
      '4 · Verbos de estado: simple, no continuo',
      "Los verbos de estado (know, have, like, want, belong, believe) no se usan en continuo, ni siquiera con since o for:\n\n• I've known her for ten years. (no «been knowing»)\n• She's had this car since 2015.\n• We've been friends for a long time.\n\nPara estos verbos se usa el presente perfecto simple.",
      [
        ["I've known her for ten years.", 'La conozco hace diez años.'],
        ["She's had this car since 2015.", 'Ella tiene este auto desde 2015.'],
        ["We've been friends for a long time.", 'Somos amigos desde hace mucho.'],
        ["They've lived here since 2018.", 'Ellos viven aquí desde 2018.'],
      ]
    ),
    teoria(
      '5 · Since y for: desde cuándo y cuánto tiempo',
      "• since + punto de inicio (una fecha, una hora): since 2019 · since Monday · since I was a child · since eight o'clock.\n• for + duración (cuánto tiempo): for two years · for an hour · for a long time.\n\n• I've lived here since 2019.\n• I've lived here for five years.\n\nSi mide cuánto tiempo → for; si dice cuándo empezó → since.",
      [
        ["I've lived here since 2019.", 'Vivo aquí desde 2019.'],
        ["I've lived here for five years.", 'Vivo aquí hace cinco años.'],
        ["She's been sick since Monday.", 'Ella está enferma desde el lunes.'],
        ["We've been waiting for an hour.", 'Llevamos esperando una hora.'],
      ]
    ),
    teoria(
      '6 · In para duración',
      "In se usa en lugar de for en frases negativas con «no he… en (tiempo)»:\n\n• I haven't seen her in two years. (= for two years)\n• He hasn't called in a week.\n• It's the first time I've been here in ten years.\n\nIn también se usa para decir en cuánto tiempo se hace algo: «I can finish it in an hour». En estos casos mide el plazo.",
      [
        ["I haven't seen her in two years.", 'No la veo hace dos años.'],
        ["He hasn't called in a week.", 'No ha llamado en una semana.'],
        ['I can finish it in an hour.', 'Puedo terminarlo en una hora.'],
        ["We haven't had a holiday in years.", 'No tenemos vacaciones hace años.'],
      ]
    ),
    teoria(
      '7 · Already: ya',
      "Already significa «ya» y se usa en afirmativas, para decir que algo pasó antes de lo esperado. Va entre have y el participio, o al final de la frase:\n\n• I've already eaten.\n• She has already finished her homework.\n• I've seen it already.\n\nEn preguntas, ya con sorpresa: «Have you finished already?».",
      [
        ["I've already eaten.", 'Ya comí.'],
        ['She has already finished her homework.', 'Ella ya terminó su tarea.'],
        ["I've seen it already.", 'Ya lo vi.'],
        ['Have you finished already?', '¿Ya terminaste?'],
      ]
    ),
    teoria(
      '8 · Yet: todavía no / ya',
      "Yet se usa en negativas y preguntas, casi siempre al final:\n\n• I haven't finished yet. (todavía no)\n• Have you eaten yet? (¿ya?)\n• She hasn't called yet.\n\nYet significa «hasta ahora». Se usa en negativas («todavía no») y preguntas («¿ya?»), nunca en afirmativas.",
      [
        ["I haven't finished yet.", 'Todavía no he terminado.'],
        ['Have you eaten yet?', '¿Ya comiste?'],
        ["She hasn't called yet.", 'Ella todavía no ha llamado.'],
        ["They haven't arrived yet.", 'Todavía no han llegado.'],
      ]
    ),
    teoria(
      '9 · Still y yet: todavía',
      "📖 Del libro: still significa «todavía» (sigue siendo así) y se usa antes del verbo principal; en negativas va antes del auxiliar:\n\n• I still live in Lima.\n• She is still sleeping.\n• I still haven't finished. (= I haven't finished yet; más enfático)\n\nDiferencia: yet va al final, still antes del verbo. Y any more / any longer significan «ya no»: «I don't live there any more».",
      [
        ['I still live in Lima.', 'Todavía vivo en Lima.'],
        ['She is still sleeping.', 'Ella todavía está durmiendo.'],
        ["I still haven't finished.", 'Todavía no he terminado.'],
        ["I don't live there any more.", 'Ya no vivo allí.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Presente perfecto continuo', suj('I'), aux('have been'), verbo('working')),
    fl('Con for / since', resto('for two hours'), resto('/'), resto('since eight')),
    fl('Already', suj('I'), aux("'ve"), resto('already'), verbo('eaten')),
    fl('Yet', suj('I'), aux("haven't"), verbo('finished'), resto('yet')),
  ],
  table: {
    cols: ['Palabra', 'Significa', 'Ejemplo'],
    rows: [
      ['since', 'desde (inicio)', 'since 2019'],
      ['for', 'durante (duración)', 'for five years'],
      ['already', 'ya (afirmativa)', "I've already eaten."],
      ['yet', 'todavía no / ya', "I haven't finished yet."],
      ['still', 'todavía', 'I still live here.'],
      ['any more', 'ya no', "I don't live there any more."],
    ],
  },
  contrastCard: {
    left: { label: 'Continuo — actividad y duración', example: "I've been reading for an hour.", highlight: 'been reading' },
    right: { label: 'Simple — resultado', example: "I've read three chapters.", highlight: "I've read" },
    caption: 'Continuo para la actividad y cuánto dura. Simple para el resultado o la cantidad.',
  },
  quiz: [
    ejercicio(
      'I ___ for an hour. Where is he?',
      'have been waiting',
      ['am waiting', 'have waited', 'was waiting'],
      'Una acción que empezó en el pasado y sigue, con for an hour, pide presente perfecto continuo: have been waiting. am waiting no marca la duración y las otras no son continuas.'
    ),
    ejercicio(
      "She ___ here since 2015.",
      'has lived',
      ['lives', 'is living', 'lived'],
      'since 2015 marca desde cuándo; con un verbo de estado (live) se usa el presente perfecto simple: has lived. lives, is living y lived no conectan con el presente.'
    ),
    ejercicio(
      "I haven't seen her ___ two years.",
      'in',
      ['since', 'during', 'at'],
      'En frases negativas con duración se usa in o for: «I haven\'t seen her in two years». since necesita un punto de inicio y during y at no se usan así.'
    ),
    ejercicio(
      "Have you eaten ___? We're leaving soon.",
      'yet',
      ['already', 'still', 'ever'],
      'En preguntas sobre si algo ya pasó se usa yet al final. already es de afirmativas, still significa «todavía» y ever no pregunta si ya ocurrió.'
    ),
    ejercicio(
      "I'm sorry, I ___ haven't finished the report.",
      'still',
      ['yet', 'already', 'ever'],
      'still va antes del auxiliar y enfatiza que todavía no. yet va al final, already es de afirmativas y ever no se usa así.'
    ),
  ],
  flashcards: [
    tarjeta('Presente perfecto continuo', "have / has + been + verbo-ing\nI've been working. · She's been studying."),
    tarjeta('Continuo o simple', "Continuo: actividad y duración (I've been reading for an hour).\nSimple: resultado (I've read three chapters)."),
    tarjeta('Since y for', 'since + inicio (since 2019)\nfor + duración (for five years)'),
    tarjeta('Already y yet', "already: ya (afirmativa). yet: todavía no / ya (negativa, pregunta, al final).\nI've already eaten. · I haven't finished yet."),
    tarjeta('Still', 'still = todavía (antes del verbo).\nI still live here. · I still haven\'t finished.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "You look tired. What have you been doing?", translation: 'Te ves cansado. ¿Qué has estado haciendo?' },
    { speaker: 'user', text: "I've been studying for my exam since six. I haven't finished yet.", translation: 'He estado estudiando para mi examen desde las seis. Todavía no termino.' },
    { speaker: 'other', text: 'How long have you been preparing for it?', translation: '¿Cuánto tiempo llevas preparándote?' },
    { speaker: 'user', text: "For two weeks. I've already read all the chapters, but I still don't understand the last one.", translation: 'Dos semanas. Ya leí todos los capítulos, pero todavía no entiendo el último.' },
    { speaker: 'other', text: "Have you asked your teacher yet?", translation: '¿Ya le preguntaste a tu profesor?' },
    { speaker: 'user', text: "Not yet. I haven't spoken to her in a week.", translation: 'Todavía no. No hablo con ella desde hace una semana.' },
  ],
  readingText: {
    title: 'A long wait',
    body: "Tom has been waiting at the station since eight o'clock. His train hasn't arrived yet. He has been reading a newspaper for an hour, and he has already finished it. A man next to him has been sleeping since Tom arrived. Tom has called his boss twice, but she still hasn't answered. He hasn't eaten anything in six hours, so he has bought a sandwich. How long has he been there now? Almost two hours. \"I've never waited this long before,\" he thinks.",
    translation:
      'Tom ha estado esperando en la estación desde las ocho. Su tren todavía no ha llegado. Ha estado leyendo un periódico durante una hora y ya lo terminó. Un hombre a su lado ha estado durmiendo desde que Tom llegó. Tom ha llamado a su jefa dos veces, pero ella todavía no ha contestado. No ha comido nada en seis horas, así que compró un sándwich. ¿Cuánto tiempo lleva allí ahora? Casi dos horas. «Nunca había esperado tanto antes», piensa.',
  },
  tips: [
    "Con how long usa presente perfecto continuo: «How long have you been waiting?». Con how many, el simple: «How many have you read?».",
    "Since + inicio (since 2019). For + duración (for five years). Con in: «I haven't seen her in two years».",
    "Los verbos de estado no van en continuo: «I've known her for years», no «I've been knowing».",
    "Already en afirmativas, yet en negativas y preguntas (al final), still antes del verbo.",
  ],
  dailyWords: palabras('already', 'still', 'yet', 'recently', 'since', 'until'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Presente Perfecto (Present Perfect)', ruta: '/gramatica/concepto/el-presente-perfecto-present-perfect' },
    { etiqueta: '📖 Gramática: SINCE / FOR — tiempo', ruta: '/gramatica/concepto/since-for-tiempo' },
  ],
};

const FORMAS_55: FormasUnidad = {
  titulo: 'Presente perfecto continuo',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('have / has'), resto('been'), verbo('verb-ing'))],
    ejemplos: [
      ["I've been working since eight.", 'He estado trabajando desde las ocho.'],
      ["She's been studying all day.", 'Ella ha estado estudiando todo el día.'],
      ["They've been waiting for an hour.", 'Han estado esperando una hora.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('have / has'), neg('not'), resto('been'), verbo('verb-ing'))],
    ejemplos: [
      ["I haven't been sleeping well.", 'No he estado durmiendo bien.'],
      ["He hasn't been working.", 'Él no ha estado trabajando.'],
      ["We haven't been waiting long.", 'No hemos esperado mucho.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Have / Has'), suj('subject'), resto('been'), verbo('verb-ing')),
      fl('Información', resto('How long…'), aux('have / has'), suj('subject'), resto('been'), verbo('verb-ing')),
    ],
    ejemplos: [
      ['Have you been waiting long?', '¿Llevas esperando mucho?'],
      ['Has she been studying?', '¿Ella ha estado estudiando?'],
      ['How long have they been living here?', '¿Cuánto tiempo llevan viviendo aquí?'],
    ],
  },
  nota: "Contracciones: I've been · she's been · haven't been · hasn't been. Respuestas cortas: Yes, I have. / No, she hasn't. Con since (inicio) y for (duración).",
  ojo: "been no cambia: «has been working», no «has being working». Los verbos de estado (know, have, like) no se usan en continuo.",
};

// ─── Unidad 11 (id 56) · Especular con modales; adjetivos -ed e -ing ───

const UNIDAD_56: Unit = {
  title: 'Speculating with Modals, -ed and -ing Adjectives',
  topic: BLOQUE_B1_4,
  level: 'B1',
  explain: [
    teoria(
      '1 · Especular: must, may, might, can\'t, could',
      "Para decir qué crees que es verdad (sin estar seguro) usamos verbos modales. Cada uno indica un grado de seguridad:\n\n• must → casi seguro de que es verdad: «He must be tired».\n• may / might / could → es posible: «He might be at home».\n• can't → casi seguro de que NO es verdad: «He can't be at home».\n\nVan seguidos del verbo base.",
      [
        ['He must be tired.', 'Debe de estar cansado.'],
        ['He might be at home.', 'Puede que esté en casa.'],
        ["He can't be at home. His car is not here.", 'No puede estar en casa. Su auto no está.'],
        ['She could be my teacher.', 'Podría ser mi profesora.'],
      ]
    ),
    teoria(
      '2 · Must y can\'t: casi seguro',
      "Must (casi seguro que sí) y can't (casi seguro que no) se basan en una evidencia:\n\n• You've been working all day. You must be tired.\n• She said she was coming. She must be here.\n• He is in New York. He can't be at the party.\n• That can't be true!\n\nOjo: must (obligación) es distinto de must (deducción). Y «mustn't» no se usa para especular: se usa can't.",
      [
        ["You've been working all day. You must be tired.", 'Has trabajado todo el día. Debes de estar cansado.'],
        ['She said she was coming. She must be here.', 'Dijo que venía. Debe de estar aquí.'],
        ["He is in New York. He can't be at the party.", 'Está en Nueva York. No puede estar en la fiesta.'],
        ["That can't be true!", '¡Eso no puede ser verdad!'],
      ]
    ),
    teoria(
      '3 · May, might y could: posible',
      "May, might y could dicen que algo es posible, pero no estás seguro:\n\n• She might be late. (quizás)\n• It may rain later.\n• He could be right.\n\nNegativas: «She might not come» · «It may not be true». Para posibilidades, couldn't no es lo mismo: could not = casi imposible, como can't.",
      [
        ['She might be late.', 'Puede que llegue tarde.'],
        ['It may rain later.', 'Puede que llueva más tarde.'],
        ['He could be right.', 'Podría tener razón.'],
        ['She might not come.', 'Puede que no venga.'],
      ]
    ),
    teoria(
      '4 · Especular sobre algo que pasa ahora: be + -ing',
      "Para especular sobre lo que alguien está haciendo ahora se usa el modal + be + verbo-ing:\n\n• He must be working. (lo veo ocupado)\n• She might be sleeping. (no contesta)\n• They can't be studying. (hay mucho ruido)\n\nEs la forma de decir «seguramente está haciendo…».",
      [
        ['He must be working.', 'Seguramente está trabajando.'],
        ['She might be sleeping.', 'Puede que esté durmiendo.'],
        ["They can't be studying. It's very noisy.", 'No pueden estar estudiando. Hay mucho ruido.'],
        ['You must be joking!', '¡Debes de estar bromeando!'],
      ]
    ),
    teoria(
      '5 · Especular sobre el pasado: modal + have + participio',
      "Para especular sobre algo que pasó se usa modal + have + participio:\n\n• She must have forgotten. (seguro que se olvidó)\n• He might have missed the bus. (quizás perdió el bus)\n• They can't have arrived yet. (seguro que no han llegado)\n• It could have been a mistake.\n\nEn habla rápida, have suena /əv/ («musta», «mighta»).",
      [
        ['She must have forgotten.', 'Seguro que se olvidó.'],
        ['He might have missed the bus.', 'Puede que haya perdido el bus.'],
        ["They can't have arrived yet.", 'No pueden haber llegado todavía.'],
        ['It could have been a mistake.', 'Pudo haber sido un error.'],
      ]
    ),
    teoria(
      '6 · Adjetivos terminados en -ed',
      "Los adjetivos en -ed describen cómo se SIENTE una persona (el efecto que algo le produce):\n\n• I'm bored. · She is tired. · He was surprised.\n• We were excited. · They felt confused.\n\nVan con personas (o con seres que sienten).",
      [
        ["I'm bored. There is nothing to do.", 'Estoy aburrido. No hay nada que hacer.'],
        ['She was surprised by the news.', 'Ella se sorprendió con la noticia.'],
        ['We were excited about the trip.', 'Estábamos emocionados por el viaje.'],
        ['They felt confused.', 'Se sintieron confundidos.'],
      ]
    ),
    teoria(
      '7 · Adjetivos terminados en -ing',
      "📖 Del libro: los adjetivos en -ing describen la COSA o PERSONA que produce ese sentimiento:\n\n• The film is boring. (me aburre)\n• The news was surprising.\n• It was an exciting trip.\n• The instructions are confusing.\n\nTambién se usan para personas cuando describen su efecto: «He is a boring person».",
      [
        ['The film is boring.', 'La película es aburrida.'],
        ['The news was surprising.', 'La noticia fue sorprendente.'],
        ['It was an exciting trip.', 'Fue un viaje emocionante.'],
        ['The instructions are confusing.', 'Las instrucciones son confusas.'],
      ]
    ),
    teoria(
      '8 · -ed o -ing: ¿cuál uso?',
      "Pregúntate: ¿quién siente (-ed) o qué lo produce (-ing)?\n\n• I'm bored because the film is boring.\n• She is interested in history. History is interesting.\n• We were tired after a tiring day.\n• I'm confused. The map is confusing.\n\nParejas comunes: bored / boring · interested / interesting · excited / exciting · tired / tiring · surprised / surprising · confused / confusing.",
      [
        ["I'm bored because the film is boring.", 'Estoy aburrido porque la película es aburrida.'],
        ['She is interested in history.', 'A ella le interesa la historia.'],
        ['History is interesting.', 'La historia es interesante.'],
        ["I'm confused. The map is confusing.", 'Estoy confundido. El mapa es confuso.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Casi seguro: sí', suj('He'), aux('must'), verbo('be'), resto('tired')),
    fl('Casi seguro: no', suj('He'), aux("can't"), verbo('be'), resto('here')),
    fl('Posible', suj('She'), aux('might'), verbo('be'), resto('late')),
    fl('Pasado', suj('She'), aux('must have'), verbo('forgotten')),
  ],
  table: {
    cols: ['Seguridad', 'Modal', 'Ejemplo'],
    rows: [
      ['casi seguro que sí', 'must', 'He must be tired.'],
      ['posible', 'may / might / could', 'He might be late.'],
      ['casi seguro que no', "can't", "He can't be here."],
      ['ahora (en curso)', 'modal + be + -ing', 'He must be working.'],
      ['pasado', 'modal + have + participio', 'She must have forgotten.'],
    ],
  },
  contrastCard: {
    left: { label: 'Adjetivo -ed — cómo se siente', example: "I'm bored.", highlight: 'bored' },
    right: { label: 'Adjetivo -ing — qué lo produce', example: 'The film is boring.', highlight: 'boring' },
    caption: '-ed describe a quien siente. -ing describe lo que produce el sentimiento.',
  },
  quiz: [
    ejercicio(
      'You have been working all day. You ___ be tired.',
      'must',
      ["can't", 'might not', 'ought'],
      'Con evidencia (trabajó todo el día), se deduce que seguramente está cansado: must be. can\'t sería lo contrario, might not no es una deducción fuerte y ought necesita to.'
    ),
    ejercicio(
      "She is in London this week. She ___ be at the party.",
      "can't",
      ['must', 'might to', 'ought'],
      'Si está en Londres, es casi seguro que no está en la fiesta: can\'t be. must diría lo contrario, might to lleva to de más y ought necesita to.'
    ),
    ejercicio(
      'I\'m not sure where he is. He ___ be at home.',
      'might',
      ['must to', 'mights', 'can\'t'],
      'Para una posibilidad sin seguridad se usa might + verbo base. must to y mights no existen y can\'t indicaría que es casi imposible.'
    ),
    ejercicio(
      'The film was very ___. I fell asleep. (it bored me)',
      'boring',
      ['bored', 'bore', 'boringly'],
      'Se describe la película (lo que produce el aburrimiento), así que se usa -ing: boring. bored describe a quien se aburre, bore es verbo y boringly es adverbio.'
    ),
    ejercicio(
      'I was very ___ by the news. I did not expect it.',
      'surprised',
      ['surprising', 'surprise', 'surprisingly'],
      'Se describe cómo se siente la persona, así que se usa -ed: surprised. surprising describe lo que produce el sentimiento, surprise es sustantivo o verbo y surprisingly es adverbio.'
    ),
  ],
  flashcards: [
    tarjeta('Especular: grados', "must → casi seguro que sí\nmay / might / could → posible\ncan't → casi seguro que no"),
    tarjeta('Ahora', 'modal + be + -ing\nHe must be working. · She might be sleeping.'),
    tarjeta('Pasado', 'modal + have + participio\nShe must have forgotten. · He might have missed the bus.'),
    tarjeta('-ed e -ing', '-ed: cómo se siente quien lo recibe (bored)\n-ing: lo que lo produce (boring)'),
    tarjeta('Parejas', 'bored / boring · interested / interesting\nexcited / exciting · tired / tiring · confused / confusing'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Where is Ana? She isn't answering her phone.", translation: '¿Dónde está Ana? No contesta su teléfono.' },
    { speaker: 'user', text: 'She might be sleeping. She was working very late yesterday.', translation: 'Puede que esté durmiendo. Ayer trabajó hasta muy tarde.' },
    { speaker: 'other', text: "She can't be sleeping. It's four in the afternoon!", translation: '¡No puede estar durmiendo. Son las cuatro de la tarde!' },
    { speaker: 'user', text: 'Then she must have forgotten her phone at home.', translation: 'Entonces seguro que olvidó el teléfono en casa.' },
    { speaker: 'other', text: 'Maybe. I was really surprised when she did not come. It was surprising news!', translation: 'Quizás. Me sorprendí mucho cuando no vino. ¡Fue una noticia sorprendente!' },
    { speaker: 'user', text: "Don't be worried. It could be nothing. Let's wait a bit.", translation: 'No te preocupes. Podría no ser nada. Esperemos un poco.' },
  ],
  readingText: {
    title: 'A mystery in the office',
    body: "This morning something strange happened. Ana's desk was empty and her computer was still on. She must have left in a hurry. Her coat wasn't there, so she can't be in the building. Some people think she might be sick; others say she could be at a meeting. Our boss was surprised. \"It's very strange,\" he said. \"Ana is never late.\" We were all confused. Then Ana called. \"Sorry, I'm still at the hospital. My brother had an accident, but he's fine.\" What a worrying and tiring morning!",
    translation:
      'Esta mañana pasó algo extraño. El escritorio de Ana estaba vacío y su computadora seguía encendida. Seguro que se fue con prisa. Su abrigo no estaba, así que no puede estar en el edificio. Algunos piensan que puede estar enferma; otros dicen que podría estar en una reunión. Nuestro jefe se sorprendió. «Es muy extraño», dijo. «Ana nunca llega tarde». Todos estábamos confundidos. Entonces Ana llamó. «Perdón, todavía estoy en el hospital. Mi hermano tuvo un accidente, pero está bien». ¡Qué mañana preocupante y agotadora!',
  },
  tips: [
    "Must (casi seguro que sí), may / might / could (posible), can't (casi seguro que no). Todos van con el verbo base.",
    "Para especular sobre el pasado usa modal + have + participio: «She must have forgotten».",
    "-ed describe a la persona que siente (I'm bored). -ing describe lo que lo produce (the film is boring).",
    "No uses mustn't para deducir: se dice can't. «He can't be at home», no «He mustn't be at home».",
  ],
  dailyWords: palabras('bored', 'excited', 'surprised', 'confused', 'worried', 'tired'),
  relacionados: [
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
  ],
};

// ─── Unidad 12 (id 57) · Voz pasiva en presente y pasado simple ───

const UNIDAD_57: Unit = {
  title: 'Passive Voice: Present and Past Simple, By + Agent, Adverbs',
  topic: BLOQUE_B1_4,
  level: 'B1',
  explain: [
    teoria(
      '1 · La voz pasiva: ¿para qué sirve?',
      "En la voz activa el sujeto hace la acción: «Many people speak English». En la voz pasiva el sujeto recibe la acción: «English is spoken in many countries».\n\nSe usa la pasiva cuando:\n• no importa quién hace la acción o no se sabe: «My car was stolen».\n• lo importante es lo que le pasa a algo: «The bridge was built in 1990».\n\nEn español usamos «se» o «fue»: «se habla inglés», «fue construido».",
      [
        ['Many people speak English.', 'Mucha gente habla inglés.'],
        ['English is spoken in many countries.', 'En muchos países se habla inglés.'],
        ['My car was stolen.', 'Me robaron el auto.'],
        ['The bridge was built in 1990.', 'El puente fue construido en 1990.'],
      ]
    ),
    teoria(
      '2 · Presente simple pasivo: am / is / are + participio',
      "Se forma con am / is / are + participio pasado:\n\n• Cars are made in this factory.\n• English is spoken here.\n• The office is cleaned every day.\n• I am paid on Fridays.\n\nEl participio es el verbo principal; el auxiliar concuerda con el sujeto (singular is, plural are).",
      [
        ['Cars are made in this factory.', 'Los autos se fabrican en esta fábrica.'],
        ['English is spoken here.', 'Aquí se habla inglés.'],
        ['The office is cleaned every day.', 'La oficina se limpia todos los días.'],
        ['I am paid on Fridays.', 'Me pagan los viernes.'],
      ]
    ),
    teoria(
      '3 · Pasado simple pasivo: was / were + participio',
      "Se forma con was / were + participio pasado:\n\n• The window was broken last night.\n• My bag was stolen on the bus.\n• These houses were built in 1950.\n• We were invited to the party.\n\nWas con singular (I, he, she, it); were con plural (you, we, they).",
      [
        ['The window was broken last night.', 'La ventana se rompió anoche.'],
        ['My bag was stolen on the bus.', 'Me robaron la bolsa en el bus.'],
        ['These houses were built in 1950.', 'Estas casas fueron construidas en 1950.'],
        ['We were invited to the party.', 'Nos invitaron a la fiesta.'],
      ]
    ),
    teoria(
      '4 · Negativa y preguntas en la pasiva',
      "• Negativa: not después de am / is / are / was / were: «The room isn't cleaned every day» · «The car wasn't repaired».\n• Pregunta: el auxiliar va antes del sujeto: «Is English spoken here?» · «Was the window broken?».\n• Información: «When was it built?» · «Where are they made?».\n\nRespuesta corta: Yes, it is. · No, it wasn't.",
      [
        ["The room isn't cleaned every day.", 'La habitación no se limpia todos los días.'],
        ['Is English spoken here?', '¿Aquí se habla inglés?'],
        ['When was the bridge built?', '¿Cuándo se construyó el puente?'],
        ["Was the car repaired? No, it wasn't.", '¿Repararon el auto? No.'],
      ]
    ),
    teoria(
      '5 · De activa a pasiva: cómo se convierte',
      "Para pasar una oración activa a pasiva:\n1. El objeto de la activa pasa a ser el sujeto.\n2. Se usa be (en el mismo tiempo que el verbo activo) + participio.\n3. El sujeto de la activa pasa al final con by (si interesa).\n\n• Active: Picasso painted this picture.\n• Passive: This picture was painted by Picasso.\n• Active: They make cars here.\n• Passive: Cars are made here.",
      [
        ['Picasso painted this picture.', 'Picasso pintó este cuadro.'],
        ['This picture was painted by Picasso.', 'Este cuadro fue pintado por Picasso.'],
        ['They make cars here.', 'Aquí fabrican autos.'],
        ['Cars are made here.', 'Aquí se fabrican autos.'],
      ]
    ),
    teoria(
      '6 · By + agente',
      "By + agente dice quién hizo la acción, y solo se usa cuando es importante o interesante:\n\n• The Mona Lisa was painted by Leonardo da Vinci.\n• The book was written by a famous author.\n• I was woken up by the noise.\n\nNo se usa by cuando el agente no importa o no se sabe: «My car was stolen» (no «by someone»).",
      [
        ['The Mona Lisa was painted by Leonardo da Vinci.', 'La Mona Lisa fue pintada por Leonardo da Vinci.'],
        ['The book was written by a famous author.', 'El libro fue escrito por un autor famoso.'],
        ['I was woken up by the noise.', 'Me despertó el ruido.'],
        ['The song was sung by a young girl.', 'La canción fue cantada por una niña.'],
      ]
    ),
    teoria(
      '7 · Adverbios con la voz pasiva',
      "Los adverbios de frecuencia y de grado (always, never, often, usually, already, still, just, probably, also) van entre el auxiliar y el participio:\n\n• The shop is always cleaned in the morning.\n• The house was just sold.\n• The room has already been cleaned.\n• This film is usually seen by teenagers.\n\nLos adverbios de lugar y tiempo (here, yesterday, in Peru) van al final.",
      [
        ['The shop is always cleaned in the morning.', 'La tienda siempre se limpia por la mañana.'],
        ['The house was just sold.', 'La casa acaba de ser vendida.'],
        ['The room has already been cleaned.', 'La habitación ya fue limpiada.'],
        ['This film is usually seen by teenagers.', 'Esta película suelen verla los adolescentes.'],
      ]
    ),
    teoria(
      '8 · Verbos que se usan mucho en pasiva',
      "Algunos verbos aparecen casi siempre en pasiva:\n\n• be born (nacer) · be made of (estar hecho de) · be called (llamarse)\n• be known as (ser conocido como) · be located in (estar ubicado en)\n• be used for (usarse para) · be married to (estar casado con)\n\nEjemplos: «She was born in Lima» · «This table is made of wood» · «The city is called Cusco».",
      [
        ['She was born in Lima.', 'Ella nació en Lima.'],
        ['This table is made of wood.', 'Esta mesa está hecha de madera.'],
        ['The city is called Cusco.', 'La ciudad se llama Cusco.'],
        ['It is used for cutting bread.', 'Se usa para cortar pan.'],
      ]
    ),
    teoria(
      '9 · Activa o pasiva: ¿cuál elijo?',
      "• Activa: cuando el que hace la acción es importante y se conoce: «Tom broke the window».\n• Pasiva: cuando lo importante es la acción o el que la recibe, o no se sabe quién la hizo: «The window was broken».\n\nEn textos de noticias, ciencia y normas se usa mucho la pasiva: «The new law was approved yesterday».",
      [
        ['Tom broke the window.', 'Tom rompió la ventana.'],
        ['The window was broken.', 'La ventana se rompió.'],
        ['The new law was approved yesterday.', 'La nueva ley fue aprobada ayer.'],
        ['Two people were injured in the accident.', 'Dos personas resultaron heridas en el accidente.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Presente pasivo', resto('Cars'), aux('are'), verbo('made')),
    fl('Pasado pasivo', resto('The window'), aux('was'), verbo('broken')),
    fl('Con by', resto('painted'), aux('by'), suj('Picasso')),
    fl('Con adverbio', resto('is'), resto('always'), verbo('cleaned')),
  ],
  table: {
    cols: ['Tiempo', 'Activa', 'Pasiva'],
    rows: [
      ['presente simple', 'They make cars.', 'Cars are made.'],
      ['pasado simple', 'Picasso painted it.', 'It was painted by Picasso.'],
      ['negativa', "They didn't fix it.", "It wasn't fixed."],
      ['pregunta', 'Did they build it?', 'Was it built?'],
    ],
  },
  contrastCard: {
    left: { label: 'Activa — el sujeto hace', example: 'Picasso painted this picture.', highlight: 'Picasso painted' },
    right: { label: 'Pasiva — el sujeto recibe', example: 'This picture was painted by Picasso.', highlight: 'was painted' },
    caption: 'En la pasiva el objeto pasa a ser el sujeto; el que hace la acción va al final con by.',
  },
  quiz: [
    ejercicio(
      'English ___ in many countries.',
      'is spoken',
      ['speaks', 'is speaking', 'speak'],
      'El sujeto (English) recibe la acción, así que va pasiva: is spoken. speaks y speak son activas y is speaking es presente continuo.'
    ),
    ejercicio(
      'My bag ___ on the bus yesterday.',
      'was stolen',
      ['stole', 'is stolen', 'were stolen'],
      'La acción es del pasado y el sujeto la recibe: was stolen. stole es activa, is stolen es presente y were no concuerda con bag.'
    ),
    ejercicio(
      'These houses ___ in 1950.',
      'were built',
      ['was built', 'are built', 'built'],
      'houses es plural y in 1950 es pasado: were built. was built no concuerda, are built es presente y built solo es activa.'
    ),
    ejercicio(
      'The Mona Lisa was painted ___ Leonardo da Vinci.',
      'by',
      ['from', 'of', 'with'],
      'Para decir quién hizo la acción en la pasiva se usa by. from, of y with no introducen al agente.'
    ),
    ejercicio(
      'The room ___ cleaned every day.',
      'is always',
      ['always is', 'does always', 'is being always'],
      'En la pasiva el adverbio de frecuencia va entre el auxiliar y el participio: «is always cleaned». Las demás opciones tienen mal el orden o el auxiliar.'
    ),
  ],
  flashcards: [
    tarjeta('Presente simple pasivo', 'am / is / are + participio\nCars are made here. · English is spoken.'),
    tarjeta('Pasado simple pasivo', 'was / were + participio\nThe window was broken. · The houses were built.'),
    tarjeta('Activa → pasiva', 'El objeto pasa a ser el sujeto.\nPicasso painted it. → It was painted by Picasso.'),
    tarjeta('By + agente', 'Solo si es importante quién lo hizo.\nThe book was written by a famous author.'),
    tarjeta('Adverbios', 'Van entre el auxiliar y el participio:\nis always cleaned · was just sold'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Where is this watch made?', translation: '¿Dónde se fabrica este reloj?' },
    { speaker: 'user', text: "It's made in Switzerland. They are known for good watches.", translation: 'Se fabrica en Suiza. Son conocidos por sus buenos relojes.' },
    { speaker: 'other', text: 'And who was the company founded by?', translation: '¿Y quién fundó la empresa?' },
    { speaker: 'user', text: 'It was founded by two brothers in 1920. The first watch was sold in Paris.', translation: 'Fue fundada por dos hermanos en 1920. El primer reloj se vendió en París.' },
    { speaker: 'other', text: 'Is it still made by hand?', translation: '¿Todavía se hace a mano?' },
    { speaker: 'user', text: "Yes, every watch is checked carefully before it's sold.", translation: 'Sí, cada reloj se revisa con cuidado antes de venderlo.' },
  ],
  readingText: {
    title: 'The history of a bridge',
    body: "The Golden Bridge was built in 1932, and it was designed by a young engineer. The materials were brought from other cities by train. About ten thousand workers were employed, and the bridge was completed in four years. It is visited by millions of tourists every year, and it is always painted in a bright color. Last year the bridge was closed for a week because it was damaged by a storm. Today it is considered one of the most beautiful bridges in the country.",
    translation:
      'El Puente Dorado se construyó en 1932 y lo diseñó un joven ingeniero. Los materiales fueron traídos de otras ciudades en tren. Se contrató a unos diez mil trabajadores y el puente se terminó en cuatro años. Lo visitan millones de turistas cada año y siempre se pinta de un color brillante. El año pasado el puente se cerró por una semana porque una tormenta lo dañó. Hoy se considera uno de los puentes más hermosos del país.',
  },
  tips: [
    "En la pasiva el auxiliar concuerda con el sujeto: «The car is repaired», «The cars are repaired».",
    "Presente: am / is / are + participio. Pasado: was / were + participio. El verbo principal siempre va en participio.",
    'By + agente solo si importa: «painted by Picasso». Si no se sabe o no importa, se omite: «My car was stolen».',
    "Los adverbios van entre el auxiliar y el participio: «is always cleaned», «was just sold».",
  ],
  dailyWords: palabras('bridge', 'building', 'factory', 'history', 'museum', 'company'),
  relacionados: [
    { etiqueta: '📖 Gramática: La Voz Pasiva (Passive Voice)', ruta: '/gramatica/concepto/la-voz-pasiva-passive-voice' },
    { etiqueta: '📖 Gramática: El Participio Pasado (Past Participle)', ruta: '/gramatica/concepto/el-participio-pasado-past-participle' },
  ],
};

const FORMAS_57: FormasUnidad = {
  titulo: 'Voz pasiva (presente y pasado simple)',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('be (is / was)'), verbo('past participle'))],
    ejemplos: [
      ['Cars are made in this factory.', 'Los autos se fabrican en esta fábrica.'],
      ['The window was broken.', 'La ventana se rompió.'],
      ['These houses were built in 1950.', 'Estas casas fueron construidas en 1950.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('is / are / was / were'), neg('not'), verbo('past participle'))],
    ejemplos: [
      ["The room isn't cleaned every day.", 'La habitación no se limpia todos los días.'],
      ["The car wasn't repaired.", 'El auto no fue reparado.'],
      ["They weren't invited.", 'No los invitaron.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Is / Are / Was / Were'), suj('subject'), verbo('past participle'))],
    ejemplos: [
      ['Is English spoken here?', '¿Aquí se habla inglés?'],
      ['Was the window broken?', '¿Se rompió la ventana?'],
      ['When was the bridge built?', '¿Cuándo se construyó el puente?'],
    ],
  },
  nota: "El auxiliar concuerda con el sujeto (is / are, was / were). Respuestas cortas: Yes, it is. / No, it wasn't. By + agente solo si importa quién lo hizo.",
  ojo: "El verbo principal va en participio y siempre hace falta el auxiliar be: «The car was stolen», no «The car stolen».",
};

/** Las unidades del bloque 4, por id interno. */
export const UNIDADES_BLOQUE_4: Record<number, Unit> = {
  55: UNIDAD_55,
  56: UNIDAD_56,
  57: UNIDAD_57,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 4 que las tienen. */
export const FORMAS_BLOQUE_4: Record<number, FormasUnidad | FormasUnidad[]> = {
  55: FORMAS_55,
  57: FORMAS_57,
};
