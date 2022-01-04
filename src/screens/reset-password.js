import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledContainer,
  InnerContainer,
  StyledImage,
  PageTitle,
  StyledFormArea,
  StyledText,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Colors,
  TextLink,
  TextLinkContent,
  StyledIcon,
  ErrorMsgContainer,
  ErrorMsg,
} from './../components/styles';
import { MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/keyboard-avoiding-wrapper';

import { resetPasswordService } from './../components/services/user-service';

const { theme, darkLight, primary } = Colors;

const initialValues = {
  icNo: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  icNo: Yup.string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(12, 'Must be exactly 12 digits')
    .max(12, 'Must be exactly 12 digits'),
  password: Yup.string().trim().required('Password is required!'),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Password do not match!')
    .required('Required'),
});

onSubmit = (values) => {
  console.log(values);
  resetPasswordService(values);
};

const ResetPassword = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style='auto' />
          <InnerContainer isLogin>
            <PageTitle textAlignCenter>Blood Donor App</PageTitle>
            <StyledText letterSpacing alignSelfCenter fontWeightBold fontSize15>
              Reset Password
            </StyledText>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <StyledFormArea>
                  <TextInput
                    label='IC no.'
                    error={touched.icNo && errors.icNo}
                    icon='perm-identity'
                    placeholder='99XXXXXXXXXX'
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('icNo')}
                    onBlur={handleBlur('icNo')}
                    value={values.icNo}
                    keyboardType='number-pad'
                  />
                  <TextInput
                    label='Password'
                    error={touched.password && errors.password}
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
                  <TextInput
                    label='Confirm Password'
                    error={touched.confirmPassword && errors.confirmPassword}
                    icon='lock'
                    placeholder='* * * * * * * * *'
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <StyledButton margin5 onPress={handleSubmit}>
                    <ButtonText>Submit</ButtonText>
                  </StyledButton>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
    </>
  );
};

const TextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  error,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <MaterialIcons name={icon} size={25} color={theme} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {error ? (
        <StyledTextInput error {...props} />
      ) : (
        <StyledTextInput {...props} />
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={25}
            color={darkLight}
          />
        </RightIcon>
      )}
      {error ? (
        <ErrorMsgContainer>
          <StyledIcon>
            <MaterialIcons name='error' size={13} color={theme} />
          </StyledIcon>
          <ErrorMsg>{error}</ErrorMsg>
        </ErrorMsgContainer>
      ) : null}
    </View>
  );
};

export default ResetPassword;
