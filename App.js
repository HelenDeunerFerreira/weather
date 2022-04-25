import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './src/pages/Menu';
import Carazinho from './src/pages/Carazinho';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Menu'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#1c3c94',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={
            {
              title: 'Menu',
            }
          }
        />

        <Stack.Screen
          name="Carazinho"
          component={Carazinho}
          options={
            { title: "Previsão de Carazinho" }
          }
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={
            { title: "Sobre a desenvolvedora" }
          }
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

