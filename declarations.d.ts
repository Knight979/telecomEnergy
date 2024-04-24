
/** 
* 声明模块，当你导入以 .svg 结尾的文件时，将它们视为一个模块，并且这个模块导出了一个 React.FC<SvgProps> 类型的组件。
* 当你在代码中导入 SVG 文件时，就可以像导入其他模块一样使用它们，并且 TypeScript 将能够识别 SVG 组件的类型信息，从而提供更好的类型检查和自动补全功能
*/ 
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
