import React, { useState, useEffect } from 'react';
import Home from "./src/pages/Home";
import Inicial from './src/pages/Inicial';
import DatabaseInit from './src/database/database-init';
import UserService from './src/services/user.services';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
new DatabaseInit

const Stack = createNativeStackNavigator();
export default function App() { 
          const [rotaInicial , setRotaInicial] = useState('Inicio');
      return(
        <NavigationContainer >
          <Stack.Navigator initialRouteName={rotaInicial}>
            <Stack.Screen name='Inicio' component={Inicial} />
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
      </NavigationContainer>
      );
}
