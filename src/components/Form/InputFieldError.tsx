import React from 'react'
import { View, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native'
import { Colors, Fonts } from '../../Styles'

export interface Props {
    error?: string
    errorStyle?: TextStyle
    containerStyle?: ViewStyle
}

const InputFieldError: React.FC<Props> = ({
    error,
    errorStyle,
    containerStyle,
}) => {
    if (!error) {
        return <View style={styles.emptyHeight} />
    }
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.inputError, errorStyle]}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 3,
        minHeight: 16,
        marginBottom: 6,
    },
    emptyHeight: {
        height: 16,
    },
    inputError: {
        ...Fonts.regular,
        ...Fonts.size12,
        color: Colors.app.error,
    },
})

export default InputFieldError
