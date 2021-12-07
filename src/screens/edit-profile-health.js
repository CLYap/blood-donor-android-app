import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Colors } from './../components/styles';

const { theme } = Colors;

const EditProfileHealth = () => {
  return (
    <View>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <Text>EditProfileHealth</Text>
    </View>
  );
};

export default EditProfileHealth;
