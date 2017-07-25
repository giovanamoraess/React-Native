import React from 'react';
import { Text, Button, View, AppRegistry } from 'react-native';


const GeraNumeroAleatorio = () => {
     var numero_aleatorio = Math.random();
     numero_aleatorio = Math.floor(numero_aleatorio * 10);  
     alert(numero_aleatorio);
}


const App = () => {
  return (
    <View>
       <Text>Gerador de números randômicos!!!</Text>
       <Button
          title="Gerar um número randômico"
          onPress={GeraNumeroAleatorio}
      /> 
    </View>
    );

};

AppRegistry.registerComponent('appRandomicos', () => App);