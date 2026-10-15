import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

type Props = {
  onForgot: () => void;
  onRegister: () => void;
  onLogin: (phone: string) => void;
};

export function Login({ onForgot, onRegister, onLogin }: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps="handled">
      <View style={s.logo}><Text style={s.logoText}>S</Text></View>
      <Text style={s.title}>Привет, с возвращением!</Text>
      <Text style={s.subtitle}>Войдите в свой аккаунт</Text>

      <Text style={s.label}>Номер телефона</Text>
      <TextInput style={s.input} value={phone} onChangeText={setPhone}
        placeholder="+7 (___) ___-__-__" keyboardType="phone-pad" />

      <Text style={s.label}>Пароль</Text>
      <TextInput style={s.input} value={password} onChangeText={setPassword}
        placeholder="Введите пароль" secureTextEntry />

      <TouchableOpacity style={s.forgot} onPress={onForgot}>
        <Text style={s.link}>Забыли пароль?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={() => onLogin(phone)}>
        <Text style={s.buttonText}>Войти</Text>
      </TouchableOpacity>

      <View style={s.bottom}>
        <Text style={s.bottomText}>У вас нет аккаунта? </Text>
        <TouchableOpacity onPress={onRegister}><Text style={s.link}>Зарегистрироваться</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 26, paddingVertical: 32 },
  logo: { alignSelf: 'center', width: 68, height: 68, borderRadius: 22, backgroundColor: '#8B5CF6', alignItems: 'center', justifyContent: 'center', marginBottom: 28 },
  logoText: { color: '#FFFFFF', fontSize: 36, fontWeight: '800' },
  title: { fontSize: 27, fontWeight: '800', color: '#24213A', marginBottom: 8 },
  subtitle: { color: '#8A879B', fontSize: 15, marginBottom: 30 },
  label: { color: '#4A465F', fontWeight: '600', marginBottom: 8, marginTop: 12 },
  input: { backgroundColor: '#FFFFFF', borderColor: '#E7E2F3', borderWidth: 1, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 15, fontSize: 16, color: '#24213A' },
  forgot: { alignSelf: 'flex-end', marginTop: 14, marginBottom: 22 },
  link: { color: '#8B5CF6', fontWeight: '700', fontSize: 14 },
  button: { backgroundColor: '#8B5CF6', borderRadius: 14, paddingVertical: 16, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 16 },
  bottom: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 28 },
  bottomText: { color: '#8A879B', fontSize: 14 },
});
