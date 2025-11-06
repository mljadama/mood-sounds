import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import MoodButton from '../components/MoodButton';
import { supabase } from '../services/supabaseClient';


const chimeSound = require('../assets/sounds/Chime.mp3');
const dreamSound = require('../assets/sounds/Dream.mp3');
const waterSound = require('../assets/sounds/water.mp3');

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.replace('Login');
  };

  const getSound = (asset, filename) => {
    return Platform.OS === 'web' ? `/sounds/${filename}` : asset;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Mood</Text>

      <View style={styles.grid}>
        <MoodButton
          label="Happy"
          soundFile={getSound(chimeSound, 'Chime.mp3')}
          soundName="chime"
        />
        <MoodButton
          label="Calm"
          soundFile={getSound(dreamSound, 'Dream.mp3')}
          soundName="dream"
        />
        <MoodButton
          label="Energized"
          soundFile={getSound(waterSound, 'water.mp3')}
          soundName="water"
        />
      </View>

      <View style={styles.actions}>
        <Button title="Favorites" onPress={() => navigation.navigate('Favorites')} />
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 28, textAlign: 'center', marginVertical: 20, fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  actions: { marginTop: 30, gap: 10 },
});
