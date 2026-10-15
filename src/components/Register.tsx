import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

type Props = { onBack: () => void; onRegister: (phone: string) => void };

export function Register({ onBack, onRegister }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps="handled">
      <TouchableOpacity onPress={onBack} style={s.back}><Text style={s.backText}>‹  Назад</Text></TouchableOpacity>
      <Text style={s.title}>Создать аккаунт</Text>
      <Text style={s.subtitle}>Заполните данные для регистрации</Text>
      <Text style={s.label}>Имя</Text>
      <TextInput style={s.input} value={name} onChangeText={setName} placeholder="Ваше имя" />
      <Text style={s.label}>Номер телефона</Text>
      <TextInput style={s.input} value={phone} onChangeText={setPhone} placeholder="+7 (___) ___-__-__" keyboardType="phone-pad" />
      <Text style={s.label}>Пароль</Text>
      <TextInput style={s.input} value={password} onChangeText={setPassword} placeholder="Придумайте пароль" secureTextEntry />
      <TouchableOpacity style={s.button} onPress={() => onRegister(phone)}>
        <Text style={s.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <View style={s.bottom}><Text style={s.bottomText}>Уже есть аккаунт? </Text><TouchableOpacity onPress={onBack}><Text style={s.link}>Войти</Text></TouchableOpacity></View>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 26, paddingTop: 70 },
  back: { position: 'absolute', top: 24, left: 24, padding: 8 },
  backText: { color: '#6D5A9E', fontSize: 16, fontWeight: '600' },
  title: { fontSize: 28, fontWeight: '800', color: '#24213A', marginBottom: 8 },
  subtitle: { color: '#8A879B', fontSize: 15, marginBottom: 26 },
  label: { color: '#4A465F', fontWeight: '600', marginBottom: 8, marginTop: 13 },
  input: { backgroundColor: '#FFFFFF', borderColor: '#E7E2F3', borderWidth: 1, borderRadius: 14, padding: 15, fontSize: 16 },
  button: { backgroundColor: '#8B5CF6', borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 26 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
  bottom: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 },
  bottomText: { color: '#8A879B' },
  link: { color: '#8B5CF6', fontWeight: '700' },
});
