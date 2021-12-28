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
  lightTheme: '#ffe1e1',
};

const { primary, secondary, tertiary, darkLight, theme, lightTheme } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding-top: ${StatusBarHeight + 100}px;
  background-color: ${theme};

  ${(props) =>
    props.whiteBackground &&
    `
    background-color: ${primary};
    padding: 25px;
    padding-top: ${StatusBarHeight + 40}px;
  `}
`;

export const InnerContainer = styled.View`
  background-color: ${primary};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  ${(props) =>
    props.isLogin &&
    `
    flex: 1;
    width: 100%;
    align-items: center;
  `}

  ${(props) =>
    props.alignItemsCenter &&
    `
    align-items: center;
  `}

  ${(props) =>
    props.padding20 &&
    `
    padding: 20px;
  `}

  ${(props) =>
    props.paddingTop30 &&
    `
    padding-top: 30px;
  `}
`;

export const StyledImage = styled.Image`
  width: 100px;
  height: 100px;

  ${(props) =>
    props.pageLogo &&
    `
    width: 250px;
    height: 250px;
  `}

  ${(props) =>
    props.avatar &&
    `
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 20px;
    margin-top: 20px;
  `}

  ${(props) =>
    props.imageIcon &&
    `
    margin-left: 12px;
  `}
`;

export const ImageIconContainer = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 14px;
  color: ${tertiary};

  ${(props) =>
    props.textAlignCenter &&
    `
    text-align: center;
  `}

  ${(props) =>
    props.fontSize13 &&
    `
    font-size: 13px;
  `}

  ${(props) =>
    props.fontSize15 &&
    `
    font-size: 15px;
  `}

  ${(props) =>
    props.fontSize17 &&
    `
    font-size: 17px;
  `}

  ${(props) =>
    props.alignSelfCenter &&
    `
    align-self: center;
  `}

  ${(props) =>
    props.fontWeightBold &&
    `
    font-weight: bold;
  `}

  ${(props) =>
    props.letterSpacing &&
    `
    letter-spacing: 1px;
  `}

  ${(props) =>
    props.paddingLeft10 &&
    `
    padding-left: 10px;
  `}

  ${(props) =>
    props.marginAuto &&
    `
    margin: auto;
  `}

  ${(props) =>
    props.marginBottom17 &&
    `
    margin-bottom: 17px;
  `}

  ${(props) =>
    props.marginBottom5 &&
    `
    margin-bottom: 5px;
  `}

  ${(props) =>
    props.paddingLeft20 &&
    `
    padding-left: 20px;
  `}

  ${(props) =>
    props.imageText &&
    `
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: bold;
    color: ${primary}; 
    position: absolute;
    top: 60px;
    left: 42px;   
  `}
`;

export const ThemeStyledText = styled(StyledText)`
  color: ${theme};

  ${(props) =>
    props.badge &&
    `
    color: ${primary};
    border-radius: 20px;
    background-color: ${theme};
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;
  `}
`;

export const DarkLightStyledText = styled(StyledText)`
  color: ${darkLight};
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${theme};
  padding: 10px;

  ${(props) =>
    props.textAlignCenter &&
    `
    text-align: center;
  `}

  ${(props) =>
    props.tertiary &&
    `
    color: ${tertiary};
  `}

  ${(props) =>
    props.marginBottom5 &&
    `
    margin-bottom: 5px;
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
  font-size: 15px;
  height: 50px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};

  ${(props) =>
    props.error &&
    `
    border-color: ${theme};
    border-width: 1px;
  `}
`;

export const FormInputContainer = styled.View`
  width: 100%;
  position: relative;
`;

export const FormTextInput = styled(StyledTextInput)`
  padding: 6px;
  padding-top: 22px;
  padding-bottom: 6px;
  background-color: ${primary};
  border-width: 1.75px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;

  ${(props) =>
    props.readOnly == true &&
    `
    background-color: ${secondary};
    opacity: 0.7;
  `}

  ${(props) =>
    props.error &&
    `
    border-color: ${theme};
    border-width: 0.8px;
  `}
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
  font-weight: bold;
`;

export const FormInputLabel = styled(StyledInputLabel)`
  color: ${theme};
  position: absolute;
  top: 3px;
  left: 6px;
  padding: 5px;
  z-index: 1;
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
    props.top &&
    `
    right: 0px;
    top: 0px;
    padding: 5px;
  `}

  ${(props) =>
    props.formButton &&
    `
    right: 10px;
    top: 12px;
    padding: 5px;
  `}
`;

export const FlexRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) =>
    props.justifyFlexEnd &&
    `
    justify-content: flex-end;
  `}

  ${(props) =>
    props.paddingVertical20 &&
    `
    padding-vertical: 20px;
  `}

  ${(props) =>
    props.justifyFlexStart &&
    `
    justify-content: flex-start;
  `}
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${theme};
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  min-width: 90px;

  ${(props) =>
    props.lightButton &&
    `
    background-color: ${secondary}; 
  `}

  ${(props) =>
    props.margin5 &&
    `
    margin: 5px;
  `}

  ${(props) =>
    props.marginBottom17 &&
    `
    margin-bottom: 17px;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.tertiaryText &&
    `
    color: ${tertiary}; 
  `};
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

  ${(props) =>
    props.right &&
    `
    position: absolute;
    padding: 3px;
    top: 14px;
    right: 8px;
  `}
`;

export const ErrorMsgContainer = styled.View`
  display: flex;
  margin-top: -8px;
  flex-direction: row;
  padding-bottom: 10px;

  ${(props) =>
    props.paddingLeft5 &&
    `
    padding-left: 5px;
  `}
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

  ${(props) =>
    props.borderRound &&
    `
    border-radius: 30px;
  `}

  ${(props) =>
    props.padding20 &&
    `
    padding: 20px;
  `}

  ${(props) =>
    props.marginBottom17 &&
    `
    margin-bottom: 17px;
  `}
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
  padding-vertical: 18px;
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
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: ${primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  `}

  ${(props) =>
    props.detailBox &&
    `
    border-color: ${secondary};
    border-radius: 10px;
    border-width: 1px;
    margin: 3px;
    padding-top: 30px;
    background-color: ${secondary};
    opacity: 0.8;
  `}

  ${(props) =>
    props.margin20 &&
    `
    margin: 20px;
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
