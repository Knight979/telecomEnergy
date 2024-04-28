import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@/Store'
import i18n, { LanguageType } from '@/Translations'
import * as RNLocalize from 'react-native-localize'

interface CommonState {
    lang: LanguageType | string
}

const initialState = {
    lang: '',
} as CommonState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSystemLang(state, action: PayloadAction<LanguageType>) {
            state.lang = action.payload
        },
    },
})

const { setSystemLang } = userSlice.actions
export default userSlice.reducer

// dispatch actions
export const changeSystemLanguage =
    (lang: LanguageType): AppThunk =>
        dispatch => {
            dispatch(setSystemLang(lang))
            i18n.changeLanguage(lang)
        }

export const checkDeviceLanguage = (): AppThunk => (dispatch, getState) => {
    const storedLang = getState().common.lang
    if (!storedLang) {
        const { languageTag, languageCode } = RNLocalize.getLocales()[0]
        let finalLang: LanguageType = 'en'
        if (languageCode === 'zh') {
            if (languageTag.includes('cn')) {
                // finalLang = 'zh_cn'
            } else {
                finalLang = 'zh_hk'
            }
        }
        i18n.changeLanguage(finalLang)
        dispatch(setSystemLang(finalLang))
    } else {
        i18n.changeLanguage(storedLang)
    }
}
