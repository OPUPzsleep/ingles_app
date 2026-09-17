import { Unit } from '@/types/grammar';

export const conjunctionsUnits: Record<number, Unit> = {
  "113": {
    "title": "Although / Though / Even though / In spite of / Despite",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Although: contraste + oración",
        "body": "Although, though y even though introducen una oración completa (sujeto + verbo) que contrasta con la idea principal. Las tres equivalen a 'aunque': though es más informal y even though es más enfático.",
        "note": "Although it was raining, we went out. · She passed though she hadn't studied. · Even though he was tired, he kept working."
      },
      {
        "head": "Despite / In spite of + noun",
        "body": "'In spite of' y 'despite' significan lo mismo que 'although', pero son preposiciones: van seguidas de un sustantivo o un gerundio (-ing), nunca de sujeto + verbo. Error común: decir 'despite of' o usarlas con una oración completa.",
        "note": "In spite of the rain, we went out. · Despite feeling tired, she kept working."
      }
    ],
    "quiz": [
      {
        "q": "___ it was cold, we went for a walk.",
        "opts": [
          "Despite",
          "In spite of",
          "Although",
          "However"
        ],
        "ans": 2,
        "exp": "Le sigue una oración (it was cold) → conjunción: 'Although'."
      },
      {
        "q": "___ the cold weather, we went for a walk.",
        "opts": [
          "Although",
          "Though",
          "Despite",
          "However"
        ],
        "ans": 2,
        "exp": "Le sigue un sustantivo (the cold weather) → 'Despite' (o 'In spite of')."
      },
      {
        "q": "She passed the exam ___ not studying at all.",
        "opts": [
          "although",
          "despite",
          "however",
          "in spite"
        ],
        "ans": 1,
        "exp": "Le sigue un gerundio (-ing) → 'Despite not studying'."
      }
    ],
    "flashcards": [
      {
        "front": "ALTHOUGH vs DESPITE/IN SPITE OF",
        "back": "ALTHOUGH + clause (subject + verb):\n'Although it was raining, we went out.'\n\nDESPITE / IN SPITE OF + noun or -ing:\n'Despite the rain, we went out.'\n'In spite of feeling tired, she worked.'"
      }
    ],
    "readingText": {
      "title": "The Mountain Trip",
      "body": "Although the weather forecast was terrible, we decided to go hiking anyway. Even though it started raining after an hour, nobody wanted to turn back. Despite the mud and the cold wind, we kept climbing, laughing at how ridiculous we looked. In spite of feeling exhausted, we reached the top just before sunset. Though the view was hidden by clouds, we were proud of ourselves. My sister said, 'Even though we're soaked and freezing, this was worth it.' Despite everything that went wrong, it turned out to be one of our favorite trips ever, and we're already planning the next one, although next time we'll check the weather more carefully.",
      "translation": "Aunque el pronóstico del tiempo era terrible, decidimos ir de excursión de todos modos. Aun cuando empezó a llover después de una hora, nadie quería regresar. A pesar del barro y el viento frío, seguimos subiendo, riéndonos de lo ridículos que nos veíamos. A pesar de sentirnos agotados, llegamos a la cima justo antes del atardecer. Aunque la vista estaba oculta por las nubes, estábamos orgullosos de nosotros mismos. Mi hermana dijo: 'Aunque estamos empapados y helados, valió la pena.' A pesar de todo lo que salió mal, resultó ser uno de nuestros viajes favoritos, y ya estamos planeando el próximo, aunque la próxima vez revisaremos el clima con más cuidado."
    }
  },
  "114": {
    "title": "In Case",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "In case: precaución",
        "body": "'In case' explica una acción que haces AHORA como precaución, antes de que algo pase después — no es una reacción. 'I'll take an umbrella in case it rains' significa que llevas el paraguas ya, sin importar si al final llueve o no.",
        "note": "I'll take an umbrella in case it rains. (precaution — I'm taking it NOW, not IF it rains) · Write it down in case you forget."
      },
      {
        "head": "In case vs If",
        "body": "Con 'if', la acción ocurre solo si se cumple la condición (reacción). Con 'in case', la acción ocurre YA, antes de saber si pasará el evento, como preparación anticipada. Confundirlos es común porque ambas mencionan el mismo evento."
      }
    ],
    "quiz": [
      {
        "q": "Take the number ___ you need to call them.",
        "opts": [
          "if",
          "in case",
          "whether",
          "unless"
        ],
        "ans": 1,
        "exp": "Precaución → 'in case': 'Take it in case you need to call.'"
      },
      {
        "q": "I'm saving money ___ I lose my job.",
        "opts": [
          "if",
          "whether",
          "in case",
          "unless"
        ],
        "ans": 2,
        "exp": "'In case' = ahorro AHORA como precaución (no 'if I lose my job I will save'): 'in case I lose my job.'"
      }
    ],
    "flashcards": [
      {
        "front": "IN CASE vs IF",
        "back": "IF = conditional (only act if it happens):\n'IF it rains, I'll use my umbrella.' (action only if it rains)\n\nIN CASE = precaution (act now, just to be safe):\n'I'll take my umbrella IN CASE it rains.' (take it now regardless)"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Are you all packed for the camping trip?", "translation": "¿Ya tienes todo empacado para el viaje de campamento?" },
      { "speaker": "user", "text": "Almost. I'm bringing a first-aid kit in case someone gets hurt.", "translation": "Casi. Voy a llevar un botiquín de primeros auxilios por si alguien se lastima." },
      { "speaker": "other", "text": "Good idea. What about the weather?", "translation": "Buena idea. ¿Y qué hay del clima?" },
      { "speaker": "user", "text": "I'm taking a rain jacket in case it rains, even though the forecast looks fine.", "translation": "Voy a llevar una chaqueta impermeable por si llueve, aunque el pronóstico se ve bien." },
      { "speaker": "other", "text": "Smart. I never bring extra water in case we run out.", "translation": "Inteligente. Yo nunca llevo agua extra por si se nos acaba." },
      { "speaker": "user", "text": "You should! I always pack extra snacks in case we get hungry on the trail.", "translation": "¡Deberías! Yo siempre empaco bocadillos extra por si nos da hambre en el sendero." },
      { "speaker": "other", "text": "Okay, you've convinced me. I'll bring a flashlight in case it gets dark before we set up camp.", "translation": "Bien, me convenciste. Voy a llevar una linterna por si oscurece antes de que armemos el campamento." }
    ]
  },
  "115": {
    "title": "Unless / As Long As / Provided",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Unless: si no",
        "body": "'Unless' equivale a 'si no' o 'excepto si': introduce la única excepción que impediría que la idea principal se cumpla. 'I'll come unless it rains' = 'vendré si no llueve'. Como ya es negativo, no agregues otra negación en la oración que sigue.",
        "note": "I'll come unless it rains. (= I'll come if it doesn't rain) · Unless you hurry, we'll be late."
      },
      {
        "head": "As long as / provided: condición",
        "body": "'As long as' y 'provided (that)' significan 'con la condición de que', pero a diferencia de 'unless' plantean la condición en positivo, no como excepción. 'You can come as long as you're quiet' exige silencio como requisito. 'Provided' es más formal que 'as long as'.",
        "note": "You can come as long as you're quiet. · I'll help you provided you promise to try."
      }
    ],
    "quiz": [
      {
        "q": "I'll come ___ it rains.",
        "opts": [
          "unless",
          "if not",
          "provided",
          "except"
        ],
        "ans": 0,
        "exp": "'Unless' = si no: 'I'll come unless it rains' equivale a 'I'll come if it doesn't rain'."
      },
      {
        "q": "You can borrow my car ___ you drive carefully.",
        "opts": [
          "unless",
          "as long as",
          "except",
          "although"
        ],
        "ans": 1,
        "exp": "Condición para el permiso → 'as long as': 'as long as you drive carefully'."
      }
    ],
    "flashcards": [
      {
        "front": "UNLESS vs AS LONG AS",
        "back": "UNLESS = if not:\n'I'll come UNLESS it rains.' (= if it doesn't rain)\n\nAS LONG AS / PROVIDED (THAT) = on the condition that:\n'You can come AS LONG AS you're quiet.'\n'I'll lend it to you PROVIDED you return it.'"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Can I bring my little brother to your party?", "translation": "¿Puedo llevar a mi hermano pequeño a tu fiesta?" },
      { "speaker": "user", "text": "Sure, as long as he doesn't touch the sound system.", "translation": "Claro, siempre y cuando no toque el equipo de sonido." },
      { "speaker": "other", "text": "He won't. What time should we arrive?", "translation": "No lo hará. ¿A qué hora deberíamos llegar?" },
      { "speaker": "user", "text": "Anytime after seven, unless it's raining — then we'll move it inside.", "translation": "En cualquier momento después de las siete, a menos que esté lloviendo — entonces la haremos adentro." },
      { "speaker": "other", "text": "Got it. Can I bring my dog too?", "translation": "Entendido. ¿Puedo llevar a mi perro también?" },
      { "speaker": "user", "text": "That's fine, provided he's friendly with other dogs.", "translation": "Está bien, siempre que sea amigable con otros perros." },
      { "speaker": "other", "text": "He's very friendly, unless someone tries to take his food!", "translation": "Es muy amigable, ¡a menos que alguien intente quitarle su comida!" }
    ]
  },
  "116": {
    "title": "As (time/manner/reason)",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "As: al mismo tiempo",
        "body": "Este uso de 'as' equivale a 'while' o 'when': une dos acciones que ocurren al mismo tiempo. 'I saw her as I was leaving' coloca ambas acciones en paralelo. 'As' tiene otros dos significados (modo y razón) que dependen del contexto.",
        "note": "I saw her as I was leaving. · As the sun rose, the birds began to sing."
      },
      {
        "head": "As: del mismo modo",
        "body": "Este otro uso de 'as' compara el modo en que se hace algo, como 'de la misma manera que'. 'Do as I say' significa 'hazlo como te digo'; 'leave it as it is' = 'como está'. No tiene relación con el sentido de tiempo.",
        "note": "Do as I say. · Leave everything as it is."
      },
      {
        "head": "As: porque/ya que",
        "body": "Aquí 'as' equivale a 'because' o 'since', dando una razón, y es muy común al inicio de la oración. 'As I was tired, I went to bed' = 'porque estaba cansado'. 'As' tiene tres significados distintos: el contexto decide cuál aplica.",
        "note": "As I was tired, I went to bed. · As there's no milk, I'll have tea."
      }
    ],
    "quiz": [
      {
        "q": "___ she was leaving, I remembered her name.",
        "opts": [
          "During",
          "As",
          "While",
          "When"
        ],
        "ans": 1,
        "exp": "Acción simultánea → 'As': 'As she was leaving, I remembered.'"
      },
      {
        "q": "___ we have a lot of time, let's stop for coffee.",
        "opts": [
          "Although",
          "Because",
          "As",
          "If"
        ],
        "ans": 2,
        "exp": "'As' = ya que/porque: 'As we have time, let's stop for coffee.'"
      }
    ],
    "flashcards": [
      {
        "front": "AS — three meanings",
        "back": "1. TIME (= while, at the same time):\n'As I was leaving, my phone rang.'\n\n2. REASON (= since/because):\n'As it was late, I went home.'\n\n3. MANNER (= in the way that):\n'Do it AS I showed you.'"
      }
    ],
    "readingText": {
      "title": "Learning to Cook",
      "body": "As my grandmother taught me to make soup, she explained every step carefully. 'Do it as I do, not as the recipe says,' she told me, stirring the pot slowly. As the onions began to soften, the kitchen filled with a wonderful smell. As there was no fresh basil in the fridge, we used dried basil instead. 'It won't taste exactly as the original recipe intends,' she said, 'but it will still be delicious.' As we waited for the soup to cook, she told me stories about her own grandmother. As I watched her work, I realized cooking wasn't just about following instructions — it was about patience, love, and doing things as she had always done them.",
      "translation": "Mientras mi abuela me enseñaba a hacer sopa, explicaba cada paso con cuidado. 'Hazlo como yo lo hago, no como dice la receta', me dijo, revolviendo la olla lentamente. A medida que las cebollas comenzaban a ablandarse, la cocina se llenó de un aroma maravilloso. Como no había albahaca fresca en el refrigerador, usamos albahaca seca en su lugar. 'No sabrá exactamente como pretende la receta original', dijo, 'pero seguirá siendo deliciosa.' Mientras esperábamos a que se cocinara la sopa, me contó historias sobre su propia abuela. Mientras la observaba trabajar, me di cuenta de que cocinar no se trataba solo de seguir instrucciones — se trataba de paciencia, amor y hacer las cosas como ella siempre las había hecho."
    }
  },
  "117": {
    "title": "Like and As",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Like: preposición (parecido a)",
        "body": "'Like' es preposición y va seguida de sustantivo o pronombre: indica que dos cosas se parecen sin ser lo mismo. 'She looks like her mother' no dice que ella ES su madre. Se diferencia de 'as', que expresa un rol real.",
        "note": "She looks like her mother. · He works like a machine. · He behaves like a child."
      },
      {
        "head": "As: en el rol de",
        "body": "Aquí 'as' describe el rol, trabajo o función real de alguien, no un parecido. 'She works as a nurse' significa que enfermería ES su profesión real. 'He was treated as a criminal' = en el papel de criminal, sea cierto o no.",
        "note": "She works as a nurse. (= she IS a nurse) · He was treated as a criminal. (= in the role of)"
      },
      {
        "head": "Like vs As: la clave",
        "body": "La elección entre 'like' y 'as' depende de si hay un rol real o solo un parecido. 'She works like a nurse' = trabaja de forma similar sin serlo; 'she works as a nurse' = de verdad es enfermera. Un solo cambio de palabra cambia todo el significado.",
        "note": "She works like a nurse. (she's not a nurse but works similarly) · She works as a nurse. (she IS a nurse)"
      }
    ],
    "quiz": [
      {
        "q": "He drives ___ a racing driver. (similar to)",
        "opts": [
          "as",
          "like",
          "such as",
          "same as"
        ],
        "ans": 1,
        "exp": "'Parecido a' → 'like': 'He drives like a racing driver.' (no lo es)"
      },
      {
        "q": "She works ___ a teacher at the local school.",
        "opts": [
          "like",
          "as",
          "such as",
          "similar"
        ],
        "ans": 1,
        "exp": "Rol/función real → 'as': 'She works as a teacher.' (SÍ es maestra)"
      }
    ],
    "flashcards": [
      {
        "front": "LIKE vs AS — the difference",
        "back": "LIKE = similar to:\n'She runs LIKE a professional.' (she's not one)\n\nAS = in the function/role of:\n'She works AS a nurse.' (she IS a nurse)\n\nTip: as = real role. like = comparison."
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Tell me about your new coworker.", "translation": "Cuéntame sobre tu nuevo compañero de trabajo." },
      { "speaker": "user", "text": "He's really talented. He works as a graphic designer, but he draws like a professional artist.", "translation": "Es muy talentoso. Trabaja como diseñador gráfico, pero dibuja como un artista profesional." },
      { "speaker": "other", "text": "Wow. Does he act like the boss sometimes?", "translation": "Vaya. ¿Actúa como el jefe a veces?" },
      { "speaker": "user", "text": "No, but he sometimes acts as team leader when our manager is away.", "translation": "No, pero a veces actúa como líder del equipo cuando nuestro gerente no está." },
      { "speaker": "other", "text": "That's a real responsibility, not just a comparison then.", "translation": "Esa es una responsabilidad real, entonces, no solo una comparación." },
      { "speaker": "user", "text": "Exactly. And he treats every project as his own — he cares like a real owner.", "translation": "Exacto. Y trata cada proyecto como si fuera suyo — se preocupa como un verdadero dueño." }
    ]
  },
  "118": {
    "title": "Like / As If / As Though",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Like + sustantivo: comparación",
        "body": "Es el mismo uso comparativo de 'like' de la unidad anterior: 'like' + sustantivo/pronombre indica parecido. 'He looks like his father' y 'it sounds like a good idea' comparan con algo concreto. A diferencia de 'as if/as though', no lleva oración completa.",
        "note": "He looks like his father. · It sounds like a good idea."
      },
      {
        "head": "As if / as though + oración",
        "body": "'As if' y 'as though' significan lo mismo y van seguidos de oración completa (sujeto + verbo) para describir cómo PARECE una situación. 'It looks as if it's going to rain' describe una impresión, no compara con un sustantivo simple.",
        "note": "It looks as if it's going to rain. · She sounded as though she was crying."
      },
      {
        "head": "As if + pasado: algo falso",
        "body": "Cuando la comparación con 'as if/as though' es claramente falsa o improbable, el verbo va en pasado aunque se hable del presente (igual que en condicionales irreales). 'He talks as if he knew everything' usa 'knew' para señalar que NO lo sabe todo.",
        "note": "He talks as if he knew everything. (he doesn't) · She acts as if she owned the place."
      }
    ],
    "quiz": [
      {
        "q": "You look ___ your mother.",
        "opts": [
          "as",
          "like",
          "as if",
          "so"
        ],
        "ans": 1,
        "exp": "'Like' + sustantivo para comparar."
      },
      {
        "q": "It looks ___ going to rain.",
        "opts": [
          "like",
          "as",
          "as if it's",
          "as it's"
        ],
        "ans": 2,
        "exp": "'As if' + oración completa."
      },
      {
        "q": "He talks ___ he knew everything, but he doesn't.",
        "opts": [
          "as if",
          "like",
          "as",
          "so"
        ],
        "ans": 0,
        "exp": "'As if' + pasado irreal para algo falso."
      }
    ],
    "flashcards": [
      {
        "front": "LIKE + noun vs AS IF + clause",
        "back": "LIKE + noun/pronoun: \"She sings like an angel.\"\nAS IF/AS THOUGH + clause: \"She sings as if she were an angel.\"\nUse a past verb after \"as if\" for something untrue: \"He acts as if he WERE rich.\" (he isn't)"
      }
    ],
    "readingText": {
      "title": "The Strange Neighbor",
      "body": "Our new neighbor is very odd. He looks like he never sleeps — his eyes are always dark and tired. He talks as if he knew everyone in town, even though he only moved here last month. Yesterday he waved at me as though we were old friends, but I'd never spoken to him before. It sounds like he works at night, because his lights are always on. He drives an old car that sounds as if it's about to fall apart. My mom says he acts as if he owned the whole street, walking around like he's the mayor. Honestly, it feels like we're living next to a mystery.",
      "translation": "Nuestro nuevo vecino es muy extraño. Parece como si nunca durmiera — sus ojos siempre se ven oscuros y cansados. Habla como si conociera a todos en el pueblo, aunque se mudó aquí apenas el mes pasado. Ayer me saludó como si fuéramos viejos amigos, pero nunca había hablado con él antes. Suena como si trabajara de noche, porque sus luces siempre están encendidas. Conduce un auto viejo que suena como si estuviera a punto de desarmarse. Mi mamá dice que actúa como si fuera dueño de toda la calle, caminando como si fuera el alcalde. Sinceramente, se siente como si viviéramos junto a un misterio."
    }
  },
  "119": {
    "title": "During / For / While",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "During + sustantivo: cuándo",
        "body": "'During' va seguido de sustantivo y responde '¿cuándo?', ubicando un evento dentro de un periodo más largo, sin decir cuánto duró. 'It rained during the night' no indica cuántas horas llovió. Se diferencia de 'for', que mide duración.",
        "note": "It rained during the night. · I fell asleep during the film. · She called during lunch."
      },
      {
        "head": "For + periodo: cuánto tiempo",
        "body": "'For' responde '¿cuánto tiempo?' y va seguido de una duración, no de un periodo nombrado. 'It rained for two hours' sí indica la duración. Truco: si puedes responder con un número de horas o días, usa 'for', no 'during'.",
        "note": "It rained for two hours. · I slept for eight hours. · She was in Paris for a week."
      },
      {
        "head": "While + oración: simultaneidad",
        "body": "A diferencia de 'during' y 'for' (seguidos de sustantivo), 'while' es conjunción y lleva sujeto + verbo, uniendo dos acciones simultáneas. 'It rained while we were outside' pone ambas acciones en paralelo. Sustantivo → during, número → for, oración → while.",
        "note": "It rained while we were outside. · She called while I was having lunch."
      }
    ],
    "quiz": [
      {
        "q": "I fell asleep ___ the film.",
        "opts": [
          "for",
          "while",
          "during",
          "when"
        ],
        "ans": 2,
        "exp": "CUÁNDO ocurrió (punto dentro de un periodo) + sustantivo → 'during': 'during the film'."
      },
      {
        "q": "It rained ___ three hours.",
        "opts": [
          "during",
          "while",
          "for",
          "since"
        ],
        "ans": 2,
        "exp": "CUÁNTO TIEMPO → 'for': 'for three hours'."
      },
      {
        "q": "___ I was cooking, he arrived.",
        "opts": [
          "During",
          "For",
          "While",
          "Since"
        ],
        "ans": 2,
        "exp": "Acciones simultáneas + oración → 'while': 'While I was cooking'."
      }
    ],
    "flashcards": [
      {
        "front": "DURING / FOR / WHILE",
        "back": "DURING + noun (WHEN?):\n'I slept DURING the meeting.'\n\nFOR + period (HOW LONG?):\n'I slept FOR three hours.'\n\nWHILE + clause (SIMULTANEOUS):\n'WHILE I was sleeping, it rained.'"
      }
    ],
    "readingText": {
      "title": "A Busy Office Day",
      "body": "My phone rang three times during the morning meeting, which was embarrassing. I had been working on the same report for six hours, and while I was trying to finish it, my computer suddenly crashed. During lunch, I didn't even stop to eat — I just kept typing while my sandwich sat untouched for over an hour. My boss walked past while I was rewriting the whole document from memory. 'You've been at your desk for the entire day,' she said, surprised. During the afternoon, things finally calmed down, and while my colleagues left early, I stayed for two more hours to finish everything. By the end, I had been working for almost twelve hours straight.",
      "translation": "Mi teléfono sonó tres veces durante la reunión de la mañana, lo cual fue vergonzoso. Había estado trabajando en el mismo informe durante seis horas, y mientras intentaba terminarlo, mi computadora se apagó de repente. Durante el almuerzo, ni siquiera paré para comer — seguí escribiendo mientras mi sándwich quedó intacto por más de una hora. Mi jefa pasó mientras yo reescribía todo el documento de memoria. 'Has estado en tu escritorio todo el día', dijo, sorprendida. Durante la tarde, las cosas finalmente se calmaron, y mientras mis compañeros se fueron temprano, yo me quedé dos horas más para terminar todo. Al final, había estado trabajando casi doce horas seguidas."
    }
  },
  "120": {
    "title": "By and Until / By the Time",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "By: a más tardar",
        "body": "'By' marca una fecha límite: la acción estará lista en o antes de ese momento, sin precisar cuándo exactamente dentro de ese margen. 'I'll be there by 6' garantiza llegar a las 6 como máximo. Se diferencia de 'until', que implica continuidad.",
        "note": "I'll be there by 6. (= at or before 6) · Can you finish it by tomorrow? · She left by the time I arrived."
      },
      {
        "head": "Until: hasta ese momento",
        "body": "'Until' describe una acción continua que sigue sin parar hasta el momento mencionado. 'I'll wait until 6' significa que la espera es continua hasta esa hora, a diferencia de 'by 6', que solo garantiza que algo esté terminado para entonces.",
        "note": "I'll wait until 6. (= I'll wait continuously until 6) · She worked until midnight."
      },
      {
        "head": "By the time + oración",
        "body": "'By the time' funciona como 'by' pero usa un evento como referencia en vez de una hora: significa 'cuando pase esto otro'. 'By the time you read this, I'll be gone' usa tu lectura como punto de referencia, a menudo con tiempo perfecto.",
        "note": "By the time you read this, I'll be gone. · By the time we arrived, the film had started."
      }
    ],
    "quiz": [
      {
        "q": "Can you finish the report ___ Friday?",
        "opts": [
          "until",
          "by",
          "for",
          "before"
        ],
        "ans": 1,
        "exp": "Fecha límite → 'by': 'by Friday' (en o antes del viernes)."
      },
      {
        "q": "I'll wait for you ___ 5 o'clock.",
        "opts": [
          "by",
          "until",
          "for",
          "by the time"
        ],
        "ans": 1,
        "exp": "Espera continua hasta un momento → 'until': 'until 5 o'clock'."
      }
    ],
    "flashcards": [
      {
        "front": "BY vs UNTIL",
        "back": "BY = deadline (at or before a time):\n'I'll finish it BY tomorrow.' (any time up to tomorrow)\n\nUNTIL = continues up to a time:\n'I'll wait UNTIL tomorrow.' (waiting the whole time)\n\n'I'll be there BY 6.' ✅ (arrival deadline)\n'I'll wait UNTIL 6.' ✅ (waiting up to 6)"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Can you finish the presentation by Thursday?", "translation": "¿Puedes terminar la presentación para el jueves?" },
      { "speaker": "user", "text": "Yes, I'll have it ready by Wednesday night, actually.", "translation": "Sí, de hecho la tendré lista para el miércoles por la noche." },
      { "speaker": "other", "text": "Great. Will you be in the office until then?", "translation": "Genial. ¿Vas a estar en la oficina hasta entonces?" },
      { "speaker": "user", "text": "I'll be working until pretty late tonight, but I should be done by nine.", "translation": "Voy a estar trabajando hasta bastante tarde esta noche, pero debería terminar para las nueve." },
      { "speaker": "other", "text": "And by the time the client arrives tomorrow, everything will be ready?", "translation": "¿Y para cuando llegue el cliente mañana, todo estará listo?" },
      { "speaker": "user", "text": "Definitely. By the time they walk in, we'll have set up the whole room.", "translation": "Definitivamente. Para cuando entren, ya habremos organizado toda la sala." }
    ]
  }
};
