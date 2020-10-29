import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Presentation/Welcome';
import DonationsScreen from '../screens/Presentation/Donations';
import CommunityScreen from '../screens/Presentation/Community';

const Stack = createStackNavigator();

const PresentationRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Donations" component={DonationsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Community" component={CommunityScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default PresentationRoutes;
