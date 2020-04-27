import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import AppExtends from './componentes/AppExtends';


const App: () => React$Node = () => {
    
    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <AppExtends/>
        
      </SafeAreaView>
    </>
    );
};

const styles = StyleSheet.create({

});

export default App;
