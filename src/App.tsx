/*
 * @Description: file content
 * @Author: Knight
 * @Date: 2024-04-17 10:11:48
 * @LastEditors: your name
 * @LastEditTime: 2024-04-22 17:23:27
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApplicationNavigator } from './Navigation';

function App() {
  return (
    <Provider store={null}>
      <ApplicationNavigator />
    </Provider>
    

  );

}

export default App;
