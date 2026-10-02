import { aux, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_1 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from './ayuda';

// Bloque 1 · Verbo To Be y sustantivos (unidades 1–3).

// ─── Unidad 1 · Verbo To Be ───

const UNIDAD_1: Unit = {
  title: 'Verb To Be (I am, you are, he is…)',
  topic: BLOQUE_1,
  level: 'A1',
  explain: [
    teoria(
      '1 · To be: ser o estar',
      'to be es el verbo más importante del inglés: significa ser y estar. Sirve para decir quién eres, cómo estás, de dónde eres y dónde estás. Cambia según el sujeto:\n\n• I → am\n• he, she, it → is\n• you, we, they → are\n\nyou se usa para «tú» y para «ustedes».\n\n⚠️ Ojo: en inglés el sujeto siempre se dice. No existe «Am a student», solo «I am a student».',
      [
        ['I am a student.', 'Soy estudiante.'],
        ['She is happy today.', 'Ella está feliz hoy.'],
        ['We are from Chile.', 'Somos de Chile.'],
        ['They are at home.', 'Ellos están en casa.'],
      ]
    ),
    teoria(
      '2 · Afirmativa: sujeto + am / is / are',
      "El orden es: sujeto + am / is / are + el resto de la oración. Al hablar casi siempre se usa la forma corta:\n\n• I am → I'm\n• you are → you're\n• he is → he's · she is → she's · it is → it's\n• we are → we're · they are → they're\n\nCon it se habla de cosas, animales y del clima: «It's cold» = hace frío.",
      [
        ["I'm a teacher.", 'Soy profesor.'],
        ["You're my friend.", 'Eres mi amigo.'],
        ["He's tired.", 'Él está cansado.'],
        ["It's cold today.", 'Hoy hace frío.'],
        ["We're ready.", 'Estamos listos.'],
      ]
    ),
    teoria(
      '3 · Negativa: am / is / are + not',
      "Para decir que no, se agrega not después de am / is / are. Formas cortas:\n\n• I am not → I'm not\n• he, she, it is not → isn't\n• you, we, they are not → aren't\n\nTambién se puede decir he's not, you're not, we're not… (significa lo mismo).\n\n⚠️ Ojo: con I solo existe I'm not. «I amn't» no existe.",
      [
        ["I'm not hungry.", 'No tengo hambre.'],
        ["He isn't at school.", 'Él no está en la escuela.'],
        ["They aren't tired.", 'Ellos no están cansados.'],
        ["It isn't expensive.", 'No es caro.'],
      ]
    ),
    teoria(
      '4 · Preguntas de Sí / No',
      'Para preguntar se cambia el orden: am / is / are va ANTES del sujeto.\n\n• You are a student. → Are you a student?\n• She is at home. → Is she at home?\n• I am late. → Am I late?\n\nEn la pregunta no se usan contracciones y la voz sube al final.',
      [
        ['Are you a teacher?', '¿Eres profesor?'],
        ['Is she your sister?', '¿Ella es tu hermana?'],
        ['Am I late?', '¿Llego tarde?'],
        ['Are they at home?', '¿Están en casa?'],
      ]
    ),
    teoria(
      '5 · Respuestas cortas',
      "Se responde con Yes o No + el pronombre + am / is / are (o + not):\n\n• Yes, I am. · No, I'm not.\n• Yes, he is. · No, he isn't.\n• Yes, they are. · No, they aren't.\n\n⚠️ Ojo: en el Yes NUNCA se contrae («Yes, I am», no «Yes, I'm»). Y se usa el pronombre (he, she, it, they), no el nombre: «Is Ana tired? Yes, she is».",
      [
        ['Are you a student? Yes, I am.', '¿Eres estudiante? Sí, lo soy.'],
        ["Is he your brother? No, he isn't.", '¿Él es tu hermano? No.'],
        ['Are they at home? Yes, they are.', '¿Están en casa? Sí.'],
        ["Is it a dog? No, it isn't.", '¿Es un perro? No.'],
      ]
    ),
    teoria(
      "6 · What's…? y Where…?",
      "Las preguntas con What (qué) y Where (dónde) llevan la palabra interrogativa al inicio: What / Where + am / is / are + sujeto.\n\n• What's this? = ¿Qué es esto?\n• What's your name? = ¿Cuál es tu nombre?\n• Where are you from? = ¿De dónde eres?\n• Where's the bathroom? = ¿Dónde está el baño?\n\nWhat is → What's · Where is → Where's (con is se contrae; con are no: «Where are you?»).",
      [
        ["What's your name?", '¿Cómo te llamas?'],
        ["What's this? It's a pencil.", '¿Qué es esto? Es un lápiz.'],
        ['Where are you from?', '¿De dónde eres?'],
        ["Where's the bathroom?", '¿Dónde está el baño?'],
        ['Where are my keys?', '¿Dónde están mis llaves?'],
      ]
    ),
  ],
  table: {
    cols: ['Sujeto + verbo', 'Forma corta', 'Negativa corta'],
    rows: [
      ['I am', "I'm", "I'm not"],
      ['you are', "you're", "you aren't"],
      ['he is', "he's", "he isn't"],
      ['she is', "she's", "she isn't"],
      ['it is', "it's", "it isn't"],
      ['we are', "we're", "we aren't"],
      ['they are', "they're", "they aren't"],
    ],
  },
  contrastCard: {
    left: { label: 'Español: tener', example: 'Tengo hambre. · Tengo 20 años.', highlight: 'Tengo' },
    right: { label: 'Inglés: to be', example: "I'm hungry. · I'm 20 years old.", highlight: "I'm" },
    caption: 'Con hambre, sed, frío, calor, sueño y la edad, el español usa «tener»; el inglés usa to be.',
  },
  quiz: [
    ejercicio(
      'My mother ___ a nurse.',
      'is',
      ['am', 'are', 'be'],
      'My mother = she, y con he / she / it va is: «My mother is a nurse» (Mi mamá es enfermera). am solo va con I y are con you, we y they.'
    ),
    ejercicio(
      'My brother ___ at home today. (Mi hermano no está en casa hoy.)',
      "isn't",
      ["aren't", "amn't", "don't"],
      "Para negar con to be se pone not: my brother = he → is not = isn't. aren't es para you / we / they, «amn't» no existe y don't no se usa con to be."
    ),
    ejercicio(
      '¿Cómo se dice «¿Estás cansado?»',
      'Are you tired?',
      ['Am you tired?', 'Is you tired?', 'Do you tired?'],
      'La pregunta con to be pone el verbo antes del sujeto, y con you el verbo es are: «Are you tired?». No se usa do con to be.'
    ),
    ejercicio(
      'Are you hungry? — Yes, ___.',
      'I am',
      ["I'm", 'I are', 'I do'],
      "En la respuesta corta afirmativa el verbo no se contrae: «Yes, I am». «Yes, I'm» no se usa (en la negativa sí: «No, I'm not»)."
    ),
    ejercicio(
      "___ is the bathroom? — It's on the left.",
      'Where',
      ['What', 'Who', 'When'],
      "La respuesta dice un lugar («on the left»), así que la pregunta es con Where (dónde): «Where's the bathroom?»"
    ),
  ],
  flashcards: [
    tarjeta('to be: ¿am, is o are?', 'I → am\nhe / she / it → is\nyou / we / they → are'),
    tarjeta('¿Cómo se niega to be?', "Se agrega not: I'm not · he isn't · they aren't.\n«I amn't» no existe."),
    tarjeta('¿Cómo se pregunta con to be?', 'El verbo va antes del sujeto:\nAre you a student?\nIs she at home?\nAm I late?'),
    tarjeta('¿Cómo se responde una pregunta de Sí / No?', "Yes, I am. · No, I'm not.\nYes, he is. · No, he isn't.\n(En el Yes no se contrae: no «Yes, I'm»)"),
    tarjeta("What's…? y Where's…?", "What's this? = ¿Qué es esto?\nWhere's the key? = ¿Dónde está la llave?\nWhere are you from? = ¿De dónde eres?"),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Hi! I'm Ana. What's your name?", translation: '¡Hola! Soy Ana. ¿Cómo te llamas?' },
    { speaker: 'user', text: "Hello, Ana. I'm Leo. Nice to meet you.", translation: 'Hola, Ana. Soy Leo. Mucho gusto.' },
    { speaker: 'other', text: 'Nice to meet you, too. Where are you from?', translation: 'Mucho gusto también. ¿De dónde eres?' },
    { speaker: 'user', text: "I'm from Colombia. Are you from here?", translation: 'Soy de Colombia. ¿Tú eres de aquí?' },
    { speaker: 'other', text: 'Yes, I am. My friends are in the class, too.', translation: 'Sí. Mis amigos también están en la clase.' },
    { speaker: 'user', text: 'Great! Is your teacher here today?', translation: '¡Genial! ¿Tu profesor está aquí hoy?' },
    { speaker: 'other', text: "No, he isn't. He's late today.", translation: 'No. Hoy llega tarde.' },
  ],
  readingText: {
    title: 'Meet Sara',
    body: "This is my friend Sara. She is twenty years old. She is from Peru, but now she is in Canada. Sara is a student, and she is very happy. She isn't tired today, but she is hungry! Her brothers are with her. They aren't students — they are teachers. Where are they now? They are at the park.",
    translation:
      'Ella es mi amiga Sara. Tiene veinte años. Es de Perú, pero ahora está en Canadá. Sara es estudiante y está muy feliz. Hoy no está cansada, ¡pero tiene hambre! Sus hermanos están con ella. No son estudiantes: son profesores. ¿Dónde están ahora? Están en el parque.',
  },
  tips: [
    'Nunca omitas el sujeto: en español decimos «Soy estudiante», pero en inglés es «I am a student».',
    "Con hambre, sed, frío, calor y la edad usa to be, no have: «I'm hungry», «I'm cold», «I'm twenty» (no «I have hunger»).",
    "Cuando contestas Yes no contraigas: «Yes, I am» (no «Yes, I'm»). Con No sí: «No, I'm not».",
    "Para presentarte aprende estas cuatro frases: «I'm Leo.» · «I'm from Peru.» · «I'm twenty.» · «I'm a student.»",
  ],
  dailyWords: palabras('hungry', 'tired', 'happy', 'student', 'teacher', 'friend'),
  relacionados: [
    { etiqueta: '📖 Gramática: Ser vs. Estar = BE', ruta: '/gramatica/concepto/ser-vs-estar-be' },
    { etiqueta: '📖 Gramática: El Verbo (Verb)', ruta: '/gramatica/concepto/el-verbo-verb' },
  ],
};

const FORMAS_1: FormasUnidad = {
  afirmativa: {
    formulas: [
      fl('Forma completa', suj('Subject'), aux('am / is / are'), resto('complement')),
      fl('Forma corta', suj("I'm / you're / he's…"), resto('complement')),
    ],
    ejemplos: [
      ['I am from Peru.', 'Soy de Perú.'],
      ["She's a nurse.", 'Ella es enfermera.'],
      ['They are in the car.', 'Ellos están en el auto.'],
    ],
  },
  negativa: {
    formulas: [
      fl('Forma completa', suj('Subject'), aux('am / is / are'), neg('not'), resto('complement')),
      fl('Forma corta', suj('Subject'), neg("'m not / isn't / aren't"), resto('complement')),
    ],
    ejemplos: [
      ["I'm not a doctor.", 'No soy doctor.'],
      ["She isn't at work.", 'Ella no está en el trabajo.'],
      ["We aren't late.", 'No llegamos tarde.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Am / Is / Are'), suj('subject'), resto('complement')),
      fl('What / Where', resto('What / Where'), aux('am / is / are'), suj('subject')),
    ],
    ejemplos: [
      ['Are you from Mexico?', '¿Eres de México?'],
      ['Is he at home?', '¿Él está en casa?'],
      ["What's your phone number?", '¿Cuál es tu número de teléfono?'],
    ],
  },
  nota: "I → am · he / she / it → is · you / we / they → are. Formas cortas: I'm · you're · he's · she's · it's · we're · they're. Respuestas cortas: Yes, I am. / No, I'm not. / Yes, she is. / No, she isn't.",
  ojo: "No omitas el sujeto ni el verbo: «She is a doctor», no «Is doctor» ni «She a doctor». Y con hambre, sed, frío o la edad usa to be: «I'm hungry», no «I have hungry».",
};

// ─── Unidad 2 · A / An / The · This / These · Plurales ───

const UNIDAD_2: Unit = {
  title: 'A / An / The, This / These and Plurals',
  topic: BLOQUE_1,
  level: 'A1',
  explain: [
    teoria(
      '1 · A y an: un / una',
      'a y an significan un / una y se usan con sustantivos en singular que se pueden contar.\n\n• a + sonido de consonante: a book, a car, a house\n• an + sonido de vocal (a, e, i, o, u): an apple, an egg, an old car\n• Con plurales no se usan: «I have books», no «I have a books»\n\n⚠️ Ojo: manda el SONIDO, no la letra: an hour (la h no suena) pero a university (empieza con sonido «iu»).',
      [
        ['I have a book.', 'Tengo un libro.'],
        ['She eats an apple every day.', 'Ella come una manzana todos los días.'],
        ['He is an actor.', 'Él es actor.'],
        ['It is an old car.', 'Es un auto viejo.'],
        ['We wait for an hour.', 'Esperamos una hora.'],
      ]
    ),
    teoria(
      '2 · The: el, la, los, las',
      'the significa el, la, los, las y se usa con singular y plural cuando se habla de algo específico:\n\n• algo que ya se mencionó o está claro de cuál se trata\n• algo único en el mundo: the sun, the moon\n\nCompara: «I have a dog» (un perro cualquiera, primera vez) → «The dog is big» (ese perro). the nunca cambia: the boy, the girls.',
      [
        ['I have a dog. The dog is big.', 'Tengo un perro. El perro es grande.'],
        ['Please close the door.', 'Por favor, cierra la puerta.'],
        ['The sun is hot today.', 'Hoy el sol está fuerte.'],
        ['Where are the keys?', '¿Dónde están las llaves?'],
        ['The students are in the classroom.', 'Los estudiantes están en el salón.'],
      ]
    ),
    teoria(
      '3 · This y these: este, esta, estos, estas',
      'this (este / esta) señala una sola cosa que está cerca; these (estos / estas) señala varias cosas que están cerca.\n\n• this + singular: this book → «This is my phone»\n• these + plural: these books → «These are my keys»\n\nPara cosas lejanas se usan that y those (Unidad 9). Se pronuncian distinto: this /ðɪs/ (i corta) y these /ðiːz/ (i larga).\n\n⚠️ Ojo: «These is» y «This are» están mal: el verbo va en singular con this y en plural con these.',
      [
        ['This is my phone.', 'Este es mi teléfono.'],
        ['These are my keys.', 'Estas son mis llaves.'],
        ['Is this your pencil?', '¿Este es tu lápiz?'],
        ['These shoes are new.', 'Estos zapatos son nuevos.'],
        ['Are these your friends?', '¿Estos son tus amigos?'],
      ]
    ),
    teoria(
      '4 · Plurales regulares',
      'Para hablar de más de uno casi siempre se agrega -s:\n\n• + s: book → books\n• s, x, ch, sh, z → + es: bus → buses, box → boxes, watch → watches\n• consonante + y → -ies: baby → babies\n• vocal + y → + s: boy → boys\n• algunas en -o → + es: tomato → tomatoes (pero photo → photos)',
      [
        ['I have two books.', 'Tengo dos libros.'],
        ['She has three boxes.', 'Ella tiene tres cajas.'],
        ['The babies are tired.', 'Los bebés están cansados.'],
        ['The boys are at school.', 'Los niños están en la escuela.'],
        ['We buy tomatoes at the market.', 'Compramos tomates en el mercado.'],
      ]
    ),
    teoria(
      '5 · Plurales irregulares',
      'Algunos sustantivos muy comunes cambian de forma en vez de agregar -s. Hay que aprenderlos:\n\n• man → men · woman → women\n• child → children · person → people\n• foot → feet · tooth → teeth\n• one sheep, two sheep · one fish, two fish (no cambian)\n\n⚠️ Ojo: people ya es plural: «The people are friendly», no «The people is friendly».',
      [
        ['The children are in the garden.', 'Los niños están en el jardín.'],
        ['Two women are at the door.', 'Dos mujeres están en la puerta.'],
        ['My feet are cold.', 'Mis pies están fríos.'],
        ['The people are friendly.', 'La gente es amable.'],
      ]
    ),
    teoria(
      '6 · Casos especiales',
      'Algunos sustantivos siempre van en plural y llevan verbo en plural: jeans, glasses (lentes), scissors, trousers. Para contarlos se usa a pair of: a pair of jeans.\n\nOtros terminan en -s pero son singulares: news (noticias) → «The news is good».',
      [
        ['These jeans are new.', 'Estos jeans son nuevos.'],
        ['My glasses are on the table.', 'Mis lentes están en la mesa.'],
        ['I have a pair of black shoes.', 'Tengo un par de zapatos negros.'],
        ['The news is good today.', 'Las noticias son buenas hoy.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('a + sonido de consonante (a book, a university)', aux('a'), suj('singular noun')),
    fl('an + sonido de vocal (an apple, an hour)', aux('an'), suj('singular noun')),
    fl('the + cualquier sustantivo (the book, the books)', aux('the'), suj('singular / plural noun')),
    fl('this + singular (this book)', aux('this'), suj('singular noun')),
    fl('these + plural (these books)', aux('these'), suj('plural noun')),
    fl('Plural regular (book → books)', suj('noun'), verbo('+ s / es / ies')),
  ],
  table: {
    cols: ['Regla', 'Singular', 'Plural'],
    rows: [
      ['+ s', 'book', 'books'],
      ['+ es (s, x, ch, sh)', 'box', 'boxes'],
      ['consonante + y → ies', 'baby', 'babies'],
      ['vocal + y → + s', 'boy', 'boys'],
      ['algunas en -o → es', 'tomato', 'tomatoes'],
      ['irregular', 'man', 'men'],
      ['irregular', 'woman', 'women'],
      ['irregular', 'child', 'children'],
      ['irregular', 'person', 'people'],
      ['irregular', 'foot', 'feet'],
      ['irregular', 'tooth', 'teeth'],
    ],
  },
  contrastCard: {
    left: { label: 'a / an — primera vez', example: 'I have a dog.', highlight: 'a dog' },
    right: { label: 'the — ya sabemos cuál', example: 'The dog is big.', highlight: 'The dog' },
    caption: 'Primera vez → a / an. Cuando ya sabes de cuál se habla → the.',
  },
  quiz: [
    ejercicio(
      'She eats ___ orange every day.',
      'an',
      ['a', 'two', 'these'],
      'orange empieza con sonido de vocal, así que va an: «an orange» (una naranja). a no se usa antes de vocal, y two y these piden plural.'
    ),
    ejercicio(
      'I have a cat. ___ cat is black.',
      'The',
      ['An', 'These', 'Two'],
      'Ya mencionaste el gato, así que ahora es uno específico: the cat. La primera vez se dice a cat; después, the cat.'
    ),
    ejercicio(
      '¿Cuál oración es correcta? (Estos son mis zapatos.)',
      'These are my shoes.',
      ['This are my shoes.', 'These is my shoes.', 'This is my shoes.'],
      'shoes está en plural y están cerca: these + are. «This are» y «These is» mezclan singular con plural.'
    ),
    ejercicio('Two ___ are on the bus. (woman)', 'women', ['womans', 'womens', 'woman'], 'woman es irregular: woman → women. No se le agrega -s.'),
    ejercicio('My sister has two ___. (baby)', 'babies', ['babys', 'babyes', 'babis'], 'baby termina en consonante + y: la y cambia a -ies → babies.'),
  ],
  flashcards: [
    tarjeta('¿a o an?', 'a + sonido de consonante: a book, a university\nan + sonido de vocal: an apple, an hour\n(Cuenta el sonido, no la letra)'),
    tarjeta('¿a / an o the?', 'a / an: una cosa cualquiera (primera vez): I have a dog.\nthe: una cosa específica o ya conocida: The dog is big.'),
    tarjeta('¿this o these?', 'this + singular (cerca): this book\nthese + plural (cerca): these books\nthis is… · these are…'),
    tarjeta('Plurales: ¿-s, -es o -ies?', 'book → books\nbox · bus · watch → boxes · buses · watches\nbaby → babies (consonante + y)\nboy → boys (vocal + y)'),
    tarjeta('Plurales irregulares', 'man → men · woman → women · child → children\nperson → people · foot → feet · tooth → teeth'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Look at this! It's a gift for you.", translation: '¡Mira esto! Es un regalo para ti.' },
    { speaker: 'user', text: 'Wow, thank you! Is it a book?', translation: '¡Guau, gracias! ¿Es un libro?' },
    { speaker: 'other', text: 'Yes, it is. And these are two pencils for the class.', translation: 'Sí. Y estos son dos lápices para la clase.' },
    { speaker: 'user', text: 'Great! Is it an English book?', translation: '¡Genial! ¿Es un libro de inglés?' },
    { speaker: 'other', text: 'Yes, it is. The teacher has the other books.', translation: 'Sí. El profesor tiene los otros libros.' },
    { speaker: 'user', text: 'Perfect. These pencils are very nice.', translation: 'Perfecto. Estos lápices son muy bonitos.' },
  ],
  readingText: {
    title: 'My pets',
    body: 'I have a dog and two cats. The dog is big, but the cats are small. This is Max, my dog. These are Luna and Tom, my cats. Every morning I eat an egg and an orange. Then I give food to the dog and milk to the cats. My pets are very happy!',
    translation:
      'Tengo un perro y dos gatos. El perro es grande, pero los gatos son pequeños. Este es Max, mi perro. Estos son Luna y Tom, mis gatos. Todas las mañanas como un huevo y una naranja. Luego le doy comida al perro y leche a los gatos. ¡Mis mascotas están muy felices!',
  },
  tips: [
    'Cuenta el SONIDO, no la letra: an hour (la h no suena) pero a university (suena «iu»).',
    "Con plurales no hay a / an: «a book», pero «books». Para hablar en general usa el plural sin artículo: «I like dogs».",
    'En español decimos «Los perros son amigables» con artículo; en inglés, para hablar en general no se usa the: «Dogs are friendly», no «The dogs are friendly».',
    'this y these: la diferencia es el número. this + singular · these + plural, y en la pronunciación la i es corta en this y larga en these.',
  ],
  dailyWords: palabras('apple', 'egg', 'orange', 'notebook', 'pencil', 'door'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Artículo (Article)', ruta: '/gramatica/concepto/el-articulo-article' },
    { etiqueta: '📖 Gramática: El Sustantivo (Noun)', ruta: '/gramatica/concepto/el-sustantivo-noun' },
    { etiqueta: '🔊 Gramática: El sonido TH', ruta: '/gramatica/concepto/sonido-th' },
    { unidad: 17 },
  ],
};

// ─── Unidad 3 · Posesivos ───

const UNIDAD_3: Unit = {
  title: "Possessives ('s, s' and my, your, his…)",
  topic: BLOQUE_1,
  level: 'A1',
  explain: [
    teoria(
      "1 · Posesivo con 's: el dueño va primero",
      "Para decir que algo pertenece a alguien se agrega 's al dueño y después va la cosa:\n\n• Ana's notebook = el cuaderno de Ana\n• Tom's house = la casa de Tom\n\nEn español primero va la cosa y luego «de» + el dueño; en inglés el orden es al revés y no se usa of: «the notebook of Ana» ✗ → «Ana's notebook» ✓. Sirve con personas y animales.",
      [
        ["This is Ana's notebook.", 'Este es el cuaderno de Ana.'],
        ["Tom's house is big.", 'La casa de Tom es grande.'],
        ["My mother's car is red.", 'El auto de mi mamá es rojo.'],
        ["The dog's name is Max.", 'El nombre del perro es Max.'],
      ]
    ),
    teoria(
      "2 · Posesivo con s': varios dueños",
      "Si el dueño es plural y ya termina en -s, solo se agrega el apóstrofo ('):\n\n• the boy's room → el cuarto de UN niño\n• the boys' room → el cuarto de VARIOS niños\n\nSi el plural no termina en -s (children, men, women, people), se agrega 's: the children's toys.",
      [
        ["The boys' room is small.", 'El cuarto de los niños es pequeño.'],
        ["My parents' house is near here.", 'La casa de mis padres está cerca de aquí.'],
        ["The children's toys are on the floor.", 'Los juguetes de los niños están en el piso.'],
        ["The teachers' desks are new.", 'Los escritorios de los profesores son nuevos.'],
      ]
    ),
    teoria(
      '3 · Adjetivos posesivos: my, your, his, her…',
      'Los adjetivos posesivos van ANTES del sustantivo y dicen de quién es:\n\n• my (mi) · your (tu, de ustedes)\n• his (de él) · her (de ella) · its (de un animal o una cosa)\n• our (nuestro) · their (de ellos)\n\nNunca cambian: my book, my books. Y siempre necesitan un sustantivo detrás.',
      [
        ['My name is Leo.', 'Mi nombre es Leo.'],
        ['Your phone is on the table.', 'Tu teléfono está en la mesa.'],
        ['We love our house.', 'Amamos nuestra casa.'],
        ['They are with their parents.', 'Ellos están con sus padres.'],
        ['The house is old, but its garden is beautiful.', 'La casa es vieja, pero su jardín es hermoso.'],
      ]
    ),
    teoria(
      '4 · ¿His o her? Se elige por el dueño',
      "En español «su» sirve para todos: su libro (de él, de ella, de ellos, de usted). En inglés hay que elegir según QUIÉN es el dueño, no según la cosa:\n\n• Tom → his sister\n• Ana → her brother\n• Tom y Ana → their parents\n\nEs lo mismo que decir «Ana's brother» = «her brother».",
      [
        ['Ana is with her brother.', 'Ana está con su hermano.'],
        ['Tom is with his sister.', 'Tom está con su hermana.'],
        ['Ana and Tom are with their parents.', 'Ana y Tom están con sus padres.'],
        ["It's my brother's phone. It's his phone.", 'Es el teléfono de mi hermano. Es su teléfono.'],
      ]
    ),
    teoria(
      "5 · Ojo: its / it's y their / they're",
      "its (sin apóstrofo) es posesivo: its name = su nombre. it's es it is: it's cold.\n\nPasa igual con their (de ellos) y they're (= they are), y con your (tu) y you're (= you are). Suenan igual, pero se escriben distinto.",
      [
        ['The dog is happy. Its name is Max.', 'El perro está feliz. Su nombre es Max.'],
        ["It's a nice dog.", 'Es un perro lindo.'],
        ["They're at home. Their house is big.", 'Ellos están en casa. Su casa es grande.'],
        ["You're my friend. Your car is nice.", 'Eres mi amigo. Tu auto es bonito.'],
      ]
    ),
    teoria(
      '📖 Del libro · Tener: have y have got',
      "Además de los posesivos, para decir lo que tienes (cosas, familia, características) se usa have o have got: significan lo mismo.\n\n• I have a sister = I've got a sister\n• he / she / it → has = has got\n\n«Have got» es más informal y se usa mucho en el inglés británico.",
      [
        ['I have a big family.', 'Tengo una familia grande.'],
        ["She's got two brothers.", 'Ella tiene dos hermanos.'],
        ['He has a new phone.', 'Él tiene un teléfono nuevo.'],
        ["We've got a small house.", 'Tenemos una casa pequeña.'],
      ]
    ),
    teoria(
      '📖 Del libro · Preguntas y negativas con have',
      "Con have (a secas) se usa do / does; con have got no se usa do:\n\n• Do you have a pen? · I don't have a pen\n• Have you got a pen? · I haven't got a pen\n\nLas dos formas son correctas; no las mezcles en la misma oración. En pasado solo se dice had: «I had a dog», no «I had got a dog».",
      [
        ['Do you have a pen?', '¿Tienes un bolígrafo?'],
        ['Have you got a car?', '¿Tienes auto?'],
        ["She doesn't have a phone.", 'Ella no tiene teléfono.'],
        ["I haven't got a bike.", 'No tengo bicicleta.'],
      ]
    ),
  ],
  syntaxChips: [
    fl("Un dueño (Ana's notebook)", suj('owner'), aux("'s"), resto('thing')),
    fl("Varios dueños con -s (the boys' room)", suj('owners (-s)'), aux("'"), resto('thing')),
    fl("Plural sin -s (the children's toys)", suj('irregular plural'), aux("'s"), resto('thing')),
    fl('Adjetivo posesivo (my book)', aux('my / your / his…'), resto('noun')),
  ],
  table: {
    cols: ['Pronombre', 'Posesivo', 'Ejemplo'],
    rows: [
      ['I', 'my', 'my book'],
      ['you', 'your', 'your book'],
      ['he', 'his', 'his book'],
      ['she', 'her', 'her book'],
      ['it', 'its', 'its name'],
      ['we', 'our', 'our book'],
      ['they', 'their', 'their book'],
    ],
  },
  contrastCard: {
    left: { label: "boy's — un niño", example: "The boy's room is small.", highlight: "boy's" },
    right: { label: "boys' — varios niños", example: "The boys' room is small.", highlight: "boys'" },
    caption: "El apóstrofo va antes de la s con un solo dueño (boy's) y después de la s con varios dueños (boys').",
  },
  quiz: [
    ejercicio(
      'This is my ___ house. (la casa de mi mamá)',
      "mother's",
      ['mothers', "mothers'", 'mother is'],
      "Un solo dueño (mi mamá): se agrega 's al dueño → «my mother's house». mothers es solo el plural, sin posesión."
    ),
    ejercicio(
      'The ___ room is very big. (la habitación de los niños)',
      "boys'",
      ["boy's", "boys's", 'boys'],
      "Varios dueños y el plural ya termina en -s: solo se agrega el apóstrofo → «the boys' room». boy's sería de un solo niño."
    ),
    ejercicio(
      'Ana is with ___ brother. (el hermano de Ana)',
      'her',
      ['his', 'she', 'its'],
      'El dueño es Ana (ella), así que el posesivo es her. his sería para un hombre y she no es un posesivo.'
    ),
    ejercicio(
      'We love ___ new house. (nuestra casa)',
      'our',
      ['we', 'us', 'ours'],
      'El posesivo de we es our y va antes del sustantivo: «our new house». we y us son pronombres, y ours no va antes de un sustantivo.'
    ),
    ejercicio(
      'The house is old, but ___ garden is beautiful.',
      'its',
      ["it's", 'his', 'their'],
      "its (sin apóstrofo) es el posesivo de una cosa: «its garden» = su jardín. it's significa it is."
    ),
  ],
  flashcards: [
    tarjeta("¿'s o s'?", "Un dueño: 's (the boy's book)\nVarios dueños con -s: s' (the boys' books)\nPlural sin -s: 's (the children's toys)"),
    tarjeta('Los adjetivos posesivos', 'I → my · you → your · he → his · she → her\nit → its · we → our · they → their'),
    tarjeta('¿his o her?', "Se elige por el DUEÑO, no por la cosa:\nAna's brother = her brother\nTom's sister = his sister"),
    tarjeta("¿its o it's?", "its = de él / ella / ello (cosa o animal): its name\nit's = it is: it's cold"),
    tarjeta('¿have o have got?', "Significan lo mismo (tener):\nI have a car = I've got a car"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Excuse me. Is this your phone?', translation: 'Disculpa. ¿Este es tu teléfono?' },
    { speaker: 'user', text: "No, it isn't. My phone is black. It's Ana's phone.", translation: 'No. Mi teléfono es negro. Es el teléfono de Ana.' },
    { speaker: 'other', text: 'Are these her keys, too?', translation: '¿Estas también son sus llaves?' },
    { speaker: 'user', text: "No, they're my brother's keys. Our keys are in the car.", translation: 'No, son las llaves de mi hermano. Nuestras llaves están en el auto.' },
    { speaker: 'other', text: "And is this your parents' umbrella?", translation: '¿Y este es el paraguas de tus padres?' },
    { speaker: 'user', text: 'Yes, it is. Thank you for your help!', translation: 'Sí. ¡Gracias por tu ayuda!' },
  ],
  readingText: {
    title: 'My family',
    body: "This is my family. My mother's name is Rosa and my father's name is Carlos. Their house is big, and their garden is beautiful. My sister Ana is a teacher. Her students are very happy. Her husband's name is Tom. We have a dog. Its name is Max. Our dog's favorite food is chicken. My parents' car is old, but I love it.",
    translation:
      'Esta es mi familia. Mi mamá se llama Rosa y mi papá se llama Carlos. Su casa es grande y su jardín es hermoso. Mi hermana Ana es profesora. Sus estudiantes están muy contentos. Su esposo se llama Tom. Tenemos un perro. Su nombre es Max. La comida favorita de nuestro perro es el pollo. El auto de mis padres es viejo, pero me encanta.',
  },
  tips: [
    "El dueño va primero: «Ana's book» = «el libro de Ana». Con personas no se dice «the book of Ana».",
    '«Su» en español puede ser his, her, its, your o their: elige por quién es el dueño. «Ana habla con su hermano» → «Ana talks to her brother»; «Tom habla con su hermano» → «Tom talks to his brother».',
    "No confundas its (posesivo) con it's (= it is), ni their con they're (= they are), ni your con you're (= you are).",
    "Los adjetivos posesivos no tienen plural y no llevan artículo: «my books», no «the my books» ni «my book's».",
  ],
  dailyWords: palabras('family', 'mother', 'father', 'brother', 'sister', 'husband'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Pronombre (Pronoun)', ruta: '/gramatica/concepto/el-pronombre-pronoun' },
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
    { unidad: 20 },
  ],
};

/** Las unidades del bloque 1, por número de unidad. */
export const UNIDADES_BLOQUE_1: Record<number, Unit> = {
  1: UNIDAD_1,
  2: UNIDAD_2,
  3: UNIDAD_3,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 1 que las tienen. */
export const FORMAS_BLOQUE_1: Record<number, FormasUnidad | FormasUnidad[]> = {
  1: FORMAS_1,
};
