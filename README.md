# Mood Sounds

A cross-platform mood-based soundboard app
Built with React Native + Expo + Supabase

Tap a mood → hear a calming sound ️

Live demo: npx expo start → Scan QR with Expo Go


<div align="center">
  <img src="screenshots/login.png" width="300" alt="Login"/>
  <img src="screenshots/home.png" width="300" alt="Home"/>
  <img src="screenshots/favorites.png" width="300" alt="Favorites"/>
</div>

## Features
- Email login & signup
- 3 relaxing sounds (Happy, Calm, Energized)
- Smooth button animations (`react-native-reanimated`)
- Save favorites in real-time (PostgreSQL + RLS)
- Works on Android • iOS • Web


## Tech Stack
- React Native** + **Expo**
- Supabase (Auth + PostgreSQL)
- react-native-reanimated (animations)
- expo-av (sound playback)

## How to Run
git clone https://github.com/mljadama/mood-sounds.git
cd mood-sounds
npm install
npx expo start --clear

