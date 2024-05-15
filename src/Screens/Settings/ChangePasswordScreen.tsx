/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 14:49:27
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-14 16:09:02
 */
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { t } from 'i18next'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackScreenProps } from '@react-navigation/stack'
import { MainStackNavigatorParamList } from '@/Navigation/MainStack'
import { useTranslation } from 'react-i18next'
// 引入安全区域钩子
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ConfirmButton, InputField, NavBar } from '@/Components'
import { Sizes } from '@/Styles'
import { useLoadingDisableBack } from '@/Helpers/Navigation'
import { showErrorToast, showServerErrorToast } from '@/Helpers'

// 定义表单的字段接口
interface Form {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}
// 使用yup建立表单验证规则
const schema = yup.object().shape({
  currentPassword: yup.string().required('Error.required'),
  newPassword: yup
    .string()
    .min(9, 'Error.minimum_length')
    .max(20, 'Error.maximum_length')
    .required('Error.required'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Error.passwords_must_match')
    .required('Error.required'),
})

/**
 * 修改密码页面
 * @param navigation 导航,类型检查
 */
const ChangePasswordScreen = ({ navigation }: StackScreenProps<MainStackNavigatorParamList,'ChangePassword'>) => {
  //获取最近的安全区域
  const insets = useSafeAreaInsets();
  // 获取语言翻译函数
  const { t } = useTranslation();
  // 使用自定义的loading状态管理钩子
  const [loading, setLoading] = useLoadingDisableBack();
  // 设置表单控制器
  const { control, handleSubmit, formState: { errors }, formState} = useForm<Form>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  // 提交表单按钮状态
  const { isDirty, isValid } = formState;
  const onSubmit = (data:Form)=>{
    const { currentPassword, newPassword } = data;
    try {
      setLoading(true);
    }catch(error:any){
      if (error.message === 'Old password error') {
        showErrorToast(t('Error.wrongPassword'))
      } else {
        showServerErrorToast(error)
      }
      setLoading(false)

    }
  }
  // 当前焦点输入框引用
  const passwordInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);
  // 组件视图布局
  return (
    <View style={styles.container}>
      <NavBar title={t('Settings.title_change_password')} />
      <KeyboardAwareScrollView
        bounces={false}
        style={styles.scrollView}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={[
          styles.contentContainerStyle,
          { paddingBottom: insets.bottom ? insets.bottom : 20 },
        ]}>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            render={({field:{ onChange, onBlur, value }}) => (
              <InputField
                secureTextEntry
                label={t('Settings.label_current_password')}
                placeholder={t('Settings.placeholder_current_password')}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                inputRef={passwordInputRef}
                onSubmitEditing={() => newPasswordInputRef.current?.focus()}
                returnKeyType="next"
                autoCapitalize="none"
                editable={!loading}
                showClearButton
                error={t(errors.currentPassword?.message)}
              />
            )}
            name="currentPassword"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <InputField
                secureTextEntry
                label={t('Settings.label_new_password')}
                placeholder={t('Settings.placeholder_new_password')}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                inputRef={newPasswordInputRef}
                onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
                returnKeyType="next"
                autoCapitalize="none"
                editable={!loading}
                showClearButton
                error={t(errors.newPassword?.message)}
              />
            )}
            name="newPassword"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field:{ onChange, onBlur, value }}) => (
              <InputField
                secureTextEntry
                label={t('Settings.label_confirm_password')}
                placeholder={t('Settings.placeholder_confirm_password')}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                inputRef={confirmPasswordInputRef}
                returnKeyType="done"
                autoCapitalize="none"
                editable={!loading}
                showClearButton
                error={t(errors.confirmNewPassword?.message)}
              />
            )}
            name="confirmNewPassword"
            defaultValue=""
          />
        </View>

        <ConfirmButton
          title={t('Common.confirm')}
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          containerStyle={styles.button}
          disabled={!isValid || !isDirty}
        />
      </KeyboardAwareScrollView>
    </View>
  )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    backgroundColor: 'white',
    paddingHorizontal: Sizes.paddingHorizontal,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    width: '100%',
  },
  button: {
    height: 45,
    borderRadius: 10,
  },
})