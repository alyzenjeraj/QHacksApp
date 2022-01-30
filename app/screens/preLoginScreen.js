import React from 'react';
import { SafeAreaView, Button, StatusBar, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function preLoginScreen(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar style="auto" />
            
                <Text
                style={styles.texted}>Finch</Text>
                <Image             
                style={styles.image}
                source={require('../assets/Finch_2.png')}/>
                {/* <Button style={styles.loginButton} title="Login" color="#BC99E9" onPress={() => navigation.navigate('login')}></Button>
                <Button style={styles.registerButton} title="Sign Up" onPress={() => navigation.navigate('Sign Up')}></Button> */}
                <TouchableOpacity style={styles.logBot} onPress={() => navigation.navigate('login')}>
                <Text style={styles.tech}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logBot} onPress={() =>  navigation.navigate('Sign Up')}>
                <Text style={styles.tech}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            
            
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
        marginTop: 0,
        fontSize: 80,
        fontFamily: "ConcertOne",
        textAlign: "center",
    },
    tech: {
        color: 'white',
    },
    loginButton: {
        width: "50%",
        height: 50,
        fontSize: 50,
        fontFamily: "Nunito",
        //justifyContent: 'center',
        //alignItems: 'center',
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

    logBot: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 25,
        fontFamily: "Nunito",
        textAlign: "center",
        backgroundColor: "#BC99E9",
        padding: 10,
        borderRadius: 30,
    },
})

export default preLoginScreen;