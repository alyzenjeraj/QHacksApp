import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import IonIcons from 'react-native-vector-icons/Ionicons'

function ProfileScreen(props) {
    const navigation = useNavigation();
    return (
        
        <SafeAreaView>
             <Text
            onPress = {() => alert('this is the Profile Screen.')}
            style={styles.texted}>Lor's Profile</Text>

            <Image
            style={styles.image}
            source={require('../assets/RockGarden.png')}/>
            <Text style={styles.textNorm}>Skill: Digital Art</Text>
            <Text style={styles.textNorm}>Timeline: 1 week</Text>
            <Text style={styles.textNorm}>Projects completed: 3</Text>
            <Text style={styles.textNorm}>Socials: @Lor_Mentor</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texted: {
        marginTop: 20,
        fontSize: 30,
        fontFamily: "ConcertOne",
        textAlign: "center",
    },
    textNorm: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 15,
        fontFamily: "Nunito",
        textAlign: "center",
        backgroundColor: "#BC99E9",
        padding: 5,
        borderRadius: 30,
    },
    roundButton1: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
        fontFamily: "Nunito",
   },
   roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
   image: {
    top: 20,
    width: 300,
    height: 350,
    position: 'relative',
    bottom: 5,
    marginBottom: 20,
    alignSelf: 'center',
    },
    space: {
        width: 20,
        height: 20, 
    },
})

export default ProfileScreen;