/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 19:33:45
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-05 21:30:38
 */
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Layout, Fonts, Colors, Sizes } from '@/Styles'
//处理键盘外观并自动滚动到聚焦的TextInput
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Config from 'react-native-config'
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import SInfo from 'react-native-sensitive-info'
import * as _ from 'lodash'
import Toast from 'react-native-toast-message'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// 引入接口
import {
    userLogin,
    getVerifyCode,
    isShowVerifyCode,
} from '@/Services/UserServices'
// 引入自定义组件
import { ConfirmButton, InputField, VerifyCodeInputField } from '@/Components';
// 引入仓库
import { RootState } from '@/Store'
import axios from 'axios';
import { VerifyCode } from '@/Models';
import AxiosDefaultInstance from '@/Services'
import { loginUserSuccess } from '@/Store/User'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack'
import { ApplicationNavigatorParamList } from '@/Navigation/Application';
// import DeviceInfo from 'react-native-device-info'


// 定义 Form 类型接口
interface Form {
    username: string; // 用户名
    password: string; // 密码
    host: string; // 服务器地址
    verifyCode: string; // 验证码
}
type userForm = {
    errors:string,
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
const LoginScreen = ({
    navigation,
}: StackScreenProps<ApplicationNavigatorParamList, 'Login' >) => {
    // 获取i18n实例，翻译内容
    const { t } = useTranslation();
    // 获取最新服务器地址
    const lastHost = useSelector((rootState: RootState) => rootState.user.host)
    // const lastHost = 'http://owleye.x3322.net:29081'
    const dispatch = useDispatch()
    const [loginLoading, setLoginLoading] = useState(false)
    const [hostLoading, setHostLoading] = useState(false)
    const axiosInstance = useRef(axios.create())
    const [vCode, setVCode] = useState<VerifyCode | undefined>(undefined)
    const { control, handleSubmit, setError, setValue } = useForm<userForm>({
        // resolver: schema.validate(),
        defaultValues: {
            username: '',
            password: '',
            host: lastHost,
            verifyCode: '',
        },
    });
    // 获取服务器信息
    const getServerInfo = useCallback(
        async (hostUrl: string) => {
            var re = new RegExp('^(http|https)://', 'i')
            var match = re.test(hostUrl)
            console.log('获取服务器信息:',match)
            if (!match) {
                setHostLoading(false)
                setError('host', {
                    type: 'manual',
                    message: t('Authentication.text_error_url_format'),
                })
                return
            }
            try {
                setVCode(undefined)
                axiosInstance.current.defaults.baseURL = `${hostUrl}/api`
                console.log('初始:',`${hostUrl}/api`)
                const isShowResult = await isShowVerifyCode(axiosInstance.current)
                if (isShowResult.data === 1) {
                    // hide verification code input
                } else {
                    refreshVerifyCode()
                }
                setHostLoading(false)
                setError('host', {
                    type: 'manual',
                    message: '',
                })
                setValue('verifyCode', '')
            } catch (error) {
                console.log(error)
                setError('host', {
                    type: 'manual',
                    message: t('Authentication.text_error_server_not_found'),
                })
                setValue('verifyCode', '')
                setHostLoading(false)
                setVCode(undefined)
            }
        },
        [setError, setValue, t],
    );
    useEffect(() => {
        if (lastHost) {
            getServerInfo(lastHost)
        }
        const getLoginInformation = async () => {
            const userName = await SInfo.getItem('username', {})
            const password = await SInfo.getItem('password', {})
            setValue('username', userName)
            setValue('password', password)
        }
        getLoginInformation()
    }, [getServerInfo, lastHost, setValue])

    // 防抖函数
    const debouncedGetServerInfo = useMemo(
        () => _.debounce(getServerInfo, 500, { 'maxWait': 1000 }),
        [getServerInfo],
    )

    // 刷新验证码
    const refreshVerifyCode = async () => {
        const result = await getVerifyCode(axiosInstance.current)
        if (result.status === 0) {
            setVCode(result.data)
        }
    }
    const hostOnChange = (host: string) => {
        console.log('host:',host);
        // 开启host加载
        setHostLoading(true);
        debouncedGetServerInfo(host)
    }
    // 提交表单
    const onSubmit = async (data: Form) => {
        setLoginLoading(true)
        console.log('data:',data)
        const { username, password, verifyCode, host } = data
        const params = {
            loginName: username,
            password: password,
            platform: 1,
            verifyCode: verifyCode || '',
            verifyCodeToken: vCode ? vCode.verifyCodeToken : '',
            hcaptchaToken: null,
        }
        try {
            AxiosDefaultInstance.defaults.baseURL = `${host}/api`
            const loginRes = await userLogin(params)
            console.log('loginRes', loginRes)
            setLoginLoading(false)
            if (loginRes.data.status === 0) {
                dispatch(
                    loginUserSuccess({
                        host: data.host,
                        token: loginRes.headers.authorization,
                        user: loginRes.data.data!,
                    }),
                )
                await SInfo.setItem('username', username, {})
                await SInfo.setItem('password', password, {})
            } else if (loginRes.data.message === 'Verify code error') {
                refreshVerifyCode()
                setError('verifyCode', {
                    message: t('Authentication.text_error_wrong_verification_code'),
                })
                setValue('verifyCode', '')
                // set errors
            } else {
                refreshVerifyCode()
                setValue('verifyCode', '')
            }
        } catch (err) {
            console.log('error here', err)
            refreshVerifyCode()
            setValue('verifyCode', '')
            setLoginLoading(false)
        }
    }

    const forgetOnPress = () => {
        Toast.show({
            type: 'info',
            position: 'top',
            text1: t('Authentication.text_contact_admin'),
            topOffset: 50,
        })
    }
    const passwordInputRef = useRef<TextInput>(null)
    const hostInputRef = useRef<TextInput>(null)
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        {/* <Text>登录页23333223{lastHost}</Text> */}
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
                        <Controller
                            control={control}
                            render={({ field: {onChange, onBlur, value} }) => (
                                <InputField
                                    showClearButton={true}
                                    label={t('Authentication.label_username')}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    editable={!loginLoading}
                                    // error={t(errors.username?.message || '')}
                                />
                            )}
                            name="username"
                            defaultValue=""
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    showClearButton
                                    secureTextEntry
                                    label={t('Authentication.label_password')}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    inputRef={passwordInputRef}
                                    onSubmitEditing={() => hostInputRef.current?.focus()}
                                    returnKeyType="next"
                                    editable={!loginLoading}
                                    // error={t(errors.password?.message || '')}
                                />
                            )}
                            name="password"
                            defaultValue=""
                        />

                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    showClearButton
                                    label={t('Authentication.label_server_location')}
                                    onBlur={onBlur}
                                    onChange={value => {
                                        onChange(value)
                                        hostOnChange(value)
                                    }}
                                    value={value}
                                    inputRef={hostInputRef}
                                    returnKeyType="done"
                                    loading={hostLoading}
                                    autoCapitalize="none"
                                    editable={!loginLoading}
                                    // error={t(errors.host?.message || '')}
                                />
                            )}
                            name="host"
                            defaultValue="http://owleye.x3322.net:29081"
                        />

                        {vCode && vCode.verifyCodeImgStr ? (
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <VerifyCodeInputField
                                        label={t('Authentication.label_verification_code')}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        value={value}
                                        returnKeyType="done"
                                        autoCapitalize="none"
                                        imageSource={{ uri: vCode.verifyCodeImgStr }}
                                        editable={!loginLoading}
                                        codeOnPress={refreshVerifyCode}
                                        error={t(errors.verifyCode?.message || '')}
                                    />
                                )}
                                name="verifyCode"
                                defaultValue=""
                            />
                        ) : null}

                        <TouchableOpacity style={styles.forgetButton} onPress={forgetOnPress}>
                            <Text style={styles.forgetText}>
                                {t('Authentication.text_forgot_password')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ConfirmButton
                            title={t('Authentication.button_login')}
                            onPress={handleSubmit(onSubmit)}
                            disabled={hostLoading}
                            loading={loginLoading}
                            containerStyle={styles.loginButton}
                        />
                        <TouchableOpacity
                            style={styles.langBtn}
                            onPress={() => navigation.navigate('SetLanguage')}>
                            <MaterialIcons name="language" size={20} />
                            <Text style={styles.langText}>
                                {t('Authentication.text_language')}
                            </Text>
                        </TouchableOpacity>
                        {/* <Text style={styles.versionText}>
                            {t('Authentication.text_version', {
                                version: DeviceInfo.getVersion(),
                            })}
                        </Text> */}
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
