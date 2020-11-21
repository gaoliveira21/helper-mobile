import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage';

import { useApp } from '../hooks/app';

import PresentationRoutes from './presentation';
import AppRoutes from './app';

const Routes = () => {
  const { firstAccess } = useApp();

  // AsyncStorage.clear();

  return (
    <NavigationContainer>
      {firstAccess ? <PresentationRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
