import type { GrammarFormula, SyntaxChip } from '@/types/grammar';

// Ayudantes para escribir las fórmulas con colores: sujeto (gris oscuro), auxiliar (verde), negación (rojo),
// verbo principal (naranja) y el resto de la oración (gris).
export const suj = (text: string): SyntaxChip => ({ text, role: 'subject' });
export const aux = (text: string): SyntaxChip => ({ text, role: 'verb' });
export const neg = (text: string): SyntaxChip => ({ text, role: 'negation' });
export const verbo = (text: string): SyntaxChip => ({ text, role: 'object' });
export const resto = (text: string): SyntaxChip => ({ text, role: 'connector' });
/** Una fórmula. */
export const f = (...chips: SyntaxChip[]): GrammarFormula => ({ chips });
/** Una fórmula con nombre («Continuous», «Perfect»…), para las estructuras que tienen variantes. */
export const fl = (label: string, ...chips: SyntaxChip[]): GrammarFormula => ({ label, chips });
