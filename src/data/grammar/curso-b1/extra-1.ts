import { aux, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_EXTRA_B1 } from '@/data/grammar/topics';
import type { PronunUnit, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque extra del B1, parte 1 (ids 1101–1104): temas del libro que el plan de estudios no incluye.

// ─── Extra 1 (id 1101) · Although, though, even though y so that ───

const UNIDAD_1101: Unit = {
  title: 'Although, Though, Even Though and So That',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Although: aunque, a pesar de que',
      'although une dos ideas que se oponen y va seguido de una oración completa (sujeto + verbo). La parte con although puede ir al principio (con coma) o al final:\n\n• Although it was raining, we went out.\n• We went out although it was raining.\n\n⚠️ Ojo: no se dice «Although it was raining, but we went out»: se usa although o but, nunca los dos en la misma frase.',
      [
        ['Although it was cold, we went swimming.', 'Aunque hacía frío, fuimos a nadar.'],
        ['She passed the exam although she did not study much.', 'Aprobó el examen aunque no estudió mucho.'],
        ['Although he is rich, he lives in a small flat.', 'Aunque es rico, vive en un departamento pequeño.'],
        ['I like the city although it is very noisy.', 'Me gusta la ciudad aunque es muy ruidosa.'],
      ]
    ),
    teoria(
      '2 · Though: más informal, y al final de la frase',
      'though significa lo mismo que although y se usa mucho al hablar. Además puede ir al final de una frase para añadir un contraste («sin embargo», «aunque»):\n\n• Though it was late, we kept talking.\n• The food was good. The service was slow, though.\n\nAl final de la frase siempre lleva coma antes: «…, though.»',
      [
        ['Though he was tired, he helped us.', 'Aunque estaba cansado, nos ayudó.'],
        ['The flat is nice. It is expensive, though.', 'El departamento es bonito. Eso sí, es caro.'],
        ['I like her. I do not trust her, though.', 'Me cae bien. Aunque no confío en ella.'],
        ['It was a great film. I was sleepy, though.', 'Fue una gran película. Aunque tenía sueño.'],
      ]
    ),
    teoria(
      '3 · Even though: aunque con más fuerza',
      'even though es un although más fuerte: marca que el contraste es sorprendente («aun cuando», «a pesar de que»). Se usa igual: seguido de sujeto + verbo.\n\n• Even though she was ill, she went to work.\n• He bought the car even though it was expensive.\n\nNo se escribe «even although».',
      [
        ['Even though she was ill, she went to work.', 'A pesar de que estaba enferma, fue a trabajar.'],
        ['He bought the car even though it was very expensive.', 'Compró el carro aun cuando era carísimo.'],
        ['They are happy even though they have little money.', 'Son felices aun cuando tienen poco dinero.'],
        ['I kept running even though my legs hurt.', 'Seguí corriendo aunque me dolían las piernas.'],
      ]
    ),
    teoria(
      '4 · Although o but / however',
      'although, but y however expresan contraste, pero se construyen distinto:\n\n• Although + oración, oración → Although he is rich, he is unhappy.\n• Oración, but + oración → He is rich, but he is unhappy.\n• Oración. However, oración → He is rich. However, he is unhappy.\n\nNo se mezclan: «Although he is rich, but he is unhappy» es incorrecto.',
      [
        ['Although he is rich, he is unhappy.', 'Aunque es rico, es infeliz.'],
        ['He is rich, but he is unhappy.', 'Es rico, pero es infeliz.'],
        ['He is rich. However, he is unhappy.', 'Es rico. Sin embargo, es infeliz.'],
        ['The test was difficult. However, I passed.', 'El examen fue difícil. Sin embargo, aprobé.'],
      ]
    ),
    teoria(
      '5 · So that: para que',
      'so that expresa el propósito de una acción y va seguido de una oración con su propio sujeto, casi siempre con can, could, will o would:\n\n• I speak slowly so that everyone can understand.\n• She left early so that she would not miss the train.\n\nSi el sujeto es el mismo se usa to + verbo (I study to pass); si cambia, so that + oración.',
      [
        ['I speak slowly so that everyone can understand me.', 'Hablo despacio para que todos me entiendan.'],
        ['She left early so that she would not miss the train.', 'Salió temprano para no perder el tren.'],
        ['Write it down so that you will not forget.', 'Anótalo para que no lo olvides.'],
        ['I study every day to pass the exam.', 'Estudio todos los días para aprobar el examen.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Although', aux('Although'), suj('subject'), verbo('verb'), resto(', clause')),
    fl('Though al final', resto('clause'), aux(', though')),
    fl('So that', resto('clause'), aux('so that'), suj('subject'), aux('can / would')),
  ],
  table: {
    cols: ['Palabra', 'Va con', 'Ejemplo'],
    rows: [
      ['although', 'sujeto + verbo', 'Although it rained, we went out.'],
      ['though', 'sujeto + verbo / al final', 'It is nice. It is dear, though.'],
      ['even though', 'sujeto + verbo (más fuerte)', 'Even though he was ill, he worked.'],
      ['but', 'entre dos oraciones', 'It rained, but we went out.'],
      ['so that', 'sujeto + can / would', 'I speak slowly so that you can understand.'],
    ],
  },
  contrastCard: {
    left: { label: 'Although (una frase)', example: 'Although he is rich, he is unhappy.', highlight: 'Although' },
    right: { label: 'But (dos partes)', example: 'He is rich, but he is unhappy.', highlight: 'but' },
    caption: 'Usa although o but, nunca los dos juntos.',
  },
  quiz: [
    ejercicio(
      '___ it was raining, we played football.',
      'Although',
      ['Despite', 'However', 'Because'],
      'Se necesita una palabra de contraste seguida de una oración (it was raining): Although. Despite va con un sustantivo o -ing, However empieza otra frase y Because da una razón.'
    ),
    ejercicio(
      'I like the flat. It is expensive, ___.',
      'though',
      ['although', 'even though', 'despite'],
      'Al final de una frase, con coma, solo se usa though: «It is expensive, though». Although, even though y despite no se usan al final.'
    ),
    ejercicio(
      'She kept working ___ she was very tired.',
      'even though',
      ['despite', 'however', 'because'],
      'Después de la palabra hay una oración (she was very tired) y el contraste es fuerte: even though. Despite necesita un sustantivo o -ing y however va en otra frase.'
    ),
    ejercicio(
      '¿Cuál de estas frases es correcta?',
      'Although he is rich, he is not happy.',
      ['Although he is rich, but he is not happy.', 'Despite he is rich, he is not happy.', 'However he is rich, he is not happy.'],
      'Con although no se agrega but: «Although he is rich, he is not happy». Despite necesita un sustantivo o -ing y However no une dos partes de una misma frase.'
    ),
    ejercicio(
      'I wrote the address down ___ I would not forget it.',
      'so that',
      ['in order', 'for', 'to'],
      'Después viene una oración completa con su propio verbo (I would not forget it): so that. in order y to van seguidos de un verbo en infinitivo, y for no se usa así.'
    ),
  ],
  flashcards: [
    tarjeta('Although / even though', 'aunque + sujeto + verbo\nAlthough it was cold, we went out.\nEven though = más fuerte'),
    tarjeta('Though al final', 'It is nice. It is expensive, though.\n(sin embargo / aunque, con coma antes)'),
    tarjeta('Although o but', 'Although he is rich, he is sad.\nHe is rich, but he is sad.\nNunca: although … but'),
    tarjeta('So that', 'para que + sujeto + can / would\nI speak slowly so that you can understand.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'How was your holiday in the mountains?', translation: '¿Cómo estuvieron tus vacaciones en las montañas?' },
    { speaker: 'user', text: 'Great, although it rained every day.', translation: 'Geniales, aunque llovió todos los días.' },
    { speaker: 'other', text: 'Did you still go out?', translation: '¿Aun así salían?' },
    { speaker: 'user', text: 'Yes, even though it was cold. We wore warm coats so that we would not get ill.', translation: 'Sí, aun cuando hacía frío. Llevábamos abrigos gruesos para no enfermarnos.' },
    { speaker: 'other', text: 'And the hotel?', translation: '¿Y el hotel?' },
    { speaker: 'user', text: 'It was lovely. A bit expensive, though.', translation: 'Era precioso. Un poco caro, eso sí.' },
  ],
  readingText: {
    title: 'A hard decision',
    body: 'Carla loves her job, although she works long hours. Even though the salary is not high, she enjoys helping customers. Last month she got a better offer from another company. The money was good, though the office was far from her home. She thought about it for a week. In the end she stayed, so that she could keep her friends and her free time.',
    translation:
      'A Carla le encanta su trabajo, aunque trabaja muchas horas. A pesar de que el sueldo no es alto, disfruta ayudando a los clientes. El mes pasado recibió una oferta mejor de otra empresa. El dinero era bueno, aunque la oficina quedaba lejos de su casa. Lo pensó durante una semana. Al final se quedó, para poder conservar a sus amigos y su tiempo libre.',
  },
  tips: [
    'Con although, though y even though siempre sigue una oración con sujeto y verbo. Con despite o in spite of sigue un sustantivo o un verbo en -ing.',
    'No mezcles although con but: elige uno. En español «aunque … pero» suena natural, en inglés no.',
    'though al final de la frase es muy típico del inglés hablado para suavizar un comentario: «It is good, though».',
  ],
  dailyWords: palabras('although', 'though', 'even though', 'so that', 'however', 'because'),
  relacionados: [
    { etiqueta: '📖 Gramática: Palabras de Enlace', ruta: '/gramatica/concepto/palabras-de-enlace-linking-words' },
    { unidad: 1102 },
  ],
};

// ─── Extra 2 (id 1102) · In case, unless y as long as ───

const UNIDAD_1102: Unit = {
  title: 'In Case, Unless and As Long As',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · In case: por si acaso',
      'in case se usa para hablar de una precaución: haces algo ahora por si pasa algo después. Después de in case se usa el presente (no will):\n\n• Take an umbrella in case it rains. (por si llueve)\n• I always carry a charger in case my phone dies.\n\n⚠️ Ojo: «in case it rains», no «in case it will rain».',
      [
        ['Take an umbrella in case it rains.', 'Lleva un paraguas por si llueve.'],
        ['I always carry a charger in case my phone dies.', 'Siempre llevo un cargador por si se me apaga el teléfono.'],
        ['Write down my number in case you need help.', 'Anota mi número por si necesitas ayuda.'],
        ['We bought extra food in case more guests came.', 'Compramos más comida por si venían más invitados.'],
      ]
    ),
    teoria(
      '2 · In case en el pasado',
      'Para hablar de una precaución en el pasado, después de in case se usa el pasado simple:\n\n• I took a sandwich in case I got hungry.\n• She left the window open in case the cat wanted to come in.\n\nLa acción principal (took, left) pasó primero, y lo que podía pasar (got hungry) es la razón.',
      [
        ['I took a sandwich in case I got hungry.', 'Llevé un sándwich por si me daba hambre.'],
        ['She left a light on in case he came home late.', 'Dejó una luz encendida por si él llegaba tarde.'],
        ['We packed warm clothes in case it got cold.', 'Empacamos ropa abrigada por si hacía frío.'],
        ['He saved some money in case he lost his job.', 'Ahorró algo de dinero por si perdía su trabajo.'],
      ]
    ),
    teoria(
      '3 · Unless: a menos que',
      'unless significa «a menos que» y equivale a if … not. Después de unless se usa el presente simple, no will, y no se agrega otra negación:\n\n• I will not go unless you come with me. (= if you do not come)\n• Unless you hurry, you will miss the bus.\n\n⚠️ Ojo: «Unless you don\'t hurry» es incorrecto: unless ya es negativo.',
      [
        ['I will not go unless you come with me.', 'No iré a menos que vengas conmigo.'],
        ['Unless you hurry, you will miss the bus.', 'A menos que te apures, perderás el autobús.'],
        ['We will start the game unless it rains.', 'Empezaremos el partido a menos que llueva.'],
        ['She will not call unless it is important.', 'Ella no llamará a menos que sea importante.'],
      ]
    ),
    teoria(
      '4 · As long as: siempre que, con tal de que',
      'as long as expresa una condición que debe cumplirse: «siempre que» o «con tal de que». También se usa provided (that), con el mismo sentido. Después va el presente:\n\n• You can use my car as long as you drive carefully.\n• I will help you as long as you tell me the truth.\n\nEs una condición positiva: se hace algo solo si se cumple.',
      [
        ['You can use my car as long as you drive carefully.', 'Puedes usar mi carro siempre que manejes con cuidado.'],
        ['I will help you as long as you tell me the truth.', 'Te ayudaré con tal de que me digas la verdad.'],
        ['They can stay as long as they are quiet.', 'Pueden quedarse siempre que estén callados.'],
        ['Provided that you pay, you can go in.', 'Siempre que pagues, puedes entrar.'],
      ]
    ),
    teoria(
      '5 · In case, if, unless y as long as',
      'Compara las cuatro ideas:\n\n• in case → precaución: algo puede pasar y me preparo antes.\n• if → condición: si pasa, entonces hago esto.\n• unless → a menos que (if not).\n• as long as → siempre que se cumpla algo.\n\n«Take an umbrella in case it rains» (me preparo) frente a «Take an umbrella if it rains» (solo lo llevas si llueve).',
      [
        ['Take a coat in case it gets cold.', 'Lleva un abrigo por si hace frío.'],
        ['Take a coat if it gets cold.', 'Lleva un abrigo si hace frío (solo si pasa).'],
        ['I will go unless it rains.', 'Iré a menos que llueva.'],
        ['I will go as long as it does not rain.', 'Iré siempre que no llueva.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('In case', resto('I take / took'), aux('in case'), suj('subject'), verbo('present / past')),
    fl('Unless', aux('Unless'), suj('subject'), verbo('present'), resto(', will')),
    fl('As long as', resto('main clause'), aux('as long as'), suj('subject'), verbo('present')),
  ],
  table: {
    cols: ['Palabra', 'Significa', 'Ejemplo'],
    rows: [
      ['in case', 'por si acaso', 'Take a coat in case it rains.'],
      ['unless', 'a menos que (if not)', 'Unless you hurry, you will be late.'],
      ['as long as', 'siempre que', 'You can go as long as you are back by ten.'],
      ['provided that', 'con tal de que', 'Provided that you pay, you can enter.'],
    ],
  },
  contrastCard: {
    left: { label: 'in case → me preparo', example: 'Take a coat in case it gets cold.', highlight: 'in case' },
    right: { label: 'if → solo si pasa', example: 'Take a coat if it gets cold.', highlight: 'if' },
    caption: 'in case: me preparo antes por si acaso. if: lo hago solo cuando pasa.',
  },
  quiz: [
    ejercicio(
      "I'll take a sandwich ___ I get hungry later.",
      'in case',
      ['unless', 'as long as', 'so that'],
      'Es una precaución: llevas el sándwich antes, por si te da hambre. Eso es in case. unless y as long as son condiciones y so that expresa un propósito.'
    ),
    ejercicio(
      'I will not go to the party ___ you come with me.',
      'unless',
      ['in case', 'so that', 'while'],
      'Significa «a menos que vengas conmigo»: unless. in case es una precaución, so that es un propósito y while significa mientras.'
    ),
    ejercicio(
      'You can use my car ___ you drive carefully.',
      'as long as',
      ['unless', 'in case', 'although'],
      'Es una condición que debe cumplirse (manejar con cuidado): as long as. unless cambiaría el sentido y although expresa contraste.'
    ),
    ejercicio(
      '___ you study, you will not pass the exam.',
      'Unless',
      ['In case', 'As long as', 'Even though'],
      'Significa «a menos que estudies»: Unless (= if you do not study). As long as haría la condición positiva y las otras no encajan.'
    ),
    ejercicio(
      '¿Cuál de estas frases es correcta?',
      'Unless you hurry, you will miss the bus.',
      ["Unless you don't hurry, you will miss the bus.", 'Unless you will hurry, you will miss the bus.', 'In case you hurry, you will miss the bus.'],
      'Unless ya es negativo (if … not), así que no se agrega don\'t, y después se usa el presente (hurry), no will.'
    ),
  ],
  flashcards: [
    tarjeta('In case', 'por si acaso + presente / pasado\nTake an umbrella in case it rains.\nNunca: in case it will rain'),
    tarjeta('Unless', 'a menos que = if … not\nUnless you hurry, you will be late.\nNo lleva otra negación.'),
    tarjeta('As long as', 'siempre que (condición)\nYou can go as long as you are back at ten.'),
    tarjeta('In case o if', 'in case: me preparo antes\nif: lo hago solo si pasa'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Are you ready for the hike?', translation: '¿Estás listo para la caminata?' },
    { speaker: 'user', text: 'Almost. I packed a raincoat in case it rains.', translation: 'Casi. Empaqué un impermeable por si llueve.' },
    { speaker: 'other', text: 'Good idea. We will go unless it rains heavily.', translation: 'Buena idea. Iremos a menos que llueva mucho.' },
    { speaker: 'user', text: 'And what about the kids?', translation: '¿Y los niños?' },
    { speaker: 'other', text: 'They can come as long as they stay with us.', translation: 'Pueden venir siempre que se queden con nosotros.' },
    { speaker: 'user', text: 'Perfect. I will bring some snacks in case they get hungry.', translation: 'Perfecto. Llevaré algo de comer por si les da hambre.' },
  ],
  readingText: {
    title: 'Always prepared',
    body: 'My aunt Rosa is always prepared. She keeps a first-aid kit in her car in case there is an accident. She never goes out without an umbrella unless the sky is completely blue. At home she has extra water and candles in case the power goes out. She says we can borrow anything as long as we return it. We laugh, but last winter her candles saved our evening!',
    translation:
      'Mi tía Rosa siempre está preparada. Guarda un botiquín en su carro por si hay un accidente. Nunca sale sin paraguas a menos que el cielo esté completamente azul. En casa tiene agua y velas de sobra por si se corta la luz. Dice que podemos pedirle prestado lo que sea siempre que lo devolvamos. Nos reímos, pero el invierno pasado sus velas salvaron nuestra noche.',
  },
  tips: [
    'Después de in case, unless y as long as se usa el presente aunque hables del futuro: «in case it rains», no «in case it will rain».',
    'unless = if … not. No pongas otra negación: «unless you hurry», no «unless you don\'t hurry».',
    'Para recordar in case: es «por si acaso». No es lo mismo que if: con in case te preparas antes.',
  ],
  dailyWords: palabras('umbrella', 'rain', 'weather', 'party', 'unless', 'as long as'),
  relacionados: [
    { unidad: 1101 },
    { etiqueta: '📖 Gramática: Palabras de Enlace', ruta: '/gramatica/concepto/palabras-de-enlace-linking-words' },
  ],
};

// ─── Extra 3 (id 1103) · By, until, on time e in time ───

const UNIDAD_1103: Unit = {
  title: 'By, Until, On Time and In Time',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Until: hasta (algo que continúa)',
      'until significa «hasta» y se usa cuando una situación o acción continúa y luego termina. Responde a «¿hasta cuándo?»:\n\n• I will wait until six. (espero, espero… y a las seis termino)\n• The shop is open until nine.\n• Stay here until I come back.\n\nTambién se escribe till en el inglés hablado.',
      [
        ['I will wait here until six.', 'Esperaré aquí hasta las seis.'],
        ['The shop is open until nine in the evening.', 'La tienda abre hasta las nueve de la noche.'],
        ['Stay here until I come back.', 'Quédate aquí hasta que yo vuelva.'],
        ['She worked until midnight.', 'Trabajó hasta la medianoche.'],
      ]
    ),
    teoria(
      '2 · By: a más tardar, antes de',
      'by significa «para», «antes de» o «a más tardar». Marca un límite: la acción debe estar hecha en ese momento o antes:\n\n• Send me the report by Friday. (el viernes o antes)\n• I must be home by ten.\n• The work will be ready by next week.',
      [
        ['Send me the report by Friday.', 'Mándame el informe para el viernes.'],
        ['I must be home by ten.', 'Debo estar en casa a las diez como máximo.'],
        ['The work will be ready by next week.', 'El trabajo estará listo para la próxima semana.'],
        ['Please pay the bill by the 30th.', 'Por favor paga la cuenta antes del día 30.'],
      ]
    ),
    teoria(
      '3 · By o until',
      'Compara la idea de cada una:\n\n• until → algo continúa hasta ese momento: «I will work until six» (trabajo todo el tiempo hasta las seis).\n• by → algo se hace como muy tarde en ese momento: «I will finish by six» (termino a las seis o antes).\n\nPregúntate si la acción dura (until) o se completa antes del límite (by).',
      [
        ['I will work until six.', 'Trabajaré hasta las seis.'],
        ['I will finish by six.', 'Terminaré a las seis como máximo.'],
        ['She slept until noon.', 'Ella durmió hasta el mediodía.'],
        ['She must wake up by seven.', 'Ella debe despertarse a las siete como máximo.'],
      ]
    ),
    teoria(
      '4 · On time o in time',
      'on time significa «puntual»: justo a la hora prevista. in time (for) significa «a tiempo», con tiempo suficiente para hacer algo:\n\n• The train left on time. (a la hora exacta)\n• We arrived in time for the film. (antes de que empezara)\n• Hurry up! We must be in time to catch the train.\n\nCon in time for / to se dice para qué había tiempo.',
      [
        ['The train left on time.', 'El tren salió puntual.'],
        ['We arrived in time for the film.', 'Llegamos a tiempo para la película.'],
        ['The meeting started on time.', 'La reunión empezó puntual.'],
        ['We hurried to get there in time to catch the train.', 'Nos apuramos para llegar a tiempo de tomar el tren.'],
      ]
    ),
    teoria(
      '5 · By + medio de transporte o autor',
      'by también significa «por medio de» o «hecho por»:\n\n• Transporte (sin artículo): by bus, by car, by train, by plane. (pero on foot)\n• Autor: a book by Mario Vargas Llosa · a song by Shakira.\n• By myself = yo solo.',
      [
        ['I travel to work by bus.', 'Viajo al trabajo en autobús.'],
        ['We went to Cusco by plane.', 'Fuimos a Cusco en avión.'],
        ['This is a song by Shakira.', 'Esta es una canción de Shakira.'],
        ['He did the project by himself.', 'Él hizo el proyecto solo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Until', resto('action'), aux('until'), suj('time')),
    fl('By', resto('action'), aux('by'), suj('time')),
    fl('In time for', resto('arrive'), aux('in time'), resto('for / to')),
  ],
  table: {
    cols: ['Palabra', 'Idea', 'Ejemplo'],
    rows: [
      ['until', 'hasta (continúa)', 'I will wait until six.'],
      ['by', 'a más tardar', 'I will finish by six.'],
      ['on time', 'puntual', 'The train left on time.'],
      ['in time (for)', 'con tiempo suficiente', 'We arrived in time for the film.'],
      ['by + transporte', 'por medio de', 'I go to work by bus.'],
    ],
  },
  contrastCard: {
    left: { label: 'until → continúa hasta', example: 'I will work until six.', highlight: 'until' },
    right: { label: 'by → antes de o a esa hora', example: 'I will finish by six.', highlight: 'by' },
    caption: 'until: la acción dura hasta ese momento. by: debe estar hecha como muy tarde en ese momento.',
  },
  quiz: [
    ejercicio(
      'The shop is open ___ nine o\'clock in the evening.',
      'until',
      ['by', 'on', 'in'],
      'La tienda está abierta todo el tiempo hasta las nueve y luego cierra: until. by marcaría un límite para terminar algo, y on o in no sirven con horas.'
    ),
    ejercicio(
      'Please send me the report ___ Friday.',
      'by',
      ['until', 'at', 'on time'],
      'El informe debe estar enviado el viernes o antes: by. until Friday significaría que sigues enviándolo todo el tiempo hasta el viernes.'
    ),
    ejercicio(
      'The train left at 9:00, exactly as planned. It left ___.',
      'on time',
      ['in time', 'by time', 'at time'],
      'Salió justo a la hora prevista: on time (puntual). in time se usa con for o to: «in time for the film».'
    ),
    ejercicio(
      'We hurried and got to the station ___ to catch the train.',
      'in time',
      ['on time', 'by time', 'until time'],
      'Con to + verbo se dice in time (con tiempo suficiente para tomar el tren). on time significa puntual, sin decir para qué.'
    ),
    ejercicio(
      'I travel to work ___ bus.',
      'by',
      ['on the', 'with', 'at'],
      'Con medios de transporte, sin artículo, se usa by: by bus, by car, by train. on the bus sí existe, pero necesita el artículo.'
    ),
  ],
  flashcards: [
    tarjeta('Until', 'hasta (la acción continúa)\nShe slept until noon.'),
    tarjeta('By', 'a más tardar / para\nSend it by Friday. (viernes o antes)'),
    tarjeta('On time o in time', 'on time = puntual\nin time (for / to) = con tiempo suficiente'),
    tarjeta('By + transporte', 'by bus · by car · by plane\nPero: on foot'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'When do you need the documents?', translation: '¿Cuándo necesitas los documentos?' },
    { speaker: 'user', text: 'I need them by Thursday, please.', translation: 'Los necesito para el jueves, por favor.' },
    { speaker: 'other', text: 'OK. Can I work on them until the evening?', translation: 'Está bien. ¿Puedo trabajar en ellos hasta la noche?' },
    { speaker: 'user', text: 'Of course. Just send them on time.', translation: 'Claro. Solo mándalos a tiempo.' },
    { speaker: 'other', text: 'I will. I go home by train, so I will be there in time for dinner.', translation: 'Lo haré. Me voy a casa en tren, así que llegaré a tiempo para la cena.' },
    { speaker: 'user', text: 'Great. See you on Friday.', translation: 'Genial. Nos vemos el viernes.' },
  ],
  readingText: {
    title: 'The new schedule',
    body: 'Our new schedule is strict. The office opens at eight, and everyone must be there on time. We work until five, but on Fridays we finish by three. The reports must be ready by the end of the month. Last week Tom missed the bus and arrived late, but he was in time for the important meeting. Now he travels by train.',
    translation:
      'Nuestro nuevo horario es estricto. La oficina abre a las ocho y todos deben estar puntuales. Trabajamos hasta las cinco, pero los viernes terminamos a las tres como máximo. Los informes deben estar listos para fin de mes. La semana pasada Tom perdió el autobús y llegó tarde, pero llegó a tiempo para la reunión importante. Ahora viaja en tren.',
  },
  tips: [
    'until dura, by termina: «Wait until six» (esperas hasta las seis) frente a «Be here by six» (llega a las seis como máximo).',
    'on time = puntual, sin retraso. in time for = con tiempo de sobra para algo.',
    'Con transportes se dice by bus, by car; para «a pie» se dice on foot.',
  ],
  dailyWords: palabras('deadline', 'ticket', 'train', 'bus', 'delay', 'timetable'),
  relacionados: [
    { unidad: 1002 },
    { etiqueta: '📖 Gramática: Locuciones Preposicionales', ruta: '/gramatica/concepto/locuciones-preposicionales-complex-prepositions' },
  ],
};

// ─── Extra 4 (id 1104) · Remember, stop, try; preposición + -ing; be / get used to ───

const UNIDAD_1104: Unit = {
  title: 'Remember, Stop, Try + -ing / To; Used To',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Remember y forget + to o -ing',
      'Cambia el significado según lo que sigue:\n\n• remember / forget + to + verbo: acordarse (o no) de hacer algo que hay que hacer. «Remember to lock the door.»\n• remember / forget + -ing: recordar (o no) algo que ya pasó. «I remember locking the door.»\n\nto mira hacia el futuro; -ing mira hacia el pasado.',
      [
        ['Remember to lock the door when you leave.', 'Acuérdate de cerrar la puerta con llave cuando salgas.'],
        ['I remember locking the door. I am sure.', 'Recuerdo haber cerrado la puerta con llave. Estoy seguro.'],
        ['Do not forget to call your mother.', 'No olvides llamar a tu mamá.'],
        ['I will never forget meeting you.', 'Nunca olvidaré haberte conocido.'],
      ]
    ),
    teoria(
      '2 · Stop + -ing o to',
      'También cambia el significado:\n\n• stop + -ing: dejar de hacer algo. «He stopped smoking.» (ya no fuma)\n• stop + to + verbo: pararse para hacer otra cosa. «He stopped to smoke.» (se detuvo para fumar)\n\nLa forma con to es siempre un propósito.',
      [
        ['He stopped smoking last year.', 'Dejó de fumar el año pasado.'],
        ['He stopped to smoke a cigarette.', 'Se detuvo para fumar un cigarro.'],
        ['They stopped talking when I came in.', 'Dejaron de hablar cuando entré.'],
        ['We stopped to buy some water.', 'Nos detuvimos a comprar agua.'],
      ]
    ),
    teoria(
      '3 · Try + to o -ing',
      '• try + to + verbo: intentar hacer algo difícil. «I tried to open the window, but it was stuck.»\n• try + -ing: probar algo para ver qué pasa. «Try opening the window; maybe it will be cooler.»\n\nCon to intentas algo que cuesta; con -ing pruebas una solución.',
      [
        ['I tried to open the window, but it was stuck.', 'Intenté abrir la ventana, pero estaba atascada.'],
        ['Try opening the window. It is hot in here.', 'Prueba abriendo la ventana. Hace calor aquí.'],
        ['She tried to learn Chinese, but it was too hard.', 'Intentó aprender chino, pero era muy difícil.'],
        ['Try using a different password.', 'Prueba usando otra contraseña.'],
      ]
    ),
    teoria(
      '4 · Preposición + -ing',
      'Después de una preposición (in, at, of, about, before, after, without, for…) el verbo va siempre en -ing, nunca en infinitivo:\n\n• interested in learning · good at cooking · tired of waiting\n• before leaving · after eating · without saying\n• Thanks for helping.\n\nEn español usamos el infinitivo; en inglés, -ing.',
      [
        ['She is interested in learning Italian.', 'Ella está interesada en aprender italiano.'],
        ['I am good at cooking.', 'Soy bueno cocinando.'],
        ['Before leaving, check the windows.', 'Antes de salir, revisa las ventanas.'],
        ['He left without saying goodbye.', 'Se fue sin despedirse.'],
      ]
    ),
    teoria(
      '5 · Be used to y get used to',
      'be used to + -ing o sustantivo = estar acostumbrado. get used to = acostumbrarse. No es lo mismo que used to + verbo base (hábito del pasado).\n\n• I am used to getting up early. (ya estoy acostumbrado)\n• She is getting used to the cold. (se está acostumbrando)\n• I used to live in Lima. (antes vivía en Lima)',
      [
        ['I am used to getting up early.', 'Estoy acostumbrado a levantarme temprano.'],
        ['She is getting used to the cold weather.', 'Ella se está acostumbrando al clima frío.'],
        ['He is not used to driving on the left.', 'Él no está acostumbrado a manejar por la izquierda.'],
        ['I used to live in Lima.', 'Antes vivía en Lima.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Remember to', verbo('remember'), aux('to'), verbo('verb')),
    fl('Recordar algo hecho', verbo('remember'), verbo('verb + -ing')),
    fl('Be used to', suj('I'), aux('am used to'), verbo('verb + -ing')),
  ],
  table: {
    cols: ['Verbo', 'con to', 'con -ing'],
    rows: [
      ['remember', 'acordarse de hacer (futuro)', 'recordar haber hecho (pasado)'],
      ['forget', 'olvidar hacer', 'olvidar haber hecho'],
      ['stop', 'pararse para hacer algo', 'dejar de hacer algo'],
      ['try', 'intentar (cuesta)', 'probar (a ver qué pasa)'],
    ],
  },
  contrastCard: {
    left: { label: 'stop + -ing → dejar de', example: 'He stopped smoking.', highlight: 'stopped smoking' },
    right: { label: 'stop + to → pararse para', example: 'He stopped to smoke.', highlight: 'stopped to smoke' },
    caption: 'Con to hay un propósito: te detienes para hacer algo.',
  },
  quiz: [
    ejercicio(
      'Please remember ___ the door when you leave.',
      'to lock',
      ['locking', 'lock', 'locked'],
      'Es algo que debes hacer en el futuro: remember + to + verbo («acuérdate de cerrar»). remember + -ing sería recordar algo que ya hiciste.'
    ),
    ejercicio(
      'He stopped ___ because it was bad for his health.',
      'smoking',
      ['to smoke', 'smoke', 'smoked'],
      'Dejó de fumar por su salud: stop + -ing. stop to smoke significaría que se detuvo para fumar, lo que no encaja con la razón.'
    ),
    ejercicio(
      'She is interested ___ a new language.',
      'in learning',
      ['to learn', 'for learning', 'on learn'],
      'Después de una preposición (in) el verbo va en -ing: «interested in learning». to learn y on learn son incorrectas.'
    ),
    ejercicio(
      'I am not used ___ early on Sundays.',
      'to getting up',
      ['to get up', 'getting up', 'for getting up'],
      'be used to lleva -ing: «I am not used to getting up». «used to get up» (sin be) significa un hábito del pasado, otra idea.'
    ),
    ejercicio(
      'Before ___ the house, check the windows.',
      'leaving',
      ['to leave', 'leave', 'left'],
      'Después de la preposición before el verbo va en -ing: «Before leaving». to leave, leave y left no son correctas aquí.'
    ),
  ],
  flashcards: [
    tarjeta('Remember to / remember -ing', 'remember to lock = acordarse de cerrar\nI remember locking = recuerdo haber cerrado'),
    tarjeta('Stop to / stop -ing', 'stop smoking = dejar de fumar\nstop to smoke = detenerse para fumar'),
    tarjeta('Try to / try -ing', 'try to open = intentar abrir\ntry opening = probar abriendo'),
    tarjeta('Preposición + -ing', 'interested in learning · good at cooking\nbefore leaving · without saying'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Did you remember to buy milk?', translation: '¿Te acordaste de comprar leche?' },
    { speaker: 'user', text: 'Yes, I stopped at the shop on my way home.', translation: 'Sí, me detuve en la tienda de camino a casa.' },
    { speaker: 'other', text: 'Thanks for doing that. I am bad at remembering things.', translation: 'Gracias por hacerlo. Soy malo recordando cosas.' },
    { speaker: 'user', text: 'Try writing a list. It helps me a lot.', translation: 'Prueba escribiendo una lista. A mí me ayuda mucho.' },
    { speaker: 'other', text: 'I tried to do that last week, but I forgot to read it.', translation: 'Intenté hacerlo la semana pasada, pero olvidé leerla.' },
    { speaker: 'user', text: 'You will get used to it. Do not give up!', translation: 'Te acostumbrarás. ¡No te rindas!' },
  ],
  readingText: {
    title: 'A new city',
    body: 'Last year Elena moved to a big city. At first she was not used to living in a noisy place. She tried to sleep with the window closed, but it was too hot. Then she tried using earplugs, and it worked! She stopped worrying about the traffic and started enjoying her new life. She remembers walking around the center on her first night. Now she is interested in joining a language club.',
    translation:
      'El año pasado Elena se mudó a una ciudad grande. Al principio no estaba acostumbrada a vivir en un lugar ruidoso. Intentó dormir con la ventana cerrada, pero hacía demasiado calor. Luego probó usando tapones para los oídos, ¡y funcionó! Dejó de preocuparse por el tráfico y empezó a disfrutar de su nueva vida. Recuerda haber caminado por el centro la primera noche. Ahora está interesada en unirse a un club de idiomas.',
  },
  tips: [
    'to mira al futuro y -ing mira al pasado o a lo que ya es real: remember to do (tengo que hacerlo) / remember doing (ya lo hice).',
    'Después de cualquier preposición va -ing: «good at swimming», «thanks for coming», «before going».',
    'be used to y get used to llevan -ing o un sustantivo. used to + verbo base (sin be) es otra cosa: un hábito del pasado.',
  ],
  dailyWords: palabras('learn', 'practice', 'exam', 'homework', 'teach', 'repeat'),
  relacionados: [{ unidad: 49 }, { unidad: 1105 }],
};

/** Las unidades 1101–1104 del bloque extra del B1. */
export const UNIDADES_EXTRA_B1_A: Record<number, Unit> = {
  1101: UNIDAD_1101,
  1102: UNIDAD_1102,
  1103: UNIDAD_1103,
  1104: UNIDAD_1104,
};

/** La pronunciación de las unidades 1101–1104. */
export const PRONUN_EXTRA_B1_A: Record<number, PronunUnit> = {
  1101: {
    tips: [
      {
        head: 'although y though',
        body: 'although suena /ɔːlˈðoʊ/ y though suena /ðoʊ/: la th es suave (como una d entre dientes) y el final rima con «go». Si lo dices con una z o una t, cambia la palabra.',
        examples: ['although /ɔːlˈðoʊ/', 'though /ðoʊ/', 'even though /ˌiːvn ˈðoʊ/'],
      },
      {
        head: 'so that',
        body: 'En so that la that se debilita: se dice /soʊ ðət/ y las dos palabras se pegan. El acento va en so.',
        examples: ['so that /ˈsoʊ ðət/', 'so that you can /soʊ ðət ju kən/'],
      },
    ],
    vocab: palabras('although', 'though', 'even though', 'so that', 'however'),
  },
  1102: {
    tips: [
      {
        head: 'unless',
        body: 'unless se dice /ənˈles/: la primera sílaba es débil (como una e muy corta) y el acento cae en la segunda. Rima con «less».',
        examples: ['unless /ənˈles/', 'unless you hurry /ənˈles ju ˈhɜːri/'],
      },
      {
        head: 'in case',
        body: 'in case se dice /ɪn ˈkeɪs/: acento en case, con el sonido /eɪ/ como en «hey». La a no suena como en español.',
        examples: ['in case /ɪn ˈkeɪs/', 'it rains /ɪt ˈreɪnz/'],
      },
    ],
    vocab: palabras('umbrella', 'rain', 'weather', 'party'),
  },
  1103: {
    tips: [
      {
        head: 'by y until',
        body: 'by suena /baɪ/, como «bai». until se dice /ənˈtɪl/ o /ʌnˈtɪl/: acento en la segunda sílaba. En una frase rápida by casi no se oye.',
        examples: ['by Friday /baɪ ˈfraɪdeɪ/', 'until six /ənˈtɪl ˈsɪks/'],
      },
      {
        head: 'on time e in time',
        body: 'on time y in time se enlazan: la n se une a la t y suenan casi como una palabra. El acento va en time.',
        examples: ['on time /ɑːn ˈtaɪm/', 'in time /ɪn ˈtaɪm/', 'in time for /ɪn ˈtaɪm fər/'],
      },
    ],
    vocab: palabras('deadline', 'ticket', 'train', 'bus'),
  },
  1104: {
    tips: [
      {
        head: 'remember y forget',
        body: 'remember se dice /rɪˈmembər/: el acento va en mem. forget se dice /fərˈɡet/. En las dos la primera sílaba es débil.',
        examples: ['remember /rɪˈmembər/', 'forget /fərˈɡet/', 'remember to /rɪˈmembər tə/'],
      },
      {
        head: 'used to',
        body: 'En used to la d casi no se oye: suena /ˈjuːs tə/ cuando es un hábito del pasado, y /ˈjuːst tə/ en be used to. Escúchalo en frases completas.',
        examples: ['used to /ˈjuːs tə/', "I'm used to it /aɪm ˈjuːst tə ɪt/"],
      },
    ],
    vocab: palabras('learn', 'practice', 'exam', 'homework'),
  },
};
