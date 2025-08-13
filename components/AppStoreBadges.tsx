'use client';

import { useState, useEffect } from 'react';

// Locale configuration for future expansion
type LocaleConfig = {
  apple: {
    path: string;
    alt: string;
  };
  google: {
    path: string;
    alt: string;
  };
};

const LOCALE_BADGES: Record<string, LocaleConfig> = {
  'en-US': {
    apple: {
      path: '/badges/Apple/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
      alt: 'Download on the App Store'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_English.png',
      alt: 'Get it on Google Play'
    }
  },
  'es': {
    apple: {
      path: '/badges/Apple/ES/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg',
      alt: 'Descargar en App Store'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_Spanish.png',
      alt: 'Disponible en Google Play'
    }
  },
  'fr': {
    apple: {
      path: '/badges/Apple/FR/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg',
      alt: 'Télécharger sur l\'App Store'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_French.png',
      alt: 'Disponible sur Google Play'
    }
  },
  'de': {
    apple: {
      path: '/badges/Apple/DE/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
      alt: 'Laden im App Store'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_German.png',
      alt: 'Jetzt bei Google Play'
    }
  },
  'ja': {
    apple: {
      path: '/badges/Apple/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg',
      alt: 'App Storeでダウンロード'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_Japanese.png',
      alt: 'Google Playで手に入れよう'
    }
  },
  'ko': {
    apple: {
      path: '/badges/Apple/KR/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg',
      alt: 'App Store에서 다운로드'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_Korean.png',
      alt: 'Google Play에서 받기'
    }
  },
  'zh-CN': {
    apple: {
      path: '/badges/Apple/CN(SC)/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg',
      alt: '在App Store下载'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_Chinese-CN.png',
      alt: '在Google Play上获取'
    }
  },
  'zh-TW': {
    apple: {
      path: '/badges/Apple/HKTW(TC)/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_CNTC_RGB_blk_100217.svg',
      alt: '在App Store下載'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_Chinese-TW.png',
      alt: '到Google Play下載'
    }
  },
  'pt-BR': {
    apple: {
      path: '/badges/Apple/PTBR/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_PTBR_RGB_blk_092917.svg',
      alt: 'Baixar na App Store'
    },
    google: {
      path: '/badges/Google/GetItOnGooglePlay_Badge_Web_color_Portuguese-BR.png',
      alt: 'Disponível no Google Play'
    }
  }
};

interface AppStoreBadgesProps {
  locale?: string;
  className?: string;
  appleUrl?: string;
  googleUrl?: string;
}

export default function AppStoreBadges({ 
  locale = 'en-US', 
  className = "",
  appleUrl = "#",
  googleUrl = "#"
}: AppStoreBadgesProps) {
  const [currentLocale, setCurrentLocale] = useState(locale);
  
  // Auto-detect browser locale as fallback
  useEffect(() => {
    if (typeof window !== 'undefined' && !locale) {
      const browserLocale = navigator.language || 'en-US';
      const supportedLocale = LOCALE_BADGES[browserLocale] ? browserLocale : 'en-US';
      setCurrentLocale(supportedLocale);
    }
  }, [locale]);

  const badges = LOCALE_BADGES[currentLocale] || LOCALE_BADGES['en-US'];

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {/* App Store Button */}
      <a 
        href={appleUrl}
        className="inline-block hover:scale-105 transition-transform duration-200"
      >
        <img 
          src={badges.apple.path}
          alt={badges.apple.alt}
          className="h-[72px] w-auto"
          loading="lazy"
        />
      </a>
      
      {/* Google Play Button */}
      <a 
        href={googleUrl}
        className="inline-block hover:scale-105 transition-transform duration-200"
      >
        <img 
          src={badges.google.path}
          alt={badges.google.alt}
          className="h-[72px] w-auto"
          loading="lazy"
        />
      </a>
    </div>
  );
}