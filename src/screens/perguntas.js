import { useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


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
            pergunta_txt: 'alguma pergunta 3',
            resposta: [
                {resposta_txt:'resposta 9', isCorrect: false},
                {resposta_txt:'resposta 10', isCorrect: false},
                {resposta_txt:'resposta 11', isCorrect: true},
                {resposta_txt:'resposta 12', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'alguma pergunta 4',
            resposta: [
                {resposta_txt:'resposta 13', isCorrect: false},
                {resposta_txt:'resposta 14', isCorrect: false},
                {resposta_txt:'resposta 15', isCorrect: true},
                {resposta_txt:'resposta 16', isCorrect: false}
            ]
        },
    ]
    const perguntas02 = [
        {
            pergunta_txt: 'alguma pergunta 5',
            resposta: [
                {resposta_txt:'resposta 1.0', isCorrect: false},
                {resposta_txt:'resposta 2.1', isCorrect: false},
                {resposta_txt:'resposta 3.2', isCorrect: true},
                {resposta_txt:'resposta 4.3', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'alguma pergunta 6',
            resposta: [
                {resposta_txt:'resposta 5.0', isCorrect: false},
                {resposta_txt:'resposta 6.1', isCorrect: false},
                {resposta_txt:'resposta 7.2', isCorrect: true},
                {resposta_txt:'resposta 8.3', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'alguma pergunta 7',
            resposta: [
                {resposta_txt:'resposta 9.0', isCorrect: false},
                {resposta_txt:'resposta 10.1', isCorrect: false},
                {resposta_txt:'resposta 11.2', isCorrect: true},
                {resposta_txt:'resposta 12.3', isCorrect: false}
            ]
        },
        {
            pergunta_txt: 'alguma pergunta 8',
            resposta: [
                {resposta_txt:'resposta 13.0', isCorrect: false},
                {resposta_txt:'resposta 14.1', isCorrect: false},
                {resposta_txt:'resposta 15.2', isCorrect: true},
                {resposta_txt:'resposta 16.3', isCorrect: false}
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
            alert("resposta correta")
            setPontuacao(Pontuacao+1);
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
            <TouchableOpacity style={styles.botaoC} onPress={()=> alert('calculadora')} >
                    <Text style={styles.text}> C </Text>
            </TouchableOpacity>
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
  });
  