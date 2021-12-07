import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  StyledContainer,
  InnerContainer,
  StyledButton,
  ButtonText,
  Colors,
  StyledText,
} from './../components/styles';

const { theme } = Colors;

const Appointment = function ({ navigation }) {
  const today = new Date();
  const maxDate = today.setMonth(today.getMonth() + 2);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <InnerContainer padding20>
        <StyledText>{text}</StyledText>
        <StyledButton onPress={() => showMode('date')}>
          <ButtonText>Select Date</ButtonText>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate('Login')}>
          <ButtonText>Back</ButtonText>
        </StyledButton>
      </InnerContainer>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          display='default'
          onChange={onChange}
          initialValues={new Date()}
          minimumDate={new Date()}
          maximumDate={maxDate}
        />
      )}
    </StyledContainer>
  );
};

export default Appointment;
