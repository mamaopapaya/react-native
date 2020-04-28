import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Flexbox = () => {
  return (
      <View style={styles.container}>
        <Text style={{color:'#fff', marginTop:5,}}>Flexbox</Text>
        <View style={styles.container1}>
          <View style={styles.redbox}/>
          <View style={styles.bluebox}/>
          <View style={styles.yellowbox}/>
        </View>
        <View style={styles.container2}>
          <View style={styles.redbox}/>
          <View style={styles.bluebox}/>
          <View style={styles.yellowbox}/>
        </View>
      </View>

  )
}


export default Flexbox;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'black',
        justifyContent:'flex-end',
        height:400,
    },
    container1:{
        flexDirection:'column',
        justifyContent:'center',
        marginRight:100,
       
        
    },
    container2:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-end',
       
    },
    redbox:{
        width:100,
        height:100,
        backgroundColor:'red',
    },
    bluebox:{
        width:100,
        height:100,
        backgroundColor:'blue',
    },
    yellowbox:{
        width:100,
        height:100,
        backgroundColor:'yellow',
    }
})