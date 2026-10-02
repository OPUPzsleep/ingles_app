import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_4 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from './ayuda';

// Bloque 4 · Pasado simple, contables e incontables (unidades 10–12).

// ─── Unidad 10 · Pasado simple y pasado de to be ───

const UNIDAD_10: Unit = {
  title: 'Past Simple and Past of Be',
  topic: BLOQUE_4,
  level: 'A1',
  explain: [
    teoria(
      '1 · Pasado simple: ¿cuándo se usa?',
      'El pasado simple habla de acciones terminadas en el pasado: algo que pasó y ya terminó.\n\n• I worked yesterday. (Ayer trabajé.)\n• She visited her aunt last week.\n• We went to the beach in July.\n\nSe reconoce por palabras como yesterday, last night, last week, two days ago, in 2020.\n\nUna sola forma sirve para todas las personas: no hay -s.',
      [
        ['I worked yesterday.', 'Ayer trabajé.'],
        ['She visited her aunt last week.', 'Ella visitó a su tía la semana pasada.'],
        ['We went to the beach in July.', 'Fuimos a la playa en julio.'],
        ['They watched a film two days ago.', 'Vieron una película hace dos días.'],
      ]
    ),
    teoria(
      '2 · Verbos regulares: + ed',
      'Los verbos regulares forman el pasado agregando -ed:\n\n• casi todos: + ed → work → worked · play → played\n• terminan en e: + d → like → liked · live → lived\n• consonante + y: -ied → study → studied\n• una vocal + una consonante: se dobla → stop → stopped\n\nUna sola forma para todos: I worked · he worked · they worked.',
      [
        ['I played soccer on Saturday.', 'Jugué fútbol el sábado.'],
        ['She liked the film.', 'A ella le gustó la película.'],
        ['He studied for the exam.', 'Él estudió para el examen.'],
        ['We stopped at the shop.', 'Nos detuvimos en la tienda.'],
        ['They lived in Peru in 2020.', 'Vivieron en Perú en 2020.'],
      ]
    ),
    teoria(
      '3 · Verbos irregulares',
      'Los verbos irregulares cambian de forma y hay que memorizarlos. Los más usados:\n\n• go → went · see → saw · have → had\n• eat → ate · buy → bought · come → came\n• get → got · make → made · take → took\n• write → wrote · drink → drank · give → gave\n\nSon verbos muy frecuentes, así que se aprenden con el uso.',
      [
        ['I went to school yesterday.', 'Ayer fui a la escuela.'],
        ['She ate pizza for lunch.', 'Ella comió pizza en el almuerzo.'],
        ['We saw a good film.', 'Vimos una buena película.'],
        ['He bought a new phone.', 'Él compró un teléfono nuevo.'],
        ['They had a party last night.', 'Tuvieron una fiesta anoche.'],
      ]
    ),
    teoria(
      "4 · Negativa: didn't + verbo",
      "Para negar se usa didn't (did not) + el verbo en forma base, sin -ed ni forma irregular:\n\n• I didn't work yesterday.\n• She didn't go to school.\n• They didn't see the film.\n\ndid ya marca el pasado, por eso el verbo vuelve a su forma base.\n\n⚠️ Ojo: «She didn't went» está mal; se dice «She didn't go».",
      [
        ["I didn't work yesterday.", 'Ayer no trabajé.'],
        ["She didn't go to school.", 'Ella no fue a la escuela.'],
        ["They didn't see the film.", 'Ellos no vieron la película.'],
        ["We didn't eat breakfast.", 'No desayunamos.'],
      ]
    ),
    teoria(
      '5 · Preguntas de Sí / No: Did',
      "Para preguntar se pone Did al inicio, luego el sujeto y el verbo en forma base:\n\n• Did you work yesterday?\n• Did she go to school?\n• Did they see the film?\n\nSe responde con did / didn't: Yes, I did. · No, she didn't.\n\n⚠️ Ojo: «Did you went?» está mal; se dice «Did you go?».",
      [
        ['Did you work yesterday?', '¿Trabajaste ayer?'],
        ['Did she go to school?', '¿Ella fue a la escuela?'],
        ['Did you eat breakfast? Yes, I did.', '¿Desayunaste? Sí.'],
        ["Did they see the film? No, they didn't.", '¿Vieron la película? No.'],
      ]
    ),
    teoria(
      '6 · Preguntas de información con did',
      'La palabra interrogativa va al inicio y después Did + sujeto + verbo en base:\n\n• What did you do yesterday?\n• Where did she go?\n• When did they arrive?\n• Why did you leave?\n\nSe responde con el pasado: I played soccer. · She went home.',
      [
        ['What did you do yesterday?', '¿Qué hiciste ayer?'],
        ['Where did she go?', '¿Adónde fue ella?'],
        ['When did they arrive?', '¿Cuándo llegaron?'],
        ['What did you eat for dinner?', '¿Qué comiste en la cena?'],
      ]
    ),
    teoria(
      '7 · Pasado de to be: was / were',
      "El pasado de to be tiene dos formas: was y were. No usa did: es su propio auxiliar.\n\n• I / he / she / it → was\n• you / we / they → were\n• Negativa: wasn't (was not) · weren't (were not)\n• Pregunta: Was he…? · Were you…?\n• Respuestas: Yes, I was. · No, they weren't.",
      [
        ['I was tired yesterday.', 'Ayer estaba cansado.'],
        ['They were at home last night.', 'Ellos estaban en casa anoche.'],
        ["She wasn't at school.", 'Ella no estaba en la escuela.'],
        ['Were you at the party? Yes, I was.', '¿Estabas en la fiesta? Sí.'],
      ]
    ),
    teoria(
      '8 · Preguntas de información con was / were',
      'Palabra interrogativa + was / were + sujeto:\n\n• Where were you yesterday?\n• How was your day?\n• Why were they late?\n• Who was at the door?\n\n⚠️ Ojo: sin did: «Where did you were?» está mal.',
      [
        ['Where were you yesterday?', '¿Dónde estabas ayer?'],
        ['How was your day?', '¿Cómo estuvo tu día?'],
        ['Why were they late?', '¿Por qué llegaron tarde?'],
        ['Who was at the door?', '¿Quién estaba en la puerta?'],
      ]
    ),
  ],
  table: {
    cols: ['Verbo', 'Pasado', 'Significa'],
    rows: [
      ['go', 'went', 'ir'],
      ['see', 'saw', 'ver'],
      ['have', 'had', 'tener'],
      ['eat', 'ate', 'comer'],
      ['buy', 'bought', 'comprar'],
      ['come', 'came', 'venir'],
      ['get', 'got', 'conseguir'],
      ['make', 'made', 'hacer'],
      ['take', 'took', 'tomar'],
      ['write', 'wrote', 'escribir'],
      ['drink', 'drank', 'beber'],
      ['give', 'gave', 'dar'],
    ],
  },
  contrastCard: {
    left: { label: 'Regular — + ed', example: 'I worked late last night.', highlight: 'worked' },
    right: { label: 'Irregular — cambia', example: 'I went to bed late.', highlight: 'went' },
    caption: 'Los regulares agregan -ed; los irregulares cambian de forma y hay que memorizarlos.',
  },
  quiz: [
    ejercicio('I ___ soccer yesterday. (play)', 'played', ['plaied', 'playd', 'plays'], 'play es regular y termina en vocal + y: solo se agrega -ed → played. El pasado de los regulares es -ed (no cambia la y).'),
    ejercicio('She ___ to school by bus last week. (go)', 'went', ['goed', 'gone', 'goes'], 'go es irregular: go → went. «Goed» no existe y gone se usa con have, no solo.'),
    ejercicio('We ___ the film. (No vimos la película.)', "didn't see", ["didn't saw", "don't saw", 'not saw'], "La negativa del pasado es didn't + verbo en forma base: «We didn't see the film». Después de didn't no se usa el pasado (saw)."),
    ejercicio('___ you eat breakfast? — Yes, I did.', 'Did', ['Do', 'Were', 'Are'], 'La respuesta corta «Yes, I did» responde a una pregunta con Did: «Did you eat breakfast?». Do es del presente.'),
    ejercicio('They ___ at home last night.', 'were', ['was', 'did', 'are'], 'El pasado de to be con they es were: «They were at home last night». was es para I / he / she / it.'),
  ],
  flashcards: [
    tarjeta('¿Cuándo uso el pasado simple?', 'Acciones terminadas en el pasado:\nI worked yesterday. · We went to the beach last week.'),
    tarjeta('Regulares: + ed', 'work → worked · like → liked\nstudy → studied · stop → stopped'),
    tarjeta('Irregulares más comunes', 'go → went · see → saw · have → had\neat → ate · buy → bought · come → came'),
    tarjeta('Negativa y pregunta', "didn't + verbo en base: I didn't go\nDid + sujeto + verbo en base: Did you go?\nYes, I did. · No, I didn't."),
    tarjeta('was / were', "I / he / she / it → was\nyou / we / they → were\nwasn't · weren't · Was he…? · Were you…?"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Hi Leo! What did you do yesterday?', translation: '¡Hola Leo! ¿Qué hiciste ayer?' },
    { speaker: 'user', text: 'I stayed at home. I watched a film and I cooked dinner.', translation: 'Me quedé en casa. Vi una película y cociné la cena.' },
    { speaker: 'other', text: 'Did you go out?', translation: '¿Saliste?' },
    { speaker: 'user', text: "No, I didn't. I was tired. Where were you?", translation: 'No. Estaba cansado. ¿Dónde estabas tú?' },
    { speaker: 'other', text: 'I was at the park with my friends. We played soccer.', translation: 'Yo estaba en el parque con mis amigos. Jugamos fútbol.' },
    { speaker: 'user', text: 'Did you win?', translation: '¿Ganaron?' },
    { speaker: 'other', text: 'Yes, we did!', translation: '¡Sí!' },
  ],
  readingText: {
    title: 'My weekend',
    body: "Last weekend was great. On Saturday I got up late and had a big breakfast. Then I went to the park with my sister. We played soccer and we ate ice cream. In the afternoon we visited our grandmother. She cooked chicken and rice, and we ate a lot! On Sunday I didn't go out because it rained. I stayed at home, watched a film and called my friends. I was tired in the evening, but I was very happy.",
    translation:
      'El fin de semana pasado fue genial. El sábado me levanté tarde y desayuné mucho. Luego fui al parque con mi hermana. Jugamos fútbol y comimos helado. En la tarde visitamos a nuestra abuela. Ella cocinó pollo con arroz y ¡comimos mucho! El domingo no salí porque llovió. Me quedé en casa, vi una película y llamé a mis amigos. En la noche estaba cansado, pero estaba muy feliz.',
  },
  tips: [
    'Después de did / didn\'t el verbo va en forma base: «Did you go?», nunca «Did you went?».',
    'Los irregulares no tienen regla: aprende unos pocos cada día (go → went, see → saw…).',
    'Con was / were no se usa did: «Were you at home?», no «Did you were at home?».',
    'Una sola forma de pasado sirve para todas las personas: «I worked · she worked · they worked» (sin -s).',
  ],
  dailyWords: palabras('yesterday', 'ago', 'lunch', 'dinner', 'holiday', 'weekend'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
    { etiqueta: '🔊 Gramática: La terminación -ED', ruta: '/gramatica/concepto/ed-pronunciacion' },
  ],
};

const FORMAS_10_PASADO_SIMPLE: FormasUnidad = {
  titulo: 'Pasado simple: regulares e irregulares',
  afirmativa: {
    formulas: [f(suj('Subject'), verbo('verb-ed / irregular'))],
    ejemplos: [
      ['I worked yesterday.', 'Trabajé ayer.'],
      ['She went home early.', 'Ella se fue temprano a casa.'],
      ['We played soccer.', 'Jugamos fútbol.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), neg("didn't"), verbo('base verb'))],
    ejemplos: [
      ["I didn't work yesterday.", 'No trabajé ayer.'],
      ["She didn't go home.", 'Ella no se fue a casa.'],
      ["They didn't eat.", 'No comieron.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Did'), suj('subject'), verbo('base verb')),
      fl('Información', resto('What / Where…'), aux('did'), suj('subject'), verbo('base verb')),
    ],
    ejemplos: [
      ['Did you work yesterday?', '¿Trabajaste ayer?'],
      ['Where did she go?', '¿Adónde fue ella?'],
      ['What did they eat?', '¿Qué comieron?'],
    ],
  },
  nota: "did / didn't ya marcan el pasado, así que el verbo vuelve a su forma base. Respuestas cortas: Yes, I did. / No, she didn't.",
  ojo: "No pongas el pasado dos veces: «Did she went?» ✗ → «Did she go?» ✓.",
};

const FORMAS_10_PASADO_DE_BE: FormasUnidad = {
  titulo: 'Pasado de to be: was / were',
  afirmativa: {
    formulas: [
      fl('I, he, she, it', suj('I / he / she / it'), aux('was'), resto('complement')),
      fl('you, we, they', suj('you / we / they'), aux('were'), resto('complement')),
    ],
    ejemplos: [
      ['I was tired.', 'Estaba cansado.'],
      ['She was at home.', 'Ella estaba en casa.'],
      ['They were happy.', 'Ellos estaban felices.'],
    ],
  },
  negativa: {
    formulas: [
      fl('I, he, she, it', suj('I / he / she / it'), neg("wasn't"), resto('complement')),
      fl('you, we, they', suj('you / we / they'), neg("weren't"), resto('complement')),
    ],
    ejemplos: [
      ["I wasn't hungry.", 'No tenía hambre.'],
      ["He wasn't at school.", 'Él no estaba en la escuela.'],
      ["We weren't late.", 'No llegamos tarde.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Was / Were'), suj('subject'), resto('complement')),
      fl('Información', resto('Where / How…'), aux('was / were'), suj('subject')),
    ],
    ejemplos: [
      ['Were you at home?', '¿Estabas en casa?'],
      ['Was she tired?', '¿Estaba cansada?'],
      ['Where were they?', '¿Dónde estaban ellos?'],
    ],
  },
  nota: "was con I / he / she / it; were con you / we / they. Respuestas cortas: Yes, I was. / No, they weren't. El verbo to be no usa did.",
  ojo: "No uses did con to be: «Were you at home?», no «Did you were at home?».",
};

// ─── Unidad 11 · Contables e incontables, How much / How many y Would you like ───

const UNIDAD_11: Unit = {
  title: 'Countable and Uncountable, How much / How many, Would you like',
  topic: BLOQUE_4,
  level: 'A1',
  explain: [
    teoria(
      '1 · Sustantivos contables e incontables',
      'Los sustantivos contables se pueden contar uno por uno: a book, two books. Los incontables nombran algo que no se cuenta en unidades: water, milk, bread, rice, money, music.\n\n• Contables: tienen singular y plural → an apple, three apples\n• Incontables: no tienen plural y no llevan a / an → water, no «a water» ni «waters»\n• El verbo de un incontable va en singular: The milk is cold.\n\nPara contar un incontable se usa un envase o una medida: a glass of water, a cup of coffee, a piece of bread.',
      [
        ['I have two apples.', 'Tengo dos manzanas.'],
        ['I want some water.', 'Quiero un poco de agua.'],
        ['The milk is cold.', 'La leche está fría.'],
        ['She drinks a cup of coffee.', 'Ella toma una taza de café.'],
        ['We need a piece of bread.', 'Necesitamos un trozo de pan.'],
      ]
    ),
    teoria(
      '2 · ¿Cuáles son incontables?',
      'Casi siempre son líquidos, alimentos en masa y cosas que no se pueden separar en unidades:\n\n• líquidos: water, milk, juice, coffee, tea\n• alimentos: bread, rice, cheese, sugar, salt, meat\n• otros: money, time, music, weather, information, advice\n\n⚠️ Ojo: en español se pueden contar («una información», «un consejo», «las noticias»), pero en inglés information, advice y news son incontables: «some information», no «an information»; «the news is good».',
      [
        ['I like rice and chicken.', 'Me gustan el arroz y el pollo.'],
        ['We need some bread and cheese.', 'Necesitamos pan y queso.'],
        ['Time is money.', 'El tiempo es dinero.'],
        ['I need some information.', 'Necesito algo de información.'],
      ]
    ),
    teoria(
      '3 · How much? / How many?',
      'Para preguntar cantidades se usan dos expresiones:\n\n• How many + contable en plural: How many apples? (¿cuántas?)\n• How much + incontable: How much milk? (¿cuánta?)\n\nPregúntate: ¿puedo decir «two ___»? Si sí (two apples), usa many; si no (two milks no), usa much.\n\nRecuerda: How much también pregunta el precio (Unidad 9): How much is it?',
      [
        ['How many apples do you want?', '¿Cuántas manzanas quieres?'],
        ['How much milk do you drink?', '¿Cuánta leche tomas?'],
        ['How many brothers do you have?', '¿Cuántos hermanos tienes?'],
        ['How much money do you have?', '¿Cuánto dinero tienes?'],
        ['How many people are there?', '¿Cuánta gente hay?'],
      ]
    ),
    teoria(
      '4 · Would you like (to)…?: ofrecer y pedir',
      "Would you like…? es la forma amable de ofrecer algo o de preguntar qué quiere una persona. Es más educada que Do you want…?\n\n• Would you like + sustantivo? → Would you like some coffee?\n• Would you like to + verbo? → Would you like to sit down?\n• Respuestas: Yes, please. · No, thank you. · Yes, I would.\n\nPara pedir se usa I'd like (= I would like):\n• I'd like a coffee, please.\n• I'd like to pay, please.\n\n⚠️ Ojo: con un sustantivo no va to: «Would you like some tea?», no «Would you like to some tea?».",
      [
        ['Would you like some coffee?', '¿Te gustaría un poco de café?'],
        ['Would you like to sit down?', '¿Te gustaría sentarte?'],
        ["I'd like a sandwich, please.", 'Quisiera un sándwich, por favor.'],
        ["I'd like to pay, please.", 'Quisiera pagar, por favor.'],
        ['Would you like some tea? Yes, please.', '¿Quieres té? Sí, por favor.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('How many + contable en plural (How many apples do you want?)', resto('How many'), suj('plural noun'), aux('do / does'), suj('subject'), verbo('verb')),
    fl('How much + incontable (How much milk do you want?)', resto('How much'), suj('uncountable noun'), aux('do / does'), suj('subject'), verbo('verb')),
    fl('Would you like + sustantivo o to + verbo', aux('Would'), suj('you'), verbo('like'), resto('noun / to + verb')),
    fl("I'd like (para pedir)", suj("I'd"), verbo('like'), resto('noun / to + verb')),
  ],
  table: {
    cols: ['', 'Contables', 'Incontables'],
    rows: [
      ['Ejemplos', 'apple, egg, book, friend', 'water, milk, rice, money'],
      ['a / an', 'a book ✓', 'a water ✗'],
      ['Plural', 'books ✓', 'waters ✗'],
      ['Preguntar', 'How many?', 'How much?'],
    ],
  },
  contrastCard: {
    left: { label: 'How many — contables', example: 'How many apples do you want?', highlight: 'How many apples' },
    right: { label: 'How much — incontables', example: 'How much milk do you want?', highlight: 'How much milk' },
    caption: 'How many + plural (se cuenta) · How much + incontable (no se cuenta).',
  },
  quiz: [
    ejercicio('I want some ___.', 'money', ['a money', 'moneys', 'an money'], 'money es incontable: no lleva a / an ni tiene plural. Se dice «some money».'),
    ejercicio('How ___ eggs do you want?', 'many', ['much', 'any', 'a'], 'eggs es contable en plural, así que va How many: «How many eggs do you want?».'),
    ejercicio('How ___ milk do you drink?', 'much', ['many', 'any', 'a'], 'milk es incontable, así que va How much: «How much milk do you drink?».'),
    ejercicio('___ you like some tea?', 'Would', ['Are', 'Can', 'Is'], 'Para ofrecer algo amablemente se usa Would you like…?: «Would you like some tea?».'),
    ejercicio("I'd like ___ coffee, please. (Quisiera un café.)", 'a', ['an', 'to', 'many'], "Con un sustantivo contable se usa a / an (coffee empieza con sonido de consonante → a): «I'd like a coffee, please». to es para verbos."),
  ],
  flashcards: [
    tarjeta('Contables e incontables', 'Contables: a book, two books\nIncontables: water, milk, rice, money (sin a / an ni plural)'),
    tarjeta('How many / How much', 'How many + plural: How many apples?\nHow much + incontable: How much milk?'),
    tarjeta('Would you like…?', 'Ofrecer: Would you like some tea?\nOfrecer una acción: Would you like to sit down?\nContestar: Yes, please. · No, thank you.'),
    tarjeta("I'd like…", "Para pedir: I'd like a coffee, please.\nI'd like to pay, please."),
    tarjeta('Para contar incontables', 'a glass of water · a cup of coffee\na piece of bread · a bottle of milk'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Good evening! Would you like some water?', translation: '¡Buenas noches! ¿Le gustaría un poco de agua?' },
    { speaker: 'user', text: "Yes, please. I'd like a salad and some bread.", translation: 'Sí, por favor. Quisiera una ensalada y un poco de pan.' },
    { speaker: 'other', text: 'Would you like to see the menu?', translation: '¿Le gustaría ver el menú?' },
    { speaker: 'user', text: 'Yes, please. How much is the soup?', translation: 'Sí, por favor. ¿Cuánto cuesta la sopa?' },
    { speaker: 'other', text: "It's four dollars. How many people are you?", translation: 'Cuesta cuatro dólares. ¿Cuántas personas son?' },
    { speaker: 'user', text: "We're two. We'd like a table by the window.", translation: 'Somos dos. Quisiéramos una mesa junto a la ventana.' },
  ],
  readingText: {
    title: 'At the supermarket',
    body: "Today I'm at the supermarket. I need some food for the week. I need some rice and some bread, and I need a lot of fruit. How many apples do I need? Six. How much milk do I need? Two bottles. I don't need any sugar. At the end, the woman asks me: \"Would you like a bag?\" \"Yes, please,\" I say. \"Would you like to pay by card?\" \"Yes, I would.\"",
    translation:
      'Hoy estoy en el supermercado. Necesito comida para la semana. Necesito arroz y pan, y necesito mucha fruta. ¿Cuántas manzanas necesito? Seis. ¿Cuánta leche necesito? Dos botellas. No necesito azúcar. Al final, la señora me pregunta: «¿Quiere una bolsa?». «Sí, por favor», digo. «¿Le gustaría pagar con tarjeta?». «Sí».',
  },
  tips: [
    'Los incontables no tienen plural ni llevan a / an: «water», no «a water» ni «waters».',
    'How many + plural contable · How much + incontable. Si dudas, pregúntate: ¿puedo decir «two ___»? Si sí, many.',
    'Would you like + sustantivo: «Would you like some tea?». Would you like to + verbo: «Would you like to sit down?».',
    'En inglés information, advice, news y furniture son incontables: «some information», «the news is good».',
  ],
  dailyWords: palabras('water', 'milk', 'juice', 'bread', 'rice', 'cheese'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Sustantivo (Noun)', ruta: '/gramatica/concepto/el-sustantivo-noun' },
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
  ],
};

// ─── Unidad 12 · Some y any, a lot of, much y many ───

const UNIDAD_12: Unit = {
  title: 'Some, Any, A lot of, Much and Many',
  topic: BLOQUE_4,
  level: 'A1',
  explain: [
    teoria(
      '1 · Some: afirmativas y ofrecimientos',
      'some significa algunos / algo de y se usa con contables en plural y con incontables:\n\n• Afirmativas: I have some friends. · There is some milk.\n• Ofrecimientos y pedidos: Would you like some tea? · Can I have some water?\n\nNo se usa con un singular contable: «some friend» está mal.',
      [
        ['I have some friends in Lima.', 'Tengo unos amigos en Lima.'],
        ['There is some milk in the cup.', 'Hay un poco de leche en la taza.'],
        ['Would you like some tea?', '¿Te gustaría un poco de té?'],
        ['Can I have some water, please?', '¿Me das un poco de agua, por favor?'],
      ]
    ),
    teoria(
      '2 · Any: negativas y preguntas',
      "any se usa en negativas y preguntas, con contables en plural y con incontables:\n\n• Negativas: I don't have any money. · There isn't any milk.\n• Preguntas: Do you have any brothers? · Is there any bread?\n\nRegla rápida: afirmativa → some · negativa y pregunta → any.\n\nCon no (= not any) la oración es afirmativa: I have no money = I don't have any money.",
      [
        ["I don't have any money.", 'No tengo dinero.'],
        ["There isn't any milk.", 'No hay leche.'],
        ['Do you have any brothers?', '¿Tienes hermanos?'],
        ['Is there any bread?', '¿Hay pan?'],
        ["We don't have any eggs.", 'No tenemos huevos.'],
      ]
    ),
    teoria(
      '3 · A lot of, much y many',
      "Sirven para decir «mucho / muchos»:\n\n• a lot of (lots of) + contable en plural o incontable: a lot of friends · a lot of money\n• many + contable en plural: many friends\n• much + incontable: much money\n\nEn afirmativas lo natural es a lot of: «I have a lot of friends». En negativas y preguntas se usan much / many: «I don't have much time» · «Do you have many friends?».",
      [
        ['I have a lot of friends.', 'Tengo muchos amigos.'],
        ["She doesn't have much time.", 'Ella no tiene mucho tiempo.'],
        ['Do you have many books?', '¿Tienes muchos libros?'],
        ['They eat a lot of rice.', 'Ellos comen mucho arroz.'],
        ["We don't have many chairs.", 'No tenemos muchas sillas.'],
      ]
    ),
    teoria(
      '4 · ¿Some, any, much o many?',
      'Pregúntate dos cosas:\n\n1) ¿La oración es afirmativa, negativa o pregunta?\n• afirmativa → some / a lot of\n• negativa o pregunta → any / much / many\n\n2) ¿Se puede contar?\n• sí (plural) → many\n• no → much\n\nTambién existen a few (unos pocos, con plural) y a little (un poco, con incontables): a few friends · a little time.',
      [
        ['I have some money.', 'Tengo algo de dinero.'],
        ["I don't have much money.", 'No tengo mucho dinero.'],
        ['Do you have many friends here?', '¿Tienes muchos amigos aquí?'],
        ['I have a few friends and a little time.', 'Tengo unos pocos amigos y un poco de tiempo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('some + afirmativas y ofrecimientos', aux('some'), suj('plural / uncountable')),
    fl('any + negativas y preguntas', aux('any'), suj('plural / uncountable')),
    fl('a lot of + plural o incontable', aux('a lot of'), suj('plural / uncountable')),
    fl('many + contable en plural', aux('many'), suj('plural noun')),
    fl('much + incontable', aux('much'), suj('uncountable noun')),
  ],
  table: {
    cols: ['', 'Contable en plural', 'Incontable'],
    rows: [
      ['Afirmativa (+)', 'some friends · a lot of friends', 'some money · a lot of money'],
      ['Negativa (−)', 'any friends · many friends', 'any money · much money'],
      ['Pregunta (?)', 'any friends? · many friends?', 'any money? · much money?'],
    ],
  },
  contrastCard: {
    left: { label: 'much — no se cuenta', example: "I don't have much money.", highlight: 'much money' },
    right: { label: 'many — se cuenta', example: "I don't have many friends.", highlight: 'many friends' },
    caption: 'much + incontable · many + plural. En afirmativas se usa a lot of para los dos.',
  },
  quiz: [
    ejercicio('I have ___ friends in Lima.', 'some', ['any', 'much', 'a'], 'En una afirmativa con un plural contable se usa some: «I have some friends». any es para negativas y preguntas; much va con incontables.'),
    ejercicio("I don't have ___ time.", 'much', ['many', 'a few', 'a'], 'time es incontable, así que en una negativa se usa much: «I don\'t have much time». many es para plurales y a few se usa en afirmativas.'),
    ejercicio('Do you have ___ brothers?', 'any', ['some', 'much', 'a'], 'En las preguntas se usa any: «Do you have any brothers?». some es para afirmativas, y a no va con un plural.'),
    ejercicio('She has ___ friends. (Ella tiene muchos amigos.)', 'a lot of', ['much', 'a lot', 'many of'], 'En afirmativas se usa a lot of + sustantivo: «She has a lot of friends». «a lot» sin of no puede ir antes de un sustantivo.'),
    ejercicio("We don't have ___ chairs. (No tenemos muchas sillas.)", 'many', ['much', 'a', 'some'], 'chairs es contable en plural y la oración es negativa: «We don\'t have many chairs». much es para incontables.'),
  ],
  flashcards: [
    tarjeta('¿some o any?', "some: afirmativas y ofrecimientos\nany: negativas y preguntas\nI have some money · I don't have any money · Do you have any money?"),
    tarjeta('a lot of, much, many', 'a lot of + plural o incontable (afirmativas)\nmuch + incontable · many + plural (negativas y preguntas)'),
    tarjeta('¿much o many?', 'many + lo que se cuenta: many friends\nmuch + lo que no se cuenta: much money'),
    tarjeta('a few y a little', 'a few + plural: a few friends\na little + incontable: a little time'),
    tarjeta('no = not any', "I have no money = I don't have any money."),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Do we have any bread?', translation: '¿Tenemos pan?' },
    { speaker: 'user', text: "Yes, we have some bread, but we don't have any cheese.", translation: 'Sí, tenemos un poco de pan, pero no tenemos queso.' },
    { speaker: 'other', text: 'How much milk do we have?', translation: '¿Cuánta leche tenemos?' },
    { speaker: 'user', text: "We don't have much milk. But we have a lot of eggs.", translation: 'No tenemos mucha leche. Pero tenemos muchos huevos.' },
    { speaker: 'other', text: 'How many eggs are there?', translation: '¿Cuántos huevos hay?' },
    { speaker: 'user', text: "There are ten eggs. Let's make breakfast!", translation: 'Hay diez huevos. ¡Preparemos el desayuno!' },
  ],
  readingText: {
    title: 'My town',
    body: "I live in a small town. There are a lot of trees and some beautiful parks, but there aren't many shops. There isn't a big supermarket. There isn't much noise, so the streets are quiet. Do I have many friends here? Yes, I have a lot of friends. I don't have much money, but I love my town.",
    translation:
      'Vivo en un pueblo pequeño. Hay muchos árboles y algunos parques hermosos, pero no hay muchas tiendas. No hay un supermercado grande. No hay mucho ruido, así que las calles son tranquilas. ¿Tengo muchos amigos aquí? Sí, tengo muchos amigos. No tengo mucho dinero, pero amo mi pueblo.',
  },
  tips: [
    'Afirmativa → some o a lot of. Negativa o pregunta → any, much o many.',
    'En afirmativas casi siempre se dice a lot of, no much / many: «I have a lot of friends».',
    "Después de no el verbo es afirmativo: «I have no money», no «I don't have no money».",
    'En ofrecimientos y pedidos se usa some: «Would you like some tea?» · «Can I have some water?».',
  ],
  dailyWords: palabras('many', 'much', 'few', 'little', 'money', 'people'),
  relacionados: [
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
    { etiqueta: '📖 Gramática: El Sustantivo (Noun)', ruta: '/gramatica/concepto/el-sustantivo-noun' },
    { unidad: 14 },
  ],
};

/** Las unidades del bloque 4, por número de unidad. */
export const UNIDADES_BLOQUE_4: Record<number, Unit> = {
  10: UNIDAD_10,
  11: UNIDAD_11,
  12: UNIDAD_12,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 4 que las tienen (la unidad 10 trae dos estructuras). */
export const FORMAS_BLOQUE_4: Record<number, FormasUnidad | FormasUnidad[]> = {
  10: [FORMAS_10_PASADO_SIMPLE, FORMAS_10_PASADO_DE_BE],
};
