import { useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';


export default function Perguntas(){
    const route = useRoute();
    const routeName = route.name;

    const perguntas01 = [
        {
            pergunta_txt: 'João foi ao supermercado e comprou R$ 115,15 em mercadorias. Quando retornou à casa, ele viu que seu filho também havia ido ao mercado e comprado os mesmos produtos. Quanto os dois gastaram juntos?',
            resposta: [
                {resposta_txt:'R$ 230,00', isCorrect: false},
                {resposta_txt:'R$ 200,30', isCorrect: false},
                {resposta_txt:'R$ 230,30', isCorrect: true},
                {resposta_txt:'R$ 220,20', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'Ana foi no supermercado e comprou: 1 pacote de feijão por R$ 5,20. 1 pacote de arroz por R$ 10,50. 5 pacotes de bolacha por R$ 1,30 cada. 1 bandeja de iogurte por R$ 4,80. 3 litros de óleo por R$ 3,20 cada. Calcule quanto Ana gastou.',
            resposta: [
                {resposta_txt:'R$ 40,65', isCorrect: false},
                {resposta_txt:'R$ 36,60', isCorrect: true},
                {resposta_txt:'R$ 31,00', isCorrect: false},
                {resposta_txt:'R$ 38,60', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'Em uma fazenda, há 3 centenas de vacas, 4 centenas de galinhas e 1 centena de bois. Quantos animais há nessa fazenda?',
            resposta: [
                {resposta_txt:'701 animais', isCorrect: false},
                {resposta_txt:'710 animais', isCorrect: false},
                {resposta_txt:'800 animais', isCorrect: true},
                {resposta_txt:'341 animais', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'Em uma fazenda, Davi colheu 260 peras pela manhã e, no período da tarde, 198 peras. Quantas peras foram colhidas ao todo?',
            resposta: [
                {resposta_txt:'453 peras', isCorrect: false},
                {resposta_txt:'399 peras', isCorrect: false},
                {resposta_txt:'458 peras', isCorrect: true},
                {resposta_txt:'438 peras', isCorrect: false}
            ]
        },
    ]
    const perguntas02 = [
        {
            pergunta_txt: ' Em uma padaria se produz, em uma fornada, 545 pães. Desses pães, 350 foram vendidos pela manhã. Quantos pães restaram?',
            resposta: [
                {resposta_txt:'205 pães', isCorrect: false},
                {resposta_txt:'190 pães', isCorrect: false},
                {resposta_txt:'215 pães', isCorrect: false},
                {resposta_txt:'195 pães', isCorrect: true}
            ]
        },
        {
            pergunta_txt: 'Uma fábrica de sapatos possui 5235 pares de calçados em estoque e recebe um pedido, de um único cliente, de 4989 pares de calçados. Quantas pares de calçados sobraram em estoque após a entrega desse pedido?',
            resposta: [
                {resposta_txt:'246 pares de calçados', isCorrect: true},
                {resposta_txt:'492 pares de calçados', isCorrect: false},
                {resposta_txt:'546 pares de calçados', isCorrect: false},
                {resposta_txt:'500 pares de calçados', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'A um número foi somado 7854 e o resultado obtido foi 20000. Que número é esse?',
            resposta: [
                {resposta_txt:'1006', isCorrect: false},
                {resposta_txt:'10056', isCorrect: false},
                {resposta_txt:'12454', isCorrect: false},
                {resposta_txt:'12146', isCorrect: true}
            ]
        },
        {
            pergunta_txt: 'Um torneio agrupou 2450 pessoas na praça principal de uma cidade do interior de Goiás. Dessas, 1289 eram do sexo masculino. Quantas pessoas estavam na praça principal dessa cidade, para esse torneio, do sexo feminino?',
            resposta: [
                {resposta_txt:'1161', isCorrect: true},
                {resposta_txt:'1149', isCorrect: false},
                {resposta_txt:'1059', isCorrect: false},
                {resposta_txt:'1051', isCorrect: false}
            ]
        },
    ]
    const [ShowPontuacao, setShowPontuacao] = useState(false);

    const [Pontuacao, setPontuacao] = useState(0);

    const [PerguntaAtual, setPerguntaAtual] = useState(0);

    const OpsPergunta = () =>{
        if (routeName == "A+B=?") {
            return perguntas01
        }
        else if (routeName == "A-B=?") {
            return perguntas02
        }else return null;

    }
    const gerenciar_Prox_Pergunta = (isCorrect) =>{
        if(isCorrect === true) {
            Alert.alert(
                "",
                "Resposta Correta",
                [ { text: "OK" } ]
              );
            setPontuacao(Pontuacao+1);
        }else {
            Alert.alert(
                "",
                "Resposta Incorreta",
                [ { text: "OK" } ]
              );
        }
        const proximaPergunta = PerguntaAtual+1;
        if (routeName == "A+B=?") {
            if(proximaPergunta < perguntas01.length){
                setPerguntaAtual(proximaPergunta);
            }else setShowPontuacao(true)
        }
        else if (routeName == "A-B=?") {
            if(proximaPergunta < perguntas02.length){
                setPerguntaAtual(proximaPergunta);
            }else setShowPontuacao(true)
        }
        
    }
    
    return(
        <View style={styles.container}>
            {ShowPontuacao ? 
                ( 
                    <View style={styles.pergunta}>
                        <Text style={styles.text}>
                            Pontuação {Pontuacao} de {OpsPergunta().length}
                        </Text>
                    </View>  
                ) : (
                <>
                    <View style={styles.pergunta}>
                        <Text style={styles.text} >
                            {OpsPergunta()[PerguntaAtual].pergunta_txt}
                        </Text>
                    </View>    
                    {OpsPergunta()[PerguntaAtual].resposta.map((resposta)=> (
                        <TouchableOpacity 
                        style={styles.botao}
                        onPress={()=> gerenciar_Prox_Pergunta(resposta.isCorrect)} >
                    <Text style={styles.text}> {resposta.resposta_txt} </Text>
                    </TouchableOpacity>
                    ))}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column'
    },
    botao: {
      height: 50,
      width: 340,
      borderRadius: 20,
      alignItems: 'center',
      backgroundColor: 'skyblue',
      margin:3,
      bottom: 50
    },
    botaoC: {
        height: 50,
        width: 50,
        borderRadius: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        margin:3
      },
    pergunta: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 3,
        top: 20
      },
    text: {
      fontSize: 20,
      color: '#000',
      textAlign: 'center'
    },
    botaoIma:{
        top: 50,
    }
  });
  