import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GiftedChat } from 'react-native-gifted-chat';

import {
  StyledContainer,
  InnerContainer,
  StyledText,
  StyledTextInput,
  StyledButton,
  StyledInputLabel,
} from './../components/styles';

const firebaseConfig = {
  apiKey: 'AIzaSyCjACeWmg6XEyFcKpuil4dZSvsH_J5A3nE',
  authDomain: 'blood-donor-management-s-f0d3c.firebaseapp.com',
  projectId: 'blood-donor-management-s-f0d3c',
  storageBucket: 'blood-donor-management-s-f0d3c.appspot.com',
  messagingSenderId: '222959529237',
  appId: '1:222959529237:web:3b3377c0d3e1a1c4c78d1c',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const chatsRef = db.collection('chats');

const Chat = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    AsyncStorage.removeItem('user');
    readUser();
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

  async function readUser() {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  async function handlePress() {
    const _id = Math.random();
    const user = { _id, name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  async function handleSend(messages) {
    const writes = messages.map((m) => chatsRef.add(m));
    await Promise.all(writes);
  }

  if (!user) {
    return (
      <StyledContainer>
        <InnerContainer>
          <StyledText letterSpacing fontWeightBold fontSize17 paddingLeft20>
            Chat no user
          </StyledText>
          <StyledTextInput
            placeholder='Enter name'
            value={name}
            onChangeText={setName}
          />
          <StyledButton onPress={handlePress}>
            <StyledInputLabel>Enter chat </StyledInputLabel>
          </StyledButton>
        </InnerContainer>
      </StyledContainer>
    );
  }

  return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
};

export default Chat;
