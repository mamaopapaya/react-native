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
import ModalEx2 from './componentes/ModalEx2';
import Indicador from './componentes/Indicador';
import OnOff from './componentes/LigaDesliga';
//import Selecionador from './componentes/Selecionador';



const App: () => React$Node = () => {

    var state={
      valorSwitch:true,
    }

    var ativaSwitch=()=>{
      //console.log(state.valorSwitch)
      state.valorSwitch=!state.valorSwitch
      //console.log(state.valorSwitch)
    }
    
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
        <Indicador/>
        <ModalEx2/>
        <Text>switch errADO</Text>
        <OnOff
          valorSwitch={state.valorSwitch}
          ativaSwitch={ativaSwitch}
        />
      </SafeAreaView>
      
    </>
    );
};

const styles = StyleSheet.create({
});

export default App;

