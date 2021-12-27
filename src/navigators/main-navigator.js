import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './root-navigator';
import DrawerNavigator from './drawer-navigator';
import { useUserInfo } from '../context/user-info-provider';

const MainNavigator = () => {
  const { isLoggedIn } = useUserInfo();

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
