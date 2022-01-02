import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './stacks/home-stack';
import ProfileStack from './stacks/profile-stack';
import AppointmentStack from './stacks/appointment-stack';
import DonationHistoryStack from './stacks/donation-history-stack';
import BadgesStack from './stacks/badges-stack';
import SideBar from '../side-bar';
import Chat from '../../screens/chat';
import {
  FontAwesome5,
  MaterialIcons,
  Fontisto,
  FontAwesome,
  Entypo,
} from '@expo/vector-icons';
import { Colors } from './../styles';

const { theme, primary, tertiary, lightTheme } = Colors;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: lightTheme,
        drawerActiveTintColor: theme,
        drawerInactiveTintColor: tertiary,
        drawerLabelStyle: { marginLeft: -20, fontSize: 14, fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen
        name='Home'
        component={HomeStack}
        options={{
          title: 'Home',
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='home' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileStack}
        options={{
          title: 'Profile',
          drawerIcon: ({ color }) => (
            <MaterialIcons name='person' size={28} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Appointment'
        component={AppointmentStack}
        options={{
          title: 'Appointment',
          drawerIcon: ({ color }) => (
            <FontAwesome5 name='calendar-alt' size={26} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='DonationHistory'
        component={DonationHistoryStack}
        options={{
          title: 'Donation History',
          drawerIcon: ({ color }) => (
            <Fontisto name='history' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Badges'
        component={BadgesStack}
        options={{
          title: 'Badges',
          drawerIcon: ({ color }) => (
            <FontAwesome name='trophy' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Chat'
        component={Chat}
        options={{
          title: 'Live Chat',
          drawerIcon: ({ color }) => (
            <Entypo name='chat' size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
