import { Unit } from '@/types/grammar';

export const conditionalsUnits: Record<number, Unit> = {
  "38": {
    "title": "If I Do… and If I Did… (Conditionals 1 & 2)",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "1er condicional: futuro real",
        "body": "Describe algo que sí puede pasar en el futuro. Fórmula: 'if + presente simple' + 'will + verbo base'. Igual que en español ('si llueve, nos quedaremos'), después de 'if' nunca se pone 'will'.",
        "note": "If it rains tomorrow, we'll stay at home. · If you study hard, you will pass."
      },
      {
        "head": "2do condicional: presente imaginario",
        "body": "Habla de algo irreal o hipotético en el presente. Fórmula: 'if + pasado simple' + 'would/could + verbo base'. Ese pasado no indica tiempo pasado: equivale al subjuntivo español de 'si tuviera…, viajaría'.",
        "note": "If I had a car, I would drive you. (I don't have a car) · If I were rich, I'd travel the world."
      },
      {
        "head": "Were con todas las personas",
        "body": "En el 2do condicional se usa 'were' con todos los sujetos, no 'was': marca que la situación es imaginaria, como el 'fuera' del español. En el habla informal se oye 'was', pero 'were' es lo correcto, sobre todo en 'if I were you'.",
        "note": "If I were you… · If she were here… · If it were possible…"
      }
    ],
    "table": {
      "cols": [
        "Type",
        "If-clause",
        "Main clause"
      ],
      "rows": [
        [
          "1st (real/possible)",
          "If + present simple",
          "will / can / may + base"
        ],
        [
          "2nd (unreal/imaginary)",
          "If + past simple",
          "would / could / might + base"
        ]
      ]
    },
    "quiz": [
      {
        "q": "If I ___ a million dollars, I would travel the world.",
        "opts": [
          "have",
          "had",
          "would have",
          "will have"
        ],
        "ans": 1,
        "exp": "2do condicional: if + pasado simple → 'If I had…'"
      },
      {
        "q": "If it ___ tomorrow, we'll cancel the picnic.",
        "opts": [
          "rained",
          "rains",
          "will rain",
          "rain"
        ],
        "ans": 1,
        "exp": "1er condicional: if + presente simple → 'if it rains'"
      },
      {
        "q": "If I ___ you, I'd talk to her about it.",
        "opts": [
          "am",
          "was",
          "were",
          "be"
        ],
        "ans": 2,
        "exp": "2do condicional: se usa 'were': 'If I were you…'"
      }
    ],
    "flashcards": [
      {
        "front": "1st vs 2nd conditional — key difference",
        "back": "1ST: real/possible → If it rains, I'll stay home.\n2ND: unreal/imaginary → If I were a bird, I would fly away. (I'm not a bird)"
      }
    ],
    "readingText": {
      "title": "Two Kinds of Plans",
      "body": "This weekend, if the weather is good, we'll go camping in the mountains. If it rains, we'll stay home and watch movies instead. My brother, on the other hand, loves to dream about impossible things. He always says, 'If I had a million dollars, I would buy an island and never work again.' I tell him, 'If I were you, I'd be more realistic!' But he just laughs and says, 'If I won the lottery, I would travel the world first.' I guess dreaming doesn't cost anything — even if it never comes true.",
      "translation": "Este fin de semana, si hace buen tiempo, iremos a acampar a las montañas. Si llueve, nos quedaremos en casa viendo películas. Mi hermano, en cambio, ama soñar con cosas imposibles. Siempre dice: 'Si tuviera un millón de dólares, compraría una isla y nunca más trabajaría.' Le digo: '¡Si yo fuera tú, sería más realista!' Pero él solo se ríe y dice: 'Si me ganara la lotería, primero viajaría por el mundo.' Supongo que soñar no cuesta nada — aunque nunca se haga realidad."
    }
  },
  "39": {
    "title": "If I Knew… / I Wish I Knew…",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "Wish + pasado simple: deseo presente",
        "body": "Usamos 'wish + pasado simple' para desear que algo del presente fuera distinto, aunque en realidad no lo es. Igual que en el 2do condicional, ese pasado no indica tiempo pasado, sino que marca la idea como irreal. Expresa añoranza o pesar por cómo están las cosas ahora.",
        "note": "I wish I knew the answer. (I don't know) · I wish I had a car. (I don't have one)"
      },
      {
        "head": "Wish + were para todos",
        "body": "Por la misma razón que en el 2do condicional, con 'wish' se usa 'were' con todos los sujetos, ya que la frase describe algo irreal del presente. En el habla informal se oye 'was', pero 'were' es lo correcto, sobre todo al escribir.",
        "note": "I wish I were taller. · I wish it weren't so cold. · He wishes he were here."
      },
      {
        "head": "Wish + would: quejas",
        "body": "'Wish + would' sirve para quejarte del comportamiento de alguien (o del clima) que te molesta, no para un deseo neutral. A diferencia de 'wish + pasado simple', que describe un estado fijo, aquí quieres que alguien empiece o deje de hacer algo. No se usa sobre uno mismo.",
        "note": "I wish you would stop making that noise. · I wish it would stop raining."
      }
    ],
    "quiz": [
      {
        "q": "I wish I ___ the answer, but I don't.",
        "opts": [
          "know",
          "knew",
          "would know",
          "had known"
        ],
        "ans": 1,
        "exp": "Deseo presente (no lo sé) → wish + pasado simple: 'I wish I knew'."
      },
      {
        "q": "She wishes she ___ taller.",
        "opts": [
          "is",
          "was",
          "were",
          "would be"
        ],
        "ans": 2,
        "exp": "Deseo sobre el presente → wish + were: 'She wishes she were taller.'"
      },
      {
        "q": "I wish you ___ stop talking so loudly!",
        "opts": [
          "will",
          "would",
          "could",
          "should"
        ],
        "ans": 1,
        "exp": "Queja sobre un comportamiento → wish + would: 'I wish you would stop.'"
      }
    ],
    "flashcards": [
      {
        "front": "WISH + past simple vs WISH + would",
        "back": "WISH + past simple = wish things were different NOW:\n'I wish I knew her name.' (I don't know)\n\nWISH + would = complaint about behaviour:\n'I wish you would stop shouting!' (you keep shouting and I hate it)"
      }
    ],
    "readingText": {
      "title": "My Noisy Neighbor",
      "body": "I wish I lived in a quieter street. Every night, my neighbor plays loud music until midnight, and I wish he would turn it down. I wish I were brave enough to knock on his door and complain, but I'm too shy. My sister says, 'I wish you would just talk to him instead of complaining to me!' She's probably right. I also wish I had thicker walls in my apartment — then the noise wouldn't bother me so much. For now, I just put on my headphones and wish for a peaceful night's sleep.",
      "translation": "Ojalá viviera en una calle más tranquila. Cada noche, mi vecino pone música fuerte hasta la medianoche, y ojalá bajara el volumen. Ojalá fuera lo suficientemente valiente para tocar su puerta y quejarme, pero soy muy tímido. Mi hermana dice: '¡Ojalá simplemente hablaras con él en vez de quejarte conmigo!' Probablemente tiene razón. También ojalá tuviera paredes más gruesas en mi apartamento — así el ruido no me molestaría tanto. Por ahora, solo me pongo los audífonos y deseo tener una noche de sueño tranquila."
    }
  },
  "40": {
    "title": "If I Had Known… / I Wish I Had Known…",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "3er condicional: pasado imaginario",
        "body": "El 3er condicional imagina un cambio en algo que ya pasó: los hechos reales no pueden cambiar, así que te imaginas un pasado distinto y un resultado también imaginario. Fórmula: 'if + pasado perfecto' + 'would/could/might + have + participio'. Siempre mira hacia hechos ya terminados.",
        "note": "If I had known about the party, I would have come. · If she had studied harder, she would have passed."
      },
      {
        "head": "Wish + pasado perfecto: arrepentimiento",
        "body": "Usamos 'wish + pasado perfecto' para lamentar algo del pasado que ya no se puede cambiar, igual que en el 3er condicional. La diferencia es que 'wish' expresa el arrepentimiento directamente, sin necesitar una oración completa con 'if'.",
        "note": "I wish I had studied harder. (I didn't — I regret it) · I wish I hadn't said that."
      }
    ],
    "quiz": [
      {
        "q": "If I ___ about the party, I would have come.",
        "opts": [
          "knew",
          "had known",
          "know",
          "would know"
        ],
        "ans": 1,
        "exp": "3er condicional: if + pasado perfecto → 'If I had known'."
      },
      {
        "q": "If she had studied harder, she ___ the exam.",
        "opts": [
          "would pass",
          "will pass",
          "would have passed",
          "had passed"
        ],
        "ans": 2,
        "exp": "Resultado del 3er condicional → would + have + participio: 'would have passed'."
      },
      {
        "q": "I wish I ___ so rude to her yesterday.",
        "opts": [
          "wasn't",
          "haven't been",
          "hadn't been",
          "didn't be"
        ],
        "ans": 2,
        "exp": "Arrepentimiento pasado → wish + pasado perfecto: 'I wish I hadn't been rude.'"
      }
    ],
    "flashcards": [
      {
        "front": "3rd Conditional — structure",
        "back": "IF + had + past participle → WOULD HAVE + past participle\n\nIf I had left earlier, I would have caught the train.\n(I didn't leave early → I missed the train)\n\nFor IMAGINARY PAST situations."
      }
    ],
    "readingText": {
      "title": "A Missed Opportunity",
      "body": "Last month, I missed a job interview because my alarm didn't go off. If I had set a second alarm, I would have woken up on time. If I had woken up on time, I would have gotten the job — I'm sure of it. I wish I had checked my phone the night before. I wish I hadn't stayed up so late watching movies. My friend told me, 'If you had called them and explained, they might have understood.' But I was too embarrassed to call. Now I just wish I had done things differently.",
      "translation": "El mes pasado, perdí una entrevista de trabajo porque mi alarma no sonó. Si hubiera puesto una segunda alarma, me habría despertado a tiempo. Si me hubiera despertado a tiempo, habría conseguido el trabajo — estoy seguro. Ojalá hubiera revisado mi teléfono la noche anterior. Ojalá no me hubiera quedado despierto hasta tan tarde viendo películas. Mi amigo me dijo: 'Si los hubieras llamado y explicado, tal vez lo habrían entendido.' Pero me daba mucha vergüenza llamar. Ahora solo desearía haber hecho las cosas de otra manera."
    }
  },
  "41": {
    "title": "Wish",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "Wish: resumen de usos",
        "body": "'Wish' cambia de forma según el deseo: 'wish + pasado simple' para algo distinto ahora, 'wish + would' para quejarte del comportamiento de alguien, y 'wish + pasado perfecto' para lamentar algo ya terminado. El tiempo verbal indica a qué momento se refiere el deseo.",
        "note": "I wish I were richer. (now) · I wish you would listen. (complaint) · I wish I had gone. (past regret)"
      },
      {
        "head": "If only: deseo más intenso",
        "body": "'If only' expresa lo mismo que 'I wish' —sobre el presente, el comportamiento de alguien o el pasado— pero con más fuerza emocional. Sigue los mismos patrones gramaticales; solo cambia la intensidad, como un 'wish' más enfático.",
        "note": "If only I had more money! · If only I hadn't said that! · If only I could fly!"
      }
    ],
    "quiz": [
      {
        "q": "___ I had more time! I'm always so busy.",
        "opts": [
          "I wish",
          "If only",
          "Should",
          "Would"
        ],
        "ans": 1,
        "exp": "'If only' = deseo o arrepentimiento intenso: 'If only I had more time!'"
      },
      {
        "q": "I wish I ___ that — it was a huge mistake.",
        "opts": [
          "didn't say",
          "hadn't said",
          "wouldn't say",
          "haven't said"
        ],
        "ans": 1,
        "exp": "Arrepentimiento pasado → wish + pasado perfecto: 'I wish I hadn't said that.'"
      }
    ],
    "flashcards": [
      {
        "front": "IF ONLY vs I WISH",
        "back": "Both express wishes and regrets, but IF ONLY is more emphatic:\n\nI wish I were taller.\n= If only I were taller! (stronger)\n\nI wish I hadn't said that.\n= If only I hadn't said that! (stronger)"
      }
    ],
    "readingText": {
      "title": "New Year Wishes",
      "body": "Every New Year, I think about my life. I wish I were more organized — I always lose my keys! I wish my coworker would stop leaving dirty cups on my desk; it drives me crazy. And if only I had studied harder in university, I might have a better job now. My best friend says, 'If only you would relax a little!' She's right — I worry too much. If only life came with a manual, everything would be so much easier. But for now, I'll keep wishing and hoping things slowly get better.",
      "translation": "Cada Año Nuevo, pienso en mi vida. Ojalá fuera más organizado — ¡siempre pierdo mis llaves! Ojalá mi compañero de trabajo dejara de dejar tazas sucias en mi escritorio; me vuelve loco. Y ojalá hubiera estudiado más en la universidad, tal vez tendría un mejor trabajo ahora. Mi mejor amiga dice: '¡Ojalá te relajaras un poco!' Tiene razón — me preocupo demasiado. Si la vida viniera con un manual, todo sería mucho más fácil. Pero por ahora, seguiré deseando y esperando que las cosas mejoren poco a poco."
    }
  }
};
