import { useState } from "react";
import { useTranslation } from 'react-i18next';
import flagEn from '../../../../public/usa.jpg'
import flagRu from '../../../../public/russia.svg'

export const LanguageSelection = () => {
   const [showLanguages, setShowLanguages] = useState(false);
   const { t, i18n } = useTranslation();

   return (
      <div className="relative" onMouseLeave={() => setShowLanguages(false)}>
         <div className="flex flex-start items-center cursor-pointer" onMouseEnter={() => setShowLanguages(true)}>
            <img src={i18n.language === 'ru' ? flagRu : flagEn} alt="Флаг" className="mr-2.5" />
            {i18n.language === 'ru' ? t('language.ru') : t('language.en')}
         </div>
         {
            showLanguages && (
               <div className="absolute top-100 py-1 w-40 bg-white shadow-md border rounded">
                  <button className="flex flex-start items-center py-1 px-2 w-full text-left" onClick={() => i18n.changeLanguage('en')}>
                     <img src={flagEn} alt="Флаг En" className="mr-2.5" />
                     {t('language.en')}
                  </button>
                  <button className="flex flex-start items-center py-1 px-2 w-full text-left" onClick={() => i18n.changeLanguage('ru')}>
                     <img src={flagRu} alt="Флаг Ru" className="mr-2.5" />
                     {t('language.ru')}
                  </button>
               </div>
            )}
      </div>
   )
}