/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import AppState2 from './src/pages/appState';

function Coisa(props){
  return(
    <View
      style={{
        paddingTop:10,
        paddingBottom:10,
      }}
    >
      <Text>Não tenho {props.nome}.</Text>
    </View>
  )
}

function Coisa2(){
  const [nome, setNome]=useState('...');
  //console.log('teste');
  return(
   
    <View>
      <Text>Mas tenho {nome}.</Text>
      
      <TextInput 
      onChangeText={nome =>setNome(nome) }
      placeholder='o que você tem?'
      style={{
        height: 45,
        borderColor: 'violet',
        borderWidth: 1
      }}
        />
    </View>
  )
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppState2></AppState2>
      <Coisa nome='geladeira'/>
      <Coisa2/>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
