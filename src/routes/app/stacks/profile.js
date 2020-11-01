import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../../screens/App/Profile';
import ChangePassword from '../../../screens/App/Profile/ChangePassword';
import CreditCard from '../../../screens/App/Profile/CreditCard';
import NewCreditCard from '../../../screens/App/Profile/NewCreditCard';
import Success from '../../../screens/App/Profile/Success';

const Stack = createStackNavigator();

const ProfileRoutes = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName && routeName !== 'Profile') {
      navigation.setOptions({ tabBarVisible: false })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [navigation, route])

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
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

      <Stack.Screen name="ChangePassword" component={ChangePassword} options={({ navigation }) => ({
        title: 'Alterar senha',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Entypo name="chevron-left" size={28} color="#FF6B6C" />
          </TouchableOpacity>
        )
      })} />

      <Stack.Screen name="CreditCard" component={CreditCard} options={({ navigation }) => ({
        title: 'Gerenciar cartões',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Entypo name="chevron-left" size={28} color="#FF6B6C" />
          </TouchableOpacity>
        )
      })} />

      <Stack.Screen name="NewCreditCard" component={NewCreditCard} />

      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}

export default ProfileRoutes;
