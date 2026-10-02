import { type ReactNode, useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { CampoBusqueda } from '@/components/vocabulario/campo-busqueda';
import { anchoMaximo, columnasPara } from '@/components/vocabulario/comun';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Resultado } from '@/lib/buscar-vocabulario';
import { normalizar } from '@/lib/texto';

/** Un grupo para elegir en la cuadrícula (un tema de palabras, una situación de frases). */
export interface GrupoInfo {
  id: string;
  icono: string;
  nombre: string;
  /** Línea pequeña bajo el nombre: el nivel y cuántos elementos tiene. */
  detalle: string;
}

interface ExploradorProps<T> {
  /** Lo que va arriba del todo (el selector Verbos / Palabras / Frases). */
  encabezado: ReactNode;
  titulo: string;
  descripcion: string;
  /** Aviso en letra pequeña bajo la descripción (cómo leer la pronunciación). */
  nota?: string;
  placeholder: string;
  /** Cómo se llaman los grupos, en plural y minúsculas: «temas», «situaciones». */
  nombreGrupos: string;
  /** Cómo se llaman los elementos, en plural y minúsculas: «palabras», «frases». */
  nombreItems: string;
  grupos: GrupoInfo[];
  grupoInicial?: string;
  busquedaInicial?: string;
  /** Busca en todos los grupos; devuelve lo que coincide, lo mejor primero. */
  buscar: (consulta: string) => Resultado<T>[];
  delGrupo: (grupo: string) => T[];
  /** Dibuja un elemento; `pie` dice de qué grupo viene cuando es un resultado de búsqueda. */
  tarjeta: (item: T, pie?: string) => ReactNode;
}

type Celda<T> = { tipo: 'grupo'; grupo: GrupoInfo } | { tipo: 'item'; item: T; pie?: string };

interface Fila<T> {
  clave: string;
  celdas: (Celda<T> | null)[];
}

/** Reparte las celdas en filas de `columnas`; la última se completa con huecos para que no se estire. */
function enFilas<T>(celdas: Celda<T>[], columnas: number): Fila<T>[] {
  const filas: Fila<T>[] = [];
  for (let i = 0; i < celdas.length; i += columnas) {
    const fila: (Celda<T> | null)[] = celdas.slice(i, i + columnas);
    while (fila.length < columnas) fila.push(null);
    filas.push({ clave: String(i), celdas: fila });
  }
  return filas;
}

/** Cuántas columnas de grupos caben según el ancho (en celular, 2). */
function columnasDeGrupos(ancho: number) {
  if (ancho >= 1500) return 5;
  if (ancho >= 1000) return 4;
  if (ancho >= 600) return 3;
  return 2;
}

const MINIMO_BUSQUEDA = 2;

function Separador() {
  return <View style={{ height: Spacing.two }} />;
}

/**
 * Lista de vocabulario para explorar: una cuadrícula de grupos (temas o situaciones), los elementos
 * de uno al abrirlo y una búsqueda que mira en todos (o solo en el grupo abierto).
 */
export function Explorador<T>({
  encabezado,
  titulo,
  descripcion,
  nota,
  placeholder,
  nombreGrupos,
  nombreItems,
  grupos,
  grupoInicial,
  busquedaInicial,
  buscar,
  delGrupo,
  tarjeta,
}: ExploradorProps<T>) {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const columnas = columnasPara(width);
  const [consulta, setConsulta] = useState(busquedaInicial ?? '');
  const [grupoId, setGrupoId] = useState<string | null>(
    grupos.some((g) => g.id === grupoInicial) ? (grupoInicial ?? null) : null
  );

  const grupoActual = grupos.find((g) => g.id === grupoId) ?? null;
  const buscando = normalizar(consulta).trim().length >= MINIMO_BUSQUEDA;

  const resultados = useMemo(() => {
    if (!buscando) return [];
    const todos = buscar(consulta);
    return grupoId ? todos.filter((r) => r.grupo === grupoId) : todos;
  }, [buscando, consulta, grupoId, buscar]);

  const filas = useMemo(() => {
    if (buscando) {
      const celdas = resultados.map<Celda<T>>(({ item, grupo }) => {
        const info = grupoId ? undefined : grupos.find((g) => g.id === grupo);
        return { tipo: 'item', item, pie: info ? `${info.icono} ${info.nombre}` : undefined };
      });
      return enFilas(celdas, columnas);
    }
    if (grupoId) {
      return enFilas(
        delGrupo(grupoId).map<Celda<T>>((item) => ({ tipo: 'item', item })),
        columnas
      );
    }
    return enFilas(
      grupos.map<Celda<T>>((grupo) => ({ tipo: 'grupo', grupo })),
      columnasDeGrupos(width)
    );
  }, [buscando, resultados, grupoId, grupos, delGrupo, columnas, width]);

  const anchoMax = anchoMaximo(columnas);

  return (
    <FlatList
      // Al abrir o cerrar un grupo la lista empieza de nuevo desde arriba.
      key={grupoId ?? 'grupos'}
      data={filas}
      keyExtractor={(fila) => fila.clave}
      contentContainerStyle={[styles.content, { maxWidth: anchoMax }]}
      keyboardShouldPersistTaps="handled"
      ItemSeparatorComponent={Separador}
      ListHeaderComponent={
        // El encabezado no se estira: con varias columnas se queda a un ancho cómodo.
        <View style={columnas > 1 ? styles.cabeceraAncha : undefined}>
          {encabezado}
          {grupoActual ? (
            <>
              <Pressable
                onPress={() => setGrupoId(null)}
                accessibilityRole="button"
                style={[styles.volver, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
                <ThemedText type="smallBold">← Todos los {nombreGrupos}</ThemedText>
              </Pressable>
              <ThemedText type="subtitle">
                {grupoActual.icono} {grupoActual.nombre}
              </ThemedText>
              <ThemedText themeColor="textSecondary" style={styles.espacio}>
                {grupoActual.detalle}
              </ThemedText>
            </>
          ) : (
            <>
              <ThemedText type="subtitle">{titulo}</ThemedText>
              <ThemedText themeColor="textSecondary" style={styles.espacio}>
                {descripcion}
              </ThemedText>
            </>
          )}
          {!!nota && (
            <ThemedText type="small" themeColor="textSecondary" style={styles.espacio}>
              {nota}
            </ThemedText>
          )}
          <CampoBusqueda
            valor={consulta}
            onChange={setConsulta}
            placeholder={grupoActual ? `🔍 Buscar en ${grupoActual.nombre.toLowerCase()}…` : placeholder}
          />
          {buscando && (
            <ThemedText type="small" themeColor="textSecondary" style={styles.espacio}>
              {resultados.length} {resultados.length === 1 ? 'resultado' : 'resultados'}
            </ThemedText>
          )}
        </View>
      }
      ListEmptyComponent={
        <ThemedText themeColor="textSecondary">
          No encontré &quot;{consulta.trim()}&quot; en {nombreItems}. Prueba en inglés o en español, o con solo una
          parte de la palabra.
        </ThemedText>
      }
      renderItem={({ item: fila }) => (
        <View style={styles.fila}>
          {fila.celdas.map((celda, i) =>
            celda ? (
              <View key={i} style={styles.celda}>
                {celda.tipo === 'grupo' ? (
                  <TarjetaGrupo grupo={celda.grupo} onPress={() => setGrupoId(celda.grupo.id)} />
                ) : (
                  tarjeta(celda.item, celda.pie)
                )}
              </View>
            ) : (
              <View key={i} style={styles.celda} />
            )
          )}
        </View>
      )}
    />
  );
}

function TarjetaGrupo({ grupo, onPress }: { grupo: GrupoInfo; onPress: () => void }) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.grupo,
        { backgroundColor: theme.backgroundElement, borderColor: theme.border },
        pressed && styles.pulsado,
      ]}>
      <ThemedText style={styles.grupoIcono}>{grupo.icono}</ThemedText>
      <View style={styles.grupoTexto}>
        <ThemedText type="smallBold">{grupo.nombre}</ThemedText>
        <ThemedText type="label" themeColor="textSecondary" style={styles.grupoDetalle}>
          {grupo.detalle}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.four,
    alignSelf: 'center',
    width: '100%',
  },
  cabeceraAncha: {
    maxWidth: MaxContentWidth,
  },
  espacio: {
    marginBottom: Spacing.three,
  },
  volver: {
    alignSelf: 'flex-start',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.pill,
    borderWidth: 1,
    marginBottom: Spacing.three,
  },
  fila: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  // Las celdas de una fila miden lo mismo de ancho; el hueco de la última fila las mantiene del mismo tamaño.
  celda: {
    flex: 1,
  },
  grupo: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderWidth: 1,
    borderRadius: Radius.medium,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.three,
  },
  grupoIcono: {
    fontSize: 26,
    lineHeight: 32,
  },
  grupoTexto: {
    flex: 1,
    gap: Spacing.half,
  },
  // En minúsculas cabe en una línea en el celular («A1 · 44 palabras»).
  grupoDetalle: {
    textTransform: 'none',
    letterSpacing: 0,
  },
  pulsado: {
    opacity: 0.8,
  },
});
