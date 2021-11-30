import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7E8',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#cd0000',
  modal: '#000000AA',
};

const { primary, secondary, tertiary, darkLight, brand, modal } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};

  ${(props) =>
    props.badge &&
    `
    padding-top: 0px;`}
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;`}
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
  margin-bottom: 5px;
  font-weight: normal;`}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 50px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
  font-weight: bold;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 32px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 32px;
  position: absolute;
  z-index: 1;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 10px;
  height: 50px;

  ${(props) =>
    props.submitting &&
    `
    opacity:0.4`}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 13px;
`;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: ${modal};
`;

export const ModalContainer = styled.View`
  margin: 20px;
  background-color: ${primary};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const StyledIcon = styled.View`
  justify-content: center;
  padding-right: 5px;
`;

export const ErrorMsgContainer = styled.View`
  display: flex;
  margin-top: -8px;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const ErrorMsg = styled.Text`
  color: ${brand};
  font-size: 11px;
`;

export const PanelTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${tertiary};
  padding-bottom: 5px;
`;

export const BadgePanel = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BadgeContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-horizontal: 10px;
  width: 150px;
`;

export const BadgeFrame = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background-color: ${brand};
  margin-bottom: 10px;
  margin-top: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const BadgeTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  color: ${tertiary};
  text-align: center;
`;
