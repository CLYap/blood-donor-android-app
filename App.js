import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './src/navigators/main-navigator';
import LoginProvider from './src/context/login-provider';
import { Provider } from 'react-redux';
import { Store } from './src/components/redux/store';

export default function App() {
  return (
    <Provider store={Store}>
      <LoginProvider>
        <MainNavigator />
      </LoginProvider>
    </Provider>
  );
}
