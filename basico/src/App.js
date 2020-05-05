import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,

} from 'react-native';
import AppExtends from './componentes/AppExtends';
import Flexbox from './componentes/Flexbox';
import Lista from './componentes/Lista';
import Login from './componentes/Login';
import ListaScroll from './componentes/ListaScroll';
import ImagemCora from './componentes/ImagemCora';
import HttpFetch from './componentes/HttpFetch';
import VariosBotoes from './componentes/VariosBotoes';
import Animados from './componentes/Animados';
import ModalEx from './componentes/ModalEx';



const App: () => React$Node = () => {
    
    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*<AppExtends/>
        <Flexbox/>
        */}
        {/*
        <Lista/>
        <Login/>*/}
        {/*
        <ListaScroll/>*/}
        {/*
        <ImagemCora/>
        <HttpFetch/>
        <VariosBotoes/>*/}
        {/*
        <Animados/>*/}
        <Text>fffff</Text>
        <ModalEx/>
      </SafeAreaView>
      
    </>
    );
};

const styles = StyleSheet.create({
});

export default App;

