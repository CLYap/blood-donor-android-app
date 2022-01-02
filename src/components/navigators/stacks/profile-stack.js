import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../../screens/profile';
import { Colors, StyledIcon } from '../../styles';
import { Feather } from '@expo/vector-icons';
import { HeaderScreenOptions } from '../../utils';
import EditProfileHealth from '../../../screens/edit-profile-health';
import EditProfileGeneral from '../../../screens/edit-profile-general';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={HeaderScreenOptions}
      initialRouteName='ProfileScreen'
    >
      <Stack.Screen
        name='ProfileScreen'
        component={Profile}
        options={({ navigation }) => ({
          title: 'Profile',
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
      <Stack.Screen
        name='EditProfileGeneral'
        component={EditProfileGeneral}
        options={{ headerTitle: 'Edit Personal Details' }}
      ></Stack.Screen>
      <Stack.Screen
        name='EditProfileHealth'
        component={EditProfileHealth}
        options={{ headerTitle: 'Edit Health Information' }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileStack;
