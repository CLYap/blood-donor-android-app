import React, { useState } from 'react';
import { Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  ModalBackground,
  ModalContainer,
  PageTitle,
  SubTitle,
  ButtonContainer,
  StyledButton,
  ButtonText,
} from './../components/styles';

const Logout = ({ isOpen, onClose, navigation }) => {
  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        setModalVisible(!isOpen);
      }}
    >
      <ModalBackground>
        <ModalContainer>
          <PageTitle>Log Out?</PageTitle>
          <SubTitle>Are you sure to log out?</SubTitle>
          <ButtonContainer>
            <StyledButton onPress={onClose}>
              <ButtonText>Cancel</ButtonText>
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate('Login')}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </ButtonContainer>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default Logout;
