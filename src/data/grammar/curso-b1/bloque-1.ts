import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B1_1 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 1 · Personalidad, experiencias y superlativos (ids 46–48: Unidad 1–3 del nivel B1).

// ─── Unidad 1 (id 46) · Adjetivos y adverbios de modo, adverbios de grado, prefijos ───

const UNIDAD_46: Unit = {
  title: 'Adjectives vs Adverbs of Manner, Adverbs Before Adjectives, Adjective Prefixes',
  topic: BLOQUE_B1_1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Adjetivo o adverbio: ¿qué modifica?',
      "El adjetivo describe un sustantivo (una persona o cosa). El adverbio de modo describe un verbo: dice CÓMO se hace la acción.\n\n• Adjetivo: She is a careful driver. (describe a driver)\n• Adverbio: She drives carefully. (describe drives)\n\nPregunta clave: ¿describo una cosa o una acción? Una cosa → adjetivo. Una acción → adverbio.",
      [
        ['She is a careful driver.', 'Ella es una conductora cuidadosa.'],
        ['She drives carefully.', 'Ella maneja con cuidado.'],
        ['He is a slow walker.', 'Él es un caminante lento.'],
        ['He walks slowly.', 'Él camina despacio.'],
      ]
    ),
    teoria(
      '2 · Cómo se forman los adverbios de modo',
      "Casi siempre se agrega -ly al adjetivo:\n\n• quick → quickly · careful → carefully\n• consonante + y: la y cambia a i → easy → easily · happy → happily\n• termina en -le: se cambia la e por y → gentle → gently · simple → simply\n• termina en -ic: + ally → automatic → automatically\n\nIrregular: good → well. «She sings well», no «She sings good».",
      [
        ['He answered the question quickly.', 'Él respondió la pregunta rápido.'],
        ['The children played happily.', 'Los niños jugaron felices.'],
        ['She speaks English well.', 'Ella habla bien inglés.'],
        ['Please close the door gently.', 'Por favor, cierra la puerta con suavidad.'],
      ]
    ),
    teoria(
      '3 · Adverbios que no cambian y adverbios con dos formas',
      "Algunos adverbios tienen la misma forma que el adjetivo: fast, hard, late, early.\n\n• He runs fast. · She works hard. · They arrived late.\n\nAlgunos tienen una forma con -ly con otro significado:\n• hard (duro) / hardly (casi no): «He works hard» · «He hardly works».\n• late (tarde) / lately (últimamente).\n• near (cerca) / nearly (casi).\n\n⚠️ Ojo: «He works hardly» no significa «trabaja duro».",
      [
        ['He runs fast.', 'Él corre rápido.'],
        ['She works hard.', 'Ella trabaja duro.'],
        ['I hardly know him.', 'Casi no lo conozco.'],
        ["I haven't seen her lately.", 'No la he visto últimamente.'],
      ]
    ),
    teoria(
      '4 · Verbos de sentido y de estado: adjetivo, no adverbio',
      "📖 Del libro: después de be, look, feel, sound, smell, taste, seem y become se usa un ADJETIVO, porque describe al sujeto, no la acción.\n\n• She looks happy. (no «happily»)\n• The soup tastes delicious.\n• That sounds interesting.\n• He became angry.\n\nPero si el verbo es de acción, se usa adverbio: «She looked at me angrily» (la mirada fue de enojo).",
      [
        ['She looks happy today.', 'Hoy ella se ve feliz.'],
        ['The soup tastes delicious.', 'La sopa sabe deliciosa.'],
        ['That sounds interesting.', 'Eso suena interesante.'],
        ['She looked at me angrily.', 'Ella me miró con enojo.'],
      ]
    ),
    teoria(
      '5 · Adverbios antes de adjetivos: very, really, quite…',
      "Antes de un adjetivo se pueden poner adverbios de grado que dicen CUÁNTO tiene esa cualidad:\n\n• very · really · extremely → mucho: It's very cold.\n• quite · pretty · fairly → bastante: It's quite cold.\n• rather → algo más de lo esperado: It's rather cold.\n• a bit · slightly → un poco: It's a bit cold.\n• too → demasiado: It's too cold.\n\nVan antes del adjetivo, nunca después: «really tired», no «tired really».",
      [
        ["It's very cold today.", 'Hoy hace mucho frío.'],
        ["She's really tired.", 'Ella está muy cansada.'],
        ['The film was quite good.', 'La película estuvo bastante buena.'],
        ['The water is a bit warm.', 'El agua está un poco tibia.'],
      ]
    ),
    teoria(
      '6 · Adverbios antes de adverbios',
      "Los mismos adverbios de grado se ponen antes de otro adverbio:\n\n• She speaks very quickly.\n• He plays really well.\n• They arrived quite late.\n• He drove extremely carefully.\n• She works too slowly.\n\nSirven para matizar CÓMO se hace algo: muy bien, bastante tarde, demasiado despacio.",
      [
        ['She speaks very quickly.', 'Ella habla muy rápido.'],
        ['He plays really well.', 'Él juega muy bien.'],
        ['They arrived quite late.', 'Llegaron bastante tarde.'],
        ['He drove extremely carefully.', 'Él manejó con muchísimo cuidado.'],
      ]
    ),
    teoria(
      '7 · Quite, pretty y rather',
      "📖 Del libro: los tres significan «bastante», pero con matices:\n\n• fairly → menos que quite: «The room is fairly big».\n• quite / pretty → bastante, un grado medio-alto: «The film was quite good» · «It's pretty cold» (pretty es más informal).\n• rather → más de lo que se esperaba; suele ser algo negativo o sorprendente: «It's rather expensive» · «The test was rather difficult».\n\nQuite no se usa para opiniones fuertes con adjetivos extremos.",
      [
        ['The room is fairly big.', 'La habitación es bastante grande.'],
        ["It's pretty cold outside.", 'Hace bastante frío afuera.'],
        ["It's rather expensive.", 'Es bastante caro (más de lo que esperaba).'],
        ['The test was rather difficult.', 'El examen fue bastante difícil.'],
      ]
    ),
    teoria(
      '8 · Adjetivos extremos: absolutely, completely, totally',
      "Los adjetivos extremos (fantastic, terrible, exhausted, delicious, awful) ya significan «muy». No se usan con very:\n\n• The film was absolutely fantastic. (no «very fantastic»)\n• I'm completely exhausted.\n• The food was totally awful.\n\nSe combinan con absolutely, completely, totally, really. Con adjetivos normales (good, tired, cold) se usa very.",
      [
        ['The film was absolutely fantastic.', 'La película fue absolutamente fantástica.'],
        ["I'm completely exhausted.", 'Estoy completamente agotado.'],
        ['The food was totally awful.', 'La comida fue totalmente horrible.'],
        ["The film was very good.", 'La película fue muy buena.'],
      ]
    ),
    teoria(
      '9 · Prefijos de adjetivos: un-, in-, im-, il-, ir-, dis-',
      "Para formar el opuesto de un adjetivo se le agrega un prefijo:\n\n• un- (el más común): happy → unhappy · usual → unusual\n• in-: correct → incorrect · formal → informal\n• im- (antes de p y m): possible → impossible · polite → impolite\n• il- (antes de l): legal → illegal\n• ir- (antes de r): regular → irregular · responsible → irresponsible\n• dis-: honest → dishonest\n\nNo hay una regla segura para elegir: se aprende con cada adjetivo.",
      [
        ['She is unhappy with her job.', 'Ella está descontenta con su trabajo.'],
        ["It's impossible to park here.", 'Es imposible estacionar aquí.'],
        ['That is illegal in my country.', 'Eso es ilegal en mi país.'],
        ['He was dishonest with me.', 'Él fue deshonesto conmigo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Adjetivo + sustantivo', resto('a'), verbo('careful'), suj('driver')),
    fl('Verbo + adverbio', suj('She'), verbo('drives'), resto('carefully')),
    fl('Adverbio + adjetivo', resto('really'), verbo('tired')),
    fl('Adverbio + adverbio', resto('very'), verbo('quickly')),
  ],
  table: {
    cols: ['Adjetivo', 'Adverbio', 'Regla'],
    rows: [
      ['quick', 'quickly', '+ ly'],
      ['easy', 'easily', 'y → ily'],
      ['gentle', 'gently', 'le → ly'],
      ['automatic', 'automatically', 'ic → ically'],
      ['good', 'well', 'irregular'],
      ['fast', 'fast', 'no cambia'],
      ['hard', 'hard / hardly', 'dos formas, distinto significado'],
    ],
  },
  contrastCard: {
    left: { label: 'Adjetivo — describe una cosa', example: 'She is a careful driver.', highlight: 'careful' },
    right: { label: 'Adverbio — describe una acción', example: 'She drives carefully.', highlight: 'carefully' },
    caption: 'Adjetivo con sustantivo y con be, look, feel… Adverbio con verbos de acción.',
  },
  quiz: [
    ejercicio(
      'She sings ___.',
      'beautifully',
      ['beautiful', 'beauty', 'more beautiful'],
      'Se describe cómo canta (una acción), así que va un adverbio: beautifully. beautiful es adjetivo, beauty es sustantivo y more beautiful es un comparativo.'
    ),
    ejercicio(
      'The soup smells ___.',
      'delicious',
      ['deliciously', 'deliciousness', 'delicioused'],
      'Después de smell (verbo de sentido) se usa un adjetivo, porque describe a la sopa: «smells delicious». deliciously es adverbio y las otras formas no existen.'
    ),
    ejercicio(
      'He drives very ___.',
      'carefully',
      ['careful', 'care', 'carefulness'],
      'very se pone antes de otro adverbio para modificar cómo maneja: «very carefully». careful es adjetivo y care y carefulness son sustantivos.'
    ),
    ejercicio(
      'Choose the correct sentence.',
      'The exam was absolutely terrible.',
      ['The exam was very terrible.', 'The exam was terribly difficultly.', 'The exam was terrible absolutely.'],
      'terrible es un adjetivo extremo y se combina con absolutely, no con very. Además, el adverbio va antes del adjetivo, no después.'
    ),
    ejercicio(
      "It's ___ to park here. It's against the law.",
      'illegal',
      ['unlegal', 'inlegal', 'dislegal'],
      'El opuesto de legal es illegal: delante de la l se usa il-. unlegal, inlegal y dislegal no existen.'
    ),
  ],
  flashcards: [
    tarjeta('Adjetivo o adverbio', 'Adjetivo → describe una cosa o persona: a careful driver.\nAdverbio → describe una acción: drives carefully.'),
    tarjeta('Formar adverbios', 'quick → quickly · easy → easily · gentle → gently\ngood → well · fast → fast · hard → hard'),
    tarjeta('Verbos de sentido', 'look, feel, sound, taste, smell, seem + ADJETIVO\nShe looks happy. · The soup tastes good.'),
    tarjeta('Quite, pretty, rather', 'fairly < quite / pretty < rather\nVan antes del adjetivo: quite good · rather expensive'),
    tarjeta('Prefijos', 'un- happy · in- correct · im- possible · il- legal · ir- regular · dis- honest'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'How was your driving test?', translation: '¿Cómo te fue en tu examen de manejo?' },
    { speaker: 'user', text: 'I was really nervous, but I drove carefully and I passed!', translation: 'Estaba muy nervioso, pero manejé con cuidado y aprobé.' },
    { speaker: 'other', text: "That's absolutely fantastic! Was the instructor strict?", translation: '¡Eso es absolutamente fantástico! ¿El instructor era estricto?' },
    { speaker: 'user', text: 'Quite strict, yes. But he spoke very clearly, so it was easy to understand him.', translation: 'Bastante estricto, sí. Pero hablaba muy claro, así que era fácil entenderlo.' },
    { speaker: 'other', text: 'I failed mine twice. I was unlucky and a bit careless.', translation: 'Yo reprobé el mío dos veces. Tuve mala suerte y fui algo descuidado.' },
    { speaker: 'user', text: "Don't worry. It's not impossible. You just need to practice slowly and calmly.", translation: 'No te preocupes. No es imposible. Solo necesitas practicar despacio y con calma.' },
  ],
  readingText: {
    title: 'A quiet evening',
    body: "Last night I was feeling rather tired, so I decided to cook something simple. The kitchen smelled wonderful when I opened the oven. I carefully put the dish on the table and sat down. The food tasted absolutely delicious. My brother came in late and looked really hungry, so I served him a big plate. He ate very quickly and said, \"This is quite possibly the best meal of the week!\" Later we watched a film. It was a bit boring, and we both fell asleep on the sofa.",
    translation:
      'Anoche me sentía bastante cansado, así que decidí cocinar algo sencillo. La cocina olía maravillosa cuando abrí el horno. Puse el plato con cuidado en la mesa y me senté. La comida sabía absolutamente deliciosa. Mi hermano llegó tarde y se veía muy hambriento, así que le serví un plato grande. Comió muy rápido y dijo: «¡Esta es posiblemente la mejor comida de la semana!». Más tarde vimos una película. Fue un poco aburrida y los dos nos dormimos en el sofá.',
  },
  tips: [
    'Si describes una acción usa adverbio (-ly); si describes una cosa o con look, feel, taste, sound, usa adjetivo.',
    "Good es adjetivo y well es adverbio: «She is a good singer» · «She sings well», no «sings good».",
    'Con adjetivos extremos (fantastic, terrible, exhausted) usa absolutely o completely, no very.',
    'Los prefijos im- (antes de p, m), il- (antes de l) e ir- (antes de r) se aprenden con cada palabra: impossible, illegal, irregular.',
  ],
  dailyWords: palabras('carefully', 'quickly', 'slowly', 'easily', 'really', 'quite'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
    { etiqueta: '📖 Gramática: El Adverbio (Adverb)', ruta: '/gramatica/concepto/el-adverbio-adverb' },
  ],
};

// ─── Unidad 2 (id 47) · Presente perfecto; presente perfecto y pasado simple en preguntas ───

const UNIDAD_47: Unit = {
  title: 'Present Perfect and Past Simple: Statements, Questions and Answers',
  topic: BLOQUE_B1_1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Presente perfecto: la forma',
      "Se forma con have / has + participio pasado:\n\n• I / you / we / they have worked\n• he / she / it has worked\n\nParticipio de los verbos regulares: igual que el pasado (-ed). Los irregulares hay que aprenderlos: go → gone · see → seen · eat → eaten · write → written.\n\nContracciones: I've, you've, he's, she's, we've, they've.",
      [
        ["I've worked here for two years.", 'He trabajado aquí dos años.'],
        ["She's seen that film three times.", 'Ella ha visto esa película tres veces.'],
        ["We've eaten at that restaurant.", 'Hemos comido en ese restaurante.'],
        ["They've written a new song.", 'Han escrito una canción nueva.'],
      ]
    ),
    teoria(
      '2 · Cuándo se usa: experiencias y resultados',
      "El presente perfecto conecta el pasado con el presente. Se usa para:\n\n• Experiencias de la vida (sin decir cuándo): «I've been to Peru».\n• Cosas que pasaron y tienen un resultado ahora: «I've lost my keys» (y no puedo entrar).\n• Noticias recientes: «The train has just left».\n\nNo se dice cuándo pasó: lo importante es que pasó, no el momento.",
      [
        ["I've been to Peru.", 'He estado en Perú.'],
        ["I've lost my keys.", 'Perdí mis llaves (y no las tengo).'],
        ['The train has just left.', 'El tren acaba de salir.'],
        ["She has broken her arm.", 'Ella se rompió el brazo.'],
      ]
    ),
    teoria(
      '3 · Ever, never, just, so far',
      "Estas palabras acompañan al presente perfecto:\n\n• ever (alguna vez) → en preguntas: Have you ever been to Spain?\n• never (nunca) → en afirmativas: I've never seen snow.\n• just (acaba de) → antes del participio: She has just arrived.\n• so far (hasta ahora): I've read three books so far.\n\nNever ya es negativo: no se agrega not. «I've never tried it», no «I haven't never tried it».",
      [
        ['Have you ever been to Spain?', '¿Has estado alguna vez en España?'],
        ["I've never seen snow.", 'Nunca he visto nieve.'],
        ['She has just arrived.', 'Ella acaba de llegar.'],
        ["I've read three books so far.", 'He leído tres libros hasta ahora.'],
      ]
    ),
    teoria(
      '4 · Been o gone',
      "Have been to significa que fuiste y volviste. Have gone to significa que fue y todavía está allá.\n\n• She has been to London. (estuvo y ya volvió)\n• She has gone to London. (está en Londres ahora)\n\nPor eso a una experiencia propia se le dice «I've been to…», no «I've gone to…».",
      [
        ["I've been to London twice.", 'He estado en Londres dos veces.'],
        ['She has been to Paris.', 'Ella ha estado en París (y ya volvió).'],
        ['He has gone to the bank.', 'Él fue al banco (y todavía no vuelve).'],
        ['Where has Tom gone?', '¿Adónde se ha ido Tom?'],
      ]
    ),
    teoria(
      '5 · Presente perfecto o pasado simple',
      "• Presente perfecto: no se dice cuándo, o el tiempo todavía no terminó (today, this week, so far, ever).\n• Pasado simple: se dice cuándo, o el tiempo ya terminó (yesterday, last week, in 2019, two years ago).\n\n• «I've seen that film.» (alguna vez)\n• «I saw that film last night.» (cuándo)\n\n⚠️ Ojo: con una fecha pasada nunca se usa presente perfecto: «I went to Paris in 2019», no «I have been to Paris in 2019».",
      [
        ["I've seen that film.", 'He visto esa película.'],
        ['I saw that film last night.', 'Vi esa película anoche.'],
        ['She has lived here since 2020.', 'Ella vive aquí desde 2020.'],
        ['She lived in Cusco in 2015.', 'Ella vivió en Cusco en 2015.'],
      ]
    ),
    teoria(
      '6 · Preguntas y respuestas cortas en presente perfecto',
      "• Pregunta: Have / Has + sujeto + participio → Have you finished? · Has she called?\n• Respuesta corta: Yes, I have. · No, she hasn't.\n• Negativa: haven't / hasn't + participio → I haven't seen it.\n\nLa respuesta corta repite have o has, no el verbo.",
      [
        ['Have you finished? Yes, I have.', '¿Terminaste? Sí.'],
        ["Has she called? No, she hasn't.", '¿Ella llamó? No.'],
        ["I haven't seen that film.", 'No he visto esa película.'],
        ["They haven't arrived yet.", 'Todavía no han llegado.'],
      ]
    ),
    teoria(
      '7 · Preguntas de información',
      "Con presente perfecto se preguntan cantidades y experiencias:\n\n• How many times have you been to Cusco?\n• What is the best film you've ever seen?\n• Who has Ana invited?\n• How long have you lived here?\n\nOjo con When…?: pregunta por un momento terminado, así que va en pasado simple: «When did you go?», no «When have you gone?».",
      [
        ['How many times have you been to Cusco?', '¿Cuántas veces has estado en Cusco?'],
        ["What is the best film you've ever seen?", '¿Cuál es la mejor película que has visto?'],
        ['Who has Ana invited?', '¿A quién ha invitado Ana?'],
        ['When did you go there?', '¿Cuándo fuiste allí?'],
      ]
    ),
    teoria(
      '8 · De una experiencia a un detalle',
      "Es común empezar con presente perfecto (la experiencia) y seguir con pasado simple (los detalles):\n\n• Have you ever been to Machu Picchu? — Yes, I have. I went there last year.\n• Has she visited London? — Yes, she has. She stayed for a week.\n\nLa primera pregunta no tiene tiempo definido; en cuanto se da un detalle (cuándo, dónde, con quién), se cambia a pasado simple.",
      [
        ['Have you been to Machu Picchu? Yes, I went there last year.', '¿Has estado en Machu Picchu? Sí, fui el año pasado.'],
        ['Has she visited London? Yes, she stayed for a week.', '¿Ella ha visitado Londres? Sí, se quedó una semana.'],
        ["Have you seen it? Yes, I saw it with my sister.", '¿Lo has visto? Sí, lo vi con mi hermana.'],
        ["Have you eaten ceviche? No, I haven't.", '¿Has comido ceviche? No.'],
      ]
    ),
    teoria(
      '9 · Participios irregulares comunes',
      "Estos participios aparecen todo el tiempo. Conviene aprenderlos:\n\n• be → been · do → done · go → gone · have → had\n• see → seen · eat → eaten · write → written · take → taken\n• buy → bought · make → made · say → said · find → found\n• break → broken · lose → lost · meet → met · speak → spoken",
      [
        ["I've done my homework.", 'Ya hice mi tarea.'],
        ["She's broken her phone.", 'Ella rompió su teléfono.'],
        ["We've met before.", 'Nos hemos visto antes.'],
        ["He hasn't spoken to me.", 'Él no me ha hablado.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Presente perfecto', suj('I'), aux('have'), verbo('been')),
    fl('Con ever / never', aux('Have'), suj('you'), resto('ever'), verbo('been?')),
    fl('Pasado + tiempo', suj('I'), verbo('went'), resto('last year')),
  ],
  table: {
    cols: ['Verbo', 'Pasado simple', 'Participio'],
    rows: [
      ['go', 'went', 'gone / been'],
      ['see', 'saw', 'seen'],
      ['eat', 'ate', 'eaten'],
      ['write', 'wrote', 'written'],
      ['take', 'took', 'taken'],
      ['buy', 'bought', 'bought'],
      ['work', 'worked', 'worked'],
    ],
  },
  contrastCard: {
    left: { label: 'Presente perfecto — sin cuándo', example: "I've seen that film.", highlight: "I've seen" },
    right: { label: 'Pasado simple — con cuándo', example: 'I saw it last night.', highlight: 'saw' },
    caption: 'Sin decir cuándo → presente perfecto. Con una fecha o un tiempo terminado → pasado simple.',
  },
  quiz: [
    ejercicio(
      'I have never ___ sushi. (eat)',
      'eaten',
      ['ate', 'eat', 'eated'],
      'Después de have va el participio pasado. El participio de eat es eaten. ate es el pasado simple, eat es la base y eated no existe.'
    ),
    ejercicio(
      '___ you ever been to Cusco?',
      'Have',
      ['Did', 'Do', 'Are'],
      'La pregunta del presente perfecto empieza con have o has: «Have you ever been…?». Did y Do no se combinan con el participio been.'
    ),
    ejercicio(
      'I ___ to Paris in 2019.',
      'went',
      ['have gone', 'have been', 'go'],
      'in 2019 es un tiempo terminado y concreto, así que se usa pasado simple: went. El presente perfecto no se usa con una fecha pasada.'
    ),
    ejercicio(
      "She has ___ her keys. She can't get in.",
      'lost',
      ['lose', 'loosed', 'losed'],
      'Después de has va el participio. El participio de lose es lost. lose es la base y loosed y losed no existen.'
    ),
    ejercicio(
      'A: Have you seen this film? B: Yes, ___.',
      'I have',
      ['I did', 'I do', 'I saw'],
      'La respuesta corta repite el auxiliar de la pregunta (have): «Yes, I have». I did, I do y I saw no corresponden a una pregunta con have.'
    ),
  ],
  flashcards: [
    tarjeta('Presente perfecto: forma', "have / has + participio\nI've worked · she's seen · they haven't arrived"),
    tarjeta('Presente perfecto: cuándo', 'Experiencias, resultados ahora y noticias recientes.\nNo se dice cuándo pasó.'),
    tarjeta('Ever, never, just', 'Have you ever…? · I\'ve never… · She has just…\nNever ya es negativo: «I\'ve never seen it».'),
    tarjeta('Been y gone', 'She has been to London. (ya volvió)\nShe has gone to London. (sigue allá)'),
    tarjeta('Perfecto o pasado', 'Sin tiempo → I\'ve seen it.\nCon tiempo terminado → I saw it last night.\nWhen…? siempre va en pasado.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Have you ever been to Machu Picchu?', translation: '¿Has estado alguna vez en Machu Picchu?' },
    { speaker: 'user', text: 'Yes, I have. I went there two years ago with my family.', translation: 'Sí. Fui hace dos años con mi familia.' },
    { speaker: 'other', text: 'Did you like it?', translation: '¿Te gustó?' },
    { speaker: 'user', text: "I loved it. It's the best place I've ever visited. Have you been?", translation: 'Me encantó. Es el mejor lugar que he visitado. ¿Tú has ido?' },
    { speaker: 'other', text: "No, I haven't. I've never been to Peru, but I've always wanted to go.", translation: 'No. Nunca he ido a Perú, pero siempre he querido ir.' },
    { speaker: 'user', text: "You should go! I've just seen some cheap flights online.", translation: '¡Deberías ir! Acabo de ver unos vuelos baratos en internet.' },
  ],
  readingText: {
    title: 'Around the world',
    body: "Maria has traveled a lot in her life. She has been to twelve countries and has lived in three of them. Last year she visited Japan for the first time. She stayed in Tokyo for two weeks and tried many new foods. She has never eaten raw fish before, but she loved it. Now she has just booked a trip to Argentina. Has she packed yet? No, she hasn't, but she has already written a list. \"I've learned one thing,\" she says. \"Traveling has changed the way I see the world.\"",
    translation:
      'María ha viajado mucho en su vida. Ha estado en doce países y ha vivido en tres de ellos. El año pasado visitó Japón por primera vez. Se quedó en Tokio dos semanas y probó muchas comidas nuevas. Nunca había comido pescado crudo, pero le encantó. Ahora acaba de reservar un viaje a Argentina. ¿Ya hizo la maleta? No, pero ya escribió una lista. «He aprendido algo», dice. «Viajar ha cambiado la manera en que veo el mundo».',
  },
  tips: [
    "Con una fecha o un tiempo terminado usa pasado simple: «I went in 2019», no «I have been in 2019».",
    'When…? siempre lleva pasado simple: «When did you go?», no «When have you gone?».',
    'Have been to = fue y volvió. Have gone to = fue y sigue allá.',
    "Never ya es negativo: «I've never tried it», no «I haven't never tried it».",
  ],
  dailyWords: palabras('experience', 'memory', 'dream', 'trip', 'abroad', 'recently'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Presente Perfecto (Present Perfect)', ruta: '/gramatica/concepto/el-presente-perfecto-present-perfect' },
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
  ],
};

const FORMAS_47: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('have / has'), verbo('past participle'))],
    ejemplos: [
      ["I've worked here for two years.", 'He trabajado aquí dos años.'],
      ["She's seen that film.", 'Ella ha visto esa película.'],
      ["They've just arrived.", 'Acaban de llegar.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('have / has'), neg('not'), verbo('past participle'))],
    ejemplos: [
      ["I haven't seen it.", 'No lo he visto.'],
      ["She hasn't called.", 'Ella no ha llamado.'],
      ["We haven't eaten yet.", 'Todavía no hemos comido.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Have / Has'), suj('subject'), verbo('past participle')),
      fl('Información', resto('What / How many…'), aux('have / has'), suj('subject'), verbo('past participle')),
    ],
    ejemplos: [
      ['Have you ever been to Spain?', '¿Has estado alguna vez en España?'],
      ['Has she finished?', '¿Ella terminó?'],
      ['How many times have you seen it?', '¿Cuántas veces lo has visto?'],
    ],
  },
  nota: "Contracciones: I've · she's · they've · haven't · hasn't. Respuestas cortas: Yes, I have. / No, she hasn't. Palabras que acompañan: ever, never, just, so far, yet, already.",
  ojo: "Con una fecha pasada se usa pasado simple: «I went in 2019», no «I have been in 2019». Y «When…?» va con pasado simple.",
};

// ─── Unidad 3 (id 48) · Superlativos y preguntas con How + adjetivo ───

const UNIDAD_48: Unit = {
  title: 'Superlatives and Questions with How + Adjective',
  topic: BLOQUE_B1_1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Superlativo con -est (adjetivos cortos)',
      "El superlativo dice que algo es el MÁXIMO de un grupo. Con adjetivos cortos (una sílaba) se agrega -est y siempre lleva the:\n\n• tall → the tallest\n• old → the oldest\n• nice → the nicest (+ st)\n• big → the biggest (se dobla la consonante)\n• happy → the happiest (y → iest)\n\n⚠️ Ojo: «the tallest», no «the most tall».",
      [
        ['He is the tallest boy in the class.', 'Él es el chico más alto de la clase.'],
        ['This is the oldest building in town.', 'Este es el edificio más antiguo del pueblo.'],
        ['She is the happiest person I know.', 'Ella es la persona más feliz que conozco.'],
        ['It was the biggest fish I have ever seen.', 'Fue el pez más grande que he visto.'],
      ]
    ),
    teoria(
      '2 · Superlativo con most y formas irregulares',
      "📖 Del libro: los adjetivos largos usan the most + adjetivo:\n\n• the most expensive · the most interesting · the most beautiful\n\nIrregulares:\n• good → the best\n• bad → the worst\n• far → the furthest / the farthest\n• little → the least · much / many → the most\n\nLos de dos sílabas terminados en -y usan -iest: the easiest · the funniest.",
      [
        ['This is the most expensive phone in the shop.', 'Este es el teléfono más caro de la tienda.'],
        ['It was the most interesting lesson of the week.', 'Fue la clase más interesante de la semana.'],
        ['She is the best player in the team.', 'Ella es la mejor jugadora del equipo.'],
        ['That was the worst day of my life.', 'Ese fue el peor día de mi vida.'],
      ]
    ),
    teoria(
      '3 · In y of después del superlativo',
      "Para decir en qué grupo es el máximo se usa in (lugar o grupo) o of (conjunto de personas o cosas):\n\n• the tallest in the class · the biggest city in the country\n• the best of all · the most expensive of the three\n\nIn va con lugares (in the world, in my family, in the class). Of va con plurales o números (of all, of the three, of my friends).",
      [
        ['He is the tallest in the class.', 'Él es el más alto de la clase.'],
        ['Lima is the biggest city in Peru.', 'Lima es la ciudad más grande de Perú.'],
        ['This one is the best of all.', 'Este es el mejor de todos.'],
        ['She is the youngest of my friends.', 'Ella es la más joven de mis amigos.'],
      ]
    ),
    teoria(
      '4 · Superlativo + presente perfecto + ever',
      "Para hablar de experiencias, el superlativo se combina con presente perfecto y ever:\n\n• It's the best film I've ever seen.\n• This is the most beautiful place we've ever visited.\n• She is the nicest person I've ever met.\n\nSe forma: superlativo + sustantivo + sujeto + have + participio + ever.",
      [
        ["It's the best film I've ever seen.", 'Es la mejor película que he visto.'],
        ["This is the most beautiful place we've ever visited.", 'Este es el lugar más hermoso que hemos visitado.'],
        ["She's the nicest person I've ever met.", 'Ella es la persona más amable que he conocido.'],
        ["It's the worst meal I've ever had.", 'Es la peor comida que he tenido.'],
      ]
    ),
    teoria(
      '5 · Superlativos con sustantivos: the most, the least, the fewest',
      "El superlativo también se usa con sustantivos para comparar cantidades:\n\n• the most + sustantivo → la mayor cantidad: the most people · the most money\n• the least + incontable → la menor cantidad: the least time · the least money\n• the fewest + contable plural → el menor número: the fewest mistakes · the fewest cars\n\nPregunta: Who has the most money? · Which team scored the fewest goals?",
      [
        ['Who has the most money in your family?', '¿Quién tiene más dinero en tu familia?'],
        ['She spends the least time on her phone.', 'Ella pasa menos tiempo en su teléfono que nadie.'],
        ['Which team scored the fewest goals?', '¿Qué equipo anotó menos goles?'],
        ['Brazil has the most players in the league.', 'Brasil tiene más jugadores en la liga.'],
      ]
    ),
    teoria(
      '6 · One of the + superlativo + plural',
      "Para decir que algo está entre los mejores (no que es el único) se usa one of the + superlativo + plural:\n\n• She is one of the best students.\n• It's one of the oldest cities in the world.\n• He is one of the tallest players in the team.\n\n⚠️ Ojo: el sustantivo va en plural: «one of the best films», no «one of the best film».",
      [
        ['She is one of the best students.', 'Ella es una de las mejores estudiantes.'],
        ["It's one of the oldest cities in the world.", 'Es una de las ciudades más antiguas del mundo.'],
        ['He is one of the tallest players in the team.', 'Él es uno de los jugadores más altos del equipo.'],
        ['This is one of the most popular songs.', 'Esta es una de las canciones más populares.'],
      ]
    ),
    teoria(
      '7 · Comparativo o superlativo',
      "• Comparativo: dos cosas → taller than · more expensive than.\n• Superlativo: tres o más, o un grupo entero → the tallest · the most expensive.\n\n• «My brother is taller than me.» (dos)\n• «My brother is the tallest in the family.» (todos)\n\nEl superlativo siempre lleva the (excepto con posesivos: «my best friend»).",
      [
        ['My brother is taller than me.', 'Mi hermano es más alto que yo.'],
        ['My brother is the tallest in the family.', 'Mi hermano es el más alto de la familia.'],
        ['This bag is more expensive than that one.', 'Esta bolsa es más cara que aquella.'],
        ['This is my best friend.', 'Esta es mi mejor amiga.'],
      ]
    ),
    teoria(
      '8 · Preguntas con How + adjetivo',
      "How + adjetivo pregunta por una medida o una cualidad:\n\n• How tall is she? → 1.70 meters.\n• How old is your house? → About 50 years old.\n• How far is the airport? → 20 kilometers.\n• How long is the river? · How deep is the lake? · How heavy is it?\n\nEl adjetivo va justo después de How, y después se pone el verbo to be y el sujeto.",
      [
        ['How tall is she?', '¿Cuánto mide ella?'],
        ['How old is your house?', '¿Qué antigüedad tiene tu casa?'],
        ['How far is the airport?', '¿A qué distancia está el aeropuerto?'],
        ['How deep is the lake?', '¿Qué tan profundo es el lago?'],
      ]
    ),
    teoria(
      '9 · How + adverbio y How much / many',
      "How también va con adverbios y con cantidades:\n\n• How often do you exercise? (frecuencia)\n• How well do you speak English?\n• How quickly can you finish?\n• How much does it cost? (incontable)\n• How many people came? (contable)\n• How long does it take? (duración)\n\nRespuestas típicas: Every day · Very well · Two hours · About ten.",
      [
        ['How often do you exercise?', '¿Con qué frecuencia haces ejercicio?'],
        ['How well do you speak English?', '¿Qué tan bien hablas inglés?'],
        ['How much does it cost?', '¿Cuánto cuesta?'],
        ['How long does it take to get there?', '¿Cuánto se tarda en llegar allí?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Corto: the + -est', resto('the'), verbo('tallest'), resto('in the class')),
    fl('Largo: the most', resto('the most'), verbo('expensive'), resto('of all')),
    fl('Superlativo + ever', resto('the best film'), suj('I'), aux("'ve"), resto('ever'), verbo('seen')),
    fl('How + adjetivo', resto('How'), verbo('tall'), aux('is'), suj('she?')),
  ],
  table: {
    cols: ['Adjetivo', 'Comparativo', 'Superlativo'],
    rows: [
      ['tall', 'taller', 'the tallest'],
      ['big', 'bigger', 'the biggest'],
      ['happy', 'happier', 'the happiest'],
      ['expensive', 'more expensive', 'the most expensive'],
      ['good', 'better', 'the best'],
      ['bad', 'worse', 'the worst'],
      ['far', 'further', 'the furthest'],
    ],
  },
  contrastCard: {
    left: { label: 'Comparativo — dos', example: 'He is taller than me.', highlight: 'taller than' },
    right: { label: 'Superlativo — el máximo', example: 'He is the tallest in the class.', highlight: 'the tallest' },
    caption: 'Comparativo con than para dos cosas. Superlativo con the para el máximo de un grupo.',
  },
  quiz: [
    ejercicio(
      'Mount Everest is ___ mountain in the world.',
      'the highest',
      ['higher', 'the most high', 'highest'],
      'El superlativo de un adjetivo corto agrega -est y lleva the: the highest. higher es comparativo, the most high mezcla las formas y highest sin the no es correcto aquí.'
    ),
    ejercicio(
      'This is ___ film I have ever seen. (good)',
      'the best',
      ['the goodest', 'the most good', 'better'],
      'good tiene un superlativo irregular: the best. the goodest y the most good no existen y better es el comparativo.'
    ),
    ejercicio(
      'Who has the ___ money in your family? (a lot)',
      'most',
      ['more', 'many', 'mostest'],
      'Para la mayor cantidad de algo incontable se usa the most: «the most money». more es comparativo, many no es superlativo y mostest no existe.'
    ),
    ejercicio(
      '___ is the river? — About 300 kilometers.',
      'How long',
      ['How much', 'How many', 'How tall'],
      'Se pregunta por la longitud de un río: How long. How much y How many preguntan por cantidades y How tall se usa para la estatura.'
    ),
    ejercicio(
      'He is one of ___ players in the team. (tall)',
      'the tallest',
      ['taller', 'the most tall', 'tallest'],
      'Después de one of the va el superlativo y el sustantivo en plural: «one of the tallest players». taller es comparativo, the most tall no es la forma de un adjetivo corto y tallest no lleva the.'
    ),
  ],
  flashcards: [
    tarjeta('Superlativo corto y largo', 'the tallest · the biggest · the happiest\nthe most expensive · the most interesting'),
    tarjeta('Irregulares', 'good → the best · bad → the worst\nfar → the furthest · little → the least'),
    tarjeta('In y of', 'the tallest in the class (grupo)\nthe best of all (conjunto)'),
    tarjeta('Superlativo + ever', "It's the best film I've ever seen.\nsuperlativo + sujeto + have + participio + ever"),
    tarjeta('How + adjetivo', 'How tall? · How old? · How far? · How long?\nHow often? · How well? · How much? · How many?'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What is the tallest mountain in Peru?', translation: '¿Cuál es la montaña más alta de Perú?' },
    { speaker: 'user', text: "I think it's Huascarán. It's one of the highest in South America.", translation: 'Creo que es el Huascarán. Es una de las más altas de Sudamérica.' },
    { speaker: 'other', text: 'How high is it?', translation: '¿Qué altura tiene?' },
    { speaker: 'user', text: 'About 6,700 meters. And how far is it from Lima?', translation: 'Unos 6 700 metros. ¿Y a qué distancia está de Lima?' },
    { speaker: 'other', text: "Around 400 kilometers. It's the most beautiful trip I've ever done.", translation: 'Unos 400 kilómetros. Es el viaje más hermoso que he hecho.' },
    { speaker: 'user', text: 'How long does it take by bus?', translation: '¿Cuánto tarda en bus?' },
    { speaker: 'other', text: 'About eight hours. The least expensive way to go!', translation: 'Unas ocho horas. ¡La forma más barata de ir!' },
  ],
  readingText: {
    title: 'World records',
    body: "The Amazon is the longest river in South America, and it carries the most water in the world. The Sahara is the largest hot desert, and the Pacific is the deepest ocean. The Burj Khalifa in Dubai is the tallest building ever built. It is one of the most visited places in the Middle East. How tall is it? About 828 meters. Which country has the most people? India. And which has the fewest? Vatican City. These facts are some of the most surprising I've ever read.",
    translation:
      'El Amazonas es el río más largo de Sudamérica y el que lleva más agua del mundo. El Sahara es el desierto cálido más grande y el Pacífico es el océano más profundo. El Burj Khalifa de Dubái es el edificio más alto jamás construido. Es uno de los lugares más visitados de Oriente Medio. ¿Cuánto mide? Unos 828 metros. ¿Qué país tiene más gente? India. ¿Y cuál tiene menos? Ciudad del Vaticano. Estos datos son de los más sorprendentes que he leído.',
  },
  tips: [
    'Los adjetivos cortos usan the + -est (the tallest) y los largos the most + adjetivo (the most expensive); nunca mezcles las dos formas.',
    "Después de one of the va el superlativo y el sustantivo en plural: «one of the best films».",
    "El superlativo + ever: «It's the best film I've ever seen» usa presente perfecto.",
    'How + adjetivo pregunta una medida: How tall? How old? How far? How long?',
  ],
  dailyWords: palabras('best', 'terrible', 'famous', 'popular', 'amazing', 'wonderful'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
    { etiqueta: '📖 Gramática: El Presente Perfecto (Present Perfect)', ruta: '/gramatica/concepto/el-presente-perfecto-present-perfect' },
  ],
};

/** Las unidades del bloque 1, por id interno. */
export const UNIDADES_BLOQUE_1: Record<number, Unit> = {
  46: UNIDAD_46,
  47: UNIDAD_47,
  48: UNIDAD_48,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 1 que las tienen. */
export const FORMAS_BLOQUE_1: Record<number, FormasUnidad | FormasUnidad[]> = {
  47: FORMAS_47,
};
