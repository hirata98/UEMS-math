import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
} from 'react-native';
import Display from './display'
import Btn from './buttons'

let states={
  valorDisplay:'', 
  resultado:0,
  operado:false, //verifica se alguma operação aconteceu ou seja clicou no igual
  ponto:false 
}

export default function App() {
  const [valorTela, setValorTela]=useState(states.valorDisplay)
  const [ValorResult, setValorResult]=useState(states.resultado)

  const addDigito=(digito)=>{ //funcao para adicionar os digitos na tela de aprensatação
    if(digito=='+' || digito=='-' || digito=='/' || digito=='*'){
      states.ponto=false
    }
    if(digito=='.' && !states.ponto){
      states.ponto=true
      states.operado=false
    }else if(digito=='.' && states.ponto){
      return
    }
    if((digito=='+' || digito=='-' || digito=='/' || digito=='*') && states.operado){
      states.valorDisplay=states.resultado
      states.resultado=0
    }
    states.valorDisplay = states.valorDisplay+digito
    setValorTela(states.valorDisplay)
    setValorResult(states.resultado)
    states.operado=false
  }
  const ac=()=>{
    states={
      valorDisplay:'', 
      resultado:0,
      operado:false,
      ponto:false 
    }
    setValorTela(states.valorDisplay)
    setValorResult(states.resultado)
  }
  const operar=(digito)=>{
    if(digito=='AC'){
      ac() 
      return
    }
    if(digito=='DEL'){
      states.valorDisplay=valorTela.substring(0,(valorTela.length-1))//substring recebe o valor inicial e final ela rotarna a estring todo menos o valor final
      setValorTela(states.valorDisplay)
      return
    }
    try{//verificacao para o = 
      states.resultado=eval(states.valorDisplay)//retorna o valor caculado da expressao toda
      states.operado=true
      setValorResult(states.resultado)
    }catch{//caso tenha erro
      states.resultado='erro'
      states.operado=true
      setValorResult(states.resultado)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Display valor={valorTela} res={ValorResult}/> 
      <View style={styles.button}>
        <Btn label="AC" ac aoClicar={()=>{operar('AC')}}></Btn>
        <Btn label="(" aoClicar={()=>{addDigito('(')}}></Btn>
        <Btn label=")" aoClicar={()=>{addDigito(')')}}></Btn>
        <Btn label="/" operacao aoClicar={()=>{addDigito('/')}}></Btn>
        <Btn label="7" aoClicar={()=>{addDigito('7')}}></Btn>
        <Btn label="8" aoClicar={()=>{addDigito('8')}}></Btn>
        <Btn label="9" aoClicar={()=>{addDigito('9')}}></Btn>
        <Btn label="*" operacao aoClicar={()=>{addDigito('*')}}></Btn>
        <Btn label="4" aoClicar={()=>{addDigito('4')}}></Btn>
        <Btn label="5" aoClicar={()=>{addDigito('5')}}></Btn>
        <Btn label="6" aoClicar={()=>{addDigito('6')}}></Btn>
        <Btn label="-" operacao aoClicar={()=>{addDigito('-')}}></Btn>
        <Btn label="1" aoClicar={()=>{addDigito('1')}}></Btn>
        <Btn label="2" aoClicar={()=>{addDigito('2')}}></Btn>
        <Btn label="3" aoClicar={()=>{addDigito('3')}}></Btn>
        <Btn label="+" operacao aoClicar={()=>{addDigito('+')}}></Btn>
        <Btn label="0" aoClicar={()=>{addDigito('0')}}></Btn>
        <Btn label="." aoClicar={()=>{addDigito('.')}}></Btn>
        <Btn label="DEL" del aoClicar={()=>{operar('DEL')}}></Btn>
        <Btn label="=" igual aoClicar={()=>{operar('=')}}></Btn>
      </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  button:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
