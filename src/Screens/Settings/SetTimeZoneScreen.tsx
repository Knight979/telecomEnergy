/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 14:49:27
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-14 18:52:46
 */
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes } from '@/Styles'
import { ConfirmButton, NavBar } from '@/Components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useLoadingDisableBack } from '@/Helpers/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/Store'
import { useTranslation } from 'react-i18next'
import TickIcon from '@/Assets/Icons/check.svg'




const TIME_ZONE_LIST = [
  '+14:00',
  '+13:00',
  '+12:00',
  '+11',
  '+10:00',
  '+09:30',
  '+09:00',
  '+08:00',
  '+07:00',
  '+06:30',
  '+06:00',
  '+5:45',
  '+05:30',
  '+05:00',
  '+04:30',
  '+04:00',
  '+03:30',
  '+03:00',
  '+02:00',
  '+01:00',
  '+00:00',
  '-01:00',
  '-02:00',
  '-03:00',
  '-03:30',
  '-04:00',
  '-04:30',
  '-05:00',
  '-06:00',
  '-07:00',
  '-08:00',
  '-09:00',
  '-10:00',
  '-11:00',
  '-12:00',
]
const SetTimeZoneScreen = () => {
  const insets = useSafeAreaInsets()
  const [loading, setLoading] = useLoadingDisableBack(false)
  const { user } = useSelector((rootState: RootState) => rootState.user)
  const [selectTimezone, setSelectTimezone] = useState(user?.timeZone ?? '')
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onSubmit = async () => {
    // try {
    //   setLoading(true)
    //   await updateUserTimeZone(user!.id!, {
    //     timeZone: selectTimezone,
    //   })
    //   // dispatch(refreshAssetList())
    //   // dispatch(refreshSite())
    //   // dispatch(refreshMediaList())
    //   // dispatch(refreshAlarmList())
    //   dispatch(getUpdatedProfile())
    //   setLoading(false)
    //   showSuccessToast(t('Settings.toast_success_change_timezone'))
    //   navigation.goBack()
    // } catch (error) {
    //   showServerErrorToast(error)
    //   setLoading(false)
    // }
  }

  return (
    <View style={styles.container}>
      <NavBar title={t('Settings.title_time_zone')} />
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={{ paddingBottom: insets.bottom + 55 + 10 }}>
        {TIME_ZONE_LIST.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.item}
            onPress={() => setSelectTimezone(item)}>
            <Text
              style={
                item === selectTimezone
                  ? styles.selectedTimeZone
                  : styles.timeZone
              }>
              {t(`Settings.timezone.${item.replace(':', '')}`)}
            </Text>
            {item === selectTimezone ? <TickIcon /> : <View />}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ConfirmButton
        title={t('Common.confirm')}
        onPress={onSubmit}
        loading={loading}
        disabled={!selectTimezone}
        containerStyle={[styles.confirmButton, { bottom: insets.bottom + 10 }]}
      />
    </View>
  )
}

export default SetTimeZoneScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapper: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Sizes.paddingHorizontal,
    borderColor: Colors.theme.line,
    paddingHorizontal: 10,
    height: 55,
    borderBottomWidth: 1,
  },
  timeZone: {
    ...Fonts.size16,
    ...Fonts.regular,
    color: Colors.text.font2,
    flex: 1,
  },
  selectedTimeZone: {
    ...Fonts.size16,
    ...Fonts.semiBold,
    color: Colors.theme.blueGreen,
    flex: 1,
  },
  confirmButton: {
    position: 'absolute',
    minHeight: 45,
    borderRadius: 10,
    marginHorizontal: Sizes.paddingHorizontal,
    width: Sizes.screen.width - Sizes.paddingHorizontal * 2,
  },
})