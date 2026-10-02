import { aux, f, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B1_2 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 2 · Vida familiar, comida y organización (ids 49–51: Unidad 4–6 del nivel B1).

// ─── Unidad 4 (id 49) · Patrones verbales; used to y would ───

const UNIDAD_49: Unit = {
  title: 'Verb Patterns, Used To and Would',
  topic: BLOQUE_B1_2,
  level: 'B1',
  explain: [
    teoria(
      '1 · Let y make + objeto + verbo base',
      "Let (permitir) y make (obligar o hacer que) van seguidos de un objeto y del verbo en base, SIN to:\n\n• My parents let me stay out late. (me dejaron)\n• She made me clean my room. (me obligó)\n• The film made us cry. (nos hizo llorar)\n\n⚠️ Ojo: «let me go», no «let me to go»; «made me laugh», no «made me to laugh».",
      [
        ['My parents let me stay out late.', 'Mis padres me dejan quedarme hasta tarde.'],
        ['She made me clean my room.', 'Ella me obligó a limpiar mi cuarto.'],
        ['The film made us cry.', 'La película nos hizo llorar.'],
        ['Let me help you.', 'Déjame ayudarte.'],
      ]
    ),
    teoria(
      '2 · Help y have + objeto + verbo; get + objeto + to',
      "• help + objeto + verbo base (o con to): «She helped me (to) carry the bags».\n• have + objeto + verbo base → pedirle a alguien que haga algo: «I'll have the mechanic check the car».\n• get + objeto + to + verbo → conseguir que alguien haga algo: «I got my brother to help me».\n\nHave y get dicen casi lo mismo, pero get lleva to y suena más informal.",
      [
        ['She helped me carry the bags.', 'Ella me ayudó a cargar las bolsas.'],
        ["I'll have the mechanic check the car.", 'Haré que el mecánico revise el auto.'],
        ['I got my brother to help me.', 'Conseguí que mi hermano me ayudara.'],
        ['Can you help me move this table?', '¿Me ayudas a mover esta mesa?'],
      ]
    ),
    teoria(
      '3 · Want, ask y tell + objeto + to + verbo',
      "📖 Del libro: want, ask, tell, expect, allow, remind y warn van seguidos de un objeto (la persona) y de to + verbo base:\n\n• I want you to come with me.\n• She asked me to wait.\n• He told us to leave.\n• The teacher allowed us to use dictionaries.\n\nLa persona va entre el verbo y el to. No se dice «I want that you come» como en español («quiero que vengas»).",
      [
        ['I want you to come with me.', 'Quiero que vengas conmigo.'],
        ['She asked me to wait.', 'Ella me pidió que esperara.'],
        ['He told us to leave.', 'Él nos dijo que nos fuéramos.'],
        ['The teacher allowed us to use dictionaries.', 'La profesora nos permitió usar diccionarios.'],
      ]
    ),
    teoria(
      '4 · Negativa y comparación de patrones',
      "Para negar con want, ask y tell se pone not antes de to:\n\n• He told me not to be late.\n• She asked us not to make noise.\n• I don't want you to go.\n\nResumen:\n• let / make + objeto + base (sin to)\n• help + objeto + base o to\n• want / ask / tell / get + objeto + to + base",
      [
        ['He told me not to be late.', 'Me dijo que no llegara tarde.'],
        ['She asked us not to make noise.', 'Nos pidió que no hiciéramos ruido.'],
        ["I don't want you to go.", 'No quiero que te vayas.'],
        ['They let us use the pool.', 'Nos dejaron usar la piscina.'],
      ]
    ),
    teoria(
      '5 · Used to: hábitos y estados del pasado',
      "Used to habla de algo que pasaba con frecuencia o era verdad en el pasado y que ya no es así. Va con el verbo en base:\n\n• I used to play tennis every weekend. (hábito; ahora no)\n• She used to live in Lima. (estado; ahora no)\n• We used to have a dog.\n\nSolo existe en pasado. Para el presente se usa el presente simple: «I play tennis now».",
      [
        ['I used to play tennis every weekend.', 'Antes jugaba tenis todos los fines de semana.'],
        ['She used to live in Lima.', 'Ella vivía en Lima.'],
        ['We used to have a dog.', 'Antes teníamos un perro.'],
        ['He used to smoke, but he stopped.', 'Antes fumaba, pero lo dejó.'],
      ]
    ),
    teoria(
      '6 · Used to: negativa y pregunta',
      "Con didn't y did el verbo vuelve a su forma sin -d: use to.\n\n• Negativa: I didn't use to like coffee.\n• Pregunta: Did you use to live here?\n• Respuesta: Yes, I did. · No, I didn't.\n\n⚠️ Ojo: «Did you use to…?», no «Did you used to…?».",
      [
        ["I didn't use to like coffee.", 'Antes no me gustaba el café.'],
        ['Did you use to live here?', '¿Vivías aquí antes?'],
        ["She didn't use to wear glasses.", 'Ella antes no usaba lentes.'],
        ['Did they use to play together?', '¿Antes jugaban juntos?'],
      ]
    ),
    teoria(
      '7 · Would: hábitos del pasado',
      "📖 Del libro: would también puede hablar de hábitos repetidos del pasado, casi siempre en historias de recuerdos:\n\n• When I was a child, we would visit my grandmother every summer.\n• He would always tell us a story before bed.\n\nSe suele empezar con una frase de tiempo (when I was young, every summer) y luego seguir con would. Contracción: I'd, we'd, he'd.",
      [
        ['We would visit my grandmother every summer.', 'Visitábamos a mi abuela todos los veranos.'],
        ['He would always tell us a story before bed.', 'Siempre nos contaba un cuento antes de dormir.'],
        ["On Sundays, we'd walk to the park.", 'Los domingos íbamos caminando al parque.'],
        ["She'd bake cookies every Friday.", 'Ella horneaba galletas todos los viernes.'],
      ]
    ),
    teoria(
      '8 · Used to o would',
      "• Hábitos del pasado: used to y would sirven. «We used to / would visit her every summer».\n• Estados del pasado (be, have, live, know, like): solo used to. «I used to live in Lima», no «I would live in Lima».\n• Para un hecho único, ni uno ni otro: se usa el pasado simple. «I visited Lima in 2019».\n\nUsed to describe cómo era la vida antes; would cuenta recuerdos con frases de tiempo.",
      [
        ['I used to live in Lima.', 'Yo vivía en Lima.'],
        ['I visited Lima in 2019.', 'Visité Lima en 2019.'],
        ['We used to be neighbors.', 'Éramos vecinos.'],
        ['We would play outside all day.', 'Jugábamos afuera todo el día.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('let / make + base', suj('She'), verbo('made'), suj('me'), verbo('clean')),
    fl('want / ask / tell + to', suj('I'), verbo('want'), suj('you'), resto('to'), verbo('come')),
    fl('Used to', suj('I'), aux('used to'), verbo('play')),
    fl('Would (hábito)', suj('We'), aux('would'), verbo('visit')),
  ],
  table: {
    cols: ['Verbo', 'Patrón', 'Ejemplo'],
    rows: [
      ['let', 'objeto + base', 'She let me go.'],
      ['make', 'objeto + base', 'He made me laugh.'],
      ['help', 'objeto + (to) base', 'Help me carry it.'],
      ['have', 'objeto + base', "I'll have him call."],
      ['get', 'objeto + to + base', 'I got him to help.'],
      ['want / ask / tell', 'objeto + to + base', 'I want you to come.'],
    ],
  },
  contrastCard: {
    left: { label: 'Make — sin to', example: 'She made me clean my room.', highlight: 'made me clean' },
    right: { label: 'Ask — con to', example: 'She asked me to clean my room.', highlight: 'asked me to clean' },
    caption: 'Let y make van con el verbo en base. Want, ask, tell y get van con to.',
  },
  quiz: [
    ejercicio(
      'My parents never let me ___ out late.',
      'stay',
      ['to stay', 'staying', 'stayed'],
      'Después de let + objeto va el verbo en base, sin to: «let me stay». Las otras formas no se usan con let.'
    ),
    ejercicio(
      'The film made me ___.',
      'cry',
      ['to cry', 'crying', 'cried'],
      'Después de make + objeto va el verbo en base: «made me cry». No lleva to, -ing ni pasado.'
    ),
    ejercicio(
      'She asked me ___ the window.',
      'to open',
      ['open', 'opening', 'opened'],
      'Después de ask + objeto va to + verbo base: «asked me to open». Las otras formas no completan la estructura.'
    ),
    ejercicio(
      'I ___ play tennis when I was a child, but now I don\'t.',
      'used to',
      ['use to', 'am used to', 'would to'],
      'Un hábito del pasado que ya no existe se expresa con used to + verbo base. use to solo se usa en negativas y preguntas con did, am used to tiene otro significado y would to no existe.'
    ),
    ejercicio(
      'When I was young, I ___ in a small village. (a state, not an action)',
      'used to live',
      ['would live', 'use to live', 'was used to live'],
      'Para un estado del pasado (vivir) se usa used to. would solo sirve para hábitos y acciones repetidas; use to y was used to no forman esta estructura.'
    ),
  ],
  flashcards: [
    tarjeta('Let y make', 'let / make + objeto + verbo base (sin to)\nShe let me go. · He made me laugh.'),
    tarjeta('Want, ask, tell, get', 'verbo + objeto + to + verbo base\nI want you to come. · She asked me to wait.'),
    tarjeta('Have y help', "have + objeto + base: I'll have him call.\nhelp + objeto + base o to: help me (to) carry it."),
    tarjeta('Used to', 'Hábitos y estados del pasado que ya no son así.\nI used to play tennis. · Did you use to live here?'),
    tarjeta('Would para hábitos', 'Solo hábitos repetidos, no estados.\nWe would visit her every summer.\nEstados: used to (I used to live in Lima).'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What was your childhood like?', translation: '¿Cómo fue tu infancia?' },
    { speaker: 'user', text: 'I used to live in a small village. We would play outside all day.', translation: 'Yo vivía en un pueblo pequeño. Jugábamos afuera todo el día.' },
    { speaker: 'other', text: 'Did your parents let you stay out late?', translation: '¿Tus padres te dejaban quedarte hasta tarde?' },
    { speaker: 'user', text: 'No, my mom always told me to come home before dark.', translation: 'No, mi mamá siempre me decía que volviera antes de que oscureciera.' },
    { speaker: 'other', text: 'Mine made me do my homework first. I got my sister to help me!', translation: 'La mía me hacía hacer primero mi tarea. ¡Conseguía que mi hermana me ayudara!' },
    { speaker: 'user', text: "That's funny. I didn't use to like homework either.", translation: 'Qué gracioso. A mí tampoco me gustaba la tarea antes.' },
  ],
  readingText: {
    title: 'Summers at my grandmother\'s house',
    body: "When I was a child, we used to spend every summer at my grandmother's house in the countryside. She would wake us up early, and we would help her feed the chickens. My grandmother never let us watch TV in the morning. She wanted us to play outside, and she always told us to be careful near the river. In the evenings she would make us help her cook, and then she would tell us stories. We didn't use to like waking up early, but now I miss those mornings.",
    translation:
      'Cuando era niño, pasábamos todos los veranos en la casa de mi abuela en el campo. Ella nos despertaba temprano y la ayudábamos a darles de comer a las gallinas. Mi abuela nunca nos dejaba ver televisión por la mañana. Quería que jugáramos afuera y siempre nos decía que tuviéramos cuidado cerca del río. Por las tardes nos hacía ayudarla a cocinar y luego nos contaba historias. Antes no nos gustaba levantarnos temprano, pero ahora extraño esas mañanas.',
  },
  tips: [
    "Después de let y make el verbo va en base, sin to: «let me go», «made me laugh».",
    "Después de want, ask y tell la persona va primero y luego to: «I want you to come», no «I want that you come».",
    "En negativas y preguntas se escribe use to (sin -d): «Did you use to live here?».",
    "Would sirve para hábitos, no para estados: «We would play outside» sí; «I would live in Lima» no (usa used to).",
  ],
  dailyWords: palabras('habit', 'memory', 'grandmother', 'grandfather', 'village', 'countryside'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Infinitivo (Infinitive)', ruta: '/gramatica/concepto/el-infinitivo-infinitive' },
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
  ],
};

const FORMAS_49: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('used to'), verbo('base verb'))],
    ejemplos: [
      ['I used to play tennis.', 'Antes jugaba tenis.'],
      ['She used to live in Lima.', 'Ella vivía en Lima.'],
      ['We used to have a dog.', 'Antes teníamos un perro.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("didn't"), resto('use to'), verbo('base verb'))],
    ejemplos: [
      ["I didn't use to like coffee.", 'Antes no me gustaba el café.'],
      ["She didn't use to wear glasses.", 'Ella antes no usaba lentes.'],
      ["We didn't use to have a car.", 'Antes no teníamos auto.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Did'), suj('subject'), resto('use to'), verbo('base verb'))],
    ejemplos: [
      ['Did you use to live here?', '¿Vivías aquí antes?'],
      ['Did she use to play the piano?', '¿Ella tocaba el piano antes?'],
      ['Where did you use to go?', '¿Adónde ibas antes?'],
    ],
  },
  nota: "Solo existe en pasado. Respuestas cortas: Yes, I did. / No, I didn't. Para hábitos repetidos también se puede usar would, pero no para estados.",
  ojo: "En la negativa y la pregunta se escribe use to (sin -d): «Did you use to…?», no «Did you used to…?».",
};

// ─── Unidad 5 (id 50) · Contables e incontables, cuantificadores, too y enough ───

const UNIDAD_50: Unit = {
  title: 'Countable and Uncountable Nouns, Quantifiers, Too and Enough',
  topic: BLOQUE_B1_2,
  level: 'B1',
  explain: [
    teoria(
      '1 · Repaso: contables e incontables',
      "• Contables: se pueden contar. Tienen singular y plural: one apple · two apples · a book · three books.\n• Incontables: no se cuentan, no tienen plural y no llevan a / an: water · rice · money · music · time.\n\nLos incontables usan el verbo en singular: «The water is cold», no «The water are cold».\n\nSe preguntan con How much (incontables) y How many (contables).",
      [
        ['I have two brothers and three cousins.', 'Tengo dos hermanos y tres primos.'],
        ['The water is cold.', 'El agua está fría.'],
        ['How many apples do you want?', '¿Cuántas manzanas quieres?'],
        ['How much rice do we need?', '¿Cuánto arroz necesitamos?'],
      ]
    ),
    teoria(
      '2 · Incontables que en español parecen contables',
      "📖 Del libro: estas palabras son incontables en inglés, aunque en español sean contables:\n\n• advice (consejos) · information (información) · news (noticias)\n• furniture (muebles) · luggage (equipaje) · homework (tareas)\n• traffic (tráfico) · weather (clima) · progress (progreso)\n\nNo llevan a ni -s: «a piece of advice», no «an advice»; «some information», no «informations». News siempre va en singular: «The news is good».",
      [
        ['I need some advice.', 'Necesito algunos consejos.'],
        ['The news is good.', 'Las noticias son buenas.'],
        ['We bought new furniture.', 'Compramos muebles nuevos.'],
        ['How much luggage do you have?', '¿Cuánto equipaje tienes?'],
      ]
    ),
    teoria(
      '3 · Cómo contar los incontables',
      "Para contar un incontable se usa una unidad: a ___ of:\n\n• a glass of water · a cup of coffee · a bottle of milk\n• a slice of bread · a loaf of bread · a piece of cake\n• a piece of advice · a piece of information · a piece of news\n• a bar of chocolate · a bowl of rice\n\nAsí se puede hablar de uno o de varios: two glasses of water.",
      [
        ['Can I have a glass of water?', '¿Puedo tomar un vaso de agua?'],
        ['She gave me a piece of advice.', 'Ella me dio un consejo.'],
        ['I bought two loaves of bread.', 'Compré dos panes.'],
        ['He ate a slice of cake.', 'Él comió una porción de pastel.'],
      ]
    ),
    teoria(
      '4 · A little y a few: algo, un poco',
      "A little y a few significan «un poco, algo» y son positivos (hay lo suficiente):\n\n• a little + incontable: a little money · a little time · a little sugar\n• a few + contable plural: a few friends · a few apples · a few minutes\n\n• I have a little money. Let's go out.\n• She has a few friends here. She isn't alone.",
      [
        ['I have a little money. Let\'s go out.', 'Tengo algo de dinero. Salgamos.'],
        ['She has a few friends here.', 'Ella tiene algunos amigos aquí.'],
        ['Would you like a little sugar?', '¿Quieres un poco de azúcar?'],
        ['I need a few minutes.', 'Necesito unos minutos.'],
      ]
    ),
    teoria(
      '5 · Very little y very few: casi nada, casi ninguno',
      "Little y few sin a (o con very) significan «casi nada» y «casi ninguno» y son negativos (no alcanza):\n\n• very little + incontable: very little time · very little money\n• very few + contable plural: very few people · very few friends\n\n• I have very little time. (no tengo tiempo)\n• Very few people came. (casi nadie)\n\nCompara: a few friends (tiene amigos) / very few friends (casi no tiene).",
      [
        ['I have very little time.', 'Tengo muy poco tiempo.'],
        ['Very few people came to the party.', 'Muy poca gente vino a la fiesta.'],
        ['There is very little milk left.', 'Queda muy poca leche.'],
        ['She has very few friends here.', 'Ella tiene muy pocos amigos aquí.'],
      ]
    ),
    teoria(
      '6 · A lot of, much y many',
      "📖 Del libro: para hablar de cantidades grandes:\n\n• a lot of / lots of → contables e incontables, en afirmativas: «a lot of people» · «a lot of money».\n• many → contables, en preguntas y negativas: «Are there many shops?» · «I don't have many books».\n• much → incontables, en preguntas y negativas: «How much money?» · «I don't have much time».\n\nEn afirmativas, much y many suenan formales: se prefiere a lot of.",
      [
        ['There are a lot of people here.', 'Hay mucha gente aquí.'],
        ["I don't have many books.", 'No tengo muchos libros.'],
        ["We don't have much time.", 'No tenemos mucho tiempo.'],
        ['How many students are there?', '¿Cuántos estudiantes hay?'],
      ]
    ),
    teoria(
      '7 · Too, too much y too many: demasiado',
      "Too significa «demasiado»: más de lo necesario o de lo bueno.\n\n• too + adjetivo / adverbio: too hot · too fast\n• too much + incontable: too much sugar · too much noise\n• too many + contable plural: too many people · too many cars\n\n⚠️ Ojo: too no es lo mismo que very: «It's very hot» (mucho) · «It's too hot» (demasiado, es un problema).",
      [
        ["It's too hot to go out.", 'Hace demasiado calor para salir.'],
        ['There is too much sugar in this coffee.', 'Hay demasiada azúcar en este café.'],
        ['There are too many people here.', 'Hay demasiada gente aquí.'],
        ['She speaks too fast for me.', 'Ella habla demasiado rápido para mí.'],
      ]
    ),
    teoria(
      '8 · Enough: suficiente',
      "📖 Del libro: enough significa «suficiente».\n\n• enough + sustantivo: enough money · enough chairs\n• adjetivo / adverbio + enough: tall enough · fast enough\n• enough + to + verbo: She is old enough to drive.\n\nNegativa: not enough → «We don't have enough time» · «It isn't warm enough». Va ANTES del sustantivo, pero DESPUÉS del adjetivo.",
      [
        ["We don't have enough time.", 'No tenemos suficiente tiempo.'],
        ['She is old enough to drive.', 'Ella tiene edad suficiente para manejar.'],
        ["It isn't warm enough to swim.", 'No hace suficiente calor para nadar.'],
        ['Do you have enough chairs?', '¿Tienen suficientes sillas?'],
      ]
    ),
    teoria(
      '9 · Too o enough',
      "Muchas veces se puede decir lo mismo con too o con enough:\n\n• It's too cold. = It isn't warm enough.\n• He is too young to drive. = He isn't old enough to drive.\n• The bag is too heavy. = The bag isn't light enough.\n\nToo se usa con la cualidad que sobra; enough con la que falta. Con too el verbo siguiente lleva to: «too tired to work».",
      [
        ["It's too cold to swim.", 'Hace demasiado frío para nadar.'],
        ["It isn't warm enough to swim.", 'No hace suficiente calor para nadar.'],
        ['He is too young to drive.', 'Él es demasiado joven para manejar.'],
        ["He isn't old enough to drive.", 'Él no tiene edad suficiente para manejar.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('a little + incontable', aux('a little'), verbo('sugar')),
    fl('a few + contable', aux('a few'), verbo('friends')),
    fl('too much / too many', aux('too much'), verbo('sugar'), resto('/'), aux('too many'), verbo('cars')),
    fl('Enough', resto('adjective'), aux('enough'), resto('to'), verbo('verb')),
  ],
  table: {
    cols: ['Cantidad', 'Contables', 'Incontables'],
    rows: [
      ['algo (suficiente)', 'a few friends', 'a little money'],
      ['casi nada', 'very few friends', 'very little money'],
      ['demasiado', 'too many people', 'too much noise'],
      ['mucho', 'many / a lot of', 'much / a lot of'],
      ['suficiente', 'enough chairs', 'enough time'],
      ['pregunta', 'How many?', 'How much?'],
    ],
  },
  contrastCard: {
    left: { label: 'A few — positivo', example: 'I have a few friends here.', highlight: 'a few' },
    right: { label: 'Very few — casi ninguno', example: 'I have very few friends here.', highlight: 'very few' },
    caption: 'Con a (a few, a little) hay algo. Sin a (few, little) o con very, hay casi nada.',
  },
  quiz: [
    ejercicio(
      'I need some ___ about the trip.',
      'information',
      ['informations', 'an information', 'a informations'],
      'information es incontable: no lleva plural ni a / an. «some information» es la forma correcta.'
    ),
    ejercicio(
      'I have ___ friends here, so I feel lonely. (almost none)',
      'very few',
      ['a few', 'a little', 'very little'],
      '«Casi ningún amigo» se dice very few (friends es contable plural). a few sería «algunos» y very little y a little son para incontables.'
    ),
    ejercicio(
      'Would you like ___ sugar in your tea? (a small amount)',
      'a little',
      ['a few', 'very few', 'too many'],
      'sugar es incontable, así que se usa a little. a few y very few son para contables y too many significa «demasiados».'
    ),
    ejercicio(
      "There are ___ people in the room. We can't move.",
      'too many',
      ['too much', 'enough', 'very much'],
      'people es contable y la situación es un problema (demasiados), así que se usa too many. too much es para incontables y very much no se usa con people.'
    ),
    ejercicio(
      "She isn't tall ___ to reach the shelf.",
      'enough',
      ['too', 'very', 'much'],
      'Con un adjetivo, enough va después del adjetivo: «tall enough». too, very y much no forman esta estructura negativa.'
    ),
  ],
  flashcards: [
    tarjeta('Incontables engañosos', 'advice · information · news · furniture · luggage · homework\nSin plural y sin a / an: «a piece of advice».'),
    tarjeta('A little y a few', 'a little + incontable · a few + contable plural\nPositivos: hay algo.'),
    tarjeta('Very little y very few', 'Casi nada / casi ninguno (negativos).\nvery little time · very few people'),
    tarjeta('Too, too much, too many', 'too + adjetivo · too much + incontable · too many + contable\nDemasiado: es un problema.'),
    tarjeta('Enough', 'enough + sustantivo (enough money)\nadjetivo + enough (tall enough)\nVa antes del sustantivo y después del adjetivo.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Do we have enough food for the party?", translation: '¿Tenemos suficiente comida para la fiesta?' },
    { speaker: 'user', text: "I think so. We have a lot of rice, but there is very little chicken.", translation: 'Creo que sí. Tenemos mucho arroz, pero hay muy poco pollo.' },
    { speaker: 'other', text: 'And drinks? I only bought a few bottles.', translation: '¿Y las bebidas? Yo solo compré unas pocas botellas.' },
    { speaker: 'user', text: "That's not enough. There will be too many people for a few bottles!", translation: 'Eso no es suficiente. ¡Habrá demasiada gente para unas pocas botellas!' },
    { speaker: 'other', text: "OK, I'll buy some more. How much juice do we need?", translation: 'Bien, compraré más. ¿Cuánto jugo necesitamos?' },
    { speaker: 'user', text: 'A few liters, and a little ice. Not too much!', translation: 'Unos litros y un poco de hielo. ¡No demasiado!' },
  ],
  readingText: {
    title: 'A big dinner',
    body: "On Sunday my family invited too many people for dinner, and we didn't have enough chairs. My mother cooked a lot of food, but there was very little salad because I forgot to buy lettuce. My uncle brought a few bottles of juice, and my cousin brought a loaf of bread. It was too noisy to talk, but everybody was happy. My grandmother gave me a piece of advice: \"Cook a little less next time, and invite a few friends, not the whole street!\" We laughed, because she was right.",
    translation:
      'El domingo mi familia invitó a demasiada gente a cenar y no teníamos suficientes sillas. Mi madre cocinó mucha comida, pero había muy poca ensalada porque olvidé comprar lechuga. Mi tío trajo unas botellas de jugo y mi primo trajo un pan. Había demasiado ruido para hablar, pero todos estaban felices. Mi abuela me dio un consejo: «La próxima vez cocina un poco menos e invita a unos pocos amigos, ¡no a toda la calle!». Nos reímos, porque tenía razón.',
  },
  tips: [
    "Advice, information, news y furniture son incontables: «some information», no «informations»; «The news is good».",
    "A little y a few son positivos (hay algo). Very little y very few son casi negativos (casi no hay).",
    'Too significa demasiado (un problema); very significa mucho (sin problema): «too hot» vs «very hot».',
    'Con un adjetivo, enough va después: «tall enough». Con un sustantivo, va antes: «enough time».',
  ],
  dailyWords: palabras('water', 'milk', 'sugar', 'bread', 'rice', 'money'),
  relacionados: [
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
    { etiqueta: '📖 Gramática: El Sustantivo (Noun)', ruta: '/gramatica/concepto/el-sustantivo-noun' },
  ],
};

// ─── Unidad 6 (id 51) · Futuro, consejos y obligación, would rather ───

const UNIDAD_51: Unit = {
  title: 'Talking About the Future, Advice, Obligation and Would Rather',
  topic: BLOQUE_B1_2,
  level: 'B1',
  explain: [
    teoria(
      '1 · Las formas del futuro: repaso',
      "En inglés hay varias formas de hablar del futuro. Cada una tiene su uso:\n\n• will → decisión del momento, promesa, predicción: «I'll call you».\n• be going to → plan o predicción con evidencia: «I'm going to study».\n• presente continuo → arreglo ya organizado: «I'm meeting Ana at 5».\n• presente simple → horarios fijos: «The train leaves at 8».",
      [
        ["I'll call you later.", 'Te llamo más tarde.'],
        ["I'm going to study tonight.", 'Voy a estudiar esta noche.'],
        ["I'm meeting Ana at five.", 'Me encuentro con Ana a las cinco.'],
        ['The train leaves at eight.', 'El tren sale a las ocho.'],
      ]
    ),
    teoria(
      '2 · Presente simple para horarios',
      "📖 Del libro: el presente simple se usa para el futuro cuando hay un horario o calendario fijo: transportes, tiendas, clases, eventos.\n\n• The train leaves at 8:15 tomorrow.\n• The shop opens at nine.\n• The film starts at 7 pm.\n• My class begins next Monday.\n\nNo sirve para planes personales: «I'm going to the cinema» (no «I go to the cinema tomorrow» como plan).",
      [
        ['The train leaves at 8:15 tomorrow.', 'El tren sale mañana a las 8:15.'],
        ['The shop opens at nine.', 'La tienda abre a las nueve.'],
        ['The film starts at seven.', 'La película empieza a las siete.'],
        ['My class begins next Monday.', 'Mi clase empieza el próximo lunes.'],
      ]
    ),
    teoria(
      '3 · Will o going to',
      "📖 Del libro: se puede usar cualquiera para predicciones, pero:\n\n• Will: decisión que tomas al hablar o una promesa: «I'll help you» · «I'll take this one».\n• Going to: ya lo habías decidido, o hay evidencia: «I'm going to buy a car» · «Look at that sky: it's going to rain».\n• Will también para predicciones sin evidencia, con I think / probably: «I think it will rain tomorrow».",
      [
        ["I'll help you with that.", 'Te ayudo con eso.'],
        ["I'm going to buy a car.", 'Voy a comprar un auto.'],
        ["Look at that sky. It's going to rain.", 'Mira ese cielo. Va a llover.'],
        ["I think it will rain tomorrow.", 'Creo que lloverá mañana.'],
      ]
    ),
    teoria(
      "4 · Had better: es mejor que…",
      "📖 Del libro: had better da un consejo fuerte: si no se hace, habrá un problema. Siempre va con verbo en base y se contrae: I'd better, you'd better.\n\n• You'd better take an umbrella. (si no, te mojas)\n• I'd better go. It's late.\n• You'd better not be late. (negativa: had better not)\n\nSuena a advertencia. Aunque dice «had», habla del presente o del futuro.",
      [
        ["You'd better take an umbrella.", 'Más te vale llevar un paraguas.'],
        ["I'd better go. It's late.", 'Mejor me voy. Es tarde.'],
        ["You'd better not be late.", 'Más te vale no llegar tarde.'],
        ["We'd better hurry.", 'Mejor nos apuramos.'],
      ]
    ),
    teoria(
      '5 · Should y ought to',
      "📖 Del libro: should y ought to significan «deberías» y dan una opinión o un consejo. Son más suaves que had better:\n\n• You should see a doctor.\n• You ought to see a doctor. (igual, más formal)\n• You shouldn't eat so much.\n• You ought not to eat so much.\n\n⚠️ Ojo: ought va con to: «ought to go», no «ought go». Should va sin to.",
      [
        ['You should see a doctor.', 'Deberías ver a un doctor.'],
        ['You ought to see a doctor.', 'Deberías ver a un doctor.'],
        ["You shouldn't eat so much.", 'No deberías comer tanto.'],
        ['You ought not to eat so much.', 'No deberías comer tanto.'],
      ]
    ),
    teoria(
      '6 · Might want to: una sugerencia suave',
      "Might want to es una forma muy educada y suave de aconsejar, muy común al hablar:\n\n• You might want to check the schedule.\n• You might want to bring a jacket.\n• You might not want to eat that.\n\nEs más suave que should y mucho más suave que had better. Se usa para sugerir sin imponer.",
      [
        ['You might want to check the schedule.', 'Quizás quieras revisar el horario.'],
        ['You might want to bring a jacket.', 'Quizás quieras llevar una chaqueta.'],
        ["You might not want to eat that.", 'Quizás no quieras comer eso.'],
        ['You might want to call first.', 'Quizás quieras llamar antes.'],
      ]
    ),
    teoria(
      '7 · Have to y going to have to',
      "Have to expresa obligación (algo que debes hacer por una regla o necesidad):\n\n• I have to work on Saturday.\n• She has to wake up early.\n• I don't have to go. (no es necesario)\n• Do you have to leave now?\n\nPara el futuro: will have to o going to have to → «I'll have to work late» · «I'm going to have to call him».",
      [
        ['I have to work on Saturday.', 'Tengo que trabajar el sábado.'],
        ["I don't have to go.", 'No tengo que ir.'],
        ["I'll have to work late tomorrow.", 'Tendré que trabajar hasta tarde mañana.'],
        ["I'm going to have to call him.", 'Voy a tener que llamarlo.'],
      ]
    ),
    teoria(
      '8 · Would rather: prefiero',
      "📖 Del libro: would rather expresa una preferencia en una situación concreta. Va con verbo en base:\n\n• I'd rather stay home tonight.\n• She'd rather have tea than coffee.\n• I'd rather not go. (negativa)\n• Would you rather eat out or cook?\n\nCon than se compara: «I'd rather walk than take a taxi». Es distinto de prefer: «I prefer walking» (en general).",
      [
        ["I'd rather stay home tonight.", 'Prefiero quedarme en casa esta noche.'],
        ["She'd rather have tea than coffee.", 'Ella prefiere té antes que café.'],
        ["I'd rather not go.", 'Prefiero no ir.'],
        ['Would you rather eat out or cook?', '¿Prefieres salir a comer o cocinar?'],
      ]
    ),
    teoria(
      '9 · Del consejo a la obligación: la escala',
      "De más suave a más fuerte:\n\n• might want to → sugerencia suave\n• should / ought to → consejo\n• had better → consejo fuerte con consecuencia\n• have to → obligación por regla o necesidad\n\nPara decir que algo NO es necesario: don't have to. Para prohibirlo: mustn't.",
      [
        ['You might want to leave early.', 'Quizás quieras salir temprano.'],
        ['You should leave early.', 'Deberías salir temprano.'],
        ["You'd better leave early.", 'Más te vale salir temprano.'],
        ['You have to leave early.', 'Tienes que salir temprano.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Horario (presente simple)', resto('The train'), verbo('leaves'), resto('at 8')),
    fl('Had better', suj('You'), aux("'d better"), verbo('go')),
    fl('Ought to', suj('You'), aux('ought to'), verbo('go')),
    fl('Would rather', suj('I'), aux("'d rather"), verbo('stay')),
  ],
  table: {
    cols: ['Fuerza', 'Expresión', 'Ejemplo'],
    rows: [
      ['suave', 'might want to', 'You might want to call.'],
      ['consejo', 'should / ought to', 'You should rest.'],
      ['fuerte', 'had better', "You'd better hurry."],
      ['obligación', 'have to', 'I have to work.'],
      ['preferencia', 'would rather', "I'd rather stay."],
    ],
  },
  contrastCard: {
    left: { label: 'Should — consejo', example: 'You should take an umbrella.', highlight: 'should' },
    right: { label: "Had better — advertencia", example: "You'd better take an umbrella.", highlight: "'d better" },
    caption: 'Should aconseja. Had better avisa de que, si no se hace, habrá una consecuencia.',
  },
  quiz: [
    ejercicio(
      'The train ___ at 8:15 tomorrow.',
      'leaves',
      ['leave', 'leaving', 'will leaving'],
      'Un horario fijo de transporte va en presente simple: «leaves» (con it / the train). leave no lleva -s, y leaving y will leaving no forman la frase.'
    ),
    ejercicio(
      "It's going to rain. You ___ take an umbrella.",
      'had better',
      ['had better to', 'better have', 'would better'],
      'Had better va seguido del verbo base, sin to: «You had better take». had better to, better have y would better no son formas correctas.'
    ),
    ejercicio(
      "I'd rather ___ at home tonight.",
      'stay',
      ['to stay', 'staying', 'stayed'],
      'Después de would rather va el verbo en base, sin to: «I\'d rather stay». Las otras formas no se usan con would rather.'
    ),
    ejercicio(
      'You ought ___ see a doctor.',
      'to',
      ['for', 'that', 'of'],
      'Ought va siempre con to: «ought to see». for, that y of no se usan después de ought.'
    ),
    ejercicio(
      "I'm going to ___ work late tomorrow. I have a deadline.",
      'have to',
      ['having to', 'has to', 'had to'],
      'Después de going to va el verbo en base: «going to have to work». having to, has to y had to no concuerdan con esa estructura.'
    ),
  ],
  flashcards: [
    tarjeta('Presente simple para el futuro', 'Horarios fijos: The train leaves at 8. · The shop opens at 9.'),
    tarjeta('Will o going to', 'will: decisión del momento, promesa.\ngoing to: plan o evidencia.'),
    tarjeta('Had better y ought to', "You'd better hurry. (advertencia)\nYou ought to rest. (consejo; ought lleva to)"),
    tarjeta('Might want to', 'Sugerencia muy suave:\nYou might want to check the schedule.'),
    tarjeta('Would rather', "I'd rather stay home. · I'd rather not go.\nwould rather + base, sin to."),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'The train leaves at 8:15 tomorrow. Are you ready?', translation: 'El tren sale mañana a las 8:15. ¿Estás listo?' },
    { speaker: 'user', text: "Almost. I'm going to pack tonight, and I'll have to wake up at six.", translation: 'Casi. Voy a hacer la maleta esta noche y tendré que despertarme a las seis.' },
    { speaker: 'other', text: "You'd better set two alarms. And you might want to check the weather.", translation: 'Más te vale poner dos alarmas. Y quizás quieras revisar el clima.' },
    { speaker: 'user', text: "Good idea. I think it'll be cold. I'd rather take a warm jacket.", translation: 'Buena idea. Creo que hará frío. Prefiero llevar una chaqueta abrigada.' },
    { speaker: 'other', text: 'You ought to take an umbrella too. It might rain.', translation: 'Deberías llevar también un paraguas. Podría llover.' },
    { speaker: 'user', text: "OK, I'll do that. Thanks for the advice!", translation: 'Está bien, lo haré. ¡Gracias por el consejo!' },
  ],
  readingText: {
    title: 'A busy week',
    body: "Next week is going to be very busy. On Monday the new project starts, and I have a meeting at nine. On Wednesday I'm having lunch with my boss, and on Friday I have to give a presentation. My flight leaves on Saturday morning at six, so I'll have to pack on Friday night. I'd rather stay home on Sunday, but my sister is coming to visit. My friend says I'd better rest this weekend, and I think she is right. I might want to ask for a day off next month.",
    translation:
      'La próxima semana va a ser muy ocupada. El lunes empieza el nuevo proyecto y tengo una reunión a las nueve. El miércoles almuerzo con mi jefe y el viernes tengo que dar una presentación. Mi vuelo sale el sábado por la mañana a las seis, así que tendré que hacer la maleta el viernes por la noche. Preferiría quedarme en casa el domingo, pero mi hermana viene de visita. Mi amiga dice que más me vale descansar este fin de semana y creo que tiene razón. Quizás quiera pedir un día libre el próximo mes.',
  },
  tips: [
    "Los horarios fijos van en presente simple: «The train leaves at 8», no «The train will leave at 8» como horario.",
    "Had better lleva el verbo en base y se contrae: «You'd better go». La negativa es had better not.",
    'Ought va con to: «ought to go». Should va sin to: «should go».',
    "Would rather lleva el verbo en base: «I'd rather stay», no «I'd rather to stay».",
  ],
  dailyWords: palabras('timetable', 'departure', 'arrival', 'flight', 'delay', 'reservation'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Futuro en inglés', ruta: '/gramatica/concepto/el-futuro-en-ingles' },
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
  ],
};

/** Las unidades del bloque 2, por id interno. */
export const UNIDADES_BLOQUE_2: Record<number, Unit> = {
  49: UNIDAD_49,
  50: UNIDAD_50,
  51: UNIDAD_51,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 2 que las tienen. */
export const FORMAS_BLOQUE_2: Record<number, FormasUnidad | FormasUnidad[]> = {
  49: FORMAS_49,
};
