import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './src/components/navigators/main-navigator';
import UserInfoProvider from './src/components/context/user-info-provider';
import AccessLocation from './src/components/access-location';

export default function App() {
  return (
    <UserInfoProvider>
      <MainNavigator />
    </UserInfoProvider>
    /* <AccessLocation /> */
  );
}
