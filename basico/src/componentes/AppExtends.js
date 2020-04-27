/*Componente que faz o texto mudar, apenas uma vez,
ao clicar sobre ele
*/
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import Stateless from './Stateless';


class AppExtends extends Component{
    state={
      meuEstado:'Estado original - Clique aqui!',
      txtStateless:'Texto Default',
    }

    mudaEstado=()=>{
      //console.log(this.state.meuEstado);
      this.setState({meuEstado:'Estado Mudou!'})
      //console.log(this.state.txtStateless);
    }

    mudaEstado2=()=>{
      this.setState({txtStateless:'Estado Stateless Mudou!'})
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text>Mudança de estado:</Text>
                <Text 
                style={styles.textoClicavel}
                 onPress={this.mudaEstado}>
                   {this.state.meuEstado}
                   </Text>
                <Stateless 
                  txtStateless={this.state.txtStateless}
                  mudaStateless={this.mudaEstado2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    paddingLeft:20,
    paddingTop:10,
  },
  textoClicavel:{
    paddingTop:5,
    paddingBottom:5,
    color:'#DADA10',
  }
});

export default AppExtends;