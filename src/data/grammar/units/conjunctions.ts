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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};
