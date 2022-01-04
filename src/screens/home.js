import React, { useState, useEffect } from 'react';
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
import { useUserInfo } from './../components/context/user-info-provider';
import { getLatestAppointmentService } from './../components/services/appointment-service';
import { getLatestDonationHistoryService } from './../components/services/donation-service';
import moment from 'moment';

const { theme } = Colors;

const Home = ({ navigation }) => {
  const { userProfile } = useUserInfo();
  const donorId = userProfile.donorId;
  const donorName = userProfile.fName + ' ' + userProfile.lName;
  const [appointment, setAppointment] = useState(null);
  const [donationHistory, setDonationHistory] = useState(null);

  useEffect(() => {
    const getAppointment = (id) => {
      getLatestAppointmentService(id)
        .then((data) => {
          if (data) setAppointment(data.data);
        })
        .catch((e) => console.log(e.message));
    };
    getAppointment(donorId);

    const getDonationHistory = (id) => {
      getLatestDonationHistoryService(id)
        .then((data) => {
          if (data) setDonationHistory(data.data);
        })
        .catch((e) => console.log(e.message));
    };
    getDonationHistory(donorId);
  }, [donorId]);

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
                Date:{' '}
                {appointment
                  ? moment(appointment.date, 'YYYY-MM-DD').format('D MMMM YYYY')
                  : '-'}
              </StyledText>
              <StyledText fontSize15 marginBottom17>
                Time:{' '}
                {appointment &&
                  moment(appointment.startTime, 'hh:mm:ss').format('LT')}{' '}
                -{' '}
                {appointment &&
                  moment(appointment.endTime, 'hh:mm:ss').format('LT')}
              </StyledText>
              <StyledText fontSize15 marginBottom17>
                Blood Centre:
                {appointment
                  ? appointment.bloodCentre.bloodCentreName +
                    ' ' +
                    appointment.bloodCentre.bloodCentreId
                  : '-'}
              </StyledText>
            </CardItem>
          </CardPanel>
          <CardPanel borderRound padding20 marginBottom17>
            <StyledText fontSize17 fontWeightBold marginBottom5>
              Last Donation:{' '}
              {donationHistory &&
                moment(donationHistory.date, 'YYYY-MM-DD').format(
                  'D MMMM YYYY'
                )}
            </StyledText>
            <StyledText fontSize15 marginBottom17>
              Blood Centre:{' '}
              {donationHistory &&
                donationHistory.staff.bloodCentre.bloodCentreName}
            </StyledText>
            <CardContainer>
              <CardItem detail>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Pressure
                </DarkLightStyledText>
                <ThemeStyledText fontWeightBold>
                  {donationHistory && donationHistory.bP}
                </ThemeStyledText>
              </CardItem>
              <CardItem detail>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Haemoglobin
                </DarkLightStyledText>
                <ThemeStyledText fontWeightBold fontSize15>
                  {donationHistory && donationHistory.haemoglobinCount} gm/dL
                </ThemeStyledText>
              </CardItem>
              <CardItem detail>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Pulse
                </DarkLightStyledText>
                <ThemeStyledText fontWeightBold>
                  {donationHistory && donationHistory.pulse} bpm
                </ThemeStyledText>
              </CardItem>
            </CardContainer>
            <CardItem detail>
              <DarkLightStyledText fontWeightBold fontSize15>
                COVID-19 Antibody Test
              </DarkLightStyledText>
              <ThemeStyledText fontWeightBold>
                {donationHistory &&
                  (donationHistory.covidAntibody == '+'
                    ? 'POSITIVE'
                    : 'NEGATIVE')}
              </ThemeStyledText>
            </CardItem>
          </CardPanel>
        </InnerContainer>
      </ScrollView>
    </StyledContainer>
  );
};

export default Home;
