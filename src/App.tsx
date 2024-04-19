/*
 * @Description: file content
 * @Author: Knight
 * @Date: 2024-04-17 10:11:48
 * @LastEditors: your name
 * @LastEditTime: 2024-04-19 17:24:51
 */
/*
 * @Description: file content
 * @Author: Knight
 * @Date: 2024-04-17 10:11:48
 * @LastEditors: your name
 * @LastEditTime: 2024-04-19 10:17:15
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//引入屏幕
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function App() {
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

export default App;
