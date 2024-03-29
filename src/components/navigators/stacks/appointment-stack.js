import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appointment from '../../../screens/appointment';
import BloodCentreList from '../../../screens/blood-centre-list';
import { Colors, StyledIcon } from '../../styles';
import { Feather } from '@expo/vector-icons';
import { HeaderScreenOptions } from '../../utils';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const AppointmentStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={HeaderScreenOptions}
      initialRouteName='BloodCentreList'
    >
      <Stack.Screen
        name='BloodCentreList'
        component={BloodCentreList}
        options={({ navigation }) => ({
          title: 'Select Blood Centre',
          headerLeft: () => (
            <StyledIcon menu>
              <Feather
                name='menu'
                size={24}
                color={primary}
                onPress={() => navigation.toggleDrawer()}
              />
            </StyledIcon>
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen
        name='AppointmentScreen'
        component={Appointment}
        options={({ navigation }) => ({
          title: 'Make Appointment',
          headerLeft: () => (
            <StyledIcon menu>
              <Feather
                name='menu'
                size={24}
                color={primary}
                onPress={() => navigation.toggleDrawer()}
              />
            </StyledIcon>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
