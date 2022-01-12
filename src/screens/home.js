import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.ima} source={require('./uems.png')}/>
      
      <TouchableOpacity 
      style={styles.botao}
      onPress={() => navigation.navigate('Teste')}
      >
        <Text style={styles.text}>Teste</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botao1}
      onPress={() => navigation.navigate('Tabuada')}
      >
        <Text style={styles.text}>Tabuada</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botao3}
      onPress={() => navigation.navigate('Calculadora')}
      >
        <Text style={styles.text}>Calculadora</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  botao: {
    width: 340,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    margin:3
  },
  botao1: {
    width: 340,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#90ee90',
    margin:2
  },
  botao3: {
    width: 340,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f08080',
    margin:2
  },
  text: {
    fontSize: 50,
    color: '#FFF'
  },
  ima: {
    width: 250,
    height: 200,
  }
});
