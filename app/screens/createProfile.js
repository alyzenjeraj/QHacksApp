import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function createProfile(props) {
    const navigation = useNavigation();
    const [image, setImage] = useState(null);

    const pickImage = async () => {
     // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [fname, first] = useState('fname');
  const [lname, last] = useState('lname');

  return (
    <ScrollView style={styles.views}>
        <Text style={styles.pad}> </Text>
        <Text style={styles.text}>Time to make your profile!</Text>
        <Text style={styles.text}> Lets start with your name!</Text>
        <View style={styles.row}>
            <View style={styles.ipview}>
                <TextInput placeholder='First Name' placeholderTextColor='white' style={styles.inputter}/>
            </View>
            <View style={styles.ipview}>
                <TextInput placeholder='Last Name' placeholderTextColor='white' style={styles.inputter}/>            
            </View>
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.logBot}>
            <Text style={styles.text2}>Tap to pick an image to show your talent!</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        
        
            <Text style={styles.text}>Addtional Information!</Text>
        
            <View style={styles.ipview}>
                <TextInput placeholder='Skills' placeholderTextColor='white' style={styles.inputter}/>
            </View>
            <View style={styles.ipview}>
                <TextInput placeholder='Expected Timeline' placeholderTextColor='white' style={styles.inputter}/>            
            </View>
            
            <View style={styles.ipview}>
            <TextInput placeholder='Projects Completed' placeholderTextColor='white' style={styles.inputter}/>            
            </View>
            <Button style={styles.registerButton} title="Finish!" onPress={() => navigation.navigate('Welcome')}></Button>

        </ScrollView>

    
  );
}

const styles = StyleSheet.create({
    pad: {
        padding: 50,
    },
    image: {
        width: 200,
        height: 200,
        position: 'relative',
        bottom: 0,
        alignSelf: 'center',
    },
    text: {
        alignContent: 'center',
        alignSelf: 'center'
    },
    text2: {
        alignContent: 'center',
        alignSelf: 'center',
        color: 'blue'
    },
    space: {
        width: 20,
        height: 20,
    },
    inputter: {
        flex: 1,
        alignSelf: 'center',
        height: 50,
        alignContent: 'center',
        color: 'white'
    },
    views: {
        backgroundColor: 'white',
        // alignItems: 'center', 
        // justifyContent: 'center',
        alignContent: 'center'
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
    row: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    
    },

    ipview: {
        backgroundColor: "#BC99E9",
        opacity: 30,
        borderRadius: 30,
        width: "70%",
        height: 45,
        margin: 20,
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
    },
    iptext: {
        color: "white"
    },
})