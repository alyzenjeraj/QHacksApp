import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function signUpScreen(props) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('email@email')
    const [pass, setPass]  = useState('pass');
    const [passConf, setPassConf] = useState('passConf')
    return (
        <SafeAreaView style={styles.mainView}>
            <Image style={styles.image} source={require('../assets/Finch_2.png')} />
            <Text>Hi! Welcome to Finch!</Text>
            <Text>Meet other creatives and share your craft!</Text>
            <View style={styles.ipview}>
                <TextInput placeholder="Email" 
                style={styles.inputter}
                placeholderTextColor="white"
                onChangeText={(val) => setEmail(val)}/>

            </View>
            <View style={styles.ipview}>
                <TextInput placeholder="Password" 
                style={styles.inputter}
                placeholderTextColor="white"  
                secureTextEntry={true}
                onChangeText={(val) => setPass(val)}/>
            </View>
            <View style={styles.ipview}>
                <TextInput placeholder="Confirm Password" 
                style={styles.inputter}
                placeholderTextColor="white"
                
                secureTextEntry={true}
                onChangeText={(val) => setPassConf(val)}/>
            </View>
           
            <TouchableOpacity style={styles.logBot} onPress={() => pass == passConf ? navigation.navigate('Edit Profile') : alert('Passwords do not match. Re-Enter.')}>
                <Text>Sign Up!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    inputter: {
        flex: 1,
        alignSelf: 'center',
        height: 50,
        color: 'white',
    },

    ipview: {
        backgroundColor: "#BC99E9",
        opacity: 30,
        borderRadius: 30,
        width: "70%",
        height: 45,
        margin: 15,
        alignSelf: 'center'
    },
    mainView: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
    },
    logBot: {
        padding: 20,
    }
})

export default signUpScreen;