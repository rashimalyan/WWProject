import React ,{Component}from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

 export default class App extends Component {
    _handlePress= () => {
    this.props.navigation.navigate('Logup');
  };

   

   render() {
     return (
 <View  style={styles.container}>

 <Text style={{fontSize: 24
 , fontWeight: 'bold', color: 'green', margin: 40}}>Weight Loss Plan</Text>
 

       <Image
         source={{ uri: 'https://conceptdraw.com/a3182c3/p19/preview/640/pict--double-arc-arrow-sales-arrows-vector-stencils-library'}}
         style={{ height: 100, width: 100, alignItmens: 'center', justifyContent: 'center', margin:20}}
       />
       <Text style={{fontSize: 18, color: 'green', margin: 40}}>Know about Weight Loss Program and join it.
 </Text>
     

 <TouchableHighlight style={styles.button} 
      onPress={this._handlePress}><Text style={{color: '#ffffff', fontSize: 18}}>Continue</Text>
      </TouchableHighlight>
     
 </View>
         );
 }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8FFFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {
    height: 40,
    backgroundColor: '#4FB2B5',
    borderColor: 'blue',
    width: 150,
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
  },

});