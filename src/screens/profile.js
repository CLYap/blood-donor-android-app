import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, RefreshControl } from 'react-native';
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

import AsyncStorage from '@react-native-async-storage/async-storage';

const { theme, darkLight } = Colors;

const getUserProfile = async () => {};

const Profile = ({ navigation }) => {
  const [profileData, setProfileData] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getUserInfo();
    setRefreshing(false);
  };

  useEffect(() => {
    getUserInfo();
    return () => {
      setProfileData({});
    };
  }, []);

  const getUserInfo = async () => {
    try {
      const data = JSON.parse(await AsyncStorage.getItem('userProfile'));
      data ? setProfileData(data) : null;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <StyledContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
                {profileData.gender
                  ? profileData.gender == 'F'
                    ? 'Female'
                    : 'Male'
                  : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Date of Birth
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.dob ? profileData.dob : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Address
              </DarkLightStyledText>
              {profileData.addressFLine && profileData.addressSLine ? (
                <>
                  <StyledText>{profileData.addressFLine}</StyledText>
                  <StyledText marginBottom17>
                    {profileData.addressSLine}
                  </StyledText>
                </>
              ) : (
                <StyledText>-</StyledText>
              )}

              <DarkLightStyledText fontWeightBold fontSize15>
                City
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.city ? profileData.city : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                State
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.state ? profileData.state : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Postcode
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.postcode ? profileData.postcode : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Contact Number
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.contactNo ? profileData.contactNo : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Email Address
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.email ? profileData.email : '-'}
              </StyledText>
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
              <StyledText marginBottom17>
                {profileData.bloodType ? profileData.bloodType : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Weight
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.weight ? profileData.weight + 'kg' : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Height
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.height ? profileData.height + 'cm' : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Medical History
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.medicalHistory ? profileData.medicalHistory : '-'}
              </StyledText>
              <DarkLightStyledText fontWeightBold fontSize15>
                Allergy History
              </DarkLightStyledText>
              <StyledText marginBottom17>
                {profileData.allergy ? profileData.allergy : '-'}
              </StyledText>
              <StyledButton
                marginBottom17
                onPress={() => navigation.navigate('EditProfileHealth')}
              >
                <ButtonText>Edit</ButtonText>
              </StyledButton>
            </CardItem>
          </CardPanel>
        </InnerContainer>
      </ScrollView>
    </StyledContainer>
  );
};

export default Profile;
