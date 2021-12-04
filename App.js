import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './navigators/main-navigator';
import LoginProvider from './context/login-provider';

export default function App() {
  return (
    <LoginProvider>
      <MainNavigator />
    </LoginProvider>
  );
}
