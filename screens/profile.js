import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Colors } from './../components/styles';

const { theme } = Colors;

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
