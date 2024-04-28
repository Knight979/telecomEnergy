import Axios from './index'
import { UserForm, DefaultResponse, User, VerifyCode } from '@/Models'
import { AxiosInstance } from 'axios'

export const userLogin = async (para: UserForm) => {
    const response = await Axios.post<DefaultResponse<User>>('/login', para)
    return response
}

// not sure mobile need this how dare you
export const isShowVerifyCode = async (instance: AxiosInstance) => {
    const { data } = await instance.get<DefaultResponse<number | undefined>>(
        '/isShowVerifyCode',
    )
    return data
}

export const getVerifyCode = async (instance: AxiosInstance) => {
    const { data } = await instance.get<DefaultResponse<VerifyCode>>(
        '/verifyCode',
    )
    return data
}

export const getUserInfo = async (userid: string) => {
    const { data } = await Axios.get<DefaultResponse<User>>(`/user/${userid}`)
    return data
}

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

export const updateJPushRegistrationId = async (
    userid: string,
    jpushRegistrationId: string,
) => {
    const { data } = await Axios.put<DefaultResponse<null>>(`/jpush/${userid}`, {
        jpushRegistrationId,
    })
    return data
}
