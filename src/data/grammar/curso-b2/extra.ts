import { aux, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_EXTRA_B2 } from '@/data/grammar/topics';
import type { PronunUnit, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque extra del B2 (ids 1201–1204): temas del libro que el plan de estudios no incluye.

// ─── Extra 1 (id 1201) · Más verbos y adjetivos con preposición ───

const UNIDAD_1201: Unit = {
  title: 'More Verbs and Adjectives With Prepositions',
  topic: BLOQUE_EXTRA_B2,
  level: 'B2',
  explain: [
    teoria(
      '1 · Verbos con una preposición fija',
      'Estos verbos necesitan una preposición determinada. Muchas no coinciden con el español, así que conviene aprenderlas juntas:\n\n• apply for (un trabajo) · ask for · search for\n• believe in · succeed in · specialise in\n• depend on · rely on · insist on · concentrate on\n• belong to · react to · refer to\n• suffer from · result in',
      [
        ['She applied for a job at the bank.', 'Ella postuló a un trabajo en el banco.'],
        ['I rely on my brother for advice.', 'Cuento con mi hermano para pedir consejo.'],
        ['He insisted on paying the bill.', 'Insistió en pagar la cuenta.'],
        ['Many people suffer from stress.', 'Mucha gente sufre de estrés.'],
      ]
    ),
    teoria(
      '2 · Verbo + objeto + preposición',
      'Algunos verbos llevan un objeto (una persona) y después una preposición fija:\n\n• ask somebody for (algo) · thank somebody for\n• blame somebody for · accuse somebody of\n• congratulate somebody on · prevent somebody from\n• protect somebody from · invite somebody to\n\nDespués de la preposición, un verbo va en -ing: «She thanked me for helping».',
      [
        ['She thanked me for my help.', 'Ella me agradeció por mi ayuda.'],
        ['They blamed him for the mistake.', 'Lo culparon por el error.'],
        ['The police accused him of stealing.', 'La policía lo acusó de robar.'],
        ['The wall protects us from the wind.', 'La pared nos protege del viento.'],
      ]
    ),
    teoria(
      '3 · Adjetivos con preposición',
      'Estas combinaciones son fijas:\n\n• similar to · different from (o to) · married to\n• responsible for · aware of · capable of\n• typical of · tired of · fond of · full of\n• keen on · fed up with · satisfied with\n\nNo coinciden siempre con el español: «aware of», no «aware about».',
      [
        ['Your phone is similar to mine.', 'Tu teléfono es parecido al mío.'],
        ['She is responsible for the project.', 'Ella es responsable del proyecto.'],
        ['I am fed up with the noise.', 'Estoy harto del ruido.'],
        ['He is keen on photography.', 'A él le entusiasma la fotografía.'],
      ]
    ),
    teoria(
      '4 · Errores típicos del español',
      'Estos errores aparecen cuando se traduce literalmente:\n\n• depend of → depend on\n• married with → married to\n• arrive to → arrive in / at\n• think in → think about / of\n• consist in → consist of\n• dream with → dream of / about\n\nSi dudas, busca la frase completa en un diccionario.',
      [
        ['It depends on you.', 'Depende de ti.'],
        ['She is married to a doctor.', 'Ella está casada con un médico.'],
        ['The group consists of ten people.', 'El grupo consiste en diez personas.'],
        ['I dream of travelling to Japan.', 'Sueño con viajar a Japón.'],
      ]
    ),
    teoria(
      '5 · Preposición + -ing',
      'Después de cualquiera de estas preposiciones, un verbo va en -ing:\n\n• succeed in finding · insist on paying\n• suffer from feeling · look forward to seeing\n• responsible for managing · tired of waiting\n\nAtención con to: en look forward to y be used to, to es preposición, así que va con -ing (looking forward to meeting you).',
      [
        ['She succeeded in finding a job.', 'Ella logró encontrar un trabajo.'],
        ['I am looking forward to meeting you.', 'Tengo ganas de conocerte.'],
        ['He insisted on paying for dinner.', 'Insistió en pagar la cena.'],
        ['They are tired of waiting.', 'Están cansados de esperar.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Verbo + prep.', verbo('depend'), aux('on'), suj('noun / -ing')),
    fl('Verbo + obj. + prep.', verbo('thank'), suj('somebody'), aux('for'), verbo('-ing')),
    fl('Adjetivo + prep.', verbo('responsible'), aux('for'), suj('noun / -ing')),
  ],
  table: {
    cols: ['En español', 'En inglés', 'Error típico'],
    rows: [
      ['depender de', 'depend on', 'depend of'],
      ['casado con', 'married to', 'married with'],
      ['soñar con', 'dream of / about', 'dream with'],
      ['consistir en', 'consist of', 'consist in'],
      ['pensar en', 'think about / of', 'think in'],
    ],
  },
  contrastCard: {
    left: { label: 'Correcto', example: 'It depends on the weather.', highlight: 'depends on' },
    right: { label: 'Error típico', example: 'It depends of the weather.', highlight: 'depends of' },
    caption: 'Cada verbo tiene su preposición: aprende el par completo.',
  },
  quiz: [
    ejercicio(
      'It depends ___ the weather.',
      'on',
      ['of', 'from', 'in'],
      'El verbo depend va siempre con on: «depend on». depend of (calco del español) es un error típico.'
    ),
    ejercicio(
      'She is married ___ a doctor.',
      'to',
      ['with', 'by', 'for'],
      'El adjetivo married se combina con to: «married to a doctor». married with es un error por traducir «casada con».'
    ),
    ejercicio(
      'They thanked us ___ our help.',
      'for',
      ['of', 'to', 'by'],
      'thank somebody for algo: «thanked us for our help». of, to y by no se usan con este verbo.'
    ),
    ejercicio(
      'The group consists ___ ten students.',
      'of',
      ['in', 'with', 'on'],
      'El verbo consist se combina con of: «consists of ten students». consist in es un error por traducir «consistir en».'
    ),
    ejercicio(
      'I am looking forward ___ you next week.',
      'to seeing',
      ['to see', 'for seeing', 'at see'],
      'En look forward to, el to es una preposición, así que el verbo va en -ing: «looking forward to seeing you».'
    ),
  ],
  flashcards: [
    tarjeta('Verbo + preposición', 'depend on · rely on · insist on\nbelieve in · succeed in · suffer from'),
    tarjeta('Verbo + objeto + prep.', 'thank somebody for · blame somebody for\naccuse somebody of · protect somebody from'),
    tarjeta('Adjetivo + prep.', 'responsible for · aware of · keen on\nsimilar to · fed up with · married to'),
    tarjeta('Errores típicos', 'depend ON (no of) · married TO (no with)\nconsist OF (no in) · dream OF (no with)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Are you applying for the new position?', translation: '¿Vas a postular al nuevo puesto?' },
    { speaker: 'user', text: 'Yes. I am responsible for a small team now, and I am keen on learning more.', translation: 'Sí. Ahora soy responsable de un equipo pequeño y tengo muchas ganas de aprender más.' },
    { speaker: 'other', text: 'It depends on your experience. Are you good at managing people?', translation: 'Depende de tu experiencia. ¿Eres bueno dirigiendo gente?' },
    { speaker: 'user', text: 'I think so. My boss thanked me for organising the last project.', translation: 'Creo que sí. Mi jefe me agradeció por organizar el último proyecto.' },
    { speaker: 'other', text: 'Great. I am sure you will succeed in getting the job.', translation: 'Genial. Estoy seguro de que lograrás conseguir el trabajo.' },
    { speaker: 'user', text: 'Thank you! I am looking forward to hearing from them.', translation: '¡Gracias! Tengo muchas ganas de recibir su respuesta.' },
  ],
  readingText: {
    title: 'A new beginning',
    body: 'After five years in the same company, Marta was fed up with her routine. She applied for a job in another city and relied on her friends for advice. At first she was afraid of failing, but she insisted on trying. The interviewer asked her for her opinion on a difficult case, and she answered with confidence. Two weeks later she heard she had succeeded in getting the position.',
    translation:
      'Después de cinco años en la misma empresa, Marta estaba harta de su rutina. Postuló a un trabajo en otra ciudad y contó con sus amigos para pedirles consejo. Al principio tenía miedo de fracasar, pero insistió en intentarlo. El entrevistador le pidió su opinión sobre un caso difícil y ella respondió con seguridad. Dos semanas después se enteró de que había logrado conseguir el puesto.',
  },
  tips: [
    'Aprende cada verbo con su preposición como una unidad: «depend on», «consist of», «married to».',
    'Cuidado con los calcos del español: depend of, married with, consist in, think in son errores muy comunes.',
    'Después de una preposición el verbo va en -ing; incluye look forward to y be used to, donde to es preposición.',
  ],
  dailyWords: palabras('job', 'career', 'boss', 'manager', 'interview', 'resume'),
  relacionados: [
    { etiqueta: '📖 Gramática: Locuciones Preposicionales', ruta: '/gramatica/concepto/locuciones-preposicionales-complex-prepositions' },
    { unidad: 1105 },
  ],
};

// ─── Extra 2 (id 1202) · Oraciones de relativo: whose, where, preposición + whom, -ing ───

const UNIDAD_1202: Unit = {
  title: 'Relative Clauses: Whose, Where, Whom and -ing Clauses',
  topic: BLOQUE_EXTRA_B2,
  level: 'B2',
  explain: [
    teoria(
      '1 · Whose: de quien, cuyo',
      'whose introduce una oración que dice a quién pertenece algo. Reemplaza a his, her, its, their y va seguido de un sustantivo:\n\n• The man whose car was stolen called the police.\n• I have a friend whose brother is a pilot.\n\nwhose se puede usar con personas, animales y cosas.',
      [
        ['The man whose car was stolen called the police.', 'El hombre cuyo carro fue robado llamó a la policía.'],
        ['I have a friend whose brother is a pilot.', 'Tengo un amigo cuyo hermano es piloto.'],
        ['She lives in a house whose windows are blue.', 'Ella vive en una casa cuyas ventanas son azules.'],
        ['That is the girl whose phone I found.', 'Esa es la chica cuyo teléfono encontré.'],
      ]
    ),
    teoria(
      '2 · Where, when y why',
      'Estas palabras reemplazan a una preposición + which:\n\n• where = en el que (un lugar): The café where we met has closed.\n• when = en el que (un tiempo): I remember the day when we met.\n• why = por el que (razón), después de reason: That is the reason why I called.\n\nSe pueden omitir when y why: «the day we met».',
      [
        ['The café where we met has closed.', 'La cafetería donde nos conocimos cerró.'],
        ['I remember the day when we met.', 'Recuerdo el día en que nos conocimos.'],
        ['That is the reason why I called you.', 'Esa es la razón por la que te llamé.'],
        ['This is the town where I was born.', 'Este es el pueblo donde nací.'],
      ]
    ),
    teoria(
      '3 · Preposición + whom / which',
      'En un estilo formal, la preposición va antes de whom (personas) o which (cosas), en lugar de al final de la oración:\n\n• The woman to whom I spoke was the manager. (formal)\n• The woman I spoke to was the manager. (normal)\n• The book in which I found the answer is old.\n\nDespués de una preposición no se puede usar that ni who.',
      [
        ['The woman to whom I spoke was the manager.', 'La mujer con la que hablé era la gerente.'],
        ['The woman I spoke to was the manager.', 'La mujer con la que hablé era la gerente (normal).'],
        ['The book in which I found it is very old.', 'El libro en el que lo encontré es muy viejo.'],
        ['The people with whom I work are friendly.', 'La gente con la que trabajo es amable.'],
      ]
    ),
    teoria(
      '4 · Which para toda una idea',
      'which también puede referirse a toda la oración anterior, no solo a un sustantivo. En este caso va después de una coma:\n\n• He passed his driving test, which surprised everyone.\n• She said nothing, which made me nervous.\n\nAquí which = «lo cual». No se puede usar that.',
      [
        ['He passed his driving test, which surprised everyone.', 'Aprobó su examen de manejo, lo cual sorprendió a todos.'],
        ['She said nothing, which made me nervous.', 'No dijo nada, lo cual me puso nervioso.'],
        ['It rained all day, which ruined our picnic.', 'Llovió todo el día, lo cual arruinó nuestro picnic.'],
        ['He is always late, which annoys his boss.', 'Siempre llega tarde, lo cual molesta a su jefe.'],
      ]
    ),
    teoria(
      '5 · Cláusulas con -ing',
      'Una cláusula con -ing reemplaza a who / which + verbo (voz activa, tiempo simple o continuo):\n\n• The man standing near the door is my uncle. (= who is standing)\n• The people living next door are friendly. (= who live)\n• I know a woman working in a bank.\n\nSe usa para describir qué está haciendo alguien o algo.',
      [
        ['The man standing near the door is my uncle.', 'El hombre que está parado junto a la puerta es mi tío.'],
        ['The people living next door are friendly.', 'La gente que vive al lado es amable.'],
        ['I know a woman working in a bank.', 'Conozco a una mujer que trabaja en un banco.'],
        ['Who is the girl talking to Tom?', '¿Quién es la chica que habla con Tom?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Whose', suj('the man'), aux('whose'), suj('car'), verbo('was stolen')),
    fl('Where', suj('the café'), aux('where'), suj('we met')),
    fl('Con -ing', suj('the man'), verbo('standing there')),
  ],
  table: {
    cols: ['Palabra', 'Sustituye a', 'Ejemplo'],
    rows: [
      ['whose', 'his / her / their', 'a friend whose brother is a pilot'],
      ['where', 'in which (lugar)', 'the town where I was born'],
      ['when', 'in which (tiempo)', 'the day when we met'],
      ['which (coma)', 'toda la idea', 'He was late, which annoyed us.'],
      ['-ing', 'who / which + verbo', 'the man standing there'],
    ],
  },
  contrastCard: {
    left: { label: 'Informal', example: 'The woman I spoke to is the manager.', highlight: 'I spoke to' },
    right: { label: 'Formal', example: 'The woman to whom I spoke is the manager.', highlight: 'to whom' },
    caption: 'La preposición al final es lo normal; antes de whom / which es formal.',
  },
  quiz: [
    ejercicio(
      'I have a friend ___ brother is a pilot.',
      'whose',
      ['who', 'which', 'who his'],
      'Se indica a quién pertenece el sustantivo siguiente (brother): whose. who y which no expresan posesión y «who his» sobra.'
    ),
    ejercicio(
      'This is the town ___ I was born.',
      'where',
      ['which', 'whose', 'what'],
      'Se habla de un lugar donde ocurrió algo: where. which necesitaría una preposición (in which) y whose es posesivo.'
    ),
    ejercicio(
      'The woman to ___ I spoke was the manager.',
      'whom',
      ['who', 'which', 'that'],
      'Después de una preposición (to) se usa whom para personas. who, which y that no se usan en esa posición.'
    ),
    ejercicio(
      'He passed the test, ___ surprised everyone.',
      'which',
      ['what', 'who', 'that'],
      'Después de la coma, which se refiere a toda la idea anterior («lo cual»). that y what no sirven aquí, y who es para personas.'
    ),
    ejercicio(
      'The man ___ near the door is my uncle.',
      'standing',
      ['stands', 'stood', 'to stand'],
      'Una cláusula con -ing reemplaza a «who is standing»: «The man standing near the door». stands, stood y to stand no encajan.'
    ),
  ],
  flashcards: [
    tarjeta('Whose', 'cuyo / de quien + sustantivo\na friend whose brother is a pilot'),
    tarjeta('Where / when / why', 'the town where I was born\nthe day when we met · the reason why I called'),
    tarjeta('Preposición + whom / which', 'The woman to whom I spoke (formal)\nThe woman I spoke to (normal)'),
    tarjeta('Which tras coma', 'lo cual (toda la idea)\nHe was late, which annoyed us.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Who is the man standing next to the window?', translation: '¿Quién es el hombre parado junto a la ventana?' },
    { speaker: 'user', text: 'He is Mr Lopez, whose company sells software.', translation: 'Es el señor López, cuya empresa vende software.' },
    { speaker: 'other', text: 'Is he the one you worked with last year?', translation: '¿Es con quien trabajaste el año pasado?' },
    { speaker: 'user', text: 'Yes. He is the person to whom I owe my first promotion.', translation: 'Sí. Es la persona a la que le debo mi primer ascenso.' },
    { speaker: 'other', text: 'Was he the boss who gave you the big project?', translation: '¿Fue el jefe que te dio el gran proyecto?' },
    { speaker: 'user', text: 'Exactly, which was a great opportunity.', translation: 'Exacto, lo cual fue una gran oportunidad.' },
  ],
  readingText: {
    title: 'Our old street',
    body: 'I grew up in a small street where everyone knew each other. The neighbour whose dog barked all night was an old man living alone. The shop on the corner, where we bought sweets, was run by a woman to whom we always said good morning. One day she closed the shop, which made us all very sad. Now the children playing in that street have never met her.',
    translation:
      'Crecí en una calle pequeña donde todos se conocían. El vecino cuyo perro ladraba toda la noche era un anciano que vivía solo. La tienda de la esquina, donde comprábamos dulces, la atendía una mujer a quien siempre saludábamos con un buenos días. Un día cerró la tienda, lo cual nos puso muy tristes. Ahora los niños que juegan en esa calle nunca la conocieron.',
  },
  tips: [
    'whose siempre va seguido de un sustantivo: «a friend whose brother…», nunca «whose is».',
    'which tras una coma puede referirse a toda la idea anterior; en ese caso no se puede usar that.',
    'Una cláusula con -ing sustituye a «who / which + verbo» en voz activa: «the man (who is) standing there».',
  ],
  dailyWords: palabras('neighbor', 'street', 'corner', 'shop', 'town', 'village'),
  relacionados: [{ unidad: 52 }, { unidad: 20 }],
};

// ─── Extra 3 (id 1203) · Even, as if y when I've done ───

const UNIDAD_1203: Unit = {
  title: "Even, As If and When I've Done",
  topic: BLOQUE_EXTRA_B2,
  level: 'B2',
  explain: [
    teoria(
      '1 · Even: incluso, hasta',
      'even enfatiza que algo es sorprendente. Se coloca antes de la palabra que se destaca: antes del verbo principal, después de be o del auxiliar.\n\n• He is rich. He even has a plane! (incluso tiene un avión)\n• She never even called me.\n• Even a child can do it.\n\nNo se coloca al final de la frase.',
      [
        ['He even has his own plane.', 'Incluso tiene su propio avión.'],
        ['She never even called me.', 'Ni siquiera me llamó.'],
        ['Even a child can do it.', 'Hasta un niño puede hacerlo.'],
        ['It is cold. It is even snowing.', 'Hace frío. Incluso está nevando.'],
      ]
    ),
    teoria(
      '2 · Even if y even though',
      'Los dos expresan contraste, pero cambia la realidad de lo que dice la primera parte:\n\n• even though + hecho real: Even though it is raining, we are going out. (de verdad llueve)\n• even if + posibilidad: I will go even if it rains. (quizá llueva o no)\n\neven if equivale a «aunque» + subjuntivo en español.',
      [
        ['Even though it is raining, we are going out.', 'Aunque está lloviendo, vamos a salir.'],
        ['I will go even if it rains.', 'Iré aunque llueva.'],
        ['Even though he is tired, he is still working.', 'A pesar de que está cansado, sigue trabajando.'],
        ["I won't tell him even if he asks.", 'No se lo diré aunque pregunte.'],
      ]
    ),
    teoria(
      '3 · As if y as though: como si',
      'as if y as though significan «como si». Se usan para comparar una manera de actuar con una situación imaginaria o aparente:\n\n• He talks as if he knew everything. (no lo sabe; pasado = irreal)\n• It looks as if it is going to rain. (es probable; presente)\n\nPara una situación irreal en presente se usa el pasado: «as if he knew».',
      [
        ['He talks as if he knew everything.', 'Habla como si lo supiera todo.'],
        ['She looks as if she is tired.', 'Parece como si estuviera cansada.'],
        ['It looks as though it is going to rain.', 'Parece que va a llover.'],
        ['They acted as if nothing had happened.', 'Actuaron como si nada hubiera pasado.'],
      ]
    ),
    teoria(
      '4 · When, after y as soon as + presente perfecto',
      'Para hablar de una acción futura que debe estar terminada antes de otra, se usa el presente perfecto después de when, after, as soon as, once y until. No se usa will:\n\n• I will call you when I have finished.\n• We will leave as soon as she has arrived.\n• Call me after you have seen the doctor.',
      [
        ["I will call you when I've finished.", 'Te llamaré cuando haya terminado.'],
        ["We will leave as soon as she's arrived.", 'Saldremos apenas haya llegado.'],
        ["Call me after you've seen the doctor.", 'Llámame después de que hayas visto al médico.'],
        ["Don't go until I've told you.", 'No te vayas hasta que te lo haya dicho.'],
      ]
    ),
    teoria(
      '5 · Presente simple o presente perfecto',
      'Después de when o after puedes usar el presente simple o el presente perfecto. El perfecto subraya que la primera acción debe estar completa:\n\n• I will call you when I finish. (simple)\n• I will call you when I have finished. (completa)\n\nSi la acción es larga o hay una condición clara, el presente perfecto da más precisión.',
      [
        ['I will call you when I finish.', 'Te llamaré cuando termine.'],
        ["I will call you when I've finished.", 'Te llamaré cuando haya terminado.'],
        ["We'll start after everyone has arrived.", 'Empezaremos después de que todos hayan llegado.'],
        ["I'll tell you once I've decided.", 'Te lo diré una vez que haya decidido.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Even', suj('He'), aux('even'), verbo('has')),
    fl('As if', resto('He talks'), aux('as if'), suj('he'), verbo('knew')),
    fl('When + perfecto', resto('I will call'), aux('when'), suj('I'), verbo('have finished')),
  ],
  table: {
    cols: ['Expresión', 'Idea', 'Ejemplo'],
    rows: [
      ['even', 'incluso', 'He even has a plane.'],
      ['even though', 'aunque (hecho real)', 'Even though it rains, I go.'],
      ['even if', 'aunque (posible)', 'I will go even if it rains.'],
      ['as if / as though', 'como si', 'He talks as if he knew it all.'],
      ['when + have done', 'cuando haya terminado', 'I will call when I have finished.'],
    ],
  },
  contrastCard: {
    left: { label: 'even though → hecho real', example: 'Even though it is raining, I am going.', highlight: 'even though' },
    right: { label: 'even if → posibilidad', example: 'I will go even if it rains.', highlight: 'even if' },
    caption: 'even though: ya es verdad. even if: puede que pase o no.',
  },
  quiz: [
    ejercicio(
      '___ it is raining, we are going to the park.',
      'Even though',
      ['Even if', 'As if', 'Unless'],
      'Está lloviendo de verdad (un hecho), así que va Even though. Even if es para una posibilidad, As if significa como si y Unless es «a menos que».'
    ),
    ejercicio(
      'I will go to the match ___ it rains tomorrow.',
      'even if',
      ['even though', 'as if', 'unless'],
      'Mañana puede o no llover (una posibilidad): even if. even though es para un hecho real, as if es «como si» y unless cambia el sentido.'
    ),
    ejercicio(
      'He talks as if he ___ everything about cars.',
      'knew',
      ['knows', 'will know', 'has known'],
      'Para una situación irreal o dudosa se usa el pasado después de as if: «as if he knew». knows afirmaría que de verdad lo sabe.'
    ),
    ejercicio(
      'I will call you as soon as I ___ the report.',
      "have finished",
      ['will finish', 'am finished', 'would finish'],
      'Después de as soon as no se usa will: se usa el presente simple o el presente perfecto («have finished»). will finish y would finish no son correctas.'
    ),
    ejercicio(
      'She never ___ said thank you.',
      'even',
      ['also', 'only', 'yet'],
      'even antes del verbo da el sentido de «ni siquiera»: «never even said thank you». also, only y yet no expresan ese énfasis.'
    ),
  ],
  flashcards: [
    tarjeta('Even', 'incluso / ni siquiera\nHe even has a plane. · She never even called.'),
    tarjeta('Even though / even if', 'even though = hecho real\neven if = posibilidad'),
    tarjeta('As if / as though', 'como si + pasado (irreal)\nHe talks as if he knew everything.'),
    tarjeta('When + presente perfecto', "I'll call you when I've finished.\nNunca: when I will finish"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Are you coming to the picnic on Sunday?', translation: '¿Vienes al picnic el domingo?' },
    { speaker: 'user', text: 'Yes, even if it rains. I will bring an umbrella.', translation: 'Sí, aunque llueva. Llevaré un paraguas.' },
    { speaker: 'other', text: "Good. Call me when you've left home.", translation: 'Bien. Llámame cuando hayas salido de casa.' },
    { speaker: 'user', text: "I will. Don't start until I've arrived!", translation: '¡Lo haré! ¡No empiecen hasta que yo haya llegado!' },
    { speaker: 'other', text: 'OK. You look as if you did not sleep well.', translation: 'Está bien. Pareces como si no hubieras dormido bien.' },
    { speaker: 'user', text: 'I did not sleep at all, even though I was very tired.', translation: 'No dormí nada, aunque estaba muy cansado.' },
  ],
  readingText: {
    title: 'A long day',
    body: "Today was a very long day. I worked from eight until nine at night, and I did not even have lunch. When I've finished this report, I will go straight home. My boss acts as if everything is easy, even though the deadline is tomorrow. I will finish it tonight even if I have to stay up until midnight.",
    translation:
      'Hoy fue un día larguísimo. Trabajé desde las ocho hasta las nueve de la noche y ni siquiera almorcé. Cuando haya terminado este informe, me iré directo a casa. Mi jefe actúa como si todo fuera fácil, a pesar de que la fecha límite es mañana. Lo terminaré esta noche aunque tenga que quedarme despierto hasta la medianoche.',
  },
  tips: [
    'Con even though hablas de algo que es verdad; con even if, de algo que podría pasar o no.',
    'Después de as if lo irreal va en pasado: «as if he knew». Si es muy probable, puedes usar el presente.',
    'Después de when, after, as soon as y until no uses will: usa el presente simple o el presente perfecto.',
  ],
  dailyWords: palabras('deadline', 'report', 'meeting', 'tired', 'project', 'boss'),
  relacionados: [{ unidad: 24 }, { unidad: 1102 }],
};

// ─── Extra 4 (id 1204) · Phrasal verbs con up, away y back ───

const UNIDAD_1204: Unit = {
  title: 'Phrasal Verbs With Up, Away and Back',
  topic: BLOQUE_EXTRA_B2,
  level: 'B2',
  explain: [
    teoria(
      '1 · Phrasal verbs con up',
      'La partícula up da varios sentidos: aumentar, terminar del todo, acercarse o levantar:\n\n• speed up (acelerar) · turn up (subir el volumen) · cheer up (animarse)\n• use up (gastar todo) · eat up (comérselo todo) · give up (rendirse)\n• make up (inventar; maquillarse) · show up (aparecer)\n• catch up with (alcanzar a alguien)',
      [
        ['Please speed up. We are late.', 'Por favor acelera. Vamos tarde.'],
        ['Cheer up! Things will get better.', '¡Anímate! Las cosas mejorarán.'],
        ['We have used up all the milk.', 'Hemos terminado toda la leche.'],
        ['He did not show up at the meeting.', 'Él no apareció en la reunión.'],
      ]
    ),
    teoria(
      '2 · Phrasal verbs con away',
      'away significa «lejos» o «fuera»:\n\n• go away (irse) · run away (escaparse)\n• throw away (tirar a la basura) · put away (guardar)\n• take away (llevarse) · give away (regalar)\n• get away (escapar) · stay away from (mantenerse lejos de)',
      [
        ['Go away! I am busy.', '¡Vete! Estoy ocupado.'],
        ['Do not throw away that bottle.', 'No tires esa botella.'],
        ['Put your toys away, please.', 'Guarda tus juguetes, por favor.'],
        ['They gave away their old clothes.', 'Regalaron su ropa vieja.'],
      ]
    ),
    teoria(
      '3 · Phrasal verbs con back',
      'back indica volver a un lugar, a un estado o devolver:\n\n• come back · go back (volver)\n• give back · pay back (devolver)\n• call back (devolver una llamada)\n• get back (regresar) · look back (mirar atrás)\n• take back (devolver algo a la tienda)',
      [
        ['I will come back tomorrow.', 'Volveré mañana.'],
        ['Please give me my book back.', 'Por favor devuélveme mi libro.'],
        ['I will call you back in ten minutes.', 'Te devolveré la llamada en diez minutos.'],
        ['She took the shirt back to the shop.', 'Ella devolvió la camisa a la tienda.'],
      ]
    ),
    teoria(
      '4 · Separables e inseparables',
      'Muchos son separables y aceptan un objeto en medio; con pronombres, el pronombre siempre va en medio:\n\n• Throw away the box. / Throw the box away. / Throw it away.\n• Give back the money. / Give it back.\n\nLos que llevan tres partes no se separan: catch up with, get away with, run out of, look forward to.',
      [
        ['Throw the box away. Throw it away.', 'Tira la caja. Tírala.'],
        ['Give the money back. Give it back.', 'Devuelve el dinero. Devuélvelo.'],
        ['I cannot catch up with her.', 'No puedo alcanzarla.'],
        ['We have run out of sugar.', 'Se nos acabó el azúcar.'],
      ]
    ),
    teoria(
      '5 · Cómo aprenderlos',
      'No intentes traducir la partícula: aprende cada phrasal verb con un ejemplo. Algunos consejos:\n\n• Agrúpalos por partícula (up, away, back) y por significado.\n• Escríbelos en frases completas.\n• Usa el mismo verbo con varias partículas para ver cómo cambia el sentido: give up, give away, give back.',
      [
        ['She gave up smoking.', 'Ella dejó de fumar.'],
        ['He gave away his old bike.', 'Él regaló su bicicleta vieja.'],
        ['Please give back my pen.', 'Por favor devuélveme mi bolígrafo.'],
        ['Never give up!', '¡Nunca te rindas!'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Separable', verbo('throw'), suj('the box'), aux('away')),
    fl('Con pronombre', verbo('throw'), suj('it'), aux('away')),
    fl('Tres partes', verbo('catch'), aux('up'), aux('with'), suj('her')),
  ],
  table: {
    cols: ['Phrasal verb', 'Significado', 'Ejemplo'],
    rows: [
      ['give up', 'rendirse', 'Never give up!'],
      ['throw away', 'tirar', 'Throw it away.'],
      ['put away', 'guardar', 'Put your toys away.'],
      ['call back', 'devolver una llamada', "I'll call you back."],
      ['catch up with', 'alcanzar', 'I cannot catch up with her.'],
    ],
  },
  contrastCard: {
    left: { label: 'Con sustantivo', example: 'Throw away the box. / Throw the box away.', highlight: 'away' },
    right: { label: 'Con pronombre', example: 'Throw it away.', highlight: 'it away' },
    caption: 'Con un pronombre (it, them) va siempre entre el verbo y la partícula.',
  },
  quiz: [
    ejercicio(
      'The milk is finished. We have ___ all of it.',
      'used up',
      ['used away', 'used back', 'used on'],
      'use up significa gastar o terminar del todo algo: «used up all the milk». Con away o back no tiene ese sentido.'
    ),
    ejercicio(
      'You can ___ that old box. I do not need it.',
      'throw away',
      ['throw back', 'throw up', 'throw into'],
      'throw away significa tirar a la basura. throw up significa vomitar y throw back es devolver algo lanzándolo.'
    ),
    ejercicio(
      'I missed your call. I will ___ you in ten minutes.',
      'call back',
      ['call away', 'call up on', 'call off'],
      'call back significa devolver una llamada. call off es cancelar y call away o call up on no tienen este sentido.'
    ),
    ejercicio(
      '¿Cuál de estas frases es correcta?',
      'Throw it away, please.',
      ['Throw away it, please.', 'Away throw it, please.', 'Throw it to away, please.'],
      'Con un pronombre (it) este phrasal verb se separa y el pronombre va en medio: «Throw it away». «Throw away it» es incorrecta.'
    ),
    ejercicio(
      'I run quickly, but I cannot ___ her.',
      'catch up with',
      ['catch away from', 'catch back to', 'catch on with'],
      'catch up with significa alcanzar a alguien que va más adelante. Las otras combinaciones no existen o cambian el sentido.'
    ),
  ],
  flashcards: [
    tarjeta('Con up', 'speed up · cheer up · use up · show up\ngive up · make up · catch up with'),
    tarjeta('Con away', 'go away · run away · throw away\nput away · give away · take away'),
    tarjeta('Con back', 'come back · give back · pay back\ncall back · take back · get back'),
    tarjeta('Separables', 'Throw away the box = Throw the box away\nCon pronombre: Throw it away'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'I am cleaning my room. Can you help?', translation: 'Estoy limpiando mi cuarto. ¿Puedes ayudarme?' },
    { speaker: 'user', text: 'Sure. Put your clothes away and throw away those old papers.', translation: 'Claro. Guarda tu ropa y tira esos papeles viejos.' },
    { speaker: 'other', text: 'I will. I also need to give back your book.', translation: 'Lo haré. También tengo que devolverte tu libro.' },
    { speaker: 'user', text: 'No problem. I thought you gave it away!', translation: 'No hay problema. ¡Pensé que lo habías regalado!' },
    { speaker: 'other', text: 'Never! Wait, I will call you back, my mother is calling.', translation: '¡Nunca! Espera, te devuelvo la llamada, mi mamá está llamando.' },
    { speaker: 'user', text: 'OK. Cheer up, it is almost finished!', translation: 'Está bien. ¡Anímate, ya casi terminamos!' },
  ],
  readingText: {
    title: 'A fresh start',
    body: 'Last weekend I decided to clean my flat. I threw away old magazines, gave away clothes I do not wear and put away everything else. I also returned a book I had not given back to my friend. When I finished, I felt as if I had a new home. I had used up all the cleaning products, so I will buy more next week. I will never give up this habit!',
    translation:
      'El fin de semana pasado decidí limpiar mi departamento. Tiré revistas viejas, regalé ropa que no uso y guardé todo lo demás. También le devolví a mi amigo un libro que no le había devuelto. Cuando terminé, sentí como si tuviera una casa nueva. Había gastado todos los productos de limpieza, así que compraré más la próxima semana. ¡Nunca abandonaré este hábito!',
  },
  tips: [
    'Aprende los phrasal verbs por partícula y en frases completas, no por traducción palabra por palabra.',
    'Con pronombres separa siempre: «throw it away», «give it back», nunca «throw away it».',
    'Un mismo verbo cambia de sentido con cada partícula: give up (rendirse), give away (regalar), give back (devolver).',
  ],
  dailyWords: palabras('clean', 'room', 'milk', 'sugar', 'bottle', 'jar'),
  relacionados: [
    { etiqueta: '📖 Gramática: Phrasal Verbs más comunes', ruta: '/gramatica/concepto/phrasal-verbs-mas-comunes' },
    { unidad: 1004 },
  ],
};

/** Las unidades del bloque extra del B2. */
export const UNIDADES_EXTRA_B2: Record<number, Unit> = {
  1201: UNIDAD_1201,
  1202: UNIDAD_1202,
  1203: UNIDAD_1203,
  1204: UNIDAD_1204,
};

/** La pronunciación de las unidades del bloque extra del B2. */
export const PRONUN_EXTRA_B2: Record<number, PronunUnit> = {
  1201: {
    tips: [
      {
        head: 'Las preposiciones son débiles',
        body: 'En una frase rápida on, of, to y for se debilitan y se pegan al verbo: depend on suena /dɪˈpend ɑːn/ y consist of suena /kənˈsɪst əv/.',
        examples: ['depend on /dɪˈpend ɑːn/', 'consist of /kənˈsɪst əv/', 'married to /ˈmærid tə/'],
      },
      {
        head: 'responsible y aware',
        body: 'responsible lleva el acento en spon: /rɪˈspɑːnsəbl/. aware se dice /əˈwer/ con el acento en la segunda sílaba.',
        examples: ['responsible /rɪˈspɑːnsəbl/', 'aware /əˈwer/', 'capable /ˈkeɪpəbl/'],
      },
    ],
    vocab: palabras('job', 'career', 'boss', 'manager'),
  },
  1202: {
    tips: [
      {
        head: 'whose y who’s',
        body: 'whose (de quien) y who’s (who is) suenan igual: /huːz/. El contexto decide: whose + sustantivo, who’s + verbo o adjetivo.',
        examples: ['whose /huːz/', 'whose car /huːz ˈkɑːr/', "who's here /huːz ˈhɪr/"],
      },
      {
        head: 'whom y which',
        body: 'whom se dice /huːm/ (la w no suena). which se dice /wɪtʃ/ y rima con «rich» pero con w. No se confunden con witch.',
        examples: ['whom /huːm/', 'which /wɪtʃ/', 'to whom /tə ˈhuːm/'],
      },
    ],
    vocab: palabras('neighbor', 'street', 'corner', 'town'),
  },
  1203: {
    tips: [
      {
        head: 'even',
        body: 'even se dice /ˈiːvn/: la primera sílaba es larga como «i» de «ir» y la segunda es muy débil, casi solo una n.',
        examples: ['even /ˈiːvn/', 'even if /ˈiːvn ɪf/', 'even though /ˈiːvn ðoʊ/'],
      },
      {
        head: 'as if y as though',
        body: 'as if suena /əz ˈɪf/ y as though /əz ˈðoʊ/: as se debilita y el acento va en la segunda palabra.',
        examples: ['as if /əz ˈɪf/', 'as though /əz ˈðoʊ/'],
      },
    ],
    vocab: palabras('deadline', 'report', 'meeting', 'boss'),
  },
  1204: {
    tips: [
      {
        head: 'El acento va en la partícula',
        body: 'En un phrasal verb la voz sube en la partícula: give UP, throw aWAY, call BACK. Con pronombres también: throw it aWAY.',
        examples: ['give up /ɡɪv ˈʌp/', 'throw away /ˈθroʊ əˈweɪ/', 'call back /ˈkɔːl ˈbæk/'],
      },
      {
        head: 'Se unen al hablar',
        body: 'Verbo y partícula se enlazan: give up suena /ˈɡɪvʌp/ y put away suena /ˈpʊtəweɪ/. La última consonante del verbo pasa a la vocal siguiente.',
        examples: ['give up /ˈɡɪvʌp/', 'put away /ˈpʊtəweɪ/', 'pick it up /ˈpɪk ɪt ʌp/'],
      },
    ],
    vocab: palabras('clean', 'room', 'milk', 'sugar'),
  },
};
