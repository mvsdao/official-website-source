import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import enUsTrans from '@/locales/en-us'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: enUsTrans,
  },
}
/**
 * localStorage.getItem('i18nextLng') || (navigator.language === 'zh-CN' ? 'zh' : navigator.language === 'zh' ? 'zh' : 'en')
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
