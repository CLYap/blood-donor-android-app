import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
  TextLink,
  TextLinkContent,
  StyledIcon,
  ErrorMsgContainer,
  ErrorMsg,
} from './../components/styles';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/keyboard-avoiding-wrapper';

// colors
const { brand, darkLight, primary } = Colors;

const userCredential = { icNo: '', password: '' };

const validationSchema = Yup.object({
  icNo: Yup.number()
    .integer()
    .typeError('Enter numeric characters only')
    .required('IC no. is required!'),
  password: Yup.string().trim().required('Password is required!'),
});

const Login = function ({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo resizeMode='cover' source={require('../assets/logo.png')} />
          <PageTitle>Blood Donor App</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={userCredential}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setTimeout(() => {
                console.log(values);
              }, 3000);
              navigation.navigate('DrawerStackScreen');
            }}
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
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <TextLink>
                  <TextLinkContent>Forgot password? </TextLinkContent>
                </TextLink>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const TextInput = function ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  error,
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
      {error ? (
        <ErrorMsgContainer>
          <StyledIcon>
            <MaterialIcons name='error' size={13} color={brand} />
          </StyledIcon>
          <ErrorMsg>{error}</ErrorMsg>
        </ErrorMsgContainer>
      ) : null}
    </View>
  );
};
export default Login;
