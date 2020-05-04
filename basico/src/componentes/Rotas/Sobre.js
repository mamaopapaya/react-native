import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Sobre = () => {
  const irParaHome =()=>{Actions.home()}

  return(
      <TouchableOpacity
        onPress={irParaHome}
      >
          <Text>**Aqui é a Sobre**</Text>
      </TouchableOpacity>
  )
}

export default Sobre;
