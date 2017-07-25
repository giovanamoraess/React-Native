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
     <View style={styles.item}> 
     	<View style={styles.foto}>
	     	<Image style={{height: 100, width: 100}} source={{uri: this.props.item.foto}} />
	    </View>
	    <View style={styles.detalhesItens}> 
	     	<Text style={styles.textoTitulo}> {this.props.item.titulo} </Text>
	     	<Text style={styles.textoValor}> R$: {this.props.item.valor} </Text>
	     	<Text style={styles.textoDetalhes}> Local: {this.props.item.local_anuncio} </Text>
	     	<Text style={styles.textoDetalhes}> Data anúncio: {this.props.item.data_publicacao} </Text>
	    </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10, 
		padding: 10,
		flexDirection: 'row'
	},
	foto: {
		width: 102,
		height: 102
	},
	detalhesItens: {
		marginLeft:20,
		flex: 1
	},
	textoTitulo: {
		fontSize: 19,
		color: '#4ECDC4',
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