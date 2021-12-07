import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonationHistory from '../../screens/donation-history';
import { Colors, StyledIcon } from '../../components/styles';
import { Feather } from '@expo/vector-icons';
import { HeaderScreenOptions } from '../../components/utils';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const DonationHistoryStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={HeaderScreenOptions}
      initialRouteName='DonationHistoryScreen'
    >
      <Stack.Screen
        name='DonationHistoryScreen'
        component={DonationHistory}
        options={({ navigation }) => ({
          title: 'Donation History',
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

export default DonationHistoryStack;
