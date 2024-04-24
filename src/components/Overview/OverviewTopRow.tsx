import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Common, Fonts, Sizes } from '@/Theme'
import { useTranslation } from 'react-i18next'

export interface Props {
  amount: number
}

const OverviewTopRow: React.FC<Props> = ({ amount }) => {
  const { t } = useTranslation()
  return (
    <View style={styles.shadow}>
      <View style={styles.totalSiteRow}>
        <View style={styles.tag} />
        <View style={styles.textRow}>
          <Text style={styles.title}>{t('Overview.text_total_site')}</Text>
          <Text style={styles.number}>{amount}</Text>
        </View>
        <Image
          source={require('@/Assets/Images/overview-city.png')}
          style={styles.cityImage}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    ...Common.shadow,
    borderRadius: 10,
    marginHorizontal: Sizes.paddingHorizontal,
  },
  totalSiteRow: {
    flexDirection: 'row',
    minHeight: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: Colors.theme.blue,
    width: 8,
  },
  title: {
    ...Fonts.regular,
    ...Fonts.size14,
    color: Colors.text.font1,
    paddingHorizontal: 10,
  },
  number: {
    ...Fonts.semiBold,
    ...Fonts.size22,
    color: Colors.text.font1,
    paddingHorizontal: 10,
    flex: 1,
  },
  cityImage: {
    height: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
})

export default OverviewTopRow
