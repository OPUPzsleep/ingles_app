import { Unit } from '@/types/grammar';

export const modalVerbsUnits: Record<number, Unit> = {
  "26": {
    "title": "Can, Could and (be) Able to",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "CAN — present ability/possibility",
        "body": "We use 'can' to talk about general abilities and possibilities that exist right now, in the present. It covers physical skills (swimming, speaking a language) and also things that are simply possible in general, not tied to one specific moment. The same word 'can' covers both a personal skill and a general truth about the world — the context tells you which one is meant.",
        "note": "I can swim. · Can you speak French? · The weather can be cold here."
      },
      {
        "head": "COULD — past general ability",
        "body": "'Could' is the past form of 'can', and we use it for an ability you had generally, over a period of time, in the past — not one single successful moment. It answers 'Were you able to do this back then, in general?' rather than 'Did you manage to do it on one occasion?'. For ONE specific successful action, English switches to 'was/were able to' instead — mixing the two up is one of the most common mistakes learners make.",
        "note": "When I was young, I could run very fast. · She could speak three languages."
      },
      {
        "head": "WAS/WERE ABLE TO — specific past success",
        "body": "When you're describing a single, specific occasion where someone succeeded at something — especially something difficult or unexpected — English prefers 'was/were able to' instead of 'could'. Think of it as marking one real event with a clear result, not a general skill someone had. This is the mirror image of 'could' above: general ability over time uses 'could', one concrete achievement uses 'was/were able to'.",
        "note": "The fire spread, but everyone was able to escape. · I was able to find a parking space."
      },
      {
        "head": "BE ABLE TO — other tenses",
        "body": "'Can' and 'could' are modal verbs, and modals don't have every tense — there's no future form of 'can', for example. Whenever you need an ability idea in a tense 'can'/'could' can't cover (future, present perfect, after 'to'...), 'be able to' steps in as the substitute, conjugating like a normal verb: will be able to, have been able to, to be able to.",
        "note": "I will be able to help you tomorrow. · I've never been able to understand maths."
      }
    ],
    "syntaxChips": [
      { "label": "Present ability", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "can", "role": "verb" }, { "text": "base verb", "role": "object" }
      ] },
      { "label": "Past ability (general)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "could", "role": "verb" }, { "text": "base verb", "role": "object" }
      ] },
      { "label": "Past success (specific)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "was/were able to", "role": "verb" }, { "text": "base verb", "role": "object" }
      ] },
      { "label": "Future ability", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "will be able to", "role": "verb" }, { "text": "base verb", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "COULD — general", "example": "She could speak three languages when she was a diplomat.", "highlight": "could speak" },
      "right": { "label": "WAS ABLE TO — one success", "example": "After months of practice, she was able to pass the exam.", "highlight": "was able to pass" },
      "caption": "\"Could\" describes a general or repeated ability in the past. For ONE specific achievement, use \"was/were able to\" instead."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Can you speak any other languages?", "translation": "¿Sabes hablar algún otro idioma?" },
      { "speaker": "user", "text": "Yes, I can speak a bit of French.", "translation": "Sí, sé hablar un poco de francés." },
      { "speaker": "other", "text": "Could you always speak it, even as a kid?", "translation": "¿Siempre lo supiste hablar, incluso de niño?" },
      { "speaker": "user", "text": "Not really — but I was able to learn it fast at university.", "translation": "La verdad no — pero pude aprenderlo rápido en la universidad." }
    ],
    "tips": [
      "En inglés hablado, \"could\" suena más natural que \"was able to\" cuando cuentas una historia general del pasado.",
      "\"Can't\" y \"can\" a veces suenan casi igual en inglés rápido — escucha la vocal: can /kən/ (débil) vs can't /kænt/ (fuerte)."
    ],
    "dailyWords": [
      { "w": "ability", "ipa": "/əˈbɪləti/", "def": "habilidad, capacidad", "ex": "She has a natural ability for languages." },
      { "w": "manage to", "ipa": "/ˈmænɪdʒ tuː/", "def": "lograr (con esfuerzo)", "ex": "I managed to finish on time." }
    ],
    "table": {
      "cols": [
        "Time",
        "Ability",
        "Negative"
      ],
      "rows": [
        [
          "Present",
          "can do",
          "can't do"
        ],
        [
          "Past (general)",
          "could do",
          "couldn't do"
        ],
        [
          "Past (specific success)",
          "was able to do",
          "wasn't able to do"
        ],
        [
          "Future",
          "will be able to",
          "won't be able to"
        ]
      ]
    },
    "quiz": [
      {
        "q": "The fire spread, but everyone ___ escape.",
        "opts": [
          "could",
          "was able to",
          "can",
          "managed"
        ],
        "ans": 1,
        "exp": "Specific past achievement → 'was able to escape'."
      },
      {
        "q": "When I was a child, I ___ climb trees very quickly.",
        "opts": [
          "was able to",
          "can",
          "could",
          "am able to"
        ],
        "ans": 2,
        "exp": "General past ability → 'could'."
      },
      {
        "q": "'___ you help me for a moment, please?'",
        "opts": [
          "Can",
          "Could",
          "Are able",
          "Shall"
        ],
        "ans": 1,
        "exp": "'Could you help me?' is more polite than 'Can you help me?'"
      },
      {
        "q": "I looked everywhere but I ___ find my passport.",
        "opts": [
          "couldn't",
          "can't",
          "wasn't able",
          "mustn't"
        ],
        "ans": 0,
        "exp": "Past inability → 'couldn't find'."
      }
    ],
    "flashcards": [
      {
        "front": "Could vs Was/Were Able To (past)",
        "back": "COULD = general past ability:\n'I could swim when I was five.'\n\nWAS/WERE ABLE TO = specific past success:\n'I was able to swim across the river.' ✅\n'I could swim across the river.' ❌ (specific event)"
      }
    ]
  },
  "27": {
    "title": "Could (do) and Could Have (done)",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Could do — present/future possibility",
        "body": "We use 'could' to talk about something that is possible right now or in the future — an option that exists, without committing to it as a certainty or a firm plan. It's a softer, more tentative way of suggesting something than saying you definitely will do it. This is different from the past uses of 'could' covered elsewhere in this topic: here 'could' points forward to a possibility, not backward to a past ability.",
        "note": "I could go now if you want. · We could try a different approach."
      },
      {
        "head": "Could have done — unrealized past possibility",
        "body": "'Could have done' describes something that was possible or within someone's power in the past, but which never actually happened. It's used to talk about a missed opportunity or an option that existed at the time, often with a hint of regret or criticism, as in 'You could have called me!' meaning it was possible but you chose not to. This contrasts with 'was/were able to', which describes something that did happen.",
        "note": "You could have called me! (but you didn't) · She could have passed if she'd studied."
      },
      {
        "head": "Couldn't have done — past impossibility",
        "body": "'Couldn't have done' is the negative counterpart of 'could have done', used to say that something was completely impossible in the past, based on the facts or evidence available. It expresses certainty that an event did not and could not have happened, rather than simple past inability — 'It couldn't have been Tom' means we are sure it wasn't him, because we know he was somewhere else at the time.",
        "note": "It couldn't have been Tom — he was abroad. · The letter couldn't have arrived already."
      }
    ],
    "quiz": [
      {
        "q": "You ___ told me earlier! I didn't know.",
        "opts": [
          "could",
          "could have",
          "should",
          "ought"
        ],
        "ans": 1,
        "exp": "Unrealized past possibility (but didn't happen) → 'could have told'."
      },
      {
        "q": "It ___ been Emma — she was at work all day.",
        "opts": [
          "couldn't have",
          "couldn't",
          "can't have",
          "can't"
        ],
        "ans": 0,
        "exp": "Past impossibility → 'couldn't have been'."
      },
      {
        "q": "I'm free this evening. We ___ go out if you want.",
        "opts": [
          "could",
          "could have",
          "should have",
          "might have"
        ],
        "ans": 0,
        "exp": "Present/future option → 'could': 'We could go out.'"
      }
    ],
    "flashcards": [
      {
        "front": "Could have done — what does it mean?",
        "back": "= It was possible but it DIDN'T HAPPEN:\n'You could have helped me!' (but you didn't)\n'She could have been a doctor.' (but she chose otherwise)\n\nNOT the same as 'was able to' which means it DID happen."
      }
    ],
    "syntaxChips": [
      { "label": "Present/future possibility", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "could", "role": "verb" }, { "text": "base verb", "role": "object" }
      ] },
      { "label": "Unrealized past possibility", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "could have", "role": "verb" }, { "text": "past participle", "role": "object" }
      ] },
      { "label": "Past impossibility", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "couldn't have", "role": "verb" }, { "text": "past participle", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "COULD HAVE — possible, didn't happen", "example": "You could have called me! I waited all night.", "highlight": "could have called" },
      "right": { "label": "COULDN'T HAVE — impossible", "example": "It couldn't have been Tom — he was abroad that week.", "highlight": "couldn't have been" },
      "caption": "\"Could have\" means something was possible but never happened; \"couldn't have\" means it was impossible for it to have happened at all."
    },
    "readingText": {
      "title": "A Missed Chance",
      "body": "When I was younger, I could run for hours without getting tired, and I could also play the guitar quite well. Last year, though, I had the chance to join a small band, but I turned it down because I was too busy with work. I could have said yes — it was completely possible — but I didn't, and now I regret it. My brother says I couldn't have joined anyway, since the band already had a guitarist, but I'm not so sure that's true.",
      "translation": "Cuando era más joven, podía correr durante horas sin cansarme, y también sabía tocar la guitarra bastante bien. El año pasado, sin embargo, tuve la oportunidad de unirme a una pequeña banda, pero la rechacé porque estaba demasiado ocupado con el trabajo. Podría haber dicho que sí — era totalmente posible — pero no lo hice, y ahora me arrepiento. Mi hermano dice que no podría haberme unido de todas formas, ya que la banda ya tenía un guitarrista, pero no estoy tan seguro de que eso sea cierto."
    },
    "tips": [
      "\"Could have\" se pronuncia \"could've\" /ˈkʊdəv/ en el habla natural — nunca lo escribas como \"could of\", aunque suene igual.",
      "\"Could have\" = era posible pero no pasó; \"couldn't have\" = es imposible que pasara. No los confundas con un simple \"didn't\"."
    ],
    "dailyWords": [
      { "w": "missed opportunity", "ipa": "/mɪst ˌɒpəˈtjuːnəti/", "def": "oportunidad perdida", "ex": "Not applying for that job was a missed opportunity." },
      { "w": "last-minute", "ipa": "/ˌlɑːst ˈmɪnɪt/", "def": "de último momento", "ex": "It was a last-minute decision to join the band." }
    ]
  },
  "28": {
    "title": "Must and Can't (deduction)",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Must — sure it's true",
        "body": "We use 'must' to express a strong logical conclusion — not an obligation here, but a deduction — when the evidence available makes us almost certain that something is true. It's how English expresses 'I'm sure this is the case', based on reasoning from what we observe, such as someone being awake since 5am making it logical that they must be tired.",
        "note": "You must be tired — you've been awake since 5am. · She must be at home — the lights are on."
      },
      {
        "head": "Can't — sure it's NOT true",
        "body": "'Can't' is the negative deduction that mirrors 'must': we use it when the evidence makes us sure that something is impossible or false, not simply 'not obligatory'. It expresses strong certainty in the opposite direction from 'must' — if 'must' means 'I'm sure it's true', 'can't' means 'I'm sure it's not true', as in 'That can't be Tom, he's in Paris'.",
        "note": "That can't be Tom — he's in Paris. · You can't be hungry! You just ate."
      },
      {
        "head": "Must have / Can't have — past deduction",
        "body": "To make the same kind of confident deduction about something in the past, we add 'have' + past participle: 'must have done' for something we're sure did happen, and 'can't have done' for something we're sure did not happen. The logic is identical to 'must' and 'can't' in the present — only the time reference moves into the past.",
        "note": "She must have left already. · They can't have arrived — the road was closed."
      }
    ],
    "quiz": [
      {
        "q": "You ___ be tired — you've been up since 5am.",
        "opts": [
          "can't",
          "must",
          "should",
          "have to"
        ],
        "ans": 1,
        "exp": "Logical deduction (I'm sure you're tired) → 'must': 'You must be tired.'"
      },
      {
        "q": "That ___ be right — it's impossible!",
        "opts": [
          "must",
          "can",
          "can't",
          "mustn't"
        ],
        "ans": 2,
        "exp": "Sure it's NOT true → 'can't': 'That can't be right.'"
      },
      {
        "q": "She ___ have left already — her bag is still here.",
        "opts": [
          "must",
          "can't",
          "should",
          "could"
        ],
        "ans": 1,
        "exp": "Past deduction (impossible she left — bag is here) → 'can't have left'."
      }
    ],
    "flashcards": [
      {
        "front": "MUST vs CAN'T for deduction",
        "back": "MUST = I'm sure it's TRUE:\n'You must be tired.' (evidence: awake since 5am)\n\nCAN'T = I'm sure it's NOT TRUE:\n'That can't be right.' (it's impossible)"
      }
    ]
  },
  "29": {
    "title": "May and Might 1",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "May / Might — possibility",
        "body": "'May' and 'might' both express that something is possible in the present or future — roughly equivalent to saying 'maybe' or 'perhaps' before a sentence. They work in almost the same way and can usually be swapped for each other without a real change in meaning, unlike 'must' and 'can't', which express certainty rather than mere possibility.",
        "note": "It may rain tomorrow. · She might be at home. · I might not come to the party."
      },
      {
        "head": "Might — slightly less certain",
        "body": "Although 'may' and 'might' are largely interchangeable, native speakers sometimes use 'might' to suggest a slightly lower degree of certainty than 'may' — a small nuance rather than a strict rule. In practice this difference is subtle enough that in everyday speech, choosing one over the other rarely changes how a sentence is understood.",
        "note": "I may go out tonight. (quite possible) · I might go out. (a little less certain)"
      },
      {
        "head": "May I / Might I — permission (formal)",
        "body": "Besides expressing possibility, 'may' also has a separate, more formal use for asking permission — 'May I sit here?' is a polite, somewhat formal way to ask if something is allowed. 'Might I' takes this a step further into very formal or old-fashioned politeness, often used to soften a suggestion, such as 'Might I suggest an alternative?'.",
        "note": "May I sit here? · May I ask you something? · Might I suggest an alternative?"
      }
    ],
    "quiz": [
      {
        "q": "I'm not sure where she is. She ___ be at home.",
        "opts": [
          "must",
          "should",
          "might",
          "will"
        ],
        "ans": 2,
        "exp": "Uncertain possibility → 'might': 'She might be at home.'"
      },
      {
        "q": "Take an umbrella — it ___ rain later.",
        "opts": [
          "will",
          "must",
          "may",
          "should"
        ],
        "ans": 2,
        "exp": "Possible future event → 'may' or 'might': 'it may rain'."
      },
      {
        "q": "___ I use your phone?",
        "opts": [
          "Should",
          "Must",
          "May",
          "Will"
        ],
        "ans": 2,
        "exp": "Asking permission politely → 'May I use your phone?'"
      }
    ],
    "flashcards": [
      {
        "front": "MAY vs MIGHT — difference",
        "back": "Both express POSSIBILITY (maybe, perhaps)\nMight is sometimes slightly less certain than may.\n\n'It may rain.' = possible\n'It might rain.' = a little less certain\n\nIn practice, they are usually interchangeable."
      }
    ]
  },
  "30": {
    "title": "May and Might 2",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Might as well / May as well",
        "body": "'Might as well' (or 'may as well') is used when there's no better option available, so you decide to do something simply because there's nothing more worthwhile to do instead. It carries a slightly resigned, practical tone — not enthusiasm, just a recognition that this is the most sensible choice given the circumstances. 'May as well' means exactly the same thing, and the two are fully interchangeable.",
        "note": "We might as well wait here. · You might as well tell the truth. · I may as well go home."
      },
      {
        "head": "May/might have done — past possibility",
        "body": "'May have done' and 'might have done' express uncertainty about something that possibly happened in the past — we don't know for sure, but it's one plausible explanation. This is a weaker claim than 'must have done', which expresses near-certainty; here we're only saying it's one possibility among others, as in 'She may have forgotten about the meeting' — maybe, but we can't be sure.",
        "note": "She may have forgotten about the meeting. · They might have left already."
      }
    ],
    "quiz": [
      {
        "q": "There's nothing to do. We ___ stay home.",
        "opts": [
          "should",
          "might as well",
          "could have",
          "must"
        ],
        "ans": 1,
        "exp": "No better option available → 'might as well': 'We might as well stay home.'"
      },
      {
        "q": "She's not here. She ___ have gone to the library.",
        "opts": [
          "must",
          "should",
          "might",
          "could"
        ],
        "ans": 2,
        "exp": "Uncertain past possibility → 'might have gone'."
      }
    ],
    "flashcards": [
      {
        "front": "MIGHT AS WELL",
        "back": "= there's no better option, so let's do this:\n'We might as well wait.' (there's nothing better to do)\n\nSimilar to: 'We may as well wait.' or 'Let's just wait.'"
      }
    ]
  },
  "31": {
    "title": "Have To and Must",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Must — speaker's obligation",
        "body": "We use 'must' when the obligation comes from the speaker's own feelings or judgment — you personally believe something is necessary or important, rather than being told to do it by an outside rule. 'I must call my mother' expresses your own sense that it matters, not a requirement imposed by someone else.",
        "note": "I must call my mother. (I feel I should) · You must try this restaurant! (I strongly recommend)"
      },
      {
        "head": "Have to — external obligation",
        "body": "'Have to' expresses an obligation that comes from outside the speaker — a law, a rule, a boss, or some other external authority requiring the action, rather than the speaker's personal opinion. 'I have to be at work by 9' points to a schedule or rule set by someone else, which is the key contrast with 'must', where the obligation comes from the speaker's own feelings.",
        "note": "I have to be at work by 9. (the rule) · She has to wear a uniform. (company rule)"
      },
      {
        "head": "Don't have to — no obligation",
        "body": "'Don't have to' means there is no obligation at all — the action is optional, and you're free to do it or not as you choose. This is a completely different idea from 'mustn't', which means something is forbidden; 'don't have to' simply removes the requirement, it doesn't prohibit the action.",
        "note": "You don't have to come if you don't want to. · She doesn't have to work on Sundays."
      }
    ],
    "table": {
      "cols": [
        "Must",
        "Have to"
      ],
      "rows": [
        [
          "Speaker feels it's important",
          "External rule/obligation"
        ],
        [
          "I must call her (I think so)",
          "I have to call her (boss said so)"
        ],
        [
          "Mustn't = NOT allowed",
          "Don't have to = not necessary"
        ]
      ]
    },
    "quiz": [
      {
        "q": "All passengers ___ wear a seatbelt. It's the law.",
        "opts": [
          "must",
          "have to",
          "should",
          "need to"
        ],
        "ans": 1,
        "exp": "External law/obligation → 'have to'."
      },
      {
        "q": "You ___ see this film! It's amazing. (strong recommendation)",
        "opts": [
          "have to",
          "must",
          "need to",
          "should"
        ],
        "ans": 1,
        "exp": "Speaker's strong personal feeling → 'must': 'You must see this film!'"
      },
      {
        "q": "You ___ come to the party if you don't want to.",
        "opts": [
          "mustn't",
          "don't have to",
          "must",
          "should"
        ],
        "ans": 1,
        "exp": "Not necessary (but OK if you do) → 'don't have to'."
      }
    ],
    "flashcards": [
      {
        "front": "MUST vs HAVE TO vs DON'T HAVE TO",
        "back": "MUST = I feel it's important (personal):\n'I must lose weight.' (my own decision)\n\nHAVE TO = external obligation:\n'I have to work late.' (boss said so)\n\nDON'T HAVE TO = not necessary:\n'You don't have to wear a tie.' (optional)"
      }
    ]
  },
  "32": {
    "title": "Must / Mustn't / Needn't",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Must — obligation",
        "body": "'Must' expresses a strong sense of obligation or necessity — something that has to be done, whether because of a rule, a law, or the speaker's own conviction that it's important. It sits at the strong end of the obligation scale, stronger than milder suggestions like 'should'.",
        "note": "You must stop at a red light. · I must remember to call her."
      },
      {
        "head": "Mustn't — prohibition",
        "body": "'Mustn't' means an action is forbidden — it is not allowed, and you should not do it under any circumstances. This is very different from simply saying something isn't necessary; 'mustn't' actively bans the action, rather than just removing a requirement to do it.",
        "note": "You mustn't smoke in here. · She mustn't tell anyone."
      },
      {
        "head": "Needn't / Don't need to — not necessary",
        "body": "'Needn't' and 'don't need to' mean that something is not necessary — there's no requirement to do it, but you're still free to do it if you want to. This is the opposite of 'mustn't': 'mustn't' forbids an action, while 'needn't' simply removes any obligation to perform it, leaving the choice open.",
        "note": "You needn't worry. · You don't need to bring anything."
      }
    ],
    "quiz": [
      {
        "q": "You ___ tell anyone! It's a secret.",
        "opts": [
          "needn't",
          "don't have to",
          "mustn't",
          "couldn't"
        ],
        "ans": 2,
        "exp": "Prohibition (NOT allowed) → 'mustn't': 'You mustn't tell anyone!'"
      },
      {
        "q": "You ___ hurry — we have plenty of time.",
        "opts": [
          "mustn't",
          "needn't",
          "must",
          "can't"
        ],
        "ans": 1,
        "exp": "Not necessary → 'needn't': 'You needn't hurry.' (= You don't need to hurry.)"
      }
    ],
    "flashcards": [
      {
        "front": "MUSTN'T vs NEEDN'T / DON'T HAVE TO",
        "back": "MUSTN'T = NOT ALLOWED:\n'You mustn't park here.' (it's forbidden)\n\nNEEDN'T / DON'T HAVE TO = NOT NECESSARY:\n'You needn't come.' (you can, but it's not required)"
      }
    ]
  },
  "33": {
    "title": "Should 1",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Should — advice/recommendation",
        "body": "'Should' is used to give advice or say what you think is the right or best course of action, based on your opinion rather than a strict rule. It's noticeably weaker than 'must': 'You should see a doctor' is a recommendation you're free to ignore, not an obligation.",
        "note": "You look pale. You should see a doctor. · She should study more if she wants to pass."
      },
      {
        "head": "Should — expectation",
        "body": "'Should' can also express what you expect to happen, based on what normally happens or what seems logical, rather than giving advice about what to do. 'The package should arrive tomorrow' means you expect this outcome based on the usual timeline, though you're not entirely certain, unlike 'must', which expresses much stronger certainty.",
        "note": "The package should arrive tomorrow. · You should be able to find it easily."
      },
      {
        "head": "Shouldn't — advice against",
        "body": "'Shouldn't' is simply the negative of 'should': it's used to advise against doing something, saying it's not a good idea in your opinion. Like 'should', it's a recommendation rather than a firm prohibition — 'mustn't' would be the stronger word if something were actually forbidden rather than just unwise.",
        "note": "You shouldn't eat so much sugar. · We shouldn't be late."
      }
    ],
    "quiz": [
      {
        "q": "You look tired. You ___ get some rest.",
        "opts": [
          "must",
          "should",
          "shall",
          "would"
        ],
        "ans": 1,
        "exp": "Advice → 'should': 'You should get some rest.'"
      },
      {
        "q": "The film ___ be good — it has 5-star reviews.",
        "opts": [
          "should",
          "must",
          "shall",
          "would"
        ],
        "ans": 0,
        "exp": "Expectation → 'should': 'The film should be good.'"
      },
      {
        "q": "You ___ park here — it's illegal.",
        "opts": [
          "shouldn't",
          "mustn't",
          "needn't",
          "couldn't"
        ],
        "ans": 0,
        "exp": "Advice against → 'shouldn't'. (Mustn't is also possible but stronger — prohibition)"
      }
    ],
    "flashcards": [
      {
        "front": "SHOULD vs MUST — difference",
        "back": "SHOULD = mild advice/recommendation:\n'You should eat more vegetables.' (suggestion)\n\nMUST = strong obligation:\n'You must stop at a red light.' (law)\n\nSHOULD HAVE = past regret:\n'I should have studied harder.'"
      }
    ]
  },
  "34": {
    "title": "Should 2",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Should have done — past regret",
        "body": "'Should have done' looks back at a past situation and says that a particular action would have been the right thing to do, but it didn't actually happen — so there's a sense of regret or criticism attached. 'I should have called her' means calling her was the right thing, but you didn't do it, and now you regret that. 'Shouldn't have done' works the same way in reverse, for something that did happen but was the wrong choice.",
        "note": "I should have called her. (I didn't, but it was the right thing to do) · You shouldn't have said that."
      },
      {
        "head": "Should after: suggest, recommend, insist",
        "body": "After certain verbs that express a wish for something to happen — suggest, recommend, insist, demand — English often uses 'should' + base verb in the following clause, even though the meaning isn't really about advice here. 'I suggested that he should go' expresses what someone wanted to happen, and this 'should' can often be dropped entirely in British English, leaving just the base form: 'I suggested that he go'.",
        "note": "I suggested that he should go. · She insisted that I should come."
      }
    ],
    "quiz": [
      {
        "q": "I ___ called you earlier. I'm sorry I didn't.",
        "opts": [
          "would",
          "should have",
          "must have",
          "could"
        ],
        "ans": 1,
        "exp": "Past regret/mistake → 'should have called': it was right but didn't happen."
      },
      {
        "q": "You ___ said that. It was very rude.",
        "opts": [
          "should",
          "shouldn't have",
          "shouldn't",
          "mustn't have"
        ],
        "ans": 1,
        "exp": "Regret about past action (it was wrong) → 'shouldn't have said'."
      }
    ],
    "flashcards": [
      {
        "front": "SHOULD HAVE done",
        "back": "= It was the right thing but DIDN'T happen:\n'I should have studied harder.' (I didn't → I failed)\n\nSHOULDN'T HAVE done:\n'I shouldn't have eaten so much.' (I did → I regret it)"
      }
    ]
  },
  "35": {
    "title": "I'd Better / It's Time…",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "I'd better do — urgent advice",
        "body": "'I'd better' (short for 'I had better') is used for urgent, immediate advice or a warning about a specific situation, often implying a negative consequence if the advice isn't followed. It's similar in meaning to 'should', but carries more urgency and is tied to a specific moment rather than general advice — 'I'd better go now or I'll be late' warns of a concrete result if you don't act.",
        "note": "I'd better go now or I'll be late. · You'd better not be late or he'll be angry."
      },
      {
        "head": "It's time — overdue action",
        "body": "'It's time' + subject + past simple form is used to say that something should be happening now, or is already a little overdue — even though the verb looks like a past tense, it doesn't refer to the past at all. 'It's time you went to bed' means you should be going to bed right now, and the slightly unusual grammar (past simple with a present/future meaning) is a fixed pattern specific to this expression.",
        "note": "It's time you went to bed. · It's time we left. · It's time he stopped complaining."
      }
    ],
    "quiz": [
      {
        "q": "You ___ better see a doctor about that cough.",
        "opts": [
          "had",
          "have",
          "should",
          "must"
        ],
        "ans": 0,
        "exp": "'I'd better' = I had better. 'You'd better' = You had better."
      },
      {
        "q": "It's time you ___ to bed. It's midnight!",
        "opts": [
          "go",
          "went",
          "are going",
          "have gone"
        ],
        "ans": 1,
        "exp": "'It's time + subject + past simple' for overdue action: 'It's time you went'."
      }
    ],
    "flashcards": [
      {
        "front": "I'D BETTER vs IT'S TIME",
        "back": "I'D BETTER + base verb (urgent advice):\n'You'd better hurry or you'll miss the bus.'\n\nIT'S TIME + subject + past simple (overdue):\n'It's time you went to bed.' (you should have gone earlier)"
      }
    ]
  },
  "36": {
    "title": "Would",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Would — conditional",
        "body": "'Would' is used in the result clause of second conditional sentences, describing an imagined or hypothetical result that would happen if an unreal or unlikely condition were true. 'If I had more time, I would learn to paint' imagines a situation that isn't currently real, and 'would' marks the imagined consequence of that unreal condition.",
        "note": "If I had more time, I would learn to paint. · She would call you if she had your number."
      },
      {
        "head": "Would — polite requests",
        "body": "'Would' is also used to soften requests and make them sound more polite and formal than using 'will' would. 'Would you help me, please?' feels noticeably more courteous than 'Will you help me?', which can sound more like a direct demand — this is a separate use of 'would' from the conditional one above, purely about politeness.",
        "note": "Would you help me please? · Would you mind waiting?"
      },
      {
        "head": "Would — past habits",
        "body": "'Would' + base verb can describe a repeated action or habit in the past, similar in meaning to 'used to'. 'When I was a child, I would go fishing with my father every weekend' describes a repeated past routine, not a single event. Unlike 'used to', though, 'would' in this sense can only describe repeated actions, not past states — you can say 'I used to live in Spain' but not 'I would live in Spain' with that meaning.",
        "note": "When I was a child, I would go fishing with my father every weekend."
      }
    ],
    "quiz": [
      {
        "q": "If I were rich, I ___ travel the world.",
        "opts": [
          "will",
          "would",
          "had",
          "should"
        ],
        "ans": 1,
        "exp": "2nd conditional result → 'would': 'I would travel the world.'"
      },
      {
        "q": "___ you mind closing the door?",
        "opts": [
          "Will",
          "Would",
          "Could",
          "Should"
        ],
        "ans": 1,
        "exp": "Polite request → 'Would you mind…?'"
      },
      {
        "q": "When I was a child, I ___ visit my grandparents every Sunday.",
        "opts": [
          "used to",
          "would",
          "will",
          "was"
        ],
        "ans": 1,
        "exp": "Past repeated habit → 'would': 'I would visit…' (or 'used to visit')."
      }
    ],
    "flashcards": [
      {
        "front": "WOULD — three main uses",
        "back": "1. CONDITIONAL: 'If I had time, I would help.'\n2. POLITE REQUEST: 'Would you mind waiting?'\n3. PAST HABIT: 'We would go fishing every Sunday.' (= used to)"
      }
    ]
  },
  "37": {
    "title": "Can / Could / Would you…? (Requests)",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Making requests — polite scale",
        "body": "These three ways of making a request sit on a scale of increasing politeness and formality: 'Can you...?' is the most direct and informal, 'Could you...?' is a step more polite, and 'Would you mind...?' is the most polite and indirect of the three. Choosing the right one depends on the situation — who you're speaking to and how big the favor is — with more formal or unfamiliar situations calling for the more polite forms further along the scale.",
        "note": "Can you help me? (informal) · Could you help me? (more polite) · Would you mind helping me? (very polite)"
      },
      {
        "head": "Would you mind…? — requires -ing",
        "body": "'Would you mind' is always followed by the -ing form (gerund) of the verb, never the base form or 'to' + verb — 'Would you mind closing the door?' is correct, while 'Would you mind to close' is not. This is because 'mind' here behaves like a verb that takes a gerund object, literally asking whether the action would bother the other person.",
        "note": "Would you mind closing the door? · Would you mind waiting a moment?"
      },
      {
        "head": "Do you mind if I…? — asking permission",
        "body": "'Do you mind if I...?' is a polite way of asking for permission to do something yourself, rather than asking someone else to do something for you — it's the permission-asking counterpart to the request forms above. Because it's phrased as a question about whether something would bother the listener, saying 'no' or 'not at all' actually means permission is granted, which can confuse learners expecting 'yes' to mean agreement.",
        "note": "Do you mind if I open the window? · Would you mind if I left early?"
      }
    ],
    "quiz": [
      {
        "q": "___ you lend me your pen for a second?",
        "opts": [
          "Should",
          "Shall",
          "Could",
          "Must"
        ],
        "ans": 2,
        "exp": "Polite request → 'Could you lend me…?'"
      },
      {
        "q": "Would you mind ___ the TV? I'm trying to work.",
        "opts": [
          "to turn off",
          "turn off",
          "turning off",
          "turned off"
        ],
        "ans": 2,
        "exp": "'Would you mind' + -ing: 'turning off the TV'."
      }
    ],
    "flashcards": [
      {
        "front": "Requests: CAN vs COULD vs WOULD YOU MIND",
        "back": "CAN you help me? (informal, direct)\nCOULD you help me? (more polite)\nWOULD YOU MIND helping me? (very polite)\n\n'Would you mind' → always + -ing"
      }
    ]
  }
};
