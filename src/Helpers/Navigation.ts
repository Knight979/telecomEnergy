/*
 * @Description: 用于在加载状态时禁用导航返回
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-05-14 14:34:37
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-15 09:51:23
 */
import { useEffect, useState, useRef, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

// 定义 useLoadingDisableBack Hook，接受一个初始状态，默认为 false
export const useLoadingDisableBack = (initialState: boolean = false) => {
  const isLoading = useRef(initialState)
  const [loading, setLoading] = useState<boolean>(initialState)
  const navigation = useNavigation();
  // 使用 useEffect Hook 监听导航事件，监听导航栈的 beforeRemove 事件，即页面被移除前触发的事件
  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // 如果 isLoading 当前为真，则阻止页面移除
        if (isLoading.current) {
          e.preventDefault();
          
        } else {
          return
        }
      }),
    [navigation, isLoading],
  )

  const setLoadingMethod = useCallback(
    (value: boolean) => {
      isLoading.current = value
      setLoading(value)
    },
    [setLoading],
  )
  // useEffect 的依赖项，包括 navigation 和 isLoading，当这些依赖项变化时，重新绑定事件
  return [loading, setLoadingMethod] as const
}
