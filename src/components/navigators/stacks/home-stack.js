import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../screens/home';
import { Colors, StyledIcon } from '../../styles';
import { Feather } from '@expo/vector-icons';
import { HeaderScreenOptions } from '../../utils';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={HeaderScreenOptions}
      initialRouteName='HomeScreen'
    >
      <Stack.Screen
        name='HomeScreen'
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
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

export default HomeStack;
