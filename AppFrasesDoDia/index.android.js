//import 
import React from 'react';
import {Text, Button, View, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native';

//Formatações 
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10, 
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);

  var frases = Array();
  frases[0] = 'Você é tão perfeito que eu precisaria de uma placa de vídeo GeForce 9500 GT de 1GB para admirar o seu gráfico.';
  frases[1] = 'O que é um terapeuta? São 1024 gigapeutas.';
  frases[2] = '- Soldado, não te vi na aula de camuflagem hoje. - Obrigado capitão.';
  frases[3] = 'Paciência é tudo ... tudo que eu não tenho.';
  frases[4] = 'Não se pode viver só de sonhos, uma hora você vai enjoar e vai querer comer uma coisa mais salgada.';
  frases[5] = 'Não é preguiça. É redirecionamento estratégico de energia vital.';
  frases[6] = 'Se você pensa que é muito pequeno para fazer diferença, tente dormir em um quarto fechado com um mosquito.';
  frases[7] = 'É muito triste quando se é rico, bonito e sensual e aí vem o despertador e acaba com tudo.';
  frases[8] = 'Se as pessoas dormem de conchinha, será que as conchas dormem de pessoinha?';
  frases[9] = 'Se as pessoas dormem de conchinha, será que as conchas dormem de pessoinha?';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert('', fraseEscolhida);

}

//criando o componente 
const App = () => {

  const  {principal, botao, textoBotao} = Estilos;
  
  return (
  
    <View style= { principal }>
      <Image source={require('./imgs/logo.png')} />
      
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}> 
        <Text style={textoBotao}>Nova Frase </Text>
      </TouchableOpacity>
    </View>

  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('AppFrasesDoDia', () => App);