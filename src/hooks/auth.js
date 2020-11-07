/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const storagedToken = await AsyncStorage.getItem('@helper:token');
      const storagedUser = JSON.parse(
        await AsyncStorage.getItem('@helper:user')
      );
      setUser(storagedUser);
      if (storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
    })();
  }, []);

  async function signIn({ password, email }) {
    try {
      const response = await api.post('/donators/auth', { email, password });

      const { token, donator } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('@helper:token', token);
      await AsyncStorage.setItem('@helper:user', JSON.stringify(donator));

      console.log(token, donator);
      setUser(donator);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}

export default AuthProvider;
