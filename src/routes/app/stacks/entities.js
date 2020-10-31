import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Entity from '../../../screens/App/Entity';
import Details from '../../../screens/App/Entity/Details';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entity" component={Entity} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
