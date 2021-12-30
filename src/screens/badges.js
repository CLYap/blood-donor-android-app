import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  Badge,
  BadgeContainer,
  BadgePanel,
  BadgeFrame,
  BadgeTitle,
  Line,
  PanelTitle,
  Colors,
  StyledText,
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';
import {
  Fontisto,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  Feather,
} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { theme } = Colors;

const Badges = () => {
  const [donationFrequency, setDonationFrequency] = useState(0);

  useEffect(() => {
    getDonationFrequency();
  }, []);

  const getDonationFrequency = async () => {
    try {
      const data = JSON.parse(await AsyncStorage.getItem('donationHistories'));
      setDonationFrequency(data ? data.length : 0);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <InnerContainer padding20>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PanelTitle>Donation Awards</PanelTitle>
          <StyledText fontSize17 marginBottom17>
            Donate more to unlock more!
          </StyledText>
          <BadgePanel>
            {donationFrequency >= 1 ? (
              <BadgeContainer>
                <BadgeFrame>
                  <Fontisto name='blood-drop' size={55} color='white' />
                </BadgeFrame>
                <BadgeTitle>First-Time Donation</BadgeTitle>
              </BadgeContainer>
            ) : (
              <EmptyBox />
            )}
            {donationFrequency >= 5 ? (
              <BadgeContainer>
                <BadgeFrame>
                  <MaterialCommunityIcons
                    name='blood-bag'
                    size={55}
                    color='white'
                  />
                </BadgeFrame>
                <BadgeTitle>5 Donations</BadgeTitle>
              </BadgeContainer>
            ) : (
              <EmptyBox />
            )}
            {donationFrequency >= 10 ? (
              <BadgeContainer>
                <BadgeFrame>
                  <Feather name='award' size={55} color='white' />
                </BadgeFrame>
                <BadgeTitle>10 Donations</BadgeTitle>
              </BadgeContainer>
            ) : (
              <EmptyBox />
            )}
            {donationFrequency >= 20 ? (
              <BadgeContainer>
                <BadgeFrame>
                  <FontAwesome5 name='award' size={55} color='white' />
                </BadgeFrame>
                <BadgeTitle>20 Donations</BadgeTitle>
              </BadgeContainer>
            ) : (
              <EmptyBox />
            )}
            {donationFrequency >= 20 ? (
              <BadgeContainer>
                <BadgeFrame>
                  <MaterialCommunityIcons
                    name='trophy-award'
                    size={70}
                    color='white'
                  />
                </BadgeFrame>
                <BadgeTitle>45 Donations</BadgeTitle>
              </BadgeContainer>
            ) : (
              <EmptyBox />
            )}
          </BadgePanel>
        </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

const EmptyBox = () => {
  return (
    <BadgeContainer>
      <BadgeFrame secondary>
        <Entypo name='lock' size={55} color='white' />
      </BadgeFrame>
      <BadgeTitle>???</BadgeTitle>
    </BadgeContainer>
  );
};

export default Badges;
