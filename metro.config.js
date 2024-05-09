/*
 * @Description: file content
 * @Author: Knight
 * @Date: 2024-04-22 14:23:57
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-08 18:49:04
 */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// const { getDefaultConfig } = require('metro-config')

// module.exports = (async () => {
//     const {
//         resolver: { sourceExts, assetExts },
//     } = await getDefaultConfig()
//     return {
//         transformer: {
//             babelTransformerPath: require.resolve('react-native-svg-transformer'),
//             getTransformOptions: async () => ({
//                 transform: {
//                     experimentalImportSupport: false,
//                     inlineRequires: true,
//                 },
//             }),
//         },
//         resolver: {
//             assetExts: assetExts.filter(ext => ext !== 'svg'),
//             sourceExts: [...sourceExts, 'svg'],
//         },
//     }
// })()
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
    }
};

module.exports = mergeConfig(defaultConfig, config);
