/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 19:33:45
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-28 10:15:48
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Platform, SafeAreaView, Image } from 'react-native';
import { Layout, Fonts, Colors, Sizes } from '@/Styles'
//处理键盘外观并自动滚动到聚焦的TextInput
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


// 引入自定义组件
import { InputField } from '@/Components';
// 引入仓库
import { RootState } from '@/Store'

// 定义 Form 类型接口
interface Form {
    username: string; // 用户名
    password: string; // 密码
    host: string; // 服务器地址
    verifyCode: string; // 验证码
}
// 定义输入验证规则
const schema = yup.object().shape({
    username: yup.string().required('Common.text_error_required'),
    password: yup.string().required('Common.text_error_required'),
    host: yup.string().required('Common.text_error_required'),
    verifyCode: yup.string().required('Common.text_error_required'),
});

const  FormInputs = {
    resolver: yupResolver(schema),
    defaultValues: {
        username: '',
        password: '',
        host: lastHost,
        verifyCode: '',
    },
}

const LoginScreen = () => {
    // 获取i18n实例，翻译内容
    const { t } = useTranslation();
    // 获取最新服务器地址
    const lastHost = useSelector((rootState: RootState) => rootState.user.host)
    // 登录加载
    const [loginLoading, setLoginLoading] = useState(false);
    // 定义表单
    const { control, handleSubmit, errors, setError, setValue } = useForm(FormInputs)
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Text>Login Version 1.0.0</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri:
                                        Platform.OS === 'ios' ? 'SplashIcon' : 'splash_screen_logo',
                                }}
                                resizeMode="contain"
                                style={styles.bigLogoImage}
                            />
                            <Controller 
                                control={control}
                                render={({field: {onChange, onBlur, value}}) => (
                                    <InputField
                                        showClearButton
                                        label={"Authentication.label_username"}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        value={value}
                                        onSubmitEditing={() => passwordInputRef.current?.focus()}
                                        returnKeyType="next"
                                        autoCapitalize="none"
                                        editable={!loginLoading}
                                        error={t(errors.username?.message || '')}
                                    />
                                )}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
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
