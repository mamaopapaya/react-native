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
        
        <Login/>
      */}
      {/*
        <ListaScroll/>*/}
        <ImagemCora/>
        <HttpFetch/>
        <VariosBotoes/>
      </SafeAreaView>
    </>
    );
};

const styles = StyleSheet.create({

});

export default App;
