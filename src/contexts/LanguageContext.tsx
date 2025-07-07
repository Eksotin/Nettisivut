import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.support': 'Support',
    'nav.supportMe': 'Support Me',
    
    // Home page
    'home.hero.title': "Hey, I'm HUUDI",
    'home.hero.description': 'Content creator bringing you entertainment across YouTube, Twitch, TikTok, and more. Join the community for live streams, epic clips, and good vibes!',
    'home.hero.learnMore': 'Learn More About Me',
    'home.hero.showSupport': 'Show Support',
    'home.content.title': 'What I Create',
    'home.content.streams': 'Live Streams',
    'home.content.streamsDesc': 'Interactive live content on Twitch with chat engagement',
    'home.content.clips': 'Clips & Highlights',
    'home.content.clipsDesc': 'Best moments compiled for YouTube and TikTok',
    'home.content.community': 'Community Content',
    'home.content.communityDesc': 'Building connections across all platforms',
    'home.social.title': 'Connect With Me',
    'home.social.description': 'Follow me across all platforms to never miss the latest content, live streams, and community updates!',
    'home.cta.title': 'Ready to Join the Community?',
    'home.cta.description': 'Become part of the Huudi community and help support the content you love!',
    'home.cta.button': 'Support My Content',
    
    // About page
    'about.hero.title': 'About HUUDI',
    'about.hero.description': "I'm a passionate content creator dedicated to bringing entertainment, education, and community to the digital world. From epic gaming moments to engaging live chats, I create content that connects and inspires.",
    'about.stats.since': 'Creating Content Since',
    'about.stats.members': 'Community Members',
    'about.stats.clips': 'Viral Clips',
    'about.stats.passion': 'Passion Level',
    'about.story.title': 'My Story',
    'about.platforms.title': 'Where You Can Find Me',
    'about.connect.title': "Let's Connect!",
    'about.connect.description': "I'm always excited to meet new people and grow our community. Follow me on your favorite platforms and let's create something amazing together!",
    
    // Support page
    'support.hero.title': 'Support HUUDI',
    'support.hero.description': 'Your support helps me create better content, upgrade equipment, and dedicate more time to entertaining and building our amazing community. Every bit of support means the world to me!',
    'support.why.title': 'Why Your Support Matters',
    'support.free.title': 'Support for Free',
    'support.free.description': "Can't contribute financially? No problem! There are many ways to support that don't cost anything but mean everything to me.",
    'support.thanks.title': 'Thank You! ❤️',
  },
  fi: {
    // Header
    'nav.home': 'Koti',
    'nav.about': 'Tietoa',
    'nav.support': 'Tuki',
    'nav.supportMe': 'Tue minua',
    
    // Home page
    'home.hero.title': 'Hei, olen HUUDI',
    'home.hero.description': 'Sisällöntuottaja, joka tuo sinulle viihdettä YouTubessa, Twitchissä, TikTokissa ja muualla. Liity yhteisöön live-striimien, eeppisten klippien ja hyvän fiiliksen pariin!',
    'home.hero.learnMore': 'Lue lisää minusta',
    'home.hero.showSupport': 'Näytä tukesi',
    'home.content.title': 'Mitä luon',
    'home.content.streams': 'Live-striimit',
    'home.content.streamsDesc': 'Vuorovaikutteista live-sisältöä Twitchissä chat-osallistumisen kanssa',
    'home.content.clips': 'Klipit ja kohokohteet',
    'home.content.clipsDesc': 'Parhaat hetket koottuna YouTubeen ja TikTokiin',
    'home.content.community': 'Yhteisösisältö',
    'home.content.communityDesc': 'Yhteyksien rakentaminen kaikilla alustoilla',
    'home.social.title': 'Ota yhteyttä',
    'home.social.description': 'Seuraa minua kaikilla alustoilla, jotta et missaa uusinta sisältöä, live-striimejä ja yhteisöpäivityksiä!',
    'home.cta.title': 'Valmis liittymään yhteisöön?',
    'home.cta.description': 'Tule osaksi Huudi-yhteisöä ja auta tukemaan rakkamaasi sisältöä!',
    'home.cta.button': 'Tue sisältöäni',
    
    // About page
    'about.hero.title': 'Tietoa HUUDIsta',
    'about.hero.description': 'Olen intohimoinen sisällöntuottaja, joka on omistautunut tuomaan viihdettä, opetusta ja yhteisöllisyyttä digitaaliseen maailmaan. Eeppisistä pelihetkistä kiinnostaviin live-chatteihin, luon sisältöä joka yhdistää ja inspiroi.',
    'about.stats.since': 'Sisältöä tehty vuodesta',
    'about.stats.members': 'Yhteisön jäsenet',
    'about.stats.clips': 'Virallit klipit',
    'about.stats.passion': 'Intohimotaso',
    'about.story.title': 'Tarinani',
    'about.platforms.title': 'Mistä minut löytää',
    'about.connect.title': 'Otetaan yhteyttä!',
    'about.connect.description': 'Olen aina innoissani tapaamaan uusia ihmisiä ja kasvattamaan yhteisöämme. Seuraa minua suosikkialustoillasi ja luodaan yhdessä jotain mahtavaa!',
    
    // Support page
    'support.hero.title': 'Tue HUUDIa',
    'support.hero.description': 'Tukesi auttaa minua luomaan parempaa sisältöä, päivittämään laitteita ja omistamaan enemmän aikaa viihdyttämiseen ja mahtavan yhteisömme rakentamiseen. Jokainen tuen osoitus merkitsee minulle maailmaa!',
    'support.why.title': 'Miksi tukesi on tärkeää',
    'support.free.title': 'Ilmainen tuki',
    'support.free.description': 'Etkö voi tukea rahallisesti? Ei se mitään! On monia tapoja tukea, jotka eivät maksa mitään, mutta merkitsevät minulle kaikkea.',
    'support.thanks.title': 'Kiitos! ❤️',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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
