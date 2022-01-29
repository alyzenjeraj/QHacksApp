import {StatusBar} from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import PreLoginScreen from './app/screens/preLoginScreen';
 

const getFonts = () =>
  Font.loadAsync({
    ConcertOne: require("./app/assets/fonts/ConcertOne-Regular.ttf"),
    Nunito: require("./app/assets/fonts/Nunito-VariableFont_wght.ttf")
  });

  export default function App() {
    const [fontsloaded, setFontsLoaded] = useState(false);
  
    if (fontsloaded) {
      return (
        <PreLoginScreen>
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
          </PreLoginScreen>
      );
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
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });