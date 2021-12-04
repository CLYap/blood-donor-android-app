import React, { useState } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeStack from './stacks/home-stack';
import ProfileStack from './stacks/profile-stack';
import AppointmentStack from './stacks/appointment-stack';
import DonationHistoryStack from './stacks/donation-history-stack';
import BadgesStack from './stacks/badges-stack';
import LogoutModal from './../modals/logout-modal';
import { useLogin } from './../context/login-provider';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const { setIsLoggedIn } = useLogin();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={() => setModalVisible(true)} />
      <LogoutModal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        setIsLoggedIn={() => setIsLoggedIn(false)}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name='Home' component={HomeStack} />
      <Drawer.Screen name='Profile' component={ProfileStack} />
      <Drawer.Screen name='Appointment' component={AppointmentStack} />
      <Drawer.Screen name='DonationHistory' component={DonationHistoryStack} />
      <Drawer.Screen name='Badges' component={BadgesStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
