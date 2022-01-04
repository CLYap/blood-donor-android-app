import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../../../screens/chat';
import MessageList from '../../../screens/message-list';
import { Colors, StyledIcon } from '../../styles';
import { Feather } from '@expo/vector-icons';
import { HeaderScreenOptions } from '../../utils';

const { primary, theme } = Colors;

const Stack = createNativeStackNavigator();

const ChatStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={HeaderScreenOptions}
      initialRouteName='MessageList'
    >
      <Stack.Screen
        name='MessageList'
        component={MessageList}
        options={({ navigation }) => ({
          title: 'Recent Chat',
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
        name='ChatScreen'
        component={Chat}
        options={({ navigation }) => ({
          title: 'Messages',
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

export default ChatStack;
