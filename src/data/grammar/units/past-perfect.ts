import { Unit } from '@/types/grammar';

export const pastPerfectUnits: Record<number, Unit> = {
  "15": {
    "title": "Past Perfect (I had done)",
    "topic": "Past Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "Forma: had + participio",
        "body": "Se arma con 'had' + participio pasado, y 'had' nunca cambia: vale igual para I, she o they. El negativo es 'hadn't' y para preguntar se pone 'had' delante del sujeto.",
        "note": "I had finished · She had gone · They had eaten · We hadn't started · Had you met?"
      },
      {
        "head": "La más antigua de dos acciones",
        "body": "Su trabajo principal es marcar cuál de dos hechos pasados ocurrió primero. En 'when I arrived, Tom had already gone home', primero se fue Tom (past perfect) y luego llegué yo (past simple). En español equivale a 'ya se había ido'.",
        "note": "When I arrived at the party, Tom had already gone home. (1st: Tom left. 2nd: I arrived.)"
      },
      {
        "head": "Con because, after, by the time",
        "body": "Estas conjunciones ya anuncian un orden entre dos hechos pasados, y el past perfect confirma cuál fue el primero. Por eso aparecen juntos tan a menudo, como en 'by the time I got there, the film had started'.",
        "note": "She was tired because she hadn't slept well. · By the time I got there, the film had started."
      }
    ],
    "table": {
      "cols": [
        "Earlier action (Past Perfect)",
        "Later action (Past Simple)"
      ],
      "rows": [
        [
          "Tom HAD GONE home",
          "when I ARRIVED."
        ],
        [
          "By the time we GOT there",
          "the film HAD STARTED."
        ],
        [
          "She WAS tired",
          "because she HADN'T SLEPT."
        ]
      ]
    },
    "quiz": [
      {
        "q": "When I arrived, Tom ___ already ___.",
        "opts": [
          "has/left",
          "had/left",
          "did/leave",
          "was/leaving"
        ],
        "ans": 1,
        "exp": "Acción anterior a otra en pasado → past perfect: 'had already left'."
      },
      {
        "q": "She was tired because she ___ well the night before.",
        "opts": [
          "didn't sleep",
          "hadn't slept",
          "hasn't slept",
          "wasn't sleeping"
        ],
        "ans": 1,
        "exp": "Razón de una situación pasada → past perfect: 'hadn't slept'."
      },
      {
        "q": "By the time we got to the cinema, the film ___.",
        "opts": [
          "already started",
          "had already started",
          "has already started",
          "was already starting"
        ],
        "ans": 1,
        "exp": "'By the time' + pasado → past perfect: 'had already started'."
      }
    ],
    "flashcards": [
      {
        "front": "When do you use the past perfect?",
        "back": "For the EARLIER of two past actions:\nWhen she arrived, we had already eaten.\n(1st: we ate → past perfect)\n(2nd: she arrived → past simple)"
      },
      {
        "front": "Complete: 'By the time I got to the station, the train ___.'",
        "back": "By the time I got to the station, the train HAD ALREADY LEFT.\n(past perfect = the earlier action)"
      }
    ],
    "readingText": {
      "title": "Too Late for the Surprise",
      "body": "When I got to the office yesterday, something strange had happened. My colleagues had already left, and someone had turned off all the lights. I later found out there had been a surprise party planned for me, but by the time I arrived, everyone had already gone home! Apparently, my boss had sent an email about it, but I hadn't checked my inbox that morning. Because I hadn't read the message, I missed the whole thing. By the time I found out, it was too late to celebrate.",
      "translation": "Cuando llegué a la oficina ayer, algo extraño había pasado. Mis colegas ya se habían ido, y alguien había apagado todas las luces. Luego descubrí que se había planeado una fiesta sorpresa para mí, pero cuando llegué, ¡todos ya se habían ido a casa! Al parecer, mi jefe había enviado un correo sobre eso, pero yo no había revisado mi bandeja de entrada esa mañana. Como no había leído el mensaje, me perdí todo. Cuando me enteré, ya era demasiado tarde para celebrar."
    }
  },
  "16": {
    "title": "Past Perfect Continuous (I had been doing)",
    "topic": "Past Perfect",
    "level": "B2",
    "explain": [
      {
        "head": "Forma: had been + -ing",
        "body": "Se arma con 'had been' + el verbo en -ing, uniendo la idea de 'antes de otro momento pasado' con la de una actividad en curso. Igual que el past perfect simple, 'had' nunca cambia según el sujeto. Describe una acción que estuvo en progreso durante un tiempo antes de ese otro momento pasado.",
        "note": "I had been waiting · She had been working · They had been studying"
      },
      {
        "head": "Actividad antes de un momento pasado",
        "body": "Se usa para una actividad en progreso durante un tiempo antes de un momento pasado concreto, a menudo para explicar por qué alguien estaba en cierto estado. 'I was tired because I had been working all day' explica el cansancio con la actividad; el foco está en la duración, como el present perfect continuous pero un paso más atrás en el pasado.",
        "note": "I was tired because I had been working all day. · When he arrived, we had been waiting for two hours."
      }
    ],
    "quiz": [
      {
        "q": "I was exhausted because I ___ for 12 hours.",
        "opts": [
          "worked",
          "had worked",
          "had been working",
          "was working"
        ],
        "ans": 2,
        "exp": "Actividad que explica un estado pasado → 'had been working'."
      },
      {
        "q": "She ___ for ten minutes when the bus finally arrived.",
        "opts": [
          "waited",
          "had waited",
          "had been waiting",
          "was waiting"
        ],
        "ans": 2,
        "exp": "Actividad en curso antes de un momento pasado → 'had been waiting'."
      }
    ],
    "flashcards": [
      {
        "front": "Past Perfect vs Past Perfect Continuous",
        "back": "SIMPLE: She had written 3 emails. (completed, result)\nCONTINUOUS: She had been writing emails. (activity, duration)\n\nBoth: activity/state before another past moment"
      }
    ],
    "readingText": {
      "title": "Finally, a Break",
      "body": "By the time my shift ended, I had been standing at the counter for eight hours straight. My feet hurt because I had been working non-stop since early morning. My coworker looked exhausted too — she had been dealing with angry customers all afternoon. When our manager finally arrived, we had been waiting almost twenty minutes for him to open the storeroom. He apologized and explained he had been driving through terrible traffic. After such a long day, we were both relieved it was finally over.",
      "translation": "Para cuando terminó mi turno, había estado de pie en el mostrador durante ocho horas seguidas. Me dolían los pies porque había estado trabajando sin parar desde temprano en la mañana. Mi compañera también se veía agotada — había estado lidiando con clientes molestos toda la tarde. Cuando nuestro gerente finalmente llegó, llevábamos casi veinte minutos esperando a que abriera la bodega. Se disculpó y explicó que había estado manejando en un tráfico terrible. Después de un día tan largo, ambos nos sentimos aliviados de que por fin hubiera terminado."
    }
  },
  "17": {
    "title": "Have and Have Got",
    "topic": "Past Perfect",
    "level": "A1",
    "explain": [
      {
        "head": "Have y have got: mismo significado",
        "body": "'Have' y 'have got' significan exactamente lo mismo para posesión, relaciones o características — no hay diferencia entre 'I have a car' y 'I've got a car'. La diferencia es de estilo: 'have got' es más informal/británico hablado, y 'have' funciona en todas partes, más típico del inglés americano y escrito.",
        "note": "I have a car. = I've got a car. · Do you have any brothers? = Have you got any brothers?"
      },
      {
        "head": "Preguntas y negativos",
        "body": "Se forman distinto: 'have' normal necesita 'do/does' como auxiliar ('do you have a pen?', 'I don't have one'), mientras que 'have got' usa 'have' como su propio auxiliar, sin 'do' ('have you got a pen?', 'I haven't got one'). Ambas son correctas; solo no mezcles los dos patrones en la misma frase.",
        "note": "Do you have a pen? / Have you got a pen? (both correct)"
      },
      {
        "head": "En pasado: solo 'had'",
        "body": "En pasado desaparece el patrón 'have got' y solo se usa 'had', sin 'got'. 'I had a dog when I was young' es correcto; 'I had got a dog' no es estándar, aunque 'have got' sí valía en presente. Es una trampa común para quienes asumen que el patrón del presente pasa igual al pasado.",
        "note": "I had a dog when I was young. (NOT: I had got a dog)"
      }
    ],
    "quiz": [
      {
        "q": "___ you got the time?",
        "opts": [
          "Do",
          "Have",
          "Did",
          "Are"
        ],
        "ans": 1,
        "exp": "'Have you got…?' = inglés británico informal para posesión."
      },
      {
        "q": "I ___ a headache yesterday, so I went to bed early.",
        "opts": [
          "have",
          "have got",
          "had",
          "had got"
        ],
        "ans": 2,
        "exp": "Posesión en pasado → 'had'. ('Had got' no es estándar en pasado)"
      },
      {
        "q": "She ___ three brothers and two sisters.",
        "opts": [
          "is having",
          "have",
          "has got",
          "is got"
        ],
        "ans": 2,
        "exp": "Posesión → 'has got' = 'She has got three brothers'. (O: She has three brothers.)"
      }
    ],
    "flashcards": [
      {
        "front": "Have vs Have Got",
        "back": "SAME MEANING (possession):\nI have a car. = I've got a car.\n\nPast: only HAVE (had):\nI had a car when I was young. ✅\nI had got a car when I was young. ❌"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Have you got any brothers or sisters?",
        "translation": "¿Tienes hermanos o hermanas?"
      },
      {
        "speaker": "user",
        "text": "Yes, I've got two brothers. Do you have any pets?",
        "translation": "Sí, tengo dos hermanos. ¿Tú tienes alguna mascota?"
      },
      {
        "speaker": "other",
        "text": "I don't have any pets now, but I had a rabbit when I was young.",
        "translation": "Ahora no tengo mascotas, pero tuve un conejo cuando era joven."
      },
      {
        "speaker": "user",
        "text": "That's cute! Have you got a car?",
        "translation": "¡Qué lindo! ¿Tienes auto?"
      },
      {
        "speaker": "other",
        "text": "No, I haven't got a car, but I've got a bicycle.",
        "translation": "No, no tengo auto, pero tengo bicicleta."
      },
      {
        "speaker": "user",
        "text": "Nice! I have a car, but I didn't have one last year.",
        "translation": "¡Qué bien! Yo tengo auto, pero no tenía uno el año pasado."
      }
    ]
  },
  "18": {
    "title": "Used to (do)",
    "topic": "Past Perfect",
    "level": "A2",
    "explain": [
      {
        "head": "Used to: hábito o estado pasado",
        "body": "'Used to' + verbo base describe un hábito o estado que era regular en el pasado pero ya no es así — la idea clave es el contraste entre 'antes' y 'ahora'. 'I used to play tennis, but I don't play now' lo deja explícito, y aunque no se diga, 'used to' siempre implica que la situación ya cambió. Sirve tanto para acciones repetidas como para estados duraderos.",
        "note": "I used to play tennis a lot, but I don't play now. · She used to live in London."
      },
      {
        "head": "Pregunta y negativo",
        "body": "En preguntas y negativos, 'used to' pierde la -d y queda 'use to' tras 'did/didn't': 'did you use to smoke?', 'I didn't use to like vegetables'. Es porque 'did' ya marca el pasado, así que 'used' no necesita su propia terminación. Escribir 'did you used to' es un error muy común.",
        "note": "Did you use to smoke? · I didn't use to like vegetables, but I do now."
      },
      {
        "head": "Used to vs pasado simple",
        "body": "'Used to' resalta que algo fue un hábito o estado que duró en el pasado, marcando el contraste con el presente. El pasado simple puede expresar lo mismo, solo que con menos énfasis en ese contraste: 'I used to walk to school' y 'I walked to school every day' describen la misma rutina, solo cambia el énfasis.",
        "note": "I used to walk to school. = I walked to school every day. (both correct for habits)"
      }
    ],
    "quiz": [
      {
        "q": "I ___ smoke but I gave it up two years ago.",
        "opts": [
          "use to",
          "used to",
          "was used to",
          "am used to"
        ],
        "ans": 1,
        "exp": "Hábito pasado que ya no ocurre → 'used to smoke'."
      },
      {
        "q": "___ you use to play football when you were young?",
        "opts": [
          "Were",
          "Did",
          "Have",
          "Do"
        ],
        "ans": 1,
        "exp": "'Did you use to…?' (sin -d en 'use' en preguntas)"
      },
      {
        "q": "She ___ have long hair but she cut it short.",
        "opts": [
          "used to",
          "use to",
          "is used to",
          "was used to"
        ],
        "ans": 0,
        "exp": "Estado pasado que cambió → 'used to have'."
      }
    ],
    "flashcards": [
      {
        "front": "USED TO do vs AM/GET USED TO doing",
        "back": "USED TO + infinitive = past habit (no longer):\n'I used to smoke.' (I don't smoke now)\n\nAM USED TO + -ing = am accustomed to:\n'I'm used to getting up early.' (it feels normal to me)"
      }
    ],
    "readingText": {
      "title": "Then and Now",
      "body": "When I was a teenager, I used to eat fast food every day, but now I prefer cooking healthy meals at home. I used to stay up until 3 a.m. playing video games, but I don't do that anymore. Did you use to live in a small town? I used to live in the countryside, and I used to walk to school every morning. My habits have changed a lot since then. I didn't use to like vegetables, but now I eat them with every meal. It's strange how different life used to be.",
      "translation": "Cuando era adolescente, solía comer comida rápida todos los días, pero ahora prefiero cocinar comidas saludables en casa. Solía quedarme despierto hasta las 3 a.m. jugando videojuegos, pero ya no hago eso. ¿Tú solías vivir en un pueblo pequeño? Yo solía vivir en el campo, y solía caminar a la escuela todas las mañanas. Mis hábitos han cambiado mucho desde entonces. Antes no me gustaban las verduras, pero ahora las como en cada comida. Es extraño lo diferente que solía ser la vida."
    }
  }
};
