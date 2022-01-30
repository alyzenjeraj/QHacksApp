import React from 'react';
import { StyleSheet, Text, View, Image, Animated, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import moment from 'moment';


//function swipeRight(props) {
    

function swipeScreen2(props) {
    const navigation = useNavigation();

    const RenderRight = (progress, dragX) => {
        return(
            <View style ={[{width: 500, backgroundColor: 'red', alignItems: "center" }]}> 
                <Text style ={[{color: '#fff' }]}> Not Today </Text>
            </View>
        );}

    const RenderLeft = (progress, dragX) => {
        return(
            <View style ={[{width: 500, backgroundColor: 'green', alignItems: "center" }]}> 
                <Text style ={[{color: '#fff' }]}> Connect </Text>
            </View>
        );}

    
    const changeScreen = () => {
            //alert("NUMBER 2 (POOP)")
            navigation.navigate('Match3')
    }
    

    return (
        <View>
            <Button style={styles.registerButton} title="See Matches" onPress={() => navigation.navigate('Activity')}></Button>
            <Swipeable overshootRight={true} onSwipeableRightOpen={changeScreen} renderRightActions={RenderRight} renderLeftActions = {RenderLeft} onSwipeableLeftOpen={changeScreen} >
             <Text
            style={styles.texted}>Carlos</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', }}>
            <Image
            style={styles.image}
            source={require('../assets/pant.jpg')}/>
            </View>
            <Text style={styles.textNorm}>Skill: Painting</Text>
            <Text style={styles.textNorm}>Timeline: 3 months</Text>
            <Text style={styles.textNorm}>Projects completed: 5</Text>
            <Text style={styles.textNorm}>Socials: @123me</Text>
        </Swipeable>
        </View>
        
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
    top: 5,
    width: 300,
    height: 350,
    position: 'relative',
    bottom: 5,
    alignSelf: 'center',
    },
    space: {
        width: 20,
        height: 20, 
    },
})


export default swipeScreen2;
//swipeRight, swipeLeft;