import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import {
  ModalContainer,
  PageTitle,
  StyledLabel,
  ButtonContainer,
  StyledButton,
  ButtonText,
} from './../components/styles';

const LogoutModal = ({ isOpen, onClose, setIsLoggedIn }) => {
  return (
    <Modal isVisible={isOpen} coverScreen={true} swipeDirection='right'>
      <ModalContainer>
        <PageTitle left>Log Out?</PageTitle>
        <StyledLabel>Are you sure to log out?</StyledLabel>
        <ButtonContainer>
          <StyledButton onPress={onClose}>
            <ButtonText>Cancel</ButtonText>
          </StyledButton>
          <StyledButton onPress={setIsLoggedIn}>
            <ButtonText>Logout</ButtonText>
          </StyledButton>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default LogoutModal;
