import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AuthForm from '../components/AuthForm';
import { supabase } from '../services/supabaseClient';

export default function LoginScreen({ navigation }) {
  const handleLogin = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Error', error.message);
    else navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Sounds</Text>

      <AuthForm onSubmit={handleLogin} buttonText="Login" />

      {/* CREATE ACCOUNT – SAME SIZE AS LOGIN */}
      <TouchableOpacity
        style={styles.createAccountBtn}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
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
  createAccountBtn: {
    height: 56,
    width: '100%',
    backgroundColor: '#6200EE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});