import {StatusBar} from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import preLoginScreen from './app/screens/preLoginScreen';
import loginScreen from './app/screens/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 

const getFonts = () =>
  Font.loadAsync({
    ConcertOne: require("./app/assets/fonts/ConcertOne-Regular.ttf"),
    Nunito: require("./app/assets/fonts/Nunito-VariableFont_wght.ttf")
  });

  const Stack = createNativeStackNavigator();
  export default function App() {
    //const [fontsloaded, setFontsLoaded] = useState(false);
  
   // if (fontsloaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="preLogin">
            <Stack.Screen name="preLogin" component={preLoginScreen} />
            <Stack.Screen name="login" component={loginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        
      );
      /*
    } else {
      return (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => {
            setFontsLoaded(true);
          }}
          onError={console.warn}
        />
      );
    }
    */
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });