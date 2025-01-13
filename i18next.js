import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
// Add more languages as needed

// The translations
const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  // Add more languages here
};

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: { escapeValue: false }, // React already escapes values.
  });

export default i18n;
