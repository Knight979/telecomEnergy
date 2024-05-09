/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 15:52:19
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-08 19:00:21
 */
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// 引入useSafeAreaInsets 用于获取安全区域
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// 引入图标
import DashboardIcon from '@/Assets/Icons/Navigation/dashboard-2.svg';
import MapIcon from '@/Assets/Icons/Navigation/map.svg';
import SettingsIcon from '@/Assets/Icons/Navigation/settings.svg';
import CautionIcon from '@/Assets/Icons/Navigation/caution.svg';
// 引入Navigation
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// 引入navigation组件
import { MainTabNavigatorParamList } from '@/Navigation/MainTab';
import { useTranslation } from 'react-i18next';
// 引入公共样式
import { Colors, Fonts, Sizes } from '@/Styles';

const MainTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { t } = useTranslation()
  // 返回安全区域的尺寸信息
  const insets = useSafeAreaInsets();
  const buttonOnPress = (key: keyof MainTabNavigatorParamList) => {
    navigation.navigate(key)
  }
  return (
    <View style={[styles.container, {
      height: Platform.OS === "ios"
        ? Sizes.tabBarHeight + insets.bottom : Sizes.tabBarHeight,
      paddingBottom: insets.bottom > 0 ? 20 : 0
    }]}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => buttonOnPress('Overview')}>
        <DashboardIcon
          fill={state.index === 0 ? Colors.theme.blue : '#BDBDBD'}
        />
        <Text
          style={[
            styles.tabButtonText,
            { color: state.index === 0 ? Colors.theme.blue : '#BDBDBD' },
          ]}>
          {t('Navigation.tab_overview')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => buttonOnPress('Alarms')}>
        <View>
          <CautionIcon
            fill={state.index === 1 ? Colors.theme.blue : '#BDBDBD'}
          />
          {/* {true && <View style={styles.indicator} />} */}
        </View>
        <Text
          style={[
            styles.tabButtonText,
            { color: state.index === 1 ? Colors.theme.blue : '#BDBDBD' },
          ]}>
          {t('Navigation.tab_alarms')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => buttonOnPress('GISMap')}>
        <MapIcon fill={state.index === 2 ? Colors.theme.blue : '#BDBDBD'} />
        <Text
          style={[
            styles.tabButtonText,
            { color: state.index === 2 ? Colors.theme.blue : '#BDBDBD' },
          ]}>
          {t('Navigation.tab_GIS_Map')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => buttonOnPress('Settings')}>
        <SettingsIcon
          fill={state.index === 3 ? Colors.theme.blue : '#BDBDBD'}
        />
        <Text
          style={[
            styles.tabButtonText,
            { color: state.index === 3 ? Colors.theme.blue : '#BDBDBD' },
          ]}>
          {t('Navigation.tab_settings')}
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default MainTabBar


const styles = StyleSheet.create({
  container: {
    height: Sizes.tabBarHeight,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonText: {
    ...Fonts.size12,
    ...Fonts.regular,
    color: Colors.text.font3,
    marginTop: 2,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.theme.notUpdating,
  },
})