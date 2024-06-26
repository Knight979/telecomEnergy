import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const screenHeight = width < height ? height : width
const screenWidth = width < height ? width : height

export default {
  // Window Dimensions
  screen: {
    height: screenHeight,
    width: screenWidth,

    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
  },
  navbarHeight: Platform.OS === 'ios' ? 67 : 67,
  statusBarHeight: Platform.OS === 'ios' ? 16 : 0,
  tabBarHeight: 51,

  padding: 20,
  paddingSml: 10,
  paddingHorizontal: 24,
  borderRadius: 2,
  confirmButtonHeight: 45,
}
