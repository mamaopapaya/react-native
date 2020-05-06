/*exemplo de activity indicator
eh aquele indicador de carregando
*/
import React, {Component} from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import OnOff from './LigaDesliga';


class Indicador extends Component{
    state={
        ativo:true,
        valorSwitch:true,//switch
    }

    //switxh
    ativaSwitch=()=>{
        this.setState({valorSwitch:!this.state.valorSwitch})
    }


    //apos 2 segundos, o activityIndicator fecha
    cancelaIndicador=()=>setTimeout(()=>this.setState({
        ativo:false
    }),2000)

    //apos montar o componente
    componentDidMount=()=>this.cancelaIndicador()

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator
                  animating={this.state.ativo}
                  color='violet'
                  size='large'
                />
                <Text>switch que funciona</Text>
                <OnOff
                  valorSwitch={this.state.valorSwitch}
                  ativaSwitch={this.ativaSwitch}
                />
            </View>
            
        )
    }
}

export default Indicador;

const styles = StyleSheet.create({
    container:{
    
    }
});