//switch
import React from 'react';
import { Switch, View, StyleSheet } from 'react-native';

const OnOff = (props) => {

    return(
        <View>
            <Switch
              style={styles.onoff} 
              onValueChange={props.ativaSwitch}
              value={props.valorSwitch}
            />
        </View>
    )
}

export default OnOff;

const styles = StyleSheet.create({
    onoff:{
        margin:10,
        borderColor:'red',
        color:'red',
        borderBottomColor:'red',
        tintColor:'red',
        borderEndColor:'red',
        overlayColor:'red',
        textDecorationColor:'red',
        alignSelf:'center',
        borderStartColor:'red'
    }
});