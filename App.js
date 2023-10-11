import React from 'react';
import Home from "./src/pages/Home";
import Inicial from './src/pages/Inicial';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name='Inicio' component={Inicial} />
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}
