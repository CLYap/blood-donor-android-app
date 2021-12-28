import React from 'react';
import Modal from 'react-native-modal';
import {
  ModalContainer,
  StyledText,
  FlexRowContainer,
  StyledButton,
  ButtonText,
} from './../components/styles';

const MessageModal = ({ isOpen, onClose, errorMessage }) => {
  return (
    <Modal isVisible={isOpen} coverScreen={true} swipeDirection='right'>
      <ModalContainer>
        <StyledText paddingLeft10 fontSize15 fontWeightBold marginBottom17>
          {errorMessage}
        </StyledText>
        <FlexRowContainer>
          <StyledButton margin5 onPress={onClose}>
            <ButtonText>Back</ButtonText>
          </StyledButton>
        </FlexRowContainer>
      </ModalContainer>
    </Modal>
  );
};

export default MessageModal;
