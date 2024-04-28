/*
 * @Description: 导航入口
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 17:25:55
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-28 10:39:15
 */
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ApplicationNavigator } from '@/Navigation';
import { store, persistor } from '@/Store';
import Toast, {
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast,
} from 'react-native-toast-message';

import '@/Translations';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <SuccessToast {...props} text1NumberOfLines={3} />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast {...props} text1NumberOfLines={3} />
  ),
  info: (props: BaseToastProps) => (
    <InfoToast {...props} text1NumberOfLines={3} />
  ),
}
function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
      <Toast config={toastConfig} />
    </Provider>
  );

}

export default App;
