//selecionador - Picker
/*picker sera removido de react-native core
*/
import React, {Component} from 'react';
import { View, Picker, Text} from 'react-native';

class Selecionador extends Component{
    state={
        fruta:'vvv',
    }

    mudaFruta=(fruta)=>{
        this.setState({fruta:fruta})
    }

    render(){
        return(
            <View>
                <Picker 
                  selectedValue={this.state.fruta}
                  onValueChange={this.mudaFruta}
                >
                    <Picker.Item label='Melancia' value='melancia' />
                    <Picker.Item label='Manga' value='manga' />
                    <Picker.Item label='Goiaba' value='goiaba' />
                    <Picker.Item label='Uva' value='uva' />
                </Picker>
                <Text>Selecionado {this.state.fruta}</Text>
            </View>
        )
    }
}

export default Selecionador;

//const styles = StyleSheet.create({});