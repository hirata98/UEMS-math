import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function Tabuada(){
    
    return(
        <View style={styles.container}>
          <Image style={styles.ima} source={require('./add.jpg')}/>
          <Image style={styles.ima} source={require('./sub.jpg')}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      backgroundColor: '#FAD3CA',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      flexDirection: 'row'
    },
    botao: {
      height: 100,
      width: 200,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
      margin:50
    },
    text: {
      fontSize: 30,
      color: '#FFF'
    },
    ima: {
      width:325,
      height: 330,
      resizeMode: 'stretch'
    }
  });
  