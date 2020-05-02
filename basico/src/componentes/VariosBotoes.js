import React, {Component} from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';



const VariosBotoes= () => {

    return(
        <View>
            <Button
            title='<Button/>'
            onPress={()=>{false}}//faz nada ao clicar
            />
            <View style={styles.containerTouchable}>
                <TouchableOpacity>
                    <Text style={styles.texto1}>TouchableOpacity estilizado</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerTouchable}>
                <TouchableHighlight
                  onPress={()=>{false}}
                >
                    <Text style={styles.texto2}>TouchableHighlight estilizado</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.containerTouchable}>
                <TouchableNativeFeedback
                  onPress={()=>false}
                >
                    <Text style={styles.texto3}>TouchableNativeFeedback estilizado</Text>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.containerTouchable}>
            <TouchableWithoutFeedback
              onPress={()=>{false}}  
            >
                    <Text style={styles.texto4}>TouchableWithoutFeedback estilizado</Text>
                </TouchableWithoutFeedback>
            </View>
                
        </View>
    )
    }

export default VariosBotoes;

const styles = StyleSheet.create({
    containerTouchable:{
        margin:10,
        alignItems:'center',
    },
    texto1: {
        backgroundColor:'lightblue',
        borderColor:'blue',
        borderWidth:1,
        padding:3,
        fontSize:15,
    },
    texto2: {
        backgroundColor:'lightgreen',
        borderColor:'green',
        borderWidth:1,
        padding:3,
        fontSize:15,
    },
    texto3: {
        backgroundColor:'yellow',
        borderColor:'orange',
        borderWidth:1,
        padding:3,
        fontSize:15,
    },
    texto4: {
        
        borderColor:'black',
        borderWidth:1,
        padding:3,
        fontSize:15,
    },
});
