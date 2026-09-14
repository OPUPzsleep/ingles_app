import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ChatMessage } from '@/types/grammar';

export function ChatSimulator({ messages }: { messages: ChatMessage[] }) {
  const theme = useTheme();
  const [spanish, setSpanish] = useState(false);

  return (
    <View style={styles.wrap}>
      <View style={styles.toggleRow}>
        <ThemedText type="smallBold" themeColor={spanish ? 'textSecondary' : 'primary'}>
          EN
        </ThemedText>
        <Switch
          value={spanish}
          onValueChange={setSpanish}
          trackColor={{ true: theme.primary, false: theme.backgroundSelected }}
        />
        <ThemedText type="smallBold" themeColor={spanish ? 'primary' : 'textSecondary'}>
          ES
        </ThemedText>
      </View>

      {messages.map((msg, i) => {
        const isUser = msg.speaker === 'user';
        const shown = spanish ? (msg.translation ?? msg.text) : msg.text;
        return (
          <View key={i} style={[styles.row, { justifyContent: isUser ? 'flex-end' : 'flex-start' }]}>
            <View
              style={[
                styles.bubble,
                isUser
                  ? { backgroundColor: theme.primaryMuted, borderColor: theme.primary }
                  : { backgroundColor: theme.backgroundSelected, borderColor: theme.border },
              ]}>
              <View style={styles.bubbleRow}>
                <ThemedText type="small" style={styles.bubbleText}>
                  {shown}
                </ThemedText>
                <SpeakButton text={msg.text} size={14} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: Spacing.two },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    marginBottom: Spacing.one,
  },
  row: { flexDirection: 'row' },
  bubble: {
    maxWidth: '85%',
    borderRadius: Radius.medium,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  bubbleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two, flexShrink: 1 },
  bubbleText: { flexShrink: 1 },
});
