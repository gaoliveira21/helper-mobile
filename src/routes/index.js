import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useApp } from '../hooks/app';

import PresentationRoutes from './presentation';
import AppRoutes from './app';

const Routes = () => {

  const { firstAccess } = useApp();

  return (
    <NavigationContainer>
      {firstAccess ? <PresentationRoutes /> : <AppRoutes />}
    </NavigationContainer>
  )
}

export default Routes;