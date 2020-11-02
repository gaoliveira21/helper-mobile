import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Entity from '../../../screens/App/Entities';
import Details from '../../../screens/App/Entities/Details';

const Stack = createStackNavigator();

const EntitiesRoutes = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName && routeName !== 'Entity') {
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
        name="Entity"
        component={Entity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          title: 'Perfil da instituição',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Entity')}>
              <Entypo name="chevron-left" size={28} color="#FF6B6C" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default EntitiesRoutes;
