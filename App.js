import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppProvider from './src/hooks/app';
import Routes from './src/routes';

import { Container, LoadingImage, LogoText, LoadingText } from './src/styles/loading';

import loading from './src/assets/loading.png'

export default function App() {
  const [loadingApp, setLoadingApp] = useState(true);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Montserrat_700Bold
  });

  useEffect(() => {
    async function loadStoragedData() {
      setTimeout(() => {
        setLoadingApp(false);
      }, 1500);
    }

    loadStoragedData();
  }, []);

  if (!fontsLoaded || loadingApp) {
    return (
      <Container>
        <LogoText>Helper</LogoText>
        <LoadingImage source={loading} />
        <ActivityIndicator color='#FF6B6C' size={48}/>
        <LoadingText>Carregando...</LoadingText>
      </Container>
    );
  } else {
    return (
      <AppProvider>
        <Routes />
        <StatusBar style="auto" />
      </AppProvider>
    );
  }
}
