import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Common, Fonts } from '@/Theme'
import { AlarmLevel } from '@/Models/Alarms'
import { getAlertTypeInfo } from '@/Helpers'
import { useTranslation } from 'react-i18next'

export interface Props {
  containerStyle?: object
  amount: Object
  type: AlarmLevel
}

const OverviewAlarmItem: React.FC<Props> = ({
  amount,
  containerStyle,
  type,
}) => {
  const { t } = useTranslation()
  return (
    <View style={styles.shadow}>
      <View style={[styles.container, containerStyle]}>
        <View
          style={[
            styles.tag,
            { backgroundColor: getAlertTypeInfo(type).color },
          ]}
        />
        <View style={styles.textRow}>
          <Text style={styles.title}>{t(getAlertTypeInfo(type).text)}</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    ...Common.shadow,
    minWidth: 100,
    marginRight: 15,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  tag: {
    width: 8,
  },
  textRow: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  title: {
    ...Fonts.size14,
    ...Fonts.regular,
    color: Colors.text.font1,
  },
  amount: {
    ...Fonts.size22,
    ...Fonts.semiBold,
    color: Colors.text.font1,
    textAlign: 'center',
    paddingTop: 5,
  },
})

export default OverviewAlarmItem
