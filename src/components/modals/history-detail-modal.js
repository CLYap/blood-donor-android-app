import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import {
  ModalContainer,
  RightIcon,
  Colors,
  CardContainer,
  CardItem,
  StyledText,
  DarkLightStyledText,
  ThemeStyledText,
  Line,
} from './../styles';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

const { theme, primary } = Colors;

const HistoryDetailModal = ({ isOpen, onClose, details }) => {
  return (
    <Modal
      isVisible={isOpen}
      animationIn='slideInRight'
      animationOut='slideOutRight'
    >
      <ModalContainer detailModal>
        <RightIcon top onPress={onClose}>
          <Ionicons name='close-sharp' size={35} color={theme} />
        </RightIcon>
        <CardItem header>
          <DarkLightStyledText fontWeightBold fontSize15>
            Date
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {moment(details.date, 'YYYY-MM-DD').format('D MMMM YYYY')}
          </StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Time
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {moment(details.time, 'hh:mm:ss').format('LT')}
          </StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Blood Centre (ID)
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {details.staff && details.staff.bloodCentre.bloodCentreName} (
            {details.staff && details.staff.bloodCentre.bloodCentreId})
          </StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Blood Group
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {details.donor && details.donor.bloodType}
          </StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Blood Unit Collected ( /mL )
          </DarkLightStyledText>
          <StyledText marginBottom17>{details.bloodUnit}</StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Collected by
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {details.staff && details.staff.fName}{' '}
            {details.staff && details.staff.lName} (
            {details.staff && details.staff.staffId})
          </StyledText>
        </CardItem>
        <Line />
        <StyledText letterSpacing fontWeightBold marginBottom17>
          Health Vitals
        </StyledText>
        <CardContainer>
          <CardItem detail>
            <DarkLightStyledText fontWeightBold fontSize15>
              Pressure
            </DarkLightStyledText>
            <ThemeStyledText fontWeightBold>{details.bP}</ThemeStyledText>
          </CardItem>
          <CardItem detail>
            <DarkLightStyledText fontWeightBold fontSize15>
              Haemoglobin
            </DarkLightStyledText>
            <ThemeStyledText fontWeightBold fontSize15>
              {details.haemoglobinCount}gm/dL
            </ThemeStyledText>
          </CardItem>
          <CardItem detail>
            <DarkLightStyledText fontWeightBold fontSize15>
              Pulse
            </DarkLightStyledText>
            <ThemeStyledText fontWeightBold>{details.pulse}bpm</ThemeStyledText>
          </CardItem>
        </CardContainer>
        <CardItem detail>
          <DarkLightStyledText fontWeightBold fontSize15>
            COVID-19 Antibody Test
          </DarkLightStyledText>
          <ThemeStyledText fontWeightBold>
            {details.covidAntibody == '+' ? 'POSITIVE' : 'NEGATIVE'}
          </ThemeStyledText>
        </CardItem>
      </ModalContainer>
    </Modal>
  );
};

export default HistoryDetailModal;
