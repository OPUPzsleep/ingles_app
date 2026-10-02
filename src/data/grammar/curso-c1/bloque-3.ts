import { aux, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_C1_3 } from '@/data/grammar/topics';
import type { Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 3 · Convivencia, ciencia de los alimentos y éxito / felicidad (ids 152–154: Unidad 7–9 del nivel C1).

// ─── Unidad 7 (id 152) · Phrasal verbs avanzados; infinitivos y -ing; aclarar y enfatizar ───

const UNIDAD_152: Unit = {
  title: 'Advanced Phrasal Verbs; Infinitives and -ing After Adjectives, Nouns and Pronouns',
  topic: BLOQUE_C1_3,
  level: 'C1',
  explain: [
    teoria(
      '1 · Phrasal verbs avanzados: significados no literales',
      "En C1 se espera dominar phrasal verbs de significado figurado, frecuentes al hablar de convivencia, trabajo y planes:\n\n• bring up (criar; sacar un tema) · carry out (llevar a cabo) · come up with (idear)\n• fall through (fracasar un plan) · pull off (lograr algo difícil) · turn down (rechazar)\n• sort out (resolver) · back up (apoyar; hacer copia) · put off (posponer)\n• live up to (estar a la altura) · get away with (salirse con la suya)\n\n«The deal fell through.» · «She pulled off a miracle.» · «He got away with it.»",
      [
        ['The deal fell through at the last minute.', 'El acuerdo fracasó a último minuto.'],
        ['She pulled off a real miracle.', 'Ella logró un verdadero milagro.'],
        ['He got away with breaking the rules.', 'Se salió con la suya al romper las reglas.'],
        ["The film didn't live up to expectations.", 'La película no estuvo a la altura de las expectativas.'],
      ]
    ),
    teoria(
      '2 · Separables e inseparables: el orden del objeto',
      "• Separables (el objeto puede ir en medio): turn down an offer / turn an offer down · put off a meeting / put a meeting off.\n• Con pronombre, siempre en medio: «turn it down», «put it off».\n• Inseparables (el objeto siempre después): come up with a plan · live up to expectations · get away with it.\n• Los de tres partes son siempre inseparables: look forward to, put up with, run out of.\n\nSi dudas, revisa el diccionario: casi siempre indica si se separan.",
      [
        ['He turned down the offer. / He turned the offer down.', 'Rechazó la oferta.'],
        ['I turned it down.', 'Lo rechacé.'],
        ['She came up with a brilliant plan.', 'Ella ideó un plan brillante.'],
        ["I can't put up with the noise.", 'No soporto el ruido.'],
      ]
    ),
    teoria(
      '3 · Adjetivo + infinitivo',
      "Muchos adjetivos van seguidos de to + verbo para decir cómo se siente alguien o cómo es algo:\n\n• Estado: eager to · reluctant to · happy to · afraid to · determined to.\n• Reacción: quick to (react) · slow to · likely to · bound to · certain to.\n• Valoración + to: easy / difficult / impossible to + verbo («This is difficult to explain»).\n\n«She was reluctant to admit it.» · «He is bound to win.» · «It's impossible to say.»",
      [
        ['She was reluctant to admit it.', 'Ella era reacia a admitirlo.'],
        ['He is bound to win.', 'Seguro que va a ganar.'],
        ['This is difficult to explain.', 'Esto es difícil de explicar.'],
        ['The residents were slow to complain.', 'Los vecinos tardaron en quejarse.'],
      ]
    ),
    teoria(
      '4 · Adjetivo + preposición + -ing',
      "Cuando el adjetivo lleva una preposición fija, el verbo siguiente va en -ing:\n\n• good / bad at · tired of · fed up with · keen on\n• capable of · proud of · afraid of · guilty of · responsible for\n\n«I'm tired of waiting.» · «She's capable of doing much better.» · «He's responsible for organising the event.»\n\nSi quieres usar un infinitivo, cambia el adjetivo: afraid to (miedo a hacerlo ahora) / afraid of -ing (miedo de que pase).",
      [
        ["I'm tired of waiting for answers.", 'Estoy cansado de esperar respuestas.'],
        ["She's capable of doing much better.", 'Ella es capaz de hacerlo mucho mejor.'],
        ["He's responsible for organising the event.", 'Él es responsable de organizar el evento.'],
        ["I'm afraid of making a mistake.", 'Temo cometer un error.'],
      ]
    ),
    teoria(
      '5 · Sustantivo + infinitivo o -ing',
      "Algunos sustantivos se combinan con to + verbo o con of / for / in + -ing:\n\n• Con to: a decision to · an attempt to · a chance to · the right to · a reason to · a need to.\n• Con preposición + -ing: the habit of · a way of · the idea of · a chance of · an interest in · a reason for.\n\n«It was a difficult decision to make.» · «She has a habit of arriving late.» · «There's no point in arguing.»",
      [
        ['It was a difficult decision to make.', 'Fue una decisión difícil de tomar.'],
        ['She has a habit of arriving late.', 'Tiene la costumbre de llegar tarde.'],
        ["There's no point in arguing.", 'No tiene sentido discutir.'],
        ['I have no reason to doubt him.', 'No tengo motivos para dudar de él.'],
      ]
    ),
    teoria(
      '6 · Pronombre indefinido + infinitivo',
      "Con something, anything, nothing, someone, nobody, somewhere se usa to + verbo para describir lo que se puede hacer o necesita:\n\n• I need something to eat. · Is there anything to drink?\n• She has nobody to talk to.\n• We need somewhere to stay.\n• He had nothing to lose.\n\nSi el verbo lleva preposición, esta va al final: «someone to talk to», «nothing to worry about».",
      [
        ['I need something to eat.', 'Necesito algo para comer.'],
        ['She has nobody to talk to.', 'No tiene con quién hablar.'],
        ['We need somewhere to stay.', 'Necesitamos un lugar donde quedarnos.'],
        ["There's nothing to worry about.", 'No hay nada de qué preocuparse.'],
      ]
    ),
    teoria(
      '7 · Estrategia: aclarar con What I\'m saying is… e I mean…',
      "💬 Para aclarar lo que has dicho o reformularlo:\n\n• What I'm saying is… → «What I'm saying is that we need more time.»\n• What I mean is… / I mean… → «I mean, it's not that I dislike him.»\n• In other words,… / That is,… → reformulación.\n• Let me put it another way.\n\nI mean también se usa para corregir lo que acabas de decir: «We'll go on Monday — I mean, Tuesday».",
      [
        ["What I'm saying is that we need more time.", 'Lo que digo es que necesitamos más tiempo.'],
        ["I mean, it's not that I dislike him.", 'Quiero decir, no es que no me caiga bien.'],
        ["We'll go on Monday — I mean, Tuesday.", 'Iremos el lunes... digo, el martes.'],
        ['In other words, we have no choice.', 'En otras palabras, no tenemos opción.'],
      ]
    ),
    teoria(
      '8 · Estrategia: enfatizar con I have to say',
      "💬 I have to say (o I must say) enfatiza una opinión o una observación, a veces con sorpresa o franqueza:\n\n• I have to say, I was impressed.\n• I have to say that was the worst meal I've ever had.\n• I must say, you've done a great job.\n\nSe coloca al inicio o en medio de la frase y suele ir con una pausa. Es más fuerte que «I think».",
      [
        ['I have to say, I was impressed.', 'Debo decir que quedé impresionado.'],
        ["I have to say that was the worst meal I've ever had.", 'Debo decir que esa fue la peor comida que he probado.'],
        ["I must say, you've done a great job.", 'Debo decir que has hecho un gran trabajo.'],
        ["It's, I have to say, a brilliant idea.", 'Es, debo decir, una idea brillante.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Adjetivo + to', suj('She'), aux('was reluctant to'), verbo('admit')),
    fl('Adjetivo + prep + -ing', suj('I'), aux("'m tired of"), verbo('waiting')),
    fl('Indefinido + to', resto('something'), resto('to'), verbo('eat')),
    fl('Aclarar', resto("What I'm saying is"), resto('that…')),
  ],
  table: {
    cols: ['Estructura', 'Ejemplo', 'Nota'],
    rows: [
      ['adjetivo + to + verbo', 'eager to help', 'sentimiento o valoración'],
      ['adjetivo + prep + -ing', 'tired of waiting', 'preposición fija'],
      ['sustantivo + to + verbo', 'a decision to make', 'decisión, intento'],
      ['sustantivo + prep + -ing', 'a habit of arriving late', 'of / for / in'],
      ['indefinido + to + verbo', 'something to eat', 'preposición al final'],
    ],
  },
  contrastCard: {
    left: { label: 'Phrasal separable', example: 'He turned the offer down.', highlight: 'turned the offer down' },
    right: { label: 'Phrasal inseparable', example: 'She came up with a plan.', highlight: 'came up with a plan' },
    caption: 'En los separables el objeto puede ir en medio. En los inseparables siempre va después.',
  },
  quiz: [
    ejercicio(
      'The plan fell ___ because nobody had enough money.',
      'through',
      ['up', 'back', 'over'],
      'Fall through significa fracasar un plan. fall up, fall back y fall over no tienen ese sentido.'
    ),
    ejercicio(
      'He turned ___ the job offer because the salary was too low.',
      'down',
      ['up', 'off', 'away'],
      'Turn down significa rechazar. turn up significa aparecer, turn off apagar y turn away apartarse.'
    ),
    ejercicio(
      'She was reluctant ___ the truth.',
      'to admit',
      ['admitting', 'for admit', 'of admitting'],
      'Reluctant va seguido de to + verbo: reluctant to admit. admitting, for admit y of admitting no forman esa estructura.'
    ),
    ejercicio(
      "I'm tired ___ waiting. Let's go.",
      'of',
      ['to', 'for', 'at'],
      'La combinación fija es tired of + -ing. to, for y at no se combinan con tired en esta estructura.'
    ),
    ejercicio(
      'Have you got anything ___?',
      'to eat',
      ['to eating', 'for eat', 'eat'],
      'Un pronombre indefinido se combina con to + verbo base: anything to eat. to eating, for eat y eat no forman la estructura.'
    ),
  ],
  flashcards: [
    tarjeta('Phrasal verbs figurados', 'fall through · pull off · get away with · live up to · come up with\nturn down · put off · sort out'),
    tarjeta('Separables o no', 'turn it down (con pronombre, en medio)\ncome up with a plan (inseparable)'),
    tarjeta('Adjetivo + to / prep + -ing', 'reluctant to admit · eager to help · bound to win\ntired of waiting · capable of doing'),
    tarjeta('Indefinidos + to', 'something to eat · nobody to talk to · nothing to lose'),
    tarjeta('Aclarar y enfatizar', "What I'm saying is… · I mean… · In other words…\nI have to say, I was impressed."),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Our neighbours play music until midnight. I'm tired of putting up with it.", translation: 'Nuestros vecinos ponen música hasta medianoche. Estoy cansado de soportarlo.' },
    { speaker: 'user', text: "Have you thought about talking to them? What I'm saying is, maybe they don't realise.", translation: '¿Has pensado en hablar con ellos? Lo que digo es que quizás no se dan cuenta.' },
    { speaker: 'other', text: "I tried. I mean, I asked politely, but they were reluctant to listen.", translation: 'Lo intenté. Quiero decir, pedí amablemente, pero fueron reacios a escuchar.' },
    { speaker: 'user', text: "I have to say, that's disappointing. Why don't you come up with a plan together?", translation: 'Debo decir que eso es decepcionante. ¿Por qué no idean un plan juntos?' },
    { speaker: 'other', text: "Last time we tried to sort it out, the meeting fell through.", translation: 'La última vez que intentamos resolverlo, la reunión fracasó.' },
    { speaker: 'user', text: "Then I'd suggest giving them a letter. It's easier to ignore a person than to ignore a letter.", translation: 'Entonces sugeriría darles una carta. Es más fácil ignorar a una persona que a una carta.' },
  ],
  readingText: {
    title: 'Living together',
    body: "Sharing a flat is rarely easy. When we moved in, we were all keen to get along, but within a month small problems started to pile up. Nobody was willing to clean the kitchen, and there was always someone to blame. We tried to sort things out with a weekly meeting, but the first one fell through. In the end we came up with a rota that everyone could live with. I have to say, it works better than I expected. I'm proud of having solved the problem, and I no longer have a reason to dread going home.",
    translation:
      'Compartir un piso rara vez es fácil. Cuando nos mudamos, todos estábamos ansiosos por llevarnos bien, pero en un mes empezaron a acumularse pequeños problemas. Nadie quería limpiar la cocina y siempre había alguien a quien culpar. Intentamos resolver las cosas con una reunión semanal, pero la primera fracasó. Al final ideamos un turno con el que todos podíamos vivir. Debo decir que funciona mejor de lo que esperaba. Estoy orgulloso de haber resuelto el problema y ya no tengo motivos para temer volver a casa.',
  },
  tips: [
    "Con un pronombre, los phrasal verbs separables siempre se separan: «turn it down», no «turn down it».",
    "Los phrasal verbs de tres partes (put up with, look forward to, run out of) son siempre inseparables.",
    "Después de una preposición va -ing: «tired of waiting», «capable of doing». Con adjetivos de sentimiento va to: «reluctant to admit».",
    "What I'm saying is… e I mean… aclaran; I have to say… enfatiza tu opinión.",
  ],
  dailyWords: palabras('neighbor', 'rent', 'rule', 'problem', 'trouble', 'attention'),
  relacionados: [
    { etiqueta: '📖 Gramática: Verbos Frasales (Phrasal Verbs)', ruta: '/gramatica/concepto/verbos-frasales-phrasal-verbs' },
    { etiqueta: '📖 Gramática: El Infinitivo (Infinitive)', ruta: '/gramatica/concepto/el-infinitivo-infinitive' },
    { etiqueta: '📖 Gramática: El Gerundio / Forma -ing', ruta: '/gramatica/concepto/el-gerundio-forma-ing-gerund' },
  ],
};

// ─── Unidad 8 (id 153) · Voz pasiva; verbos de causa y efecto; preguntas retóricas y ejemplos ───

const UNIDAD_153: Unit = {
  title: 'The Passive for Information Focus, Cause and Effect Verbs; Rhetorical Questions and Examples',
  topic: BLOQUE_C1_3,
  level: 'C1',
  explain: [
    teoria(
      '1 · La pasiva en todos los tiempos',
      "Se forma con el tiempo adecuado de be + participio pasado:\n\n• Presente simple: «Rice is grown in Asia».\n• Pasado simple: «The vaccine was discovered in 1796».\n• Presente perfecto: «Many studies have been published».\n• Futuro: «The results will be announced tomorrow».\n• Modales: «This must be checked».\n• Continuo: «The food is being tested».\n\nCambia el sujeto gramatical al objeto de la activa: lo que importa pasa a primer plano.",
      [
        ['The vaccine was discovered in 1796.', 'La vacuna fue descubierta en 1796.'],
        ['Many studies have been published on this topic.', 'Se han publicado muchos estudios sobre este tema.'],
        ['The results will be announced tomorrow.', 'Los resultados se anunciarán mañana.'],
        ['The food is being tested in a laboratory.', 'Se están analizando los alimentos en un laboratorio.'],
      ]
    ),
    teoria(
      '2 · Por qué usar la pasiva: foco en la información',
      "La pasiva se elige para controlar qué se destaca:\n\n• El agente es desconocido o evidente: «My bike was stolen».\n• Importa más lo que pasa que quién lo hace: «The samples were analysed».\n• Se quiere un tono formal u objetivo (ciencia, noticias, instrucciones): «Add the flour and the mixture is stirred».\n• Se ordena la información (lo conocido primero): «The report was written by our team».\n\nEn textos académicos y científicos es la forma más frecuente.",
      [
        ['My bike was stolen.', 'Me robaron la bicicleta.'],
        ['The samples were analysed in the laboratory.', 'Las muestras se analizaron en el laboratorio.'],
        ['The mixture is stirred and then heated.', 'La mezcla se revuelve y luego se calienta.'],
        ['The report was written by our team.', 'El informe fue escrito por nuestro equipo.'],
      ]
    ),
    teoria(
      '3 · Pasiva de verbos de opinión: it is said that…',
      "Con verbos como say, believe, think, know, report, expect se usan dos pasivas:\n\n• It + be + participio + that… → «It is said that sugar is addictive».\n• Sujeto + be + participio + to + verbo → «Sugar is said to be addictive».\n• Con tiempos pasados: «He is believed to have left the country».\n\nSon muy comunes en noticias y textos científicos.",
      [
        ['It is said that sugar is addictive.', 'Se dice que el azúcar es adictivo.'],
        ['Sugar is said to be addictive.', 'Se dice que el azúcar es adictivo (otra estructura).'],
        ['He is believed to have left the country.', 'Se cree que salió del país.'],
        ['The drug is expected to be approved next year.', 'Se espera que el fármaco sea aprobado el año próximo.'],
      ]
    ),
    teoria(
      '4 · Verbos de causa: cause, lead to, result in, bring about',
      "Para describir qué provoca algo (la causa produce el efecto):\n\n• cause + objeto → «Smoking causes cancer».\n• lead to + sustantivo → «Poor diet can lead to obesity».\n• result in → «The experiment resulted in failure».\n• bring about / give rise to / contribute to → «Technology brought about big changes».\n• make / force + objeto + verbo base → «The heat made the milk go off».",
      [
        ['Smoking causes cancer.', 'Fumar causa cáncer.'],
        ['A poor diet can lead to obesity.', 'Una mala dieta puede llevar a la obesidad.'],
        ['The experiment resulted in failure.', 'El experimento resultó en un fracaso.'],
        ['The heat made the milk go off.', 'El calor hizo que se echara a perder la leche.'],
      ]
    ),
    teoria(
      '5 · Verbos de efecto: result from, be due to, stem from',
      "Para ir desde el efecto hacia la causa:\n\n• result from → «The failure resulted from poor planning».\n• be due to / be caused by / be attributed to → «The delay was due to bad weather».\n• stem from / arise from → «Many problems stem from a lack of communication».\n• owing to / because of → «Owing to the strike, trains were cancelled».\n\nCuidado: result in (causa → efecto) y result from (efecto → causa) son opuestos.",
      [
        ['The failure resulted from poor planning.', 'El fracaso se debió a una mala planificación.'],
        ['The delay was due to bad weather.', 'El retraso se debió al mal tiempo.'],
        ['Many problems stem from a lack of communication.', 'Muchos problemas provienen de la falta de comunicación.'],
        ['Owing to the strike, trains were cancelled.', 'Debido a la huelga, se cancelaron los trenes.'],
      ]
    ),
    teoria(
      '6 · Estrategia: preguntas retóricas para argumentar',
      "💬 Una pregunta retórica no espera respuesta: la respuesta es obvia o la da el propio hablante. Sirve para argumentar:\n\n• Isn't it obvious? Who wouldn't want a healthier diet?\n• What's the alternative? Do we really want to repeat the same mistakes?\n• And the result? Nobody listened.\n• Why should we pay for their mistakes?\n\nSe usa al inicio de un argumento, para plantear un problema, o para cerrar con fuerza.",
      [
        ["Who wouldn't want a healthier diet?", '¿Quién no querría una dieta más sana?'],
        ["What's the alternative?", '¿Cuál es la alternativa?'],
        ['And the result? Nobody listened.', '¿Y el resultado? Nadie escuchó.'],
        ['Why should we pay for their mistakes?', '¿Por qué deberíamos pagar por sus errores?'],
      ]
    ),
    teoria(
      '7 · Estrategia: dar ejemplos con such as, like, take y for instance',
      "💬 Para ilustrar una idea:\n\n• such as + ejemplos (formal, lista): «Foods such as nuts and seeds are rich in protein».\n• like + ejemplos (informal): «Countries like Japan live longer».\n• For example / For instance (frase aparte): «Many cultures eat insects. For instance, in Mexico…».\n• Take… (como ejemplo): «Take Japan. They eat a lot of fish and live longer.»\n• e.g. (escrito).\n\nNo se usa such as para un solo ejemplo cerrado: se usa for example.",
      [
        ['Foods such as nuts and seeds are rich in protein.', 'Alimentos como las nueces y las semillas son ricos en proteínas.'],
        ['Countries like Japan live longer.', 'Países como Japón viven más tiempo.'],
        ['Many cultures eat insects. For instance, in Mexico, grasshoppers are popular.', 'Muchas culturas comen insectos. Por ejemplo, en México son populares los chapulines.'],
        ['Take Japan. They eat a lot of fish and live longer.', 'Toma Japón. Comen mucho pescado y viven más.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Pasiva (presente perfecto)', resto('Studies'), aux('have been'), verbo('published')),
    fl('Opinión impersonal', resto('It is said that'), resto('…')),
    fl('Causa', resto('Poor diet'), verbo('can lead to'), resto('obesity')),
    fl('Ejemplo', resto('Foods'), aux('such as'), resto('nuts')),
  ],
  table: {
    cols: ['Dirección', 'Verbos', 'Ejemplo'],
    rows: [
      ['causa → efecto', 'cause, lead to, result in', 'Poor diet leads to obesity.'],
      ['efecto → causa', 'result from, be due to, stem from', 'Obesity stems from poor diet.'],
      ['pasiva impersonal', 'it is said / believed that', 'It is said that…'],
      ['ejemplos', 'such as, like, take, for instance', 'Take Japan, for instance.'],
    ],
  },
  contrastCard: {
    left: { label: 'Result in — causa → efecto', example: 'The storm resulted in floods.', highlight: 'resulted in' },
    right: { label: 'Result from — efecto → causa', example: 'The floods resulted from the storm.', highlight: 'resulted from' },
    caption: 'Result in introduce la consecuencia. Result from introduce la causa.',
  },
  quiz: [
    ejercicio(
      'The decision ___ by the board next week.',
      'will be announced',
      ['will announce', 'announced', 'will be announce'],
      'La pasiva en futuro es will be + participio: will be announced. will announce es activa y las otras formas están mal construidas.'
    ),
    ejercicio(
      'It is believed ___ the painting was stolen in 1990.',
      'that',
      ['what', 'which', 'to'],
      'La estructura impersonal es It is believed that + cláusula. what, which y to no forman esa estructura.'
    ),
    ejercicio(
      'Smoking can ___ serious health problems.',
      'lead to',
      ['result from', 'be due to', 'stem from'],
      'Lead to introduce la consecuencia (causa → efecto). result from, be due to y stem from introducen la causa.'
    ),
    ejercicio(
      'Many cities, ___ London and Paris, are very expensive.',
      'such as',
      ['such like', 'like as', 'as such'],
      'Such as introduce ejemplos en una lista. such like, like as y as such no son expresiones correctas para dar ejemplos.'
    ),
    ejercicio(
      'The accident ___ careless driving.',
      'was due to',
      ['led to', 'gave rise to', 'resulted in'],
      'La causa del accidente es el manejo descuidado: was due to. led to, gave rise to y resulted in introducirían una consecuencia.'
    ),
  ],
  flashcards: [
    tarjeta('Pasiva en todos los tiempos', 'is grown · was discovered · have been published\nwill be announced · must be checked · is being tested'),
    tarjeta('Pasiva impersonal', 'It is said that… · Sugar is said to be addictive.\nHe is believed to have left.'),
    tarjeta('Causa → efecto', 'cause · lead to · result in · bring about · give rise to'),
    tarjeta('Efecto → causa', 'result from · be due to · stem from · be caused by · owing to'),
    tarjeta('Dar ejemplos', 'such as · like · for instance · take…\nTake Japan, for instance.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Is it true that sugar is addictive?', translation: '¿Es verdad que el azúcar es adictivo?' },
    { speaker: 'user', text: "It is believed to be, yes. Several studies have been carried out, and the results were quite worrying.", translation: 'Se cree que sí. Se han hecho varios estudios y los resultados fueron preocupantes.' },
    { speaker: 'other', text: 'So what leads to the problem?', translation: '¿Y qué provoca el problema?' },
    { speaker: 'user', text: "Processed foods, such as biscuits and fizzy drinks. Take a can of cola: it contains about nine spoonfuls.", translation: 'Los alimentos procesados, como las galletas y las bebidas gaseosas. Toma una lata de cola: contiene unas nueve cucharadas.' },
    { speaker: 'other', text: "Isn't that the manufacturers' fault? Who would add that much on purpose?", translation: '¿No es culpa de los fabricantes? ¿Quién añadiría tanto a propósito?' },
    { speaker: 'user', text: "And the result? Rising obesity. Many problems stem from a lack of clear labelling.", translation: '¿Y el resultado? Obesidad creciente. Muchos problemas provienen de la falta de etiquetado claro.' },
  ],
  readingText: {
    title: 'What we eat',
    body: "Food science has changed what we know about eating. It is now widely believed that processed food contributes to many illnesses. Studies have been conducted in dozens of countries, and the findings are consistent: diets rich in sugar can lead to diabetes, while diets high in vegetables are linked to longer lives. Take the Mediterranean diet, for example. Countries such as Italy and Greece have lower rates of heart disease, and this is thought to result from olive oil, fish and fresh produce. What can be done? Isn't it time that labels were made clearer, and that schools were required to teach nutrition?",
    translation:
      'La ciencia de los alimentos ha cambiado lo que sabemos sobre comer. Ahora se cree ampliamente que la comida procesada contribuye a muchas enfermedades. Se han realizado estudios en decenas de países y los hallazgos son coherentes: las dietas ricas en azúcar pueden llevar a la diabetes, mientras que las dietas con muchas verduras se asocian con vidas más largas. Toma la dieta mediterránea, por ejemplo. Países como Italia y Grecia tienen tasas más bajas de enfermedades del corazón, y se piensa que esto se debe al aceite de oliva, el pescado y los productos frescos. ¿Qué se puede hacer? ¿No es hora de que las etiquetas se hagan más claras y de que se exija a las escuelas enseñar nutrición?',
  },
  tips: [
    "La pasiva pone el foco en la información, no en quién la hace: «The samples were analysed».",
    "Lead to y result in introducen el efecto; result from, be due to y stem from introducen la causa.",
    "It is said that… y X is said to… son estructuras impersonales muy comunes en noticias y ciencia.",
    "Para dar ejemplos: such as (lista), like (informal), for instance (frase aparte), take… (ejemplo concreto).",
  ],
  dailyWords: palabras('health', 'diet', 'vegetable', 'meat', 'fruit', 'sugar'),
  relacionados: [
    { etiqueta: '📖 Gramática: La Voz Pasiva (Passive Voice)', ruta: '/gramatica/concepto/la-voz-pasiva-passive-voice' },
    { etiqueta: '📖 Gramática: El Participio Pasado (Past Participle)', ruta: '/gramatica/concepto/el-participio-pasado-past-participle' },
  ],
};

// ─── Unidad 9 (id 154) · Determinantes; formas -ing; As far as… is concerned ───

const UNIDAD_154: Unit = {
  title: 'Determiners; -ing Clauses; As Far As… Is Concerned',
  topic: BLOQUE_C1_3,
  level: 'C1',
  explain: [
    teoria(
      '1 · All, whole y every',
      "• all + plural o incontable → «All students must register» · «All the money was spent».\n• all of + pronombre → «all of them».\n• whole + singular contable → «the whole day» (= all the day).\n• every + singular → todos, uno por uno: «Every student passed».\n\nAll the + sustantivo y the whole + sustantivo significan casi lo mismo, pero con un contable singular se prefiere whole: «I read the whole book».",
      [
        ['All students must register by Friday.', 'Todos los estudiantes deben inscribirse antes del viernes.'],
        ['All of them passed the exam.', 'Todos ellos aprobaron el examen.'],
        ['I read the whole book in one night.', 'Leí el libro entero en una noche.'],
        ['Every student passed the exam.', 'Cada estudiante aprobó el examen.'],
      ]
    ),
    teoria(
      '2 · Both, either y neither: dos',
      "Cuando se habla de DOS personas o cosas:\n\n• both + plural → «Both parents work».\n• either + singular (uno u otro) → «You can use either door».\n• neither + singular (ninguno de los dos) → «Neither answer is correct».\n• both of / either of / neither of + pronombre o the + plural → «Neither of them knows».\n\nNeither of + plural suele llevar verbo singular (formal) o plural (informal): «Neither of the students was late».",
      [
        ['Both parents work full-time.', 'Los dos padres trabajan a tiempo completo.'],
        ['You can use either door.', 'Puedes usar cualquiera de las dos puertas.'],
        ['Neither answer is correct.', 'Ninguna de las dos respuestas es correcta.'],
        ['Neither of the students was late.', 'Ninguno de los dos estudiantes llegó tarde.'],
      ]
    ),
    teoria(
      '3 · Each y every: diferencias',
      "• each → cada uno individualmente, pensando en el grupo pequeño; se usa con pocas personas: «Each child received a gift».\n• every → todos en general, grupo grande: «Every child needs love».\n• each of + plural → «Each of the players scored».\n• every + singular, no se usa con of: no «every of the students», sino «every one of the students».\n\nNinguno de los dos se puede usar con incontables.",
      [
        ['Each child received a gift.', 'Cada niño recibió un regalo.'],
        ['Every child needs love.', 'Todo niño necesita cariño.'],
        ['Each of the players scored a goal.', 'Cada uno de los jugadores marcó un gol.'],
        ['Every one of the students passed.', 'Todos los estudiantes sin excepción aprobaron.'],
      ]
    ),
    teoria(
      '4 · None of, no y nothing',
      "• no + sustantivo (adjetivo determinante) → «No student failed».\n• none of + the / pronombre → «None of the students failed» (verbo singular o plural).\n• none (solo) → respuesta: «How many passed? None.»\n• nothing / nobody / no one → pronombres: «Nothing happened».\n\nCuidado: no con verbo afirmativo (no doble negación): «There is no problem», no «There isn't no problem».",
      [
        ['No student failed the exam.', 'Ningún estudiante reprobó el examen.'],
        ['None of the students failed.', 'Ninguno de los estudiantes reprobó.'],
        ['How many passed? None.', '¿Cuántos aprobaron? Ninguno.'],
        ['Nothing happened.', 'No pasó nada.'],
      ]
    ),
    teoria(
      '5 · Formas -ing como cláusulas relativas reducidas',
      "Un participio de presente puede sustituir a una cláusula relativa con who / which + be + -ing:\n\n• The man standing at the door is my uncle. (= who is standing)\n• People living in big cities spend more on food. (= who live)\n• Anyone wishing to attend should register.\n\nSolo sirve para acciones en curso o hábitos. Para un hecho terminado se usa otra estructura.",
      [
        ['The man standing at the door is my uncle.', 'El hombre que está parado en la puerta es mi tío.'],
        ['People living in big cities spend more on food.', 'Quienes viven en grandes ciudades gastan más en comida.'],
        ['Anyone wishing to attend should register.', 'Quien desee asistir debe inscribirse.'],
        ['The students waiting outside look nervous.', 'Los estudiantes que esperan afuera se ven nerviosos.'],
      ]
    ),
    teoria(
      '6 · -ing para eventos simultáneos',
      "Una cláusula con -ing al inicio indica que dos acciones ocurren a la vez (con el mismo sujeto):\n\n• Walking home, I realised I had forgotten my keys.\n• She sat there, drinking her coffee and reading the paper.\n• Not knowing what to do, he called his boss.\n\nTambién da razón: «Feeling tired, she went to bed». El sujeto de la cláusula con -ing debe ser el mismo de la principal.",
      [
        ['Walking home, I realised I had forgotten my keys.', 'Mientras caminaba a casa, me di cuenta de que había olvidado las llaves.'],
        ['She sat there, drinking her coffee and reading the paper.', 'Se sentó allí, bebiendo su café y leyendo el periódico.'],
        ['Not knowing what to do, he called his boss.', 'Sin saber qué hacer, llamó a su jefe.'],
        ['Feeling tired, she went to bed.', 'Sintiéndose cansada, se fue a la cama.'],
      ]
    ),
    teoria(
      '7 · -ing como sujeto y objeto',
      "El gerundio puede ser sujeto o complemento de otros verbos:\n\n• Sujeto: «Learning a language takes time» · «Being happy isn't the same as being successful».\n• Objeto de verbos como enjoy, avoid, suggest: «I enjoy cooking».\n• Después de preposición: «She is interested in studying abroad».\n\nSe niega con not: «Not asking for help is a mistake». Tiene su propio sujeto con posesivo: «I appreciate your helping me».",
      [
        ['Learning a language takes time.', 'Aprender un idioma lleva tiempo.'],
        ["Being happy isn't the same as being successful.", 'Ser feliz no es lo mismo que tener éxito.'],
        ['Not asking for help is a mistake.', 'No pedir ayuda es un error.'],
        ['I appreciate your helping me.', 'Agradezco que me ayudes.'],
      ]
    ),
    teoria(
      '8 · Estrategia: As far as… is concerned',
      "💬 As far as X is concerned sirve para centrar el tema en un aspecto concreto:\n\n• As far as success is concerned, it depends on how you define it.\n• As far as money is concerned, we have no problems.\n• As far as the food is concerned, I have no complaints.\n\nTambién: As for + sustantivo («As for money, we're fine»). Introduce un nuevo aspecto del tema.",
      [
        ['As far as success is concerned, it depends on how you define it.', 'En cuanto al éxito, depende de cómo se defina.'],
        ['As far as money is concerned, we have no problems.', 'En lo que se refiere al dinero, no tenemos problemas.'],
        ['As far as the food is concerned, I have no complaints.', 'Respecto a la comida, no tengo quejas.'],
        ["As for money, we're fine.", 'En cuanto al dinero, estamos bien.'],
      ]
    ),
    teoria(
      "9 · Estrategia: As far as I'm concerned / as far as I can tell",
      "💬 Para dar tu opinión o para expresar el límite de lo que sabes:\n\n• As far as I'm concerned, it's a waste of time. (en mi opinión)\n• As far as I can tell, everything is fine. (hasta donde veo)\n• As far as I know, she left yesterday. (que yo sepa)\n• As far as I'm aware,…\n\nSuavizan una opinión y marcan que no estás totalmente seguro o que es subjetiva.",
      [
        ["As far as I'm concerned, it's a waste of time.", 'En lo que a mí respecta, es una pérdida de tiempo.'],
        ['As far as I can tell, everything is fine.', 'Hasta donde puedo ver, todo está bien.'],
        ['As far as I know, she left yesterday.', 'Que yo sepa, se fue ayer.'],
        ["As far as I'm aware, nobody has complained.", 'Hasta donde sé, nadie se ha quejado.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('All / whole / every', resto('all students'), resto('/ the whole day'), resto('/ every student')),
    fl('-ing reducida', resto('The man'), verbo('standing'), resto('at the door')),
    fl('-ing simultáneo', verbo('Walking home,'), suj('I'), verbo('realised…')),
    fl('Foco', resto('As far as'), resto('money'), aux('is concerned')),
  ],
  table: {
    cols: ['Determinante', 'Se usa con', 'Ejemplo'],
    rows: [
      ['all', 'plural / incontable', 'All students'],
      ['whole', 'singular contable', 'the whole day'],
      ['every / each', 'singular', 'Every child · Each child'],
      ['both / either / neither', 'dos', 'Both parents · Neither answer'],
      ['no / none of', 'ninguno', 'No student · None of them'],
    ],
  },
  contrastCard: {
    left: { label: 'Each — uno por uno', example: 'Each child received a gift.', highlight: 'Each child' },
    right: { label: 'Every — todos en general', example: 'Every child needs love.', highlight: 'Every child' },
    caption: 'Each enfatiza a cada individuo. Every generaliza sobre todo el grupo.',
  },
  quiz: [
    ejercicio(
      '___ of my parents speaks Italian. They both prefer English.',
      'Neither',
      ['None', 'No', 'Both'],
      'Se habla de dos personas y ninguna habla italiano: Neither of. None se usa con tres o más, No no va con of y Both significaría que ambos lo hablan.'
    ),
    ejercicio(
      '___ student in the class passed the exam. (100%)',
      'Every',
      ['All', 'Both', 'Each of'],
      'Every + singular: Every student. All + singular no se usa, Both es para dos y Each of necesita un plural después.'
    ),
    ejercicio(
      'The people ___ in the queue were angry. (wait)',
      'waiting',
      ['waited', 'wait', 'to wait'],
      'La cláusula con -ing reduce who were waiting: the people waiting. waited, wait y to wait no forman esa cláusula.'
    ),
    ejercicio(
      '___ home, I realised I had forgotten my keys.',
      'Walking',
      ['Walk', 'To walk', 'Walked'],
      'Una acción simultánea con el mismo sujeto se expresa con -ing: Walking home. Walk, To walk y Walked no forman la cláusula.'
    ),
    ejercicio(
      "As far as I'm ___, it is a great idea.",
      'concerned',
      ['concern', 'concerning', 'concerns'],
      'La expresión es as far as I\'m concerned. concern, concerning y concerns no forman esa expresión.'
    ),
  ],
  flashcards: [
    tarjeta('All, whole y every', 'all + plural · the whole + singular · every + singular\nAll students · the whole day · every student'),
    tarjeta('Both, either, neither', 'Para dos: both parents · either door · neither answer\nNeither of the students was late.'),
    tarjeta('Each y every', 'each: uno por uno · every: todos en general\nEach of the players · Every one of the students'),
    tarjeta('-ing reducida y simultánea', 'The man standing at the door (= who is standing)\nWalking home, I realised… (misma persona)'),
    tarjeta('As far as…', "As far as success is concerned,… · As far as I'm concerned,…\nAs far as I can tell / know,…"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What does success mean to you?', translation: '¿Qué significa el éxito para ti?' },
    { speaker: 'user', text: "As far as I'm concerned, it's being happy with what you do. Not everybody agrees, of course.", translation: 'En lo que a mí respecta, es estar contento con lo que haces. No todo el mundo está de acuerdo, claro.' },
    { speaker: 'other', text: 'Both of my brothers measure it in money. Neither of them has time for hobbies.', translation: 'Mis dos hermanos lo miden en dinero. Ninguno de los dos tiene tiempo para pasatiempos.' },
    { speaker: 'user', text: "As far as I can tell, that isn't making them happy. Every person I know who works all the time seems stressed.", translation: 'Hasta donde veo, eso no los hace felices. Todas las personas que conozco que trabajan todo el tiempo parecen estresadas.' },
    { speaker: 'other', text: 'Each of us has a different idea. Walking to work this morning, I thought about it for the whole journey.', translation: 'Cada uno tiene una idea distinta. Caminando al trabajo esta mañana, lo pensé durante todo el trayecto.' },
    { speaker: 'user', text: 'And what did you decide? As for me, I have nothing to lose by working less.', translation: '¿Y qué decidiste? En cuanto a mí, no tengo nada que perder trabajando menos.' },
  ],
  readingText: {
    title: 'The happiness question',
    body: "Researchers studying happiness have reached an interesting conclusion: none of the usual measures of success, such as wealth or status, guarantees a good life. All the people interviewed for one study agreed that relationships mattered most. Each of them had a different story, but every one of those stories included friends and family. People living in small communities, for example, report greater satisfaction. As far as money is concerned, it helps up to a point; as far as I can tell, beyond that point it makes little difference. Feeling connected, not being rich, seems to be the secret.",
    translation:
      'Los investigadores que estudian la felicidad han llegado a una conclusión interesante: ninguna de las medidas habituales del éxito, como la riqueza o el estatus, garantiza una buena vida. Todas las personas entrevistadas para un estudio coincidieron en que las relaciones eran lo más importante. Cada una tenía una historia distinta, pero todas incluían a amigos y familia. Las personas que viven en comunidades pequeñas, por ejemplo, reportan mayor satisfacción. En cuanto al dinero, ayuda hasta cierto punto; hasta donde puedo ver, más allá de ese punto hace poca diferencia. Sentirse conectado, no ser rico, parece ser el secreto.',
  },
  tips: [
    "Both, either y neither son para dos; none of y all of para tres o más.",
    "Each enfatiza al individuo y every generaliza: «Each child received a gift», «Every child needs love».",
    "Una cláusula con -ing al inicio necesita el mismo sujeto que la oración principal: «Walking home, I realised…».",
    "As far as X is concerned centra el tema; as far as I'm concerned da tu opinión; as far as I can tell marca el límite de lo que sabes.",
  ],
  dailyWords: palabras('success', 'luck', 'hope', 'freedom', 'peace', 'dream'),
  relacionados: [
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
    { etiqueta: '📖 Gramática: El Gerundio / Forma -ing', ruta: '/gramatica/concepto/el-gerundio-forma-ing-gerund' },
  ],
};

/** Las unidades del bloque 3, por id interno. */
export const UNIDADES_BLOQUE_3: Record<number, Unit> = {
  152: UNIDAD_152,
  153: UNIDAD_153,
  154: UNIDAD_154,
};
