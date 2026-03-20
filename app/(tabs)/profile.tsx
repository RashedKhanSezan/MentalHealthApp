import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GlassCard } from '../../components/ui/GlassCard';
import { Settings, ShieldCheck, Bell } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.blob, { backgroundColor: '#B2E2F2', bottom: 50, right: -20 }]} />
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.userName}>Rashed Mosharraf</Text>
        <Text style={styles.userStatus}>Premium Member</Text>
      </View>

      <View style={{ padding: 20 }}>
        <GlassCard style={styles.menuItem}>
          <Settings color="#666" size={20} />
          <Text style={styles.menuText}>Account Settings</Text>
        </GlassCard>
        
        <GlassCard style={styles.menuItem}>
          <ShieldCheck color="#666" size={20} />
          <Text style={styles.menuText}>Privacy & Security</Text>
        </GlassCard>

        <GlassCard style={styles.menuItem}>
          <Bell color="#666" size={20} />
          <Text style={styles.menuText}>Notification Preferences</Text>
        </GlassCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FE' },
  blob: { position: 'absolute', width: 250, height: 250, borderRadius: 125, opacity: 0.3 },
  header: { alignItems: 'center', marginTop: 60, marginBottom: 20 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#DDD', marginBottom: 10 },
  userName: { fontSize: 22, fontWeight: '700' },
  userStatus: { color: '#5D5FEF', fontWeight: '500' },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: 15, marginVertical: 5 },
  menuText: { marginLeft: 15, fontSize: 16, fontWeight: '500' }
});