// File: /mi-app-fitness/app/src/App.js

import React from 'react';
import { View, Text } from 'react-native';
import Configuracion from './config/Configuracion';
import Inicio from './screens/Inicio';
import Metas from './screens/Metas';

const App = () => {
  return (
    <View>
      <Text>Aplicación de Rastreo de Actividades de Fitness</Text>
      <Configuracion />
      <Inicio />
      <Metas />
    </View>
  );
};

export default App;