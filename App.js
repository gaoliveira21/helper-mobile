import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
