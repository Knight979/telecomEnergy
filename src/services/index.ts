/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-26 09:13:00
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-28 10:57:23
 */
import axios, { AxiosResponse } from 'axios'
import { store } from '@/Store'
import Config from 'react-native-config'
import Toast from 'react-native-toast-message'
import { DefaultResponse } from '@/Models'
import { logoutUser } from '@/Store/User'
import { t } from 'i18next'
import { languageCode } from '@/Translations'

const api = axios.create({
    baseURL: '',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

export const handleError = (message: string, data: any, status: number) => {
    return Promise.reject({ message, data, status })
}

api.interceptors.request.use(function (config) {
    const { token, host } = store.getState().user
    const { lang } = store.getState().common
    if (!config.baseURL) {
        config.baseURL = host ? `${host}${Config.DEFAULT_API_PATH}` : ''
    }
    config.headers.authorization = token ?? ''
    if (config.params) {
        config.params.languageType = languageCode[lang]
    } else {
        config.params = { languageType: languageCode[lang] }
    }

    return config
})

api.interceptors.response.use(
    (response: AxiosResponse<DefaultResponse<any>>) => {
        if (response.data) {
            if (
                response.data.status &&
                (response.data.status === 9996 ||
                    response.data.status === 9995 ||
                    response.data.status === 9987 ||
                    response.data.status === 9986)
            ) {
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: t('Error.login_expired'),
                    topOffset: 50,
                })
                store.dispatch(logoutUser())
                return Promise.reject(new Error(t('Error.login_expired')))
            }
            if (response.data.status && response.data.status !== 0) {
                // this.errorMessage(event.body.message);
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: response.data.message,
                    topOffset: 50,
                })
                return Promise.reject(new Error(response.data.message))
            }
            return response
        }
        return Promise.reject(new Error(t('Error.unknown_server_error')))
    },
    error => {
        if (error && error.response && error.response.status) {
            // handle error
            if (error.response.status === 504) {
                return Promise.reject(new Error(t('Error.unexpected_server_error')))
            }
            if (error.response.status === 502) {
                return Promise.reject(new Error(t('Error.unexpected_server_error')))
            }
            if (error.response.status === 500) {
                return Promise.reject(new Error(t('Error.unexpected_server_error')))
            }
            // if (error.error instanceof TimeoutError) {
            //   console.log('time out');
            //   this.errorMessage('Request timeout, please try again!');
            // }
            // if (error.error instanceof ErrorEvent) {
            //   this.errorMessage(error.error.message);
            // }
            // if (error && error.statusText) {
            //   this.errorMessage(error.statusText);
            // }
        }
        return Promise.reject(error)
    },
)

export default api
