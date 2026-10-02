import type { VocabEntry } from '@/types/grammar';

import { type FilaPalabra, tema } from './ayuda';

const aEntradas = (filas: FilaPalabra[]): VocabEntry[] => filas.map(([w, ipa, aprox, def, ex]) => ({ w, ipa, aprox, def, ex }));

/**
 * Palabras básicas que faltaban en grupos que ya existen. Se suman a cada grupo por su id (ver `VOCAB_TOPICS`),
 * así aparecen en su tema y en la búsqueda sin repetir las que ya estaban.
 */
export const PALABRAS_AGREGADAS: Record<string, VocabEntry[]> = {
  familia: aEntradas([
    ['family', '/ˈfæməli/', 'fámili', 'familia', 'I have a big family.'],
    ['uncle', '/ˈʌŋkl/', 'ánkl', 'tío', 'My uncle lives in Spain.'],
    ['cousin', '/ˈkʌzn/', 'cásn', 'primo, prima', 'My cousin is a doctor.'],
    ['children', '/ˈtʃɪldrən/', 'chíldren', 'niños, hijos (plural de child)', 'They have three children.'],
    ['boy', '/bɔɪ/', 'boi', 'niño, chico', 'The boy is playing outside.'],
    ['girl', '/ɡɜːrl/', 'guerl', 'niña, chica', 'The girl is reading a book.'],
  ]),
  adjetivos: aEntradas([
    ['large', '/lɑːrdʒ/', 'larch', 'grande, amplio', 'She lives in a large house.'],
    ['shallow', '/ˈʃæloʊ/', 'shálou', 'poco profundo', 'The water is shallow here.'],
    ['ancient', '/ˈeɪnʃənt/', 'éinshent', 'antiguo (de épocas remotas)', 'We visited some ancient ruins.'],
    ['best', '/best/', 'best', 'el mejor', 'She is my best friend.'],
    ['better', '/ˈbetər/', 'béter', 'mejor (comparativo de good)', 'This phone is better than that one.'],
    ['worse', '/wɜːrs/', 'uers', 'peor (comparativo de bad)', 'The weather is worse today.'],
    ['great', '/ɡreɪt/', 'greit', 'genial, excelente; grande (importante)', 'That is a great idea.'],
    ['nice', '/naɪs/', 'náis', 'agradable, simpático, bonito', 'She is a very nice person.'],
    ['next', '/nekst/', 'nekst', 'siguiente, próximo', 'See you next week.'],
    ['last', '/læst/', 'last', 'último; pasado (la semana pasada)', 'I saw him last night.'],
    ['real', '/ˈriːəl/', 'rial', 'real, verdadero', 'Is this a real diamond?'],
  ]),
  adverbios: aEntradas([
    ['seldom', '/ˈseldəm/', 'séldem', 'rara vez', 'He seldom eats meat.'],
    ['certainly', '/ˈsɜːrtnli/', 'sértnli', 'por supuesto, ciertamente', 'Certainly, I can help you.'],
    ['easily', '/ˈiːzəli/', 'ísili', 'fácilmente', 'She passed the exam easily.'],
  ]),
  ciudad: aEntradas([
    ['airport', '/ˈerpɔːrt/', 'érport', 'aeropuerto', 'The airport is far from the city.'],
    ['station', '/ˈsteɪʃn/', 'stéishen', 'estación', 'The train station is near here.'],
    ['country', '/ˈkʌntri/', 'cántri', 'país; campo', 'Peru is a beautiful country.'],
  ]),
  alimentos: aEntradas([['meat', '/miːt/', 'mit', 'carne', 'I do not eat meat.']]),
  casa: aEntradas([
    ['clock', '/klɑːk/', 'clak', 'reloj (de pared o de mesa)', 'The clock is on the wall.'],
    ['picture', '/ˈpɪktʃər/', 'píkcher', 'cuadro; imagen, foto', 'There is a picture on the wall.'],
  ]),
  tecnologia: aEntradas([
    ['television', '/ˈtelɪvɪʒn/', 'télevishen', 'televisión', 'We watch television at night.'],
    ['radio', '/ˈreɪdioʊ/', 'réidiou', 'radio', 'I listen to the radio in the car.'],
  ]),
  escuela: aEntradas([
    ['paper', '/ˈpeɪpər/', 'péiper', 'papel; trabajo escrito', 'I need a sheet of paper.'],
    ['letter', '/ˈletər/', 'léter', 'carta; letra (del alfabeto)', 'I wrote a letter to my friend.'],
  ]),
  compras: aEntradas([['card', '/kɑːrd/', 'card', 'tarjeta', 'Can I pay by card?']]),
};

/** Un grupo nuevo con lo que se dice a cada rato: saludos, gracias, perdones y respuestas cortas. */
export const GRUPO_EXPRESIONES = tema('expresiones', 'Expresiones básicas', '🗨️', 'A1', [
  ['hello', '/həˈloʊ/', 'jelóu', 'hola', 'Hello! How are you?'],
  ['goodbye', '/ˌɡʊdˈbaɪ/', 'gudbái', 'adiós', 'Goodbye, see you tomorrow.'],
  ['yes', '/jes/', 'ies', 'sí', 'Yes, I do.'],
  ['please', '/pliːz/', 'pliz', 'por favor', 'Sit down, please.'],
  ['thanks', '/θæŋks/', 'zanks', 'gracias', 'Thanks for your help.'],
  ['thank you', '/ˈθæŋk juː/', 'zank iu', 'gracias (un poco más formal)', 'Thank you very much.'],
  ["you're welcome", '/jʊr ˈwelkəm/', 'iur uélkem', 'de nada', "Thank you! — You're welcome."],
  ['welcome', '/ˈwelkəm/', 'uélkem', 'bienvenido', 'Welcome to our home!'],
  ['sorry', '/ˈsɔːri/', 'sori', 'perdón; lo siento', 'Sorry, I am late.'],
  ['excuse me', '/ɪkˈskjuːz miː/', 'ekskiús mi', 'disculpe, con permiso', 'Excuse me, where is the bank?'],
  ['pardon', '/ˈpɑːrdn/', 'pardn', '¿perdón? (no entendí)', 'Pardon? Can you repeat that, please?'],
  ['sure', '/ʃʊr/', 'shur', 'claro, por supuesto (como respuesta); seguro', 'Can you help me? — Sure!'],
  ['good luck', '/ɡʊd lʌk/', 'gud lak', 'buena suerte', 'Good luck on your exam!'],
  ['see you later', '/siː juː ˈleɪtər/', 'si iu léiter', 'hasta luego', 'Bye! See you later.'],
  ['take care', '/teɪk ker/', 'teik quer', 'cuídate', 'Take care and call me soon.'],
  ['nice to meet you', '/naɪs tə miːt juː/', 'náis tu mit iu', 'mucho gusto', 'Nice to meet you, Ana.'],
  ['no problem', '/noʊ ˈprɑːbləm/', 'nou prablem', 'no hay problema; de nada', 'Thanks! — No problem.'],
  ['bless you', '/ˈbles juː/', 'bles iu', 'salud (cuando alguien estornuda)', 'Achoo! — Bless you!'],
]);
