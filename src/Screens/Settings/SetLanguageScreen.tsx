/*
 * @Description: 设置App语言
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 14:49:27
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-06 16:17:38
 */
import { LangRow, NavBar } from '@/Components'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/Store'
import { changeSystemLanguage } from '@/Store/Common'
import { useTranslation } from 'react-i18next'

const SetLanguageScreen = () => {
  const { lang } = useSelector((rootState: RootState) => rootState.common)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <NavBar title={t('Settings.title_language')} />
      <LangRow
        title={'English'}
        selected={lang === 'en'}
        onPress={() => dispatch(changeSystemLanguage('en'))}
      />
      <LangRow
        title={'简体中文'}
        selected={lang === 'zh_cn'}
        onPress={() => dispatch(changeSystemLanguage('zh_cn'))}
      />
      <LangRow
        title={'繁體中文（香港)'}
        selected={lang === 'zh_hk'}
        onPress={() => dispatch(changeSystemLanguage('zh_hk'))}
      />

      <LangRow
        title={'français'}
        selected={lang === 'fr'}
        onPress={() => dispatch(changeSystemLanguage('fr'))}
      />
      <LangRow
        title={'español'}
        selected={lang === 'es'}
        onPress={() => dispatch(changeSystemLanguage('es'))}
      />
    </View>
  )
}

export default SetLanguageScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
})