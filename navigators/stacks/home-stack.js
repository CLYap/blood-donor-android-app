import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home';
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

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={headerScreenOptions}
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
