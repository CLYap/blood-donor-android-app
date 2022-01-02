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
} from './../styles';

const LogoutModal = ({ isOpen, onClose, logoutUser }) => {
  return (
    <Modal isVisible={isOpen} coverScreen={true} swipeDirection='right'>
      <ModalContainer>
        <PageTitle>Sign Out?</PageTitle>
        <StyledText paddingLeft10 fontSize15 fontWeightBold marginBottom17>
          Are you sure to sign out?
        </StyledText>
        <FlexRowContainer>
          <StyledButton margin5 onPress={onClose}>
            <ButtonText>Cancel</ButtonText>
          </StyledButton>
          <StyledButton margin5 onPress={logoutUser}>
            <ButtonText>Sign Out</ButtonText>
          </StyledButton>
        </FlexRowContainer>
      </ModalContainer>
    </Modal>
  );
};

export default LogoutModal;
