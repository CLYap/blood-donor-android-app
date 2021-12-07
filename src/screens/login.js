import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';

//login context
import { useLogin } from './../context/login-provider';

// icons
import { MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';
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

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/keyboard-avoiding-wrapper';

// app loading
import AppLoader from './../components/app-loader';

// colors
const { theme, darkLight, primary } = Colors;

const userCredential = { icNo: '', password: '' };

const validationSchema = Yup.object({
  icNo: Yup.number()
    .integer()
    .typeError('Enter numeric characters only')
    .required('IC no. is required!'),
  password: Yup.string().trim().required('Password is required!'),
});

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [loginPending, setLoginPending] = useState(false);
  const { setIsLoggedIn } = useLogin();
  return (
    <>
      <KeyboardAvoidingWrapper>
        <StyledContainer whiteBackground>
          <StatusBar style='auto' />
          <InnerContainer isLogin>
            <StyledImage
              pageLogo
              resizeMode='cover'
              source={require('../../assets/icons/logo.png')}
            />
            <PageTitle textAlignCenter>Blood Donor App</PageTitle>
            <StyledText letterSpacing alignSelfCenter fontWeightBold fontSize15>
              Account Login
            </StyledText>
            <Formik
              initialValues={userCredential}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                setTimeout(() => {
                  console.log(values);
                }, 3000);
                setIsLoggedIn(true);
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
                  <TextLink
                    onPress={() => navigation.navigate('ResetPassword')}
                  >
                    <TextLinkContent>Forgot password? </TextLinkContent>
                  </TextLink>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
      {loginPending ? <AppLoader /> : null}
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
export default Login;
