import React, {Component} from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Text } from 'react-native';

class ModalEx2 extends Component{
    state={
        modalVisivel: false,
    }

    abreModal (valor){
        this.setState({modalVisivel:valor});
    }

    render(){
        return(
            <View>
                <Modal
                  visible={this.state.modalVisivel}
                >
                    <View style={styles.boxModal2} >
                    <View
                      style={styles.boxModal}
                    >
                        <Text>ok!</Text>
                        <TouchableHighlight
                        onPress={()=>this.abreModal(false)}
                        >
                            <Text
                            style={styles.botaoAbrir}
                            >fecha modal</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>

                {/**ao clicar abre a modal
                 * pecisa onPress
                 * abreModal é uma funcao, tem q ser chamada
                 * como arrowfunc
                 */}
                 <View style={styles.containerInicial}>
                <TouchableHighlight
                  onPress={()=>this.abreModal(true)}
                >
                    <Text
                      style={styles.botaoAbrir}
                    >abrir modal</Text>
                </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default ModalEx2;

const styles = StyleSheet.create({
    botaoAbrir:{
        borderColor:'red',
        borderWidth:1,
        margin:3,
        padding:3,
    },
    boxModal:{
        borderColor:'green',
        borderWidth:2,
        width:130,
        height:100,
        alignSelf:'center',//ou ativa alignitems em bonModal2
    },
    boxModal2:{
        paddingTop:200,
        //alignItems:'center',//deixa a modal no centro horizontal
    },
    containerInicial:{
        width:90,
    }
});
