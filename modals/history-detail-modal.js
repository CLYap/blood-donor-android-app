import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import {
  ModalContainer,
  StyledLabel,
  ButtonContainer,
  RightIcon,
  ButtonText,
  StyledIcon,
  Colors,
  CardContainer,
  CardPanel,
  CardView,
  CardItem,
  StyledText,
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
          <StyledLabel lightLabel>Date</StyledLabel>
          <StyledText left fontWeightNormal>
            {moment(details.date, 'DD-MM-YYYY').format('D MMMM YYYY')}
          </StyledText>
          <StyledLabel lightLabel>Time</StyledLabel>
          <StyledText left fontWeightNormal>
            {moment(details.time, 'HHmm').format('LT')}
          </StyledText>
          <StyledLabel lightLabel>Blood Centre (ID)</StyledLabel>
          <StyledText left fontWeightNormal>
            {details.centerName} ({details.centerID})
          </StyledText>
          <StyledLabel lightLabel>Blood Group</StyledLabel>
          <StyledText left fontWeightNormal>
            {details.bloodGroup}
          </StyledText>
          <StyledLabel lightLabel>Blood Unit Collected ( /mL )</StyledLabel>
          <StyledText left fontWeightNormal>
            {details.bloodUnit}
          </StyledText>
          <StyledLabel lightLabel>Collected by</StyledLabel>
          <StyledText left fontWeightNormal>
            {details.staffName} ({details.staffUUID})
          </StyledText>
        </CardItem>
        <Line />
        <StyledText left letterSpacing>
          Health Vitals
        </StyledText>
        <CardContainer>
          <CardItem detail>
            <StyledLabel lightText>Pressure</StyledLabel>
            <StyledLabel themeText>{details.bP}</StyledLabel>
          </CardItem>
          <CardItem detail>
            <StyledLabel lightText>Haemoglobin</StyledLabel>
            <StyledLabel themeText>{details.heamoglobinCount}gm/dL</StyledLabel>
          </CardItem>
          <CardItem detail>
            <StyledLabel lightText>Pulse</StyledLabel>
            <StyledLabel themeText>{details.pulse}bpm</StyledLabel>
          </CardItem>
        </CardContainer>
        <CardItem detail>
          <StyledLabel lightText>COVID-19 Antibody Test</StyledLabel>
          <StyledLabel themeText>
            {details.covidAntibody == '+' ? 'Positive' : 'Negative'}
          </StyledLabel>
        </CardItem>
      </ModalContainer>
    </Modal>
  );
};

export default HistoryDetailModal;
