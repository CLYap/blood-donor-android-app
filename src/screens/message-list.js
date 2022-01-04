import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  InnerContainer,
  StyledButton,
  ButtonText,
  Colors,
  StyledText,
  FlexRowContainer,
} from './../components/styles';
import { db } from './../components/services/firebase-config';
import { useUserInfo } from './../components/context/user-info-provider';
import moment from 'moment';

const { theme } = Colors;

const MessageList = ({ navigation }) => {
  const { userProfile } = useUserInfo();
  const donorId = userProfile.donorId;
  const [chatrooms, setChatRooms] = useState([]);

  useEffect(() => {
    db.collection('messages')
      .get()
      .then((querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          if (doc.id.substring(5, 10) === donorId) {
            let info = { creatorId: '', creatorName: '' }; //staff info
            info = {
              creatorId: doc.data().creatorId,
              creatorName: doc.data().creatorName,
              lastUpdate: doc.data().lastUpdate,
            };
            users.push(info);
          }
        });
        setChatRooms(users);
      });
  }, []);

  return (
    <StyledContainer>
      <StatusBar barStyle='light-content' backgroundColor={theme} />
      <InnerContainer padding20>
        {chatrooms &&
          chatrooms.map((data) => {
            return (
              <StyledButton
                primaryButton
                marginBottom17
                key={data.creatorId}
                onPress={() =>
                  navigation.navigate('ChatScreen', {
                    senderId: data.creatorId,
                  })
                }
              >
                <FlexRowContainer spaceBetween>
                  <StyledText>
                    {data.creatorName} {data.creatorId}
                  </StyledText>
                  <StyledText fontSize13 paddingLeft50>
                    Last Update: {moment(data.lastUpdate.toDate()).fromNow()}
                  </StyledText>
                </FlexRowContainer>
              </StyledButton>
            );
          })}
      </InnerContainer>
    </StyledContainer>
  );
};

export default MessageList;
