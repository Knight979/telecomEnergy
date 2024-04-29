/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-28 21:27:07
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-29 15:39:26
 */
import Axios from './index'
import { UserForm, DefaultResponse, User, VerifyCode } from '@/Models'
import { AxiosInstance } from 'axios'
// 用户登录功能
export const userLogin = async (para: UserForm) => {
    const response = await Axios.post<DefaultResponse<User>>('/login', para)
    return response
}

// 检查是否需要验证码
export const isShowVerifyCode = async (instance: AxiosInstance) => {
    const { data } = await instance.get<DefaultResponse<number | undefined>>(
        '/isShowVerifyCode',
    )
    return data
}
// 获取验证码
export const getVerifyCode = async (instance: AxiosInstance) => {
    const { data } = await instance.get<DefaultResponse<VerifyCode>>(
        '/verifyCode',
    )
    return data
}
// 根据用户ID获取用户信息
export const getUserInfo = async (userid: string) => {
    const { data } = await Axios.get<DefaultResponse<User>>(`/user/${userid}`)
    return data
}
// 更新用户时区
export const updateUserTimeZone = async (
    userid: string,
    params: { timeZone: string },
) => {
    const { data } = await Axios.put<DefaultResponse<null>>(
        `/updateTimeZone/${userid}`,
        params,
    )
    return data
}
// 修改用户密码
export const changeUserPassword = async (params: {
    currentPassword: string
    newPassword: string
}) => {
    const { data } = await Axios.put<DefaultResponse<null>>(
        '/changePassword',
        params,
    )
    return data
}
// 更新JPush注册ID以接收推送通知
export const updateJPushRegistrationId = async (
    userid: string,
    jpushRegistrationId: string,
) => {
    const { data } = await Axios.put<DefaultResponse<null>>(`/jpush/${userid}`, {
        jpushRegistrationId,
    })
    return data
}
