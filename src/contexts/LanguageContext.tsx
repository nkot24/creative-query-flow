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
    
    // Home page
    'home.hero.title': 'Welcome to Viesnīca Kandava',
    'home.hero.subtitle': 'Experience comfort and hospitality in the heart of Kandava',
    'home.rooms.title': 'Our Rooms',
    'home.rooms.subtitle': 'Comfortable accommodations for every traveler',
    'home.rooms.viewAll': 'View All Rooms',
    'home.food.title': 'Restaurant & Menu',
    'home.food.subtitle': 'Enjoy delicious local and international cuisine at our hotel restaurant',
    'home.food.viewMenu': 'View Full Menu',
    'home.about.title': 'About Viesnīca Kandava',
    'home.about.description1': 'Nestled in the heart of historic Kandava, our hotel combines traditional Latvian charm with modern comfort. We pride ourselves on providing exceptional hospitality in a beautifully restored building that tells the story of our rich cultural heritage.',
    'home.about.description2': 'Whether you\'re visiting for business or leisure, our dedicated staff ensures your stay is memorable and comfortable.',
    'home.about.learnMore': 'Learn More',
    'home.about.amenities': 'Hotel Amenities',
    'home.about.location.title': 'Prime Location',
    'home.about.location.description': 'Located in historic center of Kandava, walking distance to main attractions',
    'home.about.quality.title': 'Quality Service',
    'home.about.quality.description': 'Dedicated staff committed to making your stay comfortable and memorable',
    'home.about.authentic.title': 'Authentic Experience',
    'home.about.authentic.description': 'Experience genuine Latvian hospitality in a beautifully preserved setting',
    'home.contact.title': 'Get in Touch',
    'home.contact.subtitle': 'We\'re here to help make your stay perfect',
    'home.contact.location': 'Location',
    'home.contact.phone': 'Phone',
    'home.contact.email': 'Email',
    'home.contact.contactUs': 'Contact Us',
    
    // Menu page
    'menu.title': 'Restaurant Menu',
    'menu.subtitle': 'Discover our delicious selection of local and international cuisine',
    'menu.contact': 'For reservations and special dietary requirements, please contact us',
    'menu.callRestaurant': 'Call Restaurant',
    'menu.contactUs': 'Contact Us',
    'menu.mainCourse': 'MAIN COURSE',
    'menu.porkDishes': 'Pork Dishes',
    'menu.fishDishes': 'Fish dishes',
    'menu.chickenDishes': 'Chicken dishes',
    'menu.burgers': 'Hamburgers',
    'menu.pasta': 'Pasta',
    'menu.desserts': 'DESSERTS',
    'menu.beverages': 'BEVERAGES',
    'menu.kidsMenu': 'OFFER FOR KIDS',
    'menu.coldDrinks': 'Cold Drinks',
    'menu.hotDrinks': 'Hot Drinks',
    
    // Rooms page
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Choose from our selection of comfortable and well-appointed rooms',
    'rooms.bookRoom': 'Book This Room',
    
    // About page
    'about.title': 'About Viesnīca Kandava',
    'about.subtitle': 'Discover the charm and history of our hotel in the heart of Kandava',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Our historic building has been carefully restored to preserve its original character while providing all modern conveniences.',
    'about.story.p2': 'For generations, we have welcomed travelers from around the world, sharing the beauty and tranquility of Kandava. Our commitment to exceptional service and authentic Latvian hospitality remains unchanged.',
    'about.story.p3': 'Whether you\'re exploring the local culture, conducting business, or simply seeking a peaceful retreat, we provide a warm welcome and comfortable accommodations for every guest.',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for reservations, questions, or special requests',
    'contact.getInTouch': 'Get in Touch',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Reception Hours',
    'contact.hours24': '24/7 Reception Available',
    'contact.sendMessage': 'Send us a Message',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.map': 'Location Map',
    'contact.mapPlaceholder': 'Google Maps Integration Would Go Here',
    
    // Booking page
    'booking.title': 'Book Your Stay',
    'booking.subtitle': 'Complete the form below to reserve your room at Viesnīca Kandava',
    'booking.info': 'Booking Information',
    'booking.selectRoom': 'Select Room',
    'booking.chooseRoom': 'Choose a room',
    'booking.checkIn': 'Check-in Date',
    'booking.checkOut': 'Check-out Date',
    'booking.guests': 'Number of Guests',
    'booking.guest': 'Guest',
    'booking.guests_plural': 'Guests',
    'booking.fullName': 'Full Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number',
    'booking.submit': 'Submit Booking Request',
    'booking.summary': 'Booking Summary',
    'booking.pricePerNight': 'Price per night:',
    'booking.maxGuests': 'Max guests:',
    'booking.roomFeatures': 'Room Features:',
    'booking.success': 'Booking Submitted!',
    'booking.successMessage': 'We will contact you shortly to confirm your reservation.',
    'booking.availabilityAlert': 'We will contact you as soon as possible and inform you about room availability.',
    
    // Common
    'common.perNight': 'per night',
    'common.guests': 'guests',
    'common.upTo': 'Up to',
    'common.night': 'night',
    
    // 404 page
    'notFound.title': '404',
    'notFound.message': 'Oops! Page not found',
    'notFound.home': 'Return to Home',
  },
  lv: {
    // Navigation
    'nav.home': 'Sākums',
    'nav.rooms': 'Istabas',
    'nav.menu': 'Ēdienkarte',
    'nav.about': 'Par mums',
    'nav.contact': 'Kontakti',
    'nav.bookNow': 'Rezervēt',
    
    // Home page
    'home.hero.title': 'Laipni lūdzam Viesnīcā Kandava',
    'home.hero.subtitle': 'Izbaudiet komfortu un viesmīlību Kandavas sirdī',
    'home.rooms.title': 'Mūsu Istabas',
    'home.rooms.subtitle': 'Ērtas naktsmītnes katram ceļotājam',
    'home.rooms.viewAll': 'Skatīt Visas Istabas',
    'home.food.title': 'Restorāns un Ēdienkarte',
    'home.food.subtitle': 'Baudiet garšīgus vietējos un starptautiskos ēdienus mūsu viesnīcas restorānā',
    'home.food.viewMenu': 'Skatīt Ēdienkarti',
    'home.about.title': 'Par Viesnīcu Kandava',
    'home.about.description1': 'Mūsu viesnīca atrodas vēsturiskās Kandavas sirdī, apvienojot tradicionālo latviešu šarmu ar mūsdienu komfortu. Mēs lepojamies ar izcilu viesmīlību skaisti restaurētā ēkā, kas stāsta mūsu bagātā kultūras mantojuma stāstu.',
    'home.about.description2': 'Neatkarīgi no tā, vai jūs iebraucat darīšanu vai atpūtas nolūkos, mūsu apdāvinātais personāls nodrošina, ka jūsu uzturēšanās būs neaizmirstama un ērta.',
    'home.about.learnMore': 'Uzzināt Vairāk',
    'home.about.amenities': 'Viesnīcas Ērtības',
    'home.about.location.title': 'Lieliska Atrašanās Vieta',
    'home.about.location.description': 'Atrodas Kandavas vēsturiskajā centrā, gājienā no galvenajām apskates vietām',
    'home.about.quality.title': 'Kvalitatīvs Serviss',
    'home.about.quality.description': 'Apdāvināts personāls, kas nodrošina jūsu ērtu un neaizmirstamu uzturēšanos',
    'home.about.authentic.title': 'Autentiska Pieredze',
    'home.about.authentic.description': 'Izbaudiet īstu latviešu viesmīlību skaisti saglabātā vidē',
    'home.contact.title': 'Sazināties ar Mums',
    'home.contact.subtitle': 'Mēs esam šeit, lai palīdzētu padarīt jūsu uzturēšanos ideālu',
    'home.contact.location': 'Atrašanās vieta',
    'home.contact.phone': 'Tālrunis',
    'home.contact.email': 'E-pasts',
    'home.contact.contactUs': 'Sazināties',
    
    // Menu page
    'menu.title': 'Restorāna Ēdienkarte',
    'menu.subtitle': 'Atklājiet mūsu garšīgo vietējo un starptautisko ēdienu izvēli',
    'menu.contact': 'Rezervācijām un īpašām diētas prasībām, lūdzu, sazinieties ar mums',
    'menu.callRestaurant': 'Zvanīt restorānam',
    'menu.contactUs': 'Sazināties',
    'menu.mainCourse': 'OTRIE ĒDIENI',
    'menu.porkDishes': 'Cūkgaļas ēdieni',
    'menu.fishDishes': 'Zivs ēdieni',
    'menu.chickenDishes': 'Vistas gaļas ēdieni',
    'menu.burgers': 'Burgeri',
    'menu.pasta': 'Pasta',
    'menu.desserts': 'DESERTI',
    'menu.beverages': 'DZĒRIENI',
    'menu.kidsMenu': 'PIEDĀVĀJUMS BĒRNIEM',
    'menu.coldDrinks': 'Aukstie dzērieni',
    'menu.hotDrinks': 'Karstie dzērieni',
    
    // Rooms page
    'rooms.title': 'Mūsu Istabas',
    'rooms.subtitle': 'Izvēlieties no mūsu ērto un labi aprīkoto istabu klāsta',
    'rooms.bookRoom': 'Rezervēt Šo Istabu',
    
    // About page
    'about.title': 'Par Viesnīcu Kandava',
    'about.subtitle': 'Atklājiet mūsu viesnīcas šarmu un vēsturi Kandavas sirdī',
    'about.story.title': 'Mūsu Stāsts',
    'about.story.p1': 'Mūsu vēsturiskā ēka ir rūpīgi restaurēta, lai saglabātu savu oriģinālo raksturu, vienlaikus nodrošinot visas mūsdienu ērtības.',
    'about.story.p2': 'Paaudžu garumā mēs esam uzņēmuši ceļotājus no visas pasaules, daloties ar Kandavas skaistumu un mierīgumu. Mūsu apņemšanās sniegt izcilu servisu un autentisku latviešu viesmīlību paliek nemainīga.',
    'about.story.p3': 'Neatkarīgi no tā, vai jūs pētāt vietējo kultūru, veiciet darīšanas vai vienkārši meklējat mierīgu atpūtu, mēs sniedzam siltu uzņemšanu un ērtas naktsmītnes katram viesim.',
    
    // Contact page
    'contact.title': 'Sazināties ar Mums',
    'contact.subtitle': 'Sazinieties ar mums rezervācijām, jautājumiem vai īpašām vēlmēm',
    'contact.getInTouch': 'Sazināties',
    'contact.address': 'Adrese',
    'contact.phone': 'Tālrunis',
    'contact.email': 'E-pasts',
    'contact.hours': 'Recepcijas Darba Laiks',
    'contact.hours24': '24/7 Recepcija Pieejama',
    'contact.sendMessage': 'Sūtīt mums ziņojumu',
    'contact.firstName': 'Vārds',
    'contact.lastName': 'Uzvārds',
    'contact.subject': 'Temats',
    'contact.message': 'Ziņojums',
    'contact.send': 'Sūtīt Ziņojumu',
    'contact.map': 'Atrašanās Vietas Karte',
    'contact.mapPlaceholder': 'Google Maps Integrācija Būtu Šeit',
    
    // Booking page
    'booking.title': 'Rezervēt Uzturēšanos',
    'booking.subtitle': 'Aizpildiet zemāk esošo formu, lai rezervētu istabu Viesnīcā Kandava',
    'booking.info': 'Rezervācijas Informācija',
    'booking.selectRoom': 'Izvēlieties Istabu',
    'booking.chooseRoom': 'Izvēlieties istabu',
    'booking.checkIn': 'Iebraukšanas Datums',
    'booking.checkOut': 'Izbraukšanas Datums',
    'booking.guests': 'Viesu Skaits',
    'booking.guest': 'Viesis',
    'booking.guests_plural': 'Viesi',
    'booking.fullName': 'Pilns Vārds',
    'booking.email': 'E-pasta Adrese',
    'booking.phone': 'Tālruņa Numurs',
    'booking.submit': 'Iesniegt Rezervācijas Pieprasījumu',
    'booking.summary': 'Rezervācijas Kopsavilkums',
    'booking.pricePerNight': 'Cena par nakti:',
    'booking.maxGuests': 'Maks. viesi:',
    'booking.roomFeatures': 'Istabas Ērtības:',
    'booking.success': 'Rezervācija Iesniegta!',
    'booking.successMessage': 'Mēs ar jums sazināsimies drīzumā, lai apstiprinātu rezervāciju.',
    'booking.availabilityAlert': 'Mēs ar jums sazināsimies pēc iespējas ātrāk un informēsim par istabu pieejamību.',
    
    // Common
    'common.perNight': 'par nakti',
    'common.guests': 'viesi',
    'common.upTo': 'Līdz',
    'common.night': 'nakts',
    
    // 404 page
    'notFound.title': '404',
    'notFound.message': 'Ups! Lapa nav atrasta',
    'notFound.home': 'Atgriezties Sākumlapā',
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
