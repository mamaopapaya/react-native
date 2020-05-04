import React from  'react';
import {Router,Scene} from 'react-native-router-flux';
import {
} from 'react-native';
import Home from './componentes/Rotas/Home';
import Sobre from './componentes/Rotas/Sobre';

const Routes = () => (
    <Router>
        <Scene key='root'>
            <Scene key='home' component={Home} title='Home123' initial={true} />
            <Scene key='sobre' component={Sobre} title='Sobre123' />
        </Scene>
    </Router>
  
)

export default Routes;
