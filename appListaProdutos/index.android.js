import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 
import ListaItens from './src/components/ListaItens'
class appListaProdutos extends Component {
  render() {
    return (
     <ListaItens />
    );
  }
}

/*const styles = StyleSheet.create({
  
});*/

AppRegistry.registerComponent('appListaProdutos', () => appListaProdutos);
