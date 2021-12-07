import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Colors, StyledButton } from './../components/styles';

const { theme } = Colors;

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <Text>Profile</Text>
      <StyledButton onPress={() => navigation.navigate('EditProfileGeneral')}>
        <Text>open general</Text>
      </StyledButton>
      <StyledButton onPress={() => navigation.navigate('EditProfileHealth')}>
        <Text>open health</Text>
      </StyledButton>
    </View>
  );
};

export default Profile;
