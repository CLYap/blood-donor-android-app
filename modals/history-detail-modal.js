import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import {
  ModalContainer,
  ButtonContainer,
  RightIcon,
  Colors,
  CardContainer,
  CardItem,
  StyledText,
  DarkLightStyledText,
  ThemeStyledText,
  Line,
} from './../components/styles';
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
        <RightIcon closeButton onPress={onClose}>
          <Ionicons name='close-sharp' size={35} color={theme} />
        </RightIcon>
        <CardItem header>
          <DarkLightStyledText fontWeightBold fontSize15>
            Date
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {moment(details.date, 'DD-MM-YYYY').format('D MMMM YYYY')}
          </StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Time
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {moment(details.time, 'HHmm').format('LT')}
          </StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Blood Centre (ID)
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {details.centerName} ({details.centerID})
          </StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Blood Group
          </DarkLightStyledText>
          <StyledText marginBottom17>{details.bloodGroup}</StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Blood Unit Collected ( /mL )
          </DarkLightStyledText>
          <StyledText marginBottom17>{details.bloodUnit}</StyledText>
          <DarkLightStyledText fontWeightBold fontSize15>
            Collected by
          </DarkLightStyledText>
          <StyledText marginBottom17>
            {details.staffName} ({details.staffUUID})
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
              {details.heamoglobinCount}gm/dL
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
