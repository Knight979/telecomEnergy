/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-29 15:47:00
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-07 17:41:13
 */
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import * as _resources from './Resources'

export type LanguageType = 'en' | 'zh_hk' | 'zh_cn' | 'fr' | 'es'

// 定义语言枚举类型
export const languageCode = {
    en: 1,
    zh_cn: 2,
    zh_hk: 3,
    fr: 4,
    es: 5,
} as const;

export const resources = {
    en: { translation: _resources.en },
    zh_cn: { translation: _resources.zh_cn },
    zh_hk: { translation: _resources.zh_hk },
    fr: { translation: _resources.fr },
    es: { translation: _resources.es },
} as const ;

// 初始化i18n实例，初次加载时，只加载英文资源
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',//PluralRules API，如果它不可用，它将退回到i18next JSON格式v3复数处理。要强制执行旧行为，您可以在i18next init调用上启用compatibilityJSON = 'v3'。
        resources,
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            skipOnVariables: false //默认情况下，skipOnVariables选项现在被设置为true。为了执行旧的行为，你可以在i18next init调用上设置skipOnVariables = false。
        }
    });
export default  i18n ;