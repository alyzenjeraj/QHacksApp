import React from 'react';
import { SafeAreaView, Button, StatusBar, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

function preLoginScreen(props) {
    return (
        <SafeAreaView style={styles.conatiner}>
            <Text
            style={styles.texted}>Finch</Text>
            <Button style={styles.loginButton} title="Login" onPress={() => console.log("Buttom Tapped")}>Login></Button>
            <Button style={styles.registerButton} title="Login" onPress={() => console.log("Buttom Tapped")}>Register</Button>
            <Image             
            style={styles.image}
            source={require('../assets/Finch_2.png')}/>
            
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
        marginTop: 200,
        fontSize: 80,
        fontFamily: "ConcertOne",
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
   },
   image: {
    width: 200,
    height: 200,
    position: 'relative',
    bottom: 0,
    },
})

export default preLoginScreen;