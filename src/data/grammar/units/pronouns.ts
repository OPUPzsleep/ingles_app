import { Unit } from '@/types/grammar';

export const pronounsUnits: Record<number, Unit> = {
  "82": {
    "title": "Myself / Yourself / Themselves (reflexive pronouns)",
    "topic": "Pronouns",
    "level": "A2",
    "explain": [
      {
        "head": "Pronombres reflexivos — forma",
        "body": "Los pronombres reflexivos se forman añadiendo 'self' (singular) o 'selves' (plural) a un posesivo u objeto: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Cada uno concuerda en persona y número con el sujeto, a diferencia de 'me' o 'him', que pueden referirse a otra persona."
      },
      {
        "head": "Cuando sujeto y objeto coinciden",
        "body": "Se usa un reflexivo cuando quien hace la acción también la recibe: en 'I cut myself', la misma persona corta y es cortada. Si la acción afecta a otra persona, se usa un pronombre objeto normal ('I cut him').",
        "note": "I cut myself. · She looked at herself in the mirror. · He blamed himself."
      },
      {
        "head": "By + reflexivo = solo",
        "body": "'By' más un reflexivo es una expresión fija que significa 'solo', sin ayuda de nadie; no tiene sentido reflexivo literal. 'I live by myself' simplemente significa que vivo solo, y funciona igual con cualquier persona (by yourself, by himself...).",
        "note": "I live by myself. (= alone) · Did you do it by yourself? (= alone/unaided)"
      }
    ],
    "quiz": [
      {
        "q": "She looked at ___ in the mirror.",
        "opts": [
          "her",
          "hers",
          "herself",
          "its"
        ],
        "ans": 2,
        "exp": "Mismo sujeto y objeto → reflexivo: 'herself'."
      },
      {
        "q": "I did it all by ___. No one helped me.",
        "opts": [
          "me",
          "mine",
          "myself",
          "my"
        ],
        "ans": 2,
        "exp": "'By + reflexivo' = solo/sin ayuda: 'by myself'."
      }
    ],
    "flashcards": [
      {
        "front": "Reflexive pronouns",
        "back": "I → MYSELF\nyou → YOURSELF / YOURSELVES\nhe → HIMSELF · she → HERSELF\nit → ITSELF · we → OURSELVES\nthey → THEMSELVES\n\nBY + reflexive = alone:\n'She lives by herself.'"
      }
    ],
    "readingText": {
      "title": "Living Alone",
      "body": "After university, Daniel decided to live by himself for the first time. At first, he found it strange to cook only for himself and talk to himself in the empty apartment. One evening, he cut himself while chopping vegetables and laughed, saying, \"I really need to be more careful when I'm by myself!\" Slowly, he learned to enjoy his own company. He taught himself to cook new dishes and even started painting, just for himself. His friends often asked, \"Don't you get lonely living by yourself?\" But Daniel smiled and said, \"Not really — I've learned to take care of myself, and I'm proud of that.\"",
      "translation": "Después de la universidad, Daniel decidió vivir solo por primera vez. Al principio, le pareció extraño cocinar solo para sí mismo y hablar consigo mismo en el apartamento vacío. Una noche, se cortó mientras picaba verduras y se rió, diciendo: \"¡De verdad necesito tener más cuidado cuando estoy solo!\" Poco a poco, aprendió a disfrutar de su propia compañía. Se enseñó a sí mismo a cocinar platos nuevos e incluso empezó a pintar, solo para él. Sus amigos a menudo le preguntaban: \"¿No te sientes solo viviendo por tu cuenta?\" Pero Daniel sonreía y decía: \"La verdad no — he aprendido a cuidarme a mí mismo, y estoy orgulloso de eso.\""
    }
  },
  "83": {
    "title": "A Friend of Mine / My Own",
    "topic": "Pronouns",
    "level": "B1",
    "explain": [
      {
        "head": "Un/este + nombre + of + posesivo",
        "body": "Para decir que algo es uno entre varios que pertenecen a alguien, se combina un determinante (a/this/some) + nombre + 'of' + pronombre posesivo (mine, yours, his...), nunca el pronombre objeto. Así, 'a friend of mine' significa uno de mis amigos; nunca se dice 'a friend of me'.",
        "note": "a friend of mine ✅ (NOT: a friend of me ❌) · this book of yours · some friends of theirs"
      },
      {
        "head": "My own / your own",
        "body": "Añadir 'own' después del posesivo (my, your, her...) enfatiza que algo pertenece exclusivamente a esa persona, sin compartirlo ni prestarlo. 'I have my own car' resalta que el coche es solo mío, no uno compartido.",
        "note": "I have my own car. · She has a room of her own."
      },
      {
        "head": "On my own = solo",
        "body": "'On' + posesivo + 'own' es una expresión fija que significa 'solo' o 'sin ayuda', igual que 'by myself'. Aunque usa la palabra 'own', aquí funciona como frase hecha sobre soledad, no sobre posesión.",
        "note": "I live on my own. · Did you paint the house on your own?"
      }
    ],
    "quiz": [
      {
        "q": "He's a friend ___ mine.",
        "opts": [
          "of",
          "from",
          "at",
          "with"
        ],
        "ans": 0,
        "exp": "'A friend OF mine' — doble posesivo."
      },
      {
        "q": "I don't want to share. I want ___ own room.",
        "opts": [
          "my",
          "mine",
          "of my",
          "my's"
        ],
        "ans": 0,
        "exp": "'My own' + nombre."
      },
      {
        "q": "She moved to the city and lives ___ own now.",
        "opts": [
          "at her",
          "on her",
          "of her",
          "in her"
        ],
        "ans": 1,
        "exp": "'On her own' = sola."
      }
    ],
    "flashcards": [
      {
        "front": "A friend OF MINE (not \"of me\")",
        "back": "a friend of mine · a colleague of his · some photos of hers\n(NOT: a friend of me ❌)"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Whose car is that outside? It's beautiful.",
        "translation": "¿De quién es ese auto de afuera? Es hermoso."
      },
      {
        "speaker": "user",
        "text": "It belongs to a friend of mine. He just bought it last week.",
        "translation": "Es de un amigo mío. Lo compró la semana pasada."
      },
      {
        "speaker": "other",
        "text": "Lucky him! I still don't have my own car.",
        "translation": "¡Qué suerte tiene! Yo todavía no tengo auto propio."
      },
      {
        "speaker": "user",
        "text": "Neither do I. I always borrow one from a colleague of mine.",
        "translation": "Yo tampoco. Siempre le pido uno prestado a un colega mío."
      },
      {
        "speaker": "other",
        "text": "I'd love to have a car of my own someday.",
        "translation": "Me encantaría tener un auto propio algún día."
      },
      {
        "speaker": "user",
        "text": "Same here. For now, I just dream about it on my own.",
        "translation": "Igual yo. Por ahora, solo lo sueño yo solo."
      }
    ]
  },
  "84": {
    "title": "There… and It…",
    "topic": "Pronouns",
    "level": "A2",
    "explain": [
      {
        "head": "There + be = existencia",
        "body": "'There' con una forma de 'be' anuncia que algo existe o está presente, sin que 'there' tenga significado propio de lugar. 'There's a café on the corner' solo afirma que hay un café ahí; el verdadero sujeto ('a café') va después del verbo.",
        "note": "There's a café on the corner. · There were 200 people at the concert."
      },
      {
        "head": "It — clima, hora, distancia",
        "body": "Para el clima, la hora y las distancias, el inglés usa siempre 'it' como sujeto vacío, no 'there', aunque 'it' no se refiera a nada concreto: 'It's raining', 'It's 9 o'clock', 'It's 300 km to the coast'. Es una excepción fija que hay que memorizar.",
        "note": "It's raining. · It's 9 o'clock. · It's 300 km to the coast."
      },
      {
        "head": "It — opiniones y situaciones",
        "body": "'It' también funciona como sujeto vacío para opinar sobre algo que se describe después, con el patrón 'it + be + adjetivo + to + infinitivo'. En 'It's important to arrive early', lo importante (llegar temprano) va al final y 'it' solo ocupa el lugar del sujeto.",
        "note": "It's important to arrive early. · It was nice to see you."
      }
    ],
    "quiz": [
      {
        "q": "___ a message for you on the table.",
        "opts": [
          "It's",
          "There's",
          "Is",
          "Has"
        ],
        "ans": 1,
        "exp": "Existencia → 'there is'."
      },
      {
        "q": "___ raining when we left.",
        "opts": [
          "There was",
          "It was",
          "There were",
          "It were"
        ],
        "ans": 1,
        "exp": "Clima → 'it'."
      },
      {
        "q": "___ difficult to learn a language alone.",
        "opts": [
          "There's",
          "It's",
          "There is",
          "Is"
        ],
        "ans": 1,
        "exp": "Opinión sobre una situación → 'it'."
      }
    ],
    "flashcards": [
      {
        "front": "THERE vs IT",
        "back": "THERE = something exists: 'There's a problem.'\nIT = weather / time / distance / general situation: 'It's cold.' · 'It's 5 o'clock.' · 'It's far.' · 'It's fun to travel.'"
      }
    ],
    "readingText": {
      "title": "The Village in the Mountains",
      "body": "There's a small village near the mountains that I visit every summer. It's usually cold there, even in July, so it's important to bring a warm jacket. There are only about two hundred people living in the village, but there's always something interesting happening. Last year, it was raining every day, which was unusual. There was a little café where I would sit for hours; it's the perfect place to read a book. It's about a two-hour drive from the city, but it's worth every minute. There's nothing quite like waking up there and looking at the mountains outside the window.",
      "translation": "Hay un pueblito cerca de las montañas que visito cada verano. Ahí normalmente hace frío, incluso en julio, así que es importante llevar una chaqueta abrigada. Solo viven unas doscientas personas en el pueblo, pero siempre está pasando algo interesante. El año pasado, llovía todos los días, lo cual era inusual. Había un pequeño café donde me sentaba por horas; es el lugar perfecto para leer un libro. Queda a unas dos horas en auto desde la ciudad, pero vale cada minuto. No hay nada como despertar ahí y mirar las montañas por la ventana."
    }
  },
  "85": {
    "title": "Some and Any",
    "topic": "Pronouns",
    "level": "A1",
    "explain": [
      {
        "head": "Some en frases afirmativas",
        "body": "'Some' es el cuantificador habitual en frases afirmativas para una cantidad indefinida, tanto contable ('some books') como incontable ('some money'). Solo confirma que existe algo, sin precisar cuánto.",
        "note": "I have some money. · She bought some books. · There are some people waiting."
      },
      {
        "head": "Any en negativas y preguntas",
        "body": "'Any' sustituye a 'some' en negaciones y preguntas, porque ahí se habla de una cantidad que podría ser cero: 'I don't have any money', 'Do you have any questions?'. No hay un equivalente fijo en español; el cambio depende de si se asume o no que algo existe.",
        "note": "I don't have any money. · Do you have any questions? · There isn't any milk left."
      },
      {
        "head": "Some en ofertas y peticiones",
        "body": "En ofertas y peticiones se usa 'some' aunque sea pregunta, porque ya se espera un 'sí': 'Would you like some coffee?'. Es la excepción principal a la regla some/any; conviene memorizarla como patrón fijo de cortesía.",
        "note": "Would you like some coffee? (offer) · Could I have some water please? (request)"
      }
    ],
    "quiz": [
      {
        "q": "I don't have ___ money.",
        "opts": [
          "some",
          "any",
          "no",
          "much"
        ],
        "ans": 1,
        "exp": "Frase negativa → 'any': 'I don't have any money.'"
      },
      {
        "q": "Would you like ___ tea?",
        "opts": [
          "some",
          "any",
          "a",
          "no"
        ],
        "ans": 0,
        "exp": "Oferta → 'some' (se espera un sí): 'Would you like some tea?'"
      }
    ],
    "flashcards": [
      {
        "front": "SOME vs ANY — the basic rule",
        "back": "SOME → positive sentences:\n'I have some money.'\n\nANY → negatives and most questions:\n'I don't have any money.'\n'Do you have any questions?'\n\nEXCEPTION: SOME in offers/requests:\n'Would you like some coffee?'"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Welcome! Would you like some water while you look at the menu?",
        "translation": "¡Bienvenidos! ¿Les gustaría algo de agua mientras miran el menú?"
      },
      {
        "speaker": "user",
        "text": "Yes, please. Do you have any vegetarian options?",
        "translation": "Sí, por favor. ¿Tienen alguna opción vegetariana?"
      },
      {
        "speaker": "other",
        "text": "Of course, we have some great salads and a few pasta dishes.",
        "translation": "Claro, tenemos algunas ensaladas excelentes y algunos platos de pasta."
      },
      {
        "speaker": "user",
        "text": "Great. Could I also have some bread while we decide?",
        "translation": "Genial. ¿Podría también tener un poco de pan mientras decidimos?"
      },
      {
        "speaker": "other",
        "text": "Of course. We don't have any specials tonight, but everything is fresh.",
        "translation": "Claro. No tenemos ningún plato especial esta noche, pero todo está fresco."
      },
      {
        "speaker": "user",
        "text": "That's fine. I'll have some pasta and a salad, please.",
        "translation": "Está bien. Voy a pedir pasta y una ensalada, por favor."
      }
    ]
  },
  "86": {
    "title": "No / None / Any / Nothing / Nobody",
    "topic": "Pronouns",
    "level": "A2",
    "explain": [
      {
        "head": "No + nombre",
        "body": "'No' funciona como adjetivo delante de un nombre para decir 'cero' o 'ninguno', más directo que 'not any': 'There is no milk' equivale a 'There isn't any milk'. Como 'no' ya es negativo, el verbo se queda afirmativo para evitar doble negación.",
        "note": "There is no milk. · I have no money. · No problem!"
      },
      {
        "head": "None — sin nombre después",
        "body": "'None' tiene el mismo sentido de 'cero' que 'no', pero se usa cuando el nombre no se repite: por contexto ('How much milk is left?' 'None.') o con 'of' ('None of my friends came'). Piénsalo como 'no + nombre' cuando repetir el nombre sería redundante.",
        "note": "'How much milk is left?' 'None.' · None of my friends came. · None of it was true."
      },
      {
        "head": "Nothing / Nobody / No one",
        "body": "'Nothing', 'nobody' y 'no one' ya llevan la negación incorporada, así que el verbo que sigue se queda afirmativo: 'Nothing happened', 'Nobody called'. A diferencia del español, en inglés no se puede doblar la negación ('Nobody didn't call' es incorrecto).",
        "note": "Nothing happened. · Nobody called. · No one was hurt. (NOT: Nobody didn't call)"
      }
    ],
    "quiz": [
      {
        "q": "'How much money do you have?' '___ at all.'",
        "opts": [
          "Any",
          "No",
          "None",
          "Nothing"
        ],
        "ans": 2,
        "exp": "'None' sin nombre: 'None at all.'"
      },
      {
        "q": "___ told me about the change. I didn't know.",
        "opts": [
          "Nobody didn't",
          "Nobody",
          "No",
          "None"
        ],
        "ans": 1,
        "exp": "Nobody = nadie (el verbo queda afirmativo): 'Nobody told me'."
      }
    ],
    "flashcards": [
      {
        "front": "NO / NONE / NOTHING / NOBODY",
        "back": "NO + noun: 'I have no money.'\nNONE (alone): 'How much? None.'\nNONE OF: 'None of them came.'\nNOTHING: 'Nothing happened.'\nNOBODY/NO ONE: 'Nobody called.'\n\nAll these = POSITIVE verb (not double negative)"
      }
    ],
    "readingText": {
      "title": "The Missing Files",
      "body": "The office was completely empty on Monday morning. There was no sign of the missing files, and nobody knew where they had gone. \"Did anyone see anything strange last night?\" the manager asked, but nobody answered. She checked the security cameras, but there was nothing unusual on the recordings — no one had entered the building after hours. \"None of the doors were forced open,\" the security guard said, \"and none of the windows were broken either.\" The manager sighed. \"So nothing was stolen, and nobody came in, but the files are gone. That makes no sense at all.\" It seemed like there was no explanation — until someone remembered the cleaning staff had moved boxes the day before.",
      "translation": "La oficina estaba completamente vacía el lunes por la mañana. No había ninguna señal de los archivos desaparecidos, y nadie sabía adónde habían ido. \"¿Alguien vio algo extraño anoche?\" preguntó la gerente, pero nadie respondió. Revisó las cámaras de seguridad, pero no había nada inusual en las grabaciones — nadie había entrado al edificio fuera de horario. \"Ninguna de las puertas fue forzada\", dijo el guardia de seguridad, \"y ninguna de las ventanas se rompió tampoco.\" La gerente suspiró. \"Entonces no se robó nada, y nadie entró, pero los archivos no están. Eso no tiene ningún sentido.\" Parecía que no había ninguna explicación — hasta que alguien recordó que el personal de limpieza había movido cajas el día anterior."
    }
  },
  "87": {
    "title": "Much, Many, Little, Few",
    "topic": "Pronouns",
    "level": "A2",
    "explain": [
      {
        "head": "Much y little — incontables",
        "body": "'Much' y 'little' acompañan a nombres incontables: 'much' indica cantidad grande ('not much money') y 'little' cantidad pequeña ('very little patience'). Nunca se usan con un plural contable como 'friends'.",
        "note": "not much money · a little time · How much water? · very little patience"
      },
      {
        "head": "Many y few — contables",
        "body": "'Many' y 'few' hacen lo mismo pero con plurales contables: 'many' indica número grande ('many people') y 'few' número pequeño ('few options'). Se usan con nombres como 'friends' o 'books', nunca con incontables como 'money'.",
        "note": "not many people · a few friends · How many books? · very few options"
      },
      {
        "head": "A little / a few — sentido positivo",
        "body": "Añadir 'a' delante de 'little' o 'few' cambia el tono de negativo a positivo: 'a little/a few' significa 'algo, suficiente', mientras que sin 'a' significa 'casi nada', con matiz de queja. 'I have a little money' suena tranquilizador; 'I have little money' suena a problema.",
        "note": "I have a little money. (= some, not a lot) · I have little money. (= barely any, problem)"
      }
    ],
    "table": {
      "cols": [
        "",
        "Countable",
        "Uncountable"
      ],
      "rows": [
        [
          "Large amount",
          "many",
          "much"
        ],
        [
          "Small amount (OK)",
          "a few",
          "a little"
        ],
        [
          "Small amount (problem)",
          "few",
          "little"
        ]
      ]
    },
    "quiz": [
      {
        "q": "There isn't ___ time left. We must hurry.",
        "opts": [
          "many",
          "much",
          "few",
          "little"
        ],
        "ans": 1,
        "exp": "'Time' es incontable → 'much': 'not much time'."
      },
      {
        "q": "I have ___ friends here — just Tom and Sarah.",
        "opts": [
          "little",
          "much",
          "a few",
          "a little"
        ],
        "ans": 2,
        "exp": "'Friends' es contable → 'a few': 'a few friends' (positivo, algo)."
      }
    ],
    "flashcards": [
      {
        "front": "MUCH/MANY/LITTLE/FEW — summary",
        "back": "MANY + countable plural: many books\nMUCH + uncountable: much money\n\nA FEW + countable: a few friends (some, OK)\nFEW + countable: few friends (barely any, negative)\n\nA LITTLE + uncountable: a little time (some)\nLITTLE + uncountable: little time (barely any)"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "How much milk do we need for the recipe?",
        "translation": "¿Cuánta leche necesitamos para la receta?"
      },
      {
        "speaker": "user",
        "text": "Not much, just a little. But we need many eggs — about six.",
        "translation": "No mucha, solo un poco. Pero necesitamos muchos huevos — como seis."
      },
      {
        "speaker": "other",
        "text": "We only have a few left in the fridge.",
        "translation": "Solo nos quedan unos pocos en el refrigerador."
      },
      {
        "speaker": "user",
        "text": "Then we should buy more. How many apples do you want?",
        "translation": "Entonces deberíamos comprar más. ¿Cuántas manzanas quieres?"
      },
      {
        "speaker": "other",
        "text": "Just a few, we don't need many this week.",
        "translation": "Solo unas pocas, no necesitamos muchas esta semana."
      },
      {
        "speaker": "user",
        "text": "Okay. We have very little time before the store closes, let's hurry!",
        "translation": "Bien. Tenemos muy poco tiempo antes de que cierre la tienda, ¡apurémonos!"
      }
    ]
  },
  "88": {
    "title": "All / Most / Some / Any / No / None",
    "topic": "Pronouns",
    "level": "A2",
    "explain": [
      {
        "head": "Escala de cantidad",
        "body": "All, most, some, any, no y none forman una escala: desde el total ('all students passed'), pasando por mayoría ('most people know this') y cantidad indefinida ('some people disagree'), hasta cero ('no one came'). Se combinan directamente con un nombre plural o incontable para hablar en general.",
        "note": "All students passed. · Most people know this. · Some people disagree. · No one came."
      },
      {
        "head": "Of + the/this/my...",
        "body": "Cuando estas palabras van seguidas de 'the', 'this', 'my' o un pronombre (un grupo específico ya identificado), se necesita 'of' antes: 'all of the students', 'none of them'. Sin determinante no se usa 'of', porque es una afirmación general ('most people', no 'most of people').",
        "note": "All of the students. · Most of the people. · Some of my friends. · None of them."
      }
    ],
    "quiz": [
      {
        "q": "___ of the students passed the exam.",
        "opts": [
          "All",
          "All of",
          "Most",
          "Most of"
        ],
        "ans": 1,
        "exp": "Seguido de 'the students' (determinante) → 'All OF the students'."
      },
      {
        "q": "___ people like cold weather.",
        "opts": [
          "Most of",
          "Most",
          "All of",
          "None"
        ],
        "ans": 1,
        "exp": "Afirmación general (sin 'the') → 'Most people' (sin 'of')."
      }
    ],
    "flashcards": [
      {
        "front": "ALL / MOST / SOME + noun vs + of + the + noun",
        "back": "GENERAL: All people, Most students, Some teachers\n(no 'of' when talking generally)\n\nSPECIFIC: All of the people, Most of my students\n(add 'of' + the/my/these etc.)"
      }
    ],
    "readingText": {
      "title": "The Free Time Survey",
      "body": "Our teacher gave the class a survey about free time. All of the students answered honestly, and the results were surprising. Most of the class said they spend too much time on their phones. Some of the students admitted they read books every day, but none of them said they read more than an hour. Interestingly, all students agreed that they need more free time overall. When asked if any of them wanted less homework, every single hand went up. \"None of you are alone in feeling this way,\" the teacher laughed. \"Most people your age feel exactly the same.\"",
      "translation": "Nuestra maestra le dio a la clase una encuesta sobre el tiempo libre. Todos los estudiantes respondieron con sinceridad, y los resultados fueron sorprendentes. La mayoría de la clase dijo que pasa demasiado tiempo en su teléfono. Algunos de los estudiantes admitieron que leen libros todos los días, pero ninguno de ellos dijo que lee más de una hora. Curiosamente, todos los estudiantes estuvieron de acuerdo en que necesitan más tiempo libre en general. Cuando se les preguntó si alguno quería menos tarea, se levantaron todas las manos. \"Ninguno de ustedes está solo sintiéndose así\", se rió la maestra. \"La mayoría de las personas de su edad se sienten exactamente igual.\""
    }
  },
  "89": {
    "title": "Both / Either / Neither",
    "topic": "Pronouns",
    "level": "B1",
    "explain": [
      {
        "head": "Both — los dos (positivo)",
        "body": "'Both' indica que dos cosas o personas están incluidas juntas, no solo una, y siempre lleva verbo en plural. 'Both (of) my sisters are married' significa que la afirmación es cierta para cada una de las dos.",
        "note": "Both (of) my sisters are married. · I like both Tom and Anna. · Both options are good."
      },
      {
        "head": "Either — uno u otro",
        "body": "'Either' se refiere a uno u otro de dos, sin especificar cuál, y no significa 'ambos'. Lleva verbo en singular: 'either day is fine' (cualquiera de los dos días sirve).",
        "note": "You can have either tea or coffee. · Either day is fine for me."
      },
      {
        "head": "Neither — ninguno de los dos",
        "body": "'Neither' es lo contrario de 'both': descarta las dos opciones a la vez. Aunque habla de dos cosas, es gramaticalmente singular: 'Neither of the options is good.'",
        "note": "Neither of the options is good. · Neither Tom nor Anna was there."
      }
    ],
    "quiz": [
      {
        "q": "___ of my parents speak English.",
        "opts": [
          "Both",
          "Either",
          "Neither",
          "All"
        ],
        "ans": 0,
        "exp": "Los dos padres hablan inglés (positivo, dos cosas) → 'Both'."
      },
      {
        "q": "'Would you like tea or coffee?' '___, thanks. I'll just have water.'",
        "opts": [
          "Both",
          "Either",
          "Neither",
          "None"
        ],
        "ans": 2,
        "exp": "Neither = ni té ni café: 'Neither, thanks.'"
      }
    ],
    "flashcards": [
      {
        "front": "BOTH / EITHER / NEITHER (two things)",
        "back": "BOTH = the two (positive):\n'Both options are fine.'\n\nEITHER = one or the other:\n'You can have either.' (your choice)\n\nNEITHER = not one, not the other:\n'Neither is good.' (= not this one, not that one)"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Should we go to the Italian place or the Mexican one?",
        "translation": "¿Vamos al lugar italiano o al mexicano?"
      },
      {
        "speaker": "user",
        "text": "Either is fine with me, honestly. I like both restaurants.",
        "translation": "Cualquiera de los dos me parece bien, honestamente. Me gustan ambos restaurantes."
      },
      {
        "speaker": "other",
        "text": "I can't decide. Neither one is open on Mondays, though.",
        "translation": "No puedo decidir. Sin embargo, ninguno de los dos abre los lunes."
      },
      {
        "speaker": "user",
        "text": "That's true. Both of them are closed today, actually.",
        "translation": "Es verdad. De hecho, los dos están cerrados hoy."
      },
      {
        "speaker": "other",
        "text": "So neither option works tonight. What about pizza instead?",
        "translation": "Así que ninguna de las dos opciones funciona esta noche. ¿Qué tal pizza en su lugar?"
      },
      {
        "speaker": "user",
        "text": "Perfect, I like either pizza or pasta — both sound great right now.",
        "translation": "Perfecto, me gusta tanto la pizza como la pasta — ambas suenan geniales ahora mismo."
      }
    ]
  },
  "90": {
    "title": "All / Every / Whole",
    "topic": "Pronouns",
    "level": "B1",
    "explain": [
      {
        "head": "All — la cantidad completa",
        "body": "'All' se combina con plurales contables o incontables para indicar la totalidad, sin que falte nada: 'all the students' = todos los estudiantes. En expresiones de tiempo va pegado al nombre sin artículo: 'all day', no 'all the day'.",
        "note": "All the students passed. · I was tired all day. (NOT: all the day ❌)"
      },
      {
        "head": "Whole — algo completo",
        "body": "'Whole' también significa 'entero', pero se usa con un nombre singular y va después del artículo: 'the whole cake', 'a whole chicken'. Trata el nombre como una sola unidad completa, a diferencia de 'all', que se extiende sobre varios elementos o una masa incontable.",
        "note": "the whole cake · the whole afternoon · a whole chicken"
      },
      {
        "head": "All the vs the whole",
        "body": "Para un nombre singular, 'all the + nombre' y 'the whole + nombre' significan lo mismo, solo cambia el orden: 'all the cake' = 'the whole cake'. Esta coincidencia solo aplica a singulares, ya que 'whole' no funciona con plurales ni incontables.",
        "note": "all the cake = the whole cake · all the class = the whole class"
      },
      {
        "head": "Every — recordatorio rápido",
        "body": "'Every' mira a cada miembro del grupo por separado, uno a uno, en vez de como masa total: 'every student' = cada estudiante individualmente. Siempre va con nombre y verbo en singular, a diferencia de 'all'.",
        "note": "Every student passed the exam."
      }
    ],
    "quiz": [
      {
        "q": "I've read ___ book.",
        "opts": [
          "the whole",
          "all the",
          "all",
          "whole the"
        ],
        "ans": 0,
        "exp": "'The whole' + nombre singular."
      },
      {
        "q": "We stayed there ___ summer.",
        "opts": [
          "all the",
          "whole",
          "the whole of",
          "all"
        ],
        "ans": 3,
        "exp": "'All summer' — sin 'the' en esta expresión de tiempo."
      },
      {
        "q": "___ student must bring an ID.",
        "opts": [
          "All",
          "Every",
          "Whole",
          "The whole"
        ],
        "ans": 1,
        "exp": "'Every' + nombre singular."
      }
    ],
    "flashcards": [
      {
        "front": "ALL THE cake = THE WHOLE cake",
        "back": "Both mean the complete thing, just different word order:\nall the cake = the whole cake\nall the class = the whole class\n(but 'whole' needs a SINGULAR noun; 'all' also works with plural/uncountable nouns)"
      }
    ],
    "readingText": {
      "title": "A Whole Day of Cleaning",
      "body": "Maria had a whole list of things to do. She spent all morning cleaning the house and every room needed attention. By noon, she had cleaned the whole kitchen, the whole living room, and even the whole garage. She worked all day without stopping, and every task felt harder than the last. \"I've cleaned the whole apartment,\" she said, exhausted, \"and I did it all by myself.\" She had spent all afternoon on the laundry too — every piece of clothing was finally clean. That evening, she sat down and thought, \"I deserve the whole weekend to rest after working all week like this.\"",
      "translation": "María tenía toda una lista de cosas por hacer. Pasó toda la mañana limpiando la casa y cada habitación necesitaba atención. Al mediodía, ya había limpiado toda la cocina, toda la sala y hasta todo el garaje. Trabajó todo el día sin parar, y cada tarea se sentía más difícil que la anterior. \"Limpié todo el apartamento\", dijo, agotada, \"y lo hice yo sola.\" También había pasado toda la tarde con la ropa — cada prenda finalmente estaba limpia. Esa noche, se sentó y pensó: \"Merezco todo el fin de semana para descansar después de trabajar toda la semana así.\""
    }
  },
  "91": {
    "title": "Each and Every",
    "topic": "Pronouns",
    "level": "B1",
    "explain": [
      {
        "head": "Each — de forma individual",
        "body": "'Each' se centra en los miembros de un grupo de uno en uno, como individuos separados: 'each student got a different question' resalta que cada estudiante recibió algo distinto. A diferencia de 'every', 'each' puede usarse con solo dos elementos, y siempre lleva verbo singular.",
        "note": "Each student got a different question. · Each of the rooms has a TV. · We each paid $10."
      },
      {
        "head": "Every — el grupo completo",
        "body": "'Every' también habla de cada miembro, pero enfatizando que se cubre todo el grupo sin excepción: 'every student must attend'. Se usa normalmente con grupos de tres o más y también en expresiones de frecuencia como 'every day'.",
        "note": "Every student must attend. · I exercise every day. · She calls me every week."
      },
      {
        "head": "Every vs each — diferencia",
        "body": "La diferencia está en el enfoque: 'each' resalta al individuo, 'every' resalta lo completo del grupo. Con tres o más elementos ambos suelen sonar bien, pero solo 'each' es correcto cuando se habla de exactamente dos cosas.",
        "note": "Every day I wake up at 7. · Each day brings new challenges. (both OK for three+)"
      }
    ],
    "quiz": [
      {
        "q": "___ student in the class passed the test.",
        "opts": [
          "Each",
          "Every",
          "All",
          "Both"
        ],
        "ans": 1,
        "exp": "Todos los miembros en conjunto → 'Every student passed'."
      },
      {
        "q": "She gave ___ of us a gift.",
        "opts": [
          "every",
          "each",
          "all",
          "both"
        ],
        "ans": 1,
        "exp": "Pensando en individuos → 'each of us'."
      }
    ],
    "flashcards": [
      {
        "front": "EACH vs EVERY",
        "back": "EACH = individual focus:\n'Each student got a different question.'\nCan be used with TWO things.\n\nEVERY = group focus:\n'Every student must attend.'\nOnly with THREE or more.\n\nBoth take SINGULAR verb."
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Good morning class. Each of you will get a different worksheet today.",
        "translation": "Buenos días clase. Cada uno de ustedes recibirá una hoja de trabajo diferente hoy."
      },
      {
        "speaker": "user",
        "text": "Does every student get the same number of questions?",
        "translation": "¿Todos los estudiantes reciben el mismo número de preguntas?"
      },
      {
        "speaker": "other",
        "text": "Yes, every worksheet has exactly ten questions, but each one is different.",
        "translation": "Sí, cada hoja tiene exactamente diez preguntas, pero cada una es diferente."
      },
      {
        "speaker": "user",
        "text": "What if there are only two of us left in the group?",
        "translation": "¿Qué pasa si solo quedamos dos en el grupo?"
      },
      {
        "speaker": "other",
        "text": "Then each of you will still get your own worksheet.",
        "translation": "Entonces cada uno de ustedes de todas formas recibirá su propia hoja."
      },
      {
        "speaker": "user",
        "text": "Got it. I check my work every day, so this should be easy.",
        "translation": "Entendido. Reviso mi trabajo todos los días, así que esto debería ser fácil."
      }
    ]
  }
};
