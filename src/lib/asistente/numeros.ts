const HASTA_19 = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
];
const DECENAS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/** Cómo se dice un número entero (de 0 a 999.999.999) en inglés americano: 25 → «twenty-five», 101 → «one hundred one». */
export function numeroEnIngles(n: number): string | null {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) return null;
  if (n < 20) return HASTA_19[n];
  if (n < 100) return DECENAS[Math.floor(n / 10)] + (n % 10 ? `-${HASTA_19[n % 10]}` : '');
  const escala = (valor: number, tamano: number, nombre: string) => {
    const cabeza = numeroEnIngles(Math.floor(valor / tamano));
    const resto = valor % tamano;
    return `${cabeza} ${nombre}${resto ? ` ${numeroEnIngles(resto)}` : ''}`;
  };
  if (n < 1000) return escala(n, 100, 'hundred');
  if (n < 1_000_000) return escala(n, 1000, 'thousand');
  return escala(n, 1_000_000, 'million');
}

/** Cómo se lee un año (de 1100 a 2099): 1999 → «nineteen ninety-nine», 2005 → «two thousand five». Si no es un año, null. */
export function anioEnIngles(n: number): string | null {
  if (!Number.isInteger(n) || n < 1100 || n > 2099) return null;
  if (n >= 2000 && n <= 2009) return n === 2000 ? 'two thousand' : `two thousand ${HASTA_19[n - 2000]}`;
  const alto = numeroEnIngles(Math.floor(n / 100));
  const bajo = n % 100;
  if (bajo === 0) return `${alto} hundred`;
  return bajo < 10 ? `${alto} oh ${HASTA_19[bajo]}` : `${alto} ${numeroEnIngles(bajo)}`;
}
