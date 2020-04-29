import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';


class ListaScroll extends Component{
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
            {
                id:5,
                nome:'Jimmyh',
            },
            {
                id:6,
                nome:'Ricoh',
            },
            {
                id:7,
                nome:'Simbah',
            },
            {
                id:8,
                nome:'Minhocah',
            },
            {
                id:9,
                nome:'Cacau',
            },
            {
                id:10,
                nome:'Jimmy.',
            },
            {
                id:11,
                nome:'Rico.',
            },
            {
                id:12,
                nome:'Simba.',
            },
            {
                id:13,
                nome:'Minhoca.',
            },
            {
                id:14,
                nome:'Cacau.',
            },
        ]
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                  {this.state.nomes.map((item)=>
                    <View
                    style = {styles.item}
                      key={item.id}
                    >
                        <Text>{item.nome}</Text>
                    </View>

                  )}
                </ScrollView>
            </View>
        )
    }
}

export default ListaScroll;

const styles = StyleSheet.create({
    container:{
        borderColor:'darkblue',
        borderWidth:1,
        margin:2,
    },
    item:{
        //flexDirection:'row',
        //justifyContent:'space-between',
        padding:20,
        borderWidth:1,
        borderColor:'orange',
        margin:3,



    }
});