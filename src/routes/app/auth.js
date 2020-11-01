import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../screens/App/Auth/SignIn';
import Step1 from '../../screens/App/Auth/SignUp/Step1';
import Step2 from '../../screens/App/Auth/SignUp/Step2';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#FF6B6C',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpStep1" component={Step1} options={({ navigation }) => ({
        title: 'Cadastro',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Entypo name="chevron-left" size={28} color="#FF6B6C" />
          </TouchableOpacity>
        )
      })} />
      <Stack.Screen name="SignUpStep2" component={Step2} options={({ navigation }) => ({
        title: 'Cadastro',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('SignUpStep1')}>
            <Entypo name="chevron-left" size={28} color="#FF6B6C" />
          </TouchableOpacity>
        )
      })} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
