import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './root-navigator';
import DrawerNavigator from './drawer-navigator';
import { useLogin } from '../context/login-provider';

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
