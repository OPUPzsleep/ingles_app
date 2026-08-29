export type GramBlock =
  | { type: 'def'; heading?: string; body: string }
  | { type: 'example'; text: string; transl?: string }
  | { type: 'compare'; esLabel: string; esBody: string; enLabel: string; enBody: string }
  | { type: 'tip'; body: string }
  | { type: 'warn'; body: string }
  | { type: 'table'; cols: string[]; rows: string[][] };

export interface GramCategory {
  id: string;
  name: string;
  icon: string;
  desc: string;
}

export interface GramConcept {
  id: string;
  cat: string;
  title: string;
  tag: string;
  blocks: GramBlock[];
}
