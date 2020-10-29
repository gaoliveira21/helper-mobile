import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Presentation/Welcome';
import DonationsScreen from '../screens/Presentation/Donations';
import CommunityScreen from '../screens/Presentation/Community';

const Stack = createStackNavigator();

const PresentationRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Donations" component={DonationsScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
    </Stack.Navigator>
  );
}

export default PresentationRoutes;
