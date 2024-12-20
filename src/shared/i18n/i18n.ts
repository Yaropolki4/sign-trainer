import i18nLib from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import { NestedKeyOf } from '../customUtilityTypes';

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

export const t = (key: NestedKeyOf<typeof enTranslation>): string =>
  i18nLib.t(key);
