import React, { useState } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Badges from '../screens/badges';
import Appointment from '../screens/appointment';
import DonationHistory from '../screens/donation-history';
import Profile from '../screens/profile';
import Logout from '../screens/logout';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={() => setModalVisible(true)} />
      <Logout isOpen={modalVisible} onClose={() => setModalVisible(false)} />
    </DrawerContentScrollView>
  );
}

const DrawerStackScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Appointment' component={Appointment} />
        <Drawer.Screen name='DonationHistory' component={DonationHistory} />
        <Drawer.Screen name='Badges' component={Badges} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStackScreen;
