/** Preguntas de ejemplo que se ofrecen para empezar o seguir; cada una funciona con el asistente. */
export const SUGERENCIAS_INICIALES: string[] = [
  '¿Cuándo uso el present perfect?',
  '¿Cómo se dice «ventana» en inglés?',
  'Diferencia entre say y tell',
  'Pasado de go',
  'Frases para el aeropuerto',
  '¿Qué estudio hoy?',
  '¿Cuándo uso will y going to?',
  '¿Cómo se pronuncia «th»?',
  'Llévame al mapa de tiempos',
  '¿Qué es un phrasal verb?',
  '¿Por qué se dice «I am 25»?',
  '¿Qué significa «enough»?',
];

/** Lo que el asistente sabe hacer, con un ejemplo de cada cosa. */
export function textoDeAyuda(): string {
  return [
    'Puedo ayudarte con:',
    '• Gramática: «¿Cuándo uso el present perfect?»',
    '• Palabras: «¿Cómo se dice ventana en inglés?»',
    '• Verbos: «pasado de go»',
    '• Frases: «frases para el aeropuerto»',
    '• Qué estudiar: «¿Qué estudio hoy?»',
    '• Ir a una pantalla: «llévame a la unidad 20»',
    'Funciono sin internet ni inteligencia artificial: solo sé lo que hay en la app.',
  ].join('\n');
}
