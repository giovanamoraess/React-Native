import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';



export default class Itens extends Component {
  render() {
    return (     
     <View style={styles.moedas}> 
    
	    <View style={styles.detalhesItens}> 
	     	<Text style={styles.textoTitulo}> {this.props.moedas.name} </Text>
	     	<Text style={styles.textoValor}> Símbolo: {this.props.moedas.symbol} </Text>
	     	<Text style={styles.textoDetalhes}> Rank: {this.props.moedas.rank} </Text>
	     	<Text style={styles.textoDetalhes}> Preço US$: {this.props.moedas.price_usd} </Text>
	    </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
	moedas: {
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#F4B350',
		//margin: 10, 
		//padding: 10,
		flexDirection: 'row'
	},
	detalhesItens: {
		marginLeft:20,
		flex: 1
	},
	textoTitulo: {
		fontSize: 19,
		color: '#F39C12',
		marginBottom: 5
	},
	textoValor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	textoDetalhes: {
		fontSize: 14
	}


});