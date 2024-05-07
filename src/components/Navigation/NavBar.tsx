/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { Colors, Fonts, Sizes } from '@/Styles'
import { useNavigation } from '@react-navigation/native'
import LeftIcon from '@/Assets/Icons/Navigation/left.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const NAV_BAR_BUTTON_WIDTH = 40

export interface Props {
  title: string
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
  hideBack?: boolean
  rightIcon?: React.ReactNode
  rightIconOnPress?: () => void
  utilIcon?: React.ReactNode
  utilIconOnPress?: () => void
}

const NavBar: React.FC<Props> = ({
  title,
  containerStyle,
  titleStyle,
  hideBack = false,
  rightIcon,
  rightIconOnPress,
  utilIcon,
  utilIconOnPress,
}) => {
  const { goBack } = useNavigation()
  const insets = useSafeAreaInsets()
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          height: insets.top + Sizes.navbarHeight,
        },
        containerStyle,
      ]}>
      {!hideBack ? (
        <TouchableOpacity style={styles.navButton} onPress={goBack}>
          <LeftIcon />
        </TouchableOpacity>
      ) : (
        <View style={styles.navButton} />
      )}
      <Text
        style={[
          styles.title,
          {
            marginLeft: utilIcon ? NAV_BAR_BUTTON_WIDTH : 0,
          },
          titleStyle,
        ]}>
        {title}
      </Text>
      {utilIcon ? (
        <TouchableOpacity style={styles.utilButton} onPress={utilIconOnPress}>
          {utilIcon}
        </TouchableOpacity>
      ) : null}
      {rightIcon ? (
        <TouchableOpacity style={styles.navButton} onPress={rightIconOnPress}>
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.navButton} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.navbarHeight,
    width: Sizes.screen.width,
    backgroundColor: Colors.theme.white,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    ...Fonts.size16,
    ...Fonts.semiBold,
    color: Colors.text.font1,
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 2,
  },
  navButton: {
    width: NAV_BAR_BUTTON_WIDTH,
    height: Sizes.navbarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  utilButton: {
    width: NAV_BAR_BUTTON_WIDTH,
    height: Sizes.navbarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default NavBar
