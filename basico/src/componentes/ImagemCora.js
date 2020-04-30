import React, {Component} from 'react';
import { Image } from 'react-native';
//import @coracao from '../img/cor.jpg';


const ImagemCora = () => (
    <Image 
      style={{width:100,height:100}}
      source={require('../img/cor.jpg')}
    />
)

export default ImagemCora;
