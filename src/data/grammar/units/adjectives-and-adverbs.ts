import { Unit } from '@/types/grammar';

export const adjectivesAndAdverbsUnits: Record<number, Unit> = {
  "98": {
    "title": "Adjectives -ing and -ed",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Adjetivos en -ING: la causa",
        "body": "La forma -ing describe la cosa, persona o situación que provoca un sentimiento en otros: dice cómo ES algo desde fuera. Por eso una película puede ser 'boring' (aburrida) o 'shocking' (impactante). Se opone a la forma -ed, que describe cómo se SIENTE la persona.",
        "note": "The film was boring. (it causes boredom) · The news was shocking. · What an interesting book!"
      },
      {
        "head": "Adjetivos en -ED: el sentimiento",
        "body": "La forma -ed describe la reacción interna de una persona, no lo que la causó: responde '¿cómo te sientes?', no '¿cómo es?'. Así, 'I was bored' habla de tu estado tras ver algo, mientras que la película sería 'boring'. Confundir ambas formas es un error muy común.",
        "note": "I was bored during the film. (I felt boredom) · She was shocked by the news. · Are you interested in art?"
      },
      {
        "head": "Truco: -ED = Estado, -ING = INgrediente",
        "body": "Truco para hispanohablantes: -ED suena a 'Estado' (tu propio ánimo), así que describe cómo TÚ te sientes. -ING suena a 'INgrediente', la causa que provoca esa reacción en otros. Usa estas palabras clave para elegir la forma correcta antes de hablar.",
        "note": "I am bored. (mi estado) · The movie is boring. (el ingrediente que causa el aburrimiento)"
      }
    ],
    "table": {
      "cols": [
        "-ING (causes feeling)",
        "-ED (feels the feeling)"
      ],
      "rows": [
        [
          "boring",
          "bored"
        ],
        [
          "interesting",
          "interested"
        ],
        [
          "exciting",
          "excited"
        ],
        [
          "shocking",
          "shocked"
        ],
        [
          "exhausting",
          "exhausted"
        ],
        [
          "confusing",
          "confused"
        ],
        [
          "frightening",
          "frightened"
        ]
      ]
    },
    "quiz": [
      {
        "q": "The lecture was really ___. I nearly fell asleep.",
        "opts": [
          "bored",
          "boring",
          "bore",
          "boredom"
        ],
        "ans": 1,
        "exp": "La conferencia CAUSA aburrimiento → -ing: 'boring'."
      },
      {
        "q": "I was ___ by the film. I expected something better.",
        "opts": [
          "disappointing",
          "disappointed",
          "disappoint",
          "disappointment"
        ],
        "ans": 1,
        "exp": "YO SENTÍ la decepción → -ed: 'I was disappointed'."
      },
      {
        "q": "What an ___ story! I want to hear more.",
        "opts": [
          "interested",
          "interesting",
          "interest",
          "interestingly"
        ],
        "ans": 1,
        "exp": "La historia CAUSA interés → -ing: 'an interesting story'."
      }
    ],
    "flashcards": [
      {
        "front": "-ING vs -ED adjectives — the rule",
        "back": "-ING = the THING that causes a feeling:\n'The film is boring.' (it causes boredom)\n\n-ED = how a PERSON feels:\n'I am bored.' (I feel the boredom)\n\nTIP: THING → -ing. PERSON → -ed."
      }
    ],
    "readingText": {
      "title": "Movie Night",
      "body": "Last Friday, my friends came over for a movie night. We picked a horror film that everyone said was terrifying, but honestly, I found it boring. Ana was excited before it started, but after twenty minutes she looked confused — the plot was really confusing! Halfway through, Luis fell asleep because he was exhausted after a long week at work. I was a little disappointed; I expected something more exciting. In the end, we turned it off and watched a comedy instead, which was actually more interesting. Everyone agreed it was a relaxing night, even if the horror movie was a total disappointment.",
      "translation": "El viernes pasado, mis amigos vinieron a mi casa para una noche de películas. Elegimos una película de terror que todos decían que era aterradora, pero, sinceramente, me pareció aburrida. Ana estaba emocionada antes de que empezara, pero después de veinte minutos se veía confundida — ¡la trama era realmente confusa! A la mitad, Luis se quedó dormido porque estaba agotado después de una larga semana de trabajo. Yo estaba un poco decepcionado; esperaba algo más emocionante. Al final, la apagamos y vimos una comedia, que en realidad fue más interesante. Todos coincidimos en que fue una noche relajante, aunque la película de terror fue una decepción total."
    }
  },
  "99": {
    "title": "Adjectives: Order",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Orden de los adjetivos",
        "body": "Al usar varios adjetivos antes de un sustantivo, el inglés sigue un orden fijo (OSASCOMP), de lo más subjetivo (opinión) a lo más pegado al sustantivo (material, propósito). Cambiar el orden no es agramatical técnicamente, pero suena raro y dificulta la comprensión.",
        "note": "Opinion · Size · Age · Shape · Colour · Origin · Material · Purpose"
      },
      {
        "head": "Ejemplos",
        "body": "Aplicando OSASCOMP completo: opinión ('lovely') va primero, y el propósito ('kitchen') queda justo junto al sustantivo. En la práctica casi nunca se usan tantos adjetivos juntos — con tres ya es mucho — pero conocer el orden ayuda con combinaciones más cortas.",
        "note": "Opinion: lovely | Size: big | Age: old | Shape: round | Colour: green | Origin: French | Material: silver | Purpose: kitchen"
      }
    ],
    "quiz": [
      {
        "q": "She's wearing a ___ dress.",
        "opts": [
          "small Italian red beautiful",
          "beautiful small red Italian",
          "Italian red small beautiful",
          "red small beautiful Italian"
        ],
        "ans": 1,
        "exp": "Orden: Opinión(beautiful) → Tamaño(small) → Color(red) → Origen(Italian)."
      },
      {
        "q": "It's a ___ car.",
        "opts": [
          "German old beautiful big",
          "beautiful big old German",
          "big old beautiful German",
          "beautiful old big German"
        ],
        "ans": 1,
        "exp": "Orden: Opinión(beautiful) → Tamaño(big) → Edad(old) → Origen(German)."
      }
    ],
    "flashcards": [
      {
        "front": "Order of adjectives: OSASCOMP",
        "back": "Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose\n\nExample:\n'a LOVELY SMALL OLD ROUND GREEN FRENCH SILVER cooking knife'\n\nIn practice, rarely more than 3 adjectives together."
      }
    ],
    "readingText": {
      "title": "The Market in Cusco",
      "body": "On our trip to Peru, we visited a small market in Cusco full of colourful stalls. My sister found a beautiful old wooden mask and wanted to buy it immediately. I preferred a lovely little round leather bag instead. Near the entrance, an old man was selling a big black Peruvian wool blanket, and next to him, a young woman offered a gorgeous long red silk scarf. My husband bought a strange small green stone necklace as a souvenir. Everything was handmade, and the seller explained that each beautiful traditional item told a different story about the region.",
      "translation": "En nuestro viaje a Perú, visitamos un pequeño mercado en Cusco lleno de puestos coloridos. Mi hermana encontró una hermosa máscara de madera vieja y quiso comprarla de inmediato. Yo preferí un pequeño y bonito bolso redondo de cuero. Cerca de la entrada, un hombre mayor vendía una gran manta negra de lana peruana, y junto a él, una mujer joven ofrecía una hermosa bufanda de seda roja y larga. Mi esposo compró un extraño y pequeño collar de piedra verde como recuerdo. Todo era hecho a mano, y el vendedor explicó que cada hermoso objeto tradicional contaba una historia diferente sobre la región."
    }
  },
  "100": {
    "title": "Adjectives and Adverbs 1",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Los adjetivos describen sustantivos",
        "body": "Un adjetivo describe un sustantivo y va antes de él o después de verbos como be, look, seem, feel. Indica qué ES o cómo ES algo, nunca cómo se realiza una acción — ese es el trabajo del adverbio.",
        "note": "a slow driver · a careful driver · she is careful · it looks good"
      },
      {
        "head": "Los adverbios describen verbos/adjetivos",
        "body": "Un adverbio indica CÓMO ocurre una acción, modificando al verbo (o a otro adjetivo/adverbio). La mayoría se forma añadiendo -ly al adjetivo (slow→slowly). A diferencia del adjetivo, suele acompañar al verbo, no al sustantivo.",
        "note": "He drives slowly. · She speaks carefully. · It's incredibly expensive. · I hardly know him."
      },
      {
        "head": "Good vs Well",
        "body": "'Good' es siempre adjetivo ('a good singer'); 'well' es normalmente su adverbio ('sings well'). Pero 'well' también puede ser adjetivo cuando significa estar sano ('I feel well'). El contexto indica cuál es.",
        "note": "She's a good singer. (adjective) · She sings well. (adverb) · I feel well. (adjective = healthy)"
      }
    ],
    "quiz": [
      {
        "q": "She plays the piano ___.",
        "opts": [
          "good",
          "well",
          "nicely-well",
          "goodly"
        ],
        "ans": 1,
        "exp": "Adverbio (cómo toca) → 'well' (no 'good'): 'She plays well.'"
      },
      {
        "q": "He's a ___ driver. He never has accidents.",
        "opts": [
          "carefully",
          "careful",
          "care",
          "cares"
        ],
        "ans": 1,
        "exp": "Adjetivo antes del sustantivo → 'careful': 'a careful driver'."
      }
    ],
    "flashcards": [
      {
        "front": "GOOD vs WELL",
        "back": "GOOD = adjective (describes a noun):\n'She's a GOOD teacher.' · 'The food is GOOD.'\n\nWELL = adverb (describes a verb):\n'She teaches WELL.' · 'He plays WELL.'\n\nWELL = adjective (= healthy):\n'Are you WELL?' · 'I feel WELL.'"
      }
    ],
    "readingText": {
      "title": "The Final Match",
      "body": "Our local team played really well on Saturday. Their new striker is a good player, and he ran fast all game. He didn't score, but he passed the ball well to his teammates. The goalkeeper played especially well too — he saved three difficult shots. After the match, the coach said, 'It was a good performance, and everyone worked well together.' My brother, who plays for the other team, wasn't feeling well that day, so he couldn't play his best. Even so, he said politely, 'You played a good game. Congratulations!' It was a good day for football in our town.",
      "translation": "Nuestro equipo local jugó muy bien el sábado. Su nuevo delantero es un buen jugador, y corrió rápido todo el partido. No anotó, pero pasó bien el balón a sus compañeros. El portero también jugó especialmente bien — atajó tres tiros difíciles. Después del partido, el entrenador dijo: 'Fue una buena actuación, y todos trabajaron bien juntos.' Mi hermano, que juega en el otro equipo, no se sentía bien ese día, así que no pudo jugar en su mejor nivel. Aun así, dijo cortésmente: 'Jugaron un buen partido. ¡Felicidades!' Fue un buen día para el fútbol en nuestro pueblo."
    }
  },
  "101": {
    "title": "Adjectives and Adverbs 2 (fast/hard/hardly)",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Palabras iguales como adjetivo y adverbio",
        "body": "Algunas palabras comunes (fast, hard, early, late, high, low, long, near, straight) no cambian de forma entre adjetivo y adverbio; solo la posición indica su función. 'A fast car' (adjetivo) vs. 'he drives fast' (adverbio) usan la misma palabra.",
        "note": "a fast car (adj) · he drives fast (adv) · a hard test (adj) · she works hard (adv)"
      },
      {
        "head": "Hardly: casi no",
        "body": "'Hardly' no es el adverbio de 'hard' con el mismo significado. 'Hard' como adverbio significa 'con esfuerzo' ('she works hard'), mientras que 'hardly' significa 'casi no' o 'apenas' ('I can hardly see'). Son palabras totalmente distintas.",
        "note": "I hardly know him. (= I almost don't know him) · I can hardly see. (= almost can't see)"
      }
    ],
    "quiz": [
      {
        "q": "She works ___ — she puts in 12 hours a day.",
        "opts": [
          "hardly",
          "hardily",
          "hard",
          "hardly ever"
        ],
        "ans": 2,
        "exp": "Adverbio de modo de 'hard' (misma forma) → 'works hard'."
      },
      {
        "q": "I ___ know anything about this topic.",
        "opts": [
          "hard",
          "hardly",
          "hardily",
          "not hard"
        ],
        "ans": 1,
        "exp": "'Hardly' = casi no: 'I hardly know anything.'"
      }
    ],
    "flashcards": [
      {
        "front": "HARD vs HARDLY",
        "back": "HARD (adverb) = with effort:\n'She works HARD.' (many hours, much effort)\n\nHARDLY (adverb) = almost not:\n'I HARDLY know him.' (I barely know him)\n\nThey are completely DIFFERENT!"
      }
    ],
    "readingText": {
      "title": "Final Exams",
      "body": "This week I have my final exams, so I've been studying hard every night. My roommate is a fast reader — she finishes a whole chapter in ten minutes — but I read slowly and have to check the dictionary constantly. I can hardly remember all the vocabulary for the English test tomorrow. Yesterday I stayed up late, and now I'm hardly able to keep my eyes open. My teacher always says, 'Study hard, but rest well too,' but this week I've hardly slept at all. Tomorrow I'll wake up early and run fast to the exam room, hoping I've prepared hard enough.",
      "translation": "Esta semana tengo mis exámenes finales, así que he estado estudiando duro todas las noches. Mi compañera de cuarto lee rápido — termina un capítulo entero en diez minutos — pero yo leo despacio y tengo que revisar el diccionario constantemente. Casi no recuerdo todo el vocabulario para el examen de inglés de mañana. Ayer me quedé despierto hasta tarde, y ahora casi no puedo mantener los ojos abiertos. Mi profesora siempre dice: 'Estudien duro, pero descansen bien también,' pero esta semana casi no he dormido. Mañana me levantaré temprano e iré corriendo rápido al salón del examen, esperando haberme preparado lo suficientemente duro."
    }
  },
  "102": {
    "title": "So and Such",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "So + adjetivo/adverbio",
        "body": "'So' intensifica un adjetivo o adverbio SIN sustantivo, como una versión más fuerte de 'very': 'so tired', 'so quickly'. Si la frase incluye un sustantivo, no puedes usar 'so' solo; ahí se usa 'such'.",
        "note": "The film was so long! · She speaks so quickly. · I'm so tired. · Why is he so rude?"
      },
      {
        "head": "Such + (a/an) + adjetivo + sustantivo",
        "body": "'Such' intensifica igual que 'so', pero se usa cuando hay un sustantivo en la frase: va antes del artículo y el adjetivo. En vez de 'so long a film' (incorrecto), se dice 'such a long film'. Con sustantivo → such; sin sustantivo → so.",
        "note": "It was such a long film! · She's such a nice person. · Such beautiful weather!"
      }
    ],
    "quiz": [
      {
        "q": "The film was ___ boring that I fell asleep.",
        "opts": [
          "so",
          "such",
          "very",
          "too"
        ],
        "ans": 0,
        "exp": "'So' + adjetivo: 'so boring'."
      },
      {
        "q": "It was ___ a boring film that I fell asleep.",
        "opts": [
          "so",
          "very",
          "such",
          "too"
        ],
        "ans": 2,
        "exp": "'Such' + a + adjetivo + sustantivo: 'such a boring film'."
      }
    ],
    "flashcards": [
      {
        "front": "SO vs SUCH",
        "back": "SO + adjective/adverb (no noun):\n'The film was SO boring.'\n'She speaks SO quickly.'\n\nSUCH + (a/an) + (adjective) + noun:\n'It was SUCH a boring film.'\n'SUCH beautiful weather!'"
      }
    ],
    "readingText": {
      "title": "My Cousin's Wedding",
      "body": "Last weekend I went to my cousin's wedding, and it was such a beautiful event! The bride looked so elegant in her white dress, and the garden was decorated with such lovely flowers. The ceremony was so emotional that my aunt cried the whole time. Afterwards, there was such delicious food that everyone asked for more. The band played so well that people danced until midnight. My cousin gave such a touching speech about her husband that the whole room went quiet. It was such a wonderful day, and everyone agreed it was one of the best weddings they had ever attended.",
      "translation": "El fin de semana pasado fui a la boda de mi prima, ¡y fue un evento tan hermoso! La novia se veía tan elegante con su vestido blanco, y el jardín estaba decorado con flores tan hermosas. La ceremonia fue tan emotiva que mi tía lloró todo el tiempo. Después, hubo comida tan deliciosa que todos pidieron más. La banda tocó tan bien que la gente bailó hasta la medianoche. Mi prima dio un discurso tan conmovedor sobre su esposo que todo el salón se quedó en silencio. Fue un día tan maravilloso, y todos coincidieron en que fue una de las mejores bodas a las que habían asistido."
    }
  },
  "103": {
    "title": "Enough and Too",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Too: demasiado",
        "body": "'Too' indica que algo pasa el límite de lo aceptable, con una consecuencia negativa implícita, no solo un grado alto. 'Too hot' significa que el calor impide algo, a diferencia de 'very hot', que es solo descriptivo.",
        "note": "It's too hot to go outside. (= so hot I can't go) · This shirt is too big for me."
      },
      {
        "head": "Enough: suficiente",
        "body": "'Enough' indica una cantidad suficiente para un propósito. Va después del adjetivo/adverbio ('warm enough') pero ANTES del sustantivo ('enough money'). Este cambio de orden es un error frecuente.",
        "note": "Is it warm enough? · She's old enough to vote. · Have you got enough money? · I have enough chairs."
      },
      {
        "head": "Too/Enough + to + infinitivo",
        "body": "Ambas palabras suelen completarse con 'to + infinitivo' para expresar la consecuencia: 'too cold to swim' (el frío impide nadar) o 'strong enough to lift it' (la fuerza sí alcanza). Así se combinan causa y efecto en una sola frase.",
        "note": "It's too cold to swim. · She's not strong enough to lift it. · He's old enough to drive."
      }
    ],
    "quiz": [
      {
        "q": "I'm ___ tired ___ go out tonight.",
        "opts": [
          "too/to",
          "enough/to",
          "so/that",
          "very/to"
        ],
        "ans": 0,
        "exp": "Too + adjetivo + to + infinitivo: 'too tired to go out'."
      },
      {
        "q": "Is the box big ___ to fit everything?",
        "opts": [
          "too",
          "so",
          "enough",
          "very"
        ],
        "ans": 2,
        "exp": "Adjetivo + enough + to: 'big enough to fit'."
      }
    ],
    "flashcards": [
      {
        "front": "TOO vs ENOUGH + to infinitive",
        "back": "TOO + adj + TO do:\n'It's too cold to swim.' (= so cold I can't)\n\nAdj + ENOUGH + TO do:\n'She's tall enough to reach it.' (= sufficiently tall)\n\nNOT enough + TO do:\n'He's not old enough to vote.'"
      }
    ],
    "simulatedChat": [
      { "speaker": "user", "text": "Can you taste the soup? I think it might be too salty.", "translation": "¿Puedes probar la sopa? Creo que podría estar demasiado salada." },
      { "speaker": "other", "text": "Hmm, it's not too salty, but it's not hot enough yet.", "translation": "Mmm, no está demasiado salada, pero todavía no está suficientemente caliente." },
      { "speaker": "user", "text": "Okay, I'll leave it on the stove a bit longer. Is the rice ready?", "translation": "Bueno, la dejaré en la estufa un poco más. ¿Está lista el arroz?" },
      { "speaker": "other", "text": "Almost — it's too hard to eat right now, it needs five more minutes.", "translation": "Casi — está demasiado dura para comer ahora mismo, necesita cinco minutos más." },
      { "speaker": "user", "text": "Good. Do we have enough bread for everyone?", "translation": "Bien. ¿Tenemos suficiente pan para todos?" },
      { "speaker": "other", "text": "I think so, but I'm not sure it's fresh enough to serve. Let me check.", "translation": "Creo que sí, pero no estoy seguro de que esté suficientemente fresco para servirlo. Déjame revisar." },
      { "speaker": "user", "text": "It smells fine. I think we're finally ready to eat!", "translation": "Huele bien. ¡Creo que por fin estamos listos para comer!" }
    ]
  },
  "104": {
    "title": "Quite, Pretty, Rather and Fairly",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Fairly: moderadamente",
        "body": "'Fairly' es uno de los intensificadores más suaves: algo aceptable, pero sin entusiasmo. 'Fairly good' implica un 'pero no genial' de fondo. Es el más bajo de la escala junto a quite, rather y pretty.",
        "note": "The film was fairly good. (= not bad, but not great)"
      },
      {
        "head": "Quite: bastante",
        "body": "'Quite' está un escalón por encima de 'fairly': moderadamente, más que aceptable pero menos que 'very'. Detalle clave: con artículo indefinido, 'quite' va ANTES del artículo: 'quite a long way', no 'a quite long way'.",
        "note": "It's quite good. · That's quite a long way. · She's quite talented."
      },
      {
        "head": "Rather: sorprendentemente",
        "body": "'Rather' añade un matiz de sorpresa o algo inesperado, no solo grado. 'Rather cold for June' no solo describe la temperatura, sino que comenta que es inusual para la época. Es más 'cargado' emocionalmente que 'fairly'.",
        "note": "It's rather cold for June. (surprisingly cold) · The film was rather boring. (more than I expected)"
      },
      {
        "head": "Pretty: bastante (informal)",
        "body": "En inglés hablado e informal, 'pretty' funciona como intensificador equivalente a 'quite' o 'rather', sin relación con su significado de 'bonito'. Es muy común en conversación, pero demasiado informal para contextos escritos o formales.",
        "note": "It's pretty good. (informal) · She's pretty tired. · That was pretty impressive."
      }
    ],
    "quiz": [
      {
        "q": "The weather was ___ cold — much colder than I expected.",
        "opts": [
          "fairly",
          "quite",
          "rather",
          "pretty"
        ],
        "ans": 2,
        "exp": "Grado sorprendente → 'rather': 'rather cold'."
      },
      {
        "q": "The film was ___ good — I enjoyed it, but it wasn't great.",
        "opts": [
          "rather",
          "very",
          "fairly",
          "extremely"
        ],
        "ans": 2,
        "exp": "Moderado, positivo neutro → 'fairly good'."
      }
    ],
    "flashcards": [
      {
        "front": "FAIRLY / QUITE / RATHER / PRETTY",
        "back": "FAIRLY = moderately (neutral):\n'It was fairly good.' (OK but not great)\n\nQUITE = more than fairly:\n'It's quite good.' (moderately good)\n\nRATHER = surprisingly or quite a lot:\n'It's rather cold for July!' (unexpectedly)\n\nPRETTY = informal = quite:\n'It's pretty good.' (informal)"
      }
    ],
    "readingText": {
      "title": "Hiking in the Mountains",
      "body": "We went hiking in the mountains last weekend, and the weather was rather strange for August — it was actually quite cold at the top. The trail was fairly easy at the beginning, just a gentle path through the trees, but it got quite steep near the summit. My friend Carlos, who hikes every week, said the view was pretty amazing, and I agreed it was quite a spectacular sight. The wind was rather strong, so we were fairly happy we brought jackets. Overall, it was a pretty tiring day, but the fairly clear sky and the rather dramatic scenery made it completely worth it.",
      "translation": "Fuimos de excursión a las montañas el fin de semana pasado, y el clima estaba bastante extraño para agosto — de hecho, hacía bastante frío en la cima. El sendero era bastante fácil al principio, solo un camino suave entre los árboles, pero se volvió bastante empinado cerca de la cumbre. Mi amigo Carlos, que hace senderismo cada semana, dijo que la vista era bastante increíble, y yo estuve de acuerdo en que era un paisaje bastante espectacular. El viento era bastante fuerte, así que estábamos bastante contentos de haber traído chaquetas. En general, fue un día bastante agotador, pero el cielo bastante despejado y el paisaje bastante dramático hicieron que valiera completamente la pena."
    }
  },
  "105": {
    "title": "Comparative 1 (bigger / more expensive)",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Adjetivos cortos: añade -er",
        "body": "Los adjetivos de una sílaba (y la mayoría de dos) forman el comparativo añadiendo -er, con ajustes ortográficos: doblar consonante (big→bigger), -y a -i (easy→easier), quitar -e muda (nice→nicer). Son palabras muy frecuentes; vale la pena memorizarlas.",
        "note": "old→older · fast→faster · big→bigger · easy→easier · happy→happier"
      },
      {
        "head": "Adjetivos largos: more",
        "body": "Los adjetivos de dos o más sílabas sonarían mal con -er ('expensiver'), así que usan 'more'/'less' delante sin cambiar el adjetivo. Regla práctica: con tres o más sílabas, o terminaciones como -ful, -ous, -ing, usa 'more/less'.",
        "note": "more expensive · more interesting · more comfortable · more carefully"
      },
      {
        "head": "Comparativos irregulares",
        "body": "Algunos adjetivos muy comunes tienen formas irregulares que hay que memorizar: good→better, bad→worse, far→further/farther, much/many→more, little→less. Por ser tan frecuentes, un error aquí se nota más que con un adjetivo raro.",
        "note": "good→better · bad→worse · far→further/farther · much/many→more · little→less"
      }
    ],
    "table": {
      "cols": [
        "Adjective",
        "Comparative",
        "Superlative"
      ],
      "rows": [
        [
          "old",
          "older",
          "oldest"
        ],
        [
          "big",
          "bigger",
          "biggest"
        ],
        [
          "happy",
          "happier",
          "happiest"
        ],
        [
          "expensive",
          "more expensive",
          "most expensive"
        ],
        [
          "good",
          "better",
          "best"
        ],
        [
          "bad",
          "worse",
          "worst"
        ]
      ]
    },
    "quiz": [
      {
        "q": "This restaurant is ___ than the other one. (expensive)",
        "opts": [
          "more expensive",
          "expensiver",
          "most expensive",
          "expensivest"
        ],
        "ans": 0,
        "exp": "Adjetivo largo → 'more expensive than'."
      },
      {
        "q": "My sister is ___ than me. (tall)",
        "opts": [
          "more tall",
          "most tall",
          "taller",
          "tallest"
        ],
        "ans": 2,
        "exp": "Adjetivo corto → añade -er: 'taller than'."
      },
      {
        "q": "Today is ___ than yesterday. (bad)",
        "opts": [
          "more bad",
          "badly",
          "worse",
          "worst"
        ],
        "ans": 2,
        "exp": "Comparativo irregular de 'bad' → 'worse'."
      }
    ],
    "flashcards": [
      {
        "front": "Comparative rules — short vs long adjectives",
        "back": "SHORT (1-2 syllables) → add -ER:\nold→older · big→bigger · happy→happier\n\nLONG (2+ syllables) → MORE:\nmore expensive · more comfortable\n\nIRREGULAR:\ngood→better · bad→worse · far→further"
      }
    ],
    "readingText": {
      "title": "Looking for an Apartment",
      "body": "My partner and I are looking for a new apartment, and we've seen five places so far. The first one was cheaper than the others, but it was also smaller and darker. The second apartment was bigger and had a nicer kitchen, but it was noisier because it's near a busy street. The third one was the most interesting: it was older than the rest, with high ceilings, but the rent was more expensive than we wanted to pay. Our agent said the fourth apartment was better value, and honestly, it felt safer too. In the end, we chose the one that was quieter and closer to my office.",
      "translation": "Mi pareja y yo estamos buscando un nuevo apartamento, y hasta ahora hemos visto cinco lugares. El primero era más barato que los otros, pero también era más pequeño y oscuro. El segundo apartamento era más grande y tenía una cocina más bonita, pero era más ruidoso porque está cerca de una calle concurrida. El tercero fue el más interesante: era más antiguo que el resto, con techos altos, pero la renta era más cara de lo que queríamos pagar. Nuestro agente dijo que el cuarto apartamento tenía mejor valor, y honestamente, también se sentía más seguro. Al final, elegimos el que era más tranquilo y más cercano a mi oficina."
    }
  },
  "106": {
    "title": "Comparative 2 (much better / getting better)",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Much/far/a lot: reforzar el comparativo",
        "body": "Un comparativo simple ('better') solo indica dirección, no tamaño de la diferencia. Para marcar una diferencia grande, se coloca 'much', 'far' o 'a lot' antes del comparativo: 'much better', 'far more talented'. 'Very' NO funciona aquí.",
        "note": "This is much better. · She's far more talented. · It's a lot cheaper here."
      },
      {
        "head": "A bit/a little: diferencia pequeña",
        "body": "Al contrario de 'much' y 'a lot', 'a bit' y 'a little' van antes del comparativo para mostrar que la diferencia es pequeña: 'a bit cooler', 'a little taller'. La elección depende de qué tan grande sea la diferencia real.",
        "note": "It's a bit cooler today. · She's a little taller than me."
      },
      {
        "head": "Getting + comparativo: cambio gradual",
        "body": "'Getting' + comparativo describe un cambio progresivo en el tiempo, no una comparación fija entre dos cosas. 'It's getting colder' no compara con ayer directamente, sino que describe un proceso continuo. Muy común con el clima o la salud.",
        "note": "It's getting colder. · My English is getting better. · The situation is getting worse."
      }
    ],
    "quiz": [
      {
        "q": "This car is ___ more expensive than that one.",
        "opts": [
          "very",
          "much",
          "so",
          "too"
        ],
        "ans": 1,
        "exp": "Enfatiza la diferencia comparativa → 'much': 'much more expensive'."
      },
      {
        "q": "Your English is getting ___ every day.",
        "opts": [
          "good",
          "well",
          "better",
          "best"
        ],
        "ans": 2,
        "exp": "Mejora gradual → 'getting better'."
      }
    ],
    "flashcards": [
      {
        "front": "Making comparatives stronger or weaker",
        "back": "MUCH/FAR/A LOT + comparative (big difference):\n'This is MUCH better.' · 'FAR more expensive.'\n\nA BIT/A LITTLE + comparative (small difference):\n'It's A BIT colder today.' · 'A LITTLE better.'\n\nGETTING + comparative (gradual change):\n'It's GETTING colder.' / 'I'm GETTING better.'"
      }
    ],
    "readingText": {
      "title": "My Gym Progress",
      "body": "I started going to the gym three months ago, and my trainer says I'm getting much stronger every week. In the beginning, I could barely lift the smallest weights, but now I'm far more confident, and my arms are a lot bigger than before. Running is getting easier too — I used to get tired after five minutes, but now I can run a little longer each time. My diet is a bit healthier as well, since I stopped eating so much sugar. My friend Marta, who's been going for a year, is much fitter than me, but my trainer says I'm improving far faster than most beginners.",
      "translation": "Empecé a ir al gimnasio hace tres meses, y mi entrenador dice que me estoy poniendo mucho más fuerte cada semana. Al principio, apenas podía levantar las pesas más pequeñas, pero ahora tengo mucha más confianza, y mis brazos son mucho más grandes que antes. Correr también se está volviendo más fácil — antes me cansaba después de cinco minutos, pero ahora puedo correr un poco más cada vez. Mi dieta también es un poco más saludable, ya que dejé de comer tanta azúcar. Mi amiga Marta, que lleva un año yendo, está mucho más en forma que yo, pero mi entrenador dice que estoy mejorando mucho más rápido que la mayoría de los principiantes."
    }
  },
  "107": {
    "title": "Comparative 3 (as … as)",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "As...as: igual grado",
        "body": "La estructura 'as + adjetivo/adverbio + as' compara dos cosas mostrando que son IGUALES, sin ganador ni perdedor. 'She's as tall as her brother' significa que miden lo mismo. El adjetivo queda en su forma simple, nunca con -er.",
        "note": "She's as tall as her brother. · The film isn't as good as I expected. · He runs as fast as me."
      },
      {
        "head": "Not as...as: menos que",
        "body": "Añadir 'not' invierte el sentido de igualdad a desigualdad, pero de forma más suave que un comparativo directo. 'Not as expensive as' dice que lo primero es inferior, sin precisar cuánto. Se usa a menudo por sonar más educado o indirecto.",
        "note": "This hotel isn't as expensive as that one. · I don't work as hard as she does."
      },
      {
        "head": "The same as / similar to / different from",
        "body": "Para comparar sustantivos existen expresiones fijas con su propia preposición: 'the same AS' (idéntico), 'similar TO' (parecido, no idéntico), 'different FROM' (contraste). Confundir las preposiciones ('different to', 'same than') es un error muy común.",
        "note": "My bag is the same as yours. · His opinion is similar to mine. · English is different from Spanish."
      }
    ],
    "quiz": [
      {
        "q": "My car isn't ___ yours. (expensive — less)",
        "opts": [
          "as expensive as",
          "so expensive than",
          "more expensive as",
          "as expensive than"
        ],
        "ans": 0,
        "exp": "Not as + adjetivo + as: 'not as expensive as yours'."
      },
      {
        "q": "The weather today is ___ yesterday.",
        "opts": [
          "the same than",
          "the same as",
          "same like",
          "same with"
        ],
        "ans": 1,
        "exp": "Igual → 'the same AS': 'the same as yesterday'."
      }
    ],
    "flashcards": [
      {
        "front": "AS...AS for comparisons",
        "back": "EQUAL: as + adj + as:\n'She's AS TALL AS her brother.'\n\nNOT EQUAL: not as + adj + as:\n'I'm NOT AS TALL AS her.'\n\nTHE SAME AS:\n'My bag is THE SAME AS yours.'\n\nDIFFERENT FROM:\n'English is DIFFERENT FROM Spanish.'"
      }
    ],
    "simulatedChat": [
      { "speaker": "user", "text": "Have you met my cousin Daniel? He's as tall as my dad now!", "translation": "¿Conociste a mi primo Daniel? ¡Ahora es tan alto como mi papá!" },
      { "speaker": "other", "text": "Really? Is he as old as you?", "translation": "¿En serio? ¿Es tan mayor como tú?" },
      { "speaker": "user", "text": "No, he's younger, but he's not as shy as he used to be.", "translation": "No, es menor, pero ya no es tan tímido como antes." },
      { "speaker": "other", "text": "That's funny, my sister is the same. She's as confident as our older brother now.", "translation": "Qué gracioso, mi hermana es igual. Ahora es tan segura de sí misma como nuestro hermano mayor." },
      { "speaker": "user", "text": "Their personalities are similar to each other's, actually.", "translation": "Sus personalidades son bastante parecidas, la verdad." },
      { "speaker": "other", "text": "True, but Daniel isn't as talkative as your sister, is he?", "translation": "Cierto, pero Daniel no es tan hablador como tu hermana, ¿verdad?" },
      { "speaker": "user", "text": "Ha, no one is as talkative as her!", "translation": "Ja, ¡nadie es tan hablador como ella!" }
    ]
  },
  "108": {
    "title": "Superlative (the biggest / the most beautiful)",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Superlativos: adjetivos cortos",
        "body": "El superlativo señala el grado máximo de una cualidad dentro de todo un grupo, no solo frente a otro elemento. Los adjetivos cortos añaden -est y siempre llevan 'the' delante: old→the oldest, siguiendo el mismo patrón que el comparativo.",
        "note": "the oldest · the biggest · the happiest · the nearest"
      },
      {
        "head": "Superlativos: adjetivos largos",
        "body": "Igual que con el comparativo, los adjetivos largos usan 'the most' en vez de -est, sin cambiar el adjetivo: the most expensive, the most beautiful. La misma regla del comparativo aplica: cuanto más largo el adjetivo, más probable que necesite 'the most'.",
        "note": "the most expensive · the most beautiful · the most comfortable"
      },
      {
        "head": "Superlativos irregulares",
        "body": "Los mismos adjetivos con comparativo irregular (good, bad, far, little, much/many) tienen superlativo irregular siguiendo la misma raíz: good→the best, bad→the worst. Conviene memorizar juntas las tres formas: adjetivo, comparativo y superlativo.",
        "note": "good→the best · bad→the worst · far→the furthest · little→the least · much/many→the most"
      },
      {
        "head": "Present perfect con superlativos",
        "body": "El superlativo suele ir seguido de present perfect, sobre todo con 'ever', porque compara algo con toda tu experiencia hasta ahora. 'It's the best film I've ever seen' = de todas las películas que he visto, esta es la mejor. Es una combinación muy frecuente.",
        "note": "It's the best film I've ever seen. · She's the most talented person I've ever met."
      }
    ],
    "quiz": [
      {
        "q": "It's ___ city in the world. (beautiful)",
        "opts": [
          "the most beautiful",
          "the beautifullest",
          "most beautiful",
          "the more beautiful"
        ],
        "ans": 0,
        "exp": "Superlativo de adjetivo largo: 'the most beautiful'."
      },
      {
        "q": "This is ___ hotel I've ever stayed in. (bad)",
        "opts": [
          "the baddest",
          "the worse",
          "the worst",
          "most worst"
        ],
        "ans": 2,
        "exp": "Superlativo irregular de 'bad' → 'the worst'."
      }
    ],
    "flashcards": [
      {
        "front": "Superlative rules",
        "back": "SHORT → THE + adj + EST:\nold→THE OLDEST · big→THE BIGGEST\n\nLONG → THE MOST + adj:\nTHE MOST EXPENSIVE · THE MOST BEAUTIFUL\n\nIRREGULAR:\ngood→THE BEST · bad→THE WORST · far→THE FURTHEST"
      }
    ],
    "readingText": {
      "title": "The Best Meal of the Trip",
      "body": "During our trip to Italy, we ate at a tiny restaurant in Naples that turned out to be the best meal I've ever had. The pizza was the most delicious thing on the menu, made in the oldest oven in the city. Our waiter told us it was also the busiest restaurant in the neighbourhood, and I believed him — it was the noisiest place we visited all week. The dessert was the sweetest tiramisu I've ever tasted, and the coffee afterward was the strongest I've had in years. My husband said it was definitely the most memorable dinner of our whole vacation, and I completely agree — nothing else came close.",
      "translation": "Durante nuestro viaje a Italia, comimos en un pequeño restaurante en Nápoles que resultó ser la mejor comida que he probado en mi vida. La pizza era lo más delicioso del menú, hecha en el horno más antiguo de la ciudad. Nuestro mesero nos dijo que también era el restaurante más concurrido del barrio, y le creí — fue el lugar más ruidoso que visitamos en toda la semana. El postre fue el tiramisú más dulce que he probado, y el café después fue el más fuerte que he tomado en años. Mi esposo dijo que definitivamente fue la cena más memorable de todas nuestras vacaciones, y estoy completamente de acuerdo — nada más se le comparó."
    }
  },
  "109": {
    "title": "Word Order 1",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Orden básico: S + V + O",
        "body": "A diferencia del español, el inglés depende de la posición de las palabras para mostrar el significado, así que el orden sujeto-verbo-objeto es fijo. 'She reads books' no se puede reordenar como en español para dar énfasis.",
        "note": "She reads books. (not 'Books she reads.' in normal sentences)"
      },
      {
        "head": "Lugar y tiempo: normalmente al final",
        "body": "La información de DÓNDE o CUÁNDO ocurre algo suele añadirse al final de la oración, después del objeto: 'She works in London', 'I'll see you tomorrow'. Si hay lugar y tiempo juntos, el lugar suele ir antes que el tiempo.",
        "note": "She works in London. · I'll see you tomorrow. · He met her at the party last night."
      },
      {
        "head": "Nunca separes verbo y objeto con un adverbio",
        "body": "Un error muy común en hispanohablantes es meter un adverbio entre el verbo y su objeto directo, algo natural en español pero agramatical en inglés. El adverbio debe ir después del objeto: 'She speaks English well', nunca 'She speaks well English'.",
        "note": "She speaks English well. ✅ (NOT: She speaks well English. ❌)"
      }
    ],
    "quiz": [
      {
        "q": "She ___ English ___.",
        "opts": [
          "speaks well/—",
          "speaks/well",
          "well speaks/—",
          "speaks/good"
        ],
        "ans": 1,
        "exp": "El adverbio va DESPUÉS del objeto: 'She speaks English well.' (NO: 'She speaks well English.')"
      }
    ],
    "flashcards": [
      {
        "front": "Adverb position — key rule",
        "back": "NEVER put an adverb between VERB and OBJECT:\n'She speaks English WELL.' ✅\n'She speaks WELL English.' ❌\n\nAdverb goes: before the verb, after the verb, or at end of sentence."
      }
    ],
    "readingText": {
      "title": "My First Day at the Office",
      "body": "Yesterday was my first day at the new office. I met my manager in the lobby at nine o'clock, and she explained the project carefully to me. I understand English quite well, but I still speak Spanish fluently with two other coworkers during lunch. In the afternoon, I answered emails quickly at my new desk, and I organized my files neatly in the drawer. My manager said I learned the software fast for a first day. After work, I walked home slowly because it was raining, and I called my mother happily to tell her everything went well.",
      "translation": "Ayer fue mi primer día en la nueva oficina. Conocí a mi jefa en el vestíbulo a las nueve en punto, y ella me explicó el proyecto con cuidado. Entiendo inglés bastante bien, pero todavía hablo español con fluidez con otros dos compañeros durante el almuerzo. Por la tarde, respondí correos rápidamente en mi nuevo escritorio, y organicé mis archivos con orden en el cajón. Mi jefa dijo que aprendí el programa rápido para ser el primer día. Después del trabajo, caminé a casa despacio porque estaba lloviendo, y llamé a mi mamá con alegría para contarle que todo salió bien."
    }
  },
  "110": {
    "title": "Word Order 2 (adverbs with the verb)",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Adverbios de frecuencia: antes del verbo principal",
        "body": "Los adverbios de frecuencia van justo antes del verbo principal: 'I always eat breakfast' coloca 'always' delante de 'eat'. Esta posición aplica al verbo principal; con 'be' o auxiliares cambia, como se ve a continuación.",
        "note": "I always eat breakfast. · She usually drives to work. · He rarely complains."
      },
      {
        "head": "Pero después de BE",
        "body": "La excepción principal es el verbo 'be': cuando es el único verbo de la oración, el adverbio de frecuencia va DESPUÉS de él. Se dice 'He is always late', no 'He always is late' — 'be' se comporta como un auxiliar en cuanto al orden.",
        "note": "He is always late. · She is never rude. · They are often tired."
      },
      {
        "head": "Also / even / still / already / just: mismas reglas",
        "body": "Palabras como also, even, still, already y just siguen la misma lógica: antes del verbo principal, pero después de un auxiliar o de 'be'. 'I've already eaten' (después del auxiliar) y 'He still doesn't know' (antes del verbo principal).",
        "note": "I've already eaten. · She has just left. · He still doesn't know."
      }
    ],
    "quiz": [
      {
        "q": "She ___ late for work.",
        "opts": [
          "is never",
          "never is",
          "is never being",
          "be never"
        ],
        "ans": 0,
        "exp": "Adverbio de frecuencia DESPUÉS de 'be': 'She is never late.'"
      },
      {
        "q": "I ___ eat meat. I'm vegetarian.",
        "opts": [
          "don't usually",
          "usually don't",
          "not usually",
          "usually not"
        ],
        "ans": 0,
        "exp": "'Don't usually' — adverbio entre auxiliar y verbo principal: 'don't usually eat'."
      }
    ],
    "flashcards": [
      {
        "front": "Frequency adverbs — position",
        "back": "BEFORE main verb:\n'I ALWAYS eat breakfast.'\n'She USUALLY drives.'\n\nAFTER BE:\n'He IS ALWAYS late.'\n'They ARE OFTEN tired.'\n\nAFTER auxiliary:\n'I have NEVER done this.' · 'She doesn't USUALLY come.'"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "What's your morning routine like on weekdays?", "translation": "¿Cómo es tu rutina matutina entre semana?" },
      { "speaker": "user", "text": "I usually wake up at six, but I'm always tired at first.", "translation": "Normalmente me despierto a las seis, pero siempre estoy cansado al principio." },
      { "speaker": "other", "text": "Do you always have breakfast before work?", "translation": "¿Siempre desayunas antes del trabajo?" },
      { "speaker": "user", "text": "I usually do, but sometimes I'm too late and I don't usually eat much.", "translation": "Normalmente sí, pero a veces se me hace tarde y normalmente no como mucho." },
      { "speaker": "other", "text": "I'm never hungry that early, honestly.", "translation": "Sinceramente, nunca tengo hambre tan temprano." },
      { "speaker": "user", "text": "Really? I'm often starving by nine o'clock.", "translation": "¿En serio? Seguido tengo mucha hambre para las nueve." },
      { "speaker": "other", "text": "That's funny — I've never noticed that about you before.", "translation": "Qué gracioso — nunca me había fijado en eso antes." }
    ]
  },
  "111": {
    "title": "Still / Any More / Yet / Already",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Still: sigue pasando",
        "body": "'Still' resalta que algo continúa más allá de cuando se esperaba que terminara, a menudo con sorpresa o impaciencia. 'She's still working' a medianoche indica que esto dura más de lo normal, no un simple hecho neutro.",
        "note": "It's midnight and she's still working. · He still hasn't called."
      },
      {
        "head": "Any more / any longer: ya no",
        "body": "'Any more' es el espejo negativo de 'still': indica que algo que antes era cierto ya terminó. Solo aparece en negativo y al final: 'She doesn't work here any more' = antes trabajaba ahí, ahora no.",
        "note": "She doesn't work here any more. · I can't wait any longer."
      },
      {
        "head": "Yet: todavía no (negativas/preguntas)",
        "body": "'Yet' se usa en negativas y preguntas para algo esperado que aún no ha pasado: 'I haven't done it yet' implica que sigue pendiente. Va casi siempre al final y no aparece en oraciones afirmativas — ahí se usa 'already'.",
        "note": "I haven't done it yet. · Have you spoken to him yet?"
      },
      {
        "head": "Already: ya (antes de lo esperado)",
        "body": "'Already' es el equivalente positivo de 'yet': algo que ya sucedió, a veces antes de lo esperado. 'I've already eaten' puede expresar sorpresa leve. Juntas, 'yet' (pendiente) y 'already' (completado) forman un par muy útil.",
        "note": "I've already eaten. · She's already left."
      }
    ],
    "quiz": [
      {
        "q": "It's 2am and he's ___ awake.",
        "opts": [
          "yet",
          "still",
          "already",
          "any more"
        ],
        "ans": 1,
        "exp": "Sigue pasando (con sorpresa) → 'still': 'He's still awake.'"
      },
      {
        "q": "She used to be a teacher but she doesn't work ___.",
        "opts": [
          "still",
          "yet",
          "already",
          "any more"
        ],
        "ans": 3,
        "exp": "Algo que ya terminó → 'any more': 'doesn't work any more'."
      }
    ],
    "flashcards": [
      {
        "front": "STILL / ANY MORE / YET / ALREADY",
        "back": "STILL = continuing (often surprisingly):\n'He's STILL sleeping.' (at noon!)\n\nANY MORE = stopped:\n'She doesn't live here ANY MORE.'\n\nYET = expected but not happened (neg/questions):\n'Have you finished YET?'\n\nALREADY = happened sooner than expected:\n'I've ALREADY done it.'"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Have you washed the dishes yet?", "translation": "¿Ya lavaste los platos?" },
      { "speaker": "user", "text": "Yes, I've already washed them, and I've already taken out the trash too.", "translation": "Sí, ya los lavé, y ya saqué la basura también." },
      { "speaker": "other", "text": "Great. Is Marco still cleaning his room?", "translation": "Genial. ¿Marco todavía está limpiando su cuarto?" },
      { "speaker": "user", "text": "He's still doing it — he's been in there for two hours!", "translation": "Todavía lo está haciendo — ¡lleva dos horas ahí adentro!" },
      { "speaker": "other", "text": "Wow. Doesn't he live with his girlfriend any more?", "translation": "Vaya. ¿Ya no vive con su novia?" },
      { "speaker": "user", "text": "No, they broke up, so he doesn't live there any more. He moved back here.", "translation": "No, terminaron, así que ya no vive ahí. Se regresó aquí." },
      { "speaker": "other", "text": "I see. Well, I haven't finished my homework yet, so I should go study.", "translation": "Ya veo. Bueno, todavía no he terminado mi tarea, así que debería ir a estudiar." }
    ]
  },
  "112": {
    "title": "Even",
    "topic": "Adjectives & Adverbs",
    "explain": [
      {
        "head": "Even: lo más sorprendente",
        "body": "'Even' señala que algo es más extremo o inesperado de lo que sugiere el resto de la oración, resaltando el ejemplo más sorprendente del grupo. 'Even Tom came' implica que Tom era el menos probable en aparecer. Puede acompañar a sujetos, verbos u oraciones completas.",
        "note": "Even Tom came. (= Tom is not usually the type to come) · She didn't even say sorry. · He's clever. He can even speak Japanese."
      },
      {
        "head": "Even + comparativo: refuerza la comparación",
        "body": "Antes de un comparativo, 'even' enfatiza que el nuevo grado supera uno que ya era notable. 'This is even better than I expected' implica que las expectativas ya eran altas y la realidad las superó aún más.",
        "note": "This is even better than I expected. · She runs even faster than me. · It's even worse than yesterday."
      }
    ],
    "quiz": [
      {
        "q": "He forgot his wife's birthday. He ___ remembered his own birthday!",
        "opts": [
          "even",
          "didn't even",
          "doesn't even",
          "wasn't even"
        ],
        "ans": 1,
        "exp": "Negativo sorprendente → 'didn't even': 'He didn't even remember his own birthday.'"
      },
      {
        "q": "This new phone is ___ better than the old one.",
        "opts": [
          "very",
          "even",
          "too",
          "so"
        ],
        "ans": 1,
        "exp": "'Even' refuerza el comparativo: 'even better'."
      }
    ],
    "flashcards": [
      {
        "front": "EVEN — usage",
        "back": "= surprising or unexpected:\n'EVEN Tom apologised.' (I didn't expect that!)\n'She DIDN'T EVEN say hello.' (very rude)\n\nEVEN + comparative = stronger:\n'This is EVEN better than I expected.'\n'It's EVEN worse now.'"
      }
    ],
    "readingText": {
      "title": "A Strange Day at the Office",
      "body": "My coworker Sofia had the strangest day at the office yesterday. She's normally very calm, but she was even more nervous than usual before her presentation. Even the manager, who never smiles, laughed at her jokes! During the meeting, she didn't even check her notes once, and she answered every question perfectly. Even her biggest critic admitted the presentation was even better than last year's. Later, she didn't even stop for lunch because clients kept calling. By the end of the day, she was even more exhausted than after her hardest project, but she said it was even more rewarding than she expected.",
      "translation": "Mi compañera Sofía tuvo el día más extraño en la oficina ayer. Normalmente es muy tranquila, pero estaba incluso más nerviosa de lo habitual antes de su presentación. ¡Hasta el jefe, que nunca sonríe, se rió con sus chistes! Durante la reunión, ni siquiera revisó sus notas una vez, y respondió todas las preguntas perfectamente. Hasta su crítico más duro admitió que la presentación fue aún mejor que la del año pasado. Más tarde, ni siquiera paró para almorzar porque los clientes seguían llamando. Al final del día, estaba incluso más agotada que después de su proyecto más difícil, pero dijo que fue aún más gratificante de lo que esperaba."
    }
  }
};
