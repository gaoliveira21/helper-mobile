import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../screens/App/Auth/SignIn';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
