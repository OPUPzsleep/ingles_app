import { Unit } from '@/types/grammar';

export const phrasalVerbsUnits: Record<number, Unit> = {
  "137": {
    "title": "Phrasal verbs 1: introduction",
    "topic": "Phrasal Verbs",
    "level": "A2",
    "explain": [
      {
        "head": "¿Qué es un phrasal verb?",
        "body": "Un phrasal verb combina un verbo con una o dos partículas ('up', 'off', 'on', 'out'...) que parecen preposiciones pero funcionan como parte del verbo. El significado conjunto suele no tener relación con las palabras por separado, así que hay que aprenderlo como una unidad, casi como una palabra nueva.",
        "note": "give up = stop trying (not 'dar arriba') · look after = take care of (not 'mirar después')"
      },
      {
        "head": "Phrasal verbs separables",
        "body": "En los separables, el objeto puede ir después de la partícula o entre el verbo y la partícula. Pero si el objeto es un pronombre ('it', 'them', 'her'...), solo se permite la posición intermedia: 'turn off it' siempre es incorrecto, aunque 'turn off the TV' y 'turn the TV off' sean válidos.",
        "note": "Turn off the TV. = Turn the TV off. ✅ · Turn it off. ✅ (NOT: Turn off it. ❌)"
      },
      {
        "head": "Phrasal verbs inseparables",
        "body": "Aquí el verbo y la partícula forman una unidad fija que nunca se separa, así que el objeto —sea sustantivo o pronombre— siempre va después de la partícula. No hay atajo fiable para saber si un phrasal verb es separable o no; conviene aprender cada uno junto con su patrón.",
        "note": "Look after the children. = Look after them. ✅ (NOT: Look the children after. ❌)"
      },
      {
        "head": "Phrasal verbs intransitivos",
        "body": "Algunos phrasal verbs no llevan objeto: la acción se completa sola, sin nada sobre lo que actuar. Como no hay objeto, la distinción separable/inseparable no aplica; simplemente se usa el verbo con su partícula como combinación fija.",
        "note": "The car broke down. · She woke up late. · Please sit down."
      }
    ],
    "table": {
      "cols": [
        "Particle",
        "General meaning",
        "Example"
      ],
      "rows": [
        [
          "up",
          "completion / increase",
          "finish up · pick up"
        ],
        [
          "down",
          "decrease / calming",
          "turn down · calm down"
        ],
        [
          "out",
          "discovery / completion",
          "find out · carry out"
        ],
        [
          "off",
          "stopping / departure",
          "turn off · take off"
        ],
        [
          "on",
          "continuation",
          "go on · carry on"
        ],
        [
          "in/into",
          "entering / involvement",
          "join in · look into"
        ]
      ]
    },
    "quiz": [
      {
        "q": "Can you ___ the TV? It's too loud.",
        "opts": [
          "turn off",
          "turn off it",
          "switch off it",
          "stop"
        ],
        "ans": 0,
        "exp": "Phrasal verb separable: 'turn off the TV'."
      },
      {
        "q": "The car ___ on the motorway.",
        "opts": [
          "broke up",
          "broke down",
          "broken down",
          "breaking down"
        ],
        "ans": 1,
        "exp": "'Break down' = dejar de funcionar."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs — separable vs inseparable",
        "back": "SEPARABLE: verb + object + particle OR verb + particle + object\n'Turn off the TV.' / 'Turn the TV off.' ✅\n\nINSEPARABLE: object always AFTER particle\n'Look after the children.' ✅\n'Look the children after.' ❌"
      }
    ],
    "readingText": {
      "title": "Babysitting Night",
      "body": "Tonight I'm looking after my little cousin while my aunt is out. Before she left, she said, 'Please turn off the TV before he gets too sleepy, and turn on the hallway light so he isn't scared.' We had dinner, and then he wanted to play, so I told him, 'Sit down and let's read a book instead.' Halfway through the story, my aunt called — her car had broken down on the highway! I promised to look after him until she found a taxi. By the time she finally got home, he had already woken up twice asking for water, and I was exhausted!",
      "translation": "Esta noche estoy cuidando a mi primito mientras mi tía salió. Antes de irse, dijo: 'Por favor apaga la tele antes de que le dé sueño, y enciende la luz del pasillo para que no tenga miedo.' Cenamos, y luego quiso jugar, así que le dije: 'Siéntate y mejor leamos un libro.' A la mitad del cuento, mi tía llamó — ¡su carro se había averiado en la autopista! Le prometí cuidarlo hasta que encontrara un taxi. Para cuando por fin llegó a casa, él ya se había despertado dos veces pidiendo agua, ¡y yo estaba agotada!"
    }
  },
  "138": {
    "title": "Phrasal verbs 2: in/out",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "IN: completar, unirse, entrar",
        "body": "La partícula 'in' suele indicar entrar, completar o volverse parte de algo: llenar un formulario ('fill in'), unirse a una actividad ('join in') o ser aceptado en un grupo ('fit in'). Reconocer esta idea de 'entrar/completar' ayuda a intuir el significado de nuevos phrasal verbs con 'in'.",
        "note": "Please fill in the form. · Come and join in the game. · Did you fit in at your new school?"
      },
      {
        "head": "OUT: descubrir, completar, agotar",
        "body": "'Out' suele indicar que algo sale a la luz (descubrirlo), se lleva a cabo hasta el final (un plan), o se agota por completo (la leche). Estas ideas de 'revelar' y 'agotar/completar' se repiten en muchos phrasal verbs con 'out'.",
        "note": "She found out the truth. · We carried out the plan. · We have run out of milk."
      },
      {
        "head": "LOOK UP: buscar información",
        "body": "'Look up' significa buscar un dato en una fuente de referencia (diccionario, libro, sitio web) para conocer su significado u ortografía. No confundir con 'look at' (mirar algo) ni 'look for' (buscar algo perdido), que no implican una fuente de consulta.",
        "note": "I looked up the word in the dictionary. · Look it up online."
      }
    ],
    "quiz": [
      {
        "q": "Please ___ the form carefully.",
        "opts": [
          "fill in",
          "fill on",
          "fill up",
          "fill out of"
        ],
        "ans": 0,
        "exp": "'Fill in' = completar un formulario."
      },
      {
        "q": "She ___ a lot of information on the topic.",
        "opts": [
          "found out",
          "found in",
          "looked up",
          "looked in"
        ],
        "ans": 2,
        "exp": "'Look up' = buscar información."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: IN/OUT",
        "back": "fill IN · fit IN · join IN · take IN (understand)\ncarry OUT · find OUT · run OUT of · work OUT\ngive OUT · hand OUT · sell OUT"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Welcome! First, can you fill in this form with your details?",
        "translation": "¡Bienvenido! Primero, ¿puedes llenar este formulario con tus datos?"
      },
      {
        "speaker": "user",
        "text": "Sure. I hope I fit in well with the team.",
        "translation": "Claro. Espero encajar bien con el equipo."
      },
      {
        "speaker": "other",
        "text": "Don't worry, everyone will help you find out how things work here.",
        "translation": "No te preocupes, todos te ayudarán a descubrir cómo funcionan las cosas aquí."
      },
      {
        "speaker": "user",
        "text": "Great. Is there a meeting I can join in today?",
        "translation": "Genial. ¿Hay alguna reunión en la que pueda participar hoy?"
      },
      {
        "speaker": "other",
        "text": "Yes, at 3pm. We need to carry out a small project this week.",
        "translation": "Sí, a las 3pm. Necesitamos llevar a cabo un pequeño proyecto esta semana."
      },
      {
        "speaker": "user",
        "text": "Perfect, I'll look up the client's information before then.",
        "translation": "Perfecto, buscaré la información del cliente antes de eso."
      },
      {
        "speaker": "other",
        "text": "Good idea — oh, and we just ran out of coffee, so bring your own!",
        "translation": "Buena idea — ah, y se nos acabó el café, ¡así que trae el tuyo!"
      }
    ]
  },
  "139": {
    "title": "Phrasal verbs 3: out",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "RUN OUT OF: se acabó",
        "body": "'Run out of' describe el momento en que una provisión se agota por completo. A diferencia de otros phrasal verbs, siempre lleva 'of' antes del objeto ('run out of time'), y omitirlo es un error común que conviene evitar.",
        "note": "We have run out of time. · The car ran out of petrol."
      },
      {
        "head": "WORK OUT: varios significados",
        "body": "'Work out' tiene varios significados que se distinguen por el contexto: hacer ejercicio, calcular o resolver un problema, o —si el sujeto es un plan— salir bien al final. Los tres comparten la idea de llegar a un resultado con esfuerzo.",
        "note": "I work out at the gym. · Can you work out the total cost? · I hope things work out for you."
      },
      {
        "head": "COME ACROSS: encontrar por casualidad",
        "body": "'Come across' describe un descubrimiento no planeado: encuentras algo o a alguien por casualidad mientras hacías otra cosa. Si la búsqueda hubiera sido deliberada, sería más natural usar 'look for' o 'find'.",
        "note": "I came across some old photos while cleaning. · I came across an interesting article."
      },
      {
        "head": "POINT OUT: señalar algo",
        "body": "'Point out' significa llamar la atención de alguien sobre un hecho, detalle o error que quizá no había notado. Suele usarse para una observación útil o correctiva, no solo para mencionar algo al azar.",
        "note": "She pointed out a mistake in the report."
      }
    ],
    "quiz": [
      {
        "q": "We've ___ time. The exam starts in 5 minutes!",
        "opts": [
          "run out of",
          "run into",
          "run out",
          "run off"
        ],
        "ans": 0,
        "exp": "'Run out of' = no quedar más de algo."
      },
      {
        "q": "I ___ some old photos while cleaning.",
        "opts": [
          "came across",
          "came up",
          "came in",
          "came out"
        ],
        "ans": 0,
        "exp": "'Come across' = encontrar por casualidad."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: OUT",
        "back": "run OUT of = have no more\nfind OUT = discover\nwork OUT = exercise / calculate / solve\ncarry OUT = perform\nsell OUT = sell everything\npoint OUT = indicate"
      }
    ],
    "readingText": {
      "title": "Cleaning the Attic",
      "body": "On Saturday, my brother and I decided to clean out the attic. Halfway through, we ran out of boxes, so we had to stop and buy more. While sorting through old things, I came across a box of photos from when we were kids — I hadn't seen them in years! My brother tried to work out how old we were in one picture, but he couldn't remember the exact year. Then he pointed out that our mom had written the date on the back of each photo. We laughed and kept working until it got dark, and somehow we still hadn't finished!",
      "translation": "El sábado, mi hermano y yo decidimos limpiar el ático. A la mitad, se nos acabaron las cajas, así que tuvimos que parar y comprar más. Mientras ordenábamos cosas viejas, encontré por casualidad una caja de fotos de cuando éramos niños — ¡no las había visto en años! Mi hermano intentó calcular qué edad teníamos en una foto, pero no recordaba el año exacto. Entonces señaló que nuestra mamá había escrito la fecha detrás de cada foto. Nos reímos y seguimos trabajando hasta que oscureció, ¡y de alguna manera todavía no habíamos terminado!"
    }
  },
  "140": {
    "title": "Phrasal verbs 4: on/off (1)",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "ON: continuar y activar",
        "body": "'On' suele indicar continuación o activación: 'go on' es seguir sin parar, 'turn on' enciende un aparato o luz, y 'put on' es ponerse una prenda de ropa. Aunque parecidas, cada combinación es una expresión fija que se aprende por separado.",
        "note": "Please go on with your story. · Turn on the lights. · Put on your coat."
      },
      {
        "head": "OFF: detener y partir",
        "body": "'Off' suele indicar detener algo o separarse de ello. 'Turn off' apaga un aparato, y 'take off' cambia de sentido según el sujeto: quitarse ropa (persona) o despegar (avión). El contexto aclara cuál se usa.",
        "note": "Turn off the TV before bed. · Take off your shoes. · The plane took off on time."
      },
      {
        "head": "GO OFF: varios significados",
        "body": "'Go off' cambia de sentido según el sujeto: una alarma 'goes off' cuando suena, una bomba cuando explota, y la comida cuando se echa a perder. Los tres comparten la idea de algo que se dispara o cambia de estado de repente.",
        "note": "The alarm went off at 6am. · The bomb went off. · This milk has gone off."
      },
      {
        "head": "PUT OFF y TURN DOWN: rechazar",
        "body": "'Put off' es posponer algo para más tarde, mientras que 'turn down' es rechazar una oferta o invitación directamente. No son intercambiables: aplazar una reunión no es lo mismo que rechazar un trabajo.",
        "note": "The meeting was put off until next week. · She turned down the job offer."
      }
    ],
    "quiz": [
      {
        "q": "The meeting has been ___ until next week.",
        "opts": [
          "put up",
          "put off",
          "put in",
          "put on"
        ],
        "ans": 1,
        "exp": "'Put off' = posponer."
      },
      {
        "q": "She ___ the job offer because the pay was too low.",
        "opts": [
          "turned down",
          "turned off",
          "turned up",
          "turned out"
        ],
        "ans": 0,
        "exp": "'Turn down' = rechazar una oferta."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: ON/OFF (1)",
        "back": "go ON = continue\nturn ON/OFF = switch on/off\nput ON = wear / start (music/TV)\ntake OFF = remove / plane departs\ngo OFF = ring (alarm) / explode / go bad"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Your alarm went off twenty minutes ago! Why are you still in bed?",
        "translation": "¡Tu alarma sonó hace veinte minutos! ¿Por qué sigues en la cama?"
      },
      {
        "speaker": "user",
        "text": "Sorry, I turned it off and fell back asleep.",
        "translation": "Perdón, la apagué y me volví a dormir."
      },
      {
        "speaker": "other",
        "text": "Come on, get up! Put on your clothes, we have to go.",
        "translation": "¡Vamos, levántate! Ponte la ropa, tenemos que irnos."
      },
      {
        "speaker": "user",
        "text": "Can we put off the meeting until tomorrow? I'm so tired.",
        "translation": "¿Podemos posponer la reunión hasta mañana? Estoy muy cansado."
      },
      {
        "speaker": "other",
        "text": "No, we can't. Just turn on the shower and wake yourself up.",
        "translation": "No, no podemos. Solo enciende la ducha y despiértate."
      },
      {
        "speaker": "user",
        "text": "Okay, okay, I'm going on with my morning now.",
        "translation": "Está bien, está bien, ya sigo con mi mañana."
      },
      {
        "speaker": "other",
        "text": "Good. And don't forget to take off your pajamas first!",
        "translation": "Bien. ¡Y no olvides quitarte la pijama primero!"
      }
    ]
  },
  "141": {
    "title": "Phrasal verbs 5: on/off (2)",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "GIVE UP: dejar un hábito",
        "body": "'Give up' es dejar de hacer algo que solías hacer, como fumar, o abandonar un intento antes de terminarlo. Implica dejarlo del todo, no solo pausar: si 'das up' algo, se entiende que no piensas retomarlo.",
        "note": "He gave up smoking three years ago. · Do not give up — you are almost there!"
      },
      {
        "head": "CALL OFF: cancelar",
        "body": "'Call off' es cancelar algo que estaba planeado, como una boda o una reunión. Implica una decisión activa de detenerlo, no que el evento simplemente no ocurriera por sí solo.",
        "note": "They called off the wedding. · The match was called off because of rain."
      },
      {
        "head": "TURN UP / TURN DOWN: volumen y llegada",
        "body": "'Turn up' y 'turn down' suelen referirse al volumen: subir o bajar. Pero 'turn up' tiene otro significado sin relación: llegar a algún lugar, a veces inesperadamente. Solo el contexto aclara cuál es.",
        "note": "Can you turn up the music? · She turned up an hour late."
      },
      {
        "head": "CUT OFF: interrumpir",
        "body": "'Cut off' es detener bruscamente algo que fluía: un suministro como la luz o el agua, o a una persona a mitad de una frase. En ambos casos, algo continuo se corta de repente y por completo.",
        "note": "Our electricity was cut off. · Sorry, I didn't mean to cut you off."
      }
    ],
    "quiz": [
      {
        "q": "He ___ smoking three years ago.",
        "opts": [
          "gave up",
          "gave in",
          "gave out",
          "gave away"
        ],
        "ans": 0,
        "exp": "'Give up' = dejar de hacer algo."
      },
      {
        "q": "The fire alarm ___ during the night.",
        "opts": [
          "went off",
          "went on",
          "went out",
          "went up"
        ],
        "ans": 0,
        "exp": "'Go off' = sonar (alarma) o explotar."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: ON/OFF (2)",
        "back": "call OFF = cancel\nput OFF = postpone / discourage\nturn DOWN = refuse / reduce\nturn UP = arrive / increase volume\ncut OFF = interrupt / stop supply"
      }
    ],
    "readingText": {
      "title": "The Storm",
      "body": "Last month, my cousin was planning her wedding, but a huge storm was coming. Her family had to call off the outdoor ceremony and move everything inside. She almost wanted to give up and cancel the whole day, but her friends convinced her to continue. During the storm, the electricity was cut off for two hours, so everyone waited with candles. Surprisingly, more guests turned up than expected, even in the bad weather! Someone suggested turning down the music so people could talk, and in the end, it became one of the most memorable weddings anyone had ever seen.",
      "translation": "El mes pasado, mi prima estaba planeando su boda, pero se acercaba una tormenta enorme. Su familia tuvo que cancelar la ceremonia al aire libre y mover todo adentro. Casi quiso rendirse y cancelar todo el día, pero sus amigas la convencieron de seguir adelante. Durante la tormenta, se cortó la electricidad por dos horas, así que todos esperaron con velas. Sorprendentemente, llegaron más invitados de los esperados, ¡incluso con el mal clima! Alguien sugirió bajar el volumen de la música para que la gente pudiera hablar, y al final, se convirtió en una de las bodas más memorables que alguien haya visto."
    }
  },
  "142": {
    "title": "Phrasal verbs 6: up/down",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "PICK UP: recoger y aprender",
        "body": "'Pick up' tiene dos sentidos sin relación: recoger a alguien o algo, normalmente en auto ('I'll pick you up at 6'), y adquirir una habilidad de forma informal, sin estudio estructurado ('she picked up Japanese by watching films'). El contexto aclara cuál aplica.",
        "note": "I'll pick you up at 6. · She picked up Japanese just by watching films."
      },
      {
        "head": "TAKE UP y BRING UP",
        "body": "'Take up' es empezar un nuevo pasatiempo. 'Bring up' tiene dos sentidos distintos: criar a un hijo, o mencionar un tema en una conversación. Se parecen en estructura pero significan cosas totalmente distintas.",
        "note": "He took up painting last year. · She was brought up in Spain. · Do not bring up politics at dinner."
      },
      {
        "head": "PUT UP WITH: tolerar",
        "body": "'Put up with' es aguantar algo molesto sin quejarte ni intentar detenerlo. Es un phrasal verb de tres palabras: el objeto siempre va después de 'with', al final, sin separarse como en otros separables de dos palabras.",
        "note": "I cannot put up with his constant complaints. · How do you put up with this noise?"
      },
      {
        "head": "LET DOWN: decepcionar",
        "body": "'Let someone down' es decepcionar a alguien al no cumplir una expectativa o promesa que esperaba de ti. Implica que esa persona confiaba en ti y esa confianza no se cumplió; es más fuerte y personal que 'disappoint'.",
        "note": "I promise I will not let you down."
      }
    ],
    "quiz": [
      {
        "q": "She ___ Japanese in just six months.",
        "opts": [
          "picked up",
          "picked out",
          "picked on",
          "picked in"
        ],
        "ans": 0,
        "exp": "'Pick up' = aprender de forma informal."
      },
      {
        "q": "I can't ___ with his constant complaints.",
        "opts": [
          "put up",
          "put off",
          "put on",
          "put in"
        ],
        "ans": 0,
        "exp": "'Put up with' = tolerar."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: UP/DOWN",
        "back": "give UP = quit\ntake UP = start a hobby\nbring UP = raise a child / mention\npick UP = collect / learn casually\nlet DOWN = disappoint\nturn DOWN = refuse"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Can you pick me up from the airport on Friday?",
        "translation": "¿Puedes recogerme en el aeropuerto el viernes?"
      },
      {
        "speaker": "user",
        "text": "Of course, I won't let you down. What time do you land?",
        "translation": "Claro, no te voy a fallar. ¿A qué hora aterrizas?"
      },
      {
        "speaker": "other",
        "text": "Around 6pm. By the way, I took up painting while I was traveling.",
        "translation": "Como a las 6pm. Por cierto, empecé a pintar como pasatiempo mientras viajaba."
      },
      {
        "speaker": "user",
        "text": "Nice! Don't bring up how bad my drawings are, though.",
        "translation": "¡Qué bien! Pero no menciones lo malos que son mis dibujos."
      },
      {
        "speaker": "other",
        "text": "Ha, I would never! I just hope I can put up with airport traffic.",
        "translation": "Ja, ¡jamás lo haría! Solo espero poder aguantar el tráfico del aeropuerto."
      },
      {
        "speaker": "user",
        "text": "It's usually not too bad on Fridays. See you soon!",
        "translation": "Normalmente no está tan mal los viernes. ¡Nos vemos pronto!"
      }
    ]
  },
  "143": {
    "title": "Phrasal verbs 7: up (1)",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "LOOK UP TO: admirar a alguien",
        "body": "'Look up to' es admirar y respetar a alguien, viéndolo como ejemplo a seguir por sus logros o carácter. Su opuesto es 'look down on': considerar a alguien inferior. Forman un par de actitudes contrarias.",
        "note": "He was looked up to as a hero after saving the child. · Kids often look up to their older siblings."
      },
      {
        "head": "FALL OUT WITH: pelearse",
        "body": "'Fall out with' alguien describe una discusión seria que daña o termina una relación, no solo una diferencia menor. Suele implicar una consecuencia duradera, como dejar de hablarse después.",
        "note": "She fell out with her sister. They do not speak anymore."
      },
      {
        "head": "SET UP y END UP",
        "body": "'Set up' es establecer algo desde cero, como una empresa: un comienzo deliberado. 'End up' describe dónde terminas tras una serie de eventos, a menudo sin planearlo. Son opuestos: uno marca un inicio planeado, el otro un resultado imprevisto.",
        "note": "They set up a new company. · We got lost and ended up in the wrong town."
      },
      {
        "head": "MAKE UP: inventar o reconciliarse",
        "body": "'Make up' tiene dos sentidos distintos según el contexto: inventar algo falso, como una excusa, o que dos personas hagan las paces tras una pelea. Aunque comparten las mismas palabras, no tienen relación entre sí.",
        "note": "He made up an excuse. · They had a fight but made up the next day."
      }
    ],
    "quiz": [
      {
        "q": "He was ___ as a hero after saving the child.",
        "opts": [
          "looked up",
          "looked up to",
          "looked down on",
          "looked into"
        ],
        "ans": 1,
        "exp": "'Look up to' = admirar/respetar."
      },
      {
        "q": "She ___ her sister. They don't speak anymore.",
        "opts": [
          "fell out with",
          "fell into",
          "fell back on",
          "fell over"
        ],
        "ans": 0,
        "exp": "'Fall out with' = tener una discusión seria."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: UP (1)",
        "back": "set UP = establish\nmake UP = invent / reconcile\nend UP = finally be somewhere\nbuild UP = increase gradually\ngive UP = stop trying\nbottom UP = from the base"
      }
    ],
    "readingText": {
      "title": "Starting a Business Together",
      "body": "My sister and I always looked up to our grandfather, who ran a small bakery for forty years. Last year, we decided to set up our own café in his memory. At first, everything went well, but we fell out with each other over small decisions, like the menu and the colors of the walls. We didn't speak for almost a month. Eventually, we both missed working together, so we made up over coffee — appropriately, in a café. Now, after all those arguments, we somehow ended up with a business we're both proud of, and it feels like he's still watching over us.",
      "translation": "Mi hermana y yo siempre admiramos a nuestro abuelo, que tuvo una pequeña panadería durante cuarenta años. El año pasado, decidimos abrir nuestra propia cafetería en su memoria. Al principio todo iba bien, pero tuvimos una fuerte discusión por decisiones pequeñas, como el menú y los colores de las paredes. No nos hablamos durante casi un mes. Con el tiempo, ambas extrañamos trabajar juntas, así que hicimos las paces tomando un café — apropiadamente, en una cafetería. Ahora, después de todas esas discusiones, terminamos con un negocio del que ambas estamos orgullosas, y se siente como si él todavía nos estuviera cuidando."
    }
  },
  "144": {
    "title": "Phrasal verbs 8: up (2)",
    "topic": "Phrasal Verbs",
    "level": "B2",
    "explain": [
      {
        "head": "DEAL WITH: manejar un problema",
        "body": "'Deal with' es responsabilizarte de un problema y afrontarlo activamente, en vez de ignorarlo. Es una expresión general que sirve para casi cualquier asunto que necesite atención, desde un aparato roto hasta una persona difícil.",
        "note": "We need to deal with this issue before it gets worse."
      },
      {
        "head": "COME UP WITH: producir una idea",
        "body": "'Come up with' es pensar o producir algo nuevo, como una idea o solución, mediante esfuerzo creativo o mental. Resalta el momento en que algo se genera, normalmente para resolver una necesidad.",
        "note": "She came up with a brilliant idea."
      },
      {
        "head": "KEEP UP WITH y CATCH UP",
        "body": "'Keep up with' es mantener el mismo ritmo que otros sin quedarte atrás. 'Catch up' es cerrar la brecha después de haberte quedado atrás, hasta alcanzar el mismo nivel. Uno es mantenerse al día; el otro, recuperar terreno perdido.",
        "note": "It is hard to keep up with all the news. · I missed a class, so I need to catch up."
      },
      {
        "head": "GET USED TO: acostumbrarse",
        "body": "'Get used to' + sustantivo o -ing describe el proceso de acostumbrarte a algo nuevo. No confundir con 'used to' + verbo base, que describe un hábito pasado que ya no ocurre ('I used to smoke'): una es adaptación presente, la otra rutina descontinuada.",
        "note": "It took me a while to get used to the new software. · I'm used to waking up early now."
      }
    ],
    "quiz": [
      {
        "q": "We need to ___ this issue before it gets worse.",
        "opts": [
          "deal with",
          "deal in",
          "deal on",
          "deal off"
        ],
        "ans": 0,
        "exp": "'Deal with' = manejar un problema."
      },
      {
        "q": "It took me a while to ___ the new software.",
        "opts": [
          "get on with",
          "get over",
          "get used to",
          "get off"
        ],
        "ans": 2,
        "exp": "'Get used to' = acostumbrarse a algo."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: UP (2)",
        "back": "come UP with = produce an idea\nput UP with = tolerate\nkeep UP with = maintain the same pace\ncatch UP = reach the same level\nuse UP = consume completely"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "How are you feeling? Are you ready to deal with all the homework?",
        "translation": "¿Cómo te sientes? ¿Listo para lidiar con toda la tarea?"
      },
      {
        "speaker": "user",
        "text": "Not really. I don't know how I'll catch up after a whole week off.",
        "translation": "La verdad no. No sé cómo voy a ponerme al día después de una semana entera."
      },
      {
        "speaker": "other",
        "text": "Don't worry, the teacher will come up with a plan to help you.",
        "translation": "No te preocupes, la profesora va a idear un plan para ayudarte."
      },
      {
        "speaker": "user",
        "text": "I hope so. It's also hard to keep up with the group project.",
        "translation": "Eso espero. También es difícil mantener el ritmo con el proyecto grupal."
      },
      {
        "speaker": "other",
        "text": "Your teammates understand. You'll get used to the new routine soon.",
        "translation": "Tus compañeros entienden. Pronto te acostumbrarás a la nueva rutina."
      },
      {
        "speaker": "user",
        "text": "Thanks, that makes me feel better.",
        "translation": "Gracias, eso me hace sentir mejor."
      }
    ]
  },
  "145": {
    "title": "Phrasal verbs 9: away/back",
    "topic": "Phrasal Verbs",
    "level": "B2",
    "explain": [
      {
        "head": "AWAY: irse, tirar, regalar",
        "body": "'Away' suele indicar que se crea distancia: irse de un lugar, deshacerte de algo, o dárselo a otra persona. 'Get away' es escapar o hacer una escapada, 'throw away' es tirar, y 'give away' es regalar. Todos comparten la idea de alejar algo (o alejarte tú).",
        "note": "Let's get away for the weekend. · Don't throw away that box! · She gave away all her old clothes."
      },
      {
        "head": "GIVE AWAY: revelar un secreto",
        "body": "Además de donar, 'give away' también significa revelar sin querer información que debía ser secreta, como el final de una película. En ambos sentidos, algo que era solo tuyo termina en manos de otro, a propósito o por accidente.",
        "note": "Do not give away the ending of the film!"
      },
      {
        "head": "BACK: volver y repetir",
        "body": "'Back' suele indicar un regreso a un punto anterior: volver físicamente, devolver algo, o repetir una acción ya hecha antes. 'Call back' es devolver una llamada, 'get back' es regresar, y 'pay back' es devolver dinero. La idea de 'volver' conecta la mayoría de estos verbos.",
        "note": "I'll call you back later. · What time will you get back? · He paid back the loan."
      },
      {
        "head": "BREAK DOWN: perder el control emocional",
        "body": "'Break down' describe una máquina que deja de funcionar, pero con una persona como sujeto significa perder el control emocional y llorar, a menudo tras una mala noticia. El vínculo entre ambos sentidos: algo deja de funcionar con normalidad.",
        "note": "She broke down in tears when she heard the news."
      }
    ],
    "quiz": [
      {
        "q": "She ___ every time she hears that song.",
        "opts": [
          "breaks down",
          "breaks out",
          "breaks in",
          "breaks away"
        ],
        "ans": 0,
        "exp": "'Break down' (persona) = llorar / perder el control emocional."
      },
      {
        "q": "They ___ an agreement after hours of negotiation.",
        "opts": [
          "came up with",
          "came across",
          "came in",
          "came over"
        ],
        "ans": 0,
        "exp": "'Come up with' = producir/pensar algo."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: AWAY/BACK",
        "back": "get AWAY = escape / go on holiday\ngive AWAY = donate / reveal a secret\nthrow AWAY = discard\ncall BACK = phone again\nget BACK = return\npay BACK = repay"
      }
    ],
    "readingText": {
      "title": "A Weekend Away",
      "body": "I needed to get away from the city, so I spent the weekend at my parents' house. While I was there, we cleaned out the garage together. We decided to throw away broken tools and give away old furniture to a neighbor who needed it. In the middle of sorting boxes, my mom found letters from my grandmother and broke down in tears — she still misses her so much. Later, my friend called to ask when I would get back to the city, but I told her I'd call back after dinner. Before I left, my dad reminded me to pay back the money I borrowed last month!",
      "translation": "Necesitaba alejarme de la ciudad, así que pasé el fin de semana en casa de mis padres. Mientras estuve ahí, limpiamos el garaje juntos. Decidimos tirar las herramientas rotas y regalar los muebles viejos a un vecino que los necesitaba. En medio de ordenar cajas, mi mamá encontró cartas de mi abuela y se echó a llorar — todavía la extraña muchísimo. Más tarde, mi amiga llamó para preguntar cuándo regresaría a la ciudad, pero le dije que la llamaría de vuelta después de la cena. Antes de irme, ¡mi papá me recordó que le devolviera el dinero que le pedí prestado el mes pasado!"
    }
  }
};
