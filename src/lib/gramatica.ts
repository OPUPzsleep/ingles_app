import { GRAM_CATS } from '@/data/gramatica/categories';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import type { GramBlock, GramConcept } from '@/types/gramatica';

/** Los conceptos de una categoría, en su orden. */
export function conceptosDeCategoria(categoriaId: string | undefined): GramConcept[] {
  return GRAM_CONCEPTS.filter((c) => c.cat === categoriaId);
}

/**
 * El concepto con el que abre la vista de dos paneles: el pedido, o el primero de la categoría pedida,
 * o el primero de la primera categoría que tenga conceptos.
 */
export function conceptoInicial(conceptoId?: string, categoriaId?: string): GramConcept | undefined {
  return (
    GRAM_CONCEPTS.find((c) => c.id === conceptoId) ??
    conceptosDeCategoria(categoriaId)[0] ??
    GRAM_CATS.map((cat) => conceptosDeCategoria(cat.id)[0]).find(Boolean)
  );
}

/** Líneas que ocupa un texto en una columna de `porLinea` caracteres (respeta los saltos de línea). */
function lineas(texto: string, porLinea: number): number {
  return texto.split('\n').reduce((total, linea) => total + Math.max(1, Math.ceil(linea.length / porLinea)), 0);
}

/**
 * Alto aproximado (en px) de un bloque dentro de una columna de unos 540 px. Solo sirve para repartir
 * los bloques en dos columnas parejas, así que no necesita ser exacto.
 */
export function altoAproximado(bloque: GramBlock): number {
  switch (bloque.type) {
    case 'def':
      return 32 + (bloque.heading ? 18 : 0) + lineas(bloque.body, 62) * 24;
    case 'example':
      return 32 + lineas(bloque.text, 62) * 22 + (bloque.transl ? lineas(bloque.transl, 70) * 20 : 0);
    case 'compare':
      // Dos cajas lado a lado, cada una con la mitad del ancho: pesa la más larga.
      return 32 + 18 + Math.max(lineas(bloque.esBody, 28), lineas(bloque.enBody, 28)) * 21;
    case 'tip':
    case 'warn':
      return 32 + lineas(bloque.body, 68) * 21;
    case 'table':
      return 40 + bloque.rows.length * 44;
  }
}

/** Si una columna sale más de 2 veces más alta que la otra, dos columnas se ven cojas: mejor una sola. */
const DESBALANCE_MAXIMO = 2;

/**
 * Reparte los bloques de un concepto, conservando su orden, en dos columnas de alto parecido:
 * [izquierda, derecha]. Se lee la columna izquierda de arriba abajo y luego la derecha.
 * Si no hay manera de dejarlas parejas (por ejemplo, una definición corta y una tabla de 24 filas),
 * devuelve todo en la izquierda y la derecha vacía.
 */
export function repartirBloques(bloques: GramBlock[]): [GramBlock[], GramBlock[]] {
  const pesos = bloques.map(altoAproximado);
  const total = pesos.reduce((suma, peso) => suma + peso, 0);

  let corte = 1;
  let pesoIzquierda = 0;
  let menorDiferencia = Infinity;
  let acumulado = 0;
  for (let i = 1; i < bloques.length; i++) {
    acumulado += pesos[i - 1];
    const diferencia = Math.abs(total - 2 * acumulado);
    if (diferencia < menorDiferencia) {
      menorDiferencia = diferencia;
      corte = i;
      pesoIzquierda = acumulado;
    }
  }

  const alto = Math.max(pesoIzquierda, total - pesoIzquierda);
  const bajo = Math.min(pesoIzquierda, total - pesoIzquierda);
  if (bloques.length < 2 || alto > DESBALANCE_MAXIMO * bajo) return [bloques, []];
  return [bloques.slice(0, corte), bloques.slice(corte)];
}
