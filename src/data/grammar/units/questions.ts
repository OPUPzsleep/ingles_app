import { Unit } from '@/types/grammar';

export const questionsUnits: Record<number, Unit> = {
  "49": {
    "title": "Questions 1",
    "topic": "Questions",
    "explain": [
      {
        "head": "Word order in questions",
        "body": "To turn a statement into a yes/no question, English inverts the normal word order: instead of subject-then-verb, the auxiliary verb moves to the front, ahead of the subject, while the main verb stays in its usual place after the subject. 'Are you coming?', 'Does she like it?', and 'Have you seen it?' all follow this same inversion pattern regardless of which auxiliary is involved. If a sentence has no auxiliary already, as with present simple or past simple main verbs, English adds 'do/does/did' specifically to make this inversion possible.",
        "note": "Are you coming? · Does she like it? · Did they arrive? · Have you seen it?"
      },
      {
        "head": "Wh- questions",
        "body": "Questions that ask for specific information rather than a yes/no answer simply add a question word (who, what, where, why, and so on) in front of the same auxiliary-subject-verb pattern used for yes/no questions. 'Where do you live?' and 'Why did you leave?' both keep the auxiliary immediately after the question word and before the subject, exactly like a normal yes/no question with one extra word tacked onto the front. This consistency means that once you're comfortable with basic question inversion, adding wh-words on top is a small extra step rather than a completely new rule.",
        "note": "Where do you live? · What time does the train leave? · Why did you leave?"
      },
      {
        "head": "Questions with prepositions",
        "body": "When a question involves a preposition (about, at, to, for...), English typically strands that preposition at the very end of the sentence rather than keeping it attached to the question word at the front. 'What are you looking at?' and 'Who are you talking to?' both leave the preposition dangling at the end, which can feel unusual for speakers of languages that always keep the preposition with its noun or question word. While a more formal alternative exists, moving the preposition to the front as in 'To whom are you talking?', the end-position version is by far the more natural, everyday choice in spoken English.",
        "note": "What are you looking at? · Who are you talking to? · What did you buy that for?"
      }
    ],
    "quiz": [
      {
        "q": "___ he know about the meeting?",
        "opts": [
          "Does",
          "Is",
          "Do",
          "Has"
        ],
        "ans": 0,
        "exp": "Present simple question with he/she/it → 'Does'."
      },
      {
        "q": "What time ___ the last train leave?",
        "opts": [
          "do",
          "does",
          "is",
          "has"
        ],
        "ans": 1,
        "exp": "Present simple question with 'the train' (= it) → 'does'."
      },
      {
        "q": "How long ___ you been waiting?",
        "opts": [
          "do",
          "did",
          "have",
          "are"
        ],
        "ans": 2,
        "exp": "Present perfect question → 'have': 'How long have you been waiting?'"
      }
    ],
    "flashcards": [
      {
        "front": "Question word order — the rule",
        "back": "(Wh-word) + AUXILIARY + SUBJECT + main verb?\n\nDo you like it? ✅ · You like it? ❌\nWhere does she live? ✅ · Where she lives? ❌"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Hi! Are you coming to the party tonight?", "translation": "¡Hola! ¿Vas a venir a la fiesta esta noche?" },
      { "speaker": "user", "text": "Yes, I am! What time does it start?", "translation": "¡Sí! ¿A qué hora empieza?" },
      { "speaker": "other", "text": "It starts at eight. Where do you live, by the way?", "translation": "Empieza a las ocho. ¿Dónde vives, por cierto?" },
      { "speaker": "user", "text": "I live downtown. Who are you going with?", "translation": "Vivo en el centro. ¿Con quién vas a ir?" },
      { "speaker": "other", "text": "I'm going with my sister. What are you bringing?", "translation": "Voy con mi hermana. ¿Qué vas a llevar?" },
      { "speaker": "user", "text": "I'm bringing a cake. Have you met the host before?", "translation": "Voy a llevar un pastel. ¿Ya conocías al anfitrión?" }
    ]
  },
  "50": {
    "title": "Questions 2 (who/what/which)",
    "topic": "Questions",
    "explain": [
      {
        "head": "Questions about the subject — no auxiliary",
        "body": "When the question word itself is doing the action — that is, it's the subject of the sentence rather than the object — no auxiliary verb is needed at all, and the word order stays exactly like a normal statement. 'Who called?' works this way because 'who' is the one doing the calling, so the sentence just states 'who' followed directly by the verb, with nothing to invert. This is an exception to the usual question-inversion rule, and it only applies when the question word replaces the subject, not the object, which is the contrast covered in the next block.",
        "note": "Who called? (who = subject) · What happened? · Which team won?"
      },
      {
        "head": "Questions about the object — use auxiliary",
        "body": "When the question word stands in for the object of the sentence instead of the subject, the normal rules of question formation come back into play, and an auxiliary is required along with subject-auxiliary inversion. 'Who did you call?' needs 'did' because 'you' is the one performing the action, the subject, while 'who' is merely the person being called, the object. A quick way to tell the two cases apart: if you can answer the question by simply replacing the question word with a name in the exact same word order, it was a subject question; if the word order needs the auxiliary added, it's an object question.",
        "note": "Who did you call? (you = subject, who = object) · What did you do? · Which team did you support?"
      }
    ],
    "quiz": [
      {
        "q": "___ happened last night? (subject question)",
        "opts": [
          "What did",
          "What",
          "Who did",
          "Which"
        ],
        "ans": 1,
        "exp": "'What' = subject → no auxiliary: 'What happened?'"
      },
      {
        "q": "___ did you meet at the party? (object question)",
        "opts": [
          "Who",
          "Who did",
          "Whom",
          "What"
        ],
        "ans": 0,
        "exp": "'Who' = object → 'Who did you meet?' (auxiliary needed)"
      }
    ],
    "flashcards": [
      {
        "front": "Subject questions vs Object questions",
        "back": "SUBJECT: who/what IS the subject → NO auxiliary:\n'Who called you?' (who = subject, called = verb)\n\nOBJECT: who/what is the OBJECT → USE auxiliary:\n'Who did you call?' (you = subject, who = object)"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Something strange happened at the office last night.", "translation": "Algo extraño pasó en la oficina anoche." },
      { "speaker": "user", "text": "What happened exactly?", "translation": "¿Qué pasó exactamente?" },
      { "speaker": "other", "text": "Someone broke into the office and stole some files.", "translation": "Alguien entró a la fuerza en la oficina y robó unos archivos." },
      { "speaker": "user", "text": "Who broke in? Do the police know?", "translation": "¿Quién entró? ¿La policía lo sabe?" },
      { "speaker": "other", "text": "Not yet. But who called the police this morning?", "translation": "Todavía no. Pero, ¿quién llamó a la policía esta mañana?" },
      { "speaker": "user", "text": "I did. And what did you tell them?", "translation": "Yo fui. ¿Y qué les dijiste?" },
      { "speaker": "other", "text": "I told them everything I had seen.", "translation": "Les conté todo lo que había visto." }
    ]
  },
  "51": {
    "title": "Auxiliary Verbs (do/be/have)",
    "topic": "Questions",
    "explain": [
      {
        "head": "Auxiliary verbs for emphasis",
        "body": "Auxiliary verbs aren't only used for questions and negatives — in a positive sentence, stressing do/does/did adds strong emphasis, usually to contradict something that was just said or assumed. If someone claims 'you don't believe me', responding 'I DO believe you!' uses 'do' purely for emphasis, since the sentence would be grammatically complete without it. This emphatic use only works with a verb that doesn't already have its own auxiliary or 'be' — you wouldn't need it with a verb like 'am' or 'can', which can already carry stress on their own.",
        "note": "'You don't believe me.' 'I DO believe you!' · 'She doesn't care.' 'She DOES care!'"
      },
      {
        "head": "Short answers",
        "body": "A short answer to a yes/no question echoes back whichever auxiliary verb was used in the question, rather than repeating the whole sentence or just saying a bare 'yes' or 'no'. 'Are you tired?' gets the answer 'Yes, I am', echoing 'are' as 'am' to match the subject, and 'Did you go?' gets 'Yes, I did', echoing 'did'. This matching pattern is what makes short answers sound natural in English — answering with just 'Yes' or 'No' without the auxiliary tends to sound blunt or overly abrupt.",
        "note": "'Are you tired?' 'Yes, I am.' 'No, I'm not.' · 'Did you go?' 'Yes, I did.' 'No, I didn't.'"
      },
      {
        "head": "So/Neither + auxiliary",
        "body": "To agree with what someone just said, English uses 'so' or 'neither' followed by the matching auxiliary and then the subject, instead of repeating the whole idea. 'So' agrees with a positive statement, 'I'm tired.' 'So am I.' meaning I am tired too, while 'neither' agrees with a negative one, 'I don't like it.' 'Neither do I.' meaning I don't like it either. Both structures require the auxiliary to match the one used in the original sentence, following the same echoing logic as short answers above.",
        "note": "'I'm tired.' 'So am I.' · 'I don't like it.' 'Neither do I.'"
      }
    ],
    "quiz": [
      {
        "q": "'Are you hungry?' 'Yes, I ___.",
        "opts": [
          "do",
          "am",
          "have",
          "will"
        ],
        "ans": 1,
        "exp": "Short answer matching the auxiliary: 'Yes, I am.'"
      },
      {
        "q": "'I can't swim.' '___ I.'",
        "opts": [
          "So can",
          "So can't",
          "Neither can",
          "Neither do"
        ],
        "ans": 2,
        "exp": "Agreement with negative → 'Neither can I.'"
      }
    ],
    "flashcards": [
      {
        "front": "SO / NEITHER for agreement",
        "back": "Positive agreement → SO + aux:\n'I'm tired.' 'SO AM I.'\n\nNegative agreement → NEITHER + aux:\n'I don't smoke.' 'NEITHER DO I.'\n(OR: 'I don't either.')"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "You don't really like classical music, do you?", "translation": "No te gusta realmente la música clásica, ¿verdad?" },
      { "speaker": "user", "text": "I DO like it! I listen to it every night.", "translation": "¡Sí me gusta! La escucho todas las noches." },
      { "speaker": "other", "text": "Really? I don't believe you.", "translation": "¿En serio? No te creo." },
      { "speaker": "user", "text": "Well, ask my roommate — he doesn't like it either.", "translation": "Bueno, pregúntale a mi compañero de cuarto — a él tampoco le gusta." },
      { "speaker": "other", "text": "So you two disagree about a lot of things?", "translation": "¿Entonces ustedes dos no están de acuerdo en muchas cosas?" },
      { "speaker": "user", "text": "No, actually we agree on most things. I'm tired tonight.", "translation": "No, en realidad estamos de acuerdo en casi todo. Estoy cansado esta noche." },
      { "speaker": "other", "text": "So am I. Let's talk more tomorrow.", "translation": "Yo también. Hablemos más mañana." },
      { "speaker": "user", "text": "Sounds good. I can't wait to show you my playlist.", "translation": "Suena bien. No puedo esperar a mostrarte mi lista de reproducción." }
    ]
  },
  "52": {
    "title": "Question Tags",
    "topic": "Questions",
    "explain": [
      {
        "head": "Question tags — basic rule",
        "body": "A question tag is the short 'isn't it?' or 'don't you?' piece added to the end of a statement, usually to check that the listener agrees or to invite a response. The core rule is that the tag always flips the polarity of the main sentence: a positive statement gets a negative tag ('It's cold, isn't it?'), and a negative statement gets a positive tag ('She doesn't smoke, does she?'). This constant flipping is what makes tag questions feel like a genuine check for agreement rather than a real request for new information.",
        "note": "It's cold, isn't it? · You like coffee, don't you? · She doesn't smoke, does she?"
      },
      {
        "head": "Tags with auxiliaries",
        "body": "Beyond flipping positive to negative or vice versa, the tag must also repeat whichever auxiliary verb the main sentence already used, rather than defaulting to 'do/does/did'. 'You can swim, can't you?' uses 'can' in the tag because 'can' was the verb in the main clause, and 'they've arrived, haven't they?' echoes 'have'. Only when the main sentence has no auxiliary of its own, an ordinary present or past simple verb, does the tag fall back on 'do/does/did', matching the same logic used for short answers.",
        "note": "You can swim, can't you? · They've arrived, haven't they? · You were there, weren't you?"
      },
      {
        "head": "I am → aren't I",
        "body": "'I am' is the one genuinely irregular case in the whole question-tag system: logically the negative tag should be 'amn't I?', but that form doesn't actually exist in standard English. Instead, native speakers use 'aren't I?' as the accepted negative tag for 'I am', even though 'are' doesn't otherwise go with 'I' anywhere else in the language. It's simply an exception to be memorized on its own, since applying the normal auxiliary-matching rule from the previous block would produce a form nobody actually says.",
        "note": "I'm right, aren't I? · I'm late, aren't I?"
      }
    ],
    "quiz": [
      {
        "q": "It's a beautiful day, ___ it?",
        "opts": [
          "is",
          "isn't",
          "doesn't",
          "wasn't"
        ],
        "ans": 1,
        "exp": "Positive sentence → negative tag: 'isn't it?'"
      },
      {
        "q": "She doesn't smoke, ___ she?",
        "opts": [
          "does",
          "doesn't",
          "is",
          "isn't"
        ],
        "ans": 0,
        "exp": "Negative sentence → positive tag: 'does she?'"
      },
      {
        "q": "I'm right, ___ I?",
        "opts": [
          "am",
          "amn't",
          "aren't",
          "isn't"
        ],
        "ans": 2,
        "exp": "Special case: 'I am' → 'aren't I?'"
      }
    ],
    "flashcards": [
      {
        "front": "Question tag rules",
        "back": "Positive → NEGATIVE tag:\n'It's cold, ISN'T IT?'\n\nNegative → POSITIVE tag:\n'She doesn't know, DOES SHE?'\n\nSpecial: I AM → AREN'T I?\n'I'm late, AREN'T I?'"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "It's a beautiful morning, isn't it?", "translation": "Es una mañana hermosa, ¿verdad?" },
      { "speaker": "user", "text": "Yes, it really is. You live near the park, don't you?", "translation": "Sí, de verdad. Vives cerca del parque, ¿no?" },
      { "speaker": "other", "text": "That's right. You can't come jogging with me today, can you?", "translation": "Así es. No puedes venir a trotar conmigo hoy, ¿verdad?" },
      { "speaker": "user", "text": "Actually, I can! I'm free this morning, aren't I lucky?", "translation": "¡De hecho, sí puedo! Estoy libre esta mañana, ¿no tengo suerte?" },
      { "speaker": "other", "text": "You are! You haven't forgotten your shoes, have you?", "translation": "¡Sí que la tienes! No has olvidado tus zapatos, ¿verdad?" },
      { "speaker": "user", "text": "No, I've got them right here.", "translation": "No, los tengo justo aquí." }
    ]
  }
};
