import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './src/pages/Menu/Menu';
import Previsao from './src/pages/Previsao/Previsao';
import Sobre from './src/pages/Sobre/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Menu'
        screenOptions={{
          headerTitle: "",
        }}
      >

        <Stack.Screen
          name="Menu"
          component={Menu}
        />

        <Stack.Screen
          name="Previsao"
          component={Previsao}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

