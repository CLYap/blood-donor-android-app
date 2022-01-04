import React from 'react';
import Modal from 'react-native-modal';
import {
  ModalContainer,
  PageTitle,
  StyledText,
  FlexRowContainer,
  StyledButton,
  ButtonText,
} from './../styles';

const RequestAppointmentModal = ({ isOpen, onClose, details, makeRequest }) => {
  return (
    <Modal isVisible={isOpen} coverScreen={true} swipeDirection='right'>
      <ModalContainer>
        <PageTitle>Confirm Appointment?</PageTitle>
        <StyledText paddingLeft10 fontSize15 fontWeightBold marginBottom17>
          Are you sure to request for this slot?
        </StyledText>
        <FlexRowContainer>
          <StyledButton margin5 onPress={onClose}>
            <ButtonText>Cancel</ButtonText>
          </StyledButton>
          <StyledButton margin5 onPress={makeRequest}>
            <ButtonText>Confirm</ButtonText>
          </StyledButton>
        </FlexRowContainer>
      </ModalContainer>
    </Modal>
  );
};

export default RequestAppointmentModal;
