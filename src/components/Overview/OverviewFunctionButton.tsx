import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '@/Theme'

export interface Props {
  title: string
  containerStyle?: Object
  color: string
  icon: React.ReactNode
  onPress: () => void
}

const OverviewFunctionButton: React.FC<Props> = ({
  title,
  containerStyle,
  color,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View style={[styles.iconBox, { backgroundColor: color }]}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 85,
    alignItems: 'center',
    marginRight: 5,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    ...Fonts.regular,
    ...Fonts.size12,
    color: Colors.text.font1,
    textAlign: 'center',
  },
})

export default OverviewFunctionButton
