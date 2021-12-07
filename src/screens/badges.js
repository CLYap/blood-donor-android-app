import React, { useState } from 'react';
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
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

const { theme } = Colors;

const Badges = () => {
  const [numOfDonation, setNumOfDonation] = useState(0);

  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <InnerContainer padding20>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PanelTitle>General</PanelTitle>
          <BadgePanel>
            <BadgeContainer>
              <BadgeFrame>
                <Fontisto name='blood-drop' size={55} color='white' />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <Line></Line>
          </BadgePanel>
          <PanelTitle>General</PanelTitle>
          <BadgePanel>
            <BadgeContainer>
              <BadgeFrame>
                <Fontisto name='blood-drop' size={55} color='white' />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <BadgeContainer>
              <BadgeFrame>
                <MaterialCommunityIcons
                  name='blood-bag'
                  size={55}
                  color='white'
                />
              </BadgeFrame>
              <BadgeTitle>First Donation</BadgeTitle>
            </BadgeContainer>
            <Line></Line>
          </BadgePanel>
        </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Badges;
