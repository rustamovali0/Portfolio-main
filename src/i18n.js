// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Çeviri verilerini içeren JSON dosyalarının yolu
import translationEN from './locales/en.json';
import translationAZ from './locales/az.json';
import translationTR from './locales/tr.json';

const resources = {
  en: {
    translation: translationEN
  },
  az: {
    translation: translationAZ
  },
  tr: {
    translation: translationTR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Varsayılan dil
    fallbackLng: 'en', // Varsayılan dilin yedek dil olarak kullanılması
    interpolation: {
      escapeValue: false // HTML ve diğer etiketlerin çevrilmesine izin ver
    }
  });

export default i18n;
