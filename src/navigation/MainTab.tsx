import React from 'react'
import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
// 引入 MainTabBar 组件
import { MainTabBar } from '@/Components'
// 引入屏幕
import {
    OverviewScreen,
    AlarmsListScreen,
    GISMapScreen,
    SettingsScreen,
} from '@/Screens'

// 定义底部导航栏数据类型
export type MainTabNavigatorParamList = {
    Overview: undefined // NavigatorScreenParams<HomeStackNavigatorParamList>
    Alarms: undefined
    GISMap: undefined
    Settings: undefined,
    SetLanguage: undefined,
    SetTimeZone: undefined
    ChangePassword: undefined,
}

export type MainNavigatorNavigationProp = BottomTabNavigationProp<MainTabNavigatorParamList>

// 创建底部导航栏 数据类型为 MainTabNavigatorParamList
const Tab = createBottomTabNavigator<MainTabNavigatorParamList>()

// @refresh reset
const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <MainTabBar {...props} />}
            screenOptions={{
                lazy: false,
                headerShown: false,
            }}>
            <Tab.Screen name="Overview" component={OverviewScreen} />
            <Tab.Screen name="Alarms" component={AlarmsListScreen} />
            <Tab.Screen name="GISMap" component={GISMapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator
