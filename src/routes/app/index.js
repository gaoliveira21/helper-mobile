import * as React from 'react';

import AuthRoutes from './auth';
import AppRoutes from './app';

const Routes = () => {
  const signed = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
