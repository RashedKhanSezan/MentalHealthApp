import { Heart, MessageCircle, Moon, Sun } from 'lucide-react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../components/ui/GlassCard';
export default function App() {
  return (
    <View style={styles.background}>
      
      <View style={[styles.circle, { top: -50, right: -50, backgroundColor: '#FFD1DC' }]} />
      <View style={[styles.circle, { bottom: 100, left: -50, backgroundColor: '#B2E2F2' }]} />

      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.subGreeting}>How are you feeling today?</Text>

         
          <GlassCard style={styles.heroCard}>
            <View style={styles.row}>
              <View>
                <Text style={styles.cardTitle}>Daily Meditation</Text>
                <Text style={styles.cardSub}>10 mins • Mindfulness</Text>
              </View>
              <Heart color="#FF6B6B" size={28} />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Start Session</Text>
            </TouchableOpacity>
          </GlassCard>

          <Text style={styles.sectionHeader}>Explore Tools</Text>

         
          <View style={styles.grid}>
            <GlassCard style={styles.gridItem}>
              <Moon color="#5D5FEF" size={24} />
              <Text style={styles.toolLabel}>Sleep</Text>
            </GlassCard>
            <GlassCard style={styles.gridItem}>
              <Sun color="#F2C94C" size={24} />
              <Text style={styles.toolLabel}>Mood</Text>
            </GlassCard>
          </View>

          <GlassCard>
            <View style={styles.row}>
              <MessageCircle color="#4CAF50" size={24} />
              <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={styles.cardTitle}>Talk to Sarah</Text>
                <Text style={styles.cardSub}>Your therapist is online</Text>
              </View>
            </View>
          </GlassCard>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F8F9FE',
  },
  circle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    opacity: 0.6,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 20,
  },
  subGreeting: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  heroCard: {
    marginTop: 10,
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  cardSub: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 12,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    color: '#5D5FEF',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 30,
  },
  toolLabel: {
    marginTop: 10,
    fontWeight: '500',
  }
});