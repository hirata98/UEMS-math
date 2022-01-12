import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Start({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.botao}
      onPress={() => navigation.navigate('A+B=?')}
      >
        <Text style={styles.text}>A+B=?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botao}
      onPress={() => navigation.navigate('A-B=?')}
      >
        <Text style={styles.text}>A-B=?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botao}
      onPress={() => alert('press')}
      >
        <Text style={styles.text}>A+B+C=?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botao}
      onPress={() => alert('press')}
      >
        <Text style={styles.text}>A-B-C=?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botao}
      onPress={() => alert('press')}
      >
        <Text style={styles.text}>A+B-C=?</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  botao: {
    height: 50,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    margin:3
  },
  text: {
    fontSize: 20,
    color: '#FFF'
  },
});
