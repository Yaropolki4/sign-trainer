import i18nLib from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

i18nLib.use(LanguageDetector).init({
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  returnEmptyString: false,
});

export type I18nKey = NestedKeyOf<typeof enTranslation>;

export const t = (key: I18nKey): string => i18nLib.t(key);
