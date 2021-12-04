import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonationHistory from '../../screens/donation-history';
import { Colors, StyledIcon } from '../../components/styles';
import { Feather } from '@expo/vector-icons';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const headerScreenOptions = {
  headerStyle: {
    backgroundColor: theme,
  },
  headerTintColor: primary,
  headerTransparent: true,
  headerTitle: '',
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerShadowVisible: false,
};

const DonationHistoryStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={headerScreenOptions}
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
