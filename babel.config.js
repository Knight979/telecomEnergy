const presets = ['module:metro-react-native-babel-preset']
const plugins =
  process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : []

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': './src',
    },
  },
])

plugins.push('react-native-reanimated/plugin')

module.exports = {
  presets,
  plugins,
}
