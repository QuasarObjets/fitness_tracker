import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BarraProgreso = ({ progreso }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.barra, { width: `${progreso}%` }]}></View>
      <Text style={styles.texto}>{`${progreso}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barra: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  texto: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default BarraProgreso;