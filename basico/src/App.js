import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import AppExtends from './componentes/AppExtends';
import Flexbox from './componentes/Flexbox';


const App: () => React$Node = () => {
    
    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <AppExtends/>
          <Flexbox/>
      </SafeAreaView>
    </>
    );
};

const styles = StyleSheet.create({

});

export default App;
