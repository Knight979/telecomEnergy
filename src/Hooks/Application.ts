/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-05-06 11:33:05
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-06 11:54:06
 */
import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import RNBootSplash from 'react-native-bootsplash'
import { RootState } from '@/Store'
import { getUpdatedProfile } from '@/Store/User'
// import MapboxGL from '@react-native-mapbox-gl/maps'
import Config from 'react-native-config'
import { checkDeviceLanguage } from '@/Store/Common'

export const useInitApplication = () => {
  const appState = useRef(AppState.currentState)
  const token = useSelector((rootState: RootState) => rootState.user.token)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkDeviceLanguage())
    // MapboxGL.setAccessToken(Config.MAPBOX_ACCESS_TOKEN)
    RNBootSplash.hide({ fade: true })
    const initAppData = () => {
      if (token) {
        dispatch(getUpdatedProfile())
      }
    }

    initAppData()

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!')
        initAppData()
      }

      appState.current = nextAppState
      console.log('AppState', appState.current)
    })

    return () => {
      subscription.remove()
    }
  }, [dispatch, token])
}
