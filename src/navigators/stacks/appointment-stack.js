import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appointment from '../../screens/appointment';
import { Colors, StyledIcon } from '../../components/styles';
import { Feather } from '@expo/vector-icons';
import { HeaderScreenOptions } from '../../components/utils';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const AppointmentStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={HeaderScreenOptions}
      initialRouteName='AppointmentScreen'
    >
      <Stack.Screen
        name='AppointmentScreen'
        component={Appointment}
        options={({ navigation }) => ({
          title: 'Appointment',
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
