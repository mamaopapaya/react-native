import React, {Component} from 'react';
import {AppState, Text} from 'react-native';

export default class AppState2 extends Component{
    componentDidMount(){
        AppState.addEventListener('change', (nextState)=>{
            console.log(nextState);
        })
    }

    render(){
        return(
            <Text>ativo ou background</Text>
        );
    }
}