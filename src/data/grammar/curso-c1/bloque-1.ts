import { aux, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_C1_1 } from '@/data/grammar/topics';
import type { Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 1 · Redes sociales, los medios e historias (ids 146–148: Unidad 1–3 del nivel C1).

// ─── Unidad 1 (id 146) · Hábitos y tendencias: presente simple, tend to y will; And / But / So ───

const UNIDAD_146: Unit = {
  title: 'Habits and Tendencies: Present Simple, Tend To and Will; And, But, So',
  topic: BLOQUE_C1_1,
  level: 'C1',
  explain: [
    teoria(
      '1 · Presente simple: hábitos y generalizaciones',
      "El presente simple describe lo que ocurre de forma regular o lo que es cierto en general. Al hablar de redes sociales y medios es la forma natural para describir costumbres y tendencias:\n\n• Most people check their phones first thing in the morning.\n• News spreads faster online than it ever did on paper.\n• She posts a photo every Sunday.\n\nSe combina con adverbios de frecuencia (usually, rarely, hardly ever, on the whole) para precisar cuánto se repite.",
      [
        ['Most people check their phones first thing in the morning.', 'La mayoría de la gente revisa el teléfono a primera hora.'],
        ['News spreads faster online than it ever did on paper.', 'Las noticias se difunden en línea más rápido que nunca en papel.'],
        ['She posts a photo every Sunday.', 'Ella publica una foto todos los domingos.'],
        ['I hardly ever read the comments.', 'Casi nunca leo los comentarios.'],
      ]
    ),
    teoria(
      '2 · Presente continuo con always: hábitos que molestan',
      "Con always, constantly o forever, el presente continuo expresa un hábito repetitivo que nos irrita o nos sorprende. Compara:\n\n• He always checks his phone. (hecho neutro)\n• He's always checking his phone. (¡qué pesado!)\n• She's constantly posting pictures of her lunch.\n\nEs un recurso muy común en conversación para criticar sin ser agresivo.",
      [
        ["He's always checking his phone during dinner.", 'Siempre está mirando el teléfono durante la cena.'],
        ["She's constantly posting pictures of her lunch.", 'Está publicando fotos de su almuerzo todo el tiempo.'],
        ["They're forever sharing fake news.", 'Siempre están compartiendo noticias falsas.'],
        ['He always checks his phone before bed.', 'Siempre revisa el teléfono antes de dormir.'],
      ]
    ),
    teoria(
      '3 · Tend to: tendencias',
      "Tend to + verbo base expresa una tendencia o algo que suele pasar, sin ser una regla absoluta. Es más matizado que usually:\n\n• Young people tend to get their news from social media.\n• Headlines tend to exaggerate.\n• I tend to be more active in the evening.\n\nNegativa: tend not to + verbo (o don't tend to): «Older users tend not to share personal details». Con cosas y personas por igual.",
      [
        ['Young people tend to get their news from social media.', 'Los jóvenes suelen informarse por las redes sociales.'],
        ['Headlines tend to exaggerate.', 'Los titulares tienden a exagerar.'],
        ['I tend to be more active in the evening.', 'Tiendo a estar más activo por las noches.'],
        ['Older users tend not to share personal details.', 'Los usuarios mayores suelen no compartir datos personales.'],
      ]
    ),
    teoria(
      '4 · Will: comportamiento típico y repetitivo',
      "Will (sin énfasis, forma contraída 'll) describe lo que alguien hace típicamente, a veces con una nota de crítica o de ternura. Se usa con personas, para hablar de su carácter:\n\n• He'll sit for hours scrolling through his feed.\n• She'll always reply within minutes. (es fiable)\n• Accidents will happen. (son inevitables)\n\nCon énfasis (will, pronunciado fuerte) indica una insistencia molesta: «He WILL leave his phone on the table!». Won't expresa rechazo habitual: «The app won't open».",
      [
        ["He'll sit for hours scrolling through his feed.", 'Se queda horas desplazándose por su muro.'],
        ["She'll always reply within minutes.", 'Siempre responde en pocos minutos.'],
        ['Accidents will happen.', 'Los accidentes ocurren.'],
        ["The app won't open, however many times I try.", 'La aplicación no abre, por más veces que lo intente.'],
      ]
    ),
    teoria(
      '5 · Presente simple, tend to o will: ¿cuál elijo?',
      "• Presente simple: un hecho o hábito neutro → «She posts every day».\n• Tend to: una tendencia general, con matiz → «People tend to post when they're bored».\n• Will: comportamiento típico de una persona concreta → «He'll post anything, whatever the time».\n• Presente continuo + always: un hábito que molesta → «He's always posting».\n\nTambién se puede usar would para el mismo tipo de comportamiento en el pasado: «He would spend hours online when he was a teenager».",
      [
        ['She posts every day.', 'Ella publica todos los días.'],
        ["People tend to post when they're bored.", 'La gente tiende a publicar cuando se aburre.'],
        ["He'll post anything, whatever the time.", 'Publica lo que sea, a la hora que sea.'],
        ['He would spend hours online when he was a teenager.', 'De adolescente pasaba horas en línea.'],
      ]
    ),
    teoria(
      '6 · Estrategia: iniciar preguntas con And, But y So',
      "💬 En conversación natural no hace falta empezar siempre con la pregunta completa. Se puede conectar con lo que dijo la otra persona usando And, But o So al principio de la pregunta:\n\n• And (añadir o pedir más): «And what did you do after that?» · «And your sister?»\n• But (cuestionar o contrastar): «But isn't that a bit risky?» · «But how do you know it's true?»\n• So (sacar una conclusión o pasar al siguiente tema): «So how long have you been doing this?» · «So you don't use social media at all?»\n\nSuenan más fluidos y muestran que escuchas.",
      [
        ['And what did you do after that?', '¿Y qué hiciste después de eso?'],
        ["But isn't that a bit risky?", 'Pero, ¿no es un poco arriesgado?'],
        ['So how long have you been doing this?', 'Entonces, ¿cuánto tiempo llevas haciéndolo?'],
        ["So you don't use social media at all?", '¿O sea que no usas redes sociales en absoluto?'],
      ]
    ),
    teoria(
      '7 · Estrategia: And, But y So en un diálogo',
      "💬 Estas conexiones funcionan mejor cuando responden directamente a lo que acabas de oír:\n\n• A: «I stopped using social media last year.» B: «So what made you decide that?»\n• A: «I post every day, and I get hundreds of likes.» B: «But does it actually make you happy?»\n• A: «I work mostly from home.» B: «And do you ever miss the office?»\n\nPara cambiar de tema con suavidad: «And speaking of work…, how's your new job?».",
      [
        ['I stopped using social media last year. So what made you decide that?', 'Dejé las redes sociales el año pasado. ¿Y qué te hizo decidirlo?'],
        ['I get hundreds of likes. But does it make you happy?', 'Recibo cientos de likes. Pero, ¿te hace feliz?'],
        ['I work mostly from home. And do you ever miss the office?', 'Trabajo sobre todo desde casa. ¿Y extrañas alguna vez la oficina?'],
        ["And speaking of work, how's your new job?", 'Y hablando de trabajo, ¿cómo va tu nuevo empleo?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Presente simple', suj('Most people'), verbo('check'), resto('their phones')),
    fl('Tend to', suj('Headlines'), aux('tend to'), verbo('exaggerate')),
    fl('Will típico', suj('He'), aux("'ll"), verbo('sit'), resto('for hours')),
    fl('Pregunta conectora', resto('And / But / So'), resto('+ pregunta')),
  ],
  table: {
    cols: ['Forma', 'Matiz', 'Ejemplo'],
    rows: [
      ['presente simple', 'hecho o hábito', 'She posts every day.'],
      ['always + continuo', 'hábito molesto', "He's always posting."],
      ['tend to', 'tendencia general', 'People tend to post.'],
      ['will', 'comportamiento típico', "He'll post anything."],
      ['would', 'hábito del pasado', 'He would post daily.'],
    ],
  },
  contrastCard: {
    left: { label: 'Presente simple — hecho neutro', example: 'He checks his phone before bed.', highlight: 'checks' },
    right: { label: 'Always + continuo — queja', example: "He's always checking his phone.", highlight: "He's always checking" },
    caption: 'El continuo con always añade una opinión: nos molesta, sorprende o exaspera.',
  },
  quiz: [
    ejercicio(
      'Teenagers ___ to spend hours on their phones.',
      'tend',
      ['tends', 'are tending', 'tending'],
      'Con teenagers (plural) se usa tend to + verbo en presente simple: tend. tends no concuerda y are tending y tending no se usan con este significado.'
    ),
    ejercicio(
      'My uncle will ___ for hours reading the news, and nothing can distract him.',
      'sit',
      ['sits', 'sitting', 'to sit'],
      'Will para un comportamiento típico va seguido del verbo base: will sit. sits, sitting y to sit no se usan después de will.'
    ),
    ejercicio(
      'Which sentence uses "tend to" correctly?',
      'People tend not to read the terms and conditions.',
      ['People tend to not reading the terms and conditions.', 'People are tending to read the terms and conditions.', 'People tends not to read the terms and conditions.'],
      'La negativa es tend not to + verbo base. Las otras opciones mezclan -ing, el continuo o la concordancia equivocada con people.'
    ),
    ejercicio(
      "He's always ___ his phone at dinner. It drives me mad.",
      'checking',
      ['check', 'checks', 'to check'],
      'El hábito que molesta se expresa con always + presente continuo: «He\'s always checking». check, checks y to check no forman esa estructura.'
    ),
    ejercicio(
      'She ___ sit in silence for an hour when she is upset. (typical behaviour)',
      'will',
      ['is', 'would', 'has'],
      'Will + verbo base describe el comportamiento típico de una persona: «She will sit». is y has no forman esa estructura y would es para el pasado.'
    ),
  ],
  flashcards: [
    tarjeta('Hábitos y tendencias', 'presente simple: hecho o hábito\ntend to: tendencia general\nHeadlines tend to exaggerate.'),
    tarjeta('Always + continuo', "Un hábito que molesta o sorprende.\nHe's always checking his phone."),
    tarjeta('Will típico', "Comportamiento característico: He'll sit for hours scrolling.\nWon't: rechazo habitual (The app won't open)."),
    tarjeta('And, But y So', 'And: añadir (And your sister?)\nBut: cuestionar (But isn\'t that risky?)\nSo: concluir (So you don\'t use it at all?)'),
    tarjeta('Would en el pasado', 'Un hábito del pasado, con un tono de recuerdo.\nHe would spend hours online as a teenager.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "I've deleted all my social media accounts.", translation: 'He borrado todas mis cuentas de redes sociales.' },
    { speaker: 'user', text: 'So what made you decide that?', translation: '¿Y qué te hizo decidirlo?' },
    { speaker: 'other', text: "I was always checking my phone. I'd wake up and check it before I'd even said good morning to my wife.", translation: 'Siempre estaba mirando el teléfono. Me despertaba y lo revisaba antes de decirle buenos días a mi esposa.' },
    { speaker: 'user', text: "But don't you miss it? People tend to feel left out when they quit.", translation: 'Pero, ¿no lo extrañas? La gente suele sentirse excluida cuando los deja.' },
    { speaker: 'other', text: "At first, yes. Now I'll spend a whole evening reading and not even think about my phone.", translation: 'Al principio sí. Ahora puedo pasar toda una tarde leyendo y ni pensar en mi teléfono.' },
    { speaker: 'user', text: "And does it make you feel happier?", translation: '¿Y te hace sentir más feliz?' },
  ],
  readingText: {
    title: 'Scrolling for hours',
    body: "Researchers say that people tend to underestimate how much time they spend on social media. Most users check their feeds dozens of times a day, and many will scroll for hours without noticing. A typical teenager will open the same app ten times before breakfast. Parents are constantly complaining that their children are always staring at screens. Yet adults are no different: they tend to answer messages during meetings and will often reply to a work email at midnight. Experts therefore suggest setting limits, because habits that seem harmless can quietly take over our day.",
    translation:
      'Los investigadores dicen que la gente tiende a subestimar cuánto tiempo pasa en las redes sociales. La mayoría de los usuarios revisa su muro decenas de veces al día y muchos se desplazan horas sin darse cuenta. Un adolescente típico abre la misma aplicación diez veces antes del desayuno. Los padres se quejan constantemente de que sus hijos siempre están mirando pantallas. Sin embargo, los adultos no son distintos: tienden a responder mensajes durante las reuniones y a menudo responden un correo de trabajo a medianoche. Por eso los expertos sugieren poner límites, porque los hábitos que parecen inofensivos pueden apoderarse silenciosamente de nuestro día.',
  },
  tips: [
    "Tend to expresa una tendencia, no una regla: «Headlines tend to exaggerate». La negativa es tend not to.",
    "Always + presente continuo critica un hábito: «He's always checking his phone».",
    "Will (contraído 'll) describe el comportamiento típico de alguien: «He'll sit for hours».",
    "Empezar una pregunta con And, But o So conecta con lo que dijo el otro y suena natural.",
  ],
  dailyWords: palabras('social media', 'post', 'photo', 'video', 'share', 'account'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Presente simple vs. continuo', ruta: '/gramatica/concepto/el-presente-simple-vs-continuo' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

// ─── Unidad 2 (id 147) · Cláusulas relativas definitorias y no definitorias; which y You know what…? ───

const UNIDAD_147: Unit = {
  title: 'Defining and Non-Defining Relative Clauses; Which-Comments and You Know What…?',
  topic: BLOQUE_C1_1,
  level: 'C1',
  explain: [
    teoria(
      '1 · Cláusulas relativas definitorias',
      "Una cláusula definitoria da información ESENCIAL para saber a quién o a qué nos referimos. No lleva comas:\n\n• The journalist who wrote the article has been fired.\n• I read the report that you recommended.\n• The platform which most teenagers use is changing.\n\nSe puede usar that en lugar de who o which. Y se puede omitir el pronombre si es el objeto: «The report you recommended».",
      [
        ['The journalist who wrote the article has been fired.', 'La periodista que escribió el artículo fue despedida.'],
        ['I read the report that you recommended.', 'Leí el informe que recomendaste.'],
        ['The platform which most teenagers use is changing.', 'La plataforma que usa la mayoría de los adolescentes está cambiando.'],
        ['The report you recommended was excellent.', 'El informe que recomendaste fue excelente.'],
      ]
    ),
    teoria(
      '2 · Cláusulas relativas no definitorias',
      "Una cláusula no definitoria da información EXTRA: la oración tiene sentido completo sin ella. Va entre comas (o con una pausa al hablar):\n\n• My brother, who lives in Madrid, is a journalist.\n• The article, which was published on Monday, caused a scandal.\n• Lima, where I was born, is a huge city.\n\nReglas: no se puede usar that, y no se puede omitir el pronombre relativo.",
      [
        ['My brother, who lives in Madrid, is a journalist.', 'Mi hermano, que vive en Madrid, es periodista.'],
        ['The article, which was published on Monday, caused a scandal.', 'El artículo, publicado el lunes, causó un escándalo.'],
        ['Lima, where I was born, is a huge city.', 'Lima, donde nací, es una ciudad enorme.'],
        ["The mayor, whom everyone respected, resigned.", 'El alcalde, a quien todos respetaban, renunció.'],
      ]
    ),
    teoria(
      '3 · Definitoria o no definitoria: cómo cambia el sentido',
      "La puntuación cambia el significado:\n\n• My brother who lives in Madrid is a journalist. (tengo varios hermanos; hablo del que vive en Madrid)\n• My brother, who lives in Madrid, is a journalist. (solo tengo uno; el dato de Madrid es extra)\n\nCon nombres propios, casi siempre es no definitoria: «Paris, which I love, is very expensive».",
      [
        ['My brother who lives in Madrid is a journalist.', 'Mi hermano el que vive en Madrid es periodista (tengo varios).'],
        ['My brother, who lives in Madrid, is a journalist.', 'Mi hermano, que vive en Madrid, es periodista (tengo uno).'],
        ['Paris, which I love, is very expensive.', 'París, que me encanta, es muy caro.'],
        ['Students who cheat will be expelled.', 'Los estudiantes que copien serán expulsados (solo ellos).'],
      ]
    ),
    teoria(
      '4 · Preposiciones, cantidad y estilo formal',
      "• Preposición + whom / which (formal): «The person to whom I spoke» = (informal) «The person I spoke to».\n• Cantidad + of whom / of which (no definitoria): «She has three brothers, two of whom are doctors» · «He wrote ten novels, all of which were bestsellers».\n• Whose: «The writer whose book won the prize…».\n\nEn registro formal escrito, la preposición va antes del pronombre.",
      [
        ['The person to whom I spoke was very helpful.', 'La persona con la que hablé fue muy atenta.'],
        ['The person I spoke to was very helpful.', 'La persona con la que hablé fue muy atenta (informal).'],
        ['She has three brothers, two of whom are doctors.', 'Tiene tres hermanos, dos de los cuales son médicos.'],
        ['He wrote ten novels, all of which were bestsellers.', 'Escribió diez novelas, todas ellas éxitos de ventas.'],
      ]
    ),
    teoria(
      '5 · Which comentario: comentar una afirmación entera',
      "En una cláusula no definitoria, which puede referirse a TODA la idea anterior, no a un solo sustantivo. Sirve para comentar lo que acabas de decir (o lo que dijo otro):\n\n• He passed the exam, which surprised everyone.\n• She didn't reply, which made me angry.\n• They've cancelled the match, which is a pity.\n\nSe separa con coma. Es una forma muy natural de añadir tu opinión sin empezar otra frase.",
      [
        ['He passed the exam, which surprised everyone.', 'Aprobó el examen, lo cual sorprendió a todos.'],
        ["She didn't reply, which made me angry.", 'No respondió, lo que me enfadó.'],
        ["They've cancelled the match, which is a pity.", 'Han cancelado el partido, lo cual es una pena.'],
        ['He quit his job, which was a brave decision.', 'Dejó su trabajo, lo que fue una decisión valiente.'],
      ]
    ),
    teoria(
      '6 · Estrategia: comentar lo que dice otro con which',
      "💬 Puedes completar la frase de tu interlocutor con una cláusula con which, para añadir un comentario o una evaluación:\n\n• A: «They've changed the whole system.» B: «Which is exactly what we needed.»\n• A: «She's moving abroad.» B: «Which I always knew she would.»\n• A: «Prices have doubled.» B: «Which is why I'm worried.»\n\nTambién: «…, which is why…» (razón) y «…, which means…» (consecuencia).",
      [
        ["They've changed the whole system. Which is exactly what we needed.", 'Cambiaron todo el sistema. Que es justo lo que necesitábamos.'],
        ["She's moving abroad. Which I always knew she would.", 'Se va al extranjero. Lo cual siempre supe.'],
        ["Prices have doubled. Which is why I'm worried.", 'Los precios se duplicaron. Por eso estoy preocupado.'],
        ['The signal is weak, which means we need a new router.', 'La señal es débil, lo que significa que necesitamos otro router.'],
      ]
    ),
    teoria(
      '7 · Estrategia: You know what…?',
      "💬 «You know what…?» sirve para introducir un comentario personal, una confesión o una opinión inesperada. Llama la atención del oyente antes de decirlo:\n\n• You know what? I think she's right.\n• You know what I find strange? Nobody ever mentions the cost.\n• You know what…? I'd rather not go.\n\nSe pronuncia con una pausa breve después, y la entonación sube antes del comentario.",
      [
        ["You know what? I think she's right.", '¿Sabes qué? Creo que ella tiene razón.'],
        ['You know what I find strange? Nobody ever mentions the cost.', '¿Sabes qué me parece raro? Nadie menciona nunca el costo.'],
        ["You know what? I'd rather not go.", '¿Sabes qué? Prefiero no ir.'],
        ["You know what I'd do? I'd call her right now.", '¿Sabes qué haría yo? La llamaría ahora mismo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Definitoria', resto('The man'), aux('who / that'), verbo('called'), resto('is here')),
    fl('No definitoria', resto('My brother,'), aux('who'), verbo('lives in Madrid'), resto(', is a journalist')),
    fl('Which comentario', resto('He passed,'), aux('which'), verbo('surprised'), resto('everyone')),
    fl('You know what', aux('You know what?'), resto('+ comentario')),
  ],
  table: {
    cols: ['Tipo', 'Comas', 'that / omitir'],
    rows: [
      ['definitoria', 'no', 'sí (that; se omite el objeto)'],
      ['no definitoria', 'sí', 'no'],
      ['which (toda la idea)', 'sí', 'no'],
      ['preposición + whom / which', 'formal', 'se puede dejar la preposición al final'],
    ],
  },
  contrastCard: {
    left: { label: 'Definitoria — información esencial', example: 'Students who cheat will be expelled.', highlight: 'who cheat' },
    right: { label: 'No definitoria — información extra', example: 'The students, who were tired, left.', highlight: ', who were tired,' },
    caption: 'Sin comas se identifica de quién se habla. Con comas solo se añade información.',
  },
  quiz: [
    ejercicio(
      'My brother, ___ lives in Madrid, is a journalist.',
      'who',
      ['that', 'which', 'whom'],
      'En una cláusula no definitoria no se usa that. Para una persona sujeto de lives se usa who. which es para cosas y whom es para objetos.'
    ),
    ejercicio(
      'The book ___ I bought yesterday is brilliant.',
      'that',
      ['who', 'whose', 'where'],
      'Es una cláusula definitoria sobre una cosa: that (o which, o se omite). who es para personas, whose indica posesión y where indica lugar.'
    ),
    ejercicio(
      "She didn't call me back, ___ made me very angry.",
      'which',
      ['that', 'what', 'who'],
      'Para comentar toda la idea anterior se usa which después de una coma. that no se usa en cláusulas no definitorias, y what y who no refieren a una idea completa.'
    ),
    ejercicio(
      'Choose the correct sentence.',
      'The report, which was written by Ana, was excellent.',
      ['The report, that was written by Ana, was excellent.', 'The report which was written by Ana, was excellent.', 'The report, what was written by Ana, was excellent.'],
      'En una cláusula no definitoria va entre comas y no puede usar that ni what: «, which was written by Ana,».'
    ),
    ejercicio(
      'The people to ___ I spoke were very helpful.',
      'whom',
      ['who', 'which', 'that'],
      'Después de una preposición, con personas, se usa whom (formal): to whom. who, which y that no van justo después de una preposición.'
    ),
  ],
  flashcards: [
    tarjeta('Definitoria', 'Información esencial; sin comas; se puede usar that y omitir el objeto.\nThe report (that) you recommended.'),
    tarjeta('No definitoria', 'Información extra; entre comas; sin that.\nMy brother, who lives in Madrid, is a journalist.'),
    tarjeta('Which comentario', 'Comenta toda la idea anterior, después de una coma.\nHe passed, which surprised everyone.'),
    tarjeta('Formal', 'to whom · of which · two of whom\nThe person to whom I spoke.'),
    tarjeta('You know what…?', "Introduce un comentario personal.\nYou know what? I think she's right."),
  ],
  simulatedChat: [
    { speaker: 'other', text: "The article, which came out yesterday, says that young people trust influencers more than journalists.", translation: 'El artículo, que salió ayer, dice que los jóvenes confían más en los influencers que en los periodistas.' },
    { speaker: 'user', text: "Which is worrying, isn't it? You know what? I think that's partly our fault.", translation: 'Lo cual es preocupante, ¿no? ¿Sabes qué? Creo que en parte es culpa nuestra.' },
    { speaker: 'other', text: 'The editors who decide what counts as news are mostly older men, which may explain it.', translation: 'Los editores que deciden qué es noticia son en su mayoría hombres mayores, lo que podría explicarlo.' },
    { speaker: 'user', text: "Exactly. And the journalist who wrote that piece, whose name I forget, said the same.", translation: 'Exacto. Y el periodista que escribió ese texto, cuyo nombre olvidé, dijo lo mismo.' },
    { speaker: 'other', text: "Prices have gone up, too. Which is why many newspapers are closing.", translation: 'Los precios también han subido. Por eso muchos periódicos están cerrando.' },
    { speaker: 'user', text: "You know what I'd do? I'd make the best ones free for students.", translation: '¿Sabes qué haría yo? Haría gratis los mejores para los estudiantes.' },
  ],
  readingText: {
    title: 'The reporter',
    body: "Marta Ruiz, who has worked as a reporter for twenty years, covers the stories that other journalists ignore. Her latest investigation, which was published last month, exposed a company whose owners had been hiding profits abroad. The editor to whom she sent the first draft told her it was too risky, which only made her more determined. She interviewed fifty workers, most of whom asked to remain anonymous. The story, which became the most-read article of the year, led to a public inquiry, and the government, which had ignored the problem for years, finally had to react.",
    translation:
      'Marta Ruiz, que ha trabajado veinte años como reportera, cubre las historias que otros periodistas ignoran. Su última investigación, publicada el mes pasado, destapó una empresa cuyos dueños escondían ganancias en el extranjero. El editor a quien envió el primer borrador le dijo que era demasiado arriesgado, lo que solo la hizo más decidida. Entrevistó a cincuenta trabajadores, la mayoría de los cuales pidió permanecer en el anonimato. La historia, que se convirtió en el artículo más leído del año, llevó a una investigación pública y el gobierno, que había ignorado el problema durante años, finalmente tuvo que reaccionar.',
  },
  tips: [
    "Sin comas, la cláusula identifica; con comas, solo añade información. «My brother who…» (tengo varios) ≠ «My brother, who…» (solo uno).",
    "En las no definitorias no se usa that y no se omite el pronombre relativo.",
    "Which después de una coma puede comentar toda la idea anterior: «He passed, which surprised everyone».",
    "You know what…? introduce un comentario personal o inesperado.",
  ],
  dailyWords: palabras('opinion', 'fact', 'news', 'information', 'issue', 'example'),
  relacionados: [
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
    { etiqueta: '📖 Gramática: El Pronombre (Pronoun)', ruta: '/gramatica/concepto/el-pronombre-pronoun' },
  ],
};

// ─── Unidad 3 (id 148) · Tiempos del pasado y perfecto en narraciones; interrumpir una historia; no wonder ───

const UNIDAD_148: Unit = {
  title: 'Past Tenses and Perfect Forms in Narratives; Interrupting a Story; No Wonder',
  topic: BLOQUE_C1_1,
  level: 'C1',
  explain: [
    teoria(
      '1 · Los tiempos de una narración',
      "En una historia bien contada se combinan varios tiempos, cada uno con su función:\n\n• Pasado simple → los hechos principales, en orden: «The phone rang and I picked it up».\n• Pasado continuo → el fondo y lo que estaba en curso: «I was walking home when…».\n• Pasado perfecto → lo que había pasado antes: «She had already left».\n• Pasado perfecto continuo → la duración de algo anterior: «He had been waiting for hours».",
      [
        ['The phone rang and I picked it up.', 'Sonó el teléfono y contesté.'],
        ['I was walking home when I heard a scream.', 'Caminaba a casa cuando oí un grito.'],
        ['She had already left by the time I arrived.', 'Ella ya se había ido cuando llegué.'],
        ['He had been waiting for hours when the news arrived.', 'Llevaba horas esperando cuando llegó la noticia.'],
      ]
    ),
    teoria(
      '2 · Pasado simple o pasado perfecto',
      "El pasado perfecto marca que una acción es ANTERIOR a otro punto del pasado y esa anterioridad importa:\n\n• When I got home, the film started. (empezó después de llegar)\n• When I got home, the film had started. (ya había empezado)\n\nCon before, after y when el orden ya es claro y el perfecto es opcional; con by the time, already, never… before, es casi obligatorio: «By the time the police arrived, the thief had disappeared».",
      [
        ['When I got home, the film started.', 'Cuando llegué a casa, empezó la película.'],
        ['When I got home, the film had started.', 'Cuando llegué a casa, la película ya había empezado.'],
        ['By the time the police arrived, the thief had disappeared.', 'Cuando llegó la policía, el ladrón había desaparecido.'],
        ['I had never seen anything like it before.', 'Nunca antes había visto algo así.'],
      ]
    ),
    teoria(
      '3 · Pasado perfecto simple o continuo',
      "• Pasado perfecto simple: la acción estaba completa; importa el resultado → «She had written three chapters».\n• Pasado perfecto continuo: importa la duración o la actividad, y suele explicar un estado posterior → «Her eyes were red. She had been crying».\n\nCon verbos de estado (know, belong, be) solo el simple: «I had known him for years». El continuo nunca se usa con estos verbos.",
      [
        ['She had written three chapters.', 'Había escrito tres capítulos.'],
        ['Her eyes were red. She had been crying.', 'Tenía los ojos rojos. Había estado llorando.'],
        ['I had known him for years.', 'Lo conocía desde hacía años.'],
        ['They had been arguing all morning.', 'Habían estado discutiendo toda la mañana.'],
      ]
    ),
    teoria(
      '4 · Formas del presente perfecto en las historias',
      "El presente perfecto (simple y continuo) conecta el pasado con el presente y aparece al comenzar o comentar una historia:\n\n• You won't believe what's happened! (noticia reciente)\n• I've been meaning to tell you about it. (llevo pensando contártelo)\n• She's been working there since 2010.\n• I've never heard anything so strange.\n\nCuando la historia pasa a detalles, se vuelve al pasado simple: «It happened last night. I was…».",
      [
        ["You won't believe what's happened!", '¡No vas a creer lo que ha pasado!'],
        ["I've been meaning to tell you about it.", 'He estado queriendo contártelo.'],
        ["She's been working there since 2010.", 'Ella trabaja allí desde 2010.'],
        ["It happened last night. I was driving home when…", 'Pasó anoche. Iba manejando a casa cuando…'],
      ]
    ),
    teoria(
      '5 · Construir una anécdota: orden y conectores',
      "Para organizar una narración se usan expresiones de tiempo y de orden:\n\n• Al principio: It all started when… · At first… · To begin with…\n• Durante: Meanwhile… · At that moment… · Just then…\n• Sorpresa: Out of the blue… · All of a sudden…\n• Final: In the end… · Eventually… · It turned out that…\n\nCombinadas con los tiempos pasados dan ritmo a la historia.",
      [
        ['It all started when I lost my passport.', 'Todo empezó cuando perdí mi pasaporte.'],
        ['Out of the blue, a stranger offered to help.', 'De repente, un desconocido se ofreció a ayudar.'],
        ['Meanwhile, my flight had already left.', 'Mientras tanto, mi vuelo ya se había ido.'],
        ['In the end, it turned out to be a lucky day.', 'Al final resultó ser un día afortunado.'],
      ]
    ),
    teoria(
      '6 · Estrategia: interrumpir tu propia historia',
      "💬 A veces, mientras cuentas algo, necesitas añadir un comentario o una aclaración. Para volver luego al hilo se usan frases de transición:\n\n• Para interrumpir: «Sorry, I'm going off the point.» · «Hang on, I should explain…» · «Incidentally,…» · «By the way,…»\n• Para volver a la historia: «Anyway,…» · «Where was I?» · «Oh yes,…» · «Right, so…»\n\n«She was wearing a red coat — which, by the way, she'd borrowed from me — and then, anyway, she walked in…»",
      [
        ["Sorry, I'm going off the point. Where was I?", 'Perdón, me estoy desviando. ¿Dónde estaba?'],
        ['Hang on, I should explain who she is first.', 'Espera, primero debo explicar quién es ella.'],
        ['Anyway, as I was saying, she walked in.', 'En fin, como decía, ella entró.'],
        ["Oh yes, so we got to the station…", 'Ah sí, entonces llegamos a la estación…'],
      ]
    ),
    teoria(
      '7 · No wonder: no me extraña',
      "No wonder + cláusula expresa que algo no sorprende porque hay una razón evidente. Va seguido de un hecho y suele explicarlo con una razón en otro tiempo:\n\n• No wonder she was tired — she'd been working all night.\n• No wonder he's angry. You didn't even say sorry.\n• It's no wonder that prices are rising.\n\nSe puede decir también «It's not surprising that…». Es muy frecuente en conversación para reaccionar a una historia.",
      [
        ["No wonder she was tired. She'd been working all night.", 'No me extraña que estuviera cansada. Había estado trabajando toda la noche.'],
        ["No wonder he's angry. You didn't even say sorry.", 'No me extraña que esté enfadado. Ni siquiera pediste perdón.'],
        ["It's no wonder that prices are rising.", 'No es de extrañar que los precios estén subiendo.'],
        ['No wonder nobody believed him!', '¡No me extraña que nadie le creyera!'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Pasado perfecto', suj('She'), aux('had'), verbo('left')),
    fl('Pasado perfecto continuo', suj('He'), aux('had been'), verbo('waiting')),
    fl('Volver a la historia', resto('Anyway,'), resto('as I was saying')),
    fl('No wonder', resto('No wonder'), suj('she'), verbo('was tired')),
  ],
  table: {
    cols: ['Tiempo', 'Función', 'Ejemplo'],
    rows: [
      ['pasado simple', 'hechos principales', 'The phone rang.'],
      ['pasado continuo', 'fondo, en curso', 'I was walking home.'],
      ['pasado perfecto', 'anterior', 'She had already left.'],
      ['pasado perfecto continuo', 'duración anterior', 'He had been waiting.'],
      ['presente perfecto', 'conecta con ahora', "I've been meaning to tell you."],
    ],
  },
  contrastCard: {
    left: { label: 'Pasado perfecto simple — resultado', example: 'She had written three chapters.', highlight: 'had written' },
    right: { label: 'Pasado perfecto continuo — duración', example: 'She had been writing all night.', highlight: 'had been writing' },
    caption: 'El simple muestra lo hecho. El continuo muestra la actividad y cuánto duró.',
  },
  quiz: [
    ejercicio(
      'By the time the police arrived, the thief ___.',
      'had escaped',
      ['escaped', 'was escaping', 'has escaped'],
      'Con by the time se marca lo anterior con el pasado perfecto: had escaped. escaped, was escaping y has escaped no marcan esa anterioridad.'
    ),
    ejercicio(
      'She was exhausted. She ___ for twelve hours without a break.',
      'had been working',
      ['has worked', 'was worked', 'works'],
      'Se explica un estado pasado con la duración de una actividad anterior: pasado perfecto continuo, had been working. Las otras formas no marcan esa relación.'
    ),
    ejercicio(
      "No wonder he's tired — he ___ all night.",
      'has been working',
      ['is working', 'will work', 'works'],
      'La razón es una actividad que empezó antes y llega hasta ahora: presente perfecto continuo, has been working. Las otras formas no marcan esa duración.'
    ),
    ejercicio(
      'I ___ the news when I got a call from my sister.',
      'was watching',
      ['had watched', 'have watched', 'watch'],
      'La acción de fondo en curso se expresa con pasado continuo: was watching. had watched, have watched y watch no marcan una acción en curso interrumpida.'
    ),
    ejercicio(
      "Sorry, I'm going off the point. Where ___?",
      'was I',
      ['am I', 'did I', 'I was'],
      'Para retomar el hilo se pregunta «Where was I?». am I, did I e I was no forman la pregunta.'
    ),
  ],
  flashcards: [
    tarjeta('Los tiempos de una historia', 'pasado simple: hechos · continuo: fondo\nperfecto: antes · perfecto continuo: duración anterior'),
    tarjeta('Perfecto simple o continuo', 'simple: resultado (had written three chapters)\ncontinuo: actividad (had been crying)'),
    tarjeta('Interrumpir y volver', 'Sorry, I\'m going off the point. · Hang on…\nAnyway, · Where was I? · Oh yes,'),
    tarjeta('No wonder', "No wonder she was tired — she'd been working all night.\nIt's no wonder that prices are rising."),
    tarjeta('Conectores narrativos', 'It all started when… · Out of the blue… · Meanwhile… · In the end…'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'You look exhausted. What happened?', translation: 'Te ves agotado. ¿Qué pasó?' },
    { speaker: 'user', text: "You won't believe it. I'd been working on a report all night when the power went out.", translation: 'No lo vas a creer. Llevaba toda la noche con un informe cuando se fue la luz.' },
    { speaker: 'other', text: "No wonder you look awful. Had you saved it?", translation: 'No me extraña que te veas mal. ¿Lo habías guardado?' },
    { speaker: 'user', text: "That's the thing — I hadn't. Sorry, I'm going off the point. Anyway, I had to start again from scratch.", translation: 'Ese es el problema, no lo había hecho. Perdón, me desvío. En fin, tuve que empezar de cero.' },
    { speaker: 'other', text: 'Where were you when it happened? Hang on, were you at home?', translation: '¿Dónde estabas cuando pasó? Espera, ¿estabas en casa?' },
    { speaker: 'user', text: "Yes. And, by the way, my neighbour — who'd been watching TV — came to ask if I needed help.", translation: 'Sí. Y, por cierto, mi vecino, que estaba viendo televisión, vino a preguntar si necesitaba ayuda.' },
  ],
  readingText: {
    title: 'A night to remember',
    body: "It all started when my train was cancelled. I had been planning the trip for months, and I had just arrived at the station when the announcement came. I was standing in the cold, wondering what to do, when a stranger offered me a lift. I had never accepted a lift from a stranger before, and I hesitated, but she had been smiling so warmly that I said yes. We talked for hours — she had been travelling for a year — and by the time we reached the city, I felt as if I had known her all my life. No wonder we're still friends today.",
    translation:
      'Todo empezó cuando cancelaron mi tren. Había estado planeando el viaje durante meses y acababa de llegar a la estación cuando llegó el anuncio. Estaba parado en el frío, preguntándome qué hacer, cuando una desconocida me ofreció que me llevara. Nunca antes había aceptado que me llevara una desconocida y dudé, pero ella me sonreía con tanta calidez que dije que sí. Hablamos durante horas —ella había estado viajando por un año— y para cuando llegamos a la ciudad, sentía que la conocía de toda la vida. No me extraña que todavía seamos amigos hoy.',
  },
  tips: [
    "Usa el pasado perfecto para lo que pasó ANTES de otro hecho del pasado, y el continuo para su duración.",
    "Con verbos de estado (know, be, belong) usa el perfecto simple, nunca el continuo.",
    "Para retomar una historia: «Anyway,…», «Where was I?», «Oh yes,…».",
    "No wonder + cláusula: «No wonder she was tired — she'd been working all night».",
  ],
  dailyWords: palabras('story', 'moment', 'memory', 'experience', 'surprise', 'trouble'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
    { etiqueta: '📖 Gramática: El Presente Perfecto (Present Perfect)', ruta: '/gramatica/concepto/el-presente-perfecto-present-perfect' },
  ],
};

/** Las unidades del bloque 1, por id interno. */
export const UNIDADES_BLOQUE_1: Record<number, Unit> = {
  146: UNIDAD_146,
  147: UNIDAD_147,
  148: UNIDAD_148,
};
