//@refresh reset
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GiftedChat } from 'react-native-gifted-chat';
import { useUserInfo } from './../components/context/user-info-provider';
import { db } from '../components/services/firebase-config';
import {
  StyledContainer,
  InnerContainer,
  StyledText,
  StyledTextInput,
  StyledButton,
  StyledInputLabel,
} from './../components/styles';

const Chat = ({ route, navigation }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const { userProfile } = useUserInfo();
  const donorId = userProfile.donorId;
  const donorName = userProfile.fName + ' ' + userProfile.lName;
  const { senderId } = route.params;

  const chatsRef = db
    .collection('messages')
    .doc(senderId + donorId)
    .collection('chat');

  useEffect(() => {
    setUser({
      _id: donorId,
      name: donorName,
    });

    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messageFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data();
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messageFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, messages));
    },
    [messages]
  );

  async function handleSend(messages) {
    const writes = messages.map((m) => chatsRef.add(m));
    await Promise.all(writes);
  }

  return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
};

export default Chat;
