import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './src/navigators/main-navigator';
import LoginProvider from './src/context/login-provider';
import Profile from './src/screens/profile';

export default function App() {
  return (
    <LoginProvider>
      <MainNavigator />
    </LoginProvider>
    // <Profile />
  );
}
