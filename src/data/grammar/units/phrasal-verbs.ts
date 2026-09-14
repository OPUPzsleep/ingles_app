import { Unit } from '@/types/grammar';

export const phrasalVerbsUnits: Record<number, Unit> = {
  "137": {
    "title": "Phrasal verbs 1: introduction",
    "topic": "Phrasal Verbs",
    "explain": [
      {
        "head": "What is a phrasal verb?",
        "body": "A phrasal verb combines a verb with one or two small particles — words like 'up', 'off', 'on', or 'out' that look like prepositions or adverbs but function here as part of the verb itself. The combined meaning is often completely unrelated to the individual words, so you cannot guess it just by translating each piece separately; it has to be learned as a single unit, almost like a brand-new word. This is exactly why phrasal verbs are one of the hardest parts of English for learners — the pieces are simple, but together they mean something new.",
        "note": "give up = stop trying (not 'dar arriba') · look after = take care of (not 'mirar después')"
      },
      {
        "head": "Separable phrasal verbs",
        "body": "Separable phrasal verbs allow the object to go in two possible positions: right after the particle, or squeezed in between the verb and the particle. When the object is a pronoun ('it', 'them', 'her'...) rather than a full noun, though, only the middle position is allowed — the pronoun must split the verb and particle apart. This is a strict rule rather than a style choice, so 'turn off it' is always wrong even though 'turn off the TV' and 'turn the TV off' are both fine.",
        "note": "Turn off the TV. = Turn the TV off. ✅ · Turn it off. ✅ (NOT: Turn off it. ❌)"
      },
      {
        "head": "Inseparable phrasal verbs",
        "body": "Inseparable phrasal verbs behave differently: the verb and particle form a fixed unit that can never be split, so the object — whether it's a full noun or a pronoun — always comes after the particle. This is the mirror image of separable phrasal verbs, where a pronoun object forces the middle position; here, a pronoun still goes at the very end. There's no reliable shortcut for telling which phrasal verbs are separable and which are inseparable, so it's worth learning each one together with its pattern.",
        "note": "Look after the children. = Look after them. ✅ (NOT: Look the children after. ❌)"
      },
      {
        "head": "Intransitive phrasal verbs",
        "body": "Some phrasal verbs are intransitive, meaning they take no object at all — the action they describe is complete in itself, with nothing being acted upon. Because there's no object, the separable-versus-inseparable question simply doesn't apply to these verbs. You just use the verb and particle together as a fixed combination, as in 'the car broke down' or 'she woke up'.",
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
        "exp": "Separable phrasal verb: 'turn off the TV'."
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
        "exp": "'Break down' = stop working."
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
    "explain": [
      {
        "head": "IN — completing, joining, entering",
        "body": "The particle 'in' often carries a sense of entering, completing, or becoming part of something — filling in a form completes it with the missing information, joining in a game means entering the activity, and fitting in means becoming accepted as part of a group. Recognizing this shared thread of 'entering/completing' can help you guess the rough meaning of new 'in' phrasal verbs, even though the exact translation still has to be learned.",
        "note": "Please fill in the form. · Come and join in the game. · Did you fit in at your new school?"
      },
      {
        "head": "OUT — discovering, completing, using up",
        "body": "The particle 'out' often signals that something is being brought into the open (finding it out, discovering it), carried all the way through to completion (carrying out a plan), or used up entirely until nothing remains (running out of milk). These senses of 'revealing' and 'exhausting/completing' recur across many 'out' phrasal verbs, which is why the same particle turns up in so many different-looking expressions.",
        "note": "She found out the truth. · We carried out the plan. · We have run out of milk."
      },
      {
        "head": "LOOK UP — checking information",
        "body": "'Look up' specifically means to search for a piece of information in a reference source, such as a dictionary, a book, or a website, in order to find its meaning or spelling. It's easy to confuse with similar-looking phrasal verbs: 'look at' just means to direct your eyes toward something, and 'look for' means to search for something you've lost or want to find — neither implies a reference source the way 'look up' does.",
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
        "exp": "'Fill in' = complete a form."
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
        "exp": "'Look up' = find information."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: IN/OUT",
        "back": "fill IN · fit IN · join IN · take IN (understand)\ncarry OUT · find OUT · run OUT of · work OUT\ngive OUT · hand OUT · sell OUT"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Welcome! First, can you fill in this form with your details?", "translation": "¡Bienvenido! Primero, ¿puedes llenar este formulario con tus datos?" },
      { "speaker": "user", "text": "Sure. I hope I fit in well with the team.", "translation": "Claro. Espero encajar bien con el equipo." },
      { "speaker": "other", "text": "Don't worry, everyone will help you find out how things work here.", "translation": "No te preocupes, todos te ayudarán a descubrir cómo funcionan las cosas aquí." },
      { "speaker": "user", "text": "Great. Is there a meeting I can join in today?", "translation": "Genial. ¿Hay alguna reunión en la que pueda participar hoy?" },
      { "speaker": "other", "text": "Yes, at 3pm. We need to carry out a small project this week.", "translation": "Sí, a las 3pm. Necesitamos llevar a cabo un pequeño proyecto esta semana." },
      { "speaker": "user", "text": "Perfect, I'll look up the client's information before then.", "translation": "Perfecto, buscaré la información del cliente antes de eso." },
      { "speaker": "other", "text": "Good idea — oh, and we just ran out of coffee, so bring your own!", "translation": "Buena idea — ah, y se nos acabó el café, ¡así que trae el tuyo!" }
    ]
  },
  "139": {
    "title": "Phrasal verbs 3: out",
    "topic": "Phrasal Verbs",
    "explain": [
      {
        "head": "RUN OUT OF — no more left",
        "body": "'Run out of' describes the moment a supply is completely used up and nothing remains — you had something, and now you don't. Unlike many phrasal verbs, this one is always followed by 'of' before its object ('run out of time', 'run out of petrol'), and dropping that 'of' is a common mistake worth avoiding.",
        "note": "We have run out of time. · The car ran out of petrol."
      },
      {
        "head": "WORK OUT — several meanings",
        "body": "'Work out' is one of those phrasal verbs with several unrelated meanings that you have to tell apart by context: it can mean to exercise physically at a gym, to calculate a number or solve a problem through reasoning, or — when the subject is a plan or situation rather than a person — to turn out successfully in the end. All three meanings share only a loose idea of reaching a result through effort, so the surrounding sentence is what tells you which one is meant.",
        "note": "I work out at the gym. · Can you work out the total cost? · I hope things work out for you."
      },
      {
        "head": "COME ACROSS — finding by chance",
        "body": "'Come across' describes an unplanned discovery — you find or meet something or someone by chance, while you were doing or looking for something else entirely. This contrasts with a deliberate search: if you had actively been trying to find it, 'look for' or 'find' would be the more natural choice instead.",
        "note": "I came across some old photos while cleaning. · I came across an interesting article."
      },
      {
        "head": "POINT OUT — drawing attention to something",
        "body": "'Point out' means to draw someone's attention to a fact, detail, or mistake that they might otherwise have missed or not noticed on their own. It's often used for a helpful or corrective observation — pointing out an error in a report means telling someone about it so it can be fixed, not just mentioning something at random.",
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
        "exp": "'Run out of' = have no more of something."
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
        "exp": "'Come across' = find by chance."
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
    "explain": [
      {
        "head": "ON — continuing and operating",
        "body": "The particle 'on' often carries a sense of continuation or activation. 'Go on' means to keep continuing an action or story without stopping, 'turn on' starts up a device or a light, and 'put on' means to dress yourself in a piece of clothing. Although these look similar, each combination has become its own fixed expression that needs to be learned individually.",
        "note": "Please go on with your story. · Turn on the lights. · Put on your coat."
      },
      {
        "head": "OFF — stopping and departing",
        "body": "The particle 'off' often signals stopping or separating from something. 'Turn off' switches a device off so it stops running, and 'take off' has two quite different senses depending on the subject — for a person, it means to remove an item of clothing, while for a plane, it means to leave the ground and begin flying. Context makes clear which meaning of 'take off' is intended.",
        "note": "Turn off the TV before bed. · Take off your shoes. · The plane took off on time."
      },
      {
        "head": "GO OFF — several meanings",
        "body": "'Go off' is another phrasal verb with several distinct meanings depending on the subject: an alarm 'goes off' when it starts ringing, a bomb 'goes off' when it explodes, and food 'goes off' when it spoils and becomes unfit to eat. All three share a loose idea of something being suddenly triggered or changing state, but the subject and context tell you which sense applies.",
        "note": "The alarm went off at 6am. · The bomb went off. · This milk has gone off."
      },
      {
        "head": "PUT OFF and TURN DOWN — refusing",
        "body": "'Put off' means to delay or reschedule something to a later time, while 'turn down' means to reject or refuse an offer, invitation, or request outright. Even though both can involve a kind of negative response, they are not interchangeable: postponing a meeting is not the same as refusing a job offer, so the right verb depends on whether you're delaying something or declining it.",
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
        "exp": "'Put off' = postpone."
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
        "exp": "'Turn down' = refuse an offer."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: ON/OFF (1)",
        "back": "go ON = continue\nturn ON/OFF = switch on/off\nput ON = wear / start (music/TV)\ntake OFF = remove / plane departs\ngo OFF = ring (alarm) / explode / go bad"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Your alarm went off twenty minutes ago! Why are you still in bed?", "translation": "¡Tu alarma sonó hace veinte minutos! ¿Por qué sigues en la cama?" },
      { "speaker": "user", "text": "Sorry, I turned it off and fell back asleep.", "translation": "Perdón, la apagué y me volví a dormir." },
      { "speaker": "other", "text": "Come on, get up! Put on your clothes, we have to go.", "translation": "¡Vamos, levántate! Ponte la ropa, tenemos que irnos." },
      { "speaker": "user", "text": "Can we put off the meeting until tomorrow? I'm so tired.", "translation": "¿Podemos posponer la reunión hasta mañana? Estoy muy cansado." },
      { "speaker": "other", "text": "No, we can't. Just turn on the shower and wake yourself up.", "translation": "No, no podemos. Solo enciende la ducha y despiértate." },
      { "speaker": "user", "text": "Okay, okay, I'm going on with my morning now.", "translation": "Está bien, está bien, ya sigo con mi mañana." },
      { "speaker": "other", "text": "Good. And don't forget to take off your pajamas first!", "translation": "Bien. ¡Y no olvides quitarte la pijama primero!" }
    ]
  },
  "141": {
    "title": "Phrasal verbs 5: on/off (2)",
    "topic": "Phrasal Verbs",
    "explain": [
      {
        "head": "GIVE UP — stopping a habit",
        "body": "'Give up' means to stop doing something you used to do regularly, often a habit like smoking, or to abandon an effort or attempt before finishing it. It carries a sense of quitting rather than simply pausing — once you 'give up' on something, the implication is that you don't plan to continue or try again.",
        "note": "He gave up smoking three years ago. · Do not give up — you are almost there!"
      },
      {
        "head": "CALL OFF — cancelling",
        "body": "'Call off' means to cancel something that was previously planned or arranged, such as a wedding, a match, or a meeting. It implies an active decision to stop something from going ahead, rather than the event simply failing to happen on its own.",
        "note": "They called off the wedding. · The match was called off because of rain."
      },
      {
        "head": "TURN UP / TURN DOWN — volume and arrival",
        "body": "'Turn up' and 'turn down' most commonly refer to adjusting volume or intensity — turning music up makes it louder, turning it down makes it quieter. But 'turn up' has a second, unrelated meaning: to arrive somewhere, often unexpectedly or later than planned. Only context tells you whether 'turn up' refers to volume or arrival.",
        "note": "Can you turn up the music? · She turned up an hour late."
      },
      {
        "head": "CUT OFF — interrupting a supply or connection",
        "body": "'Cut off' means to abruptly stop something that was flowing or continuing — this can be a utility supply like electricity or water being disconnected, or a person being interrupted mid-sentence so they can't finish speaking. In both cases, something ongoing is suddenly and completely stopped.",
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
        "exp": "'Give up' = stop doing something."
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
        "exp": "'Go off' = ring/sound (alarm) or explode."
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
    "explain": [
      {
        "head": "PICK UP — collecting and learning informally",
        "body": "'Pick up' has two common, unrelated meanings: to collect a person or object, typically by car, from a particular place ('I'll pick you up at 6'), and to acquire a skill or knowledge informally, through exposure and practice rather than structured study ('she picked up Japanese by watching films'). Context — what follows the phrase and what the object is — makes clear which sense is intended.",
        "note": "I'll pick you up at 6. · She picked up Japanese just by watching films."
      },
      {
        "head": "TAKE UP and BRING UP",
        "body": "'Take up' means to begin a new hobby or activity that you didn't do before, showing a fresh commitment of time to it. 'Bring up' has two separate senses: to raise a child from birth to adulthood, or to introduce a topic into a conversation that wasn't being discussed yet. The two phrasal verbs look similar in structure but have completely different meanings, so it helps to learn them as separate fixed expressions.",
        "note": "He took up painting last year. · She was brought up in Spain. · Do not bring up politics at dinner."
      },
      {
        "head": "PUT UP WITH — tolerating",
        "body": "'Put up with' means to endure or tolerate something unpleasant or annoying without complaining or trying to stop it. It's a three-word phrasal verb, and the object always comes after 'with' at the very end — you cannot separate the parts or place the object in the middle, unlike some two-word separable phrasal verbs.",
        "note": "I cannot put up with his constant complaints. · How do you put up with this noise?"
      },
      {
        "head": "LET DOWN — disappointing",
        "body": "'Let someone down' means to disappoint them by failing to fulfil an expectation, promise, or responsibility they were counting on you for. It implies the other person trusted or relied on you in some way, and that trust wasn't rewarded — a slightly stronger, more personal word than simply 'disappoint'.",
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
        "exp": "'Pick up' = learn informally."
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
        "exp": "'Put up with' = tolerate."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: UP/DOWN",
        "back": "give UP = quit\ntake UP = start a hobby\nbring UP = raise a child / mention\npick UP = collect / learn casually\nlet DOWN = disappoint\nturn DOWN = refuse"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Can you pick me up from the airport on Friday?", "translation": "¿Puedes recogerme en el aeropuerto el viernes?" },
      { "speaker": "user", "text": "Of course, I won't let you down. What time do you land?", "translation": "Claro, no te voy a fallar. ¿A qué hora aterrizas?" },
      { "speaker": "other", "text": "Around 6pm. By the way, I took up painting while I was traveling.", "translation": "Como a las 6pm. Por cierto, empecé a pintar como pasatiempo mientras viajaba." },
      { "speaker": "user", "text": "Nice! Don't bring up how bad my drawings are, though.", "translation": "¡Qué bien! Pero no menciones lo malos que son mis dibujos." },
      { "speaker": "other", "text": "Ha, I would never! I just hope I can put up with airport traffic.", "translation": "Ja, ¡jamás lo haría! Solo espero poder aguantar el tráfico del aeropuerto." },
      { "speaker": "user", "text": "It's usually not too bad on Fridays. See you soon!", "translation": "Normalmente no está tan mal los viernes. ¡Nos vemos pronto!" }
    ]
  },
  "143": {
    "title": "Phrasal verbs 7: up (1)",
    "topic": "Phrasal Verbs",
    "explain": [
      {
        "head": "LOOK UP TO — admiring someone",
        "body": "'Look up to' someone means to admire and respect them, often seeing them as an example or role model to follow, typically because of their achievements, character, or position. It has a natural opposite, 'look down on', which means to consider someone inferior or to feel superior to them — the two expressions form a clear pair of contrasting attitudes toward another person.",
        "note": "He was looked up to as a hero after saving the child. · Kids often look up to their older siblings."
      },
      {
        "head": "FALL OUT WITH — arguing",
        "body": "'Fall out with' someone describes having a serious disagreement or argument that damages or ends a relationship, not just a minor difference of opinion. The phrase usually implies some lasting consequence — the people involved may stop speaking to each other afterward, since the argument leaves real damage behind.",
        "note": "She fell out with her sister. They do not speak anymore."
      },
      {
        "head": "SET UP and END UP",
        "body": "'Set up' means to establish, organize, or start something from scratch, such as a company or a piece of equipment — it marks a deliberate beginning. 'End up', by contrast, describes where you finally arrive after a series of events, often somewhere unplanned or unexpected, as when getting lost leads you to end up in the wrong town. The two verbs sit at opposite ends of a process: one marks a planned start, the other an often-unplanned result.",
        "note": "They set up a new company. · We got lost and ended up in the wrong town."
      },
      {
        "head": "MAKE UP — invent or reconcile",
        "body": "'Make up' has two quite different meanings depending on context: to invent something, like a story or an excuse, that isn't true, or for two people who have argued to become friends again and resolve their disagreement. Despite sharing the same words, these two senses have nothing to do with each other, so the surrounding sentence is what tells you which one is meant.",
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
        "exp": "'Look up to' = admire/respect."
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
        "exp": "'Fall out with' = have a serious argument."
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
    "explain": [
      {
        "head": "DEAL WITH — handling a problem",
        "body": "'Deal with' means to take responsibility for a problem, task, or situation and actively handle it, rather than ignoring it or leaving it unresolved. It's a general-purpose expression that works for almost any kind of issue that needs addressing, from a broken appliance to a difficult person.",
        "note": "We need to deal with this issue before it gets worse."
      },
      {
        "head": "COME UP WITH — producing an idea",
        "body": "'Come up with' means to think of or produce something new, such as an idea, plan, excuse, or solution, often through creative or mental effort. It emphasizes the moment something is generated, usually in response to a need or a problem that required a solution.",
        "note": "She came up with a brilliant idea."
      },
      {
        "head": "KEEP UP WITH and CATCH UP",
        "body": "'Keep up with' means to maintain the same pace, speed, or level as someone or something else without falling behind — like keeping up with the news by following it continuously. 'Catch up', by contrast, describes closing a gap after you've already fallen behind, until you reach the same level as everyone else. So 'keep up' is about staying level throughout, while 'catch up' is about recovering lost ground.",
        "note": "It is hard to keep up with all the news. · I missed a class, so I need to catch up."
      },
      {
        "head": "GET USED TO — becoming accustomed",
        "body": "'Get used to' followed by a noun or an -ing form describes the gradual process of becoming familiar and comfortable with something new, until it no longer feels strange. It's easy to confuse with 'used to' + base verb, which instead describes a past habit that no longer happens ('I used to smoke') — the two look similar but express completely different ideas, one about adapting to something present, the other about a discontinued past routine.",
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
        "exp": "'Deal with' = handle a problem."
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
        "exp": "'Get used to' = become accustomed to."
      }
    ],
    "flashcards": [
      {
        "front": "Phrasal verbs: UP (2)",
        "back": "come UP with = produce an idea\nput UP with = tolerate\nkeep UP with = maintain the same pace\ncatch UP = reach the same level\nuse UP = consume completely"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "How are you feeling? Are you ready to deal with all the homework?", "translation": "¿Cómo te sientes? ¿Listo para lidiar con toda la tarea?" },
      { "speaker": "user", "text": "Not really. I don't know how I'll catch up after a whole week off.", "translation": "La verdad no. No sé cómo voy a ponerme al día después de una semana entera." },
      { "speaker": "other", "text": "Don't worry, the teacher will come up with a plan to help you.", "translation": "No te preocupes, la profesora va a idear un plan para ayudarte." },
      { "speaker": "user", "text": "I hope so. It's also hard to keep up with the group project.", "translation": "Eso espero. También es difícil mantener el ritmo con el proyecto grupal." },
      { "speaker": "other", "text": "Your teammates understand. You'll get used to the new routine soon.", "translation": "Tus compañeros entienden. Pronto te acostumbrarás a la nueva rutina." },
      { "speaker": "user", "text": "Thanks, that makes me feel better.", "translation": "Gracias, eso me hace sentir mejor." }
    ]
  },
  "145": {
    "title": "Phrasal verbs 9: away/back",
    "topic": "Phrasal Verbs",
    "explain": [
      {
        "head": "AWAY — leaving, discarding, giving",
        "body": "The particle 'away' often signals distance being created — leaving a place, getting rid of an object you no longer want, or giving something to another person so it's no longer yours. 'Get away' means to escape or take a break somewhere else, 'throw away' means to discard, and 'give away' means to hand something over for free. This shared sense of moving something (or yourself) apart from where it was is what connects these otherwise different verbs.",
        "note": "Let's get away for the weekend. · Don't throw away that box! · She gave away all her old clothes."
      },
      {
        "head": "GIVE AWAY — revealing a secret",
        "body": "Besides meaning to donate something, 'give away' also has a second sense: to accidentally reveal information that was meant to stay secret, such as the ending of a film or a surprise. In both meanings, something that belonged only to you — an object or a piece of private information — ends up being handed over to someone else, whether intentionally or not.",
        "note": "Do not give away the ending of the film!"
      },
      {
        "head": "BACK — returning and repeating",
        "body": "The particle 'back' typically signals a return to an earlier point — physically returning somewhere, returning an object or favor, or repeating an action that already happened once before. 'Call back' means to return a phone call, 'get back' means to return to a place, and 'pay back' means to return money you owe. This common thread of 'returning' runs through most 'back' phrasal verbs, even though the exact activity differs each time.",
        "note": "I'll call you back later. · What time will you get back? · He paid back the loan."
      },
      {
        "head": "BREAK DOWN — losing emotional control",
        "body": "'Break down' most familiarly describes a machine or vehicle stopping working, but when the subject is a person, it takes on a very different meaning: losing emotional control and crying, often after receiving upsetting news. The link between the two senses is the idea of something, or someone, suddenly failing to keep functioning normally — a car stops running, a person stops holding back their emotions.",
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
        "exp": "'Break down' (person) = cry / lose control emotionally."
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
        "exp": "'Come up with' = produce/think of something."
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
