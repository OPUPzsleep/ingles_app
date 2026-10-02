import type { ReactNode } from 'react';

import { NOTA_PRONUNCIACION } from '@/components/vocabulario/comun';
import { Explorador, type GrupoInfo } from '@/components/vocabulario/explorador';
import { TarjetaPalabra } from '@/components/vocabulario/tarjeta-palabra';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { buscarPalabras } from '@/lib/buscar-vocabulario';
import type { VocabEntry } from '@/types/grammar';

const GRUPOS: GrupoInfo[] = VOCAB_TOPICS.map((tema) => ({
  id: tema.id,
  icono: tema.icon,
  nombre: tema.name,
  detalle: `${tema.level} · ${tema.words.length} palabras`,
}));

const TOTAL = VOCAB_TOPICS.reduce((suma, tema) => suma + tema.words.length, 0);

function delGrupo(id: string): VocabEntry[] {
  return VOCAB_TOPICS.find((tema) => tema.id === id)?.words ?? [];
}

function tarjeta(entrada: VocabEntry, pie?: string) {
  return <TarjetaPalabra entrada={entrada} pie={pie} />;
}

interface ListaPalabrasProps {
  encabezado: ReactNode;
  /** Tema que se abre al entrar. */
  tema?: string;
  /** Búsqueda con la que se entra. */
  busqueda?: string;
}

/** Las palabras por tema, con búsqueda en inglés y en español. */
export function ListaPalabras({ encabezado, tema, busqueda }: ListaPalabrasProps) {
  return (
    <Explorador
      encabezado={encabezado}
      titulo="Palabras"
      descripcion={`${TOTAL} palabras en ${GRUPOS.length} temas. Elige un tema o busca en inglés o en español.`}
      nota={NOTA_PRONUNCIACION}
      placeholder="🔍 Buscar: house, comer, doctor…"
      nombreGrupos="temas"
      nombreItems="palabras"
      grupos={GRUPOS}
      grupoInicial={tema}
      busquedaInicial={busqueda}
      buscar={buscarPalabras}
      delGrupo={delGrupo}
      tarjeta={tarjeta}
    />
  );
}
