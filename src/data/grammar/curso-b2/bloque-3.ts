import { aux, f, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B2_3 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 3 · Resolución de problemas, comportamiento y el mundo material (ids 119–121: Unidad 7–9 del nivel B2).

// ─── Unidad 7 (id 119) · Causativos get y have; need + infinitivo pasivo y need + -ing ───

const UNIDAD_119: Unit = {
  title: 'Causative Get and Have, Need + Passive Infinitive and Need + -ing',
  topic: BLOQUE_B2_3,
  level: 'B2',
  explain: [
    teoria(
      '1 · Have something done',
      "Have + objeto + participio pasado se usa cuando otra persona hace algo POR ti (un servicio que pides o pagas):\n\n• I had my hair cut yesterday. (me lo cortaron)\n• She is having her car repaired.\n• We're going to have the kitchen painted.\n\nNo dices quién lo hizo: lo importante es el resultado. «I cut my hair» significaría que lo hiciste tú.",
      [
        ['I had my hair cut yesterday.', 'Ayer me corté el pelo (en la peluquería).'],
        ['She is having her car repaired.', 'Le están reparando el auto.'],
        ["We're going to have the kitchen painted.", 'Vamos a hacer pintar la cocina.'],
        ['Where do you have your hair done?', '¿Dónde te arreglas el pelo?'],
      ]
    ),
    teoria(
      '2 · Get something done',
      "Get + objeto + participio significa lo mismo que have, pero es más informal. También sirve para decir que consigues terminar algo:\n\n• I need to get my phone fixed.\n• She got her passport renewed.\n• I can't get this report finished before Friday. (conseguir terminar)\n\nEn el segundo uso, tú mismo haces el trabajo: «get the work done».",
      [
        ['I need to get my phone fixed.', 'Necesito que me arreglen el teléfono.'],
        ['She got her passport renewed.', 'Ella renovó su pasaporte.'],
        ["I can't get this report finished before Friday.", 'No consigo terminar este informe antes del viernes.'],
        ['We got the house painted last spring.', 'Hicimos pintar la casa la primavera pasada.'],
      ]
    ),
    teoria(
      '3 · Causativo con persona: have + persona + base, get + persona + to',
      "Si dices QUIÉN hace el trabajo:\n\n• have + persona + verbo base → «I had the mechanic check the car».\n• get + persona + to + verbo → «I got the mechanic to check the car».\n• make + persona + base → «She made me clean» (obligar).\n• let + persona + base → «He let me go» (permitir).\n\nHave es más formal (da una orden); get implica persuadir.",
      [
        ['I had the mechanic check the car.', 'Hice que el mecánico revisara el auto.'],
        ['I got the mechanic to check the car.', 'Conseguí que el mecánico revisara el auto.'],
        ['She made me clean the kitchen.', 'Ella me obligó a limpiar la cocina.'],
        ['He let me use his phone.', 'Me dejó usar su teléfono.'],
      ]
    ),
    teoria(
      '4 · Have something done para sucesos negativos',
      "Have + objeto + participio también se usa para algo malo que le pasa a alguien:\n\n• She had her bag stolen on the bus.\n• I had my car broken into.\n• He had his phone taken away.\n\nAquí no es un servicio que pides: es algo que sufres. El contexto lo muestra.",
      [
        ['She had her bag stolen on the bus.', 'Le robaron la bolsa en el bus.'],
        ['I had my car broken into.', 'Entraron a robar a mi auto.'],
        ['He had his phone taken away.', 'Le quitaron el teléfono.'],
        ['We had our flight cancelled.', 'Nos cancelaron el vuelo.'],
      ]
    ),
    teoria(
      '5 · Negativa y pregunta del causativo',
      "Con have se usa do / does / did en negativas y preguntas:\n\n• Negativa: «I didn't have my hair cut» · «She doesn't have her car washed».\n• Pregunta: «Did you have your phone fixed?» · «Where do you have your hair done?».\n\nCon get también: «Did you get it fixed?». En el tiempo continuo: «She is having it done now».",
      [
        ["I didn't have my hair cut.", 'No me corté el pelo.'],
        ['Did you have your phone fixed?', '¿Te arreglaron el teléfono?'],
        ['Did you get it fixed?', '¿Lo hiciste arreglar?'],
        ['She is having her house painted now.', 'Ahora le están pintando la casa.'],
      ]
    ),
    teoria(
      '6 · Need + -ing',
      "Need + -ing significa que algo necesita que le hagan algo. El sujeto es la cosa, no la persona:\n\n• The car needs washing. (= needs to be washed)\n• My hair needs cutting.\n• The plants need watering.\n\nSe usa con cosas, y el significado es pasivo aunque el verbo esté en -ing.",
      [
        ['The car needs washing.', 'Al auto hay que lavarlo.'],
        ['My hair needs cutting.', 'Me hace falta un corte de pelo.'],
        ['The plants need watering.', 'Las plantas necesitan agua.'],
        ['These shoes need cleaning.', 'Estos zapatos necesitan limpieza.'],
      ]
    ),
    teoria(
      '7 · Need + infinitivo pasivo',
      "Need + to be + participio expresa lo mismo, de forma más explícita (pasiva):\n\n• The car needs to be washed.\n• The report needs to be finished by Friday.\n• This room needs to be cleaned.\n\nCompara con need + to + verbo (activa), cuyo sujeto es una persona: «I need to wash the car».",
      [
        ['The car needs to be washed.', 'Hay que lavar el auto.'],
        ['The report needs to be finished by Friday.', 'El informe debe terminarse antes del viernes.'],
        ['This room needs to be cleaned.', 'Esta habitación necesita limpieza.'],
        ['I need to wash the car.', 'Necesito lavar el auto.'],
      ]
    ),
    teoria(
      '8 · Otros verbos con -ing pasivo: want, deserve, require',
      "Algunos otros verbos se usan igual que need:\n\n• want + -ing (informal): «The car wants washing».\n• deserve + -ing: «She deserves promoting».\n• require + -ing: «This job requires travelling».\n• be worth + -ing: «The film is worth seeing».\n\nLo más común es need + -ing, y es lo que se evalúa en los exámenes.",
      [
        ['The car wants washing.', 'Al auto le hace falta un lavado.'],
        ['She deserves promoting.', 'Ella merece un ascenso.'],
        ['This job requires travelling.', 'Este trabajo exige viajar.'],
        ['The film is worth seeing.', 'La película vale la pena.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Have + participio', suj('I'), aux('had'), resto('my hair'), verbo('cut')),
    fl('Get + participio', suj('I'), aux('got'), resto('it'), verbo('fixed')),
    fl('Need + -ing', resto('The car'), verbo('needs'), verbo('washing')),
    fl('Need + pasivo', resto('The car'), verbo('needs'), resto('to be'), verbo('washed')),
  ],
  table: {
    cols: ['Estructura', 'Ejemplo', 'Significado'],
    rows: [
      ['have + objeto + participio', 'I had my hair cut.', 'servicio'],
      ['get + objeto + participio', 'I got it fixed.', 'servicio (informal)'],
      ['have + persona + base', 'I had him check it.', 'ordenar'],
      ['get + persona + to', 'I got him to check it.', 'persuadir'],
      ['need + -ing', 'It needs washing.', 'hay que hacerlo'],
      ['need + to be + participio', 'It needs to be washed.', 'hay que hacerlo'],
    ],
  },
  contrastCard: {
    left: { label: 'Lo hago yo', example: 'I cut my hair.', highlight: 'I cut' },
    right: { label: 'Lo hace otro (servicio)', example: 'I had my hair cut.', highlight: 'had my hair cut' },
    caption: 'Con have / get + participio, otra persona hace la acción por ti.',
  },
  quiz: [
    ejercicio(
      'I ___ my car repaired yesterday.',
      'had',
      ['did', 'was', 'made'],
      'El servicio que le hicieron al auto se expresa con have + objeto + participio: «had my car repaired». did, was y made no forman el causativo.'
    ),
    ejercicio(
      "She's going to ___ her hair cut tomorrow.",
      'have',
      ['has', 'had', 'having'],
      'Después de going to va el verbo en base: have. has, had y having no se usan después de going to.'
    ),
    ejercicio(
      'My bike was stolen last week. I had my bike ___.',
      'stolen',
      ['steal', 'stole', 'stealing'],
      'Have + objeto + participio también expresa algo malo que le pasa a alguien: had my bike stolen. steal, stole y stealing no se usan en esa estructura.'
    ),
    ejercicio(
      'The windows are dirty. They need ___.',
      'cleaning',
      ['clean', 'to cleaning', 'cleaned'],
      'Need + -ing tiene sentido pasivo: need cleaning (hay que limpiarlas). clean, to cleaning y cleaned no forman esta estructura.'
    ),
    ejercicio(
      'This report needs ___ before Friday. (passive infinitive)',
      'to be finished',
      ['to finish', 'finish', 'finished'],
      'El infinitivo pasivo es to be + participio: to be finished. to finish es activo y finish y finished no completan la estructura.'
    ),
  ],
  flashcards: [
    tarjeta('Have something done', 'have + objeto + participio\nI had my hair cut. · She is having her car repaired.'),
    tarjeta('Get something done', 'get + objeto + participio: más informal.\nI need to get my phone fixed.'),
    tarjeta('Con persona', 'have + persona + base: I had the mechanic check it.\nget + persona + to: I got the mechanic to check it.'),
    tarjeta('Sucesos negativos', 'She had her bag stolen. · We had our flight cancelled.'),
    tarjeta('Need + -ing / to be', 'The car needs washing. = The car needs to be washed.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Your hair looks great! Did you cut it yourself?', translation: '¡Tu pelo se ve genial! ¿Te lo cortaste tú?' },
    { speaker: 'user', text: 'No way. I had it cut yesterday at a new salon. And I got my nails done too.', translation: 'Para nada. Me lo corté ayer en una peluquería nueva. Y también me arreglé las uñas.' },
    { speaker: 'other', text: "I should do that. My hair needs cutting, and my car needs to be serviced.", translation: 'Debería hacer lo mismo. A mi pelo le hace falta un corte y mi auto necesita un servicio.' },
    { speaker: 'user', text: "I had my car serviced last month. I got the mechanic to check the brakes, too.", translation: 'Yo hice revisar mi auto el mes pasado. También conseguí que el mecánico revisara los frenos.' },
    { speaker: 'other', text: 'Did you have your phone fixed as well?', translation: '¿También hiciste arreglar tu teléfono?' },
    { speaker: 'user', text: "I did! It had been broken for weeks.", translation: '¡Sí! Llevaba semanas roto.' },
  ],
  readingText: {
    title: 'A busy weekend',
    body: "This weekend I have a lot to do. The house needs painting, so I'm going to have the living room painted by a professional. My car needs to be washed, and I also have to get my phone fixed. Last month I had my laptop stolen from a café, and I still need to get a new one. My brother says I should get him to help me. \"You can't get everything done by Sunday,\" he says. He is right, but I'll try. At least my hair doesn't need cutting for another month.",
    translation:
      'Este fin de semana tengo mucho que hacer. La casa necesita pintura, así que haré pintar la sala por un profesional. Mi auto necesita lavarse y además tengo que hacer arreglar mi teléfono. El mes pasado me robaron la laptop en un café y todavía necesito conseguir una nueva. Mi hermano dice que debería conseguir que él me ayude. «No puedes terminar todo para el domingo», dice. Tiene razón, pero lo intentaré. Al menos mi pelo no necesita un corte por otro mes.',
  },
  tips: [
    "Have / get + objeto + participio: otra persona hace la acción por ti. «I had my hair cut», no «I cut my hair».",
    "Have + persona + base («had him check») y get + persona + to («got him to check»).",
    "Need + -ing tiene sentido pasivo: «The car needs washing» = «The car needs to be washed».",
    "Have something done también sirve para sucesos negativos: «She had her bag stolen».",
  ],
  dailyWords: palabras('mechanic', 'plumber', 'electrician', 'builder', 'broken', 'delivery'),
  relacionados: [
    { etiqueta: '📖 Gramática: La Voz Pasiva (Passive Voice)', ruta: '/gramatica/concepto/la-voz-pasiva-passive-voice' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

// ─── Unidad 8 (id 120) · Modales en pasado: arrepentimientos y especulación ───

const UNIDAD_120: Unit = {
  title: 'Past Modals: Regrets and Speculation About the Past',
  topic: BLOQUE_B2_3,
  level: 'B2',
  explain: [
    teoria(
      '1 · Should have: lo que debió hacerse',
      "Should have + participio expresa arrepentimiento (de lo que hiciste o no hiciste) o crítica a otra persona. La acción NO se hizo:\n\n• I should have studied more. (no estudié; me arrepiento)\n• You should have told me. (no me dijiste; te critico)\n• He shouldn't have said that. (lo dijo; no debió)\n\nEn el habla rápida se oye shoulda / shouldn't've.",
      [
        ['I should have studied more.', 'Debí haber estudiado más.'],
        ['You should have told me.', 'Debiste habérmelo dicho.'],
        ["He shouldn't have said that.", 'No debió haber dicho eso.'],
        ['We should have left earlier.', 'Debimos haber salido más temprano.'],
      ]
    ),
    teoria(
      '2 · Could have: una posibilidad que no se aprovechó',
      "Could have + participio habla de algo que era posible, pero no pasó:\n\n• I could have gone to university, but I started working. (pude, pero no)\n• She could have won the race. (estuvo cerca)\n• You could have called me!\n\nTambién expresa un peligro o un riesgo que no ocurrió: «The car could have hit you» (pero no te golpeó).",
      [
        ['I could have gone to university, but I started working.', 'Pude haber ido a la universidad, pero empecé a trabajar.'],
        ['She could have won the race.', 'Ella pudo haber ganado la carrera.'],
        ['You could have called me!', '¡Pudiste haberme llamado!'],
        ['The car could have hit you.', 'El auto pudo haberte golpeado.'],
      ]
    ),
    teoria(
      '3 · Would have: lo que habría pasado',
      "Would have + participio dice lo que habría pasado en otra situación (no real):\n\n• I would have helped you if I had known.\n• She would have come, but she was ill.\n• I wouldn't have taken that job if I had known.\n\nSe usa en el tercer condicional y para imaginar otro pasado.",
      [
        ['I would have helped you if I had known.', 'Te habría ayudado si lo hubiera sabido.'],
        ['She would have come, but she was ill.', 'Ella habría venido, pero estaba enferma.'],
        ["I wouldn't have taken that job if I had known.", 'No habría tomado ese trabajo si lo hubiera sabido.'],
        ['What would you have done?', '¿Qué habrías hecho tú?'],
      ]
    ),
    teoria(
      '4 · Negativa y pregunta de los modales perfectos',
      "• Negativa: not después del modal → «I shouldn't have gone» · «She couldn't have known».\n• Pregunta: el modal va antes del sujeto → «Should I have called?» · «Could she have won?».\n• Información: «What should I have done?» · «Why would he have left?».\n\nHave no cambia (ni has ni had) y el verbo principal va en participio.",
      [
        ["I shouldn't have gone.", 'No debí haber ido.'],
        ['Should I have called him?', '¿Debí haberlo llamado?'],
        ['What should I have done?', '¿Qué debí haber hecho?'],
        ["She couldn't have known.", 'Ella no pudo haberlo sabido.'],
      ]
    ),
    teoria(
      '5 · Especular sobre el pasado: must have',
      "Para deducir con casi total seguridad qué pasó, se usa must have + participio:\n\n• He must have missed the train. (seguro que lo perdió)\n• She must have been very tired.\n• It must have rained last night.\n\nSe basa en una evidencia: el suelo mojado, la cara de alguien, un retraso.",
      [
        ['He must have missed the train.', 'Seguro que perdió el tren.'],
        ['She must have been very tired.', 'Debió de estar muy cansada.'],
        ['It must have rained last night.', 'Seguro que llovió anoche.'],
        ['They must have forgotten.', 'Seguro que se olvidaron.'],
      ]
    ),
    teoria(
      "6 · Might have, may have, could have: posible",
      "May / might / could have + participio dicen que algo es posible, pero no estás seguro:\n\n• She might have missed the bus.\n• They may have gone home.\n• He could have been stuck in traffic.\n\nNegativas: «She might not have heard» (quizás no oyó) · «They may not have known».",
      [
        ['She might have missed the bus.', 'Quizás perdió el bus.'],
        ['They may have gone home.', 'Puede que se hayan ido a casa.'],
        ['He could have been stuck in traffic.', 'Pudo haber estado atrapado en el tráfico.'],
        ["She might not have heard the phone.", 'Quizás no oyó el teléfono.'],
      ]
    ),
    teoria(
      "7 · Can't have y couldn't have: imposible",
      "Can't have / couldn't have + participio expresan que es casi seguro que algo NO pasó:\n\n• He can't have seen us. (seguro que no nos vio)\n• She couldn't have known. (no pudo haberlo sabido)\n• They can't have arrived yet.\n\nSon lo contrario de must have: «He must have left» (sí) / «He can't have left» (no).",
      [
        ["He can't have seen us.", 'No puede habernos visto.'],
        ["She couldn't have known.", 'No pudo haberlo sabido.'],
        ["They can't have arrived yet.", 'No pueden haber llegado todavía.'],
        ["It can't have been easy.", 'No debió de ser fácil.'],
      ]
    ),
    teoria(
      '8 · Con be + -ing: lo que estaba pasando',
      "Con be + -ing se especula sobre lo que alguien estaba haciendo:\n\n• She must have been working. (seguro que estaba trabajando)\n• He might have been sleeping. (quizás dormía)\n• They can't have been waiting long.\n• I should have been listening.\n\nSe combinan modal + have been + verbo-ing.",
      [
        ['She must have been working.', 'Seguro que estaba trabajando.'],
        ['He might have been sleeping.', 'Quizás estaba durmiendo.'],
        ["They can't have been waiting long.", 'No pueden haber esperado mucho.'],
        ['I should have been listening.', 'Debí haber estado escuchando.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Arrepentimiento', suj('I'), aux('should have'), verbo('studied')),
    fl('Posibilidad perdida', suj('I'), aux('could have'), verbo('gone')),
    fl('Casi seguro: sí', suj('He'), aux('must have'), verbo('left')),
    fl('Casi seguro: no', suj('He'), aux("can't have"), verbo('left')),
  ],
  table: {
    cols: ['Idea', 'Estructura', 'Ejemplo'],
    rows: [
      ['arrepentimiento', 'should have + participio', 'I should have studied.'],
      ['posibilidad perdida', 'could have + participio', 'I could have gone.'],
      ['habría pasado', 'would have + participio', 'I would have helped.'],
      ['seguro que sí', 'must have + participio', 'He must have left.'],
      ['posible', 'might / may have + participio', 'He might have left.'],
      ['seguro que no', "can't have + participio", "He can't have left."],
    ],
  },
  contrastCard: {
    left: { label: 'Should have — arrepentimiento', example: 'I should have studied more.', highlight: 'should have studied' },
    right: { label: 'Must have — deducción', example: 'He must have missed the train.', highlight: 'must have missed' },
    caption: 'Should have habla de lo que debió hacerse. Must have deduce lo que seguramente pasó.',
  },
  quiz: [
    ejercicio(
      'I failed the test. I ___ studied more.',
      'should have',
      ['should', 'should has', 'would to'],
      'Un arrepentimiento por no haber estudiado se expresa con should have + participio. should solo no marca el pasado y las otras formas no existen.'
    ),
    ejercicio(
      "He isn't here yet. He ___ the bus. (I'm sure)",
      'must have missed',
      ['must miss', 'must has missed', 'can have missed'],
      'Una deducción casi segura sobre el pasado se expresa con must have + participio. must miss es presente y las otras opciones están mal formadas.'
    ),
    ejercicio(
      "I'm sure he didn't see us. He ___ us, because he would have said hello.",
      "can't have seen",
      ['must have seen', "can't have see", "couldn't seen"],
      'Es casi seguro que no los vio: can\'t have + participio. must have seen diría lo contrario y las otras formas están mal construidas.'
    ),
    ejercicio(
      'I ___ you if I had known you needed help.',
      'would have helped',
      ['will have helped', 'would helped', 'had helped'],
      'El tercer condicional usa would have + participio en la cláusula principal. will have helped, would helped y had helped no son correctas.'
    ),
    ejercicio(
      "They're late. They ___ stuck in traffic. (possible)",
      'might have been',
      ['might been', 'might be had', 'must had been'],
      'Para una posibilidad sobre el pasado se usa might have been + participio. Las otras formas están mal construidas.'
    ),
  ],
  flashcards: [
    tarjeta('Should have', 'Arrepentimiento o crítica: lo que debió hacerse.\nI should have studied. · You shouldn\'t have said that.'),
    tarjeta('Could have y would have', 'could have: era posible, pero no pasó.\nwould have: lo que habría pasado en otra situación.'),
    tarjeta('Must have', 'Casi seguro que sí pasó.\nHe must have missed the train.'),
    tarjeta("Might have y can't have", "might / may / could have: posible\ncan't / couldn't have: casi seguro que no pasó."),
    tarjeta('Con -ing', 'modal + have been + -ing\nShe must have been working. · He might have been sleeping.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'I failed my driving test again. I should have practiced more.', translation: 'Reprobé mi examen de manejo otra vez. Debí haber practicado más.' },
    { speaker: 'user', text: "You could have asked me for help. I would have gone with you.", translation: 'Pudiste haberme pedido ayuda. Habría ido contigo.' },
    { speaker: 'other', text: "I didn't want to bother you. The examiner must have thought I was very nervous.", translation: 'No quería molestarte. El examinador seguro pensó que estaba muy nervioso.' },
    { speaker: 'user', text: "You can't have been that bad. Maybe you just made one big mistake.", translation: 'No pudiste haber estado tan mal. Quizás cometiste un solo error grave.' },
    { speaker: 'other', text: "Maybe. I might have forgotten to check the mirror.", translation: 'Quizás. Pude haber olvidado revisar el espejo.' },
    { speaker: 'user', text: "Next time, you'll pass. You shouldn't have given up so easily.", translation: 'La próxima vez aprobarás. No debiste rendirte tan fácil.' },
  ],
  readingText: {
    title: 'The empty office',
    body: "On Monday morning the office was empty. The door was open, and a cup of coffee was still warm on the desk. Somebody must have left in a hurry. Maybe there was an emergency, or somebody might have been called away. It can't have been long ago. The security guard said, \"I should have checked the cameras!\" Then he added, \"They could have broken in, but nothing was stolen.\" At noon we learned the truth: the whole team had gone to a surprise meeting. If I had known, I would have gone, too!",
    translation:
      'El lunes por la mañana la oficina estaba vacía. La puerta estaba abierta y una taza de café todavía estaba tibia en el escritorio. Alguien debió de irse con prisa. Quizás hubo una emergencia o alguien pudo haber sido llamado. No puede haber sido hace mucho. El guardia de seguridad dijo: «¡Debí haber revisado las cámaras!». Luego añadió: «Pudieron haber entrado a robar, pero no se llevaron nada». Al mediodía supimos la verdad: todo el equipo había ido a una reunión sorpresa. Si lo hubiera sabido, yo también habría ido.',
  },
  tips: [
    "Should have + participio = arrepentimiento o crítica. «I should have studied», «You shouldn't have said that».",
    "Must have + participio = casi seguro que pasó. Can't have = casi seguro que NO pasó.",
    "Might / may / could have + participio = posible, pero no seguro.",
    "Would have + participio = lo que habría pasado en otra situación (tercer condicional).",
  ],
  dailyWords: palabras('mistake', 'chance', 'luck', 'trouble', 'emergency', 'decision'),
  relacionados: [
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
  ],
};

const FORMAS_120: FormasUnidad = {
  titulo: 'Should have (arrepentimiento)',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('should have'), verbo('past participle'))],
    ejemplos: [
      ['I should have studied more.', 'Debí haber estudiado más.'],
      ['You should have told me.', 'Debiste habérmelo dicho.'],
      ['We should have left earlier.', 'Debimos haber salido más temprano.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("shouldn't have"), verbo('past participle'))],
    ejemplos: [
      ["I shouldn't have said that.", 'No debí haber dicho eso.'],
      ["He shouldn't have gone.", 'Él no debió haber ido.'],
      ["We shouldn't have waited.", 'No debimos haber esperado.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Should'), suj('subject'), resto('have'), verbo('past participle'))],
    ejemplos: [
      ['Should I have called him?', '¿Debí haberlo llamado?'],
      ['Should they have waited?', '¿Debieron haber esperado?'],
      ['What should I have done?', '¿Qué debí haber hecho?'],
    ],
  },
  nota: "Los modales perfectos siempre llevan have + participio (should / could / would / must / might / can't have). Contracciones: shouldn't've, couldn't've. Respuestas cortas: Yes, you should. / No, you shouldn't.",
  ojo: "Después de should have el verbo va en participio: «should have gone», no «should have go». Y el modal no cambia con he, she o it.",
};

// ─── Unidad 9 (id 121) · Estilo indirecto: afirmaciones y preguntas ───

const UNIDAD_121: Unit = {
  title: 'Reported Speech: Statements and Reported Questions',
  topic: BLOQUE_B2_3,
  level: 'B2',
  explain: [
    teoria(
      '1 · Estilo indirecto: la idea',
      "El estilo directo reproduce las palabras exactas. El estilo indirecto cuenta lo que alguien dijo, sin comillas, y generalmente cambia los tiempos y las palabras de referencia:\n\n• Directo: She said, \"I am tired.\"\n• Indirecto: She said (that) she was tired.\n\nEl verbo introductorio (said, told) va en pasado, y el tiempo del mensaje «retrocede» un paso.",
      [
        ['She said, "I am tired."', 'Ella dijo: «Estoy cansada».'],
        ['She said (that) she was tired.', 'Ella dijo que estaba cansada.'],
        ['He said, "I work here."', 'Él dijo: «Trabajo aquí».'],
        ['He said (that) he worked there.', 'Él dijo que trabajaba allí.'],
      ]
    ),
    teoria(
      '2 · Cómo cambian los tiempos',
      "Cada tiempo retrocede un paso al pasado:\n\n• presente simple → pasado simple: «I work» → he worked\n• presente continuo → pasado continuo: «I am working» → he was working\n• pasado simple → pasado perfecto: «I left» → he had left\n• presente perfecto → pasado perfecto: «I've seen» → he had seen\n• will → would · can → could · may → might\n• must → had to (obligación)",
      [
        ['"I work here." → He said he worked there.', '«Trabajo aquí» → Dijo que trabajaba allí.'],
        ['"I am leaving." → She said she was leaving.', '«Me voy» → Dijo que se iba.'],
        ['"I left early." → He said he had left early.', '«Salí temprano» → Dijo que había salido temprano.'],
        ['"I will call." → She said she would call.', '«Llamaré» → Dijo que llamaría.'],
      ]
    ),
    teoria(
      '3 · Cambios de pronombres, tiempo y lugar',
      "Además de los tiempos, cambian las palabras de referencia:\n\n• I → he / she · my → his / her · we → they\n• here → there · this → that\n• today → that day · tomorrow → the next day / the following day\n• yesterday → the day before · last week → the week before\n• now → then · ago → before\n\nSolo cambian si el lugar o el momento del que habla ya no es el mismo.",
      [
        ['"I will see you tomorrow." → He said he would see me the next day.', '«Te veo mañana» → Dijo que me vería al día siguiente.'],
        ['"I live here." → She said she lived there.', '«Vivo aquí» → Dijo que vivía allí.'],
        ['"I saw him yesterday." → She said she had seen him the day before.', '«Lo vi ayer» → Dijo que lo había visto el día anterior.'],
        ['"We are busy now." → They said they were busy then.', '«Estamos ocupados ahora» → Dijeron que estaban ocupados entonces.'],
      ]
    ),
    teoria(
      '4 · Say y tell',
      "• say + (that) + mensaje: «She said (that) she was tired».\n• tell + persona + (that) + mensaje: «She told me (that) she was tired».\n• say to + persona: «She said to me…» (menos común).\n\n⚠️ Ojo: tell siempre lleva una persona: «She told me», no «She told that». Say no lleva persona directa: «She said that», no «She said me».",
      [
        ['She said (that) she was tired.', 'Dijo que estaba cansada.'],
        ['She told me (that) she was tired.', 'Me dijo que estaba cansada.'],
        ['He told his boss that he was ill.', 'Le dijo a su jefe que estaba enfermo.'],
        ['They said they would come.', 'Dijeron que vendrían.'],
      ]
    ),
    teoria(
      '5 · Cuándo no cambia el tiempo',
      "No es obligatorio retroceder el tiempo si lo que se dijo todavía es verdad o si el verbo introductorio está en presente:\n\n• She said she lives in Lima. (todavía vive)\n• He says he is tired. (verbo introductorio en presente)\n• The teacher said that water boils at 100 degrees. (hecho general)\n\nSi hay duda, retroceder el tiempo es siempre correcto en los exámenes.",
      [
        ['She said she lives in Lima.', 'Dijo que vive en Lima.'],
        ['He says he is tired.', 'Él dice que está cansado.'],
        ['The teacher said that water boils at 100 degrees.', 'El profesor dijo que el agua hierve a 100 grados.'],
        ['She told me she loves her job.', 'Me dijo que ama su trabajo.'],
      ]
    ),
    teoria(
      '6 · Mandatos y peticiones en estilo indirecto',
      "Las órdenes y peticiones pasan a tell / ask + persona + to + verbo:\n\n• \"Close the door.\" → He told me to close the door.\n• \"Please wait.\" → She asked me to wait.\n• \"Don't be late.\" → She told us not to be late.\n\nNo se usa that ni la forma de verbo conjugado: el infinitivo con to hace de verbo.",
      [
        ['"Close the door." → He told me to close the door.', '«Cierra la puerta» → Me dijo que cerrara la puerta.'],
        ['"Please wait." → She asked me to wait.', '«Espera, por favor» → Me pidió que esperara.'],
        ['"Don\'t be late." → She told us not to be late.', '«No lleguen tarde» → Nos dijo que no llegáramos tarde.'],
        ['"Open your books." → The teacher told us to open our books.', '«Abran sus libros» → La profesora nos dijo que abriéramos los libros.'],
      ]
    ),
    teoria(
      '7 · Preguntas de sí / no en estilo indirecto',
      "Las preguntas de sí / no se unen con if o whether. El orden es el de una afirmación, sin do / does / did, y los tiempos retroceden:\n\n• \"Do you like pizza?\" → He asked me if I liked pizza.\n• \"Is she coming?\" → I asked whether she was coming.\n• \"Have you finished?\" → She asked if I had finished.\n\nNo hay signo de interrogación al final.",
      [
        ['"Do you like pizza?" → He asked me if I liked pizza.', '«¿Te gusta la pizza?» → Me preguntó si me gustaba la pizza.'],
        ['"Is she coming?" → I asked whether she was coming.', '«¿Viene ella?» → Pregunté si ella venía.'],
        ['"Have you finished?" → She asked if I had finished.', '«¿Has terminado?» → Preguntó si había terminado.'],
        ['"Can you swim?" → He asked if I could swim.', '«¿Sabes nadar?» → Preguntó si sabía nadar.'],
      ]
    ),
    teoria(
      '8 · Preguntas con palabra interrogativa en estilo indirecto',
      "Con what, where, when, why, how, who se mantiene la palabra interrogativa. El orden es de afirmación, sin do:\n\n• \"Where do you live?\" → She asked me where I lived.\n• \"What time is it?\" → He asked what time it was.\n• \"Why did you leave?\" → They asked why I had left.\n• \"How are you?\" → She asked how I was.\n\n⚠️ Ojo: «asked where I lived», no «asked where did I live».",
      [
        ['"Where do you live?" → She asked me where I lived.', '«¿Dónde vives?» → Me preguntó dónde vivía.'],
        ['"What time is it?" → He asked what time it was.', '«¿Qué hora es?» → Preguntó qué hora era.'],
        ['"Why did you leave?" → They asked why I had left.', '«¿Por qué te fuiste?» → Preguntaron por qué me había ido.'],
        ['"How are you?" → She asked how I was.', '«¿Cómo estás?» → Preguntó cómo estaba.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Afirmación', resto('She said'), resto('(that)'), suj('she'), verbo('was tired')),
    fl('Orden', resto('She told'), suj('me'), resto('to'), verbo('wait')),
    fl('Sí / no', resto('He asked'), suj('me'), resto('if'), suj('I'), verbo('liked it')),
    fl('Wh-', resto('She asked'), resto('where'), suj('I'), verbo('lived')),
  ],
  table: {
    cols: ['Directo', 'Indirecto', 'Cambio'],
    rows: [
      ['I work', 'he worked', 'presente → pasado'],
      ['I am working', 'he was working', 'continuo → pasado continuo'],
      ['I left', 'he had left', 'pasado → pasado perfecto'],
      ['I will go', 'he would go', 'will → would'],
      ['tomorrow', 'the next day', 'referencia de tiempo'],
      ['here', 'there', 'referencia de lugar'],
    ],
  },
  contrastCard: {
    left: { label: 'Pregunta directa — inversión', example: 'Where do you live?', highlight: 'do you live' },
    right: { label: 'Pregunta indirecta — orden normal', example: 'She asked where I lived.', highlight: 'where I lived' },
    caption: 'En el estilo indirecto la pregunta pierde la inversión y el do; el tiempo retrocede.',
  },
  quiz: [
    ejercicio(
      'She said, "I am tired." → She said she ___ tired.',
      'was',
      ['were', 'be', 'been'],
      'Con she, el presente am pasa a pasado: was. were no concuerda con she y be y been no forman el pasado.'
    ),
    ejercicio(
      'He told ___ that he would come.',
      'me',
      ['to me', 'I', 'for me'],
      'Después de tell va directamente la persona (sin to): told me. to me, I y for me no son correctos.'
    ),
    ejercicio(
      'She asked, "Where do you live?" → She asked me where ___.',
      'I lived',
      ['did I live', 'do I live', 'I do live'],
      'En el estilo indirecto no se usa do / did y el verbo retrocede al pasado: I lived. Las otras formas conservan el orden de la pregunta directa.'
    ),
    ejercicio(
      'He asked me ___ I wanted some coffee.',
      'if',
      ['that', 'what', 'which'],
      'Una pregunta de sí / no en estilo indirecto se une con if o whether. that, what y which no forman esa pregunta.'
    ),
    ejercicio(
      '"I\'ll call you tomorrow," she said. → She said she would call me ___.',
      'the next day',
      ['yesterday', 'the day before', 'the next night'],
      'tomorrow cambia a the next day (o the following day) en el estilo indirecto. yesterday y the day before miran al pasado y the next night cambia el sentido.'
    ),
  ],
  flashcards: [
    tarjeta('Retroceder los tiempos', 'presente → pasado · pasado → pasado perfecto\nwill → would · can → could'),
    tarjeta('Pronombres y referencias', 'I → he / she · here → there · now → then\ntomorrow → the next day · yesterday → the day before'),
    tarjeta('Say y tell', 'said (that) she was tired\ntold me (that) she was tired — tell lleva persona'),
    tarjeta('Preguntas indirectas', 'Sí / no: asked if / whether + orden normal.\nWh-: asked where I lived — sin do, sin inversión.'),
    tarjeta('Órdenes', 'told me to close the door · asked me to wait\ntold us not to be late'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "What did the manager say in the meeting?", translation: '¿Qué dijo el gerente en la reunión?' },
    { speaker: 'user', text: "He said that sales had grown by ten percent. He told us we would get a bonus.", translation: 'Dijo que las ventas habían crecido un diez por ciento. Nos dijo que recibiríamos un bono.' },
    { speaker: 'other', text: 'Did he ask anything?', translation: '¿Preguntó algo?' },
    { speaker: 'user', text: 'Yes. He asked me if I could stay late on Friday and why the report was not finished.', translation: 'Sí. Me preguntó si podía quedarme hasta tarde el viernes y por qué el informe no estaba terminado.' },
    { speaker: 'other', text: 'And what did you answer?', translation: '¿Y qué respondiste?' },
    { speaker: 'user', text: 'I said I would finish it the next day.', translation: 'Dije que lo terminaría al día siguiente.' },
  ],
  readingText: {
    title: 'The interview',
    body: "Yesterday I had a job interview. The manager said that the company was growing fast and that they needed new people. She asked me where I had studied and why I wanted the job. I told her that I loved teaching and that I had worked as a tutor for two years. She asked if I could start on Monday. I said I would think about it and that I would call her the next day. Before I left, she told me not to worry and said she would send an email the following week.",
    translation:
      'Ayer tuve una entrevista de trabajo. La gerente dijo que la empresa estaba creciendo rápido y que necesitaban gente nueva. Me preguntó dónde había estudiado y por qué quería el trabajo. Le dije que me encantaba enseñar y que había trabajado como tutor dos años. Preguntó si podía empezar el lunes. Dije que lo pensaría y que la llamaría al día siguiente. Antes de irme, me dijo que no me preocupara y dijo que enviaría un correo la semana siguiente.',
  },
  tips: [
    "En el estilo indirecto el tiempo retrocede: presente → pasado, pasado → pasado perfecto, will → would.",
    "Say no lleva persona directa («said that»); tell sí («told me that»).",
    "Las preguntas indirectas no llevan do / did ni inversión: «asked where I lived», no «asked where did I live».",
    "Las órdenes pasan a tell / ask + persona + to + verbo: «told me to close the door».",
  ],
  dailyWords: palabras('interview', 'manager', 'company', 'salary', 'contract', 'colleague'),
  relacionados: [
    { etiqueta: '📖 Gramática: Estructura de la oración (Sentence Structure)', ruta: '/gramatica/concepto/estructura-de-la-oracion-sentence-structure' },
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
  ],
};

/** Las unidades del bloque 3, por id interno. */
export const UNIDADES_BLOQUE_3: Record<number, Unit> = {
  119: UNIDAD_119,
  120: UNIDAD_120,
  121: UNIDAD_121,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 3 que las tienen. */
export const FORMAS_BLOQUE_3: Record<number, FormasUnidad | FormasUnidad[]> = {
  120: FORMAS_120,
};
