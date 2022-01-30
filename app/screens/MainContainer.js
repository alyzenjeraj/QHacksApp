import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { useNavigation } from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import profileScreen from './app/screens/ProfileScreen';
import activityScreen from './app/screens/activity';
import placeholderScreen from './app/screens/placeholder';

const profileName = 'Profile';
const activityName = 'Activity';
const placeholderName = 'Placeholder';

const Tab = createBottomTabNavigator();

function MainContainer() {
   
    return (
       
        <Tab.Navigator>
            
            <Tab.Screen name={profileName} component={profileScreen}/>
            <Tab.Screen name={activityName} component={activityScreen}/>
            <Tab.Screen name={placeholderName} component={placeholderScreen}/>
        </Tab.Navigator>
        
        
    );
}

