import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cases from '../../../screens/App/Cases';
import Details from '../../../screens/App/Cases/Details';
import Payment from '../../../screens/App/Cases/Payment';
import Success from '../../../screens/App/Cases/Success';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cases" component={Cases} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
