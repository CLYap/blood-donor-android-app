import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import * as Location from 'expo-location';
import {
  StyledContainer,
  InnerContainer,
  StyledButton,
  ButtonText,
  Colors,
  StyledText,
  ThemeStyledText,
  DarkLightStyledText,
} from './../components/styles';
import { getDistance } from 'geolib';
import { getBloodCentreService } from './../components/services/appointment-service';

const { theme } = Colors;

const BloodCentreList = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [bloodCentreLs, setBloodCentreList] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };

    const getBloodCentres = () => {
      getBloodCentreService().then((data) => {
        const bloodCentres = data.data;
        setBloodCentreList(bloodCentres);
      });
    };

    getLocation();
    getBloodCentres();
  }, []);

  const subtractDistance = (bloodCentreLatitude, bloodCentreLongitude) => {
    const bloodCentreCoords = {};
    bloodCentreCoords.latitude = parseFloat(bloodCentreLatitude);
    bloodCentreCoords.longitude = parseFloat(bloodCentreLongitude);

    if (location) {
      return getDistance(location, bloodCentreCoords) / 1000; //get km
    }
  };

  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <InnerContainer padding20>
        <ScrollView showsVerticalScrollIndicator={false}>
          {bloodCentreLs &&
            bloodCentreLs.map((data) => {
              return (
                <StyledButton
                  lightButton
                  marginBottom17
                  key={data.bloodCentreId}
                  onPress={() =>
                    navigation.navigate('AppointmentScreen', {
                      bloodCentreId: data.bloodCentreId,
                    })
                  }
                >
                  <ThemeStyledText fontSize17 fontWeightBold letterSpacing>
                    {data.bloodCentreName}
                  </ThemeStyledText>

                  <DarkLightStyledText marginBottom5>
                    {data.bloodCentreAddress}
                  </DarkLightStyledText>
                  <StyledText fontWeightBold>
                    in {subtractDistance(data.latitude, data.longitude)} km
                  </StyledText>
                </StyledButton>
              );
            })}
        </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

export default BloodCentreList;
