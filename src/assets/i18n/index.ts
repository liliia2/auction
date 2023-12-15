import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ua from './ua.json';
import en from './en.json';

enum Language {
  UA = 'ua',
  EN = 'en',
}

const resources = {
  [Language.UA]: ua,
  [Language.EN]: en,
};

const i18next = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: Object.values(Language),
  });

export default i18next;
