import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ColorValue,
} from 'react-native'
import { Fonts, Colors } from '@/Styles'
import * as Progress from 'react-native-progress'

export interface Props {
  title: string
  onPress: (data: any) => void
  disabled?: boolean
  loading?: boolean
  containerStyle?: Object
  buttonTextStyle?: Object
  icon?: React.ReactNode
  color?: ColorValue
  shadow?: boolean
}

const ConfirmButton: React.FC<Props> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  containerStyle,
  buttonTextStyle,
  icon,
  color,
  shadow,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: color ? color : Colors.theme.blue,
        },
        shadow && styles.shadow,
        containerStyle,
      ]}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <Progress.Circle
          size={20}
          indeterminate={true}
          borderColor="white"
          borderWidth={2}
        />
      ) : (
        <View style={styles.btnTextContainer}>
          {icon}
          <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
        </View>
      )}
      {disabled && <View style={[styles.disabledOverlay]} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.theme.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    minHeight: 30,
  },
  buttonText: {
    ...Fonts.regular,
    fontSize: 14,
    color: 'white',
  },
  btnTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#D6D6D6',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  disabledOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF80',
  },
})

export default ConfirmButton
