import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '@/Styles'
import TickIcon from '@/Assets/Icons/check.svg'

export interface Props {
  title: string
  containerStyle?: Object
  onPress: () => void
  selected: boolean
}

const LangRow: React.FC<Props> = ({
  title,
  containerStyle,
  onPress,
  selected,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.row, containerStyle]}>
      <Text style={selected ? styles.selectedLanguage : styles.language}>
        {title}
      </Text>
      {selected && <TickIcon />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Sizes.paddingHorizontal,
    borderColor: Colors.theme.line,
    paddingHorizontal: 10,
    height: 55,
  },
  language: {
    ...Fonts.size16,
    ...Fonts.regular,
    color: Colors.text.font2,
    flex: 1,
  },
  selectedLanguage: {
    ...Fonts.size16,
    ...Fonts.semiBold,
    color: Colors.theme.blueGreen,
    flex: 1,
  },
})

export default LangRow
