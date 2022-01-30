import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Time to make your profile!</Text>
        <Text> Lets start with your name!</Text>
        <View style={styles.row}>
            <View style={styles.ipview}>
                <TextInput placeholder='First Name' placeholderTextColor='white' style={styles.inputter}/>
            </View>
            <View style={styles.ipview}>
                <TextInput placeholder='Last Name' placeholderTextColor='white' style={styles.inputter}/>            
            </View>
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.logBot}>
            <Text>Pick an image to show your talent!</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        
        
            <Text>Addtional Information!</Text>
        <View style={styles.row}>
            <View style={styles.ipview}>
                <TextInput placeholder='Skills' placeholderTextColor='white' style={styles.inputter}/>
            </View>
            <View style={styles.ipview}>
                <TextInput placeholder='Expected Timeline' placeholderTextColor='white' style={styles.inputter}/>            
            </View>
            </View>
            <View style={styles.ipview}>
            <TextInput placeholder='Projects Completed' placeholderTextColor='white' style={styles.inputter}/>            
            </View>
            <Button style={styles.registerButton} title="Finish!" onPress={() => navigation.navigate('Welcome')}></Button>

        </View>

    
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    
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