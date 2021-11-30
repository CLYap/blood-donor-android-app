import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  Badge,
  BadgeContainer,
  SubTitle,
  BadgePanel,
  BadgeFrame,
  BadgeTitle,
  Line,
  PanelTitle,
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

const Badges = () => {
  const [numOfDonation, setNumOfDonation] = useState(0);

  return (
    <StyledContainer badge>
      <StatusBar style='dark' />
      <ScrollView>
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
    </StyledContainer>
  );
};

export default Badges;
