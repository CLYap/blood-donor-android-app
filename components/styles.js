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
  theme: '#cd0000',
};

const { primary, secondary, tertiary, darkLight, theme } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding-top: ${StatusBarHeight + 100}px;
  background-color: ${theme};

  ${(props) =>
    props.isLogin &&
    `
    background-color: ${primary};
    padding: 25px;
    padding-top: ${StatusBarHeight + 50}px;
    `}
`;

export const InnerContainer = styled.View`
  background-color: ${primary};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;

  ${(props) =>
    props.isLogin &&
    `
    padding-right: 0px;
    padding-left: 0px;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
  `}
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

export const ImageIconContainer = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 100px;
  height: 100px;
  margin-left: 12px;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: ${theme};
  padding: 10px;

  ${(props) =>
    props.left &&
    `
    text-align: left;
  `}
`;

export const StyledText = styled.Text`
  font-size: 15px;
  margin-bottom: 15px;
  font-weight: bold;
  align-self: center;
  color: ${tertiary};

  ${(props) =>
    props.left &&
    `
    align-self: flex-start;
  `}

  ${(props) =>
    props.fontWeightNormal &&
    `
    font-weight: normal;
  `}

  ${(props) =>
    props.letterSpacing &&
    `
    letter-spacing: 1px;
  `}
`;

export const StyledLabel = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  padding-left: 10px;

  ${(props) =>
    props.imageText &&
    `
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: bold;
    color: ${primary}; 
    position: absolute;
    top: 60px;
    left: 33px;   
    `}

  ${(props) =>
    props.lightText &&
    `
    font-weight: bold;
    padding: 0px;
    margin: auto;
    font-size: 14px;
    color: ${darkLight}; 
  `}
  
  ${(props) =>
    props.themeText &&
    `
    font-weight: bold;
    padding: 0px;
    margin: auto;
    font-size: 14px;
    color: ${theme}; 
    align-self: center;
  `}

  ${(props) =>
    props.lightLabel &&
    `
    margin-bottom: 5px;
    font-weight: bold;
    padding: 0px;
    padding-bottom: 0px;
    font-size: 15px;
    color: ${darkLight}; 
  `}
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

  ${(props) =>
    props.closeButton &&
    `
    right: 0px;
    top: 0px;
    padding: 5px;
  `}
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${theme};
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
  color: ${theme};
  font-size: 13px;
`;

export const ModalContainer = styled.View`
  margin: 15px;
  background-color: ${primary};
  border-radius: 15px;
  padding: 35px;

  ${(props) =>
    props.detailModal &&
    `
    background-color: ${secondary};
    border-radius: 10px;
    position: relative;
    padding: 25px;
    margin: 3px;`}
`;

export const StyledIcon = styled.View`
  justify-content: center;
  padding-right: 5px;

  ${(props) =>
    props.menu &&
    `
    padding-right: 15px;
  `}
`;

export const ErrorMsgContainer = styled.View`
  display: flex;
  margin-top: -8px;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const ErrorMsg = styled.Text`
  color: ${theme};
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
  background-color: ${theme};
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

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardPanel = styled.View`
  background-color: ${secondary};
  padding-vertical: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const CardView = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 15px;
  padding: 3px;
  background-color: ${primary};
  border-radius: 10px;
`;

export const CardItem = styled.View`
  flex-direction: column;
  padding-vertical: 20px;
  padding-left: 10px;

  ${(props) =>
    props.header &&
    `
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 5px;
    background-color: ${primary};
    border-radius: 10px;
    margin-top: 25px;
    margin-bottom: 15px;
  `}

  ${(props) =>
    props.detail &&
    `
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: ${primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  `}
`;

export const CardTextPanel = styled.View`
  flex-direction: row;
  padding-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const CardText = styled.Text`
  font-size: 14px;
  justify-content: center;
  padding-vertical: 1px;
`;
