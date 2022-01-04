import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
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
import { getAppointmentSlotService } from './../components/services/appointment-service';
import RequestAppointmentModal from './../components/modals/request-appointment-modal';
import moment from 'moment';
import { useUserInfo } from './../components/context/user-info-provider';
import { requestAppointmentService } from './../components/services/appointment-service';

const { theme } = Colors;

const Appointment = function ({ route, navigation }) {
  const { bloodCentreId } = route.params;
  const [appointmentSessionLs, setAppointmentSessionLs] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState({});
  const { userProfile } = useUserInfo();
  const donorId = userProfile.donorId;

  useEffect(() => {
    const getAppointmentSession = (bloodCentreId) => {
      getAppointmentSlotService(bloodCentreId).then((data) => {
        const appointmentSessions = data.data;
        setAppointmentSessionLs(appointmentSessions);
      });
    };
    getAppointmentSession(bloodCentreId);
  }, [bloodCentreId]);

  const makeRequest = (donorId, appointmentSessionId) => {
    requestAppointmentService(donorId, appointmentSessionId);
  };

  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <InnerContainer padding20>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StyledText fontSize17 fontWeightBold letterSpacing marginBottom17>
            You may pick a session and come at any time withn the allocated time
          </StyledText>
          {appointmentSessionLs &&
            appointmentSessionLs.map((data) => {
              return (
                <StyledButton
                  lightButton
                  marginBottom17
                  key={data.appointmentSessionId}
                  onPress={() => {
                    setModalVisible(true);
                    setDetails(data);
                  }}
                >
                  <ThemeStyledText fontSize17 fontWeightBold>
                    {moment(data.date, 'YYYY-MM-DD').format('D MMMM YYYY')}
                  </ThemeStyledText>

                  <DarkLightStyledText marginBottom5>
                    {moment(data.startTime, 'hh:mm:ss').format('LT')} -{' '}
                    {moment(data.endTime, 'hh:mm:ss').format('LT')}
                  </DarkLightStyledText>
                </StyledButton>
              );
            })}
          <RequestAppointmentModal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            details={details}
            makeRequest={() => {
              makeRequest(donorId, details.appointmentSessionId);
              setModalVisible(false);
            }}
          />
        </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Appointment;
