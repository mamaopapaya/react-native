//conexao de rede com fetch
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


class HttpFetch extends Component{
    state ={
        data:'',
    }

    /*componentDidMount-metodo de ciclo de vida
    carrega os dados do servidor assim que o componente estiver montado*/
    componentDidMount=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'GET'
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log('-- '+responseJson);
            this.setState({data:responseJson})
        })
        .catch((error)=>{
            console.log('---'+error);
        })
    }

    render(){
        return(
            <View>
                <Text>
                    {this.state.data.body}
                </Text>
            </View>
        )
    }
}


export default HttpFetch;

const styles = StyleSheet.create({
});