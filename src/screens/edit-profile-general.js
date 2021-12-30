import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';

// icons
import { MaterialIcons, Fontisto } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  StyledImage,
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
  TextLink,
  TextLinkContent,
  ErrorMsgContainer,
  ErrorMsg,
  Line,
} from './../components/styles';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/keyboard-avoiding-wrapper';

import { Picker } from '@react-native-picker/picker';

import { States, Genders } from './../components/utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { updateUserProfileService } from './../components/services/user-service';

// colors
const { theme, darkLight, primary, secondary } = Colors;

const validationSchema = Yup.object({
  dob: Yup.string().required('Required!'),
  gender: Yup.string().trim().required('Required!'),
  addressFLine: Yup.string().trim().required('Required!'),
  addressSLine: Yup.string().trim().required('Required!'),
  city: Yup.string().trim().required('Required!'),
  state: Yup.string().trim().required('Required!'),
  postcode: Yup.string().trim().required('Required!'),
  contactNo: Yup.number()
    .integer()
    .typeError('Enter numeric characters only')
    .required('Contact no. is required!'),
  email: Yup.string().email('Invalid email').required('Email is required!'),
});

const EditProfileGeneral = ({ navigation }) => {
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
      userProfile ? setProfileData(userProfile) : null;
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
                    label='Donor ID'
                    value={values.donorId}
                    editable={false}
                    defaultValue={profileData.donorId}
                    readOnly={true}
                  />
                  <FlexRowContainer>
                    <TextInput
                      label='Last Name'
                      value={values.lName}
                      editable={false}
                      defaultValue={profileData.lName}
                      readOnly={true}
                    />
                    <TextInput
                      label='First Name'
                      value={values.fName}
                      editable={false}
                      defaultValue={profileData.fName}
                      readOnly={true}
                    />
                  </FlexRowContainer>
                  <FlexRowContainer>
                    <TextInput
                      label='Date of Birth'
                      error={touched.dob && errors.dob}
                      isDate={true}
                      value={values.dob}
                      defaultValue={profileData.dob}
                      onChangeText={handleChange('dob')}
                      onBlur={handleBlur('dob')}
                      placeholder='DD-MM-YYYY'
                    />
                    <Dropdown
                      label='Gender'
                      defaultValue={profileData.gender}
                      onChangeText={handleChange('gender')}
                      onBlur={handleBlur('gender')}
                      setFieldValue={setFieldValue}
                      field='gender'
                    />
                  </FlexRowContainer>
                  <TextInput
                    label='Address Line 1'
                    defaultValue={profileData.addressFLine}
                    error={touched.addressFLine && errors.addressFLine}
                    placeholder='No.11E, Jalan Puchong, 1/8E'
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('addressFLine')}
                    onBlur={handleBlur('addressFLine')}
                    value={values.addressFLine}
                  />
                  <TextInput
                    label='Address Line 2'
                    defaultValue={profileData.addressSLine}
                    error={touched.addressSLine && errors.addressSLine}
                    placeholder='Taman Puchong Jaya'
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('addressSLine')}
                    onBlur={handleBlur('addressSLine')}
                    value={values.addressSLine}
                  />
                  <TextInput
                    label='City'
                    defaultValue={profileData.city}
                    error={touched.city && errors.city}
                    placeholder='Kuala Lumpur'
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                  />
                  <FlexRowContainer>
                    <Dropdown
                      label='State'
                      defaultValue={profileData.state}
                      error={touched.state && errors.state}
                      onChangeText={handleChange('state')}
                      onBlur={handleBlur('state')}
                      setFieldValue={setFieldValue}
                      field='state'
                    />
                    <TextInput
                      label='Postcode'
                      defaultValue={profileData.postcode}
                      error={touched.postcode && errors.postcode}
                      placeholder='56000'
                      onChangeText={handleChange('postcode')}
                      onBlur={handleBlur('postcode')}
                      value={values.postcode}
                    />
                  </FlexRowContainer>
                  <TextInput
                    label='Contact no.'
                    defaultValue={profileData.contactNo}
                    error={touched.contactNo && errors.contactNo}
                    onChangeText={handleChange('contactNo')}
                    onBlur={handleBlur('contactNo')}
                    value={values.contactNo}
                  />
                  <TextInput
                    label='Email Address'
                    defaultValue={profileData.email}
                    error={touched.email && errors.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
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

const TextInput = ({ label, error, readOnly, isDate, ...props }) => {
  return (
    <View style={isDate ? { flexGrow: 3 } : { flexGrow: 1 }}>
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

const Dropdown = ({ label, setFieldValue, field, ...props }) => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View>
      <FormInputContainer>
        <FormInputLabel>{label}</FormInputLabel>
        <FormTextInput
          value={selectedValue}
          editable={false}
          style={{ paddingRight: 50 }}
          {...props}
        />
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 50,
            width: 50,
            position: 'absolute',
            top: 8,
            right: 0,
          }}
          dropdownIconColor={theme}
          onValueChange={(itemValue, itemIndex) => {
            setFieldValue(field, itemValue);
            setSelectedValue(itemValue);
          }}
        >
          {field == 'state' &&
            States.map((state) => {
              return <Picker.Item key={state} label={state} value={state} />;
            })}
          {field == 'gender' &&
            Genders.map((gender) => {
              return (
                <Picker.Item
                  key={gender.key}
                  label={gender.value}
                  value={gender.key}
                />
              );
            })}
        </Picker>
      </FormInputContainer>
    </View>
  );
};

export default EditProfileGeneral;
