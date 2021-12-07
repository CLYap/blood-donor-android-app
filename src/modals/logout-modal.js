import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import {
  ModalContainer,
  PageTitle,
  StyledText,
  FlexRowContainer,
  StyledButton,
  ButtonText,
} from './../components/styles';

const LogoutModal = ({ isOpen, onClose, setIsLoggedIn }) => {
  return (
    <Modal isVisible={isOpen} coverScreen={true} swipeDirection='right'>
      <ModalContainer>
        <PageTitle>Sign Out?</PageTitle>
        <StyledText paddingLeft10 fontSize15 fontWeightBold marginBottom17>
          Are you sure to sign out?
        </StyledText>
        <FlexRowContainer>
          <StyledButton onPress={onClose}>
            <ButtonText>Cancel</ButtonText>
          </StyledButton>
          <StyledButton onPress={setIsLoggedIn}>
            <ButtonText>Sign Out</ButtonText>
          </StyledButton>
        </FlexRowContainer>
      </ModalContainer>
    </Modal>
  );
};

export default LogoutModal;
