import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Colors } from './../components/styles';

const { theme } = Colors;

const Home = () => {
  return (
    <View>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
