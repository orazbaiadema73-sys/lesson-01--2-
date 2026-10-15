import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = { phone: string; onBack: () => void };

export function VerifyCode({ phone, onBack }: Props) {
  const [code, setCode] = useState('');
  const verify = () => {
    if (code === '1234') Alert.alert('Успешно', 'Номер телефона подтверждён (демо).');
    else Alert.alert('Неверный код', 'Демо код: 1234');
  };
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onBack} style={s.back}><Text style={s.backText}>‹  Назад</Text></TouchableOpacity>
      <View style={s.icon}><Text style={s.iconText}>✓</Text></View>
      <Text style={s.title}>Подтвердите номер</Text>
      <Text style={s.subtitle}>Введите код подтверждения для {phone || 'вашего номера'}.</Text>
      <TextInput style={s.input} value={code} onChangeText={setCode} placeholder="Введите код (1234)" keyboardType="number-pad" maxLength={4} />
      <TouchableOpacity style={s.button} onPress={verify}><Text style={s.buttonText}>Подтвердить номер</Text></TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, padding: 26, justifyContent: 'center' },
  back: { position: 'absolute', top: 24, left: 24, padding: 8 },
  backText: { color: '#6D5A9E', fontSize: 16, fontWeight: '600' },
  icon: { width: 66, height: 66, borderRadius: 22, backgroundColor: '#EDE7FF', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 24 },
  iconText: { fontSize: 32, color: '#8B5CF6', fontWeight: '800' },
  title: { fontSize: 26, fontWeight: '800', color: '#24213A', textAlign: 'center', marginBottom: 12 },
  subtitle: { color: '#8A879B', fontSize: 15, lineHeight: 22, textAlign: 'center', marginBottom: 28 },
  input: { backgroundColor: '#FFFFFF', borderColor: '#E7E2F3', borderWidth: 1, borderRadius: 14, padding: 16, fontSize: 18, textAlign: 'center', letterSpacing: 8 },
  button: { backgroundColor: '#8B5CF6', borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 16 },
});
