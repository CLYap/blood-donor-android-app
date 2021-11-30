import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/login';
import Logout from './../screens/logout';
import Home from './../screens/home';
import { Colors } from './../components/styles';
import DrawerStackScreen from './drawer-stack';

const { primary, tertiary, brand } = Colors;

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerShadowVisible: false,
        }}
        initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          options={{
            headerTintColor: primary,
            headerShown: true,
            headerStyle: {
              backgroundColor: brand,
            },
          }}
          name='DrawerStackScreen'
          component={DrawerStackScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
