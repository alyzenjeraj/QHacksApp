import React from 'react';
import { SafeAreaView, Button, StatusBar, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

function preLoginScreen(props) {
    return (
        <SafeAreaView style={styles.conatiner}>
            <Text
            style={styles.texted}>Finch</Text>
            <Image             
            style={styles.image}
            source={require('../assets/Finch_2.png')}/>
            <Button style={styles.loginButton} title="Login" color="#BC99E9" onPress={() => console.log("Top Tapped")}></Button>
            <Button style={styles.registerButton} title="Sign Up" onPress={() => console.log("Bottom Tapped")}></Button>
            
            
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

export default preLoginScreen;