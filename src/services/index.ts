/*
 * @Description: 网络请求配置
 * @Author: Knight
 * @Date: 2024-04-18 18:57:39
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-28 10:16:44
 */

import axios, { AxiosResponse } from 'axios';
// 引入store
import { store } from '@/Store';
// 引入语言代码
import { languageCode } from '@/Translations'
import Config from 'react-native-config'
import Toast from 'react-native-toast-message'
import { DefaultResponse } from '@/Models'
import { logoutUser } from '@/Store/User'
import { t } from 'i18next'

// 创建axios实例
const api = axios.create({
    // 请求配置
    baseURL: '',
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

// 添加请求拦截器
api.interceptors.request.use(function (config) {
    // 获取token/主机地址
    const { token,host } = store.getState().user;
    // 获取当前语言
    // const { lang } = store.getState().common;

    // 在发送请求之前做些什么

    // 设置请求头
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default api