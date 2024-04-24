/*
 * @Description: 导航入口
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 17:25:55
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-23 11:39:36
 */
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationNavigator } from '@/Navigation';

function App() {
  return (
      <ApplicationNavigator />
  );

}

export default App;
