import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, Text, TextInput,
  TouchableOpacity, View, ScrollView, Alert,
} from 'react-native';
import { Login } from './src/components/Login';
import { ForgotPassword } from './src/components/ForgotPassword';
import { Register } from './src/components/Register';
import { VerifyCode } from './src/components/VerifyCode';

type Screen = 'login' | 'forgot' | 'register' | 'verify';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [phone, setPhone] = useState('');

  const sendCode = (value: string) => {
    setPhone(value);
    setScreen('verify');
    Alert.alert('Код жіберілді', 'Демо нұсқа: растау коды — 1234');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F7FF" />
      {screen === 'login' && (
        <Login
          onForgot={() => setScreen('forgot')}
          onRegister={() => setScreen('register')}
          onLogin={(number) => Alert.alert('Кіру', `Телефон: ${number}`)}
        />
      )}
      {screen === 'forgot' && (
        <ForgotPassword onBack={() => setScreen('login')} onSend={sendCode} />
      )}
      {screen === 'register' && (
        <Register onBack={() => setScreen('login')} onRegister={sendCode} />
      )}
      {screen === 'verify' && (
        <VerifyCode phone={phone} onBack={() => setScreen('forgot')} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F8F7FF' },
});
