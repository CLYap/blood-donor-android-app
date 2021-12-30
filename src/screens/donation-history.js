import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserInfo } from './../context/user-info-provider';

const { theme } = Colors;

const DonationHistory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState({});
  const [histories, setHistories] = useState([]);
  const { getHistories, userProfile } = useUserInfo();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getHistories(userProfile.donorId);
    getHistoryData();
    setRefreshing(false);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getHistoryData();
    }
    return () => {
      isMounted = false;
    };
  }, [histories]);

  const getHistoryData = async () => {
    const data = await AsyncStorage.getItem('donationHistories');
    setHistories(JSON.parse(data));
  };

  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CardPanel height800>
          {histories &&
            histories.map((data) => (
              <CardView
                key={data.donationHistoryId}
                onPress={() => {
                  setModalVisible(true);
                  setDetails(data);
                }}
              >
                <ImageIconContainer>
                  <StyledImage
                    imageIcon
                    resizeMode='cover'
                    source={require('../../assets/icons/blood-bag.png')}
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
                    <CardText>
                      {data.staff.bloodCentre.bloodCentreName}
                    </CardText>
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
