import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      debug: true,
      fallbackLng: 'ru',
      interpolation: {
         escapeValue: false
      },
      resources: {
         en: {
            translation: {
               language: { en: 'English', ru: 'Russian' },
               favourites: 'Favourites',
               conversion: 'Currency conversion',
               nothing: "Nothing was found."

            }
         },
         ru: {
            translation: {
               language: { en: 'Английский', ru: 'Русский' },
               favourites: 'Избранное',
               conversion: 'Конвертация валюты',
               nothing: "Ничего не найдено."
            }
         }
      }
   });

export default i18n;