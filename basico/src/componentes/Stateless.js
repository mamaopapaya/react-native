/**componente sem estado - presentational Component
 * dados e funcoes recebidos são propriedades!
 * Este componente recebe prpopriedade, e retorna uma view
 */
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Stateless = (props)=>{
    return(
        <View>
            <Text>Componente Stateless</Text>
            <Text 
            style={styles.textoClicavel}
            onPress={props.mudaStateless}
            >
                {props.txtStateless}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    textoClicavel:{
      paddingTop:5,
      paddingBottom:5,
      color:'#DAAA50',
    }
  });

export default Stateless