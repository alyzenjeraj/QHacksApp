import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

function ProfileScreen(props) {
    return (
        <SafeAreaView>
            <Text>Hello World We are here :)))</Text>
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

export default ProfileScreen;



