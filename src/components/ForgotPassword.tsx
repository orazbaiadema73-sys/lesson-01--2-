import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = { onBack: () => void; onSend: (phone: string) => void };

export function ForgotPassword({ onBack, onSend }: Props) {
  const [phone, setPhone] = useState('');
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onBack} style={s.back}><Text style={s.backText}>‹  Назад</Text></TouchableOpacity>
      <View style={s.icon}><Text style={s.iconText}>?</Text></View>
      <Text style={s.title}>Восстановление пароля</Text>
      <Text style={s.subtitle}>Введите номер телефона, чтобы восстановить доступ к аккаунту.</Text>
      <Text style={s.label}>Номер телефона</Text>
      <TextInput style={s.input} value={phone} onChangeText={setPhone}
        placeholder="+7 (___) ___-__-__" keyboardType="phone-pad" />
      <TouchableOpacity style={s.button} onPress={() => onSend(phone)}>
        <Text style={s.buttonText}>Отправить код</Text>
      </TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, padding: 26, justifyContent: 'center' },
  back: { position: 'absolute', top: 24, left: 24, padding: 8 },
  backText: { color: '#6D5A9E', fontSize: 16, fontWeight: '600' },
  icon: { width: 66, height: 66, borderRadius: 22, backgroundColor: '#EDE7FF', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 24 },
  iconText: { fontSize: 34, color: '#8B5CF6', fontWeight: '800' },
  title: { fontSize: 26, fontWeight: '800', color: '#24213A', textAlign: 'center', marginBottom: 12 },
  subtitle: { color: '#8A879B', fontSize: 15, lineHeight: 22, textAlign: 'center', marginBottom: 28 },
  label: { color: '#4A465F', fontWeight: '600', marginBottom: 8 },
  input: { backgroundColor: '#FFFFFF', borderColor: '#E7E2F3', borderWidth: 1, borderRadius: 14, padding: 15, fontSize: 16 },
  button: { backgroundColor: '#8B5CF6', borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 16 },
});
