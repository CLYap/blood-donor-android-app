import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

// app loading
import AppLoader from './../components/app-loader';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setGender, setDOB } from '../components/redux/actions';

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
  medicalHistory: ['diabetes', 'asthma'],
  allergies: [],
  contactNo: '019122338383',
  email: 'cheeling1203@gmail.com',
};

const validationSchema = Yup.object({
  weight: Yup.number().integer().typeError('Enter numeric characters only'),
  height: Yup.number().integer().typeError('Enter numeric characters only'),
});

const EditProfileHealth = ({ navigation }) => {
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
                setLoginPending(true);
                setTimeout(() => {
                  console.log(values);
                  setLoginPending(false);
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
                  <Line />
                  <MultipleTextInput
                    label='Medical History?'
                    existingList={profileData.medicalHistory}
                    setFieldValue={setFieldValue}
                    placeholder='Add your medical history here...'
                  />
                  <Line />
                  <MultipleTextInput
                    label='Allergies History?'
                    existingList={profileData.allergies}
                    setFieldValue={setFieldValue}
                    placeholder='Add your allegies here...'
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

const MultipleTextInput = ({
  label,
  existingList,
  setFieldValue,
  readOnly,
  ...props
}) => {
  const [inputField, toggleInputField] = useState(false);
  const [item, setItem] = useState();
  const [itemList, setItemList] = useState(existingList);

  useEffect(() => {
    label == 'Medical History?'
      ? setFieldValue('medicalHistory', itemList)
      : setFieldValue('allergies', itemList);
  }, [itemList]);

  const addItem = () => {
    if (item) {
      setItemList([...itemList, item]);
      setItem(null);
    }
  };

  return (
    <View>
      <FormInputContainer>
        <CardItem detailBox>
          {itemList.length > 0 ? (
            itemList.map((item, index) => (
              <StyledText key={index}>- {item}</StyledText>
            ))
          ) : (
            <StyledText>No record!</StyledText>
          )}
          <RightIcon top onPress={() => toggleInputField(!inputField)}>
            <FontAwesome5 name='pencil-alt' size={15} color={theme} />
          </RightIcon>
        </CardItem>
        <FormInputLabel>{label}</FormInputLabel>
        {inputField ? (
          <View style={{ position: 'relative' }}>
            <FormTextInput
              value={item}
              onChangeText={(item) => setItem(item)}
            />
            <RightIcon formButton onPress={() => addItem()}>
              <Ionicons name='md-add-circle' size={24} color={theme} />
            </RightIcon>
          </View>
        ) : null}
      </FormInputContainer>
    </View>
  );
};

export default EditProfileHealth;
