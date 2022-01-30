import {StatusBar} from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import createProfile from './app/screens/createProfile';
import preLoginScreen from './app/screens/preLoginScreen';
import loginScreen from './app/screens/loginScreen';
import profileScreen from './app/screens/ProfileScreen';
import activityScreen from './app/screens/activity';
import placeholderScreen from './app/screens/placeholder';
import signupScreen from './app/screens/signUpScreen';
import swipeScreen from './app/screens/swipeScreen';
import swipeScreen2 from './app/screens/swipeScreen2';
import swipeScreen3 from './app/screens/swipeScreen3';
//import MainContainer from './app/screens/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import {GestureHandler} from 'expo';
import Swipeable from 'react-native-gesture-handler/Swipeable';

 

const getFonts = () =>
  Font.loadAsync({
    Nunito: require('./app/assets/fonts/Nunito-VariableFont_wght.ttf'),
    ConcertOne: require('./app/assets/fonts/ConcertOne-Regular.ttf'),
  });

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();



  function profileTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Profile" component={profileScreen}/>
        <Tab.Screen name="Activity" component={activityScreen}/>
        <Tab.Screen name="Match" component={swipeScreen}/>
      </Tab.Navigator>
    );
  }

  export default function App() {
    //const [fontsloaded, setFontsLoaded] = useState(false);
  
   //if (fontsloaded) {
      return (
        
       // <MainContainer/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          
            
            <Stack.Screen name="preLogin" component={preLoginScreen} />
            <Stack.Screen name="login" component={loginScreen} />
            <Stack.Screen name="Welcome" component={profileTabs}/>
            <Stack.Screen name="Sign Up" component={signupScreen}/>
            <Stack.Screen name="Edit Profile" component={createProfile}/>
            <Stack.Screen name="Match2" component={swipeScreen2}/>
            <Stack.Screen name="Match3" component={swipeScreen3}/>
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
      
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });