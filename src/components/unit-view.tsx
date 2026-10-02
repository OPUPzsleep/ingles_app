import { type Href, Redirect, useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { useIrAlInicio } from '@/components/boton-inicio';
import { ChatSimulator } from '@/components/chat-simulator';
import { ANCHO_DOS_COLUMNAS, Columnas } from '@/components/columnas';
import { ContrastCard } from '@/components/contrast-card';
import { ExplainBlock } from '@/components/explain-block';
import { FormasUnidad } from '@/components/formas-unidad';
import { GrammarFormula } from '@/components/grammar-formula';
import { PronunciationCard } from '@/components/pronunciation-card';
import { QuickReviewItem } from '@/components/quick-review-item';
import { ReadingStory } from '@/components/reading-story';
import { ReferenceTable } from '@/components/reference-table';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { FORMAS_UNIDAD } from '@/data/grammar/formas';
import { useTheme } from '@/hooks/use-theme';
import {
  cantidadPreguntasQuizNivel,
  cantidadPreguntasQuizTema,
  etiquetaDeTema,
  etiquetaDeVecina,
  getPronunVocab,
  getUnit,
  seccionDeUnidad,
  vecinasEnRuta,
} from '@/lib/grammar';

type Tab = 'teoria' | 'lectura' | 'consejos';

/** Ancho máximo del contenido de una unidad: dos columnas cómodas de leer, sin estirarse en monitores enormes. */
const ANCHO_MAX_UNIDAD = 1320;

/** Desde este ancho el encabezado, las pestañas y los botones ya no se estiran (tablet vertical, panel medio). */
const ANCHO_HOLGADO = 600;

/** Fórmulas de "Estructura" que solo repiten la forma afirmativa, negativa o de pregunta ("Affirmative", "Negative / Question"…). */
const ETIQUETA_DE_FORMA = /^(affirmative|negative|question|form)(\s*\/\s*(negative|question))?$/i;

function EmptyTab() {
  return (
    <Card>
      <ThemedText type="small" themeColor="textSecondary" style={styles.emptyText}>
        🚧 Todavía no hay contenido en esta sección.
      </ThemedText>
    </Card>
  );
}

interface UnitViewProps {
  num: number;
  /**
   * Si se pasa, "← Unidad anterior" y "Unidad siguiente →" cambian la unidad mostrada sin navegar
   * (así se usa en la columna derecha de Aprender). Si no, abren la pantalla de esa unidad.
   */
  onSelectUnit?: (num: number) => void;
}

/**
 * El contenido completo de una unidad: teoría, zona lectora, consejos y navegación. Sin scroll propio.
 * Con ancho de sobra (monitor, tablet horizontal) reparte el contenido en dos columnas; en celular, igual que siempre.
 */
export function UnitView({ num, onSelectUnit }: UnitViewProps) {
  const router = useRouter();
  const irAlInicio = useIrAlInicio();
  const theme = useTheme();
  const { doneUnits } = useProgress();
  const [tab, setTab] = useState<Tab>('teoria');
  // Ancho estimado con el de la ventana hasta que onLayout da el real (evita un parpadeo al abrir).
  const [ancho, setAncho] = useState(() => Dimensions.get('window').width);
  const ancha = ancho >= ANCHO_DOS_COLUMNAS;
  const holgado = ancho >= ANCHO_HOLGADO;

  const unit = getUnit(num);
  const isDone = doneUnits.includes(num);
  const pv = getPronunVocab(num);
  // Anterior y siguiente siguen el recorrido por niveles (todo A1, luego todo A2…), que es el orden de los números.
  const { anterior: prevNum, siguiente: nextNum } = vecinasEnRuta(num);

  const irAUnidad = (destino: number) =>
    onSelectUnit ? onSelectUnit(destino) : router.push(`/unidad/${destino}`);

  // Un id que no es de una unidad visible (escondida, o un enlace viejo) vuelve al Inicio, como +not-found.
  if (!unit) return <Redirect href="/" />;

  const hasLectura = !!unit.simulatedChat?.length || !!unit.readingText || !!pv?.tips.length;
  const hasConsejos = !!unit.tips?.length || !!unit.flashcards?.length;

  // Al final de la última unidad de un tema (dentro de su nivel) se ofrece el quiz del tema; al final de la última
  // del nivel, el quiz del nivel.
  const seccion = seccionDeUnidad(num);
  const cierraTema = !!seccion && seccion.unidades[seccion.unidades.length - 1] === num;
  const cierraNivel = !nextNum || getUnit(nextNum)?.level !== unit.level;
  const nombreTema = seccion ? etiquetaDeTema(unit.level, seccion.tema).nombre : unit.topic;

  // ─── Teoría ───
  // Con ancho de sobra (desde ~600 px) cada bloque de teoría va en un cuadro, como el resto de tarjetas de la unidad;
  // en celular va suelto, con su barra al lado, para no gastar ancho en bordes.
  const enCuadros = holgado;
  const bloquesTeoria = (
    <View style={enCuadros ? styles.teoriaCuadros : styles.theory}>
      {unit.explain.map((block, i) => (
        <ExplainBlock key={i} block={block} enCuadro={enCuadros} />
      ))}
    </View>
  );
  // Las unidades de verbos muestran arriba sus tres formas (afirmativa, negativa y pregunta): si ya las tienen, en
  // "Estructura" quedan solo las fórmulas que no repiten eso (por ejemplo, "Regular verbs" o "Duration question").
  const formasDeLaUnidad = FORMAS_UNIDAD[num];
  const listaDeFormas = formasDeLaUnidad ? (Array.isArray(formasDeLaUnidad) ? formasDeLaUnidad : [formasDeLaUnidad]) : [];
  const fichas =
    listaDeFormas.length > 0
      ? unit.syntaxChips?.filter((formula) => !ETIQUETA_DE_FORMA.test(formula.label ?? ''))
      : unit.syntaxChips;
  const formulas = !!fichas?.length && <GrammarFormula formulas={fichas} />;
  const tarjetaEstructura = formulas && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        🧩 Estructura
      </ThemedText>
      {formulas}
    </Card>
  );
  const tarjetaContraste = unit.contrastCard && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        🔍 Compara la diferencia
      </ThemedText>
      <ContrastCard data={unit.contrastCard} />
    </Card>
  );
  const tarjetaTabla = unit.table && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        📊 Tabla de referencia rápida
      </ThemedText>
      <ReferenceTable table={unit.table} />
    </Card>
  );

  // ─── Zona lectora ───
  const tarjetaLectura = !!unit.readingText && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        📰 Lectura
      </ThemedText>
      <ReadingStory story={unit.readingText} />
    </Card>
  );
  const tarjetaDialogo = !!unit.simulatedChat?.length && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        💬 Diálogo simulado
      </ThemedText>
      <ChatSimulator messages={unit.simulatedChat} />
    </Card>
  );
  const tarjetaPronunciacion = !!pv?.tips.length && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        🔊 Pronunciación
      </ThemedText>
      {pv.tips.map((tip, i) => (
        <PronunciationCard key={i} tip={tip} />
      ))}
    </Card>
  );

  const presentesLectura = [tarjetaLectura, tarjetaDialogo, tarjetaPronunciacion].filter(Boolean);

  // ─── Consejos ───
  const tarjetaConsejos = !!unit.tips?.length && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        💡 Consejos
      </ThemedText>
      {unit.tips.map((tip, i) => (
        <View key={i} style={[styles.tipBox, { backgroundColor: theme.warningMuted }]}>
          <ThemedText type="small" style={styles.tipText}>
            💡 {tip}
          </ThemedText>
        </View>
      ))}
    </Card>
  );
  const tarjetaRepaso = !!unit.flashcards?.length && (
    <Card>
      <ThemedText type="label" themeColor="primary">
        🧠 Repaso rápido
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        Piensa la respuesta y toca cada pregunta para comprobarla.
      </ThemedText>
      {unit.flashcards.map((fc, i) => (
        <QuickReviewItem key={i} question={fc.front} answer={fc.back} />
      ))}
    </Card>
  );

  return (
    <View onLayout={(evento) => setAncho(evento.nativeEvent.layout.width)} style={styles.cuerpo}>
      <Card>
        <View style={holgado ? styles.encabezadoAncho : styles.encabezado}>
          <View style={styles.tituloUnidad}>
            <ThemedText type="label" themeColor="primary">
              Unit {num} · {nombreTema} · {unit.level}
            </ThemedText>
            <ThemedText type="cardTitle">{unit.title}</ThemedText>
          </View>
          <Button
            variant="primary"
            onPress={() => router.push(`/quiz/unidad/${num}`)}
            style={holgado ? styles.botonAncho : undefined}>
            {isDone ? '🔁 Repetir quiz' : '✏️ Quiz de esta unidad'}
          </Button>
        </View>
      </Card>

      <View style={styles.tabRow}>
        <Button
          variant={tab === 'teoria' ? 'primary' : 'secondary'}
          onPress={() => setTab('teoria')}
          style={holgado ? styles.tabButtonAncho : styles.tabButton}>
          📖 Teoría
        </Button>
        <Button
          variant={tab === 'lectura' ? 'primary' : 'secondary'}
          onPress={() => setTab('lectura')}
          style={holgado ? styles.tabButtonAncho : styles.tabButton}>
          💬 Zona Lectora
        </Button>
        <Button
          variant={tab === 'consejos' ? 'primary' : 'secondary'}
          onPress={() => setTab('consejos')}
          style={holgado ? styles.tabButtonAncho : styles.tabButton}>
          💡 Consejos
        </Button>
      </View>

      {tab === 'teoria' && listaDeFormas.map((formas, i) => <FormasUnidad key={i} formas={formas} ancha={ancha} />)}

      {tab === 'teoria' &&
        (ancha ? (
          <Columnas
            principal={bloquesTeoria}
            lateral={
              formulas || tarjetaContraste || tarjetaTabla ? (
                <>
                  {tarjetaEstructura}
                  {tarjetaContraste}
                  {tarjetaTabla}
                </>
              ) : null
            }
          />
        ) : (
          <>
            {enCuadros ? (
              <>
                {bloquesTeoria}
                {tarjetaEstructura}
              </>
            ) : (
              <View style={styles.theory}>
                {unit.explain.map((block, i) => (
                  <ExplainBlock key={i} block={block} />
                ))}
                {formulas}
              </View>
            )}
            {tarjetaContraste}
            {tarjetaTabla}
          </>
        ))}

      {tab === 'lectura' &&
        (hasLectura ? (
          ancha ? (
            // Con dos o tres bloques se reparten en dos columnas parejas; con uno solo, no se estira.
            presentesLectura.length === 3 ? (
              <Columnas
                principal={
                  <>
                    {tarjetaLectura}
                    {tarjetaPronunciacion}
                  </>
                }
                lateral={tarjetaDialogo}
                proporcion={[1, 1]}
              />
            ) : presentesLectura.length === 2 ? (
              <Columnas principal={presentesLectura[0]} lateral={presentesLectura[1]} proporcion={[1, 1]} />
            ) : (
              <Columnas principal={presentesLectura[0]} />
            )
          ) : (
            <>
              {tarjetaLectura}
              {tarjetaDialogo}
              {tarjetaPronunciacion}
            </>
          )
        ) : (
          <EmptyTab />
        ))}

      {tab === 'consejos' &&
        (hasConsejos ? (
          ancha ? (
            tarjetaConsejos ? (
              <Columnas principal={tarjetaConsejos} lateral={tarjetaRepaso || null} proporcion={[1, 1]} />
            ) : (
              <Columnas principal={tarjetaRepaso} />
            )
          ) : (
            <>
              {tarjetaConsejos}
              {tarjetaRepaso}
            </>
          )
        ) : (
          <EmptyTab />
        ))}

      {/* Al final de cada unidad: más para profundizar y sus propios ejercicios. */}
      {!!unit.relacionados?.length && (
        <Card>
          <ThemedText type="label" themeColor="primary">
            📚 Para profundizar
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Otras unidades y páginas de Gramática del mismo tema.
          </ThemedText>
          {unit.relacionados.map((relacionado) => (
            <Button
              key={relacionado.ruta}
              variant="secondary"
              onPress={() => router.push(relacionado.ruta as Href)}
              style={holgado ? styles.botonDeTarjetaAncho : undefined}>
              {relacionado.etiqueta}
            </Button>
          ))}
        </Card>
      )}

      {unit.quiz.length > 0 && (
        <Card>
          <ThemedText type="label" themeColor="primary">
            ✏️ Ponte a prueba
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {`${unit.quiz.length} ejercicios de esta unidad: contestas y te explico cada respuesta.`}
          </ThemedText>
          <Button
            variant={isDone ? 'secondary' : 'primary'}
            onPress={() => router.push(`/quiz/unidad/${num}`)}
            style={holgado ? styles.botonDeTarjetaAncho : undefined}>
            {isDone ? '🔁 Repetir los ejercicios' : `✏️ Hacer los ${unit.quiz.length} ejercicios`}
          </Button>
        </Card>
      )}

      {/* La última unidad de cada tema (dentro de su nivel) cierra con el quiz de ese tema (en el curso A1, el examen del bloque)… */}
      {cierraTema && seccion && (
        <Card>
          <ThemedText type="label" themeColor="primary">
            {seccion.tema.examen ? `🎯 Fin del ${nombreTema}` : `🎯 Fin del tema ${nombreTema}`}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {seccion.tema.examen
              ? `Es la última unidad de este bloque. Ciérralo con su examen de ${cantidadPreguntasQuizTema(unit.level, seccion)} preguntas, distintas a las de las unidades.`
              : `Es la última unidad de este tema en el nivel ${unit.level}. Ciérralo con su quiz de ${cantidadPreguntasQuizTema(unit.level, seccion)} preguntas.`}
          </ThemedText>
          <Button
            variant="primary"
            onPress={() => router.push(`/quiz/tema/${unit.level}/${encodeURIComponent(seccion.tema.name)}`)}
            style={holgado ? styles.botonDeTarjetaAncho : undefined}>
            {seccion.tema.examen ? '🎯 Hacer el examen del bloque' : `🎯 Quiz de ${nombreTema}`}
          </Button>
        </Card>
      )}

      {/* …y la última de cada nivel, con el quiz de ese nivel. */}
      {cierraNivel && (
        <Card>
          <ThemedText type="label" themeColor="primary">
            🏁 Fin del nivel {unit.level}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Es la última unidad de este nivel. Ciérralo con su quiz de {cantidadPreguntasQuizNivel(unit.level)} preguntas.
          </ThemedText>
          <Button
            variant={cierraTema ? 'secondary' : 'primary'}
            onPress={() => router.push(`/quiz/nivel/${unit.level}`)}
            style={holgado ? styles.botonDeTarjetaAncho : undefined}>
            {`🏁 Quiz del nivel ${unit.level}`}
          </Button>
        </Card>
      )}

      <View style={styles.navRow}>
        {prevNum ? (
          <Button
            variant="secondary"
            onPress={() => irAUnidad(prevNum)}
            style={holgado ? styles.navButtonAncho : styles.navButton}>
            {`← ${etiquetaDeVecina(prevNum, unit.level)}`}
          </Button>
        ) : (
          <View style={styles.navButton} />
        )}
        {nextNum && (
          <Button
            variant="primary"
            onPress={() => irAUnidad(nextNum)}
            style={holgado ? styles.navButtonAncho : styles.navButton}>
            {`${etiquetaDeVecina(nextNum, unit.level)} →`}
          </Button>
        )}
      </View>

      <Button variant="secondary" onPress={irAlInicio} style={holgado ? styles.botonInicioAncho : undefined}>
        🏠 Volver al inicio
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  cuerpo: {
    gap: Spacing.three,
    width: '100%',
    maxWidth: ANCHO_MAX_UNIDAD,
    alignSelf: 'center',
  },
  // Encabezado: en celular todo apilado; en pantalla ancha, título a la izquierda y el botón a la derecha.
  encabezado: {
    gap: Spacing.two,
  },
  encabezadoAncho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.four,
  },
  tituloUnidad: {
    gap: Spacing.two,
    flexShrink: 1,
  },
  botonAncho: {
    minWidth: 240,
  },
  // Botón dentro de una tarjeta (fin de tema, fin de nivel): en pantalla ancha mide lo que su texto, sin estirarse.
  botonDeTarjetaAncho: {
    alignSelf: 'flex-start',
    minWidth: 240,
  },
  tabRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  tabButton: {
    flex: 1,
  },
  // En pantalla ancha las pestañas miden lo que su texto, alineadas a la izquierda, sin estirarse.
  tabButtonAncho: {
    minWidth: 170,
  },
  theory: {
    gap: Spacing.four,
    paddingVertical: Spacing.two,
  },
  // Los cuadros de teoría van separados como las demás tarjetas de la unidad.
  teoriaCuadros: {
    gap: Spacing.three,
  },
  tipBox: {
    borderRadius: Radius.small,
    padding: Spacing.three,
  },
  tipText: {
    lineHeight: 21,
  },
  emptyText: {
    textAlign: 'center',
  },
  navRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 1,
  },
  navButtonAncho: {
    minWidth: 220,
  },
  // En pantalla ancha el botón de Inicio mide lo que su texto, a la izquierda, sin estirarse.
  botonInicioAncho: {
    alignSelf: 'flex-start',
    minWidth: 220,
  },
});
