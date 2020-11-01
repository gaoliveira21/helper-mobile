import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Entity from '../../../screens/App/Entities';
import Details from '../../../screens/App/Entities/Details';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entity" component={Entity} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
