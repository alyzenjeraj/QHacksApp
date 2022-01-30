import React from 'react';
import { SafeAreaView, Button, StatusBar, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function placeholder(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.conatiner}>
            <Text
            style={styles.texted}>Placeholder</Text>

            <Text
                onPress = {() => navigation.navigate('Profile')}
                style={styles.texted}>Placeholder Screen</Text>
            
            
            
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
        marginTop: 30,
        fontSize: 20,
        fontFamily: "Nunito",
        textAlign: "center",
    },
    loginButton: {
        width: "50%",
        height: 50,
        fontSize: 50,
        fontFamily: "Nunito",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#BC99E9",
   },
   registerButton: {
    width: "50%",
    height: 50,
    fontSize: 50,
    fontFamily: "Nunito",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#BC99E9",
    marginBottom: 20,
    padding: 30,
   },
   image: {
    width: 200,
    height: 200,
    position: 'relative',
    bottom: 0,
    alignSelf: 'center',
    },
    space: {
        width: 20,
        height: 20, 
    },
})

export default placeholder;