import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../screens/home';
import Achievement from '../screens/achievement';
import Appointment from '../screens/appointment';
import DonationHistory from '../screens/donation-history';
import Profile from '../screens/profile';
import Logout from '../screens/logout';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const DrawerStack = (navigation) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Stack.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Appointment' component={Appointment} />
      <Drawer.Screen name='DonationHistory' component={DonationHistory} />
      <Drawer.Screen name='Achievement' component={Achievement} />
      <Drawer.Screen name='Logout' component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
