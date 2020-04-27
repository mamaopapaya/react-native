/*
import React, {Component} from 'react';
import {NetInfo, Text} from 'react-native';

export default class OnOff extends Component{
    componentDidMount(){
        //NetInfo é uma biblioteca externa:
        //-baixar: npm i --save @react-native-community/netinfo
        //-instalaer: react-native link react-native-community/netinfo
        //-importar: import NetInfo from 'react-native-community/netinfo';
        
        const resp= await NetInfo.getConnectionInfo();
        console.log(resp);
    }

    render(){
        return(
            <Text>online ou offline</Text>
        );
    }
}
*/