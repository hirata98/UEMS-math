import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

export default props=>{
    return(
        <View style={styles.Display}>
            <Text 
                style={styles.TextOP}
                numberOfLines={1}
            > {props.valor}
            </Text>
            <Text 
                style={styles.TextResult}
                numberOfLines={1}
            > {props.res}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Display:{
        flex:1,
        padding:20,
        justifyContent:'flex-end',
        alignItems:"flex-end",
        backgroundColor:'#222',
        width:'100%'

    },
    TextResult:{
        fontSize:45,
        color:'#fff'
    },
    TextOP:{
        fontSize:30,
        color:'#fff'
    }
  });