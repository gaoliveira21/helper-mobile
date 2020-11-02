import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../screens/App/Auth/SignIn';
import Step1 from '../../screens/App/Auth/SignUp/Step1';
import Step2 from '../../screens/App/Auth/SignUp/Step2';
import Confirmation from '../../screens/App/Auth/SignUp/Confirmation';
import Success from '../../screens/App/Auth/SignUp/Success';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F9F9F9',
          elevation: 0,
          shadowOpacity: 0,
        },
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
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpStep1"
        component={Step1}
        options={({ navigation }) => ({
          title: 'Cadastro',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Entypo name="chevron-left" size={28} color="#FF6B6C" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="SignUpStep2"
        component={Step2}
        options={({ navigation }) => ({
          title: 'Cadastro',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpStep1')}
            >
              <Entypo name="chevron-left" size={28} color="#FF6B6C" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="SignUpConfirmation"
        component={Confirmation}
        options={({ navigation }) => ({
          title: 'Cadastro',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpStep2')}
            >
              <Entypo name="chevron-left" size={28} color="#FF6B6C" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="SignUpSuccess"
        component={Success}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
