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


const App: () => React$Node = () => {
    
    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        
          {/*<AppExtends/>
          <Flexbox/>*/}
          <Lista/>
          <Login/>
         

      </SafeAreaView>
    </>
    );
};

const styles = StyleSheet.create({

});

export default App;
