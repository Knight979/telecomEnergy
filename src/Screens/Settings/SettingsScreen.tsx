/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-28 21:25:36
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-14 17:35:32
 */
import React, { useState } from 'react'
import { ConfirmButton, ConfirmModal, NavBar, SettingsRow } from '@/Components'
import { MainTabNavigatorParamList } from '@/Navigation/MainTab'

import { logoutUser } from '@/Store/User'
import { Colors, Fonts, Sizes } from '@/Styles'
import { StackScreenProps } from '@react-navigation/stack'
import { View, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DeviceInfo from 'react-native-device-info'
import { RootState } from '@/Store'
import { useTranslation } from 'react-i18next'

import AccountIcon from '@/Assets/Icons/account.svg'

const SettingsScreen = ({
  navigation,
}: StackScreenProps<MainTabNavigatorParamList, 'Settings'>) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user } = useSelector((rootState: RootState) => rootState.user);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);

  return (
    <View style={styles.container}>
      <NavBar title={t('Settings.title_settings')} hideBack={true} />
      <View style={styles.row}>
        <AccountIcon fill={Colors.theme.blue} />
        <Text style={styles.userName}>{user?.userName}</Text>
      </View>
      <SettingsRow
        title={t('Settings.title_language')}
        onPress={() => navigation.navigate('SetLanguage')}
      />
      <SettingsRow
        title={t('Settings.title_time_zone')}
        onPress={() => {
          navigation.navigate('SetTimeZone')
        }}
      />
      <SettingsRow
        title={t('Settings.title_change_password')}
        onPress={() => {
          navigation.navigate('ChangePassword')
        }}
      /> 
      <ConfirmButton
        title={t('Settings.button_logout')}
        containerStyle={styles.button}
        onPress={() => setIsShowConfirmModal(true)}
      />
      <Text style={styles.versionText}>
        {t('Settings.text_version')}: {DeviceInfo.getVersion()}
      </Text>
      <ConfirmModal
        title={t('Settings.button_logout')}
        description={t('Settings.text_confirm_logout')}
        isVisible={isShowConfirmModal}
        closeModal={() => setIsShowConfirmModal(false)}
        onConfirm={ () => {
           dispatch(logoutUser())
        }}
      />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginHorizontal: Sizes.paddingHorizontal,
    minHeight: 45,
    marginTop: 10,
    borderRadius: 10,
  },
  versionText: {
    ...Fonts.semiBold,
    color: Colors.text.font2,
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 30,
  },
  userName: {
    ...Fonts.regular,
    ...Fonts.size16,
    color: Colors.text.font1,
    paddingLeft: 8,
    paddingTop: 3,
  },
  row: {
    paddingHorizontal: Sizes.paddingHorizontal,
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
  },
})