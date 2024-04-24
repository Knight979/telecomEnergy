/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 17:25:55
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-23 20:48:48
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    NavigationContainer,
    NavigatorScreenParams,
} from '@react-navigation/native'
//引入屏幕
import {
    LoginScreen,
    SettingsScreen
} from '@/Screens'
import { useSelector } from 'react-redux';

// 定义导航器参数类型
export type ApplicationNavigatorParamList = {
    Overview: undefined
    Login: undefined
    HistoricalDataAdd: undefined
    SetLanguage: undefined
}
// 创建导航器
const Stack = createNativeStackNavigator<ApplicationNavigatorParamList>();

const ApplicationNavigator = () => {
    // 获取应用token
    // const token = useSelector((state: any) => state.user.token);
    let token = '';
     token = '';

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={()=>({
                    headerShown:false,
                })}
             >
                {
                    token === ''?(
                        <Stack.Screen name="Login" component={LoginScreen} />
                    ):(
                        <Stack.Screen name='Overview' component={SettingsScreen} />
                    )
                }
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default ApplicationNavigator;
