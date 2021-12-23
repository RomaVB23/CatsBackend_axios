import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/rootNavigator';

import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers['x-api-key'] = '8a35594d-a2a7-41bb-899e-9d25dc81dfc4';


export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
