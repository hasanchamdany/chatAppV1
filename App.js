import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';

import Chat from "./screens/Chat.js"
import Login from "./screens/Login.js"
import Signup from './screens/Ssignup.js';
import Home from './screens/Home.js'

const Stack = createStackNavigator();

function ChatStack() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return(
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <RootNavigator/>
  );
}


