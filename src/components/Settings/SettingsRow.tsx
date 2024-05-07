
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '@/Styles'
import ArrowIcon from '@/Assets/Icons/right-arrow.svg'

export interface Props {
  title: string
  containerStyle?: Object
  onPress: () => void
}

const SettingsRow: React.FC<Props> = ({ title, containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <ArrowIcon width={28} height={28} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.theme.line,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: Sizes.paddingHorizontal,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  title: {
    ...Fonts.size14,
    ...Fonts.regular,
    color: Colors.text.font1,
    flex: 1,
  },
})

export default SettingsRow
