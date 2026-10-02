import type { ReactNode } from 'react';

import { Explorador, type GrupoInfo } from '@/components/vocabulario/explorador';
import { TarjetaFrase } from '@/components/vocabulario/tarjeta-frase';
import { type FraseUtil, FRASES_UTILES } from '@/data/vocabulario/frases-utiles';
import { buscarFrases } from '@/lib/buscar-vocabulario';

const GRUPOS: GrupoInfo[] = FRASES_UTILES.map((situacion) => ({
  id: situacion.id,
  icono: situacion.icono,
  nombre: situacion.nombre,
  detalle: `${situacion.nivel} · ${situacion.frases.length} frases`,
}));

const TOTAL = FRASES_UTILES.reduce((suma, situacion) => suma + situacion.frases.length, 0);

function delGrupo(id: string): FraseUtil[] {
  return FRASES_UTILES.find((situacion) => situacion.id === id)?.frases ?? [];
}

function tarjeta(frase: FraseUtil, pie?: string) {
  return <TarjetaFrase frase={frase} pie={pie} />;
}

interface ListaFrasesProps {
  encabezado: ReactNode;
  /** Situación que se abre al entrar. */
  situacion?: string;
  /** Búsqueda con la que se entra. */
  busqueda?: string;
}

/** Las frases útiles por situación, con búsqueda en inglés y en español. */
export function ListaFrases({ encabezado, situacion, busqueda }: ListaFrasesProps) {
  return (
    <Explorador
      encabezado={encabezado}
      titulo="Frases útiles"
      descripcion={`${TOTAL} frases para usar tal cual, en ${GRUPOS.length} situaciones. Toca el 🔊 para escucharlas.`}
      placeholder="🔍 Buscar: how much, gracias, hotel…"
      nombreGrupos="situaciones"
      nombreItems="frases"
      grupos={GRUPOS}
      grupoInicial={situacion}
      busquedaInicial={busqueda}
      buscar={buscarFrases}
      delGrupo={delGrupo}
      tarjeta={tarjeta}
    />
  );
}
