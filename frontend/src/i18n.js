import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      Home: "Home", Knowledge: "Knowledge", Simulator: "Simulator", BrainGames: "Brain Games",
      History: "History", Admin: "Admin", Logout: "Logout", SignIn: "Sign In",
      Settings: "Settings", CustomKeys: "Custom API Keys", Save: "Save Keys", Close: "Close"
    }
  },
  hi: {
    translation: {
      Home: "होम", Knowledge: "ज्ञान", Simulator: "सिम्युलेटर", BrainGames: "ब्रेन गेम्स",
      History: "इतिहास", Admin: "एडमिन", Logout: "लॉगआउट", SignIn: "साइन इन",
      Settings: "सेटिंग्स", CustomKeys: "कस्टम API कुंजी", Save: "सुरक्षित करें", Close: "बंद करें"
    }
  },
  bn: {
    translation: {
      Home: "হোম", Knowledge: "জ্ঞান", Simulator: "সিমুলেটর", BrainGames: "ব্রেন গেমস",
      History: "ইতিহাস", Admin: "অ্যাডমিন", Logout: "লগআউট", SignIn: "সাইন ইন",
      Settings: "সেটিংস", CustomKeys: "কাস্টম API কী", Save: "সংরক্ষণ করুন", Close: "বন্ধ করুন"
    }
  },
  mr: {
    translation: {
      Home: "होम", Knowledge: "ज्ञान", Simulator: "सिम्युलेटर", BrainGames: "ब्रेन गेम्स",
      History: "इतिहास", Admin: "अ‍ॅडमिन", Logout: "लॉगआउट", SignIn: "साइन इन",
      Settings: "सेटिंग्स", CustomKeys: "कस्टम API की", Save: "जतन करा", Close: "बंद करा"
    }
  },
  te: {
    translation: {
      Home: "హోమ్", Knowledge: "జ్ఞానం", Simulator: "సిమ్యులేటర్", BrainGames: "బ్రెయిన్ గేమ్స్",
      History: "చరిత్ర", Admin: "అడ్మిన్", Logout: "లాగౌట్", SignIn: "సైన్ ఇన్",
      Settings: "సెట్టింగ్స్", CustomKeys: "కస్టమ్ API కీ", Save: "సేవ్ చేయండి", Close: "మూసివేయి"
    }
  },
  ta: {
    translation: {
      Home: "முகப்பு", Knowledge: "அறிவு", Simulator: "சிமுலேட்டர்", BrainGames: "மூளை விளையாட்டுகள்",
      History: "வரலாறு", Admin: "நிர்வாகி", Logout: "வெளியேறு", SignIn: "உள்நுழைக",
      Settings: "அமைப்புகள்", CustomKeys: "தனிப்பயன் ஏபிஐ கீ", Save: "சேமி", Close: "மூடு"
    }
  },
  gu: {
    translation: {
      Home: "હોમ", Knowledge: "જ્ઞાન", Simulator: "સિમ્યુલેટર", BrainGames: "બ્રેઇન ગેમ્સ",
      History: "ઇતિહાસ", Admin: "એડમિન", Logout: "લોગઆઉટ", SignIn: "સાઇન ઇન",
      Settings: "સેટિંગ્સ", CustomKeys: "કસ્ટમ API કી", Save: "સાચવો", Close: "બંધ કરો"
    }
  },
  ur: {
    translation: {
      Home: "ہوم", Knowledge: "علم", Simulator: "سمیلیٹر", BrainGames: "برین گیمز",
      History: "ہسٹری", Admin: "ایڈمن", Logout: "لاگ آؤٹ", SignIn: "سائن ان",
      Settings: "سیٹنگز", CustomKeys: "کسٹم API کیز", Save: "محفوظ کریں", Close: "بند کریں"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
