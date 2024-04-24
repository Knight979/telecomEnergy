/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 15:52:19
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-23 17:04:57
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// 引入useSafeAreaInsets 用于获取安全区域
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// 引入图标
import DashboardIcon from '@/Assets/Icons/Navigation/dashboard-2.svg';
import MapIcon from '@/Assets/Icons/Navigation/map.svg';
import SettingsIcon from '@/Assets/Icons/Navigation/settings.svg';
import CautionIcon from '@/Assets/Icons/Navigation/caution.svg';
// 引入Navigation
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// 引入navigation组件
import { MainTabNavigatorParamList } from '@/Navigation/MainTab';

const MainTabBar:React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    // 返回安全区域的尺寸信息
    const insets = useSafeAreaInsets();
  return (
    <View>
          <Text>MainTabBar {JSON.stringify(state)}</Text>
      
    </View>
  )
}

export default MainTabBar

const styles = StyleSheet.create({})