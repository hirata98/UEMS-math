import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableHighlight,
  Dimensions
} from 'react-native';

export default props=>{
    const styleButton=[styles.btn]//array para guardar cada estilo que ira usar
    //verificacao para saber qual estilo usar no botao 
    if(props.duplo){styleButton.push(styles.btn_duplo)}
    if(props.igual){styleButton.push(styles.btn_igual)}
    if(props.ac){styleButton.push(styles.btn_ac)}
    if(props.del){styleButton.push(styles.btn_del)}
    if(props.operacao){styleButton.push(styles.btn_operacao)}
    return(
        <TouchableHighlight onPress={props.aoClicar}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn:{
        fontSize:30,
        height:Dimensions.get('window').width/4, //divide por 4 porque sera 4 botoes em cada linha
        width:Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        textAlign:'center'
    },
    btn_operacao:{
        color:'grey'
    },
    btn_igual:{
        color:'#0ff',
    },
    btn_ac:{
        color:'green'
    },
    btn_del:{
        color:'red'
    },
    btn_duplo:{
        width:(Dimensions.get('window').width/4)*2
    }
  });