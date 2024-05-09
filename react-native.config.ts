/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-29 21:49:28
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-08 20:20:34
 */
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/Assets/Fonts/'], // stays the same
}
module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
        android: {},
      },
    },
  },
};
declare module 'react-native-config' {
  export interface NativeConfig {
    HOSTNAME?: string;
  }

  export const Config: NativeConfig
  export default Config
}