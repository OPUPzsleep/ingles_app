import { Unit } from '@/types/grammar';

export const prepositionsUnits: Record<number, Unit> = {
  "121": {
    "title": "At / On / In (time)",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "AT — horas y expresiones fijas",
        "body": "Usamos 'AT' para un momento exacto: una hora concreta del reloj o expresiones fijas que nombran un instante preciso, no un día ni un periodo largo. Al no encajar en 'un día' (ON) ni en 'un periodo' (IN), se aprenden como lista corta junto con las horas exactas.",
        "note": "at 6 o'clock · at midnight · at noon · at the weekend · at Christmas · at night · at the moment"
      },
      {
        "head": "ON — días y fechas",
        "body": "Usamos 'ON' para un día concreto o una fecha exacta, como si la marcáramos en un calendario. Incluye días de la semana, fechas exactas y días definidos por una ocasión, como 'mi cumpleaños' o 'Christmas Day'. Está entre AT (un instante preciso) e IN (un periodo largo).",
        "note": "on Monday · on 25th June · on my birthday · on Christmas Day · on weekdays"
      },
      {
        "head": "IN — meses, años, periodos largos",
        "body": "Usamos 'IN' para periodos largos con muchos días —meses, años, estaciones, siglos— y también para las partes generales del día (mañana, tarde, noche), tratadas como tramos amplios. Cuanto más grande e impreciso sea el periodo, más probable que use 'IN'.",
        "note": "in January · in 2024 · in summer · in the morning / afternoon / evening · in the 19th century"
      },
      {
        "head": "Truco: AT/ON/IN",
        "body": "Truco con palabras en español: AT viene de 'Ahora exactamenTe' para momentos precisos; ON de las cosas que 'pONes' en el calendario; IN de 'INmenso' para periodos grandes como meses o años. Busca la mayúscula escondida en cada palabra.",
        "note": "AT 3:00pm · ON Monday · IN 2024"
      }
    ],
    "table": {
      "cols": [
        "AT",
        "ON",
        "IN"
      ],
      "rows": [
        [
          "at 7 o'clock",
          "on Monday",
          "in January"
        ],
        [
          "at midnight",
          "on 5th June",
          "in 2024"
        ],
        [
          "at the weekend",
          "on Christmas Day",
          "in summer"
        ],
        [
          "at night",
          "on my birthday",
          "in the morning"
        ]
      ]
    },
    "quiz": [
      {
        "q": "I'll see you ___ Monday.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 1,
        "exp": "Día de la semana → 'on': 'on Monday'."
      },
      {
        "q": "She was born ___ 1995.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Año → 'in': 'in 1995'."
      },
      {
        "q": "The film starts ___ 8 o'clock.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 0,
        "exp": "Hora del reloj → 'at': 'at 8 o'clock'."
      },
      {
        "q": "I usually go for a walk ___ the evening.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Parte del día → 'in': 'in the evening'."
      }
    ],
    "flashcards": [
      {
        "front": "AT / ON / IN for time",
        "back": "AT → clock times, fixed expressions:\nat 5pm · at midnight · at the weekend\n\nON → days and dates:\non Monday · on 3rd May · on my birthday\n\nIN → months, years, seasons, parts of day:\nin June · in 2020 · in summer · in the morning"
      }
    ],
    "readingText": {
      "title": "My Weekly Routine",
      "body": "I have a busy week. On Monday, I go to the gym at 7 o'clock in the morning. On Wednesdays, I always have lunch with my sister — we usually meet at noon. In the evening, I like to read for an hour before bed. At the weekend, everything changes: on Saturday morning I sleep late, and in the afternoon I go shopping. On Sundays, I visit my grandparents; we always have dinner together at around six. In summer, we eat outside in the garden, but in winter we stay inside. My favorite time of the year is Christmas — at Christmas, the whole family gets together, and on Christmas Day we open presents in the morning.",
      "translation": "Tengo una semana ocupada. Los lunes voy al gimnasio a las 7 de la mañana. Los miércoles siempre almuerzo con mi hermana — normalmente nos vemos al mediodía. Por la tarde/noche, me gusta leer una hora antes de dormir. El fin de semana, todo cambia: el sábado por la mañana duermo hasta tarde, y por la tarde voy de compras. Los domingos visito a mis abuelos; siempre cenamos juntos alrededor de las seis. En verano comemos afuera en el jardín, pero en invierno nos quedamos adentro. Mi época favorita del año es Navidad — en Navidad, toda la familia se reúne, y el día de Navidad abrimos los regalos por la mañana."
    }
  },
  "122": {
    "title": "On Time and In Time / At the End and In the End",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "On time — puntual",
        "body": "'On time' significa exactamente a la hora prevista, ni antes ni después. Se usa cuando lo importante es la puntualidad —trenes, reuniones o vuelos que cumplen su horario—. A diferencia de 'in time', no se trata de tener margen sino de cumplir la hora exacta.",
        "note": "The train arrived on time. · Please be on time for the meeting."
      },
      {
        "head": "In time — a tiempo",
        "body": "'In time' significa llegar o terminar con margen suficiente antes de un evento o plazo; importa no llegar tarde, no acertar una hora exacta. Puedes llegar con mucho margen o en el último segundo, a diferencia de 'on time', que exige puntualidad exacta.",
        "note": "I arrived in time to get a seat. · Will we be in time for the film?"
      },
      {
        "head": "At the end — el final",
        "body": "'At the end (of algo)' señala el punto final literal de algo concreto —una película, un libro, un mes, una calle—, igual que 'at' marca un punto preciso. Es un marcador de posición, distinto de 'in the end', que no habla de posición sino de cómo terminó un proceso.",
        "note": "At the end of the film, everyone cried. · At the end of the month."
      },
      {
        "head": "In the end — al final",
        "body": "'In the end' significa 'finalmente', tras dudas, demoras o discusión —describe cómo se resolvió una situación, no una posición literal. A diferencia de 'at the end (of X)', que necesita algo concreto, 'in the end' funciona solo, como comentario sobre el resultado.",
        "note": "I thought she wouldn't come, but in the end she did. · In the end, we decided to stay."
      }
    ],
    "quiz": [
      {
        "q": "The bus arrived exactly ___ — not a minute late.",
        "opts": [
          "in time",
          "on time",
          "at the end",
          "in the end"
        ],
        "ans": 1,
        "exp": "Puntual, a la hora prevista → 'on time'."
      },
      {
        "q": "I got there just ___ to catch the last train.",
        "opts": [
          "on time",
          "in time",
          "at time",
          "by time"
        ],
        "ans": 1,
        "exp": "Con margen suficiente (justo a tiempo) → 'in time': 'just in time to catch'."
      },
      {
        "q": "___, he admitted he was wrong. (after a long process)",
        "opts": [
          "At the end",
          "In the end",
          "On time",
          "In time"
        ],
        "ans": 1,
        "exp": "Finalmente, tras un proceso largo → 'In the end'."
      }
    ],
    "flashcards": [
      {
        "front": "ON TIME vs IN TIME",
        "back": "ON TIME = punctual, at the scheduled time:\n'The train arrived ON TIME.' (exactly when planned)\n\nIN TIME = early enough (not too late):\n'I arrived IN TIME to get a seat.' (before it started)"
      }
    ],
    "readingText": {
      "title": "Almost Late for the Film",
      "body": "Yesterday we almost missed the movie. The bus was late, and I was afraid we wouldn't arrive in time. Luckily, we got to the cinema just in time to buy popcorn before the film started. The film itself began exactly on time, which surprised me — that cinema is never on time! At the end of the film, everyone in the theater was crying; it was a very emotional story. In the end, though, I was glad we went, because the film taught us something important about family. Next time, I want to leave home earlier so we don't have to run just to be in time again.",
      "translation": "Ayer casi perdimos la película. El autobús llegó tarde, y tenía miedo de que no llegáramos a tiempo. Por suerte, llegamos al cine justo a tiempo para comprar palomitas antes de que empezara la película. La película en sí comenzó exactamente a la hora prevista, lo cual me sorprendió — ¡ese cine nunca es puntual! Al final de la película, todos en la sala estaban llorando; fue una historia muy emotiva. Al final, sin embargo, me alegré de haber ido, porque la película nos enseñó algo importante sobre la familia. La próxima vez, quiero salir de casa más temprano para no tener que correr solo para llegar a tiempo otra vez."
    }
  },
  "123": {
    "title": "In / At / On (position) 1",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "IN — espacio cerrado",
        "body": "'In' se usa para lugares que rodean o contienen algo, como un espacio tridimensional en el que estás dentro: una habitación, un edificio, una ciudad, un país o incluso una foto. La idea clave es el encierro, sin importar el tamaño. Se diferencia de 'at', que trata el lugar como un punto, no un área.",
        "note": "in a room · in a building · in London · in France · in the street · in a photo"
      },
      {
        "head": "AT — punto específico",
        "body": "'At' trata un lugar como un único punto, no como un espacio en el que estás dentro: útil para lugares definidos por su función o posición exacta, como una puerta, una estación o una dirección concreta. Importa DÓNDE está algo, no lo que lo rodea.",
        "note": "at the door · at the top/bottom · at the station · at the airport · at school · at work"
      },
      {
        "head": "ON — superficie",
        "body": "'On' describe contacto con una superficie —algo apoyado o pegado a ella, como una mesa, una pared o un piso— en vez de estar encerrado o en un punto. También se usa con transporte público grande (bus, tren, avión), donde te imaginas a bordo. Juntas, IN/AT/ON cubren casi toda posición cotidiana.",
        "note": "on the table · on the wall · on the first floor · on the bus · on the left/right"
      }
    ],
    "quiz": [
      {
        "q": "She's ___ the garden.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Área cerrada → 'in': 'She's in the garden.'"
      },
      {
        "q": "He's waiting ___ the bus stop.",
        "opts": [
          "in",
          "on",
          "at",
          "by"
        ],
        "ans": 2,
        "exp": "Punto específico → 'at': 'He's waiting at the bus stop.'"
      },
      {
        "q": "There's a spider ___ the ceiling.",
        "opts": [
          "in",
          "on",
          "at",
          "by"
        ],
        "ans": 1,
        "exp": "Superficie → 'on': 'There's a spider on the ceiling.'"
      }
    ],
    "flashcards": [
      {
        "front": "IN / AT / ON for position",
        "back": "IN = enclosed space/area:\nin a room · in a city · in the street\n\nAT = specific point/location:\nat the door · at the station · at school\n\nON = surface:\non the table · on the wall · on the bus"
      }
    ],
    "readingText": {
      "title": "A Tour of My New Apartment",
      "body": "Welcome to my new apartment! When you come in, there's a mirror on the wall and my shoes are on the floor by the door. The kitchen is small, but there's a table in the corner where I eat breakfast. My laptop is always on the table, and my books are on the shelf. In the living room, there's a big sofa, and a lamp is on the little table beside it. At the top of the stairs is my bedroom. In the bedroom, my bed is next to the window, and there's a photo of my family on the wall. I love sitting in the living room in the evening, looking at the city lights.",
      "translation": "¡Bienvenido a mi nuevo apartamento! Cuando entras, hay un espejo en la pared y mis zapatos están en el suelo junto a la puerta. La cocina es pequeña, pero hay una mesa en la esquina donde desayuno. Mi laptop siempre está sobre la mesa, y mis libros están en el estante. En la sala, hay un sofá grande, y hay una lámpara sobre la mesita de al lado. Arriba de las escaleras está mi habitación. En la habitación, mi cama está junto a la ventana, y hay una foto de mi familia en la pared. Me encanta sentarme en la sala por la noche, mirando las luces de la ciudad."
    }
  },
  "124": {
    "title": "In / At / On (position) 2",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "AT — casa, escuela, trabajo",
        "body": "Estas expresiones fijas usan 'at' no porque el lugar sea un punto diminuto, sino porque el inglés las trata como una ACTIVIDAD o FUNCIÓN —estudiar, trabajar— más que un edificio físico. Al ser frases fijas, es mejor memorizarlas tal cual, en vez de deducirlas de una regla general.",
        "note": "She's at work. · The children are at school. · He's at home. · She's at university."
      },
      {
        "head": "IN — hospital, cárcel, cama",
        "body": "Estas expresiones usan 'in' porque enfatizan estar dentro de la institución como participante de su función —un paciente, un preso, alguien durmiendo— y no solo de visita. En inglés británico se suele omitir el artículo ('in hospital', no 'in the hospital'). Memorízalas como frases fijas.",
        "note": "He's in hospital. (he's a patient) · She's in bed. (she's sleeping/resting) · He's in prison."
      },
      {
        "head": "ON — izquierda, esquina, piso",
        "body": "Estas expresiones usan 'on' porque describen una posición a lo largo de una línea o borde (izquierda/derecha, una esquina) o un nivel dentro de un edificio (un piso), siguiendo la idea de 'superficie o nivel' de 'on'. No encajan en 'in' ni 'at'; memorízalas como frases fijas.",
        "note": "Turn on the left. · The bank is on the corner. · I live on the top floor."
      }
    ],
    "quiz": [
      {
        "q": "She's been ___ hospital for two weeks.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Institución donde ella es paciente → 'in hospital'."
      },
      {
        "q": "He's not here — he's ___ work.",
        "opts": [
          "in",
          "on",
          "at",
          "to"
        ],
        "ans": 2,
        "exp": "Lugar por función/actividad → 'at work'."
      }
    ],
    "flashcards": [
      {
        "front": "Fixed expressions: AT / IN for locations",
        "back": "AT HOME · AT SCHOOL · AT WORK · AT UNIVERSITY\n(= activities/functions)\n\nIN HOSPITAL · IN PRISON · IN BED\n(= inside the institution)\n\nIN THE CENTRE · ON THE LEFT · AT THE TOP"
      }
    ],
    "readingText": {
      "title": "A Visit to the Hospital",
      "body": "My friend Laura is in hospital this week — she broke her leg while skiing. I visited her yesterday. The hospital is on the corner of a busy street, and her room is on the third floor. When I'm not at work, I try to visit her every day. She's usually in bed, watching TV or reading. Her husband is not in hospital, but he's not at home either — he's always at work, so I keep her company. The doctor said she can't go back to school (she's a teacher) for at least a month. I told her, 'Don't worry, when you're not in bed anymore, we'll go for a coffee together.'",
      "translation": "Mi amiga Laura está en el hospital esta semana — se rompió una pierna esquiando. La visité ayer. El hospital está en la esquina de una calle muy transitada, y su habitación está en el tercer piso. Cuando no estoy en el trabajo, trato de visitarla todos los días. Normalmente está en la cama, viendo televisión o leyendo. Su esposo no está en el hospital, pero tampoco está en casa — siempre está trabajando, así que le hago compañía. El médico dijo que no puede volver a la escuela (es maestra) por al menos un mes. Le dije: 'No te preocupes, cuando ya no estés en cama, iremos a tomar un café juntas.'"
    }
  },
  "125": {
    "title": "In / At / On (Position) 3",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "IN vs ON the corner",
        "body": "Estas frases parecen iguales pero describen esquinas distintas: 'in the corner' es un ángulo interno dentro de un espacio cerrado, como donde se juntan dos paredes —de ahí 'in'—. 'On the corner' es una esquina externa donde se cruzan dos calles —un punto sobre una superficie—, de ahí 'on'.",
        "note": "The lamp is in the corner of the room. · There is a shop on the corner of the street."
      },
      {
        "head": "IN vs AT the front/back",
        "body": "La elección depende de si estás dentro de un espacio cerrado o en un punto relativo a algo más grande. Los coches se tratan como espacios cerrados, así que 'in the front/back of the car' sigue la lógica de 'in a room'. Edificios, filas y grupos de personas usan 'at', porque no estás literalmente dentro de ellos.",
        "note": "She sat in the back of the taxi. · He stood at the back of the queue."
      },
      {
        "head": "IN — fotos, libros, periódicos",
        "body": "'In' se usa para cualquier cosa que aparece dentro del contenido de medios impresos o enmarcados —una foto, un cuadro, un periódico, un libro— porque se trata la imagen o el texto como un espacio cerrado que contiene información, igual que una habitación contiene gente.",
        "note": "You look great in this photo. · I read about it in the newspaper."
      }
    ],
    "quiz": [
      {
        "q": "There's a bookshelf ___ of the room.",
        "opts": [
          "on the corner",
          "in the corner",
          "at the corner",
          "to the corner"
        ],
        "ans": 1,
        "exp": "Dentro de una habitación → 'in the corner'."
      },
      {
        "q": "He was sitting ___ of the car, not driving.",
        "opts": [
          "at the back",
          "in the back",
          "on the back",
          "to the back"
        ],
        "ans": 1,
        "exp": "Dentro de un vehículo → 'in the back'."
      },
      {
        "q": "I saw your photo ___ the newspaper.",
        "opts": [
          "on",
          "at",
          "in",
          "to"
        ],
        "ans": 2,
        "exp": "Medio impreso → 'in'."
      }
    ],
    "flashcards": [
      {
        "front": "Leftover position expressions",
        "back": "IN the corner (room) / ON the corner (street)\nIN the back/front (car) / AT the back/front (building, queue)\nIN a photo/newspaper/book"
      }
    ],
    "readingText": {
      "title": "A Strange Taxi Ride",
      "body": "I took a taxi to the airport this morning. I sat in the back of the taxi because the driver's dog was in the front seat! There was a small shop on the corner of the street, and in the corner of the taxi window, I noticed a funny sticker. While we waited in traffic, I checked my phone and saw a photo of my brother in the newspaper — he won a running competition! I was so proud. When we finally arrived, I paid quickly and ran to the back of the queue at security, hoping I wouldn't miss my flight.",
      "translation": "Tomé un taxi al aeropuerto esta mañana. Me senté en la parte de atrás del taxi porque el perro del conductor iba en el asiento delantero. Había una tiendita en la esquina de la calle, y en la esquina de la ventana del taxi noté una calcomanía graciosa. Mientras esperábamos en el tráfico, revisé mi teléfono y vi una foto de mi hermano en el periódico — ¡ganó una competencia de atletismo! Estaba muy orgullosa. Cuando finalmente llegamos, pagué rápido y corrí hasta el final de la fila en seguridad, esperando no perder mi vuelo."
    }
  },
  "126": {
    "title": "To, at, in and into",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "TO — movimiento hacia",
        "body": "'To' marca el destino de un verbo de movimiento: indica hacia dónde se dirige alguien, sin decir si llega o entra. Funciona con muchos verbos de movimiento (go, walk, come, travel) y expresa solo dirección. Se diferencia de 'into', que añade la idea de entrar realmente a un espacio cerrado.",
        "note": "I'm going to Paris. · She walked to the door. · Come to my house."
      },
      {
        "head": "INTO — movimiento hacia adentro",
        "body": "'Into' combina movimiento con la idea de entrar a un espacio cerrado —cruzar de afuera hacia adentro, como entrar a una habitación o subir a un coche. Es más específico que 'to', que solo muestra dirección general sin implicar entrada. Sin ese cruce de frontera, basta con 'to'.",
        "note": "She walked into the room. · He got into the car. · Water got into the engine."
      },
      {
        "head": "AT — llegar a un punto",
        "body": "Cuando 'arrive' va seguido de un punto, edificio o evento concreto, el inglés usa 'at', no 'to': 'arrived at the airport', nunca 'arrived to the airport'. 'Arrive' se trata como movimiento ya completado que aterriza en ese punto. Vale la pena memorizar esta excepción.",
        "note": "We arrived at the airport. · They arrived at the party late. · NOT: arrived to the airport ❌"
      },
      {
        "head": "OUT OF — salir de adentro",
        "body": "'Out of' es lo opuesto de 'into': describe movimiento que empieza dentro de un espacio cerrado y termina afuera, como salir de un edificio o sacar algo de una bolsa. Junto con 'into', forman un par claro para entrada y salida.",
        "note": "He walked out of the building. · She took the keys out of her bag."
      }
    ],
    "quiz": [
      {
        "q": "She walked ___ the room and sat down.",
        "opts": [
          "in",
          "into",
          "to",
          "at"
        ],
        "ans": 1,
        "exp": "Movimiento hacia un espacio cerrado → 'into'."
      },
      {
        "q": "They arrived ___ the airport two hours early.",
        "opts": [
          "in",
          "into",
          "at",
          "on"
        ],
        "ans": 2,
        "exp": "Punto específico → 'at': 'arrived at the airport'."
      }
    ],
    "flashcards": [
      {
        "front": "Movement prepositions: TO / INTO / OUT OF",
        "back": "TO = movement toward: 'I'm going TO Paris.'\nINTO = movement to inside: 'She walked INTO the room.'\nOUT OF = movement from inside: 'He walked OUT OF the building.'"
      }
    ],
    "readingText": {
      "title": "Running Late for Work",
      "body": "This morning I was late for work. I ran to the bus stop, but the bus had already left, so I had to walk to the office instead. When I finally arrived at the building, I rushed into the lobby and pressed the elevator button. I walked into my office and my boss looked surprised. 'Where were you?' she asked. I explained that I had left my keys in the car and had to go back to get them. Later, when I took my lunch out of my bag, I realized I had forgotten my wallet too — it was definitely not my day!",
      "translation": "Esta mañana llegué tarde al trabajo. Corrí hasta la parada de autobús, pero el autobús ya se había ido, así que tuve que caminar hasta la oficina. Cuando finalmente llegué al edificio, entré corriendo al vestíbulo y presioné el botón del ascensor. Entré a mi oficina y mi jefa se sorprendió. '¿Dónde estabas?', preguntó. Le expliqué que había dejado las llaves en el auto y tuve que volver por ellas. Más tarde, cuando saqué mi almuerzo de la bolsa, me di cuenta de que también había olvidado mi billetera — definitivamente no era mi día."
    }
  },
  "127": {
    "title": "In/on/at (other uses)",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "IN — partes del día",
        "body": "'In' también cubre las partes generales del día (mañana, tarde, noche), tratadas como periodos amplios en los que estás 'dentro', y sigue su lógica de espacio cerrado para cosas físicas: cama, coche, hospital, cárcel. Ambos usos comparten la misma idea: contenido dentro de algo más amplio.",
        "note": "in the morning · in the afternoon · in bed · in hospital · in the car"
      },
      {
        "head": "AT — actividades y puntos",
        "body": "'At' junta dos ideas: lugares definidos por la actividad que ocurre ahí (trabajo, escuela, casa) y lugares tratados como un punto preciso (una parada, una puerta). En ambos casos no importa el tamaño ni el interior, sino la función o la posición.",
        "note": "at work · at school · at home · at the bus stop"
      },
      {
        "head": "ON — superficies y transporte",
        "body": "'On' mantiene su sentido de contacto con una superficie, pero también se usa con transporte público grande —bus, tren, avión—, donde te imaginas a bordo, pudiendo caminar dentro. Vehículos pequeños y cerrados, como coches y taxis, usan 'in' porque se sienten como una caja cerrada.",
        "note": "on the bus · on the train · on the left · on the phone · on the radio"
      },
      {
        "head": "Truco: ¿tiene pasillo?",
        "body": "Truco con palabras en español: 'con' esconde 'ON' —para vehículos CON pasillo (bus, tren, avión), usa 'ON'. 'Sin' esconde 'IN' —para vehículos SIN pasillo (coche, taxi), usa 'IN'. Encontrar estas preposiciones escondidas ayuda a recordar la regla.",
        "note": "ON the bus · ON the train · ON the plane (con pasillo) · IN the car · IN the taxi (sin pasillo)"
      },
      {
        "head": "Expresiones fijas para memorizar",
        "body": "No todas las combinaciones de preposiciones siguen una lógica clara —algunas son simplemente fijas por convención y hay que aprenderlas como frases completas. 'In bed', 'on the phone' y 'at night' son ejemplos clásicos: cada una usa una preposición distinta sin un patrón consistente entre ellas.",
        "note": "in bed (NOT on bed) · on the phone (NOT at the phone) · at night (NOT in night)"
      }
    ],
    "quiz": [
      {
        "q": "I'll see you ___ the morning.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Parte del día → 'in': 'in the morning'."
      },
      {
        "q": "She's ___ work right now.",
        "opts": [
          "in",
          "on",
          "at",
          "by"
        ],
        "ans": 2,
        "exp": "Lugar por actividad/función → 'at work'."
      }
    ],
    "flashcards": [
      {
        "front": "Fixed expressions: AT / IN / ON",
        "back": "AT HOME · AT SCHOOL · AT WORK (activities)\nIN BED · IN HOSPITAL · IN PRISON (inside)\nON THE LEFT · ON THE BUS · ON THE PHONE"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "How are you getting to the concert tonight?", "translation": "¿Cómo vas a ir al concierto esta noche?" },
      { "speaker": "user", "text": "I'm going on the train, it's faster than the bus.", "translation": "Voy en tren, es más rápido que el autobús." },
      { "speaker": "other", "text": "Really? I usually go on the bus because it stops near my house.", "translation": "¿En serio? Yo normalmente voy en autobús porque para cerca de mi casa." },
      { "speaker": "user", "text": "I'll be on the phone with you if I get lost, ok?", "translation": "Estaré al teléfono contigo si me pierdo, ¿vale?" },
      { "speaker": "other", "text": "Sure. Are you at work right now?", "translation": "Claro. ¿Estás en el trabajo ahora mismo?" },
      { "speaker": "user", "text": "Yes, I'm at the office, but I finish at six.", "translation": "Sí, estoy en la oficina, pero termino a las seis." },
      { "speaker": "user", "text": "I'll be in bed by midnight after the concert!", "translation": "¡Estaré en la cama antes de la medianoche después del concierto!" },
      { "speaker": "other", "text": "Ha! Have fun. See you at the station in the evening.", "translation": "¡Ja! Que lo disfrutes. Nos vemos en la estación por la noche." }
    ]
  },
  "128": {
    "title": "By",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "BY — el agente en pasiva",
        "body": "En una oración pasiva, quien realiza la acción se llama agente, y el inglés lo introduce con 'by' cuando vale la pena mencionarlo. Así, el sujeto de la activa ('Picasso painted the picture') pasa al final de la pasiva ('The picture was painted by Picasso'). Solo se incluye cuando el agente es información relevante.",
        "note": "The painting was made by Picasso. · The window was broken by the storm."
      },
      {
        "head": "BY — medio de transporte",
        "body": "'By' se combina con un medio de transporte, sin artículo, para describir cómo viajas: by car, by bus, by train. Es un patrón fijo: añadir 'the' o 'a' cambia el significado, porque 'in my car' describe estar físicamente dentro de un vehículo concreto, no el medio general.",
        "note": "by car · by bus · by train · by plane · NOT: by the car ❌ (but: in my car ✅)"
      },
      {
        "head": "BY — cerca de",
        "body": "Además de marcar el agente o el transporte, 'by' también significa 'al lado de' o 'junto a' —describe algo ubicado justo al lado de otra cosa, como una ventana o una cama. Es un uso espacial más literal, distinto de los sentidos de pasiva o transporte.",
        "note": "She sat by the window. · There is a lamp by the bed."
      },
      {
        "head": "BY — fecha límite",
        "body": "'By' más una expresión de tiempo marca un plazo: la acción debe ocurrir en ese momento o antes, nunca después. Es distinto de 'at' (un momento exacto) y de 'until' (algo que continúa hasta un punto y luego para); 'by' es específicamente un límite que no se debe cruzar.",
        "note": "Please finish this by Friday. · I'll be home by 6 o'clock."
      }
    ],
    "quiz": [
      {
        "q": "The painting was made ___ Picasso.",
        "opts": [
          "from",
          "with",
          "by",
          "of"
        ],
        "ans": 2,
        "exp": "Agente en pasiva → 'by'."
      },
      {
        "q": "She travels ___ train every day.",
        "opts": [
          "in",
          "on",
          "by",
          "at"
        ],
        "ans": 2,
        "exp": "Medio de transporte → 'by train'."
      }
    ],
    "flashcards": [
      {
        "front": "BY — main uses",
        "back": "TRANSPORT: by car, by bus, by train (no article)\nPASSIVE AGENT: 'written BY Shakespeare'\nPOSITION: 'She sat BY the window.'"
      }
    ],
    "readingText": {
      "title": "The Museum Exhibition",
      "body": "Next week, a new exhibition opens at the museum, and one famous painting will be shown for the first time — it was painted by a local artist over twenty years ago. I need to finish writing the article about it by Friday, so I'm working quickly. I usually travel to the museum by bus, but today I decided to walk, and on the way, I stopped and sat by the river for a few minutes to think about the article. My desk at the office is by the window, so I can see the museum from there. If I don't finish the article by tonight, my editor will be very angry!",
      "translation": "La próxima semana se inaugura una nueva exposición en el museo, y se mostrará por primera vez un cuadro famoso — fue pintado por un artista local hace más de veinte años. Necesito terminar de escribir el artículo sobre esto antes del viernes, así que estoy trabajando rápido. Normalmente voy al museo en autobús, pero hoy decidí caminar, y en el camino me detuve y me senté junto al río unos minutos para pensar en el artículo. Mi escritorio en la oficina está junto a la ventana, así que puedo ver el museo desde ahí. ¡Si no termino el artículo para esta noche, mi editor se va a enojar mucho!"
    }
  },
  "129": {
    "title": "Noun + preposition",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Sustantivo + preposición fija",
        "body": "Muchos sustantivos en inglés se combinan siempre con una preposición específica al introducir aquello con lo que se relacionan, y no hay una regla fiable para predecir cuál. Hay que aprender estos pares de memoria, como cualquier vocabulario. El español suele usar una preposición distinta, así que traducir literalmente no ayuda.",
        "note": "the reason for · the cause of · a solution to · an increase in · damage to"
      },
      {
        "head": "Sustantivos de sentimientos y actitudes",
        "body": "Los sustantivos que describen un sentimiento, necesidad o actitud hacia algo tienden a agruparse en torno a FOR (una necesidad de algo), TOWARDS (una actitud hacia algo) o WITH (una conexión con algo), según el sustantivo. Hay un patrón parcial, pero la preposición exacta sigue aprendiéndose caso por caso.",
        "note": "a need for help · an attitude towards work · a connection with the past"
      },
      {
        "head": "Sustantivo vs. verbo + preposición",
        "body": "Como muchos sustantivos vienen de un verbo relacionado (increase/to increase), podrías esperar que compartan preposición, y a veces sí ocurre —'increase in' como 'increase in size'. Otras veces el sustantivo usa una preposición distinta a la del verbo, como 'solve a problem' pero 'a solution TO a problem'. Mejor comprobar cada caso.",
        "note": "to increase in size / an increase IN size (match) · to solve a problem / a solution TO a problem (different)"
      }
    ],
    "quiz": [
      {
        "q": "There has been an increase ___ the price of oil.",
        "opts": [
          "of",
          "in",
          "for",
          "about"
        ],
        "ans": 1,
        "exp": "'Increase IN' → sustantivo + preposición fija."
      },
      {
        "q": "We need a solution ___ this problem.",
        "opts": [
          "of",
          "for",
          "to",
          "about"
        ],
        "ans": 2,
        "exp": "'Solution TO' un problema."
      }
    ],
    "flashcards": [
      {
        "front": "Noun + Preposition",
        "back": "reason FOR · cause OF · solution TO\ndemand FOR · increase IN · damage TO\nneed FOR · attitude TOWARDS · connection WITH"
      }
    ],
    "readingText": {
      "title": "A Problem at the Factory",
      "body": "There has been a big increase in the number of complaints this month, and management wants to understand the reason for this. Customers say there's damage to many of the boxes when they arrive, and nobody has found a solution to the problem yet. My manager has a very negative attitude towards change, so it's hard to suggest new ideas. I think there's a connection with the old packaging machine and the damage, but I need more proof. Everyone agrees there's a need for a new system, but changing it will take time and money. We are meeting tomorrow to talk about possible solutions to this problem.",
      "translation": "Ha habido un gran aumento en el número de quejas este mes, y la gerencia quiere entender la razón de esto. Los clientes dicen que hay daños en muchas de las cajas cuando llegan, y nadie ha encontrado todavía una solución al problema. Mi jefe tiene una actitud muy negativa hacia el cambio, así que es difícil sugerir nuevas ideas. Creo que hay una conexión entre la vieja máquina de empaquetado y los daños, pero necesito más pruebas. Todos están de acuerdo en que hay una necesidad de un nuevo sistema, pero cambiarlo tomará tiempo y dinero. Mañana nos reunimos para hablar de posibles soluciones a este problema."
    }
  },
  "130": {
    "title": "Adjective + preposition 1",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Adjetivo + OF",
        "body": "Un grupo de adjetivos de sentimientos, juicios o conciencia sobre algo —proud, afraid, aware, tired— van seguidos de 'of' al introducir la causa de ese sentimiento. No hay una razón lógica profunda para 'of'; es simplemente el patrón fijo de este grupo, y hay que aprenderlo junto al adjetivo.",
        "note": "I'm proud of you. · She's afraid of spiders. · Are you aware of the problem?"
      },
      {
        "head": "Adjetivo + AT — habilidad",
        "body": "'At' sigue a adjetivos que juzgan la habilidad o competencia de alguien haciendo algo —good, bad, great, terrible—, describiendo la actividad concreta donde se aplica esa habilidad. Es uno de los patrones más predecibles: 'at' aparece siempre que se juzga una habilidad.",
        "note": "She's good at cooking. · He's bad at maths. · I'm not very good at singing."
      },
      {
        "head": "Adjetivo + IN / ABOUT",
        "body": "'In' suele seguir a adjetivos sobre interés mental en un tema (interested in), mientras que 'about' suele seguir a adjetivos de reacción emocional relacionada con un tema (worried, excited about). La diferencia es sutil; conviene aprender cada adjetivo con su preposición típica.",
        "note": "interested in history · worried about the exam · excited about the trip"
      },
      {
        "head": "Adjetivo + FOR",
        "body": "'For' sigue a adjetivos de responsabilidad (responsible for) o fama por algo (famous for), introduciendo aquello de lo que se es responsable o por lo que se es conocido. Mejor aprender 'responsible for' y 'famous for' como pares fijos que deducir la preposición.",
        "note": "She's responsible for the project. · Paris is famous for its museums."
      }
    ],
    "quiz": [
      {
        "q": "I'm very proud ___ what you've achieved.",
        "opts": [
          "of",
          "about",
          "for",
          "at"
        ],
        "ans": 0,
        "exp": "'Proud OF' → adjetivo + preposición fija."
      },
      {
        "q": "She's not very good ___ cooking.",
        "opts": [
          "in",
          "at",
          "for",
          "of"
        ],
        "ans": 1,
        "exp": "'Good AT' → 'good at cooking' (habilidad)."
      }
    ],
    "flashcards": [
      {
        "front": "Adjective + Preposition (group 1)",
        "back": "afraid OF · proud OF · tired OF · aware OF\ninterested IN · good AT · bad AT\nworried ABOUT · excited ABOUT\nresponsible FOR · famous FOR"
      }
    ],
    "readingText": {
      "title": "Before the Interview",
      "body": "My sister is very nervous — she's afraid of making mistakes in her job interview tomorrow. She's actually good at answering questions, but she's not very confident. I told her, 'You should be proud of everything you've achieved.' She's interested in marketing, and the company is famous for its creative advertising, so it's a great opportunity. She's also excited about the possibility of working in a big city. Her friend is responsible for helping her prepare, so they practiced questions together all afternoon. I'm sure she'll do great — I'm not worried about it at all!",
      "translation": "Mi hermana está muy nerviosa — tiene miedo de cometer errores en su entrevista de trabajo mañana. En realidad es buena para responder preguntas, pero no tiene mucha confianza. Le dije: 'Deberías estar orgullosa de todo lo que has logrado.' Está interesada en marketing, y la empresa es famosa por su publicidad creativa, así que es una gran oportunidad. También está emocionada por la posibilidad de trabajar en una gran ciudad. Su amiga es responsable de ayudarla a prepararse, así que practicaron preguntas juntas toda la tarde. Estoy segura de que le irá muy bien — ¡a mí no me preocupa nada en absoluto!"
    }
  },
  "131": {
    "title": "Adjective + preposition 2",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Adjetivo + TO",
        "body": "'To' sigue a adjetivos que expresan relación, comparación o conexión entre dos cosas o personas —similar to, married to, kind to—, vinculando el adjetivo con aquello a lo que se compara. El hilo común es una conexión que apunta de una cosa hacia otra, igual que 'to' marca dirección.",
        "note": "This is similar to my old phone. · He's married to a doctor. · Be kind to your sister."
      },
      {
        "head": "DIFFERENT FROM",
        "body": "En inglés formal, 'different' va seguido de 'from', no de 'to' ni 'than' (aunque esas alternativas existen informalmente). 'Used to' y 'accustomed to', pese a parecerse al infinitivo, van seguidos de sustantivo o forma en -ing —'used to the noise', nunca 'used to work' con este significado, que corresponde a otra estructura distinta para hábitos pasados.",
        "note": "This is different from what I expected. · I'm used to the noise now. · She's accustomed to working late."
      },
      {
        "head": "Adjetivo + WITH / BY",
        "body": "'With' suele seguir a adjetivos de satisfacción (satisfied with), mientras que 'by' suele seguir a adjetivos sobre la causa de una reacción, casi como el 'by' de la pasiva (impressed by her presentation —ella causó la impresión). La distinción refleja la pasiva: 'by' introduce la causa.",
        "note": "I am satisfied with the results. · We were impressed by her presentation."
      }
    ],
    "quiz": [
      {
        "q": "He's married ___ a doctor.",
        "opts": [
          "with",
          "for",
          "to",
          "at"
        ],
        "ans": 2,
        "exp": "'Married TO' → adjetivo + preposición fija."
      },
      {
        "q": "This is very different ___ what I expected.",
        "opts": [
          "to",
          "than",
          "from",
          "as"
        ],
        "ans": 2,
        "exp": "'Different FROM' (uso formal)."
      }
    ],
    "flashcards": [
      {
        "front": "Adjective + Preposition (group 2)",
        "back": "similar TO · opposite TO · married TO\nkind TO · used TO · accustomed TO\ndifferent FROM · satisfied WITH\nconnected TO/WITH · impressed BY"
      }
    ],
    "readingText": {
      "title": "Comparing Two Cities",
      "body": "My new apartment is very different from my old one — it's much smaller, but I'm slowly getting used to it. My neighbor is married to a chef, and they're always cooking something delicious; the smell is similar to my grandmother's kitchen. I'm satisfied with my decision to move here, even though it was difficult at first. My best friend is very kind to everyone in the building, and she's always ready to help. Last week, I was really impressed by how friendly people are here — it's completely different from the city where I grew up, where nobody was accustomed to talking to their neighbors.",
      "translation": "Mi nuevo apartamento es muy diferente al anterior — es mucho más pequeño, pero poco a poco me estoy acostumbrando. Mi vecino está casado con un chef, y siempre están cocinando algo delicioso; el olor es parecido al de la cocina de mi abuela. Estoy satisfecha con mi decisión de mudarme aquí, aunque al principio fue difícil. Mi mejor amiga es muy amable con todos en el edificio, y siempre está lista para ayudar. La semana pasada me impresionó mucho lo amable que es la gente aquí — es completamente diferente de la ciudad donde crecí, donde nadie estaba acostumbrado a hablar con sus vecinos."
    }
  },
  "132": {
    "title": "Verb + preposition 1",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verbo + TO — comunicarse",
        "body": "Los verbos de comunicación dirigida a una persona concreta —speak, listen, apologise, explain— suelen llevar 'to', porque la preposición marca a la persona como destino de la comunicación, igual que 'to' marca un destino físico. Se agrupa con los verbos con 'at' de abajo, con un matiz más negativo.",
        "note": "I need to speak to the manager. · Listen to me! · She apologised to her friend."
      },
      {
        "head": "Verbo + AT — dirigir atención",
        "body": "Verbos de mirar, reaccionar o dirigir atención hacia algo —stare, shout, laugh— suelen llevar 'at', sobre todo con un matiz negativo o repentino, a diferencia de los verbos de comunicación neutral con 'to'. Ese matiz negativo ayuda a predecir cuándo usar 'at' en vez de 'to'.",
        "note": "Stop shouting at me! · Don't laugh at him. · She stared at the painting."
      },
      {
        "head": "THROW TO vs THROW AT",
        "body": "El verbo 'throw' muestra bien la diferencia entre TO y AT: 'throw the ball TO someone' es una acción cooperativa para que la atrapen, mientras 'throw a stone AT something' es agresiva, para golpear el objetivo. Compararlos ayuda a interiorizar el patrón: 'to' neutral, 'at' agresivo.",
        "note": "He threw the ball to me. (so I could catch it) · He threw a stone at the window. (to hit it)"
      }
    ],
    "quiz": [
      {
        "q": "Stop shouting ___ me!",
        "opts": [
          "to",
          "at",
          "for",
          "with"
        ],
        "ans": 1,
        "exp": "'Shout AT' (dirección agresiva)."
      },
      {
        "q": "I need to speak ___ the manager.",
        "opts": [
          "at",
          "with",
          "to",
          "for"
        ],
        "ans": 2,
        "exp": "'Speak TO' alguien."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + TO and AT",
        "back": "VERB + TO: speak TO, listen TO, explain TO, apologise TO\nVERB + AT: look AT, stare AT, laugh AT, shout AT\n\nTHROW TO (for someone to catch) vs\nTHROW AT (aggressive direction)"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Did you see that boy shouting at his dog in the park?", "translation": "¿Viste a ese chico gritándole a su perro en el parque?" },
      { "speaker": "user", "text": "Yes, it was terrible! He should talk to it calmly, not shout at it.", "translation": "¡Sí, fue terrible! Debería hablarle con calma, no gritarle." },
      { "speaker": "other", "text": "I know. And then he threw a stick at the fence out of anger.", "translation": "Lo sé. Y después le tiró un palo a la cerca por enojo." },
      { "speaker": "user", "text": "That's so different from when kids play — normally you throw the ball to someone, not at something.", "translation": "Eso es muy distinto de cuando los niños juegan — normalmente le lanzas la pelota a alguien, no le tiras algo." },
      { "speaker": "other", "text": "Exactly. I wanted to explain to him why that's not okay.", "translation": "Exacto. Quería explicarle por qué eso no está bien." },
      { "speaker": "user", "text": "Maybe we should speak to his parents about it.", "translation": "Tal vez deberíamos hablar con sus padres sobre esto." }
    ]
  },
  "133": {
    "title": "Verb + preposition 2",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verbo + ABOUT — un tema",
        "body": "'About' sigue a verbos de pensar, hablar, soñar o sentir algo sobre un tema general —complain about, dream about, talk about—, introduciendo el tema del que trata la actividad. A diferencia de los verbos dirigidos con 'to' o 'at', estos no apuntan a una persona sino a un asunto.",
        "note": "Stop complaining about the weather! · I often dream about flying. · We talked about the trip."
      },
      {
        "head": "Verbo + OF — opinión y composición",
        "body": "'Of' sigue a verbos en dos casos: pedir o dar una opinión rápida (What do you think OF this?) y describir de qué está hecho algo (consists OF rice and vegetables). Ambos conectan el verbo con algo que caracteriza al sujeto. Aprende 'think of' y 'consist of' como pares fijos.",
        "note": "What do you think of my haircut? · This dish consists of rice and vegetables."
      },
      {
        "head": "THINK OF vs THINK ABOUT",
        "body": "Aunque usan el mismo verbo, tienen significados distintos: 'think of' pide una opinión inmediata y superficial, mientras 'think about' sugiere una reflexión más sostenida. 'What do you think of the plan?' quiere un juicio rápido; 'I'm thinking about changing jobs' describe una deliberación en curso.",
        "note": "What do you think of the plan? (opinion) · I'm thinking about changing jobs. (considering)"
      }
    ],
    "quiz": [
      {
        "q": "She's always complaining ___ the weather.",
        "opts": [
          "of",
          "about",
          "for",
          "at"
        ],
        "ans": 1,
        "exp": "'Complain ABOUT' algo."
      },
      {
        "q": "What do you think ___ my new haircut?",
        "opts": [
          "about",
          "of",
          "on",
          "for"
        ],
        "ans": 1,
        "exp": "'Think OF' = pedir opinión."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + ABOUT and OF",
        "back": "ABOUT: talk ABOUT, complain ABOUT, worry ABOUT, hear ABOUT, dream ABOUT\nOF: think OF (opinion), approve OF, consist OF, remind OF"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "What do you think of this restaurant?", "translation": "¿Qué piensas de este restaurante?" },
      { "speaker": "user", "text": "Honestly, I've been thinking about it a lot, and I'm not sure.", "translation": "Honestamente, he estado pensando mucho en eso, y no estoy segura." },
      { "speaker": "other", "text": "I keep hearing people complain about the slow service.", "translation": "Sigo escuchando a la gente quejarse del servicio lento." },
      { "speaker": "user", "text": "Yes, and the chef always talks about using local ingredients, but this dish doesn't consist of anything special.", "translation": "Sí, y el chef siempre habla de usar ingredientes locales, pero este plato no está hecho de nada especial." },
      { "speaker": "other", "text": "I dreamed about eating pasta all week, and now I'm disappointed!", "translation": "¡Soñé con comer pasta toda la semana, y ahora estoy decepcionado!" },
      { "speaker": "user", "text": "Let's not worry about it — next time we'll try a different place.", "translation": "No nos preocupemos por eso — la próxima vez probaremos otro lugar." }
    ]
  },
  "134": {
    "title": "Verb + preposition 3",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verbo + FOR — propósito",
        "body": "'For' sigue a verbos de acciones dirigidas a obtener algo —waiting for, searching for, asking for, paying for—, introduciendo la meta o el propósito de la acción. Lo que sigue a 'for' es lo que el sujeto quiere, necesita o busca lograr. Distinto del 'for' que explica una causa.",
        "note": "I've been waiting for you for an hour! · Can you pay for the tickets?"
      },
      {
        "head": "Verbo + FOR — causa",
        "body": "'For' también introduce la RAZÓN de una respuesta emocional o social —por qué se agradece, se culpa o se pide disculpas—, no una meta como antes. Aquí funciona como 'because of'. Aunque es la misma preposición, la lógica —razón vs. meta— es distinta.",
        "note": "He thanked me for helping him. · Don't blame me for this! · I apologised for being late."
      },
      {
        "head": "APPLY FOR / HOPE FOR",
        "body": "'Apply for' y 'hope for' usan 'for' para introducir lo que se busca o se desea —un trabajo, buen clima—, siguiendo el sentido de propósito de 'for'. En ambos casos el resultado aún es incierto. Agrúpalos con 'wait for' y 'search for' para reforzar el patrón 'for = meta deseada'.",
        "note": "She applied for the job. · We are hoping for good weather."
      }
    ],
    "quiz": [
      {
        "q": "I've been waiting ___ you for an hour!",
        "opts": [
          "on",
          "for",
          "about",
          "at"
        ],
        "ans": 1,
        "exp": "'Wait FOR' a alguien."
      },
      {
        "q": "He thanked me ___ helping him.",
        "opts": [
          "about",
          "for",
          "of",
          "to"
        ],
        "ans": 1,
        "exp": "'Thank someone FOR' algo."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + FOR",
        "back": "wait FOR · search FOR · ask FOR · pay FOR\napply FOR · hope FOR · blame (sb) FOR\nthank (sb) FOR · apologise FOR"
      }
    ],
    "readingText": {
      "title": "Applying for a New Job",
      "body": "Last month, I applied for a job at a design company, and I've been waiting for their reply ever since. I asked for feedback from a friend who works there, and she agreed to help me prepare. When the interview day came, I was so nervous that I arrived late, so I apologised for being late immediately. Luckily, the manager didn't blame me for the traffic — she understood. I thanked her for her patience and paid for coffee for both of us afterward. Now I'm just hoping for good news. If I get the job, I'll finally stop searching for a new opportunity every weekend!",
      "translation": "El mes pasado postulé para un trabajo en una empresa de diseño, y desde entonces he estado esperando su respuesta. Le pedí opinión a una amiga que trabaja ahí, y ella aceptó ayudarme a prepararme. Cuando llegó el día de la entrevista, estaba tan nerviosa que llegué tarde, así que me disculpé de inmediato por la tardanza. Por suerte, la gerente no me culpó por el tráfico — lo entendió. Le agradecí su paciencia y pagué el café para las dos después. Ahora solo espero buenas noticias. ¡Si consigo el trabajo, finalmente dejaré de buscar una nueva oportunidad cada fin de semana!"
    }
  },
  "135": {
    "title": "Verb + preposition 4",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verbo + FROM — origen, protección",
        "body": "'From' sigue a verbos de separación, origen o distancia de algo —suffer from, protect from, recover from—, compartiendo la idea de alejarse o mantenerse aparte de algo negativo. Coincide con el 'from' que marca un punto de partida, aplicado aquí a enfermedades y peligros.",
        "note": "She suffers from terrible headaches. · This cream protects your skin from the sun. · He is recovering from the flu."
      },
      {
        "head": "Verbo + IN — creencia, éxito",
        "body": "'In' sigue a verbos de compromiso profundo con algo —believe in, succeed in, specialize in, invest in—, tratando esa idea o campo como un espacio en el que el sujeto está involucrado, como el 'in' de espacio cerrado. Es más fuerte que el 'of' superficial de las opiniones.",
        "note": "I believe in second chances. · He specializes in tax law. · They invested in new technology."
      },
      {
        "head": "DEPEND ON",
        "body": "'Depend' siempre va con 'on', nunca con 'of' —un error común en hispanohablantes, porque 'depender de' sugiere 'depend OF'. En inglés, 'on' expresa la idea de apoyarse en algo, como el 'on' de soporte en otros contextos. Vale la pena memorizarlo a propósito.",
        "note": "I depend on my parents for money. · It depends on the weather."
      }
    ],
    "quiz": [
      {
        "q": "She suffers ___ terrible headaches.",
        "opts": [
          "with",
          "about",
          "from",
          "of"
        ],
        "ans": 2,
        "exp": "'Suffer FROM' una enfermedad."
      },
      {
        "q": "I depend ___ my parents for money.",
        "opts": [
          "of",
          "on",
          "for",
          "about"
        ],
        "ans": 1,
        "exp": "'Depend ON' alguien."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + FROM / IN",
        "back": "FROM: suffer FROM, recover FROM, protect FROM, prevent FROM\nIN: believe IN, succeed IN, specialize IN, invest IN"
      }
    ],
    "readingText": {
      "title": "Recovering and Starting Fresh",
      "body": "My uncle has been suffering from back pain for months, but he's finally recovering from his injury. The doctors protected him from further damage by recommending complete rest. During this time, he started reading about business and now believes in taking more risks with his savings. He recently invested in a small company that specializes in renewable energy, and he succeeded in doubling his money within a year! He always says that everything depends on patience and good information, not luck. I admire how he turned a difficult situation into something positive — he even convinced me to believe in my own ideas more.",
      "translation": "Mi tío ha estado sufriendo de dolor de espalda durante meses, pero finalmente se está recuperando de su lesión. Los médicos lo protegieron de más daño recomendándole descanso completo. Durante este tiempo, empezó a leer sobre negocios y ahora cree en tomar más riesgos con sus ahorros. Recientemente invirtió en una pequeña empresa que se especializa en energía renovable, ¡y logró duplicar su dinero en un año! Siempre dice que todo depende de la paciencia y la buena información, no de la suerte. Admiro cómo convirtió una situación difícil en algo positivo — incluso me convenció de creer más en mis propias ideas."
    }
  },
  "136": {
    "title": "Verb + preposition 5",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verbo + ON — apoyo y foco",
        "body": "'On' sigue a verbos de dependencia o atención enfocada —depend on, rely on, concentrate on—, continuando el sentido de 'apoyo' de 'depend on' de la unidad anterior. El sujeto se apoya en, o dirige su atención hacia, lo que sigue a 'on', como algo apoyado sobre una superficie.",
        "note": "I rely on my sister for advice. · Try to concentrate on your work. · You can depend on me."
      },
      {
        "head": "Verbo + ON — gastar y comentar",
        "body": "'On' también introduce en qué se gasta dinero o tiempo, o hacia qué se dirige un comentario —spend money ON clothes, comment ON a presentation—. En el gasto responde 'para qué se usó el dinero'; en el comentario, 'de qué se habla'.",
        "note": "She spent a lot of money on clothes. · He commented on my presentation."
      },
      {
        "head": "SUCCEED IN",
        "body": "'Succeed' va seguido de 'in' más una forma en -ing o un sustantivo, describiendo el área donde ocurre el éxito —succeeded IN passing the exam—, siguiendo el patrón de 'in' de la unidad anterior. Evita el error común de usar 'at' o un infinitivo ('succeeded to pass').",
        "note": "He succeeded in passing the exam. · NOT: succeeded to pass ❌"
      },
      {
        "head": "CONGRATULATE... ON...",
        "body": "'Congratulate' lleva 'on' para introducir el logro o evento que se celebra —congratulated her ON her promotion—, tratando ese logro como el foco de la felicitación. Es una trampa común para hispanohablantes, porque 'felicitar por' sugeriría 'for' en vez de 'on'.",
        "note": "I congratulated her on her promotion."
      }
    ],
    "quiz": [
      {
        "q": "He succeeded ___ passing the exam.",
        "opts": [
          "at",
          "in",
          "on",
          "for"
        ],
        "ans": 1,
        "exp": "'Succeed IN' hacer algo."
      },
      {
        "q": "I believe ___ the importance of education.",
        "opts": [
          "at",
          "on",
          "in",
          "for"
        ],
        "ans": 2,
        "exp": "'Believe IN' algo."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + ON",
        "back": "depend ON · rely ON · concentrate ON\ninsist ON · comment ON · spend (money/time) ON\ncongratuate sb ON · base (sth) ON"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "I heard the good news! Congratulations on your promotion!", "translation": "¡Escuché la buena noticia! ¡Felicitaciones por tu ascenso!" },
      { "speaker": "user", "text": "Thank you! I couldn't have done it without my team — I really rely on them.", "translation": "¡Gracias! No podría haberlo logrado sin mi equipo — de verdad dependo de ellos." },
      { "speaker": "other", "text": "You always concentrate on your work so well. Did you spend a lot of money on the celebration dinner?", "translation": "Siempre te concentras muy bien en tu trabajo. ¿Gastaste mucho dinero en la cena de celebración?" },
      { "speaker": "user", "text": "A little, yes! My boss commented on how much I've improved this year.", "translation": "¡Un poco, sí! Mi jefe comentó lo mucho que he mejorado este año." },
      { "speaker": "other", "text": "That's wonderful. Everything you've achieved is based on hard work.", "translation": "Qué maravilla. Todo lo que has logrado está basado en trabajo duro." },
      { "speaker": "user", "text": "Thanks! I insisted on inviting the whole team to celebrate together.", "translation": "¡Gracias! Insistí en invitar a todo el equipo para celebrar juntos." }
    ]
  }
};
