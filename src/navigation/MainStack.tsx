/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 14:39:10
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-06 14:26:11
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigatorScreenParams } from '@react-navigation/native'
import MainTabNavigator, { MainTabNavigatorParamList } from './MainTab'
export type MainStackNavigatorParamList = {
  MainTab: NavigatorScreenParams<MainTabNavigatorParamList>
}


const Stack = createStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator

