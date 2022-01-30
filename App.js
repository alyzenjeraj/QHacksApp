import {StatusBar} from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import createProfile from './app/screens/createProfile';
import preLoginScreen from './app/screens/preLoginScreen';
import loginScreen from './app/screens/loginScreen';
import profileScreen from './app/screens/profileScreen';
import activityScreen from './app/screens/activity';
import placeholderScreen from './app/screens/placeholder';
import signupScreen from './app/screens/signUpScreen';
//import MainContainer from './app/screens/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 

const getFonts = () =>
  Font.loadAsync({
    ConcertOne: require("./app/assets/fonts/ConcertOne-Regular.ttf"),
    Nunito: require("./app/assets/fonts/Nunito-VariableFont_wght.ttf")
  });

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  function profileTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Profile" component={profileScreen}/>
        <Tab.Screen name="Activity" component={activityScreen}/>
        <Tab.Screen name="Placeholder" component={placeholderScreen}/>
      </Tab.Navigator>
    );
  }

  export default function App() {
    //const [fontsloaded, setFontsLoaded] = useState(false);
  
   // if (fontsloaded) {
      return (
        
       // <MainContainer/>
        <NavigationContainer>
          <Stack.Navigator>
          
            
            <Stack.Screen name="preLogin" component={preLoginScreen} />
            <Stack.Screen name="login" component={loginScreen} />
            <Stack.Screen name="Welcome" component={profileTabs}/>
            <Stack.Screen name="Sign Up" component={signupScreen}/>
            <Stack.Screen name="Edit Profile" component={createProfile}/>
          </Stack.Navigator>
          {/* <Stack.Navigator initialRouteName="placeholder">
            <Stack.Screen name="preLogin" component={preLoginScreen} />
            <Stack.Screen name="login" component={loginScreen} />
            <Stack.Screen name="profile" component={profileScreen} />
            <Stack.Screen name="activity" component={activityScreen} />
            <Stack.Screen name="placeholder" component={placeholderScreen} />
          </Stack.Navigator> */}


        </NavigationContainer>
        
      );
      
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });