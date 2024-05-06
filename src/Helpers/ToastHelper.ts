import i18n from '@/Translations'
import Toast from 'react-native-toast-message'

export const showSuccessToast = (text?: string) => {
  Toast.show({
    type: 'success',
    position: 'top',
    text1: text ?? i18n.t('Common.success'),
    topOffset: 50,
  })
}

export const showErrorToast = (text?: string) => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: text ?? i18n.t('Error.internetError'),
    topOffset: 50,
  })
}

export const showServerErrorToast = (error?: any) => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: error?.message ?? i18n.t('Error.internetError'),
    topOffset: 50,
  })
}

export const showInfoToast = (text?: string) => {
  var text1 = text ?? ''
  Toast.show({
    type: 'info',
    position: 'top',
    text1: text1,
    topOffset: 50,
  })
}
