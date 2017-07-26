import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
 
import coinMarketCap from './src/components/ListaMoedas';


class appListaProdutos extends Component {
  render() {
    return (
     <View> 
      <Image source={require('./imgs/moedas.jpg')} />
      <ListaMoedas />
     </View>
    );
  }
}

/*const styles = StyleSheet.create({
  
});*/

AppRegistry.registerComponent('coinMarketCap', () => coinMarketCap);
