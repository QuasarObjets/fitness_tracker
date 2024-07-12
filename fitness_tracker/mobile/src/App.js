// /fitness_tracker/mobile/src/App.js

import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <View>
      <Text>Welcome to Fitness Tracker!</Text>
      <HomeScreen />
    </View>
  );
};

export default App;