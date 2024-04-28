/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-26 09:13:00
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-28 11:00:23
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/Models'
import { AppThunk } from '@/Store'
import { getUserInfo } from '@/Services/UserServices'
import Axios from 'axios'

// import { resetCloseAlarmPage } from './CloseAlarm'
// import { resetOpenAlarmPage } from './OpenAlarm'
// import { resetMaskedAlarmPage } from './MaskedAlarm'

interface UserState {
    host: string
    token: string
    user: User | null
}

const initialState = {
    host: '',
    token: '',
    user: null,
} as UserState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(
            state,
            action: PayloadAction<{
                token: string
                user: User
                host: string
            }>,
        ) {
            state.token = action.payload.token
            state.user = action.payload.user
            state.host = action.payload.host
        },
        setUserProfile(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
        reset(state) {
            return {
                ...initialState,
                host: state.host,
            }
        },
    },
})

const { loginSuccess, reset, setUserProfile } = userSlice.actions
export default userSlice.reducer

export const loginUserSuccess =
    ({
        host,
        token,
        user,
    }: {
        host: string
        token: string
        user: User
    }): AppThunk =>
        async dispatch => {
            dispatch(
                loginSuccess({
                    host,
                    token,
                    user,
                }),
            )
        }

export const logoutUser = (): AppThunk => dispatch => {
    dispatch(reset())
    // dispatch(resetCloseAlarmPage())
    // dispatch(resetOpenAlarmPage())
    // dispatch(resetMaskedAlarmPage())
    Axios.defaults.headers.Authorization = ''
}

export const getUpdatedProfile = (): AppThunk => async (dispatch, getState) => {
    try {
        const { user } = getState().user
        const response = await getUserInfo(user!.id!)
        if (response.data) {
            dispatch(
                setUserProfile({
                    ...response.data,
                    permissionList: user!.permissionList,
                }),
            )
        }
    } catch (error) {
        console.log(error)
    }
}
