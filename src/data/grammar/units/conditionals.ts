import { Unit } from '@/types/grammar';

export const conditionalsUnits: Record<number, Unit> = {
  "38": {
    "title": "If I Do… and If I Did… (Conditionals 1 & 2)",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "1st Conditional — real/possible",
        "body": "The first conditional describes a future situation that is realistic and quite likely to happen — a genuine possibility, not just a fantasy. The structure is 'if + present simple' in the condition clause, followed by 'will + base verb' in the result clause, because the present simple here is simply the grammar's way of marking a real future condition. Compare this with the second conditional below, which uses a very similar pattern but shifts everything to describe something imaginary rather than realistic.",
        "note": "If it rains tomorrow, we'll stay at home. · If you study hard, you will pass."
      },
      {
        "head": "2nd Conditional — unreal/imaginary NOW",
        "body": "The second conditional describes a situation that is imaginary, hypothetical, or simply untrue right now — you're talking about a different, invented present, not a realistic possibility. The structure is 'if + past simple' followed by 'would/could + base verb'; the past tense here doesn't refer to past time at all, it's a grammatical signal that the whole idea is unreal. This is what separates it from the first conditional, which uses present tense forms because it describes something that could genuinely happen.",
        "note": "If I had a car, I would drive you. (I don't have a car) · If I were rich, I'd travel the world."
      },
      {
        "head": "Were for all persons (2nd conditional)",
        "body": "Because the second conditional is about something unreal, English traditionally uses the special form 'were' (instead of 'was') with every subject — I, he, she, it — inside the if-clause, as an extra grammatical marker that the situation is imaginary. You'll still hear 'was' used informally in casual speech, but 'were' is considered the correct and more formal choice, especially in the common fixed phrase 'if I were you'. This 'were' is a leftover of an older verb form English once used specifically for unreal or hypothetical ideas.",
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
        "exp": "2nd conditional: if + past simple → 'If I had…'"
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
        "exp": "1st conditional: if + present simple → 'if it rains'"
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
        "exp": "2nd conditional: use 'were': 'If I were you…'"
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
        "head": "I wish + past simple — present wish",
        "body": "We use 'wish + past simple' to talk about something in the present that we would like to be different, even though, in reality, it isn't — you're imagining an alternative present, not talking about the past. Just like in the second conditional, the past tense form doesn't refer to past time; it's the grammar's way of marking the idea as unreal or contrary to fact. The underlying feeling is regret or longing about how things currently stand.",
        "note": "I wish I knew the answer. (I don't know) · I wish I had a car. (I don't have one)"
      },
      {
        "head": "I wish + were",
        "body": "For the same reason as in the second conditional, 'wish' sentences traditionally use 'were' rather than 'was' for every subject, since the whole sentence describes something unreal about the present. 'I wish I were taller' and 'I wish it weren't so cold' both keep this special form even though 'was' is sometimes heard informally. Using 'were' consistently is the safer, more standard choice, especially in writing.",
        "note": "I wish I were taller. · I wish it weren't so cold. · He wishes he were here."
      },
      {
        "head": "I wish + would — complaints",
        "body": "'Wish + would' is used to talk about someone else's behavior, or a situation, that annoys you and that you want to change — it usually carries a tone of complaint or frustration, not a neutral wish. Unlike 'wish + past simple', which describes a fixed state you'd like to be different, 'wish + would' focuses on an action you want someone (or something, like the weather) to start or stop doing. You generally can't use 'wish + would' about yourself, since you can't complain about your own uncooperative behavior in the same way.",
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
        "exp": "Present wish (I don't know) → wish + past simple: 'I wish I knew'."
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
        "exp": "Wish about present situation → wish + were: 'She wishes she were taller.'"
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
        "exp": "Complaint about behaviour → wish + would: 'I wish you would stop.'"
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
        "head": "3rd Conditional — imaginary past",
        "body": "The third conditional talks about an imaginary change to something that already happened in the past — the real events are fixed and can't change, so you're picturing a different past and its different, equally imaginary result. The structure is 'if + past perfect' in the condition, followed by 'would/could/might + have + past participle' in the result. Unlike the first and second conditionals, which are about the future or present, the third conditional always looks back at events that are already over and cannot be undone.",
        "note": "If I had known about the party, I would have come. · If she had studied harder, she would have passed."
      },
      {
        "head": "I wish + past perfect — past regret",
        "body": "We use 'wish + past perfect' to express regret about something in the past that we cannot change — you're wishing that an earlier event, or your own earlier action, had gone differently. It follows the same logic as the third conditional: the past perfect marks the idea as an imaginary alternative to something that really happened. The difference is that 'wish' expresses the personal feeling of regret directly, without needing a full if/result sentence.",
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
        "exp": "3rd conditional: if + past perfect → 'If I had known'."
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
        "exp": "3rd conditional result → would + have + pp: 'would have passed'."
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
        "exp": "Past regret → wish + past perfect: 'I wish I hadn't been rude.'"
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
        "head": "Wish — summary of uses",
        "body": "'Wish' changes its following verb form depending on what kind of wish you're making: 'wish + past simple' for something you want to be different right now, 'wish + would' for a complaint about someone's ongoing behavior, and 'wish + past perfect' for regret about something already finished in the past. Even though all three use 'wish', the tense that follows tells you whether the unreal idea is about the present, someone's actions, or the past. Recognizing which time each pattern refers to is the key to using 'wish' correctly.",
        "note": "I wish I were richer. (now) · I wish you would listen. (complaint) · I wish I had gone. (past regret)"
      },
      {
        "head": "If only — stronger wish/regret",
        "body": "'If only' expresses exactly the same kinds of wishes and regrets as 'I wish' — about the present, about someone's behavior, or about the past — but with more emotional force, often used when something matters a great deal to the speaker or when the regret feels especially strong. Grammatically, it follows all the same tense patterns as 'wish' (past simple, would, past perfect); only the intensity and the typical exclamation mark change. Think of it as 'I wish' turned up in volume, rather than a different grammar rule.",
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
        "exp": "'If only' = strong wish/regret: 'If only I had more time!'"
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
        "exp": "Past regret → wish + past perfect: 'I wish I hadn't said that.'"
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
