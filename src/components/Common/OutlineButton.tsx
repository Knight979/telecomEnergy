/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-05-06 13:55:31
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-06 14:09:44
 */
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
  fontSize: number
  disabled?: boolean
  loading?: boolean
  containerStyle?: Object
  buttonTextStyle?: Object
  icon?: React.ReactNode
  color?: ColorValue
}

const ConfirmButton: React.FC<Props> = ({
  title,
  onPress,
  fontSize = 14,
  disabled = false,
  loading = false,
  containerStyle,
  buttonTextStyle,
  icon,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        {
          borderColor: color ? color : Colors.theme.blue,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <Progress.Circle
          size={fontSize + 4}
          indeterminate={true}
          borderColor={color ?? Colors.theme.blue}
          borderWidth={2}
        />
      ) : (
        <View style={styles.btnTextContainer}>
          {icon}
          <Text
            style={[
              styles.buttonText,
              buttonTextStyle,
              {
                color: color ? color : Colors.theme.blue,
                fontSize: fontSize,
                paddingLeft: icon ? 10 : 0,
              },
            ]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 30,
  },
  buttonText: {
    ...Fonts.regular,
  },
  btnTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ConfirmButton
