import React, {Component} from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class Lista extends Component{
    state={
        nomes:[
            {
                id:0,
                nome:'Jimmy',
            },
            {
                id:1,
                nome:'Rico',
            },
            {
                id:2,
                nome:'Simba',
            },
            {
                id:3,
                nome:'Minhoca',
            },
            {
                id:4,
                nome:'Cacau',
            },                   
        ]
    }

    alertNome=(item)=>{
        alert(item.nome)
    }

    render(){
        return(
            <View>
                <Text>Lista:</Text>
                {this.state.nomes.map((item)=>
                    <TouchableOpacity
                      style={styles.container}
                      key={item.id}
                      onPress={()=>this.alertNome(item)}
                    >
                        <Text style={styles.nome}>
                            {item.nome}
                        </Text>  
                    </TouchableOpacity>
                )}
            </View>
        )
    }
}

export default Lista

const styles = StyleSheet.create({
    container:{
        padding:6,
        backgroundColor:'#CAAA67',
        alignItems:'center',
        margin:2,
    },
    nome:{
        color: '#4f603c'
    },
})