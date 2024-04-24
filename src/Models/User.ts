/*
 * @Description: 定义用户数据类型
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 11:11:34
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-23 11:55:21
 */
// 定义用户登录时的表单数据
export interface UserForm {
    loginName: string
    password: string
    platform?: number
    verifyCode?: string
    verifyCodeToken?: string
    hcaptchaToken?: string | null
}
//定义用户的详细信息
export interface User {
    address?: string
    createTime?: string
    createUser?: string
    customerId?: string
    description?: string
    email?: string
    endTime?: string
    id?: string;
    loginName: string
    phone?: string
    permissionList?: string[]
    sex?: string
    startTime?: string
    timeZone?: string
    type?: number
    updateTime?: string
    updateUser?: number
    userName?: string
}
//定义验证码数据结构
export interface VerifyCode {
    verifyCodeImgStr: string
    verifyCodeToken: string
}
