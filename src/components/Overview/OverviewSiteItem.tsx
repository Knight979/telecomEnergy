import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Common, Fonts } from '@/Theme'

export interface Props {
  containerStyle?: object
  status: string
  amount?: string
}

const OverviewSiteItem: React.FC<Props> = ({
  status,
  amount,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{status}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...Common.shadow,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    padding: 15,
    width: 120,
    marginHorizontal: 2,
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
    paddingTop: 10,
  },
})

export default OverviewSiteItem
