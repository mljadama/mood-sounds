import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AuthForm from '../components/AuthForm';
import { supabase } from '../services/supabaseClient';

export default function SignupScreen({ navigation }) {
  const handleSignup = async (email, password) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert('Error', error.message);
    else {
      Alert.alert('Success', 'Account created! Please login.');
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Mood Sounds</Text>

      
      <AuthForm onSubmit={handleSignup} buttonText="Sign Up" />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#6200EE',
  },

  backButton: {
    height: 56,
    width: '100%',
    backgroundColor: '#6200EE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
