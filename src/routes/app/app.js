import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import Dashboard from '../../screens/App/Dashboard';
import CaseStack from './stacks/cases';
import EntityStack from './stacks/entities';
import ProfileStack from './stacks/profile';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontSize: 14,
      },
      inactiveTintColor: '#999999',
      activeTintColor: '#FF6B6C',
    }}>

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Entypo name="home" size={size} color={focused ? color : '#999'} />
            );
          }
        }}
      />

      <Tab.Screen
        name="Cases"
        component={CaseStack}
        options={{
          tabBarLabel: 'Casos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Entypo name="suitcase" size={size} color={focused ? color : '#999'} />
            );
          }
        }}
      />

      <Tab.Screen
        name="Entities"
        component={EntityStack}
        options={{
          tabBarLabel: 'Instituições',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <FontAwesome name="institution" size={size} color={focused ? color : '#999'} />
            );
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <FontAwesome name="user" size={size} color={focused ? color : '#999'} />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
