import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../locales/en/translation.json';
import arTranslations from '../locales/ar/translation.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    
    const [language, setLanguage] = useState('en');
    const translations = language === 'en' ? enTranslations : arTranslations;
    const direction = language === 'ar' ? 'rtl' : 'ltr'; // Example logic

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations,direction }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);