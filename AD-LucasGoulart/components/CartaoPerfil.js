// Aluno: Lucas Goulart de Oliveira

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CartaoPerfil({ nome, profissao, cidade, email }) {

  function enviarEmail() {
    Alert.alert("E-mail enviado para: " + email);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.nome}>{nome}</Text>

      <Text style={styles.profissao}>{profissao}</Text>

      <Text style={styles.cidade}>{cidade}</Text>

      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>
          Enviar E-mail
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    alignItems: 'center'
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },

  profissao: {
    fontSize: 16,
    color: '#555',
    marginBottom: 2
  },

  cidade: {
    fontSize: 14,
    color: '#777',
    marginBottom: 2
  },

  email: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 15
  },

  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center'
  }

});