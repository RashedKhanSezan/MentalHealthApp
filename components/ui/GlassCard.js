import { BlurView } from 'expo-blur';
import { StyleSheet, View } from 'react-native';

export const GlassCard = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <BlurView intensity={60} tint="light" style={styles.blur}>
        {children}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 10,
  },
  blur: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});