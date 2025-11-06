import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';


import { Audio } from 'expo-av';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const unlockAudio = async () => {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
      });
    };

    const handler = () => {
      unlockAudio();
      document.removeEventListener('click', handler);
      document.removeEventListener('touchstart', handler);
    };

    // Works on both web and mobile
    if (typeof document !== 'undefined') {
      document.addEventListener('click', handler);
      document.addEventListener('touchstart', handler);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('click', handler);
        document.removeEventListener('touchstart', handler);
      }
    };
  }, []);

  return <AppNavigator />;
}
