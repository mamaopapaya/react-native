import React, {Component} from 'react';
import { View, Modal, TouchableHighlight, Text } from 'react-native';

class ModalEx extends Component{
    state={
        modalVisivel: false,
    }

    abreModal (){
        this.setState({modalVisivel:true});
    }

    render(){
        return(
            <View>
                <Modal
                  visible={this.state.modalVisivel}
                >
                    <Text>ok!</Text>
                </Modal>

                {/**ao clicar abre a modal
                 * pecisa onPress
                 * abreModal é uma funcao, tem q ser chamada
                 * como arrowfunc
                 */}
                <TouchableHighlight
                  onPress={()=>this.abreModal()}
                >
                    <Text>abrir modAL</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default ModalEx;