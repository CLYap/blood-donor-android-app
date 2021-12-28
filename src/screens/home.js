import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  StyledText,
  PageTitle,
  Colors,
  CardContainer,
  CardPanel,
  CardItem,
  DarkLightStyledText,
  ThemeStyledText,
  StyledButton,
  ButtonText,
} from './../components/styles';
import { useUserInfo } from './../context/user-info-provider';

const { theme } = Colors;

const Home = ({ navigation }) => {
  const { userProfile } = useUserInfo();
  const donorName = userProfile.fName + ' ' + userProfile.lName;
  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InnerContainer padding20>
          <PageTitle tertiary marginBottom5>
            Welcome, {donorName}!
          </PageTitle>
          <StyledButton
            marginBottom17
            onPress={() => navigation.navigate('Appointment')}
          >
            <ButtonText>Make Appointment</ButtonText>
          </StyledButton>
          <StyledButton
            marginBottom17
            onPress={() => navigation.navigate('DonationHistory')}
          >
            <ButtonText>View Donation History</ButtonText>
          </StyledButton>
          <StyledButton
            marginBottom17
            onPress={() => navigation.navigate('Chat')}
          >
            <ButtonText>Live Chat</ButtonText>
          </StyledButton>
          <CardPanel borderRound padding20 marginBottom17>
            <StyledText fontSize17 fontWeightBold>
              Your Appointment
            </StyledText>
            <CardItem header>
              <StyledText fontSize15 marginBottom17>
                Date: 28/09/2020
              </StyledText>
              <StyledText fontSize15 marginBottom17>
                Time: 1500 - 0400
              </StyledText>
              <StyledText fontSize15 marginBottom17>
                Blood Centre: Blood Centre
              </StyledText>
            </CardItem>
          </CardPanel>
          <CardPanel borderRound padding20 marginBottom17>
            <StyledText fontSize17 fontWeightBold marginBottom5>
              Last Donation: 28/09/2009
            </StyledText>
            <StyledText fontSize15 marginBottom17>
              Blood Centre: Pantai Hospital
            </StyledText>
            <CardContainer>
              <CardItem detail>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Pressure
                </DarkLightStyledText>
                <ThemeStyledText fontWeightBold>128/90</ThemeStyledText>
              </CardItem>
              <CardItem detail>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Haemoglobin
                </DarkLightStyledText>
                <ThemeStyledText fontWeightBold fontSize15>
                  900 gm/dL
                </ThemeStyledText>
              </CardItem>
              <CardItem detail>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Pulse
                </DarkLightStyledText>
                <ThemeStyledText fontWeightBold>300 bpm</ThemeStyledText>
              </CardItem>
            </CardContainer>
            <CardItem detail>
              <DarkLightStyledText fontWeightBold fontSize15>
                COVID-19 Antibody Test
              </DarkLightStyledText>
              <ThemeStyledText fontWeightBold>POSITIVE</ThemeStyledText>
            </CardItem>
          </CardPanel>
        </InnerContainer>
      </ScrollView>
    </StyledContainer>
  );
};

export default Home;
