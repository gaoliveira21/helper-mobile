import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import PresentationRoutes from './presentation';
import AppRoutes from './app';

const Routes = () => {

  const firstAccess = false;

  return (
    <NavigationContainer>
      {firstAccess ? <PresentationRoutes /> : <AppRoutes />}
    </NavigationContainer>
  )
}

export default Routes;