/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 19:33:45
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-24 16:00:07
 */
import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform, SafeAreaView, Image } from 'react-native';
import { Layout, Fonts, Colors, Sizes } from '@/Styles'
//处理键盘外观并自动滚动到聚焦的TextInput
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
const LoginScreen = () => {
    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Text>登录</Text>
                    {/* <View style={styles.formContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri:
                                        Platform.OS === 'ios' ? 'SplashIcon' : 'splash_screen_logo',
                                }}
                                resizeMode="contain"
                                style={styles.bigLogoImage}
                            />
                        </View>
                    </View> */}
                </View>
            </KeyboardAwareScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: 'white',
    },
    contentContainerStyle: {
        flexGrow: 1,
    },
    container: {
        ...Layout.fill,
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 30,
        paddingBottom: 30,
        justifyContent: 'space-around',
    },
    formContainer: {
        // flex: 1,
    },
    imageContainer: {
        height: 180,
        justifyContent: 'center',
    },
    bigLogoImage: {
        height: '35%',
    },
    forgetButton: {
        width: '50%',
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgetText: {
        ...Fonts.semiBold,
        color: Colors.text.font2,
        fontSize: 14,
        alignSelf: 'flex-end',
    },
    versionText: {
        ...Fonts.semiBold,
        color: Colors.text.font2,
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 20,
    },
    langText: {
        ...Fonts.regular,
        ...Fonts.size14,
        color: Colors.text.font1,
        marginLeft: 5,
    },
    loginButton: {
        height: Sizes.confirmButtonHeight,
    },
    langBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
})

export default LoginScreen;
