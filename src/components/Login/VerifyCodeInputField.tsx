import React from 'react'
import {
  Image,
  TextInput,
  View,
  StyleSheet,
  Text,
  TextInputProps,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native'
import { Colors, Fonts } from '@/Styles'
import InputFieldError from '@/Components/Form/InputFieldError'

export interface Props extends TextInputProps {
  label: string
  value: string
  onChange: (...event: any[]) => void
  onBlur: () => void
  inputRef?: React.RefObject<TextInput>
  imageSource: ImageSourcePropType
  codeOnPress: () => void
  error?: string | undefined
  hideError?: boolean
}

const VerifyCodeInputField: React.FC<Props> = ({
  label,
  value,
  onChange,
  onBlur,
  inputRef,
  imageSource,
  codeOnPress,
  error,
  hideError = false,
  ...props
}) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          {...props}
          style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        <TouchableOpacity style={styles.codeImageButton} onPress={codeOnPress}>
          <Image style={styles.codeImage} source={imageSource} />
        </TouchableOpacity>
      </View>
      {!hideError && <InputFieldError error={error} />}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingRight: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.theme.line,
  },
  inputLabel: {
    ...Fonts.size14,
    ...Fonts.regular,
    color: Colors.text.font1,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 43,
    ...Fonts.size14,
    ...Fonts.regular,
    paddingVertical: 12,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
    color: Colors.text.font1,
    paddingRight: 130,
  },
  codeImageButton: {
    position: 'absolute',
    right: 15,
  },
  codeImage: {
    width: 120,
    height: 30,
  },
})

export default VerifyCodeInputField
