import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../../screens/App/Profile';
import ChangePassword from '../../../screens/App/Profile/ChangePassword';
import CreditCard from '../../../screens/App/Profile/CreditCard';
import NewCreditCard from '../../../screens/App/Profile/NewCreditCard';
import Success from '../../../screens/App/Profile/Success';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="CreditCard" component={CreditCard} />
      <Stack.Screen name="NewCreditCard" component={NewCreditCard} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
