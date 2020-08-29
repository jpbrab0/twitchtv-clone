import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from  '@expo/vector-icons'

import ComingSoon from './src/Pages/ComingSoon';
import Following from './src/Pages/Following'

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Seguindo" component={Following} options={{
          tabBarColor:'#000014',
          tabBarIcon: ({size, focused}) => {
            return(
              <Ionicons 
                name="md-heart"
                size={24}
                color={focused ? '#7159c1' : '#fff'}
              />
            )
          }
        }} />
        <Tab.Screen name="Descubra" component={ComingSoon} options={{
          tabBarColor:'#000014',
          tabBarIcon: ({size, focused}) => {
            return(
              <MaterialCommunityIcons 
                name="compass-outline"
                size={24}
                color={focused ? '#7159c1' : '#fff'}
              />
            )
          }
        }}/>
        <Tab.Screen name="Procurar" component={ComingSoon} options={{
          tabBarColor:'#000014',
          tabBarIcon: ({size, focused}) => {
            return(
              <Ionicons 
                name="md-browsers"
                size={24}
                color={focused ? '#7159c1' : '#fff'}
              />
            )
          }
        }}/>
        <Tab.Screen name="Esports" component={ComingSoon} options={{
          tabBarColor:'#000014',
          tabBarIcon: ({size, focused}) => {
            return(
              <MaterialCommunityIcons 
                name="trophy-outline"
                size={24}
                color={focused ? '#7159c1' : '#fff'}
              />
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}