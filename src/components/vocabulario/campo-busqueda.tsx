import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface CampoBusquedaProps {
  valor: string;
  onChange: (texto: string) => void;
  placeholder: string;
}

/** Caja de búsqueda de Vocabulario, con una ✕ para borrar lo escrito. */
export function CampoBusqueda({ valor, onChange, placeholder }: CampoBusquedaProps) {
  const theme = useTheme();

  return (
    <View style={styles.campo}>
      <TextInput
        value={valor}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={theme.textSecondary}
        autoCapitalize="none"
        autoCorrect={false}
        style={[
          styles.search,
          { backgroundColor: theme.backgroundSelected, color: theme.text, borderColor: theme.border },
        ]}
      />
      {valor.length > 0 && (
        <Pressable
          onPress={() => onChange('')}
          accessibilityRole="button"
          accessibilityLabel="Borrar la búsqueda"
          hitSlop={8}
          style={styles.borrar}>
          <ThemedText themeColor="textSecondary">✕</ThemedText>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    justifyContent: 'center',
    marginBottom: Spacing.three,
  },
  search: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    paddingLeft: Spacing.three,
    paddingRight: Spacing.five,
    paddingVertical: Spacing.two,
    fontSize: 15,
  },
  borrar: {
    position: 'absolute',
    right: Spacing.three,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
