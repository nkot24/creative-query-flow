
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'lv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Menu page
    'menu.title': 'Restaurant Menu',
    'menu.subtitle': 'Discover our delicious selection of local and international cuisine',
    'menu.contact': 'For reservations and special dietary requirements, please contact us',
    'menu.callRestaurant': 'Call Restaurant',
    'menu.contactUs': 'Contact Us',
    
    // Common
    'common.perNight': 'per night',
    'common.guests': 'guests',
    'common.upTo': 'Up to',
  },
  lv: {
    // Navigation
    'nav.home': 'Sākums',
    'nav.rooms': 'Istabas',
    'nav.menu': 'Ēdienkarte',
    'nav.about': 'Par mums',
    'nav.contact': 'Kontakti',
    'nav.bookNow': 'Rezervēt',
    
    // Menu page
    'menu.title': 'Restorāna Ēdienkarte',
    'menu.subtitle': 'Atklājiet mūsu garšīgo vietējo un starptautisko ēdienu izvēli',
    'menu.contact': 'Rezervācijām un īpašām diētas prasībām, lūdzu, sazinieties ar mums',
    'menu.callRestaurant': 'Zvanīt restorānam',
    'menu.contactUs': 'Sazināties',
    
    // Common
    'common.perNight': 'par nakti',
    'common.guests': 'viesi',
    'common.upTo': 'Līdz',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
