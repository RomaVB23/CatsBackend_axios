import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

// Blocks

import Main from '../screens/Main'
import ChooseCats from '../screens/ChooseCats'
import FavoriteCats from '../screens/FavoriteCats'
//
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Kate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CatsAll"
        component={Main}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="ChooseCats"
        component={ChooseCats}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Main') {
          return (
            <SimpleLineIcons name="home" size={24} color={color} />
          );
        } else if (route.name === 'Favorites Cats') {
          return (
            <Feather name="heart" size={24} color={color} />
          );
        }
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: '#5533EA',
    })}>
      <Tab.Screen
        name="Main"
        component={Kate}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites Cats"
        component={FavoriteCats}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}