import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';




class Login extends Component{
    state={
        email:'',
        senha:'',
    }

    recebeEmail=(txt)=>{
        this.setState({email:txt})
    }

    recebeSenha=(txt)=>{
        this.setState({senha:txt})
    }

    dadosAcesso=(email,senha)=>{
        alert(`email: ${email}\nsenha: ${senha}`)
    }

    render(){
        return(
            //Tela de login
            <View style={styles.container}>
                <Text>Componente de login</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  autoCapitalize='none'
                  onChangeText={this.recebeEmail}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Senha'
                  autoCapitalize='none'
                  onChangeText={this.recebeSenha}
                />
                {/**Botao de logar */}
                <TouchableOpacity
                  style={styles.botao}
                  onPress={()=>this.dadosAcesso(this.state.email,this.state.senha)}
                >
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin:5,
        padding:5,
        borderColor:'black',
        borderWidth:1,
    },
    input:{
        borderColor:'violet',
        borderWidth:2,
        borderRadius:5,
        margin:3,
        height:40,
    },
    botao:{
        margin:3,
        backgroundColor:'#666',
        height:40,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default Login;
