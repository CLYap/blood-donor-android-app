import { StatusBar } from 'expo-status-bar';
import React from 'react';
import DrawerStackScreen from './navigators/drawer-stack';
import Login from './screens/login';

export default function App() {
  const isLoggedIn = true;
  return isLoggedIn ? <DrawerStackScreen /> : <Login />;
}
