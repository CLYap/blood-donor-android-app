import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/login';
import Appointment from './../screens/appointment';
import { Colors } from './../components/styles';

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
          options={{ headerTintColor: brand }}
          name='Appointment'
          component={Appointment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
