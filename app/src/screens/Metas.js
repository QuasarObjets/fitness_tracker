// File: /mi-app-fitness/app/src/screens/Metas.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Metas = () => {
  const [meta, setMeta] = useState('');

  const handleGuardarMeta = () => {
    // Lógica para guardar la meta en la base de datos
    console.log('Meta guardada:', meta);
  };

  return (
    <View>
      <Text>Establecer Metas</Text>
      <TextInput
        placeholder="Ingrese su meta de fitness"
        value={meta}
        onChangeText={setMeta}
      />
      <Button title="Guardar Meta" onPress={handleGuardarMeta} />
    </View>
  );
};

export default Metas;

// Este archivo contiene el componente Metas que muestra la pantalla de metas de la aplicación.
// El componente utiliza el estado del gancho useState para almacenar la meta ingresada por el usuario.
// Cuando el usuario presiona el botón "Guardar Meta", se ejecuta la función handleGuardarMeta que guarda la meta en la base de datos (la lógica real de la base de datos no está implementada en este ejemplo).
// El componente renderiza un texto de título, un campo de entrada de texto para ingresar la meta y un botón para guardar la meta.