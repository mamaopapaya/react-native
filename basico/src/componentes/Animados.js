import React, {Component} from 'react';
import { StyleSheet, Animated,TouchableOpacity } from 'react-native';


class Animados extends Component{
    /*esse método é executado uma vez por component e 
    pode inclusive realizar alterações no estado caso 
    necessário
    -executado antes do render*/
    
    UNSAFE_componentWillMount = ()=>{
        this.animatedWidth=new Animated.Value(50)
        this.animatedHeight=new Animated.Value(100)
    }


    boxAnimado=()=>{
        Animated.timing(this.animatedWidth,{
            toValue:200,
            duration:1000,
            useNativeDriver: true,
        }).start()
        Animated.timing(this.animatedHeight,{
            toValue:500,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }

    render(){
        const estiloAnimado={
            width:this.animatedWidth,
            height:this.animatedHeight,
        }

        return(
            <TouchableOpacity 
              onPress={this.boxAnimado}
            >
                <Animated.View
                  style={[styles.box,estiloAnimado]}
                />
            </TouchableOpacity>
        )
    }
}

export default Animados;

const styles = StyleSheet.create({
    box:{
        backgroundColor:'red',
        width:50,
        height:100,
    }
});
