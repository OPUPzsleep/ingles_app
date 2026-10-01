/**
 * Los números de unidad siguen el recorrido por niveles: A1 (1–12), A2 (13–45), B1 (46–112) y B2 (113–145).
 * Dentro de cada nivel las unidades van agrupadas por tema y, dentro de cada tema, en el orden del libro.
 *
 * `LIBRO_DE_NUEVO[n - 1]` es el número que tenía la unidad n en el libro en que se basa (y en la app hasta la
 * versión 1.5.0). Sirve para dos cosas: pasar el progreso guardado con los números viejos y conservar el orden
 * del libro donde hace falta (la pronunciación se reparte "por cercanía").
 */
export const LIBRO_DE_NUEVO: readonly number[] = [
  1, 2, 5, 17, 69, 71, 72, 79, 85, 105, 121, 123, 3, 4, 6,
  19, 20, 21, 18, 26, 31, 33, 37, 49, 53, 54, 70, 73, 74, 80,
  81, 82, 84, 86, 87, 88, 98, 100, 103, 106, 108, 119, 124, 126, 137,
  7, 8, 9, 10, 11, 12, 13, 22, 23, 15, 28, 29, 30, 32, 34,
  35, 36, 38, 39, 42, 43, 47, 50, 51, 52, 55, 56, 57, 59, 60,
  61, 64, 65, 75, 76, 77, 83, 89, 90, 91, 92, 93, 99, 101, 102,
  104, 107, 109, 111, 113, 114, 115, 120, 122, 125, 127, 128, 129, 130, 132,
  133, 138, 139, 140, 141, 142, 143, 14, 24, 25, 16, 27, 40, 41, 44,
  45, 46, 48, 58, 62, 63, 66, 67, 68, 78, 94, 95, 96, 97, 110,
  112, 116, 117, 118, 131, 134, 135, 136, 144, 145,
];

/** Del número que tenía la unidad en el libro a su número actual. */
export const NUEVO_DE_LIBRO: Record<number, number> = Object.fromEntries(
  LIBRO_DE_NUEVO.map((delLibro, i) => [delLibro, i + 1])
);
