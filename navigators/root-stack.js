import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/login';
import Home from './../screens/home';
import { Colors } from './../components/styles';
import DrawerStack from './drawer-stack';

const { tertiary, brand } = Colors;

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
          options={{ headerTintColor: brand, headerShown: false }}
          name='DrawerStack'
          component={DrawerStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
