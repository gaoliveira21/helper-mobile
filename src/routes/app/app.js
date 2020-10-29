import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import Dashboard from '../../screens/App/Dashboard';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
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
    </Tab.Navigator>
  );
}

export default AppRoutes;
