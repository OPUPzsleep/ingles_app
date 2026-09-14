import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ReadingStory as ReadingStoryData } from '@/types/grammar';

export function ReadingStory({ story }: { story: ReadingStoryData }) {
  const theme = useTheme();
  const [spanish, setSpanish] = useState(false);
  const shown = spanish ? (story.translation ?? story.body) : story.body;

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

      {!!story.title && <ThemedText type="cardTitle">{story.title}</ThemedText>}

      <View style={styles.bodyRow}>
        <ThemedText style={styles.body}>{shown}</ThemedText>
        <SpeakButton text={story.body} size={16} />
      </View>
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
  bodyRow: { flexDirection: 'row', gap: Spacing.two },
  body: { flex: 1, lineHeight: 24 },
});
