import { aux, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_EXTRA_A2 } from '@/data/grammar/topics';
import type { PronunUnit, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque extra del A2 (ids 1001–1004): temas del libro que el plan de estudios no incluye. Son opcionales y se ven después
// del Bloque 4; su quiz es el de un tema normal (sin examen de 20).

// ─── Extra 1 (id 1001) · Noun + noun ───

const UNIDAD_1001: Unit = {
  title: 'Noun + Noun',
  topic: BLOQUE_EXTRA_A2,
  level: 'A2',
  explain: [
    teoria(
      '1 · Dos sustantivos juntos',
      'En inglés se pueden poner dos sustantivos seguidos: el primero dice de qué tipo es el segundo y el segundo es la cosa principal. En español se usa «de» y el orden es al revés:\n\n• a bus stop = una parada de autobús\n• orange juice = jugo de naranja\n• a phone number = un número de teléfono\n\nEl significado lo da el segundo sustantivo: a tennis ball es una pelota (no un tenis).',
      [
        ['I am waiting at the bus stop.', 'Estoy esperando en la parada de autobús.'],
        ['Can I have orange juice, please?', '¿Me das jugo de naranja, por favor?'],
        ['What is your phone number?', '¿Cuál es tu número de teléfono?'],
        ['He plays with a tennis ball.', 'Él juega con una pelota de tenis.'],
      ]
    ),
    teoria(
      '2 · El primer sustantivo va en singular',
      "El primer sustantivo funciona como un adjetivo y no cambia: no lleva -s aunque haya varios. Solo el segundo sustantivo se pone en plural:\n\n• a shoe shop → two shoe shops (no «shoes shops»)\n• a train ticket → three train tickets\n• a toy box → four toy boxes\n\nHay pocas excepciones, como a sports centre o a clothes shop, que ya se usan con -s.",
      [
        ['There is a shoe shop near my house.', 'Hay una zapatería cerca de mi casa.'],
        ['I bought three train tickets.', 'Compré tres boletos de tren.'],
        ['The children have two toy boxes.', 'Los niños tienen dos cajas de juguetes.'],
        ['We go to the sports centre on Fridays.', 'Vamos al centro deportivo los viernes.'],
      ]
    ),
    teoria(
      '3 · Qué relación hay entre los dos sustantivos',
      'La relación cambia según las palabras. Las más comunes:\n\n• Material: a gold ring (un anillo de oro)\n• Lugar: a kitchen table (una mesa de cocina)\n• Para qué sirve: a coffee cup (una taza para café)\n• Tiempo: a Sunday morning (una mañana de domingo)\n• Ocasión: a birthday party (una fiesta de cumpleaños)\n\nSi no estás seguro, piensa en la frase con «de» o «para» en español.',
      [
        ['She wears a gold ring.', 'Ella lleva un anillo de oro.'],
        ['We eat at the kitchen table.', 'Comemos en la mesa de la cocina.'],
        ['I love a Sunday morning walk.', 'Me encanta una caminata de domingo por la mañana.'],
        ['They had a birthday party.', 'Hicieron una fiesta de cumpleaños.'],
      ]
    ),
    teoria(
      "4 · Noun + noun o 's",
      "Para decir de quién es algo, y sobre todo si es una persona o un animal, se usa 's: my sister's car (el carro de mi hermana). Para decir de qué tipo es una cosa se usa noun + noun: a car door (la puerta de un carro).\n\n• Personas y animales → 's: the dog's bed · my father's job\n• Cosas y categorías → noun + noun: a school bag · a bus driver\n\n⚠️ Ojo: «the door of the car» también existe, pero con cosas lo normal es noun + noun.",
      [
        ["This is my sister's car.", 'Este es el carro de mi hermana.'],
        ['The car door is open.', 'La puerta del carro está abierta.'],
        ["The dog's bed is under the table.", 'La cama del perro está debajo de la mesa.'],
        ['My brother is a bus driver.', 'Mi hermano es chofer de autobús.'],
      ]
    ),
    teoria(
      '5 · Con números: a five-minute walk',
      'Cuando un número y una medida van antes de un sustantivo, forman una sola idea y la medida va en singular, con guion: a five-minute walk (una caminata de cinco minutos), no «a five-minutes walk».\n\n• a two-hour class\n• a three-day trip\n• a ten-dollar note\n\nPero sin sustantivo después, la medida va en plural: «The class is two hours long».',
      [
        ['It is a five-minute walk to the station.', 'Son cinco minutos caminando hasta la estación.'],
        ['We had a two-hour class today.', 'Hoy tuvimos una clase de dos horas.'],
        ['They went on a three-day trip.', 'Fueron de viaje por tres días.'],
        ['This is a ten-dollar note.', 'Este es un billete de diez dólares.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Noun + noun', verbo('noun 1'), suj('noun 2')),
    fl('Plural: solo el segundo', verbo('shoe'), suj('shops')),
    fl('Con medida', resto('a five-minute'), suj('walk')),
  ],
  table: {
    cols: ['Dos sustantivos', 'En español', 'Plural'],
    rows: [
      ['a bus stop', 'una parada de autobús', 'two bus stops'],
      ['a train ticket', 'un boleto de tren', 'three train tickets'],
      ['orange juice', 'jugo de naranja', '(no contable)'],
      ['a shoe shop', 'una zapatería', 'two shoe shops'],
      ['a two-hour class', 'una clase de dos horas', 'two two-hour classes'],
    ],
  },
  contrastCard: {
    left: { label: 'Noun + noun (cosas, tipos)', example: 'a school bag', highlight: 'school bag' },
    right: { label: "'s (personas y animales)", example: "my sister's bag", highlight: "sister's" },
    caption: 'De qué tipo es → noun + noun. De quién es → \'s.',
  },
  quiz: [
    ejercicio(
      'I need a ___ for the train to Cusco.',
      'train ticket',
      ['ticket train', 'trains ticket', "train's ticket"],
      'El sustantivo principal va al final y el primero lo describe: «a train ticket». Con una cosa no se usa \'s, y el primero va en singular (no «trains»).'
    ),
    ejercicio(
      'There are three ___ in this street.',
      'shoe shops',
      ['shoes shops', 'shoes shop', 'shop shoes'],
      'El primer sustantivo se queda en singular (shoe) y solo el segundo lleva -s: «three shoe shops». El orden «shop shoes» cambiaría el sentido.'
    ),
    ejercicio(
      'It is a ___ walk from here.',
      'five-minute',
      ['five-minutes', 'five minutes', 'five-minute of'],
      'Un número y una medida antes de un sustantivo forman un adjetivo y la medida va en singular con guion: «a five-minute walk».'
    ),
    ejercicio(
      'This is my ___ car.',
      "sister's",
      ['sister', 'sisters', 'of sister'],
      "Para decir de quién es algo y se trata de una persona se usa 's: «my sister's car». «sister car» no dice de quién es y «sisters» sería plural."
    ),
    ejercicio(
      'Can I have a glass of ___, please?',
      'orange juice',
      ['juice orange', 'oranges juice', 'juice of orange'],
      'El primer sustantivo dice el tipo (orange) y el segundo es lo principal (juice): «orange juice», sin -s en orange.'
    ),
  ],
  flashcards: [
    tarjeta('Noun + noun: ¿qué sustantivo es el principal?', 'El último. El primero lo describe:\na bus stop = una parada de bus\na phone number = un número de teléfono'),
    tarjeta('Plural de noun + noun', 'Solo cambia el segundo:\none shoe shop → two shoe shops'),
    tarjeta("Noun + noun o 's", "Personas y animales → 's: my sister's car\nCosas y tipos → noun + noun: a car door"),
    tarjeta('Con números', 'a five-minute walk (singular, con guion)\nThe walk is five minutes. (plural, sin sustantivo)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Excuse me. Where is the nearest bus stop?', translation: 'Disculpe. ¿Dónde está la parada de autobús más cercana?' },
    { speaker: 'user', text: "It is a five-minute walk. Go past the shoe shop and turn left.", translation: 'Está a cinco minutos caminando. Pase la zapatería y gire a la izquierda.' },
    { speaker: 'other', text: 'Thank you. Do I buy the bus ticket there?', translation: 'Gracias. ¿Compro el boleto del autobús allí?' },
    { speaker: 'user', text: 'No, you can buy it from the driver. Do you have a phone number for the company?', translation: 'No, puede comprarlo al chofer. ¿Tiene un número de teléfono de la empresa?' },
    { speaker: 'other', text: 'Yes, it is on my ticket.', translation: 'Sí, está en mi boleto.' },
    { speaker: 'user', text: 'Great. Have a nice trip!', translation: 'Genial. ¡Buen viaje!' },
  ],
  readingText: {
    title: 'A Saturday in town',
    body: "Ana has a free Saturday. She has orange juice for breakfast and then walks to the bus stop. It is a ten-minute walk. In town she goes to a shoe shop and buys two pairs of shoes. Then she meets her friend Luis at the train station. Luis has two train tickets for a two-hour trip to the beach. They are very happy.",
    translation:
      'Ana tiene un sábado libre. Desayuna jugo de naranja y luego camina a la parada de autobús. Son diez minutos caminando. En la ciudad va a una zapatería y compra dos pares de zapatos. Después se encuentra con su amigo Luis en la estación de tren. Luis tiene dos boletos de tren para un viaje de dos horas a la playa. Los dos están muy contentos.',
  },
  tips: [
    'Piensa en el sustantivo final como «la cosa» y en el primero como «el tipo»: shoe shop = tienda (de zapatos).',
    "El primer sustantivo nunca lleva -s: «a shoe shop», aunque vendan muchos zapatos. Solo pon la -s en el segundo si hay varios.",
    "Con números y medidas antes del sustantivo usa singular y guion: «a three-day trip», no «a three-days trip».",
  ],
  dailyWords: palabras('ticket', 'shop', 'phone', 'bus', 'juice', 'bank'),
  relacionados: [{ unidad: 17 }, { unidad: 20 }],
};

// ─── Extra 2 (id 1002) · During, for y while ───

const UNIDAD_1002: Unit = {
  title: 'During, For and While',
  topic: BLOQUE_EXTRA_A2,
  level: 'A2',
  explain: [
    teoria(
      '1 · During + sustantivo',
      'during significa «durante» y va seguido de un sustantivo (o de the + sustantivo): un periodo o un evento. Responde a la pregunta «¿cuándo?».\n\n• during the class (durante la clase)\n• during the summer (durante el verano)\n• during the film (durante la película)\n\n⚠️ Ojo: después de during no va un verbo conjugado: «during the meeting», no «during we are in the meeting».',
      [
        ['Please do not talk during the film.', 'Por favor no hables durante la película.'],
        ['We go to the beach during the summer.', 'Vamos a la playa durante el verano.'],
        ['My phone rang during the meeting.', 'Mi teléfono sonó durante la reunión.'],
        ['He was very quiet during dinner.', 'Estuvo muy callado durante la cena.'],
      ]
    ),
    teoria(
      '2 · For + cuánto tiempo',
      'for también se traduce «durante», pero va con una cantidad de tiempo y responde a «¿cuánto tiempo?»:\n\n• for two hours (durante dos horas)\n• for a week (por una semana)\n• for ten minutes (durante diez minutos)\n\nDespués de for hay un número (o a / an / several) y una medida de tiempo: for five years, for a long time.',
      [
        ['I studied for two hours.', 'Estudié durante dos horas.'],
        ['They lived in Lima for five years.', 'Vivieron en Lima por cinco años.'],
        ['Wait for ten minutes, please.', 'Espera diez minutos, por favor.'],
        ['She was ill for a week.', 'Estuvo enferma una semana.'],
      ]
    ),
    teoria(
      '3 · While + una oración',
      'while significa «mientras» y va seguido de una oración completa (sujeto + verbo) que dice qué está pasando al mismo tiempo:\n\n• while I wait (mientras espero)\n• while she cooks (mientras ella cocina)\n• while we are on holiday (mientras estamos de vacaciones)\n\nCon while siempre hay un sujeto y un verbo: es lo que lo distingue de during.',
      [
        ['I read a book while I wait.', 'Leo un libro mientras espero.'],
        ['He sets the table while she cooks.', 'Él pone la mesa mientras ella cocina.'],
        ['Do not talk while I am working.', 'No hables mientras estoy trabajando.'],
        ['We listen to music while we study.', 'Escuchamos música mientras estudiamos.'],
      ]
    ),
    teoria(
      '4 · During o while',
      'Las dos significan lo mismo; lo que cambia es lo que viene después:\n\n• during + sustantivo → during the meal\n• while + sujeto + verbo → while we eat\n\nPuedes decir la misma idea de las dos formas:\n• He called during the class.\n• He called while we were in class.',
      [
        ['I slept during the trip.', 'Dormí durante el viaje.'],
        ['I slept while we travelled.', 'Dormí mientras viajábamos.'],
        ['She talks during the lesson.', 'Ella habla durante la lección.'],
        ['She talks while the teacher explains.', 'Ella habla mientras la profesora explica.'],
      ]
    ),
    teoria(
      '5 · For o during',
      'for dice cuánto dura algo (una cantidad: two hours). during dice cuándo pasa algo (un periodo o evento: the night).\n\n• I studied for two hours. (cuánto tiempo)\n• I studied during the night. (cuándo)\n• It rained for three days. (cuánto)\n• It rained during the trip. (cuándo)',
      [
        ['We walked for two hours.', 'Caminamos durante dos horas.'],
        ['We walked during the morning.', 'Caminamos durante la mañana.'],
        ['It rained for three days.', 'Llovió por tres días.'],
        ['It rained during the trip.', 'Llovió durante el viaje.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('During + noun', aux('during'), suj('the + noun')),
    fl('For + cantidad', aux('for'), suj('number + time')),
    fl('While + oración', aux('while'), suj('subject'), verbo('verb')),
  ],
  table: {
    cols: ['Palabra', 'Va con', 'Responde a', 'Ejemplo'],
    rows: [
      ['during', 'sustantivo', '¿cuándo?', 'during the class'],
      ['for', 'cantidad de tiempo', '¿cuánto tiempo?', 'for two hours'],
      ['while', 'sujeto + verbo', '¿mientras qué?', 'while I wait'],
    ],
  },
  contrastCard: {
    left: { label: 'for → cuánto dura', example: 'I studied for two hours.', highlight: 'for' },
    right: { label: 'during → cuándo pasa', example: 'I studied during the night.', highlight: 'during' },
    caption: 'for + número de tiempo. during + un periodo o evento. while + sujeto y verbo.',
  },
  quiz: [
    ejercicio(
      'I fell asleep ___ the film.',
      'during',
      ['while', 'for', 'when'],
      'Después de la palabra va un sustantivo (the film), no una oración: se usa during. while y when necesitan sujeto y verbo, y for necesita una cantidad de tiempo.'
    ),
    ejercicio(
      "Please don't talk ___ I am working.",
      'while',
      ['during', 'for', 'in'],
      'Después de la palabra hay una oración completa (I am working), así que va while. during es para sustantivos y for para cantidades de tiempo.'
    ),
    ejercicio(
      'We lived in Lima ___ five years.',
      'for',
      ['during', 'while', 'since'],
      'five years es una cantidad de tiempo que dice cuánto duró, así que va for. during va con un periodo (the summer) y while con una oración.'
    ),
    ejercicio(
      'The phone rang ___ the meeting.',
      'during',
      ['while', 'for', 'at'],
      'the meeting es un evento (un sustantivo), así que va during. while necesitaría una oración («while we were in the meeting»).'
    ),
    ejercicio(
      '___ she cooks, he sets the table.',
      'While',
      ['During', 'For', 'Since'],
      'Después de la palabra hay sujeto y verbo (she cooks), así que va While («mientras»). During y For no se combinan con una oración.'
    ),
  ],
  flashcards: [
    tarjeta('During', 'durante + sustantivo (un periodo o evento)\nduring the class · during the summer'),
    tarjeta('For', 'durante + cantidad de tiempo\nfor two hours · for a week · for five years'),
    tarjeta('While', 'mientras + sujeto + verbo\nwhile I wait · while she cooks'),
    tarjeta('For o during', 'for = cuánto dura (two hours)\nduring = cuándo pasa (the night)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'How was your trip to the mountains?', translation: '¿Cómo estuvo tu viaje a las montañas?' },
    { speaker: 'user', text: 'Great! We stayed there for four days.', translation: '¡Genial! Nos quedamos allá cuatro días.' },
    { speaker: 'other', text: 'Was the weather good?', translation: '¿Hizo buen tiempo?' },
    { speaker: 'user', text: 'It rained during the first day, but then it was sunny.', translation: 'Llovió durante el primer día, pero luego hizo sol.' },
    { speaker: 'other', text: 'What did you do while it rained?', translation: '¿Qué hicieron mientras llovía?' },
    { speaker: 'user', text: 'We played cards and drank hot chocolate.', translation: 'Jugamos cartas y tomamos chocolate caliente.' },
  ],
  readingText: {
    title: 'My grandmother',
    body: 'My grandmother lived in a small village for forty years. During the summer I visited her every week. We cooked together, and she told me stories while we cooked. I always listened carefully. During the winter she stayed at home and read books. She read for two hours every night. I love her very much.',
    translation:
      'Mi abuela vivió cuarenta años en un pueblo pequeño. Durante el verano la visitaba cada semana. Cocinábamos juntas, y ella me contaba historias mientras cocinábamos. Yo siempre escuchaba con atención. Durante el invierno se quedaba en casa y leía libros. Leía dos horas cada noche. La quiero mucho.',
  },
  tips: [
    'Mira lo que viene después: un sustantivo → during; una cantidad de tiempo → for; sujeto + verbo → while.',
    'for responde a «¿cuánto tiempo?» y during a «¿cuándo?»: «for two hours», «during the night».',
    'En español todas se traducen «durante» o «mientras», por eso se confunden: la gramática de lo que sigue es lo que decide.',
  ],
  dailyWords: palabras('summer', 'winter', 'night', 'week', 'trip', 'hour'),
  relacionados: [{ unidad: 21 }, { unidad: 15 }],
};

// ─── Extra 3 (id 1003) · To, at, in e into ───

const UNIDAD_1003: Unit = {
  title: 'To, At, In and Into',
  topic: BLOQUE_EXTRA_A2,
  level: 'A2',
  explain: [
    teoria(
      '1 · To: movimiento hacia un lugar',
      'to se usa con verbos de movimiento (go, walk, come, drive, travel) para decir hacia dónde vas:\n\n• go to school · walk to the station · come to my house\n• Con home no se usa to: «go home», no «go to home».\n\nTambién se usa to con personas: talk to Ana, give it to him.',
      [
        ['I walk to school every day.', 'Voy caminando a la escuela todos los días.'],
        ['She goes to the gym on Mondays.', 'Ella va al gimnasio los lunes.'],
        ['Please come to my party.', 'Por favor ven a mi fiesta.'],
        ['I go home at six.', 'Voy a casa a las seis.'],
      ]
    ),
    teoria(
      '2 · At: un punto o un evento',
      'at se usa para decir dónde estás cuando piensas en el lugar como un punto o una actividad: at home, at work, at school, at the station, at the bus stop, at a party, at the cinema.\n\nTambién con direcciones y con arrive at (lugares pequeños): arrive at the station, arrive at the hotel.',
      [
        ['She is at work now.', 'Ella está en el trabajo ahora.'],
        ['I am waiting at the bus stop.', 'Estoy esperando en la parada de autobús.'],
        ['We were at a party last night.', 'Estuvimos en una fiesta anoche.'],
        ['They arrive at the hotel at nine.', 'Llegan al hotel a las nueve.'],
      ]
    ),
    teoria(
      '3 · In: dentro de un espacio, ciudades y países',
      'in se usa para estar dentro de un espacio cerrado o un lugar grande: in the kitchen, in a car, in the box. También con ciudades y países: in Lima, in Peru, in Europe.\n\nCon ciudades y países se usa arrive in: arrive in Madrid. Con espacios pequeños y puntos se usa at.',
      [
        ['The milk is in the fridge.', 'La leche está en el refrigerador.'],
        ['We are in the car.', 'Estamos en el carro.'],
        ['My parents live in Cusco.', 'Mis padres viven en Cusco.'],
        ['They arrive in Madrid tomorrow.', 'Llegan a Madrid mañana.'],
      ]
    ),
    teoria(
      '4 · Into: entrar en un lugar',
      'into dice que alguien o algo pasa de afuera hacia adentro. Se usa con verbos de movimiento:\n\n• walk into the room (entrar caminando al cuarto)\n• get into the car (subir al carro)\n• jump into the water (saltar al agua)\n\nin dice dónde está algo; into dice hacia dónde entra: «The cat is in the box» · «The cat jumped into the box».',
      [
        ['She opened the door and walked into the room.', 'Ella abrió la puerta y entró al cuarto.'],
        ['He jumped into the water.', 'Él saltó al agua.'],
        ['Put the books into the bag.', 'Pon los libros dentro de la bolsa.'],
        ['The cat is in the box.', 'El gato está en la caja.'],
      ]
    ),
    teoria(
      '5 · Subir y bajar: get in, get on, get off',
      'Con carros y taxis se dice get in / get out of: «Get in the taxi», «Get out of the car». Con transportes grandes (bus, tren, avión, barco) se dice get on / get off: «Get on the bus», «Get off the train».\n\n• carro, taxi → in / out of\n• bus, tren, avión → on / off',
      [
        ['Get in the taxi, please.', 'Sube al taxi, por favor.'],
        ['He got out of the car.', 'Él bajó del carro.'],
        ['Get on the bus at the corner.', 'Sube al autobús en la esquina.'],
        ['We get off the train in Lima.', 'Nos bajamos del tren en Lima.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Movimiento', verbo('go / walk'), aux('to'), suj('place')),
    fl('Lugar (punto)', verbo('be'), aux('at'), suj('place')),
    fl('Entrar', verbo('walk / jump'), aux('into'), suj('place')),
  ],
  table: {
    cols: ['Palabra', 'Idea', 'Ejemplo'],
    rows: [
      ['to', 'hacia un lugar', 'I walk to school.'],
      ['at', 'en un punto o evento', 'She is at work.'],
      ['in', 'dentro / ciudad / país', 'He lives in Lima.'],
      ['into', 'entrar en', 'She walked into the room.'],
    ],
  },
  contrastCard: {
    left: { label: 'in → dónde está', example: 'The cat is in the box.', highlight: 'in' },
    right: { label: 'into → hacia adentro', example: 'The cat jumped into the box.', highlight: 'into' },
    caption: 'in = estar dentro. into = pasar de afuera hacia adentro (con verbos de movimiento).',
  },
  quiz: [
    ejercicio(
      'I walk ___ school every morning.',
      'to',
      ['at', 'in', 'into'],
      'walk es un verbo de movimiento y school es el destino: se usa to. at y in dicen dónde estás, no hacia dónde vas.'
    ),
    ejercicio(
      'He is waiting ___ the bus stop.',
      'at',
      ['in', 'into', 'to'],
      'La parada es un punto donde esperas: se usa at. in es para espacios cerrados y into y to son de movimiento.'
    ),
    ejercicio(
      'She opened the door and walked ___ the room.',
      'into',
      ['at', 'of', 'by'],
      'walked es movimiento de afuera hacia adentro del cuarto: se usa into. at, of y by no expresan entrar en un lugar.'
    ),
    ejercicio(
      'My parents live ___ Cusco.',
      'in',
      ['at', 'to', 'into'],
      'Con ciudades y países se usa in para decir dónde viven. to e into son de movimiento y at es para puntos pequeños.'
    ),
    ejercicio(
      'Get ___ the taxi, please.',
      'in',
      ['on', 'at', 'to'],
      'Con carros y taxis se usa get in (y get out of). get on es para bus, tren o avión.'
    ),
  ],
  flashcards: [
    tarjeta('to', 'hacia un lugar (con movimiento)\ngo to school · walk to the station\ngo home (sin to)'),
    tarjeta('at', 'un punto o evento\nat home · at work · at the bus stop · at a party'),
    tarjeta('in / into', 'in = dentro, ciudades y países: in the box · in Lima\ninto = hacia adentro: walk into the room'),
    tarjeta('Subir y bajar', 'taxi, carro → get in / get out of\nbus, tren, avión → get on / get off'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Where are you now?', translation: '¿Dónde estás ahora?' },
    { speaker: 'user', text: 'I am at the station. I am waiting for the train.', translation: 'Estoy en la estación. Estoy esperando el tren.' },
    { speaker: 'other', text: 'Are you going to work?', translation: '¿Vas al trabajo?' },
    { speaker: 'user', text: 'No, I am going to my sister\'s house in Arequipa.', translation: 'No, voy a la casa de mi hermana en Arequipa.' },
    { speaker: 'other', text: 'Get on the first train. It arrives in Arequipa at six.', translation: 'Súbete al primer tren. Llega a Arequipa a las seis.' },
    { speaker: 'user', text: 'Thanks! I am getting on now.', translation: '¡Gracias! Me estoy subiendo ahora.' },
  ],
  readingText: {
    title: 'A busy morning',
    body: 'Tom wakes up at seven and goes to the kitchen. He has breakfast at the table. At eight he walks to the bus stop. He gets on the bus and goes to work. At the office he walks into the meeting room. His boss is already there. After work he goes home and gets into bed early.',
    translation:
      'Tom se despierta a las siete y va a la cocina. Desayuna en la mesa. A las ocho camina a la parada de autobús. Sube al autobús y va al trabajo. En la oficina entra a la sala de reuniones. Su jefe ya está allí. Después del trabajo va a casa y se mete a la cama temprano.',
  },
  tips: [
    '«Ir a casa» es go home, sin to. Con otros lugares sí: go to school, go to the bank.',
    'Piensa: in = dentro, at = en ese punto, to = hacia, into = hacia adentro. La mayoría de errores vienen de usar in con movimiento.',
    'Taxi y carro son «pequeños» (in / out of); bus, tren y avión son «grandes» (on / off).',
  ],
  dailyWords: palabras('home', 'station', 'kitchen', 'room', 'car', 'city'),
  relacionados: [{ unidad: 14 }, { unidad: 20 }],
};

// ─── Extra 4 (id 1004) · Phrasal verbs: introducción ───

const UNIDAD_1004: Unit = {
  title: 'Phrasal Verbs: Introduction',
  topic: BLOQUE_EXTRA_A2,
  level: 'A2',
  explain: [
    teoria(
      '1 · Qué es un phrasal verb',
      'Un phrasal verb es un verbo + una partícula (up, down, on, off, in, out…). Juntos tienen un significado que a veces no se adivina:\n\n• get up = levantarse\n• turn on = encender\n• look for = buscar\n\nLa partícula cambia el significado: look (mirar) · look for (buscar) · look after (cuidar).',
      [
        ['I get up at six.', 'Me levanto a las seis.'],
        ['Please turn on the light.', 'Por favor enciende la luz.'],
        ['I am looking for my keys.', 'Estoy buscando mis llaves.'],
        ['She looks after her little brother.', 'Ella cuida a su hermano pequeño.'],
      ]
    ),
    teoria(
      '2 · Phrasal verbs sin objeto',
      'Algunos no llevan objeto: la acción termina en el verbo.\n\n• wake up (despertarse) · get up (levantarse)\n• sit down (sentarse) · stand up (ponerse de pie)\n• come in (entrar) · go out (salir)\n• come back (volver)\n\nSe dicen siempre juntos y en ese orden.',
      [
        ['I wake up at seven.', 'Me despierto a las siete.'],
        ['Please sit down.', 'Por favor siéntate.'],
        ['Come in, the door is open.', 'Entra, la puerta está abierta.'],
        ['They go out on Saturdays.', 'Ellos salen los sábados.'],
      ]
    ),
    teoria(
      '3 · Con objeto: puedes separarlos',
      'Muchos phrasal verbs con objeto se pueden separar: el objeto va después de la partícula o entre el verbo y la partícula:\n\n• Turn on the light. = Turn the light on.\n• Put on your jacket. = Put your jacket on.\n\n⚠️ Con un pronombre (it, them, him, her) el pronombre va SIEMPRE en medio: «Turn it on», no «Turn on it».',
      [
        ['Turn on the radio.', 'Enciende la radio.'],
        ['Turn the radio on.', 'Enciende la radio (separado).'],
        ['The light is off. Turn it on.', 'La luz está apagada. Enciéndela.'],
        ['Take off your shoes. Take them off now.', 'Quítate los zapatos. Quítatelos ya.'],
      ]
    ),
    teoria(
      '4 · Los que no se separan',
      'Algunos phrasal verbs terminan en una preposición y no se pueden separar: el objeto va siempre después.\n\n• look for the keys → look for them\n• look after the baby → look after her\n• get on the bus\n\nNo se dice «look the keys for».',
      [
        ['I am looking for my phone.', 'Estoy buscando mi teléfono.'],
        ['She looks after the baby.', 'Ella cuida al bebé.'],
        ['We get on the bus at eight.', 'Nos subimos al autobús a las ocho.'],
        ['Look at the photo.', 'Mira la foto.'],
      ]
    ),
    teoria(
      '5 · Los más comunes del día a día',
      'Para empezar, aprende estos y úsalos en frases completas:\n\n• get up / wake up · sit down / stand up\n• turn on / turn off · put on / take off\n• come in / go out · give up (rendirse)\n• pick up (recoger) · look for\n\nNo traduzcas partícula por partícula: aprende el significado completo.',
      [
        ['Don\'t give up!', '¡No te rindas!'],
        ['Can you pick up the kids at five?', '¿Puedes recoger a los niños a las cinco?'],
        ['Turn off the TV, please.', 'Apaga la tele, por favor.'],
        ['I take off my shoes at home.', 'Me quito los zapatos en casa.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Verbo + partícula', verbo('get'), aux('up')),
    fl('Separable', verbo('turn'), suj('the light'), aux('on')),
    fl('Con pronombre', verbo('turn'), suj('it'), aux('on')),
  ],
  table: {
    cols: ['Phrasal verb', 'Significado', 'Ejemplo'],
    rows: [
      ['get up', 'levantarse', 'I get up at six.'],
      ['turn on / off', 'encender / apagar', 'Turn it off.'],
      ['put on / take off', 'ponerse / quitarse', 'Put on your coat.'],
      ['look for', 'buscar', 'I look for my keys.'],
      ['give up', 'rendirse', "Don't give up!"],
    ],
  },
  contrastCard: {
    left: { label: 'Con sustantivo', example: 'Turn on the light. / Turn the light on.', highlight: 'on' },
    right: { label: 'Con pronombre', example: 'Turn it on.', highlight: 'it' },
    caption: 'Con un pronombre (it, them, him) va siempre en medio: «turn it on».',
  },
  quiz: [
    ejercicio(
      'It is dark in here. Please ___ the light.',
      'turn on',
      ['turn off', 'put off', 'take off'],
      'Si está oscuro quieres encender la luz: turn on. turn off la apaga, put off significa posponer y take off es quitarse algo.'
    ),
    ejercicio(
      'It is cold outside. ___ your jacket.',
      'Put on',
      ['Take off', 'Turn on', 'Get on'],
      'Si hace frío te pones la chaqueta: put on. take off es quitársela y turn on o get on no se usan con ropa.'
    ),
    ejercicio(
      'I am looking ___ my keys. I cannot find them.',
      'for',
      ['to', 'at', 'into'],
      'look for significa buscar. look at es mirar y look to o look into no tienen el sentido de buscar algo que se perdió.'
    ),
    ejercicio(
      'She ___ her shoes at the door.',
      'took off',
      ['put off', 'turned off', 'got off'],
      'take off con ropa y zapatos significa quitárselos: «took off her shoes». put off es posponer, turned off es apagar y got off es bajarse de un transporte.'
    ),
    ejercicio(
      'The radio is loud. ¿Qué frase es correcta?',
      'Turn it off.',
      ['Turn off it.', 'Turn it up off.', 'It turn off.'],
      'Con un pronombre (it) este phrasal verb se separa y el pronombre va en medio: «Turn it off». «Turn off it» es incorrecta.'
    ),
  ],
  flashcards: [
    tarjeta('Phrasal verb', 'verbo + partícula con un significado propio\nget up = levantarse · look for = buscar'),
    tarjeta('Separables', 'Turn on the light = Turn the light on\nCon pronombre: Turn it on (nunca «turn on it»)'),
    tarjeta('Los más comunes', 'get up · sit down · come in · go out\nturn on / off · put on / take off · give up'),
    tarjeta('No se separan', 'look for the keys → look for them\nlook after the baby → look after her'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Come in! Sit down, please.', translation: '¡Pasa! Siéntate, por favor.' },
    { speaker: 'user', text: 'Thank you. Can I take off my coat?', translation: 'Gracias. ¿Puedo quitarme el abrigo?' },
    { speaker: 'other', text: 'Of course. I am looking for the remote. Do you see it?', translation: 'Claro. Estoy buscando el control remoto. ¿Lo ves?' },
    { speaker: 'user', text: 'Here it is. Do you want me to turn on the TV?', translation: 'Aquí está. ¿Quieres que encienda la tele?' },
    { speaker: 'other', text: 'Yes, turn it on, please. The match starts at eight.', translation: 'Sí, enciéndela, por favor. El partido empieza a las ocho.' },
    { speaker: 'user', text: 'Great! I do not give up easily, so I hope we win.', translation: '¡Genial! Yo no me rindo fácil, así que espero que ganemos.' },
  ],
  readingText: {
    title: 'A normal day',
    body: 'I wake up at six and get up at half past six. I put on my clothes and have breakfast. Before I leave, I turn off the lights. At work I look for my files and turn on my computer. In the evening I come back home, take off my shoes and sit down. I never give up my English classes!',
    translation:
      'Me despierto a las seis y me levanto a las seis y media. Me pongo la ropa y desayuno. Antes de salir, apago las luces. En el trabajo busco mis archivos y enciendo la computadora. Por la tarde vuelvo a casa, me quito los zapatos y me siento. ¡Yo nunca abandono mis clases de inglés!',
  },
  tips: [
    'Aprende cada phrasal verb como una palabra nueva con su propio significado, no por partes.',
    'Con pronombres, el pronombre va en medio: turn it on, take them off, pick him up.',
    'Si dudas, usa la forma separada con sustantivo (turn the light on): funciona en casi todos los phrasal verbs con objeto.',
  ],
  dailyWords: palabras('wake up', 'get up', 'wear', 'door', 'light', 'key'),
  relacionados: [{ unidad: 21 }, { unidad: 24 }],
};

/** Las unidades del bloque extra del A2. */
export const UNIDADES_EXTRA_A2: Record<number, Unit> = {
  1001: UNIDAD_1001,
  1002: UNIDAD_1002,
  1003: UNIDAD_1003,
  1004: UNIDAD_1004,
};

/** La pronunciación de las unidades del bloque extra del A2. */
export const PRONUN_EXTRA_A2: Record<number, PronunUnit> = {
  1001: {
    tips: [
      {
        head: 'El acento va en el primer sustantivo',
        body: 'En dos sustantivos juntos la voz sube en el primero: BUS stop, PHONE number. Si fueran un adjetivo y un sustantivo, el acento va en el segundo: a red CAR.',
        examples: ['bus stop /ˈbʌs stɑːp/', 'phone number /ˈfoʊn ˌnʌmbər/', 'a red car /ə red ˈkɑːr/'],
      },
      {
        head: 'La -s final del plural',
        body: 'La -s del plural suena /s/ después de sonidos sordos (shops) y /z/ después de sonidos sonoros (tickets suena /s/, buses suena /ɪz/).',
        examples: ['shops /ʃɑːps/', 'tickets /ˈtɪkɪts/', 'buses /ˈbʌsɪz/'],
      },
    ],
    vocab: palabras('ticket', 'shop', 'phone', 'bus', 'juice'),
  },
  1002: {
    tips: [
      {
        head: 'during',
        body: 'during se dice /ˈdʊrɪŋ/: la u es corta, como una u española, y el acento va en la primera sílaba. La -ing final suena /ɪŋ/.',
        examples: ['during /ˈdʊrɪŋ/', 'during the class /ˈdʊrɪŋ ðə klæs/'],
      },
      {
        head: 'for y while',
        body: 'for suena casi siempre débil, /fər/. while empieza con /w/ y lleva una l: /waɪl/.',
        examples: ['for two hours /fər tuː ˈaʊərz/', 'while /waɪl/', 'while I wait /waɪl aɪ ˈweɪt/'],
      },
    ],
    vocab: palabras('summer', 'winter', 'night', 'week', 'hour'),
  },
  1003: {
    tips: [
      {
        head: 'to y at suenan débiles',
        body: 'En una frase normal to suena /tə/ y at suena /ət/: se pegan a la palabra siguiente. Solo se dicen fuertes (/tuː/, /æt/) al final o con énfasis.',
        examples: ['to school /tə ˈskuːl/', 'at home /ət ˈhoʊm/', 'at the station /ət ðə ˈsteɪʃn/'],
      },
      {
        head: 'in e into',
        body: 'in suena /ɪn/, corta, como una i española muy breve. into se dice /ˈɪntuː/ o /ˈɪntə/ y el acento va en in.',
        examples: ['in the car /ɪn ðə ˈkɑːr/', 'into the room /ˈɪntə ðə ˈruːm/'],
      },
    ],
    vocab: palabras('home', 'station', 'kitchen', 'room', 'car'),
  },
  1004: {
    tips: [
      {
        head: 'El acento va en la partícula',
        body: 'En un phrasal verb la voz sube en la partícula, no en el verbo: get UP, turn ON, take OFF. Con pronombres también: turn it ON.',
        examples: ['get up /ˌɡet ˈʌp/', 'turn on /ˌtɜːrn ˈɑːn/', 'turn it off /ˌtɜːrn ɪt ˈɔːf/'],
      },
      {
        head: 'Se pegan al hablar',
        body: 'Verbo y partícula se dicen como una sola palabra: wake up suena /ˈweɪkʌp/ y put on suena /ˈpʊtɑːn/. La t final casi se une a la vocal siguiente.',
        examples: ['wake up /ˈweɪkʌp/', 'put on /ˈpʊtɑːn/', 'pick it up /ˈpɪk ɪt ʌp/'],
      },
    ],
    vocab: palabras('wake up', 'get up', 'wear', 'door', 'key'),
  },
};
