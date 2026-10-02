import { aux, f, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B1_3 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 3 · Relaciones, situaciones imaginarias y tecnología (ids 52–54: Unidad 7–9 del nivel B1).

// ─── Unidad 7 (id 52) · Cláusulas relativas y phrasal verbs ───

const UNIDAD_52: Unit = {
  title: 'Subject and Object Relative Clauses, Phrasal Verbs',
  topic: BLOQUE_B1_3,
  level: 'B1',
  explain: [
    teoria(
      '1 · Cláusulas relativas de sujeto: who, which, that',
      "Una cláusula relativa da información sobre un sustantivo. Si el pronombre relativo es el SUJETO del verbo que sigue, se usa:\n\n• who → personas: The woman who lives next door is a nurse.\n• which → cosas: The bus which goes to the airport is late.\n• that → personas o cosas (más común al hablar): The man that called you is here.\n\nEl pronombre relativo es el sujeto de la cláusula: va justo antes del verbo (lives, goes, called).",
      [
        ['The woman who lives next door is a nurse.', 'La mujer que vive al lado es enfermera.'],
        ['The bus which goes to the airport is late.', 'El bus que va al aeropuerto está atrasado.'],
        ['The man that called you is here.', 'El hombre que te llamó está aquí.'],
        ['I know a shop that sells cheap phones.', 'Conozco una tienda que vende teléfonos baratos.'],
      ]
    ),
    teoria(
      '2 · Sin repetir el sujeto',
      "En la cláusula relativa de sujeto, el pronombre ya es el sujeto: no se repite con he, she o it:\n\n• The man who lives upstairs is a doctor. (no «who he lives»)\n• I have a friend who speaks four languages.\n• This is the phone that works best.\n\nNo se pone coma antes de la cláusula cuando es necesaria para saber de qué persona o cosa se habla (cláusula especificativa).",
      [
        ['The man who lives upstairs is a doctor.', 'El hombre que vive arriba es doctor.'],
        ['I have a friend who speaks four languages.', 'Tengo un amigo que habla cuatro idiomas.'],
        ['This is the phone that works best.', 'Este es el teléfono que mejor funciona.'],
        ['Do you know anyone who can help me?', '¿Conoces a alguien que pueda ayudarme?'],
      ]
    ),
    teoria(
      '3 · Cláusulas relativas de objeto',
      "Si el pronombre relativo es el OBJETO del verbo (recibe la acción), después del pronombre va otro sujeto (un pronombre o un nombre):\n\n• The book that I read was great. (I = sujeto; that = objeto de read)\n• The man who(m) I met is my boss.\n• The film which we saw was long.\n\nSe usan who, which y that igual que antes; whom es formal y poco frecuente.",
      [
        ['The book that I read was great.', 'El libro que leí era genial.'],
        ['The man who I met is my new boss.', 'El hombre que conocí es mi nuevo jefe.'],
        ['The film which we saw was long.', 'La película que vimos era larga.'],
        ['The shoes that she bought were expensive.', 'Los zapatos que ella compró eran caros.'],
      ]
    ),
    teoria(
      '4 · Omitir el pronombre en las de objeto',
      "En las cláusulas relativas de OBJETO se puede omitir el pronombre. En las de sujeto, no.\n\n• The book (that) I read was great. ✓\n• The man (who) I met is my boss. ✓\n• The woman (who) lives next door is a nurse. ✗ → no se puede omitir.\n\nTruco: si después del pronombre va un sujeto (I, she, we, the teacher), se puede omitir; si va un verbo, no.",
      [
        ['The book I read was great.', 'El libro que leí era genial.'],
        ['The man I met is my new boss.', 'El hombre que conocí es mi nuevo jefe.'],
        ['The woman who lives next door is a nurse.', 'La mujer que vive al lado es enfermera.'],
        ['The phone she bought is new.', 'El teléfono que ella compró es nuevo.'],
      ]
    ),
    teoria(
      '5 · Con preposición al final',
      "📖 Del libro: cuando el verbo de la cláusula lleva preposición, esta suele ir al final, y el pronombre se omite fácilmente:\n\n• The man I talked to was very kind. (= the man to whom I talked: muy formal)\n• The house we lived in was small.\n• That's the song I was thinking about.\n\n⚠️ Ojo: no se repite el objeto: «the man I talked to», no «the man I talked to him».",
      [
        ['The man I talked to was very kind.', 'El hombre con el que hablé fue muy amable.'],
        ['The house we lived in was small.', 'La casa en la que vivimos era pequeña.'],
        ["That's the song I was thinking about.", 'Esa es la canción en la que estaba pensando.'],
        ['The friend I traveled with lives in Lima.', 'El amigo con el que viajé vive en Lima.'],
      ]
    ),
    teoria(
      '6 · Whose y where',
      "📖 Del libro: además de who, which y that hay otros relativos:\n\n• whose → posesión (de quien): «The man whose car was stolen called the police».\n• where → lugar: «The city where I was born is small».\n• when → tiempo: «I remember the day when we met».\n\nWhose siempre va seguido de un sustantivo y no se puede omitir.",
      [
        ['The man whose car was stolen called the police.', 'El hombre cuyo auto fue robado llamó a la policía.'],
        ['The city where I was born is small.', 'La ciudad donde nací es pequeña.'],
        ['I remember the day when we met.', 'Recuerdo el día en que nos conocimos.'],
        ['That is the woman whose son is famous.', 'Esa es la mujer cuyo hijo es famoso.'],
      ]
    ),
    teoria(
      '7 · Phrasal verbs: verbo + partícula',
      "Un phrasal verb es un verbo + una partícula (up, down, in, out, on, off, away, back). Juntos tienen un significado propio, que muchas veces no se deduce de las partes:\n\n• look up (buscar) · give up (rendirse) · turn off (apagar)\n• wake up (despertarse) · get up (levantarse)\n• find out (descubrir) · work out (resolver; hacer ejercicio)\n\nSe aprenden como vocabulario nuevo, con su significado completo.",
      [
        ['I woke up at six.', 'Me desperté a las seis.'],
        ["Don't give up!", '¡No te rindas!'],
        ['Look up the word in the dictionary.', 'Busca la palabra en el diccionario.'],
        ['I found out the truth yesterday.', 'Descubrí la verdad ayer.'],
      ]
    ),
    teoria(
      '8 · Phrasal verbs sin objeto: in, out, down, up',
      "📖 Del libro: muchos phrasal verbs no llevan objeto (intransitivos) y no se separan:\n\n• come in (entrar) · go out (salir) · get up (levantarse)\n• sit down (sentarse) · stand up (ponerse de pie)\n• grow up (crecer) · break down (averiarse)\n• come back (volver) · hurry up (apurarse)\n\n«Please come in and sit down.» No se dice «come in the house» con el mismo sentido: es «come into the house».",
      [
        ['Please come in and sit down.', 'Por favor, entra y siéntate.'],
        ['I grew up in a small village.', 'Crecí en un pueblo pequeño.'],
        ['The car broke down on the highway.', 'El auto se averió en la carretera.'],
        ['Hurry up! We are late.', '¡Apúrate! Vamos tarde.'],
      ]
    ),
    teoria(
      '9 · Phrasal verbs con in y out',
      "Algunos phrasal verbs muy comunes con in y out:\n\n• take in (absorber, engañar) · give in (rendirse) · move in (mudarse a)\n• find out (descubrir) · work out (hacer ejercicio; resolver) · turn out (resultar) · run out of (quedarse sin) · eat out (comer fuera)\n\n«We ran out of milk.» · «It turned out to be a good idea.» · «We often eat out on Fridays.»",
      [
        ['We ran out of milk.', 'Nos quedamos sin leche.'],
        ['It turned out to be a good idea.', 'Resultó ser una buena idea.'],
        ['We often eat out on Fridays.', 'A menudo comemos fuera los viernes.'],
        ['I work out three times a week.', 'Hago ejercicio tres veces a la semana.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Relativa de sujeto', resto('The woman'), aux('who'), verbo('lives'), resto('next door')),
    fl('Relativa de objeto', resto('The book'), aux('that'), suj('I'), verbo('read')),
    fl('Sin pronombre', resto('The book'), suj('I'), verbo('read')),
    fl('Phrasal verb', verbo('give'), aux('up'), resto('/'), verbo('turn'), aux('off')),
  ],
  table: {
    cols: ['Relativo', 'Se usa para', 'Ejemplo'],
    rows: [
      ['who', 'personas', 'The woman who lives here.'],
      ['which', 'cosas', 'The bus which goes there.'],
      ['that', 'personas o cosas', 'The book that I read.'],
      ['whose', 'posesión', 'The man whose car…'],
      ['where', 'lugar', 'The city where I live.'],
      ['(omitido)', 'solo objeto', 'The man I met.'],
    ],
  },
  contrastCard: {
    left: { label: 'Sujeto — no se omite', example: 'The woman who lives here…', highlight: 'who lives' },
    right: { label: 'Objeto — se puede omitir', example: 'The woman (who) I met…', highlight: '(who) I met' },
    caption: 'Si después del pronombre va un verbo, es de sujeto y no se omite. Si va un sujeto, es de objeto y se puede omitir.',
  },
  quiz: [
    ejercicio(
      'The woman ___ lives next door is a nurse.',
      'who',
      ['whom', 'which', 'whose'],
      'Se habla de una persona y el pronombre es el sujeto del verbo lives: who. whom es para objetos, which es para cosas y whose indica posesión.'
    ),
    ejercicio(
      'This is the book ___ I told you about.',
      'that',
      ['who', 'whose', 'what'],
      'Se habla de una cosa: that (o which). who es para personas, whose indica posesión y what no es un pronombre relativo.'
    ),
    ejercicio(
      'Choose the correct sentence.',
      'The movie that I saw was great.',
      ['The movie that I saw it was great.', 'The movie what I saw was great.', 'The movie who I saw was great.'],
      'En una cláusula relativa de objeto no se repite el objeto (it), y para cosas se usa that o which, no what ni who.'
    ),
    ejercicio(
      'A man ___ car was stolen called the police.',
      'whose',
      ['who', 'which', 'whom'],
      'El auto es «de» ese hombre, así que se usa whose para la posesión. who, which y whom no indican posesión.'
    ),
    ejercicio(
      "I'm tired. I woke ___ at five this morning.",
      'up',
      ['out', 'off', 'over'],
      'El phrasal verb para despertarse es wake up. woke out, woke off y woke over no existen con ese significado.'
    ),
  ],
  flashcards: [
    tarjeta('Relativas de sujeto', 'who (personas) · which (cosas) · that (ambos)\nThe woman who lives next door. (No se omite)'),
    tarjeta('Relativas de objeto', 'The book (that) I read. · The man (who) I met.\nSe puede omitir el pronombre.'),
    tarjeta('Truco para omitir', 'Después del pronombre: ¿verbo o sujeto?\nVerbo → no se omite. Sujeto → se puede omitir.'),
    tarjeta('Whose y where', 'The man whose car was stolen.\nThe city where I was born.'),
    tarjeta('Phrasal verbs', 'verbo + partícula = significado propio\nwake up · give up · find out · run out of · eat out'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Do you know the woman who just came in?', translation: '¿Conoces a la mujer que acaba de entrar?' },
    { speaker: 'user', text: "Yes, she's the teacher I told you about. She grew up in Cusco.", translation: 'Sí, es la profesora de la que te hablé. Ella creció en Cusco.' },
    { speaker: 'other', text: 'Is she the one whose book won the prize?', translation: '¿Es ella la que ganó el premio con su libro?' },
    { speaker: 'user', text: "That's right. It's the book that everybody is talking about.", translation: 'Exacto. Es el libro del que todos hablan.' },
    { speaker: 'other', text: 'I want to read it. Where can I find a copy?', translation: 'Quiero leerlo. ¿Dónde puedo conseguir una copia?' },
    { speaker: 'user', text: 'Look it up online. The shop where I bought mine ran out of copies.', translation: 'Búscalo en internet. La tienda donde compré el mío se quedó sin copias.' },
  ],
  readingText: {
    title: 'The neighbors',
    body: "The couple who moved in next door last month are very friendly. The man who works as a chef often brings us the food he cooks. His wife, whose family comes from Italy, teaches at a school near here. The street where they live is quiet, and the house they bought was empty for years. Yesterday their car broke down, so I gave them a lift. On the way we found out that we grew up in the same town. It turned out to be a very small world!",
    translation:
      'La pareja que se mudó al lado el mes pasado es muy amable. El hombre que trabaja como chef a menudo nos trae la comida que cocina. Su esposa, cuya familia viene de Italia, enseña en una escuela cercana. La calle donde viven es tranquila y la casa que compraron estuvo vacía por años. Ayer se les averió el auto, así que los llevé. En el camino descubrimos que crecimos en el mismo pueblo. ¡Resultó ser un mundo muy pequeño!',
  },
  tips: [
    "Who es para personas y which para cosas; that sirve para ambos. «The woman who lives…», «the bus which goes…».",
    "En una relativa de sujeto no se repite el sujeto: «The man who lives upstairs», no «who he lives».",
    'En las de objeto se puede omitir el pronombre: «the book I read». En las de sujeto, no.',
    "En un phrasal verb la partícula cambia el significado: «give» (dar) y «give up» (rendirse) son distintos. Se aprenden como vocabulario.",
  ],
  dailyWords: palabras('wake up', 'get up', 'take off', 'check-in', 'check-out', 'land'),
  relacionados: [
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
    { etiqueta: '📖 Gramática: Verbos Frasales (Phrasal Verbs)', ruta: '/gramatica/concepto/verbos-frasales-phrasal-verbs' },
  ],
};

// ─── Unidad 8 (id 53) · Wish y condicional imaginario ───

const UNIDAD_53: Unit = {
  title: 'Wish, Second Conditional and Imaginary Questions',
  topic: BLOQUE_B1_3,
  level: 'B1',
  explain: [
    teoria(
      '1 · Wish + pasado simple: deseos sobre el presente',
      "Para expresar un deseo sobre algo que NO es así ahora (y te gustaría que fuera diferente) se usa wish + pasado simple. El pasado no habla del pasado: habla de algo irreal en el presente.\n\n• I wish I had a bigger house. (no la tengo)\n• She wishes she lived in the city. (vive en el campo)\n• I wish I knew the answer.\n\nEn español usamos «ojalá + subjuntivo».",
      [
        ['I wish I had a bigger house.', 'Ojalá tuviera una casa más grande.'],
        ['She wishes she lived in the city.', 'Ella desearía vivir en la ciudad.'],
        ['I wish I knew the answer.', 'Ojalá supiera la respuesta.'],
        ['They wish they had more free time.', 'Desearían tener más tiempo libre.'],
      ]
    ),
    teoria(
      '2 · Wish + were',
      "Con el verbo to be se usa were con todas las personas, incluidas I, he, she e it:\n\n• I wish I were taller.\n• She wishes she were here.\n• I wish it were summer.\n\nEn conversación informal también se oye «I wish I was…», pero «were» es la forma correcta y la que se pide en los exámenes.",
      [
        ['I wish I were taller.', 'Ojalá fuera más alto.'],
        ['She wishes she were here.', 'Ella desearía estar aquí.'],
        ['I wish it were summer.', 'Ojalá fuera verano.'],
        ['He wishes he were richer.', 'Él desearía ser más rico.'],
      ]
    ),
    teoria(
      '3 · Wish + could y would',
      "• wish + could → algo que no puedes hacer ahora: «I wish I could fly» · «I wish I could speak French».\n• wish + would → queja sobre algo que otra persona hace (o no hace) y te molesta: «I wish you would listen» · «I wish he wouldn't talk so loud».\n\nWish + would no se usa con I ni con cosas que tú controlas.",
      [
        ['I wish I could fly.', 'Ojalá pudiera volar.'],
        ['I wish I could speak French.', 'Ojalá pudiera hablar francés.'],
        ['I wish you would listen to me.', 'Ojalá me escucharas.'],
        ["I wish he wouldn't talk so loud.", 'Ojalá no hablara tan fuerte.'],
      ]
    ),
    teoria(
      '4 · Segundo condicional: if + pasado, would + base',
      "📖 Del libro: el segundo condicional habla de situaciones imaginarias o poco probables en el presente o futuro. Se forma con if + pasado simple en la cláusula con if, y would + verbo base en la principal:\n\n• If I had money, I would travel the world.\n• If she studied more, she would pass.\n• I would buy a house if I won the lottery.\n\nEl pasado no habla del pasado, sino de lo imaginario.",
      [
        ['If I had money, I would travel the world.', 'Si tuviera dinero, viajaría por el mundo.'],
        ['If she studied more, she would pass the exam.', 'Si estudiara más, aprobaría el examen.'],
        ['I would buy a house if I won the lottery.', 'Compraría una casa si ganara la lotería.'],
        ['If it were warmer, we would go to the beach.', 'Si hiciera más calor, iríamos a la playa.'],
      ]
    ),
    teoria(
      '5 · Negativa y pregunta del segundo condicional',
      "• Con if + didn't: «If I didn't have to work, I would sleep all day».\n• Con would + not (wouldn't): «I wouldn't tell him if I were you».\n• Pregunta con would: «Would you move to another country if you got a good job?».\n• Respuesta corta: Yes, I would. · No, I wouldn't.\n\nContracción: I'd, you'd, she'd · wouldn't.",
      [
        ["If I didn't have to work, I would sleep all day.", 'Si no tuviera que trabajar, dormiría todo el día.'],
        ["I wouldn't tell him if I were you.", 'Yo no se lo diría si fuera tú.'],
        ['Would you move abroad if you got a good job?', '¿Te mudarías al extranjero si consiguieras un buen trabajo?'],
        ["Would she help? Yes, she would.", '¿Ella ayudaría? Sí.'],
      ]
    ),
    teoria(
      '6 · If I were you…',
      "If I were you, I would… es una forma muy común de dar un consejo: imaginas que estás en el lugar del otro.\n\n• If I were you, I'd tell him the truth.\n• If I were you, I wouldn't buy that.\n• What would you do if you were me?\n\nSe usa were con I (no was).",
      [
        ["If I were you, I'd tell him the truth.", 'Yo en tu lugar le diría la verdad.'],
        ["If I were you, I wouldn't buy that.", 'Yo en tu lugar no compraría eso.'],
        ['What would you do if you were me?', '¿Qué harías tú si fueras yo?'],
        ["If I were him, I'd call her.", 'Si yo fuera él, la llamaría.'],
      ]
    ),
    teoria(
      '7 · Preguntas sobre eventos imaginarios',
      "Para preguntar qué pasaría en una situación imaginaria se usa una palabra interrogativa + would + sujeto + verbo + if + pasado:\n\n• What would you do if you won the lottery?\n• Where would you go if you could travel anywhere?\n• Who would you invite if you had a party?\n\nRespuestas: I'd buy a house. · I'd go to Japan. · I'd invite my family.",
      [
        ['What would you do if you won the lottery?', '¿Qué harías si ganaras la lotería?'],
        ['Where would you go if you could travel anywhere?', '¿Adónde irías si pudieras viajar a cualquier lugar?'],
        ['Who would you invite if you had a party?', '¿A quién invitarías si hicieras una fiesta?'],
        ["I'd buy a house and travel.", 'Compraría una casa y viajaría.'],
      ]
    ),
    teoria(
      '8 · Primer o segundo condicional',
      "📖 Del libro: se elige según qué tan real es la situación.\n\n• Primer condicional (real, posible): If it rains tomorrow, we will stay home. → if + presente, will + base.\n• Segundo condicional (imaginario, improbable): If I won the lottery, I would travel. → if + pasado, would + base.\n\nSi lo ves posible, primer condicional. Si es un sueño o algo irreal, segundo.",
      [
        ['If it rains, we will stay home.', 'Si llueve, nos quedaremos en casa.'],
        ['If I won the lottery, I would travel.', 'Si ganara la lotería, viajaría.'],
        ["If I have time, I'll call you.", 'Si tengo tiempo, te llamaré.'],
        ['If I had more time, I would learn Italian.', 'Si tuviera más tiempo, aprendería italiano.'],
      ]
    ),
    teoria(
      '9 · Could y might en lugar de would',
      "En la cláusula principal, would se puede cambiar por could (posibilidad) o might (quizás):\n\n• If I had a car, I could drive to work. (podría)\n• If I had more time, I might learn to play the piano. (quizás)\n• If she were here, she could help us.\n\nCould dice que sería posible; might, que no estás seguro; would, que estás seguro.",
      [
        ['If I had a car, I could drive to work.', 'Si tuviera un auto, podría manejar al trabajo.'],
        ['If I had more time, I might learn the piano.', 'Si tuviera más tiempo, quizás aprendería piano.'],
        ['If she were here, she could help us.', 'Si ella estuviera aquí, podría ayudarnos.'],
        ['If we left now, we might catch the bus.', 'Si saliéramos ahora, quizás alcanzaríamos el bus.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Wish + pasado', suj('I'), verbo('wish'), suj('I'), verbo('had'), resto('a car')),
    fl('Wish + were', suj('I'), verbo('wish'), suj('I'), aux('were'), resto('taller')),
    fl('Segundo condicional', resto('If'), suj('I'), verbo('had money'), resto(','), suj('I'), aux('would'), verbo('travel')),
    fl('Pregunta imaginaria', resto('What'), aux('would'), suj('you'), verbo('do'), resto('if…?')),
  ],
  table: {
    cols: ['Condicional', 'Cláusula if', 'Cláusula principal'],
    rows: [
      ['Primero (real)', 'if + presente', 'will + base'],
      ['Segundo (imaginario)', 'if + pasado', 'would + base'],
      ['Con wish (presente)', 'wish + pasado', '—'],
      ['Con wish (habilidad)', 'wish + could', '—'],
      ['Consejo', 'If I were you', "I'd + base"],
    ],
  },
  contrastCard: {
    left: { label: 'Primer condicional — real', example: 'If it rains, we will stay home.', highlight: 'will stay' },
    right: { label: 'Segundo condicional — imaginario', example: 'If I won, I would travel.', highlight: 'would travel' },
    caption: 'Primer condicional para lo que puede pasar. Segundo para lo imaginario o poco probable.',
  },
  quiz: [
    ejercicio(
      'I wish I ___ a bigger house.',
      'had',
      ['have', 'would have', 'having'],
      'Para un deseo sobre el presente se usa wish + pasado simple: «I wish I had». have, would have y having no forman esta estructura.'
    ),
    ejercicio(
      'If I ___ rich, I would travel the world.',
      'were',
      ['am', 'will be', 'would be'],
      'En el segundo condicional la cláusula con if lleva pasado, y con to be se usa were: «If I were rich». am, will be y would be no se usan después de if.'
    ),
    ejercicio(
      'If she studied more, she ___ the exam.',
      'would pass',
      ['will pass', 'passes', 'passed'],
      'En el segundo condicional la cláusula principal lleva would + verbo base: «would pass». will pass es del primer condicional y passes y passed no son correctas.'
    ),
    ejercicio(
      'What ___ you do if you lost your phone?',
      'would',
      ['will', 'did', 'do'],
      'La pregunta de una situación imaginaria lleva would: «What would you do if…?». will, did y do no forman este condicional.'
    ),
    ejercicio(
      'I wish I ___ speak French. It would help me in Paris.',
      'could',
      ['can', 'would', 'will'],
      'Un deseo sobre una habilidad que no tienes se expresa con wish + could. can, would y will no se usan después de wish con este sentido.'
    ),
  ],
  flashcards: [
    tarjeta('Wish + pasado', 'Un deseo sobre el presente: el pasado habla de algo irreal.\nI wish I had a car. · I wish I were taller.'),
    tarjeta('Wish + could / would', 'wish + could → habilidad que no tienes.\nwish + would → queja sobre otra persona.'),
    tarjeta('Segundo condicional', 'if + pasado simple, would + verbo base\nIf I had money, I would travel.'),
    tarjeta('If I were you', "Consejo: «If I were you, I'd tell him». Siempre were."),
    tarjeta('Primer o segundo', 'Real: If it rains, we will stay. (primero)\nImaginario: If I won, I would travel. (segundo)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What would you do if you won the lottery?', translation: '¿Qué harías si ganaras la lotería?' },
    { speaker: 'user', text: "I'd buy a house near the beach and I'd travel the world. And you?", translation: 'Compraría una casa cerca de la playa y viajaría por el mundo. ¿Y tú?' },
    { speaker: 'other', text: "I'd quit my job. I wish I didn't have to work so much.", translation: 'Dejaría mi trabajo. Ojalá no tuviera que trabajar tanto.' },
    { speaker: 'user', text: 'If I were you, I would talk to your boss about it.', translation: 'Yo en tu lugar hablaría con tu jefe sobre eso.' },
    { speaker: 'other', text: "Maybe. I wish he would listen to me!", translation: 'Quizás. ¡Ojalá me escuchara!' },
    { speaker: 'user', text: 'If you had more free time, what would you do?', translation: 'Si tuvieras más tiempo libre, ¿qué harías?' },
  ],
  readingText: {
    title: 'If I could change one thing',
    body: "Sometimes I wish I had more time. If I had more time, I would learn to play the guitar and I would read every night. I wish I lived closer to the sea, because I would swim every morning. My brother says, \"If I were you, I'd move!\" But it isn't so easy. If I moved, I would miss my friends. What would you do if you could change one thing in your life? I think I would choose to have a day with twenty-five hours. Then I might have time for everything.",
    translation:
      'A veces desearía tener más tiempo. Si tuviera más tiempo, aprendería a tocar guitarra y leería todas las noches. Ojalá viviera más cerca del mar, porque nadaría todas las mañanas. Mi hermano dice: «¡Yo en tu lugar me mudaría!». Pero no es tan fácil. Si me mudara, extrañaría a mis amigos. ¿Qué harías tú si pudieras cambiar una cosa de tu vida? Creo que elegiría tener un día de veinticinco horas. Entonces quizás tendría tiempo para todo.',
  },
  tips: [
    "Después de wish se usa pasado simple aunque hables del presente: «I wish I had a car». Con to be, were: «I wish I were taller».",
    "En el segundo condicional no se pone would en la cláusula con if: «If I had money, I would travel», no «If I would have money».",
    'Para dar un consejo usa «If I were you, I would…». Siempre were con I.',
    "Primer condicional = posible (if + presente, will). Segundo condicional = imaginario (if + pasado, would).",
  ],
  dailyWords: palabras('wish', 'hope', 'dream', 'fear', 'luck', 'chance'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Futuro en inglés', ruta: '/gramatica/concepto/el-futuro-en-ingles' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

const FORMAS_53: FormasUnidad = {
  titulo: 'Segundo condicional',
  afirmativa: {
    formulas: [f(resto('If'), suj('subject'), verbo('past simple'), resto(','), suj('subject'), aux('would'), verbo('base verb'))],
    ejemplos: [
      ['If I had money, I would travel.', 'Si tuviera dinero, viajaría.'],
      ['If she studied more, she would pass.', 'Si estudiara más, aprobaría.'],
      ['If it were warmer, we would swim.', 'Si hiciera más calor, nadaríamos.'],
    ],
  },
  negativa: {
    formulas: [f(resto("If"), suj('subject'), aux("didn't"), verbo('base verb'), resto(','), suj('subject'), aux("wouldn't"), verbo('base verb'))],
    ejemplos: [
      ["If I didn't work, I would sleep all day.", 'Si no trabajara, dormiría todo el día.'],
      ["I wouldn't tell him if I were you.", 'Yo no se lo diría si fuera tú.'],
      ["She wouldn't go if it rained.", 'Ella no iría si lloviera.'],
    ],
  },
  pregunta: {
    formulas: [f(resto('What / Where…'), aux('would'), suj('subject'), verbo('base verb'), resto('if…?'))],
    ejemplos: [
      ['What would you do if you won the lottery?', '¿Qué harías si ganaras la lotería?'],
      ['Would you move abroad if you could?', '¿Te mudarías al extranjero si pudieras?'],
      ['Where would she go if she had time?', '¿Adónde iría ella si tuviera tiempo?'],
    ],
  },
  nota: "Contracciones: I'd · you'd · she'd · wouldn't. Respuestas cortas: Yes, I would. / No, I wouldn't. Con to be se usa were: «If I were you».",
  ojo: "Después de if no se usa would: «If I had money», no «If I would have money». Y el pasado no habla del pasado: habla de lo imaginario.",
};

// ─── Unidad 9 (id 54) · Preguntas indirectas, phrasal verbs separables, how to… ───

const UNIDAD_54: Unit = {
  title: 'Questions Within Sentences, Separable Phrasal Verbs and How To…',
  topic: BLOQUE_B1_3,
  level: 'B1',
  explain: [
    teoria(
      '1 · Preguntas dentro de oraciones',
      "Cuando una pregunta va dentro de otra frase (después de Could you tell me…?, Do you know…?, I wonder…, I don't know…), cambia el orden: se usa el orden de una oración afirmativa, sin inversión.\n\n• Pregunta directa: Where is the bank?\n• Dentro de otra frase: Could you tell me where the bank is?\n\nAdemás, la pregunta indirecta suena más amable y educada.",
      [
        ['Could you tell me where the bank is?', '¿Me podría decir dónde está el banco?'],
        ['I wonder what time it is.', 'Me pregunto qué hora es.'],
        ["I don't know who she is.", 'No sé quién es ella.'],
        ['Do you know where he lives?', '¿Sabes dónde vive él?'],
      ]
    ),
    teoria(
      '2 · Sin do, does ni did',
      "📖 Del libro: en una pregunta directa se usa do, does o did. Dentro de otra frase NO se usan: el verbo vuelve a su forma normal.\n\n• What time does the film start? → Do you know what time the film starts?\n• Why did she leave? → I wonder why she left.\n• Where do they live? → Can you tell me where they live?\n\n⚠️ Ojo: «I don't know what time it starts», no «I don't know what time does it start».",
      [
        ['Do you know what time the film starts?', '¿Sabes a qué hora empieza la película?'],
        ['I wonder why she left.', 'Me pregunto por qué se fue.'],
        ['Can you tell me where they live?', '¿Me puedes decir dónde viven?'],
        ["I don't know what he wants.", 'No sé qué quiere.'],
      ]
    ),
    teoria(
      '3 · Preguntas de sí / no dentro de oraciones: if y whether',
      "Una pregunta de sí / no dentro de otra frase se une con if o whether (si):\n\n• Is she coming? → Do you know if she is coming?\n• Does he like pizza? → I wonder whether he likes pizza.\n• Can you tell me if the library is open?\n\nIf y whether significan lo mismo en este uso. Whether es un poco más formal.",
      [
        ['Do you know if she is coming?', '¿Sabes si ella viene?'],
        ['I wonder whether he likes pizza.', 'Me pregunto si le gusta la pizza.'],
        ['Can you tell me if the library is open?', '¿Me puede decir si la biblioteca está abierta?'],
        ["I'm not sure if I can come.", 'No estoy seguro de poder ir.'],
      ]
    ),
    teoria(
      '4 · Ejemplos de uso: pedir información con cortesía',
      "Las preguntas indirectas son la forma educada de pedir información a desconocidos:\n\n• Excuse me, could you tell me where the station is?\n• Do you know how much this costs?\n• Could you tell me what time the bank opens?\n• Would you mind telling me how to get to the airport?\n\nLa respuesta puede ser corta: «It's on the left» · «About twenty dollars».",
      [
        ['Excuse me, could you tell me where the station is?', 'Disculpe, ¿podría decirme dónde está la estación?'],
        ['Do you know how much this costs?', '¿Sabe cuánto cuesta esto?'],
        ['Could you tell me what time the bank opens?', '¿Podría decirme a qué hora abre el banco?'],
        ["Do you know when the next bus leaves?", '¿Sabe cuándo sale el próximo bus?'],
      ]
    ),
    teoria(
      '5 · Phrasal verbs separables',
      "Algunos phrasal verbs llevan objeto y se pueden separar: el objeto va entre el verbo y la partícula, o después de la partícula.\n\n• Turn off the light. = Turn the light off.\n• Put on your coat. = Put your coat on.\n• Pick up the phone. = Pick the phone up.\n\nSignifican exactamente lo mismo. Con un objeto largo se prefiere después de la partícula.",
      [
        ['Turn off the light.', 'Apaga la luz.'],
        ['Turn the light off.', 'Apaga la luz.'],
        ['Put your coat on.', 'Ponte el abrigo.'],
        ['Pick the phone up.', 'Contesta el teléfono.'],
        ['She turned down the offer.', 'Ella rechazó la oferta.'],
      ]
    ),
    teoria(
      '6 · Con pronombre: siempre separados',
      "Si el objeto es un pronombre (it, them, me, him), siempre va entre el verbo y la partícula:\n\n• Turn it off. (no «Turn off it»)\n• Put it on.\n• Pick them up.\n• Take me back.\n\nEsta es la regla más importante de los phrasal verbs separables. Con un sustantivo hay dos opciones; con un pronombre, solo una.",
      [
        ['Turn it off.', 'Apágalo.'],
        ['Put it on.', 'Póntelo.'],
        ['Pick them up at six.', 'Recógelos a las seis.'],
        ['She called him back.', 'Ella le devolvió la llamada.'],
      ]
    ),
    teoria(
      '7 · Phrasal verbs con on y off',
      "📖 Del libro: algunos phrasal verbs muy comunes con on y off:\n\n• turn on / turn off (encender / apagar) · switch on / switch off\n• put on / take off (ponerse / quitarse ropa)\n• try on (probarse) · call off (cancelar) · put off (posponer)\n• get on / get off (subir / bajar de un bus o tren)\n\n«Please turn off your phone.» · «I tried on three shirts.» · «They called off the match.»",
      [
        ['Please turn off your phone.', 'Por favor, apaga tu teléfono.'],
        ['I tried on three shirts.', 'Me probé tres camisas.'],
        ['They called off the match.', 'Cancelaron el partido.'],
        ['Take off your shoes, please.', 'Quítate los zapatos, por favor.'],
      ]
    ),
    teoria(
      '8 · How to, where to, what to + verbo',
      "Después de palabras interrogativas se puede usar to + verbo base. Es una forma corta de una pregunta indirecta:\n\n• I don't know how to swim. (= how I can swim)\n• Can you show me where to park?\n• She doesn't know what to say.\n• Tell me when to start.\n\nSe usa con how, where, what, when, who, which y whether.",
      [
        ["I don't know how to swim.", 'No sé nadar.'],
        ['Can you show me where to park?', '¿Me puedes mostrar dónde estacionar?'],
        ["She doesn't know what to say.", 'Ella no sabe qué decir.'],
        ['Tell me when to start.', 'Dime cuándo empezar.'],
      ]
    ),
    teoria(
      '9 · Más con to + verbo: who, which, whether',
      "La misma estructura sirve con otras palabras:\n\n• who to + verbo → I don't know who to ask.\n• which + sustantivo + to → She can't decide which dress to wear.\n• whether to + verbo → We're thinking about whether to move.\n• how much / how many to → I don't know how much to pay.\n\nSuele ir después de know, ask, tell, show, explain, decide y wonder.",
      [
        ["I don't know who to ask.", 'No sé a quién preguntarle.'],
        ["She can't decide which dress to wear.", 'Ella no puede decidir qué vestido ponerse.'],
        ["We're thinking about whether to move.", 'Estamos pensando si mudarnos.'],
        ["I don't know how much to pay.", 'No sé cuánto pagar.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Pregunta directa', resto('Where'), aux('is'), suj('the bank?')),
    fl('Pregunta indirecta', resto('Do you know where'), suj('the bank'), aux('is?')),
    fl('Con it (separado)', verbo('Turn'), suj('it'), aux('off')),
    fl('Wh- + to', resto('I know'), resto('how to'), verbo('swim')),
  ],
  table: {
    cols: ['Directa', 'Dentro de una frase', 'Cambio'],
    rows: [
      ['Where is the bank?', 'Do you know where the bank is?', 'sin inversión'],
      ['What time does it start?', 'I know what time it starts.', 'sin does'],
      ['Why did she leave?', 'I wonder why she left.', 'sin did'],
      ['Is she coming?', 'Do you know if she is coming?', 'if / whether'],
      ['How can I swim?', "I don't know how to swim.", 'wh- + to'],
    ],
  },
  contrastCard: {
    left: { label: 'Pregunta directa — inversión', example: 'Where is the bank?', highlight: 'Where is' },
    right: { label: 'Pregunta indirecta — orden normal', example: 'Do you know where the bank is?', highlight: 'where the bank is' },
    caption: 'Dentro de otra frase, el orden es el de una afirmación: sin inversión y sin do, does ni did.',
  },
  quiz: [
    ejercicio(
      'Could you tell me where ___?',
      'the station is',
      ['is the station', 'does the station', 'the station is it'],
      'En una pregunta dentro de otra frase se usa el orden de una afirmación: «where the station is». is the station y does the station invierten el orden, y the station is it repite un pronombre.'
    ),
    ejercicio(
      "I don't know what time ___.",
      'it starts',
      ['does it start', 'starts it', 'it does start'],
      'Dentro de otra frase no se usa does y el orden es el normal: «what time it starts». does it start y starts it invierten el orden, y it does start no es natural aquí.'
    ),
    ejercicio(
      'Do you know ___ she is coming to the party?',
      'if',
      ['that', 'what', 'which'],
      'Una pregunta de sí / no dentro de una frase se une con if o whether: «Do you know if…». that, what y which no forman una pregunta de sí / no.'
    ),
    ejercicio(
      'Please turn ___ the TV. It is too loud.',
      'off',
      ['on', 'up', 'over'],
      'Si hay mucho ruido se apaga la televisión: turn off. turn on la encendería, turn up subiría el volumen y turn over no tiene ese sentido.'
    ),
    ejercicio(
      "I'm lost. Can you show me ___ to get to the station?",
      'how',
      ['what', 'which', 'who'],
      'how to + verbo expresa la manera de hacer algo: «how to get to». what, which y who no forman esta pregunta con get to.'
    ),
  ],
  flashcards: [
    tarjeta('Preguntas indirectas', 'Orden de afirmación: Do you know where the bank is?\nSin inversión.'),
    tarjeta('Sin do / does / did', 'What time does it start? → I know what time it starts.\nWhy did she leave? → I wonder why she left.'),
    tarjeta('If y whether', 'Sí / no dentro de una frase: Do you know if she is coming?'),
    tarjeta('Phrasal verbs separables', 'Turn off the light = turn the light off.\nCon pronombre siempre separados: turn it off.'),
    tarjeta('Wh- + to + verbo', "I don't know how to swim. · Show me where to park.\nwho to ask · what to say · when to start"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Excuse me, could you tell me where the post office is?', translation: 'Disculpe, ¿podría decirme dónde está el correo?' },
    { speaker: 'user', text: "Sure. It's next to the bank. Do you know how to get to the bank?", translation: 'Claro. Está al lado del banco. ¿Sabe cómo llegar al banco?' },
    { speaker: 'other', text: "No, I don't know where to start. Could you show me on the map?", translation: 'No, no sé por dónde empezar. ¿Me lo podría mostrar en el mapa?' },
    { speaker: 'user', text: 'Of course. Turn it on and I will show you.', translation: 'Claro. Enciéndelo y te muestro.' },
    { speaker: 'other', text: "Thanks! I wonder if it's open on Saturdays.", translation: '¡Gracias! Me pregunto si abre los sábados.' },
    { speaker: 'user', text: "I'm not sure. Let me look it up for you.", translation: 'No estoy seguro. Déjame buscarlo por ti.' },
  ],
  readingText: {
    title: 'A new phone',
    body: "Last week I bought a new phone, but I didn't know how to use it. I asked my brother, \"Can you show me how to turn it on?\" He picked it up and said, \"Do you know where the button is?\" I tried it on my own, but I didn't know what to do next. I wondered whether I should call the shop. In the end my brother helped me set it up, and he told me how to switch it off at night. Now I know where to find every app, and I'm not afraid to try things out.",
    translation:
      'La semana pasada compré un teléfono nuevo, pero no sabía cómo usarlo. Le pregunté a mi hermano: «¿Me puedes mostrar cómo encenderlo?». Lo recogió y dijo: «¿Sabes dónde está el botón?». Lo probé por mi cuenta, pero no sabía qué hacer después. Me pregunté si debía llamar a la tienda. Al final mi hermano me ayudó a configurarlo y me dijo cómo apagarlo por la noche. Ahora sé dónde encontrar cada aplicación y no tengo miedo de probar cosas.',
  },
  tips: [
    "Dentro de otra frase la pregunta pierde la inversión: «Do you know where the bank is?», no «where is the bank».",
    "Tampoco se usa do, does ni did: «I wonder why she left», no «why did she leave».",
    "Con un pronombre el phrasal verb se separa siempre: «Turn it off», nunca «Turn off it».",
    'How to + verbo es una pregunta abreviada: «I don\'t know how to swim», «Show me where to park».',
  ],
  dailyWords: palabras('click', 'search', 'download', 'upload', 'share', 'delete'),
  relacionados: [
    { etiqueta: '📖 Gramática: Estructura de la oración (Sentence Structure)', ruta: '/gramatica/concepto/estructura-de-la-oracion-sentence-structure' },
    { etiqueta: '📖 Gramática: Verbos Frasales (Phrasal Verbs)', ruta: '/gramatica/concepto/verbos-frasales-phrasal-verbs' },
  ],
};

/** Las unidades del bloque 3, por id interno. */
export const UNIDADES_BLOQUE_3: Record<number, Unit> = {
  52: UNIDAD_52,
  53: UNIDAD_53,
  54: UNIDAD_54,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 3 que las tienen. */
export const FORMAS_BLOQUE_3: Record<number, FormasUnidad | FormasUnidad[]> = {
  53: FORMAS_53,
};
