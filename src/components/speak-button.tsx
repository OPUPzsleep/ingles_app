import * as Speech from 'expo-speech';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { ThemedText } from '@/components/themed-text';

interface SpeakButtonProps {
  text: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  /** Velocidad de la voz (1 = normal, 0.6 = lento). */
  rate?: number;
}

export function SpeakButton({ text, size = 16, style, rate }: SpeakButtonProps) {
  const onPress = async () => {
    await Speech.stop();
    Speech.speak(text, { language: 'en-US', rate });
  };

  return (
    <Pressable onPress={onPress} hitSlop={8} style={[styles.button, style]}>
      <ThemedText style={{ fontSize: size }}>🔊</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
