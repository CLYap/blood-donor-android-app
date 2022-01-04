import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

// icons
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  StyledFormArea,
  StyledText,
  StyledIcon,
  RightIcon,
  FormInputContainer,
  FormInputLabel,
  FormTextInput,
  FlexRowContainer,
  StyledButton,
  ButtonText,
  Colors,
  Line,
  CardItem,
  ErrorMsgContainer,
  ErrorMsg,
} from './../components/styles';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/keyboard-avoiding-wrapper';

import { updateUserProfileService } from './../components/services/user-service';

// colors
const { theme, darkLight, primary } = Colors;

const validationSchema = Yup.object({
  weight: Yup.number()
    .integer()
    .typeError('Enter numeric characters only')
    .required('Required!'),
  height: Yup.number()
    .integer()
    .typeError('Enter numeric characters only')
    .required('Required!'),
});

const EditProfileHealth = ({ navigation }) => {
  const [loginPending, setLoginPending] = useState(false);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    getExistingData();
    return () => {
      setProfileData({});
    };
  }, []);

  const getExistingData = async () => {
    try {
      const userProfile = JSON.parse(await AsyncStorage.getItem('userProfile'));
      if (userProfile) {
        userProfile.weight = String(userProfile.weight); //parse int to string for input field as text input does not accept number
        userProfile.height = String(userProfile.height); //parse int to string for input field as text input does not accept number
        setProfileData(userProfile);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = (values) => {
    updateUserProfileService(values)
      .then(async (res) => {
        if (res !== undefined && res !== null) {
          await AsyncStorage.setItem('userProfile', JSON.stringify(values));
        } else {
          console.log('error');
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style='auto' />
          <InnerContainer alignItemsCenter paddingTop30>
            <Formik
              enableReinitialize={true}
              initialValues={profileData}
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
                setFieldValue,
              }) => (
                <StyledFormArea>
                  <TextInput
                    label='Blood Type'
                    value={values.bloodType}
                    editable={false}
                    defaultValue={profileData.bloodType}
                    readOnly={true}
                  />
                  <FlexRowContainer>
                    <TextInput
                      label='Weight (kg)'
                      error={touched.weight && errors.weight}
                      value={values.weight}
                      defaultValue={profileData.weight}
                      onChangeText={handleChange('weight')}
                      onBlur={handleBlur('weight')}
                    />
                    <TextInput
                      label='Height (cm)'
                      defaultValue={profileData.height}
                      error={touched.height && errors.height}
                      onChangeText={handleChange('height')}
                      onBlur={handleBlur('height')}
                      value={values.height}
                    />
                  </FlexRowContainer>
                  <TextInput
                    label='Medical History'
                    defaultValue={profileData.medicalHistory}
                    onChangeText={handleChange('medicalHistory')}
                    onBlur={handleBlur('medicalHistory')}
                    value={values.medicalHistory}
                  />
                  <TextInput
                    label='Allergy'
                    defaultValue={profileData.allergy}
                    onChangeText={handleChange('allergy')}
                    onBlur={handleBlur('allergy')}
                    value={values.allergy}
                  />

                  <FlexRowContainer justifyFlexEnd paddingVertical20>
                    <StyledButton
                      margin5
                      lightButton
                      onPress={() => navigation.goBack()}
                    >
                      <ButtonText tertiaryText>Back</ButtonText>
                    </StyledButton>
                    <StyledButton margin5 onPress={handleSubmit}>
                      <ButtonText>Save</ButtonText>
                    </StyledButton>
                  </FlexRowContainer>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
    </>
  );
};

const TextInput = ({ label, error, readOnly, ...props }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <FormInputContainer>
        <FormInputLabel>{label}</FormInputLabel>
        {error ? (
          <FormTextInput error readOnly={readOnly} {...props} />
        ) : (
          <FormTextInput readOnly={readOnly} {...props} />
        )}
        {error ? (
          <ErrorMsgContainer paddingLeft5>
            <StyledIcon>
              <MaterialIcons name='error' size={13} color={theme} />
            </StyledIcon>
            <ErrorMsg>{error}</ErrorMsg>
          </ErrorMsgContainer>
        ) : null}
      </FormInputContainer>
    </View>
  );
};

export default EditProfileHealth;
