// /fitness_tracker/mobile/src/index.js

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('fitness_tracker', () => App);
AppRegistry.runApplication('fitness_tracker', {
  rootTag: document.getElementById('root')
});