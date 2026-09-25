import { memo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ejemplos, Verbo } from '@/lib/verbos';

/** Renglón compacto de un verbo; al tocarlo se expande con todas sus formas y ejemplos. */
export const VerbRow = memo(function VerbRow({ verbo }: { verbo: Verbo }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const ej = ejemplos(verbo);

  const forma = (label: string, value: string, aprox?: string) => (
    <View style={[styles.formCell, { backgroundColor: theme.backgroundSelected }]}>
      <ThemedText type="label" themeColor="textSecondary">
        {label}
      </ThemedText>
      <ThemedText type="smallBold">{value}</ThemedText>
      {!!aprox && (
        <ThemedText type="small" themeColor="textSecondary">
          {aprox}
        </ThemedText>
      )}
    </View>
  );

  const ejemplo = (label: string, value: string) => (
    <View style={styles.exampleRow}>
      <ThemedText type="small" themeColor="textSecondary" style={styles.exampleLabel}>
        {label}
      </ThemedText>
      <ThemedText type="small" style={styles.exampleText}>
        {value}
      </ThemedText>
    </View>
  );

  return (
    <Pressable
      onPress={() => setOpen((o) => !o)}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: theme.backgroundElement, borderColor: theme.border },
        pressed && styles.pressed,
      ]}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <ThemedText type="cardTitle">
            {verbo.base}{' '}
            <ThemedText type="small" themeColor="textSecondary">
              {verbo.aprox} · {verbo.es}
            </ThemedText>
          </ThemedText>
          <ThemedText type="small" themeColor="primary">
            {verbo.base} → {verbo.pasado} → {verbo.participio}
          </ThemedText>
        </View>
        <ThemedText themeColor="textSecondary">{open ? '▲' : '▼'}</ThemedText>
      </View>

      {open && (
        <View style={styles.body}>
          <View style={styles.formsGrid}>
            {forma('Presente', `${verbo.base} / ${verbo.tercera}`, verbo.aprox)}
            {forma('Pasado', verbo.pasado, verbo.aproxPasado)}
            {forma('Participio', verbo.participio, verbo.aproxParticipio)}
            {forma('-ing', verbo.ing)}
          </View>

          <View style={styles.examples}>
            {ejemplo('🕐 Presente', ej.presente)}
            {ejemplo('🕐 Ahora', ej.continuo)}
            {ejemplo('⏪ Pasado', ej.pasado)}
            {ejemplo('✔️ Perfecto', ej.perfecto)}
            {ejemplo('⏩ Futuro', ej.futuro)}
          </View>

          <View style={styles.footer}>
            <ThemedText type="small" themeColor="textSecondary">
              {verbo.irregular ? '⚠️ Irregular: hay que memorizarlo' : '✅ Regular: solo agrega -ed'}
            </ThemedText>
            <SpeakButton text={`${verbo.base}, ${verbo.pasado.replace(' / ', ', ')}, ${verbo.participio.replace(' / ', ', ')}`} size={20} />
          </View>
        </View>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  row: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.three,
  },
  pressed: {
    opacity: 0.8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  headerText: {
    flex: 1,
    gap: Spacing.half,
  },
  body: {
    marginTop: Spacing.three,
    gap: Spacing.three,
  },
  formsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  formCell: {
    flexGrow: 1,
    flexBasis: '45%',
    borderRadius: Radius.small,
    padding: Spacing.two,
    gap: Spacing.half,
  },
  examples: {
    gap: Spacing.one,
  },
  exampleRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  exampleLabel: {
    width: 96,
  },
  exampleText: {
    flex: 1,
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
});
