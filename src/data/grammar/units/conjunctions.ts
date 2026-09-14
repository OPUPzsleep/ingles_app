import { Unit } from '@/types/grammar';

export const conjunctionsUnits: Record<number, Unit> = {
  "113": {
    "title": "Although / Though / Even though / In spite of / Despite",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Although / Though / Even though + clause",
        "body": "Although, though, and even though all introduce a clause — a full subject + verb structure — that expresses a contrast or an unexpected result compared to the main clause. 'Even though' is simply a stronger, more emphatic version of 'although', while 'though' is the more informal, conversational variant of the same word; all three can be used interchangeably in most everyday contexts. Because these words are followed by a complete clause, they behave very differently from 'despite' and 'in spite of' below, which cannot take a clause at all.",
        "note": "Although it was raining, we went out. · She passed though she hadn't studied. · Even though he was tired, he kept working."
      },
      {
        "head": "In spite of / Despite + noun / -ing",
        "body": "'In spite of' and 'despite' express exactly the same contrast idea as 'although', but grammatically they are prepositions, not conjunctions, so they must be followed by a noun phrase or an -ing form rather than a full subject + verb clause. 'In spite of the rain' and 'despite feeling tired' both compress the idea into a noun-like phrase instead of a clause. A very common learner mistake is writing 'despite of' or following 'despite' with a full clause — remembering it's a preposition, just like 'because of', helps avoid both errors.",
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
        "exp": "Followed by clause (it was cold) → conjunction: 'Although'."
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
        "exp": "Followed by noun phrase (the cold weather) → 'Despite' (or 'In spite of')."
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
        "exp": "Followed by -ing form → 'Despite not studying'."
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
        "head": "In case — precaution",
        "body": "'In case' explains the reason you're taking an action now, as a precaution, to be prepared for something that might happen later — crucially, the precaution happens BEFORE the possible event, not as a reaction to it. 'I'll take an umbrella in case it rains' means you're taking the umbrella right now, regardless of whether it actually ends up raining, purely to cover that possibility. This forward-looking, preparatory logic is what sets 'in case' apart from a conditional 'if', explained in the next block.",
        "note": "I'll take an umbrella in case it rains. (precaution — I'm taking it NOW, not IF it rains) · Write it down in case you forget."
      },
      {
        "head": "In case vs If",
        "body": "'If' and 'in case' can both involve rain and an umbrella, but they describe completely different timelines of action. With 'if', the action (using the umbrella) only happens once the condition is met — it's a reaction that depends on the rain actually occurring. With 'in case', the action (taking the umbrella) happens immediately, before you even know whether it will rain, purely as advance preparation. Mixing these two up is a common source of confusion, since both sentences mention the same event but describe very different sequences of cause and effect."
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
        "exp": "Precaution → 'in case': 'Take it in case you need to call.'"
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
        "exp": "'In case' = I'm saving NOW as a precaution (not 'if I lose my job I will save'): 'in case I lose my job.'"
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
        "head": "Unless — if not",
        "body": "'Unless' is a shorthand way of saying 'if not' or 'except if' — it introduces the one exception that would stop the main statement from being true. 'I'll come unless it rains' means the plan is to come, and the only thing that would change that is rain; rephrased with 'if', it becomes 'I'll come if it doesn't rain'. Because 'unless' already contains a built-in negative idea, you should never add a second negative inside the clause that follows it, which is a mistake worth watching for.",
        "note": "I'll come unless it rains. (= I'll come if it doesn't rain) · Unless you hurry, we'll be late."
      },
      {
        "head": "As long as / provided (that) — condition",
        "body": "'As long as' and 'provided (that)' both mean 'on the condition that', setting a requirement that must be met for the main statement to hold — but unlike 'unless', they state the condition positively rather than as an exception. 'You can come as long as you're quiet' sets quietness as the requirement for permission, phrased as something that must be true, not something that must be avoided. The two expressions are essentially interchangeable, with 'provided (that)' sounding slightly more formal than the everyday 'as long as'.",
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
        "exp": "'Unless' = if not: 'I'll come unless it rains' = 'I'll come if it doesn't rain'."
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
        "exp": "Condition for permission → 'as long as': 'as long as you drive carefully'."
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
        "head": "As = at the same time",
        "body": "One use of 'as' overlaps closely with 'while' or 'when', linking two actions that are happening at the same moment in time. 'I saw her as I was leaving' places the seeing and the leaving side by side, both unfolding together rather than one following the other. This time-based sense is just one of three separate meanings 'as' can carry in English — the other two, manner and reason, are covered in the next two blocks — so context is essential for figuring out which meaning is intended in any given sentence.",
        "note": "I saw her as I was leaving. · As the sun rose, the birds began to sing."
      },
      {
        "head": "As = in the same way",
        "body": "A second, quite different use of 'as' compares the manner or way something is done, meaning 'in the same way that' rather than describing timing. 'Do as I say' means 'do it in the way I'm telling you to', and 'leave everything as it is' means 'in the same state or way it currently is'. This manner sense has nothing to do with the simultaneous-time meaning above, so recognizing which one applies depends entirely on the surrounding context of the sentence.",
        "note": "Do as I say. · Leave everything as it is."
      },
      {
        "head": "As = because/since",
        "body": "A third meaning of 'as' overlaps with 'because' or 'since', giving a reason for the main clause rather than describing time or manner — and it's especially common at the very start of a sentence. 'As I was tired, I went to bed' gives tiredness as the reason for going to bed, exactly the way 'because I was tired' would. With three unrelated meanings sharing the same small word, 'as' is a good example of why context, not the word alone, carries the real meaning in English.",
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
        "exp": "Simultaneous action → 'As': 'As she was leaving, I remembered.'"
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
        "exp": "'As' = since/because: 'As we have time, let's stop for coffee.'"
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
        "head": "Like — preposition (similar to)",
        "body": "'Like' functions as a preposition here, always followed by a noun or pronoun, and it means that two things resemble each other without actually being the same thing. 'She looks like her mother' compares her appearance to her mother's without claiming she IS her mother, and 'he works like a machine' describes his working style through resemblance, not identity. This idea of resemblance without identity is exactly what separates 'like' from 'as', covered next, which expresses an actual role or identity.",
        "note": "She looks like her mother. · He works like a machine. · He behaves like a child."
      },
      {
        "head": "As — conjunction (in the role of)",
        "body": "Used this way, 'as' describes someone's actual role, job, or function — not a resemblance, but a real identity or capacity someone genuinely has. 'She works as a nurse' states the real fact that nursing is her actual job, and 'he was treated as a criminal' means he was treated in the specific role of a criminal, whether or not that role was accurate. This 'real role' meaning is the key thing that distinguishes 'as' from 'like', which only ever expresses similarity.",
        "note": "She works as a nurse. (= she IS a nurse) · He was treated as a criminal. (= in the role of)"
      },
      {
        "head": "Like vs As — key distinction",
        "body": "Putting the two together, the choice between 'like' and 'as' comes down to one simple question: is this a real role or identity, or just a resemblance? 'She works like a nurse' says she works in a nurse-like way without actually being one, maybe she's a caregiver at home, while 'she works as a nurse' states that nursing is genuinely her profession. This is a classic pair for learners to confuse precisely because the two sentences look almost identical apart from a single word, yet mean something quite different.",
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
        "exp": "'Similar to' → 'like': 'He drives like a racing driver.' (he's not one)"
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
        "exp": "In the role/function of → 'as': 'She works as a teacher.' (she IS a teacher)"
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
        "head": "LIKE + noun/pronoun — comparison",
        "body": "This is the same comparative use of 'like' seen in the previous unit, applied specifically to comparing appearance or behavior: 'like' plus a noun or pronoun states that two things resemble each other. 'He looks like his father' and 'it sounds like a good idea' both draw a comparison to something concrete named directly after 'like'. Because only a noun or pronoun follows, not a full clause, this structure is grammatically simpler than 'as if'/'as though', explained next, which introduce a whole situation rather than a single noun.",
        "note": "He looks like his father. · It sounds like a good idea."
      },
      {
        "head": "AS IF / AS THOUGH + clause — how something seems",
        "body": "'As if' and 'as though' mean exactly the same thing and are used interchangeably; both introduce a full clause (subject + verb) that describes the impression or appearance a situation gives, rather than comparing it to a single named thing. 'It looks as if it's going to rain' and 'she sounded as though she was crying' both describe how a situation SEEMS, based on some outward sign. This clause-based structure lets you describe a whole scenario, not just a simple resemblance, which is why it needs a full clause instead of just a noun.",
        "note": "It looks as if it's going to rain. · She sounded as though she was crying."
      },
      {
        "head": "AS IF + past — for something untrue or unlikely",
        "body": "When the comparison introduced by 'as if' or 'as though' is clearly false or highly unlikely, English shifts the verb into a past tense even when talking about the present — this is the same 'unreal' past used in hypothetical conditionals. 'He talks as if he knew everything' uses the past 'knew' specifically to signal that he does NOT actually know everything; a present tense ('as if he knows') would instead suggest the speaker considers it a genuine possibility. This past-for-unreality pattern is a subtle but important signal of the speaker's true opinion about whether the comparison is real.",
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
        "exp": "'Like' + noun for comparison."
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
        "exp": "'As if' + clause."
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
        "exp": "'As if' + unreal past for something untrue."
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
        "head": "During + noun — when something happens",
        "body": "'During' is followed by a noun and answers the question 'when?' by locating an event at some point inside a longer period of time, without saying how long that event itself lasted. 'It rained during the night' tells you the rain happened at some point within the night, but not for how many hours. Because it's always followed by a noun (the film, the night, lunch), 'during' contrasts directly with 'for', covered next, which measures duration rather than pinpointing a moment.",
        "note": "It rained during the night. · I fell asleep during the film. · She called during lunch."
      },
      {
        "head": "For + time period — how long",
        "body": "'For' answers a different question from 'during' — not 'when?' but 'for how long?' — and it's followed by a length of time rather than a named period. 'It rained for two hours' tells you the duration of the rain itself, a piece of information 'during' can't give you. Learners often confuse the two because both can appear in similar-sounding sentences about rain, sleep, or events, but the test is simple: if you can answer with a number of hours, days, or weeks, you need 'for', not 'during'.",
        "note": "It rained for two hours. · I slept for eight hours. · She was in Paris for a week."
      },
      {
        "head": "While + clause — simultaneous",
        "body": "Unlike 'during' and 'for', which are both followed by nouns, 'while' is a conjunction that introduces a full clause with its own subject and verb, linking two actions that happen at the same time. 'It rained while we were outside' places the raining and the being-outside side by side as simultaneous events, each described by its own little sentence. So the real choice among the three often comes down to grammar rather than meaning: a noun naming a period needs 'during'; a number expressing length needs 'for'; a full clause needs 'while'.",
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
        "exp": "WHEN it happened (point in a period) + noun → 'during': 'during the film'."
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
        "exp": "HOW LONG → 'for': 'for three hours'."
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
        "exp": "Simultaneous actions, followed by clause → 'while': 'While I was cooking'."
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
        "head": "By — not later than",
        "body": "'By' marks a deadline — it means an action will be complete at some point at or before the stated time, though exactly when within that window isn't specified. 'I'll be there by 6' just guarantees arrival at 6 at the latest; you might get there earlier, but not later. This 'sometime up to a limit' sense contrasts with 'until', covered next, which describes something continuing all the way up to a point in time, not just being completed by it.",
        "note": "I'll be there by 6. (= at or before 6) · Can you finish it by tomorrow? · She left by the time I arrived."
      },
      {
        "head": "Until — up to this point",
        "body": "'Until' describes an action or state that continues without stopping, all the way up to the time mentioned, and then ends. 'I'll wait until 6' means the waiting itself carries on continuously right up to 6 o'clock, unlike 'by 6', which would only guarantee the waiting is finished by then, without saying anything about how continuous it was. Mixing up 'by' and 'until' is a frequent mistake because both involve a clock time, but one marks a deadline for completion and the other marks the endpoint of an ongoing action.",
        "note": "I'll wait until 6. (= I'll wait continuously until 6) · She worked until midnight."
      },
      {
        "head": "By the time + clause",
        "body": "'By the time' introduces a full clause and works similarly to 'by', but instead of naming a clock time it names an event that marks the deadline — it means 'when this other thing happens or happened'. 'By the time you read this, I'll be gone' uses your reading as the reference point, rather than a specific hour. It's especially useful for comparing two events in sequence, often paired with a perfect tense, as in 'by the time we arrived, the film had started', to show that one event was already complete before the other one happened.",
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
        "exp": "Deadline → 'by': 'by Friday' (= at some point before or on Friday)."
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
        "exp": "Continuous waiting up to a time → 'until': 'until 5 o'clock'."
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
