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
 , fontWeight: 'bold', color: 'green', margin: 40}}>Book Appointments</Text>
 

       <Image
         source={{ uri: 'https://cdn1.iconfinder.com/data/icons/education-colored-icons-vol-1/128/043-512.png'}}
         style={{ height: 100, width: 100, alignItmens: 'center', justifyContent: 'center', margin:5}}
       />
       <Text style={{fontSize: 18, color: 'green', margin: 50}}>Book Appointments in just one tap
 </Text>
     

 <TouchableHighlight style={styles.button} 
      onPress={this._handlePress}><Text style={{color: '#ffffff', fontSize: 18}}>Next</Text>
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