import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ComingSoon from './src/Pages/ComingSoon';
import Following from './src/Pages/Following'
const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Seguindo" component={Following} />
        <Tab.Screen name="Descubra" component={ComingSoon} />
        <Tab.Screen name="Procurar" component={ComingSoon} />
        <Tab.Screen name="Esports" component={ComingSoon} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}