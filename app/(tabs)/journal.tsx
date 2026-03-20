import { Frown, Meh, Save, Smile } from 'lucide-react-native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../components/ui/GlassCard';

export default function JournalScreen() {
  const [mood, setMood] = useState('meh');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={[styles.blob, { backgroundColor: '#E0C3FC', top: 50, left: -20 }]} />
      
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Text style={styles.title}>Daily Reflections</Text>
        <Text style={styles.subtitle}>How was your day, Rashed?</Text>

       
        <Text style={styles.sectionTitle}>Current Mood</Text>
        <View style={styles.moodRow}>
          <TouchableOpacity onPress={() => setMood('sad')}>
            <GlassCard style={[styles.moodItem, mood === 'sad' && styles.activeMood]}>
              <Frown color={mood === 'sad' ? '#5D5FEF' : '#888'} size={28} />
            </GlassCard>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMood('meh')}>
            <GlassCard style={[styles.moodItem, mood === 'meh' && styles.activeMood]}>
              <Meh color={mood === 'meh' ? '#5D5FEF' : '#888'} size={28} />
            </GlassCard>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMood('happy')}>
            <GlassCard style={[styles.moodItem, mood === 'happy' && styles.activeMood]}>
              <Smile color={mood === 'happy' ? '#5D5FEF' : '#888'} size={28} />
            </GlassCard>
          </TouchableOpacity>
        </View>

      
        <GlassCard style={styles.inputCard}>
          <TextInput 
            multiline
            placeholder="Write your thoughts here..."
            placeholderTextColor="#AAA"
            style={styles.textInput}
          />
        </GlassCard>

        
        <TouchableOpacity style={styles.saveButton} activeOpacity={0.8}>
          <View style={styles.saveButtonInner}>
            <Save color="#FFF" size={20} />
            <Text style={styles.saveButtonText}>Save Entry</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>History</Text>
        <GlassCard style={styles.historyCard}>
          <Text style={styles.entryDate}>March 20, 2026</Text>
          <Text style={styles.entryPreview}>How are you doing, sezan</Text>
        </GlassCard>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FE' },
  blob: { position: 'absolute', width: 200, height: 200, borderRadius: 100, opacity: 0.4 },
  title: { fontSize: 28, fontWeight: '700', marginTop: 40 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 25, marginBottom: 12 },
  
  moodRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  moodItem: { width: 100, alignItems: 'center', paddingVertical: 15 },
  activeMood: { borderColor: '#5D5FEF', borderWidth: 2, backgroundColor: 'rgba(93, 95, 239, 0.1)' },
  
  inputCard: { height: 200, marginBottom: 20 },
  textInput: { fontSize: 16, color: '#1A1A1A', textAlignVertical: 'top', height: '100%' },
  
  saveButton: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#5D5FEF',
    shadowColor: "#5D5FEF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
    marginVertical: 10,
  },
  saveButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  saveButtonText: { color: '#FFF', fontWeight: '700', fontSize: 16, marginLeft: 10 },
  
  historyCard: { marginBottom: 15 },
  entryDate: { fontWeight: '700', color: '#5D5FEF', fontSize: 14 },
  entryPreview: { color: '#444', marginTop: 8, lineHeight: 20 }
});