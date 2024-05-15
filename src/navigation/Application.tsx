/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 17:25:55
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-15 09:04:38
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {
    NavigationContainer,
    NavigatorScreenParams,
} from '@react-navigation/native'
//引入屏幕
import {
    LoginScreen,
    SetLanguageScreen,
    SettingsScreen
} from '@/Screens'
import { useSelector } from 'react-redux';
import MainStackNavigator, { MainStackNavigatorParamList } from './MainStack';
import { useInitApplication } from '@/Hooks'

// 定义导航器参数类型
export type ApplicationNavigatorParamList = {
    MainStack: NavigatorScreenParams<MainStackNavigatorParamList>
    Login: undefined,
    SetLanguage: undefined,

}
// 创建导航器
const Stack = createStackNavigator<ApplicationNavigatorParamList>();

const ApplicationNavigator = () => {
    // 获取应用token
    const token = useSelector((state: any) => state.user.token);
    // put custom hook here
    useInitApplication()
    // useInitJPushNotification()
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
                        <Stack.Screen
                            name="MainStack"
                            component={MainStackNavigator}
                            options={{
                                animationEnabled: false,
                            }}
                        />
                        
                    )
                }
             <Stack.Screen name="SetLanguage" component={SetLanguageScreen} />
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}



export default ApplicationNavigator;
