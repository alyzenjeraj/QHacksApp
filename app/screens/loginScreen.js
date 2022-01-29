import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function loginScreen(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainView}>
            <Image style={styles.image} source={require('../assets/Finch_2.png')} />

            <View style={styles.ipview}>
                <TextInput placeholder="Email" 
                style={styles.inputter}
                placeholderTextColor="white"/>
            </View>
            <View style={styles.ipview}>
                <TextInput placeholder="Password" 
                style={styles.inputter}
                placeholderTextColor="white"/>
            </View>
            <TouchableOpacity>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logBot} onPress={() => navigation.navigate('profile')}>
                <Text>LOGIN</Text>
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
    },

    ipview: {
        backgroundColor: '#f578e5',
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

export default loginScreen;



