import React ,{Component}from 'react';
import { StyleSheet, Text,Alert, View,TouchableHighlight,Button ,TextInput} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

      export default class App extends Component {
  state = {
    inputValue: ""
  };
  state ={
    inputValue: ""  };
  state =
  { secureTextEntry: ""};

   _handlePress = () => {
    this.props.navigation.navigate('Signin');
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue});
  };
  _handleTextChange = inputValue => {
    this.setState({ inputValue});
  };
  
  _handleSecureTextChange = secureTextEntry => {
    this.setState({ secureTextEntry });
  };


  render() {
    return (
      <View style={styles.container}>
      
       <Text style={{fontSize: 32, fontWeight: 'bold', color: 'green', margin:40}}>Weight Wonder</Text>
        <TextInput
          value={this.state.inputValue}
          placeholder="Username"
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, margin: 10  ,borderWidth:1, color:'green' , borderColor:'green'}}
        />
        <TextInput
          value={this.state.inputValue}
          placeholder="Email"
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, margin: 10  ,borderWidth:1, color:'green' , borderColor:'green'}}
        />
      
      
        <TextInput
         secureTextEntry={true}
          value={this.state.secureTextEntry}
          placeholder="Password"
          onChangeText={this._handleSecureTextChange}
          style={{ width: 200, height: 44, margin: 10, borderColor:'green',borderWidth: 1,color:'green' }}
        />
      <TouchableHighlight style={styles.button} underlayColor="#4FB2B5" 
      onPress={this._handlePress}><Text style={{color:'white', fontSize:18}}>Sign Up</Text>
      </TouchableHighlight>    
      
       <TouchableHighlight
      onPress={this._handlePress}><Text style={{color: 'green', fontSize: 14 }}>Already have an account?</Text>
      </TouchableHighlight> 
       <TouchableHighlight  
      onPress={this._handlePress}><Text style={{color: 'green', fontSize: 18}}>Sign In</Text>
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
