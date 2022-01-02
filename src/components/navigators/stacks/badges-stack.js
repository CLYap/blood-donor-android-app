import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Badges from '../../../screens/badges';
import { Colors, StyledIcon } from '../../styles';
import { Feather } from '@expo/vector-icons';
import { HeaderScreenOptions } from '../../utils';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const BadgesStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={HeaderScreenOptions}
      initialRouteName='BadgesScreen'
    >
      <Stack.Screen
        name='BadgesScreen'
        component={Badges}
        options={({ navigation }) => ({
          title: 'Badges',
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

export default BadgesStack;
