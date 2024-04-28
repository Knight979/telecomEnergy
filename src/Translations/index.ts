import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import * as _resources from './Resources'

// 语言代码，
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
        resources,
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });
