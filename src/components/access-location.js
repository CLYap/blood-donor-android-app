import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const AccessLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Foreground Permission to access location was denied');
        return;
      } else {
        let { status } = await Location.requestBackgroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Background Permission to access location was denied');
          return;
        }
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>{text}</Text>
    </View>
  );
};

export default AccessLocation;
