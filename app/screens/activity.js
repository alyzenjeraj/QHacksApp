
import React from 'react';
import { SafeAreaView, ScrollView, Button, StatusBar, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
//import notificationPage from '../data/notificationPage';

function activity(props) {
    return (
        <>
        <View>            
            <Text style={styles.note}>Notifications</Text>
        </View>
        <ScrollView>
        <View style={styles.notificationConatiner}>
                    <View style={styles.name}>
                    <Text style={styles.nameText}>Aly Jeraj </Text>            
                    <Image source={require('../assets/Aly.jpg')} style={styles.avatar1} resizeMode='cover'/> 
                    </View>
                    <View style={styles.name}>
                    <Text style={styles.nameText}>Caleb Wong</Text>            
                    <Image source={require('../assets/Caleb.jpg')} style={styles.avatar1} resizeMode='cover'/> 
                    </View>
                    <View style={styles.name}>
                    <Text style={styles.nameText}>Jordan Goldbloom </Text>            
                    <Image source={require('../assets/Jordan.jpg')} style={styles.avatar1} resizeMode='cover'/> 
                    </View>
                    <View style={styles.name}>
                    <Text style={styles.nameText}>Mailyn Tak </Text>            
                    <Image source={require('../assets/Mailyn.jpg')} style={styles.avatar1} resizeMode='cover'/> 
                    </View>
            </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    
    note: {
        marginTop: 60,
        fontSize: 30,
        
        fontFamily: 'Nunito',
        textAlign: 'center',
    },
    notificationsContainer: {
    },
    name: {
        backgroundColor: '#BC99E9',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 80,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'space-between',

    },
    nameText: {
        fontSize: 24,
        fontFamily: 'Nunito',
        paddingLeft: 20,
        paddingTop: 24,
    },
    avatar1: {        
        width: 60,
        height: 60,
        borderRadius: 50,
        margin: 10,
        marginRight: 20,
    },

})




export default activity;