import { aux, f, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B2_4 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 4 · Fama, tendencias y páginas profesionales (ids 122–124: Unidad 10–12 del nivel B2).

// ─── Unidad 10 (id 122) · Tercer condicional y tag questions ───

const UNIDAD_122: Unit = {
  title: 'Third Conditional and Tag Questions',
  topic: BLOQUE_B2_4,
  level: 'B2',
  explain: [
    teoria(
      '1 · Tercer condicional: if + pasado perfecto, would have + participio',
      "El tercer condicional habla de situaciones imaginarias en el PASADO: algo que no pasó y cuál habría sido el resultado.\n\n• If I had studied, I would have passed. (no estudié; no aprobé)\n• If she had left earlier, she wouldn't have missed the train.\n• We would have won if we had played better.\n\nSe forma: if + had + participio, would have + participio.",
      [
        ['If I had studied, I would have passed.', 'Si hubiera estudiado, habría aprobado.'],
        ["If she had left earlier, she wouldn't have missed the train.", 'Si hubiera salido antes, no habría perdido el tren.'],
        ['We would have won if we had played better.', 'Habríamos ganado si hubiéramos jugado mejor.'],
        ['If it had rained, we would have stayed home.', 'Si hubiera llovido, nos habríamos quedado en casa.'],
      ]
    ),
    teoria(
      '2 · Negativa y pregunta del tercer condicional',
      "• Negativa: hadn't en la cláusula if y wouldn't have en la principal → «If I hadn't forgotten, I would have called».\n• Pregunta: «What would you have done if you had been there?» · «Would she have come if you had invited her?».\n• Respuesta corta: Yes, she would. · No, she wouldn't.\n\nContracciones: I'd have, she'd have, wouldn't have, hadn't.",
      [
        ["If I hadn't forgotten, I would have called.", 'Si no lo hubiera olvidado, habría llamado.'],
        ['What would you have done if you had been there?', '¿Qué habrías hecho si hubieras estado ahí?'],
        ['Would she have come if you had invited her?', '¿Habría venido si la hubieras invitado?'],
        ["I wouldn't have gone if I had known.", 'No habría ido si lo hubiera sabido.'],
      ]
    ),
    teoria(
      '3 · Could have y might have en la cláusula principal',
      "En la cláusula principal, would have se puede cambiar por could have (habría podido) o might have (quizás habría):\n\n• If I had had more money, I could have bought it.\n• If she had called, I might have answered.\n• If he had been careful, he could have avoided the accident.\n\nCould dice que era posible; might, que no estás seguro; would, que estás seguro.",
      [
        ['If I had had more money, I could have bought it.', 'Si hubiera tenido más dinero, habría podido comprarlo.'],
        ['If she had called, I might have answered.', 'Si hubiera llamado, quizás habría contestado.'],
        ['If he had been careful, he could have avoided the accident.', 'Si hubiera tenido cuidado, habría podido evitar el accidente.'],
        ['If we had left earlier, we might have caught the train.', 'Si hubiéramos salido antes, quizás habríamos alcanzado el tren.'],
      ]
    ),
    teoria(
      '4 · Wish + pasado perfecto: arrepentimientos',
      "Wish + had + participio expresa arrepentimiento por algo que pasó (o no pasó) en el pasado:\n\n• I wish I had studied more.\n• She wishes she hadn't said that.\n• I wish we had gone to the party.\n\nEs el equivalente de «ojalá hubiera…». If only + pasado perfecto es más enfático: «If only I had listened!».",
      [
        ['I wish I had studied more.', 'Ojalá hubiera estudiado más.'],
        ["She wishes she hadn't said that.", 'Ella desearía no haber dicho eso.'],
        ['I wish we had gone to the party.', 'Ojalá hubiéramos ido a la fiesta.'],
        ['If only I had listened!', '¡Ojalá hubiera escuchado!'],
      ]
    ),
    teoria(
      '5 · Segundo o tercer condicional',
      "• Segundo condicional → presente o futuro imaginario: if + pasado simple, would + base. «If I had money, I would buy it» (ahora).\n• Tercer condicional → pasado imaginario: if + pasado perfecto, would have + participio. «If I had had money, I would have bought it» (entonces).\n\nPregunta: ¿hablas de ahora o de algo que ya pasó?",
      [
        ['If I had money, I would buy a car.', 'Si tuviera dinero, compraría un auto (ahora).'],
        ['If I had had money, I would have bought a car.', 'Si hubiera tenido dinero, habría comprado un auto (entonces).'],
        ['If she studied, she would pass.', 'Si estudiara, aprobaría.'],
        ['If she had studied, she would have passed.', 'Si hubiera estudiado, habría aprobado.'],
      ]
    ),
    teoria(
      '6 · Tag questions: la forma',
      "Una tag question es una pregunta corta al final de una frase para confirmar algo. La regla: frase afirmativa → tag negativa; frase negativa → tag afirmativa. El auxiliar es el mismo de la frase.\n\n• You're coming, aren't you?\n• She doesn't like it, does she?\n• They have finished, haven't they?\n• He can swim, can't he?\n\nSi no hay auxiliar, se usa do / does / did: «You like pizza, don't you?».",
      [
        ["You're coming, aren't you?", 'Vienes, ¿no?'],
        ["She doesn't like it, does she?", 'No le gusta, ¿verdad?'],
        ["They have finished, haven't they?", 'Ya terminaron, ¿no?'],
        ["He can swim, can't he?", 'Sabe nadar, ¿no?'],
      ]
    ),
    teoria(
      '7 · Casos especiales',
      "Algunos casos no siguen la regla simple:\n\n• I am → aren't I?: «I'm late, aren't I?»\n• Let's → shall we?: «Let's go, shall we?»\n• Imperativo → will you? / won't you?: «Open the window, will you?»\n• There is → isn't there?: «There's a problem, isn't there?»\n• Nothing / nobody / no one → tag afirmativa en plural: «Nobody called, did they?»\n• Frases negativas por adverbios (never, hardly) → tag afirmativa: «You never smoke, do you?»",
      [
        ["I'm late, aren't I?", 'Llego tarde, ¿no?'],
        ["Let's go, shall we?", 'Vamos, ¿te parece?'],
        ['Open the window, will you?', 'Abre la ventana, ¿sí?'],
        ["Nobody called, did they?", 'Nadie llamó, ¿verdad?'],
      ]
    ),
    teoria(
      '8 · La entonación y cómo responder',
      "• Entonación descendente (la voz baja): estás casi seguro y pides confirmación → «It's cold, isn't it?».\n• Entonación ascendente (la voz sube): realmente no lo sabes → «You're not coming, are you?».\n\nRespuestas: Yes, it is. · No, it isn't. · I think so. Igual que en las preguntas negativas, «Yes» va con una afirmación y «No» con una negación.",
      [
        ["It's cold, isn't it? Yes, it is.", 'Hace frío, ¿no? Sí, hace.'],
        ["You're not coming, are you? No, I'm not.", 'No vienes, ¿verdad? No, no voy.'],
        ["She's your sister, isn't she? Yes, she is.", 'Es tu hermana, ¿verdad? Sí.'],
        ["You didn't tell him, did you? No, I didn't.", 'No se lo dijiste, ¿verdad? No.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Tercer condicional', resto('If'), suj('I'), aux('had'), verbo('studied'), resto(','), suj('I'), aux('would have'), verbo('passed')),
    fl('Wish + had', suj('I'), verbo('wish'), suj('I'), aux('had'), verbo('studied')),
    fl('Tag (afirmativa)', suj('You'), verbo('like it'), resto(','), aux("don't"), suj('you?')),
    fl('Tag (negativa)', suj('You'), aux("don't"), verbo('like it'), resto(','), aux('do'), suj('you?')),
  ],
  table: {
    cols: ['Condicional', 'Cláusula if', 'Cláusula principal'],
    rows: [
      ['Primero (real)', 'if + presente', 'will + base'],
      ['Segundo (imaginario ahora)', 'if + pasado simple', 'would + base'],
      ['Tercero (imaginario pasado)', 'if + pasado perfecto', 'would have + participio'],
      ['Wish (pasado)', 'wish + pasado perfecto', '—'],
    ],
  },
  contrastCard: {
    left: { label: 'Segundo condicional — ahora', example: 'If I had money, I would buy it.', highlight: 'had money' },
    right: { label: 'Tercer condicional — pasado', example: 'If I had had money, I would have bought it.', highlight: 'had had money' },
    caption: 'El segundo habla de lo imaginario ahora. El tercero, de lo que no pasó en el pasado.',
  },
  quiz: [
    ejercicio(
      'If I ___ harder, I would have passed.',
      'had studied',
      ['studied', 'would study', 'have studied'],
      'En el tercer condicional la cláusula con if lleva pasado perfecto: had studied. studied es del segundo condicional, would study y have studied no se usan después de if.'
    ),
    ejercicio(
      'If she had left earlier, she ___ the train.',
      'would have caught',
      ['would catch', 'had caught', 'will have caught'],
      'En el tercer condicional la cláusula principal lleva would have + participio. would catch es del segundo condicional y las otras formas no son correctas.'
    ),
    ejercicio(
      'I wish I ___ to the party last night. (regret)',
      'had gone',
      ['went', 'have gone', 'would go'],
      'Un arrepentimiento sobre el pasado se expresa con wish + pasado perfecto: had gone. went, have gone y would go no forman esa estructura.'
    ),
    ejercicio(
      "You're coming tonight, ___?",
      "aren't you",
      ["don't you", 'are you', "isn't it"],
      'La frase es afirmativa con are, así que la tag es negativa con el mismo auxiliar: aren\'t you. don\'t you usa otro auxiliar, are you es afirmativa e isn\'t it no concuerda.'
    ),
    ejercicio(
      "She doesn't like coffee, ___?",
      'does she',
      ["doesn't she", 'is she', 'do she'],
      'La frase es negativa con doesn\'t, así que la tag es afirmativa con el mismo auxiliar: does she. doesn\'t she repite la negación, is she cambia el auxiliar y do she no concuerda con she.'
    ),
  ],
  flashcards: [
    tarjeta('Tercer condicional', 'if + pasado perfecto, would have + participio\nIf I had studied, I would have passed.'),
    tarjeta('Wish + pasado perfecto', 'Arrepentimiento por el pasado.\nI wish I had studied more. · If only I had listened!'),
    tarjeta('Tag questions', 'Afirmativa → tag negativa: You like it, don\'t you?\nNegativa → tag afirmativa: She doesn\'t like it, does she?'),
    tarjeta('Casos especiales', "I am → aren't I? · Let's → shall we?\nImperativo → will you? · Nobody → did they?"),
    tarjeta('Entonación', 'Voz que baja: pides confirmación.\nVoz que sube: preguntas de verdad.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "You missed the party, didn't you?", translation: 'Te perdiste la fiesta, ¿verdad?' },
    { speaker: 'user', text: "Yes, I did. If I had known about it, I would have come. Nobody told me, did they?", translation: 'Sí. Si lo hubiera sabido, habría ido. Nadie me avisó, ¿verdad?' },
    { speaker: 'other', text: "I'm sure Ana invited you. You didn't check your messages, did you?", translation: 'Estoy seguro de que Ana te invitó. No revisaste tus mensajes, ¿verdad?' },
    { speaker: 'user', text: "I wish I had checked. It was a great party, wasn't it?", translation: 'Ojalá los hubiera revisado. Fue una gran fiesta, ¿no?' },
    { speaker: 'other', text: "It was fantastic. If you had come, you would have met the whole team.", translation: 'Fue fantástica. Si hubieras ido, habrías conocido a todo el equipo.' },
    { speaker: 'user', text: "Next time I won't miss it, will I?", translation: 'La próxima vez no me la perderé, ¿verdad?' },
  ],
  readingText: {
    title: 'The missed chance',
    body: "Years ago, a young singer was invited to an audition, but she didn't go because she was afraid. \"If I had gone, my life would have been different,\" she often said. A friend told her, \"You could have been famous, couldn't you?\" She laughed. \"I might have been, but I wasn't brave.\" Now she works as a teacher. She doesn't regret everything, does she? \"No,\" she says, \"but I wish I had tried. If I hadn't listened to my fear, I would have found out what I was capable of.\"",
    translation:
      'Hace años, una joven cantante fue invitada a una audición, pero no fue porque tenía miedo. «Si hubiera ido, mi vida habría sido distinta», decía a menudo. Una amiga le dijo: «Podrías haber sido famosa, ¿no?». Ella se rio. «Quizás habría sido, pero no fui valiente». Ahora trabaja como profesora. No lo lamenta todo, ¿verdad? «No», dice, «pero ojalá lo hubiera intentado. Si no hubiera escuchado a mi miedo, habría descubierto de qué era capaz».',
  },
  tips: [
    "Tercer condicional: if + had + participio, would have + participio. No se pone would en la cláusula con if.",
    "Wish + had + participio expresa arrepentimiento por el pasado: «I wish I had studied».",
    "En una tag question el auxiliar es el mismo de la frase y la polaridad es la contraria.",
    "Casos especiales: I am → aren't I? · Let's → shall we? · Nobody → did they?",
  ],
  dailyWords: palabras('chance', 'fear', 'success', 'luck', 'dream', 'choice'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

const FORMAS_122: FormasUnidad = {
  titulo: 'Tercer condicional',
  afirmativa: {
    formulas: [f(resto('If'), suj('subject'), aux('had'), verbo('participle'), resto(','), suj('subject'), aux('would have'), verbo('participle'))],
    ejemplos: [
      ['If I had studied, I would have passed.', 'Si hubiera estudiado, habría aprobado.'],
      ['If she had left, she would have caught it.', 'Si se hubiera ido, lo habría alcanzado.'],
      ['We would have won if we had tried.', 'Habríamos ganado si lo hubiéramos intentado.'],
    ],
  },
  negativa: {
    formulas: [f(resto('If'), suj('subject'), aux("hadn't"), verbo('participle'), resto(','), suj('subject'), aux("wouldn't have"), verbo('participle'))],
    ejemplos: [
      ["If I hadn't forgotten, I would have called.", 'Si no lo hubiera olvidado, habría llamado.'],
      ["I wouldn't have gone if I had known.", 'No habría ido si lo hubiera sabido.'],
      ["She wouldn't have missed it if she hadn't slept.", 'No lo habría perdido si no hubiera dormido.'],
    ],
  },
  pregunta: {
    formulas: [f(resto('What / Would'), suj('subject'), aux('would have'), verbo('participle'), resto('if…?'))],
    ejemplos: [
      ['What would you have done if you had been there?', '¿Qué habrías hecho si hubieras estado ahí?'],
      ['Would she have come if you had asked?', '¿Habría venido si le hubieras preguntado?'],
      ['Where would they have gone?', '¿Adónde habrían ido?'],
    ],
  },
  nota: "Contracciones: I'd have · she'd have · wouldn't have · hadn't. Respuestas cortas: Yes, she would. / No, she wouldn't. Con wish: I wish I had studied.",
  ojo: "En la cláusula con if no se usa would: «If I had studied», no «If I would have studied». Y el verbo principal va en participio.",
};

// ─── Unidad 11 (id 123) · Pasiva de presente continuo y perfecto; conectores ───

const UNIDAD_123: Unit = {
  title: 'Passive Continuous and Perfect, Linking Ideas',
  topic: BLOQUE_B2_4,
  level: 'B2',
  explain: [
    teoria(
      '1 · Presente continuo pasivo: is / are being + participio',
      "Se usa para acciones que están en progreso ahora, o durante este período, y se ven como algo que recibe el sujeto:\n\n• The new bridge is being built.\n• My car is being repaired this week.\n• Cases are being investigated.\n\nSe forma con am / is / are + being + participio pasado.",
      [
        ['The new bridge is being built.', 'Se está construyendo el nuevo puente.'],
        ['My car is being repaired this week.', 'Mi auto se está reparando esta semana.'],
        ['Several cases are being investigated.', 'Se están investigando varios casos.'],
        ["I'm being followed.", 'Me están siguiendo.'],
      ]
    ),
    teoria(
      '2 · Negativa y pregunta en presente continuo pasivo',
      "• Negativa: not después del auxiliar → «The room isn't being used» · «We aren't being paid».\n• Pregunta: el auxiliar va antes del sujeto → «Is the road being repaired?» · «Why are they being kept waiting?».\n\nCon be passive en continuo, el verbo sí necesita being: «is being» y no «is».",
      [
        ["The room isn't being used.", 'No se está usando la sala.'],
        ['Is the road being repaired?', '¿Se está reparando la calle?'],
        ["We aren't being paid enough.", 'No nos pagan lo suficiente.'],
        ['Why are they being kept waiting?', '¿Por qué los hacen esperar?'],
      ]
    ),
    teoria(
      '3 · Presente perfecto pasivo: has / have been + participio',
      "Se forma con have / has + been + participio pasado. Se usa cuando importa un resultado presente y no quién lo hizo:\n\n• The window has been broken. (y sigue roto)\n• Many houses have been destroyed.\n• Have you been told?\n• The results haven't been announced yet.\n\nEs el presente perfecto activo con been antes del participio.",
      [
        ['The window has been broken.', 'La ventana ha sido rota.'],
        ['Many houses have been destroyed.', 'Muchas casas han sido destruidas.'],
        ['Have you been told?', '¿Te lo han dicho?'],
        ["The results haven't been announced yet.", 'Los resultados todavía no se han anunciado.'],
      ]
    ),
    teoria(
      '4 · Continuo o perfecto en la pasiva',
      "• is being + participio → el proceso está ocurriendo ahora: «The report is being written» (todavía escribiéndose).\n• has been + participio → ya terminó o su resultado importa: «The report has been written» (ya existe).\n\nCompara: «The road is being repaired» (están trabajando) · «The road has been repaired» (ya está lista).",
      [
        ['The report is being written.', 'Se está escribiendo el informe.'],
        ['The report has been written.', 'El informe ya se escribió.'],
        ['The road is being repaired.', 'Se está reparando la calle.'],
        ['The road has been repaired.', 'La calle ya fue reparada.'],
      ]
    ),
    teoria(
      '5 · Conectores de contraste',
      "Para unir ideas opuestas:\n\n• although / even though + cláusula → «Although it was raining, we went out».\n• despite / in spite of + sustantivo o -ing → «Despite the rain, we went out».\n• however (frase nueva) → «It was raining. However, we went out».\n• whereas / while → compara: «He is tall, whereas his brother is short».\n• but / yet → «It was cheap, yet it was good».",
      [
        ['Although it was raining, we went out.', 'Aunque llovía, salimos.'],
        ['Despite the rain, we went out.', 'A pesar de la lluvia, salimos.'],
        ['It was raining. However, we went out.', 'Llovía. Sin embargo, salimos.'],
        ['He is tall, whereas his brother is short.', 'Él es alto, mientras que su hermano es bajo.'],
      ]
    ),
    teoria(
      '6 · Conectores de causa y resultado',
      "• Causa: because + cláusula · because of + sustantivo · as / since + cláusula (más formal) · due to + sustantivo.\n• Resultado: so (informal) · therefore / consequently / as a result (formal).\n\n• He was late because of the traffic.\n• She was ill, so she stayed home.\n• The company lost money. Therefore, it closed three shops.\n\nOjo: because of + sustantivo; because + cláusula.",
      [
        ['He was late because of the traffic.', 'Llegó tarde por el tráfico.'],
        ['She was ill, so she stayed home.', 'Estaba enferma, así que se quedó en casa.'],
        ['The company lost money. Therefore, it closed three shops.', 'La empresa perdió dinero. Por lo tanto, cerró tres tiendas.'],
        ['Since it is late, we should go.', 'Como es tarde, deberíamos irnos.'],
      ]
    ),
    teoria(
      '7 · Conectores de propósito y adición',
      "• Propósito: to + verbo · in order to · so that + cláusula → «I study in order to pass» · «She left early so that she wouldn't be late».\n• Adición: and · also · as well as · in addition · moreover · besides → «The job is well paid. Moreover, it is interesting».\n\nMoreover e in addition son formales y suelen ir al inicio de la frase, con coma.",
      [
        ['I study in order to pass the exam.', 'Estudio para aprobar el examen.'],
        ["She left early so that she wouldn't be late.", 'Salió temprano para no llegar tarde.'],
        ['The job is well paid. Moreover, it is interesting.', 'El trabajo está bien pagado. Además, es interesante.'],
        ['He speaks French as well as Spanish.', 'Habla francés además de español.'],
      ]
    ),
    teoria(
      '8 · Conectores de orden y puntuación',
      "• Orden: first, then, after that, next, finally, in the end → «First, mix the flour. Then add the eggs. Finally, bake it».\n• Puntuación: los conectores al inicio de una frase llevan coma: «However, …», «Therefore, …». Con although y because, la cláusula con el conector puede ir al final sin coma.\n\n• «Although it was late, we stayed.» / «We stayed although it was late.»",
      [
        ['First, mix the flour. Then add the eggs.', 'Primero, mezcla la harina. Luego agrega los huevos.'],
        ['Finally, bake it for an hour.', 'Por último, hornéalo una hora.'],
        ['Although it was late, we stayed.', 'Aunque era tarde, nos quedamos.'],
        ['We stayed although it was late.', 'Nos quedamos aunque era tarde.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Continuo pasivo', resto('The bridge'), aux('is being'), verbo('built')),
    fl('Perfecto pasivo', resto('The window'), aux('has been'), verbo('broken')),
    fl('Contraste', resto('Although'), resto('it rained,'), suj('we'), verbo('went out')),
    fl('Causa', suj('He'), verbo('was late'), resto('because of'), resto('the traffic')),
  ],
  table: {
    cols: ['Función', 'Conectores', 'Ejemplo'],
    rows: [
      ['contraste', 'although, however, whereas', 'Although it rained, we went.'],
      ['causa', 'because, as, since, due to', 'He was late because of traffic.'],
      ['resultado', 'so, therefore, as a result', 'It rained, so we stayed.'],
      ['propósito', 'to, in order to, so that', 'I study to pass.'],
      ['adición', 'also, moreover, in addition', 'Moreover, it is cheap.'],
      ['orden', 'first, then, finally', 'First, mix. Then add.'],
    ],
  },
  contrastCard: {
    left: { label: 'Being — en progreso', example: 'The report is being written.', highlight: 'is being written' },
    right: { label: 'Been — terminado', example: 'The report has been written.', highlight: 'has been written' },
    caption: 'is / are being + participio: el proceso está en marcha. has / have been + participio: ya terminó.',
  },
  quiz: [
    ejercicio(
      'The new bridge ___ built at the moment.',
      'is being',
      ['is', 'has been', 'being'],
      'Una acción pasiva en progreso ahora se expresa con is being + participio. is solo no marca el proceso, has been indica que ya terminó y being no tiene auxiliar.'
    ),
    ejercicio(
      'The results ___ announced yet.',
      "haven't been",
      ["aren't", "weren't", "hasn't been"],
      'Con yet se usa el presente perfecto pasivo, y con results (plural) va haven\'t been. aren\'t y weren\'t no son perfectos y hasn\'t been no concuerda con results.'
    ),
    ejercicio(
      '___ it was raining, we went for a walk.',
      'Although',
      ['Because', 'Despite', 'However'],
      'Although une dos ideas opuestas con una cláusula completa. Because expresa causa, Despite va con un sustantivo o -ing y However empieza una frase nueva.'
    ),
    ejercicio(
      'He was late ___ the traffic.',
      'because of',
      ['because', 'although', 'despite of'],
      'Because of se usa con un sustantivo (the traffic). because necesita una cláusula, although expresa contraste y despite of no existe.'
    ),
    ejercicio(
      'I took the job; ___, the salary was low.',
      'however',
      ['because', 'so that', 'in order'],
      'However une dos ideas contrastantes al empezar una cláusula nueva. because, so that e in order no tienen ese valor.'
    ),
  ],
  flashcards: [
    tarjeta('Presente continuo pasivo', 'am / is / are + being + participio\nThe bridge is being built.'),
    tarjeta('Presente perfecto pasivo', 'have / has + been + participio\nThe window has been broken. · The results haven\'t been announced.'),
    tarjeta('Contraste', 'although / even though + cláusula · despite + sustantivo o -ing\nhowever (frase nueva) · whereas'),
    tarjeta('Causa y resultado', 'because + cláusula · because of + sustantivo · as / since\nso · therefore · as a result'),
    tarjeta('Propósito, adición, orden', 'in order to · so that · moreover · in addition\nfirst · then · finally'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Is the new office finished?', translation: '¿Ya está terminada la nueva oficina?' },
    { speaker: 'user', text: "Not yet. It is still being painted, and the furniture hasn't been delivered.", translation: 'Todavía no. Aún se está pintando y los muebles no han sido entregados.' },
    { speaker: 'other', text: "Although it was supposed to be ready last week?", translation: '¿Aunque se suponía que estaría lista la semana pasada?' },
    { speaker: 'user', text: 'Yes. The delivery was delayed because of the strike. As a result, we have to work from home.', translation: 'Sí. La entrega se retrasó por la huelga. Como resultado, tenemos que trabajar desde casa.' },
    { speaker: 'other', text: "That's a pity. However, working from home has some advantages.", translation: 'Qué lástima. Sin embargo, trabajar desde casa tiene algunas ventajas.' },
    { speaker: 'user', text: 'True. First, no traffic. Moreover, I save money on lunch.', translation: 'Cierto. Primero, nada de tráfico. Además, ahorro en el almuerzo.' },
  ],
  readingText: {
    title: 'The city is changing',
    body: "Our city is changing fast. A new metro line is being built, and hundreds of old houses have been demolished. Although many people are unhappy, the project is being supported by the government because the roads are too crowded. Despite the noise, workers say that the line will be finished next year. As a result, travel times have already been reduced on some routes. However, not everything has been solved yet: several streets are still being repaired. In order to avoid delays, residents have been asked to use public transport. Moreover, new bike lanes are being planned.",
    translation:
      'Nuestra ciudad está cambiando rápido. Se está construyendo una nueva línea de metro y cientos de casas viejas han sido demolidas. Aunque mucha gente está descontenta, el gobierno apoya el proyecto porque las calles están demasiado llenas. A pesar del ruido, los trabajadores dicen que la línea estará terminada el próximo año. Como resultado, los tiempos de viaje ya se han reducido en algunas rutas. Sin embargo, no todo se ha resuelto todavía: varias calles aún se están reparando. Para evitar retrasos, se ha pedido a los residentes que usen el transporte público. Además, se están planeando nuevas ciclovías.',
  },
  tips: [
    "Continuo pasivo: is / are being + participio (en progreso). Perfecto pasivo: has / have been + participio (ya pasó, con resultado).",
    "Although / even though llevan una cláusula completa; despite / in spite of llevan un sustantivo o -ing.",
    "Because + cláusula; because of + sustantivo: «because it rained» / «because of the rain».",
    "However, therefore y moreover van al inicio de una frase y llevan coma.",
  ],
  dailyWords: palabras('news', 'result', 'system', 'level', 'problem', 'culture'),
  relacionados: [
    { etiqueta: '📖 Gramática: La Voz Pasiva (Passive Voice)', ruta: '/gramatica/concepto/la-voz-pasiva-passive-voice' },
    { etiqueta: '📖 Gramática: La Conjunción (Conjunction)', ruta: '/gramatica/concepto/la-conjuncion-conjunction' },
  ],
};

// ─── Unidad 12 (id 124) · What clauses, frases nominales largas, futuro continuo y perfecto ───

const UNIDAD_124: Unit = {
  title: 'What Clauses, Long Noun Phrases, Future Continuous and Future Perfect',
  topic: BLOQUE_B2_4,
  level: 'B2',
  explain: [
    teoria(
      '1 · What clauses: What I need is…',
      "Una what clause es una cláusula que empieza con What y funciona como sujeto. Sirve para poner el énfasis en lo que sigue al verbo be:\n\n• What I need is a good rest. (= I need a good rest.)\n• What she said was true.\n• What surprised me was the price.\n\nEl verbo después de la what clause es normalmente be: «What I want is…», «What happened was…».",
      [
        ['What I need is a good rest.', 'Lo que necesito es un buen descanso.'],
        ['What she said was true.', 'Lo que dijo era verdad.'],
        ['What surprised me was the price.', 'Lo que me sorprendió fue el precio.'],
        ['What happened was a misunderstanding.', 'Lo que pasó fue un malentendido.'],
      ]
    ),
    teoria(
      '2 · Otras formas de énfasis con what',
      "• What + sujeto + verbo + is / was + sustantivo: «What I like about her is her honesty».\n• What + sujeto + verbo + is / was + to + verbo: «What I want to do is to travel» (el to puede omitirse en el segundo verbo: «What I want to do is travel»).\n• All + sujeto + verbo + is → «All I want is peace and quiet».\n• The thing that… → «The thing that annoys me is the noise».\n\nTodas ponen primero la idea secundaria y al final la más importante.",
      [
        ['What I like about her is her honesty.', 'Lo que me gusta de ella es su honestidad.'],
        ['What I want to do is travel.', 'Lo que quiero hacer es viajar.'],
        ['All I want is peace and quiet.', 'Todo lo que quiero es paz y tranquilidad.'],
        ['The thing that annoys me is the noise.', 'Lo que me molesta es el ruido.'],
      ]
    ),
    teoria(
      '3 · Frases nominales largas como sujeto',
      "El sujeto de una oración puede ser una frase nominal larga: un sustantivo con modificadores, cláusulas o preposiciones. El verbo concuerda con el sustantivo principal, no con lo que lo rodea:\n\n• The man who lives next door is a doctor.\n• The books on the top shelf belong to my brother.\n• The fact that she left surprised everyone.\n• Learning a new language takes time.",
      [
        ['The man who lives next door is a doctor.', 'El hombre que vive al lado es doctor.'],
        ['The books on the top shelf belong to my brother.', 'Los libros del estante de arriba son de mi hermano.'],
        ['The fact that she left surprised everyone.', 'El hecho de que se fuera sorprendió a todos.'],
        ['Learning a new language takes time.', 'Aprender un nuevo idioma lleva tiempo.'],
      ]
    ),
    teoria(
      '4 · Cláusulas con -ing y -ed dentro de la frase nominal',
      "📖 Del libro: las cláusulas con -ing (activas) y -ed (pasivas) reducen una relativa:\n\n• The students studying in the library are preparing for exams. (= who are studying)\n• The house built in 1900 is still standing. (= which was built)\n• The people invited to the party didn't come.\n• The report written by Tom was excellent.\n\nSe omite el pronombre relativo y el verbo be.",
      [
        ['The students studying in the library are preparing for exams.', 'Los estudiantes que estudian en la biblioteca preparan sus exámenes.'],
        ['The house built in 1900 is still standing.', 'La casa construida en 1900 sigue en pie.'],
        ["The people invited to the party didn't come.", 'Las personas invitadas a la fiesta no vinieron.'],
        ['The report written by Tom was excellent.', 'El informe escrito por Tom fue excelente.'],
      ]
    ),
    teoria(
      '5 · Futuro continuo: will be + -ing',
      "El futuro continuo (will be + verbo-ing) habla de lo que estará pasando en un momento del futuro:\n\n• This time tomorrow, I'll be flying to Lima.\n• At eight tonight, she'll be watching TV.\n• Will you be using the car this evening? (pregunta educada)\n\nTambién se usa para hablar de cosas que pasarán por el curso normal de los hechos: «The train will be arriving soon».",
      [
        ["This time tomorrow, I'll be flying to Lima.", 'A esta hora mañana estaré volando a Lima.'],
        ["At eight tonight, she'll be watching TV.", 'A las ocho de esta noche estará viendo televisión.'],
        ['Will you be using the car this evening?', '¿Va a usar el auto esta tarde?'],
        ['The train will be arriving soon.', 'El tren llegará pronto.'],
      ]
    ),
    teoria(
      '6 · Futuro perfecto: will have + participio',
      "El futuro perfecto (will have + participio) habla de lo que ya habrá pasado antes de un momento del futuro:\n\n• By 2030, I will have finished my degree.\n• By the time you arrive, they will have left.\n• She will have worked here for ten years in June.\n\nSe usa con by, by the time, before y by next…",
      [
        ['By 2030, I will have finished my degree.', 'Para 2030, habré terminado mi carrera.'],
        ['By the time you arrive, they will have left.', 'Para cuando llegues, se habrán ido.'],
        ['She will have worked here for ten years in June.', 'En junio habrá trabajado aquí diez años.'],
        ['Will you have finished by Friday?', '¿Habrás terminado para el viernes?'],
      ]
    ),
    teoria(
      '7 · Negativa y pregunta del futuro continuo y perfecto',
      "• Negativa: won't be + -ing · won't have + participio → «I won't be working tomorrow» · «She won't have finished».\n• Pregunta: Will + sujeto + be + -ing / have + participio → «Will you be waiting?» · «Will they have arrived?».\n• Respuesta corta: Yes, I will. · No, she won't.\n\nContracción: I'll be, she'll have, won't.",
      [
        ["I won't be working tomorrow.", 'Mañana no estaré trabajando.'],
        ["She won't have finished by then.", 'Para entonces no habrá terminado.'],
        ['Will you be waiting at the station?', '¿Estarás esperando en la estación?'],
        ['Will they have arrived by six?', '¿Habrán llegado para las seis?'],
      ]
    ),
    teoria(
      '8 · Will, futuro continuo o futuro perfecto',
      "• will + base → una acción futura puntual: «I'll finish the report» (decisión, predicción).\n• will be + -ing → una acción EN CURSO en un momento futuro: «At five I'll be finishing the report».\n• will have + participio → una acción COMPLETA antes de un momento futuro: «By five I'll have finished the report».\n\nExpresiones de ayuda: this time tomorrow (continuo) · by + momento (perfecto).",
      [
        ["I'll finish the report.", 'Voy a terminar el informe.'],
        ["At five I'll be finishing the report.", 'A las cinco estaré terminando el informe.'],
        ["By five I'll have finished the report.", 'Para las cinco habré terminado el informe.'],
        ["This time next week I'll be lying on a beach.", 'A esta hora la semana que viene estaré tumbado en una playa.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('What clause', resto('What I need'), aux('is'), verbo('a rest')),
    fl('Futuro continuo', suj('I'), aux("'ll be"), verbo('flying')),
    fl('Futuro perfecto', suj('I'), aux("'ll have"), verbo('finished')),
    fl('Frase larga como sujeto', resto('The man next door'), aux('is'), verbo('a doctor')),
  ],
  table: {
    cols: ['Forma', 'Estructura', 'Ejemplo'],
    rows: [
      ['futuro simple', 'will + base', "I'll finish it."],
      ['futuro continuo', 'will be + -ing', "At five I'll be finishing."],
      ['futuro perfecto', 'will have + participio', "By five I'll have finished."],
      ['what clause', 'What + sujeto + verbo + be', 'What I need is rest.'],
      ['cláusula -ing', 'sustantivo + -ing', 'The man talking to Ana'],
    ],
  },
  contrastCard: {
    left: { label: 'Futuro continuo — en curso', example: "At five I'll be finishing.", highlight: "I'll be finishing" },
    right: { label: 'Futuro perfecto — ya terminado', example: "By five I'll have finished.", highlight: "I'll have finished" },
    caption: 'El continuo muestra la acción en progreso. El perfecto muestra que ya terminó antes de ese momento.',
  },
  quiz: [
    ejercicio(
      '___ I need is a good rest.',
      'What',
      ['That', 'Which', 'It'],
      'What clause: What I need is… funciona como sujeto. That, Which e It no forman esta estructura.'
    ),
    ejercicio(
      'The fact ___ she left early surprised everyone.',
      'that',
      ['what', 'which', 'who'],
      'The fact that + cláusula es una frase nominal larga. what, which y who no introducen el contenido del hecho.'
    ),
    ejercicio(
      'This time next week, I ___ on a beach.',
      'will be lying',
      ['will lie', 'will have lain', 'lie'],
      'Una acción en curso en un momento del futuro se expresa con will be + -ing. will lie es futuro puntual, will have lain es perfecto y lie es presente.'
    ),
    ejercicio(
      'By next June, she ___ her degree.',
      'will have finished',
      ['will be finishing', 'has finished', 'will finished'],
      'Con by + un momento futuro se usa el futuro perfecto: will have finished. will be finishing es continuo, has finished es presente perfecto y will finished no existe.'
    ),
    ejercicio(
      'The students ___ in the library are preparing for exams.',
      'studying',
      ['studied', 'study', 'to study'],
      'La cláusula con -ing reduce who are studying: the students studying. studied, study y to study no forman esa cláusula.'
    ),
  ],
  flashcards: [
    tarjeta('What clauses', 'What I need is a rest. · What surprised me was the price.\nÉnfasis en lo que sigue a be.'),
    tarjeta('Frases nominales largas', 'The man who lives next door is a doctor.\nThe fact that she left surprised everyone.'),
    tarjeta('Cláusulas -ing y -ed', 'The students studying in the library · The house built in 1900\nReducen una relativa.'),
    tarjeta('Futuro continuo', 'will be + -ing: en curso en un momento futuro.\nThis time tomorrow, I\'ll be flying.'),
    tarjeta('Futuro perfecto', 'will have + participio: completo antes de un momento futuro.\nBy 2030, I will have finished.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "What are you doing this time next week?", translation: '¿Qué estarás haciendo a esta hora la semana que viene?' },
    { speaker: 'user', text: "I'll be sitting on a beach in Cancún. What I need is a holiday!", translation: 'Estaré sentado en una playa de Cancún. ¡Lo que necesito son vacaciones!' },
    { speaker: 'other', text: 'Lucky you! Will you have finished the project by then?', translation: '¡Qué suerte! ¿Habrás terminado el proyecto para entonces?' },
    { speaker: 'user', text: "I hope so. By Friday I'll have sent the final report.", translation: 'Eso espero. Para el viernes habré enviado el informe final.' },
    { speaker: 'other', text: 'The people working on it with you will be happy.', translation: 'Las personas que trabajan en él contigo estarán contentas.' },
    { speaker: 'user', text: "What surprised me was how much we achieved in a month.", translation: 'Lo que me sorprendió fue cuánto logramos en un mes.' },
  ],
  readingText: {
    title: 'Ten years from now',
    body: "What I dream about is a quiet life by the sea. Ten years from now, I'll be living in a small village, and I'll be writing every morning. By then I will have saved enough money, and my children will have finished their studies. The fact that I will have more free time makes me happy. The people living near me will probably be fishermen. All I want is to wake up to the sound of the waves. What worries me is that this may never happen, but dreaming is free.",
    translation:
      'Con lo que sueño es con una vida tranquila junto al mar. Dentro de diez años estaré viviendo en un pueblo pequeño y estaré escribiendo todas las mañanas. Para entonces habré ahorrado suficiente dinero y mis hijos habrán terminado sus estudios. El hecho de que tendré más tiempo libre me hace feliz. Las personas que vivan cerca de mí probablemente serán pescadores. Todo lo que quiero es despertar con el sonido de las olas. Lo que me preocupa es que quizás esto nunca ocurra, pero soñar es gratis.',
  },
  tips: [
    "What clause: What I need is… El verbo después de la what clause suele ser be: «What happened was…».",
    "En una frase nominal larga, el verbo concuerda con el sustantivo principal: «The books on the shelf belong…».",
    "Will be + -ing = en curso en ese momento futuro. Will have + participio = ya terminado antes de ese momento.",
    "Por (by) + un momento futuro pide futuro perfecto: «By 2030, I will have finished».",
  ],
  dailyWords: palabras('success', 'dream', 'freedom', 'peace', 'hope', 'result'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Futuro en inglés', ruta: '/gramatica/concepto/el-futuro-en-ingles' },
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
  ],
};

const FORMAS_124_CONT: FormasUnidad = {
  titulo: 'Futuro continuo',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('will be'), verbo('verb-ing'))],
    ejemplos: [
      ["This time tomorrow I'll be flying.", 'A esta hora mañana estaré volando.'],
      ["She'll be watching TV at eight.", 'Ella estará viendo televisión a las ocho.'],
      ["They'll be waiting for us.", 'Nos estarán esperando.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("won't be"), verbo('verb-ing'))],
    ejemplos: [
      ["I won't be working tomorrow.", 'Mañana no estaré trabajando.'],
      ["She won't be sleeping.", 'Ella no estará durmiendo.'],
      ["We won't be using the car.", 'No estaremos usando el auto.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Will'), suj('subject'), resto('be'), verbo('verb-ing'))],
    ejemplos: [
      ['Will you be using the car?', '¿Va a usar el auto?'],
      ['Will she be waiting?', '¿Ella estará esperando?'],
      ['What will you be doing?', '¿Qué estarás haciendo?'],
    ],
  },
  nota: "will es igual para todas las personas. Contracciones: I'll be · she'll be · won't be. Respuestas cortas: Yes, I will. / No, she won't.",
  ojo: "Después de will be el verbo va en -ing: «will be flying», no «will be fly». Y no se usa en la cláusula con if / when.",
};

const FORMAS_124_PERF: FormasUnidad = {
  titulo: 'Futuro perfecto',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('will have'), verbo('past participle'))],
    ejemplos: [
      ['By 2030 I will have finished.', 'Para 2030 habré terminado.'],
      ['They will have left by then.', 'Se habrán ido para entonces.'],
      ['She will have worked here for ten years.', 'Ella habrá trabajado aquí diez años.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("won't have"), verbo('past participle'))],
    ejemplos: [
      ["I won't have finished.", 'No habré terminado.'],
      ["She won't have arrived.", 'Ella no habrá llegado.'],
      ["They won't have started.", 'No habrán empezado.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Will'), suj('subject'), resto('have'), verbo('past participle'))],
    ejemplos: [
      ['Will you have finished by Friday?', '¿Habrás terminado para el viernes?'],
      ['Will they have arrived?', '¿Habrán llegado?'],
      ['What will you have done by then?', '¿Qué habrás hecho para entonces?'],
    ],
  },
  nota: "Se usa con by, by the time y before. Respuestas cortas: Yes, I will. / No, she won't.",
  ojo: "Después de will have el verbo va en participio: «will have finished», no «will have finish».",
};

/** Las unidades del bloque 4, por id interno. */
export const UNIDADES_BLOQUE_4: Record<number, Unit> = {
  122: UNIDAD_122,
  123: UNIDAD_123,
  124: UNIDAD_124,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 4 que las tienen. */
export const FORMAS_BLOQUE_4: Record<number, FormasUnidad | FormasUnidad[]> = {
  122: FORMAS_122,
  124: [FORMAS_124_CONT, FORMAS_124_PERF],
};
