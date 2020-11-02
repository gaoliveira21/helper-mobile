import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cases from '../../../screens/App/Cases';
import Details from '../../../screens/App/Cases/Details';
import Payment from '../../../screens/App/Cases/Payment';
import Success from '../../../screens/App/Cases/Success';

const Stack = createStackNavigator();

const CasesRoutes = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName && routeName !== 'Cases') {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

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
        name="Cases"
        component={Cases}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          title: 'Detalhes do caso',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cases')}>
              <Entypo name="chevron-left" size={28} color="#FF6B6C" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen name="Payment" component={Payment} />

      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CasesRoutes;
