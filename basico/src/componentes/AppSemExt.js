import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';


const AppSemExt: () => React$Node = () => {
    state={
      meuEstado:'Estado original - Clique aqui!',
    },
    mudaEstado=()=>{
      console.log(state.meuEstado);
      //setState nao funciona
      //state.setState({meuEstado:'2'})
      //state.meuEstado='Estado Mudou!';//ate muda, mas nao troca o valor na tela
      console.log(state.meuEstado);
    }
    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Text>Mudança de estado:</Text>
          <Text onPress={mudaEstado}>{state.meuEstado}</Text>
      </SafeAreaView>
    </>
    );
};

const styles = StyleSheet.create({
});

export default AppSemExt;
