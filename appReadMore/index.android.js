import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
 
import ReadMore from '@expo/react-native-read-more-text';


class appReadMore extends Component {
  render() {
    return (
    <ScrollView style={styles.card}>        
      <Text style={styles.textTitle}>Teste de ReadMore</Text>
       <ReadMore 
          numberOfLines={3}>
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet, porro dolor quaerendum sit ad, semper sanctus sea ad. In duo tota munere sadipscing. Nominavi praesent adipiscing ne duo. Sale adhuc id mea. Sit id veniam reprehendunt, et ius accusam corrumpit. Affert tibique corrumpit est ei.
            Saepe maiestatis ex vis, nobis adversarium neglegentur sea ea. Et mandamus maiestatis vituperatoribus mel. Lorem quaeque in sit, odio augue offendit at est. An detraxit consequuntur quo, sonet persequeris ad duo, ne eam atqui vivendo facilisis.
            At est magna qualisque, deleniti suscipit interpretaris nam ne, nulla tibique perfecto est id. Has in appetere platonem, ei pri nibh maiestatis. Vidisse nostrum vituperata ad vim. Sit ea dico fugit.
            Ex eum eleifend electram vulputate, te quod ceteros accumsan vim, eum atqui denique consequuntur et. Albucius consetetur disputando et ius. Ea eam vivendo intellegat voluptatibus, vix aperiri instructior id, vix quidam complectitur ad. Viris gubergren percipitur et est, affert commune id eam, nec ea affert veniam. Eos at erroribus consetetur constituam, vis oratio percipit scribentur ea, vim homero labore concludaturque te.
            Euismod molestiae vel in, no nec unum aperiri, semper ceteros voluptatibus at nec. Epicurei expetendis ea usu. Munere probatus hendrerit ad mea, virtute invidunt sit at. Ex eos agam everti. Movet vivendum incorrupte ut qui, pri alienum accusam ne.
          </Text>
        </ReadMore>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 14,
    color: '#000'
  },
  textTitle: {
    color: '#EF4836',
    fontSize: 28,
    margin: 5
  }
});

AppRegistry.registerComponent('appReadMore', () => appReadMore);
