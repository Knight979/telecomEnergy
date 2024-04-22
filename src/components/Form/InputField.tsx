/*
 * @Description: file content
 * @Author: Knight
 * @Date: 2024-04-22 09:12:15
 * @LastEditors: your name
 * @LastEditTime: 2024-04-22 17:09:25
 */
import React, { useLayoutEffect } from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    TextInputProps,
    StyleProp,
    TextStyle,
    ViewStyle,
    Platform,
    Text,
    TouchableOpacity
} from 'react-native'
// 引入公共样式
import { Colors, Fonts } from '../../Styles';
// 引入图标
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// 引入进度条
import * as Progress from 'react-native-progress'

// 定义组件的props类型
export interface Props extends TextInputProps {
    value: string
    onChange?: (...event: any[]) => void
    onBlur?: () => void
    inputRef?: React.RefObject<TextInput>
    inputStyle?: StyleProp<TextStyle>
    containerStyle?: ViewStyle
    secureTextEntry?: boolean
    button?: Object
    error?: string | undefined
    hideError?: boolean
    remark?: string
    label?: string
    showClearButton?: boolean
    loading?: boolean
    editable?: boolean
    parentContainerStyle?: ViewStyle
}
const InputField: React.FC<Props> = ({
    value,
    onChange = () => null,
    onBlur = () => null,
    inputRef,
    inputStyle,
    containerStyle,
    secureTextEntry = false,
    button,
    error,
    hideError = false,
    remark,
    label,
    loading,
    showClearButton,
    editable,
    parentContainerStyle = {},
    ...props
}) => {
    /**
     * @description: 修复安卓下secureTextEntry 密码输入框字体样式问题
     * @param {React.MutableRefObject<TextInput>} inputRef
     * @param {StyleProp<TextStyle>} inputStyle
     * @param {boolean} secureTextEntry
     */
    useLayoutEffect(() => {
        Platform.OS === 'android' &&
            secureTextEntry &&
            inputRef &&
            inputRef.current?.setNativeProps({
                style: [Fonts.regular, inputStyle],
            })
    }, [inputRef, inputStyle, secureTextEntry])

    return (
        // 父容器
        <View style={parentContainerStyle}>
            {/* 如果有标签则渲染标签*/}
            {label ? ( 
                <Text style={[styles.labelText, error ? styles.red : {}]}>{label}</Text>
            ) : null}
            {/* 输入框容器 */}
            <View
                style={[
                    styles.container,
                    error ? styles.errorBorder : null,
                    containerStyle,
                ]}>
                    
                <TextInput
                    ref={inputRef}
                    style={[
                        styles.input,
                        {
                            paddingRight: showClearButton ? 30 : 0,
                        },
                        inputStyle,
                    ]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    selectionColor={Colors.text.font1}
                    placeholderTextColor={Colors.text.font3}
                    editable={editable}
                    secureTextEntry={secureTextEntry}
                    {...props}
                />
                {/* {button} */}
                {loading ? (
                    <Progress.Circle
                        size={20}
                        indeterminate={true}
                        borderColor={Colors.text.font1}
                        borderWidth={2}
                        style={styles.loadingStyle}
                        pointerEvents="none"
                    />
                ) : null}
                {/* 如果显示清除按钮“且”有值，则显示清除按钮 */}
                {showClearButton && value && !loading ? (
                    <TouchableOpacity
                        style={styles.loadingStyle}
                        onPress={() => (onChange ? onChange('') : null)}>
                        <MaterialCommunityIcons
                            name="close-circle"
                            size={20}
                            color={Colors.text.font2}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
            {remark && <Text style={styles.remarkText}>{remark}</Text>}
            {/* {!hideError && <InputFieldError error={error} />} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingRight: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.theme.line,
    },
    input: {
        flex: 1,
        height: 43,
        ...Fonts.size14,
        ...Fonts.regular,
        paddingVertical: 12,
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 12,
        color: Colors.text.font1,
    },
    errorBorder: {
        borderColor: Colors.app.error,
        borderWidth: 1,
    },
    remarkText: {
        ...Fonts.size12,
        ...Fonts.bold,
        color: Colors.theme.blue,
        marginTop: 8,
    },
    labelText: {
        ...Fonts.size14,
        ...Fonts.regular,
        color: Colors.text.font1,
        marginBottom: 5,
    },
    loadingStyle: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        padding: 15,
    },
    red: {
        color: 'red',
    },
})


export default InputField;
