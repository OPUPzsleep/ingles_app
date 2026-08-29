import { Unit } from '@/types/grammar';

export const conjunctionsUnits: Record<number, Unit> = {
  "113": {
    "title": "Although / Though / Even though / In spite of / Despite",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Although / Though / Even though + clause",
        "body": "These conjunctions introduce a contrast clause (subject + verb).",
        "note": "Although it was raining, we went out. · She passed though she hadn't studied. · Even though he was tired, he kept working."
      },
      {
        "head": "In spite of / Despite + noun / -ing",
        "body": "These prepositions are followed by a noun or -ing (NOT a clause).",
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
    ]
  },
  "114": {
    "title": "In Case",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "In case — precaution",
        "body": "Use 'in case' to say why you do something as a precaution (to be safe if something happens).",
        "note": "I'll take an umbrella in case it rains. (precaution — I'm taking it NOW, not IF it rains) · Write it down in case you forget."
      },
      {
        "head": "In case vs If",
        "body": "'If it rains, I'll use my umbrella.' (conditional) | 'I'll take an umbrella in case it rains.' (precaution now)"
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
    ]
  },
  "115": {
    "title": "Unless / As Long As / Provided",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Unless — if not",
        "body": "'Unless' = 'if not'. Used for exceptions to a condition.",
        "note": "I'll come unless it rains. (= I'll come if it doesn't rain) · Unless you hurry, we'll be late."
      },
      {
        "head": "As long as / provided (that) — condition",
        "body": "'As long as' and 'provided (that)' mean 'on the condition that'.",
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
    ]
  },
  "116": {
    "title": "As (time/manner/reason)",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "As = at the same time",
        "body": "Use 'as' (= while/when) for two actions happening simultaneously.",
        "note": "I saw her as I was leaving. · As the sun rose, the birds began to sing."
      },
      {
        "head": "As = in the same way",
        "body": "'(just) as' for comparing manner.",
        "note": "Do as I say. · Leave everything as it is."
      },
      {
        "head": "As = because/since",
        "body": "'As' can mean 'because' (often at the start of a sentence).",
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
    ]
  },
  "117": {
    "title": "Like and As",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "Like — preposition (similar to)",
        "body": "'Like' is a preposition followed by a noun/pronoun. It means 'similar to'.",
        "note": "She looks like her mother. · He works like a machine. · He behaves like a child."
      },
      {
        "head": "As — conjunction (in the role of)",
        "body": "'As' is a conjunction or preposition meaning 'in the function of'.",
        "note": "She works as a nurse. (= she IS a nurse) · He was treated as a criminal. (= in the role of)"
      },
      {
        "head": "Like vs As — key distinction",
        "body": "Like = similar to | As = in the capacity of / in the way that",
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
    ]
  },
  "118": {
    "title": "Like / As If / As Though",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "LIKE + noun/pronoun — comparison",
        "body": "Use 'like' + a noun or pronoun to say two things are similar.",
        "note": "He looks like his father. · It sounds like a good idea."
      },
      {
        "head": "AS IF / AS THOUGH + clause — how something seems",
        "body": "Use 'as if' or 'as though' (same meaning) + a clause to describe how a situation appears.",
        "note": "It looks as if it's going to rain. · She sounded as though she was crying."
      },
      {
        "head": "AS IF + past — for something untrue or unlikely",
        "body": "Use a past tense after 'as if' (even about the present) when the comparison is clearly not true.",
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
    ]
  },
  "119": {
    "title": "During / For / While",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "During + noun — when something happens",
        "body": "'During' says WHEN something happened (point in time during a period).",
        "note": "It rained during the night. · I fell asleep during the film. · She called during lunch."
      },
      {
        "head": "For + time period — how long",
        "body": "'For' says HOW LONG something lasted.",
        "note": "It rained for two hours. · I slept for eight hours. · She was in Paris for a week."
      },
      {
        "head": "While + clause — simultaneous",
        "body": "'While' introduces a clause (subject + verb) for simultaneous actions.",
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
    ]
  },
  "120": {
    "title": "By and Until / By the Time",
    "topic": "Conjunctions",
    "explain": [
      {
        "head": "By — not later than",
        "body": "'By' means 'at some point before and including this time' (deadline).",
        "note": "I'll be there by 6. (= at or before 6) · Can you finish it by tomorrow? · She left by the time I arrived."
      },
      {
        "head": "Until — up to this point",
        "body": "'Until' means 'continuously up to this time' (ongoing).",
        "note": "I'll wait until 6. (= I'll wait continuously until 6) · She worked until midnight."
      },
      {
        "head": "By the time + clause",
        "body": "'By the time' = when (a time in the future or past arrives).",
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
    ]
  }
};
