/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 14:39:10
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-14 19:08:10
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigatorScreenParams } from '@react-navigation/native'
import MainTabNavigator, { MainTabNavigatorParamList } from './MainTab'
import { SetLanguageScreen, ChangePasswordScreen, SetTimeZoneScreen } from '@/Screens/Settings';



export type MainStackNavigatorParamList = {
  MainTab: NavigatorScreenParams<MainTabNavigatorParamList>,

  SetLanguage: undefined,
  SetTimeZone: undefined
  ChangePassword: undefined,
}


const Stack = createStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}
    >
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
      <Stack.Screen name="SetLanguage" component={SetLanguageScreen} />
      <Stack.Screen name="SetTimeZone" component={SetTimeZoneScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />

    </Stack.Navigator>
  )
}

export default MainStackNavigator

