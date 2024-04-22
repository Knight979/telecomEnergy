/*
 * @Description: file content
 * @Author: Knight
 * @Date: 2024-04-22 09:48:12
 * @LastEditors: your name
 * @LastEditTime: 2024-04-22 17:21:19
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//引入屏幕
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';


const Stack = createNativeStackNavigator();
const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default ApplicationNavigator;
