import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  Colors,
  CardPanel,
  CardView,
  CardItem,
  CardTextPanel,
  CardText,
  StyledIcon,
  RightIcon,
  StyledImage,
  StyledText,
  ImageIconContainer,
} from './../components/styles';
import HistoryDetailModal from './../modals/history-detail-modal';
import { AntDesign, Octicons, MaterialIcons } from '@expo/vector-icons';

const { theme } = Colors;

const histories = [
  {
    sessionID: '1',
    donorUUID: '128499393333',
    date: '28-09-2012',
    time: '1400',
    staffUUID: '983749393933',
    staffName: 'Siti Norway',
    centerID: 'C0001',
    centerName: 'Gland Eagers',
    centerAddress:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Mollis ac mi elit nunc. Elit convallis ultricies fames sollicitudin vitae ',
    bloodGroup: 'O+',
    bP: '126/64',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '450',
    covidAntibody: '-',
  },
  {
    sessionID: '2',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway 2',
    centerID: 'C0002',
    centerName: 'Gland Eagers2',
    centerAddress:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Mollis ac mi elit nunc. Elit convallis ultricies fames sollicitudin vitae ',
    bloodGroup: 'O-',
    bP: '126/65',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '330',
    covidAntibody: '-',
  },
  {
    sessionID: '3',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway Psildm',
    centerID: 'C0003',
    centerName: 'Pantai Hospital',
    centerAddress:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Mollis ac mi elit nunc. Elit convallis ultricies fames sollicitudin vitae ',
    bloodGroup: 'AB+',
    bP: '128/64',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '350',
    covidAntibody: '+',
  },
  {
    sessionID: '4',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway Psildm',
    centerID: 'C0003',
    centerName: 'Pantai Hospital',
    centerAddress:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Mollis ac mi elit nunc. Elit convallis ultricies fames sollicitudin vitae ',
    bloodGroup: 'B+',
    bP: '126/62',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '400',
    covidAntibody: '-',
  },
  {
    sessionID: '5',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway Psildm',
    centerID: 'C0003',
    centerName: 'Pantai Hospital',
    centerAddress:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Mollis ac mi elit nunc. Elit convallis ultricies fames sollicitudin vitae ',
    bloodGroup: 'B-',
    bP: '128/64',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '-',
  },
  {
    sessionID: '6',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway sw',
    centerID: 'C0003',
    centerName: 'Pantai Hospital',
    centerAddress:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Mollis ac mi elit nunc. Elit convallis ultricies fames sollicitudin vitae ',
    bloodGroup: 'B+',
    bP: '126/60',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '+',
  },
];

const DonationHistory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState({
    sessionID: '',
    donorUUID: '',
    date: '',
    time: '',
    staffUUID: '',
    staffName: '',
    centerID: '',
    centerName: '',
    centerAddress: '',
    bloodGroup: '',
    bP: '',
    heamoglobinCount: '',
    pulse: '',
    bloodUnit: '',
    covidAntibody: '',
  });
  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardPanel>
          {histories.map((data) => (
            <CardView
              key={data.sessionID}
              onPress={() => {
                setModalVisible(true);
                setDetails(data);
              }}
            >
              <ImageIconContainer>
                <StyledImage
                  imageIcon
                  resizeMode='cover'
                  source={require('../assets/icons/blood-bag.png')}
                />
                <StyledText imageText>{data.bloodUnit} mL</StyledText>
              </ImageIconContainer>
              <CardItem>
                <CardTextPanel>
                  <StyledIcon>
                    <AntDesign name='calendar' size={17} color='black' />
                  </StyledIcon>
                  <CardText>{data.date}</CardText>
                </CardTextPanel>
                <CardTextPanel>
                  <StyledIcon>
                    <AntDesign name='clockcircleo' size={17} color='black' />
                  </StyledIcon>
                  <CardText>{data.time}</CardText>
                </CardTextPanel>
                <CardTextPanel>
                  <StyledIcon>
                    <Octicons name='location' size={20} color='black' />
                  </StyledIcon>
                  <CardText>{data.centerName}</CardText>
                </CardTextPanel>
              </CardItem>
              <RightIcon
                onPress={() => {
                  setModalVisible(true);
                  setDetails(data);
                }}
              >
                <MaterialIcons name='navigate-next' size={50} color={theme} />
              </RightIcon>
            </CardView>
          ))}
        </CardPanel>
        <HistoryDetailModal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          details={details}
        />
      </ScrollView>
    </StyledContainer>
  );
};

export default DonationHistory;
