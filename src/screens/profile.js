import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  StyledText,
  CardPanel,
  CardItem,
  Colors,
  StyledButton,
  DarkLightStyledText,
  FlexRowContainer,
  ButtonText,
} from './../components/styles';
// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/keyboard-avoiding-wrapper';

import { FontAwesome5 } from '@expo/vector-icons';

const { theme, darkLight } = Colors;

const profileData = {
  donorId: 'D0001',
  fName: 'Yap',
  lName: 'Chee',
  gender: 'F',
  dob: '12-03-1999',
  addressFLine: '11A, Jalan Pahang',
  addressSLine: '9/1, Taman Sri Pagang',
  city: 'Kuala Lumpur',
  state: 'WP Kuala Lumpur',
  postcode: '56000',
  bloodType: 'O+',
  weight: '54',
  height: '150',
  medicalHistory: ['asthma', 'diabetes', 'high blood pressure'],
  allergies: ['ss', 'ss'],
  contactNo: '019122338383',
  email: 'cheeling1203@gmail.com',
};

const Profile = ({ navigation }) => {
  const { gender, dob } = useSelector((state) => state.donorReducer);
  const [loadingPending, setLoadingPending] = useState(false);
  return (
    <>
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <InnerContainer>
            <CardPanel>
              <StyledText letterSpacing fontWeightBold fontSize17 paddingLeft20>
                Personal Information
              </StyledText>
              <CardItem header margin20>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Donor ID
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.donorId}</StyledText>
                <FlexRowContainer justifyFlexStart>
                  <View>
                    <DarkLightStyledText fontWeightBold fontSize15>
                      Last Name
                    </DarkLightStyledText>
                    <StyledText marginBottom17>{profileData.lName}</StyledText>
                  </View>
                  <View style={{ paddingLeft: 50 }}>
                    <DarkLightStyledText fontWeightBold fontSize15>
                      First Name
                    </DarkLightStyledText>
                    <StyledText marginBottom17>{profileData.fName}</StyledText>
                  </View>
                </FlexRowContainer>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Gender
                </DarkLightStyledText>
                <StyledText marginBottom17>
                  {profileData.gender == 'F' ? 'Female' : 'Male'}
                </StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Date of Birth
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.dob}</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Address
                </DarkLightStyledText>
                <StyledText>{profileData.addressFLine}</StyledText>
                <StyledText marginBottom17>
                  {profileData.addressSLine}
                </StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  City
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.city}</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  State
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.state}</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Postcode
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.postcode}</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Contact Number
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.contactNo}</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Email Address
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.email}</StyledText>
                <StyledButton
                  marginBottom17
                  onPress={() => navigation.navigate('EditProfileGeneral')}
                >
                  <ButtonText>Edit</ButtonText>
                </StyledButton>
              </CardItem>
              <StyledText letterSpacing fontWeightBold fontSize17 paddingLeft20>
                Health Information
              </StyledText>

              <CardItem header margin20>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Blood Type
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.bloodType}</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Weight
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.weight}kg</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Height
                </DarkLightStyledText>
                <StyledText marginBottom17>{profileData.height}cm</StyledText>
                <DarkLightStyledText fontWeightBold fontSize15>
                  Medical History
                </DarkLightStyledText>
                {profileData.medicalHistory.length > 0 ? (
                  profileData.medicalHistory.map((history, index, arr) =>
                    arr.length === index + 1 ? (
                      <StyledText marginBottom17 key={index}>
                        - {history}
                      </StyledText>
                    ) : (
                      <StyledText key={index}>- {history}</StyledText>
                    )
                  )
                ) : (
                  <StyledText marginBottom17>No record!</StyledText>
                )}
                <DarkLightStyledText fontWeightBold fontSize15>
                  Allergy History
                </DarkLightStyledText>
                {profileData.allergies.length > 0 ? (
                  profileData.allergies.map((allergy, index, arr) =>
                    arr.length === index + 1 ? (
                      <StyledText marginBottom17 key={index}>
                        - {allergy}
                      </StyledText>
                    ) : (
                      <StyledText key={index}>- {allergy}</StyledText>
                    )
                  )
                ) : (
                  <StyledText marginBottom17>No record!</StyledText>
                )}
                <StyledButton
                  marginBottom17
                  onPress={() => navigation.navigate('EditProfileHealth')}
                >
                  <ButtonText>Edit</ButtonText>
                </StyledButton>
              </CardItem>
            </CardPanel>
          </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
      {loadingPending ? <AppLoader /> : null}
    </>
  );
};

export default Profile;
