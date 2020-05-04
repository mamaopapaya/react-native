import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  const irParaSobre =()=>{Actions.sobre()}

  return(
      <TouchableOpacity
        onPress={irParaSobre}
      >
          <Text>**Aqui é a Home**</Text>
      </TouchableOpacity>
  )
}

export default Home;
