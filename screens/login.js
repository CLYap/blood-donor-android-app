import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

// icons
import { MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  SubTitle,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';

// colors
const { brand, darkLight, primary } = Colors;

const Login = function ({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageLogo
          resizeMode='cover'
          source={require('../assets/blood-drop.png')}
        />
        <PageTitle>Blood Donor App</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ icNo: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate('DrawerStack');
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label='IC no.'
                icon='perm-identity'
                placeholder='99XXXXXXXXXX'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('icNo')}
                onBlur={handleBlur('icNo')}
                value={values.icNo}
                keyboardType='number-pad'
              />
              <MyTextInput
                label='Password'
                icon='lock'
                placeholder='* * * * * * * * *'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <ExtraView>
                <TextLink>
                  <TextLinkContent>Forgot password? </TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = function ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) {
  return (
    <View>
      <LeftIcon>
        <MaterialIcons name={icon} size={25} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={25}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Login;
