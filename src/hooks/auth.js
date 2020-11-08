/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext, createContext } from 'react';
import { Alert } from 'react-native';
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
      setUser(donator);
    } catch (error) {
      Alert.alert('Falha na autenticação!', 'verifique seus dados');
    }
  }

  async function signUp(data) {
    try {
      const response = await api.post('/donators', data);

      const { token, donator } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('@helper:token', token);
      await AsyncStorage.setItem('@helper:pre:user', JSON.stringify(donator));
    } catch (error) {
      Alert.alert('Falha no cadastro!', 'verifique seus dados');
    }
  }

  async function finishSignUp() {
    const userStoraged = JSON.parse(
      await AsyncStorage.getItem('@helper:pre:user')
    );
    await AsyncStorage.removeItem('@helper:pre:user');
    await AsyncStorage.setItem('@helper:user', JSON.stringify(userStoraged));
    setUser(userStoraged);
  }

  async function updateProfile(data) {
    try {
      await api.put('/donators', data);

      await AsyncStorage.setItem(
        '@helper:user',
        JSON.stringify({ ...user, ...data })
      );
      setUser({ ...user, ...data });
    } catch (error) {
      Alert.alert('Falha na alteração do perfil!', 'verifique seus dados');
    }
  }

  async function changePassword(data) {
    try {
      await api.put('/donators', data);
    } catch (error) {
      Alert.alert(
        'Falha na alteração da senha!',
        'verifique os dados enviados'
      );
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove(['@helper:token', '@helper:user']);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        finishSignUp,
        updateProfile,
        changePassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}

export default AuthProvider;
