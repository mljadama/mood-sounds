import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Audio } from 'expo-av';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { supabase } from '../services/supabaseClient';

export default function MoodButton({ label, soundFile, soundName }) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const playSound = async () => {
    scale.value = withSpring(1.2, {}, () => scale.value = withSpring(1));

    let sound;
    try {
      if (typeof soundFile === 'string') {
        const { sound: s } = await Audio.Sound.createAsync(
          { uri: soundFile },
          { shouldPlay: true }
        );
        sound = s;
      } else {
        const { sound: s } = await Audio.Sound.createAsync(soundFile);
        sound = s;
      }
      await sound.playAsync();
    } catch (e) {
      console.warn('Audio error:', e);
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from('favorite_sounds').insert({
        user_id: user.id,
        sound_name: soundName
      });
    }
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE',
    padding: 16,           // Reduced from 22
    borderRadius: 16,      // Reduced from 20
    margin: 8,             // Reduced from 12
    minWidth: 100,         // Reduced from 140
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: { 
    color: 'white', 
    fontSize: 16,        // Reduced from 18
    fontWeight: '600' 
  },
});
