/*exemplo de activity indicator
eh aquele indicador de carregando
*/
import React, {Component} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import OnOff from './LigaDesliga';


class Indicador extends Component{
    state={
        ativo:true,
    }

    //apos 2 segundos, o activityIndicator fecha
    cancelaIndicador=()=>setTimeout(()=>this.setState({
        ativo:false
    }),2000)

    //apos montar o componente
    componentDidMount=()=>this.cancelaIndicador()

    render(){
        return(
            <View>
                <ActivityIndicator
                  animating={this.state.ativo}
                  color='violet'
                  size='large'
                />
                
            </View>
        )
    }
}

export default Indicador;

const styles = StyleSheet.create({
});