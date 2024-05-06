/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-22 14:23:57
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-29 20:02:03
 */
// React Native的异步、持久的键值存储系统。
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, Action } from 'redux'
import logger from 'redux-logger'
import { ThunkAction } from 'redux-thunk'
import {
    persistReducer,
    persistStore,
    FLUSH, //立即将所有挂起状态写入磁盘并返回承诺
    REHYDRATE,
    PAUSE,//从磁盘清除状态并返回承诺
    PERSIST,//恢复坚持
    PURGE,//暂停持久性
    REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

import user from './User'
// import closeAlarm from './CloseAlarm'
// import maskedAlarm from './MaskedAlarm'
// import openAlarm from './OpenAlarm'
import common from './Common'

const reducers = combineReducers({
    user,
    // closeAlarm,
    // maskedAlarm,
    // openAlarm,
    common,
    // add more reducer here
})
// 定义根状态的类型
export type RootState = ReturnType<typeof reducers>
// 配置 Redux Persist
const persistConfig = {
    key: 'root', // 存储的键名
    storage: AsyncStorage, // 使用 AsyncStorage 进行持久化存储
    whitelist: ['user', 'common'], // 需要持久化存储的 reducer 名称
}
// 创建持久化后的根 reducer
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,  // 使用持久化后的根 reducer
    /** 添加中间件 */
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        // 在开发环境下添加 redux-logger 中间件
        if (__DEV__ && !process.env.JEST_WORKER_ID) {
            middlewares.push(logger)
        }
        // 在开发环境下添加 redux-flipper 中间件
        if (__DEV__) {
            const createDebugger = require('redux-flipper').default
            middlewares.push(createDebugger())
        }

        return middlewares
    },
})
// 创建 Redux Persist 的持久化存储实例
const persistor = persistStore(store)

// 定义 store 的 dispatch 类型
export type AppDispatch = typeof store.dispatch

// 定义异步 action 的类型
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

// 导出 store 和 persistor
export { store, persistor }
