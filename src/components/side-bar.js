import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useUserInfo } from './../context/user-info-provider';
import LogoutModal from './../modals/logout-modal';
import { Entypo } from '@expo/vector-icons';
import {
  StyledImage,
  StyledText,
  DarkLightStyledText,
  ThemeStyledText,
  StyledIcon,
  Colors,
} from './../components/styles';

const { theme, tertiary } = Colors;

function SideBar(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const { logoutUser, userProfile } = useUserInfo();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <StyledImage
          avatar
          source={require('../../assets/icons/profile.png')}
        />
        <StyledText
          letterSpacing
          alignSelfCenter
          fontWeightBold
          fontSize17
          marginBottom5
          textAlignCenter
        >
          {userProfile.fName} {userProfile.lName} ({userProfile.donorId})
        </StyledText>
        <DarkLightStyledText alignSelfCenter marginBottom5>
          {userProfile.icNo}
        </DarkLightStyledText>
        <ThemeStyledText alignSelfCenter fontWeightBold marginBottom17 badge>
          {userProfile.bloodType}
        </ThemeStyledText>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress
          onPress={() => setModalVisible(true)}
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <StyledIcon menu>
            <Entypo name='login' size={24} color={tertiary} />
          </StyledIcon>
          <StyledText fontWeightBold fontSize15>
            Sign Out
          </StyledText>
        </TouchableOpacity>
        <LogoutModal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          logoutUser={logoutUser}
        />
      </View>
    </View>
  );
}

export default SideBar;
