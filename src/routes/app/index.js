import * as React from 'react';

import AuthRoutes from './auth';
import AppRoutes from './app';

const Routes = () => {

  const signed = true;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;