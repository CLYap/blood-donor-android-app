import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/login';
import ResetPassword from './../screens/reset-password';
import { Colors } from './../components/styles';

const { tertiary } = Colors;

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
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
      <Stack.Screen name='ResetPassword' component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
