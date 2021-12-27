import React, { useState } from 'react';
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

// app loading
import AppLoader from './../components/app-loader';

import { Picker } from '@react-native-picker/picker';

import { States } from './../components/utils';

// colors
const { theme, darkLight, primary } = Colors;

const profileData = {
  donorId: 'D0001',
  fName: 'Yap',
  lName: 'Chee',
  gender: 'F',
  dob: '12-03-1999',
  addressFLine: '',
  addressSLine: '',
  city: '',
  state: '',
  zipCode: '',
  imgLoc: '',
  bloodType: 'O+',
  weight: '',
  height: '',
  medicalHistory: {},
  contactNo: '019122338383',
  email: 'cheeling1203@gmail.com',
};

const validationSchema = Yup.object({
  dob: Yup.string().trim().required('Required!'),
  //address: Yup.string().trim().required('Required!'),
  //contactNo: Yup.number()
  //.integer()
  //.typeError('Enter numeric characters only')
  //.required('Contact no. is required!'),
  //email: Yup.string().email('Invalid email').required('Email is required!'),
});

const EditProfileGeneral = ({ navigation }) => {
  const [loginPending, setLoginPending] = useState(false);
  const { gender, dob } = useSelector((state) => state.donorReducer);
  const dispatch = useDispatch();

  return (
    <>
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style='auto' />
          <InnerContainer alignItemsCenter paddingTop30>
            <Formik
              initialValues={profileData}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
                dispatch(setGender(values.gender));
                dispatch(setDOB(values.dob));
                setTimeout(() => {
                  console.log(values);
                }, 3000);
              }}
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
                    />
                    <GenderDropDown
                      label='Gender'
                      defaultValue={profileData.gender}
                      onChangeText={handleChange('gender')}
                      onBlur={handleBlur('gender')}
                      setFieldValue={setFieldValue}
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
                    <StateDropDown
                      label='State'
                      defaultValue={profileData.state}
                      onChangeText={handleChange('state')}
                      onBlur={handleBlur('state')}
                      setFieldValue={setFieldValue}
                    />
                    <TextInput
                      label='Zip Code'
                      defaultValue={profileData.zipCode}
                      error={touched.zipCode && errors.zipCode}
                      placeholder='56000'
                      onChangeText={handleChange('zipCode')}
                      onBlur={handleBlur('zipCode')}
                      value={values.zipCode}
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
                      <ButtonText tertiaryText>Cancel</ButtonText>
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
      {loginPending ? <AppLoader /> : null}
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
        {isDate && (
          <RightIcon formButton>
            <Fontisto name='date' size={24} color={darkLight} />
          </RightIcon>
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

const GenderDropDown = ({ label, setFieldValue, ...props }) => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View>
      <FormInputContainer>
        <FormInputLabel>{label}</FormInputLabel>
        <FormTextInput
          value={selectedValue == 'M' ? 'Male' : 'Female'}
          editable={false}
          style={{ paddingRight: 40 }}
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
          mode='dropdown'
          dropdownIconColor={theme}
          onValueChange={(itemValue, itemIndex) => {
            setFieldValue('gender', itemValue);
            setSelectedValue(itemValue);
          }}
        >
          <Picker.Item label='Female' value='F' />
          <Picker.Item label='Male' value='M' />
        </Picker>
      </FormInputContainer>
    </View>
  );
};

const StateDropDown = ({ label, setFieldValue, ...props }) => {
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
            setFieldValue('state', itemValue);
            setSelectedValue(itemValue);
          }}
        >
          {States.map((state) => {
            return <Picker.Item key={state} label={state} value={state} />;
          })}
        </Picker>
      </FormInputContainer>
    </View>
  );
};

export default EditProfileGeneral;
