import { StyleSheet } from 'react-native'
import Colors from './Colors'

export default StyleSheet.create({
  /* Column Layouts */
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#00000080',
    elevation: 5,
  },
  line: {
    borderBottomColor: Colors.theme.line,
    borderBottomWidth: 1,
  },
})
