/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-29 15:46:50
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-29 17:16:50
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@/Store'
import  { LanguageType } from '@/Translations'
//获取用户的设备的数据
import * as RNLocalize from 'react-native-localize'
import { useTranslation } from 'react-i18next';
export const { t, i18n } = useTranslation();

// 定义公共状态接口
interface CommonState {
    lang: LanguageType | string
}
// 初始状态
const initialState = {
    lang: 'en',
} as CommonState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // 设置系统语言
        setSystemLang(state, action: PayloadAction<LanguageType>) {
            state.lang = action.payload
        },
    },
})
// 导出切片的动作和 reducer
const { setSystemLang } = userSlice.actions
export default userSlice.reducer

// 切换系统语言的异步操作
export const changeSystemLanguage =
    (lang: LanguageType): AppThunk =>
        dispatch => {
            dispatch(setSystemLang(lang))
            i18n.changeLanguage(lang)// 更改 i18n 实例中的语言
        }
// 检查设备语言的异步操作
export const checkDeviceLanguage = (): AppThunk => (dispatch, getState) => {
    const storedLang = getState().common.lang; // 获取存储的语言
    if (!storedLang) {
        // 如果存储的语言不存在，则获取用户设备语言
        const { languageTag, languageCode } = RNLocalize.getLocales()[0];
        // 默认为英语
        let finalLang: LanguageType = 'en';
        if (languageCode === 'zh') {
            // 如果是中国大陆地区，则使用简体中文，否则使用繁体中文
            if (languageTag.includes('cn')) {
                finalLang = 'zh_cn'
            } else {
                finalLang = 'zh_hk'
            }
        }
        // 更改 i18n 实例中的语言
        i18n.changeLanguage(finalLang)
        // 更新 store 中的语言
        dispatch(setSystemLang(finalLang))
    } else {
        // 如果存储的语言存在，则直接使用存储的语言
        i18n.changeLanguage(storedLang)
    }
}
