import { StatusBar } from "expo-status-bar";
import React, { useState, createContext, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

import Chat from "./screens/Chat.js";
import Login from "./screens/Login.js";
import Signup from "./screens/Ssignup.js";
import Home from "./screens/Home.js";

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOption={Home}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator defaultScreenOption={Login} screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setLoading(false);
    })
    return () => unsubscribe();;
  }, [user]);
  if(loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      { user ? <ChatStack/> : <AuthStack/>}
      {/* <ChatStack /> */}
    </NavigationContainer>
  );
}

export default function App() {
  return(
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  ) 
}
