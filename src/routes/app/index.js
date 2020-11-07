import * as React from 'react';

import AuthRoutes from './auth';
import AppRoutes from './app';

import { useAuth } from '../../hooks/auth';

const Routes = () => {
  const { signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
