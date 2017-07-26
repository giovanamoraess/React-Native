import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView
} from 'react-native';

import axios from 'axios';
import Itens from './Moedas';


export default class ListaMoedas extends Component {
 
  constructor (props) {
    super(props);

    this.state = { listaMoedas: [] };
  }

  componentWillMount() {
  //requisição http
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then((response) => { this.setState({ listaMoedas: response.data}); })
      .catch(() => { alert('erro ao recuperar os dados'); }); 
  }   
  render() {
    return (
     <ScrollView style={{backgroundColor: '#E4F1FE'}}> 
       {this.state.listaMoedas.map(moedas => (<Itens key={moedas.id} moedas={moedas} /> ))}
     </ScrollView>
    );
  }
}





