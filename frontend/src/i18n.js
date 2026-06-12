import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      Home: "Home", Knowledge: "Knowledge", Simulator: "Simulator", BrainGames: "Brain Games",
      History: "History", Admin: "Admin", Logout: "Logout", SignIn: "Sign In",
      Settings: "Settings", CustomKeys: "Custom API Keys", Save: "Save Keys", Close: "Close",
      BG_Sub: "Play games, earn scores, and get AI mental health analysis",
      YourScores: "Your Scores", GetAIReport: "🧠 Get AI Mental Health Report",
      Analyzing: "Analyzing...", AIReport: "AI Mental Health Report",
      Strengths: "Strengths", Improve: "Improve", PlayAgain: "Play Again",
      Moves: "Moves", Complete: "✓ Complete!", Solved: "✓ Solved!", Errors: "Errors"
    }
  },
  hi: {
    translation: {
      Home: "होम", Knowledge: "ज्ञान", Simulator: "सिम्युलेटर", BrainGames: "ब्रेन गेम्स",
      History: "इतिहास", Admin: "एडमिन", Logout: "लॉगआउट", SignIn: "साइन इन",
      Settings: "सेटिंग्स", CustomKeys: "कस्टम API कुंजी", Save: "सुरक्षित करें", Close: "बंद करें",
      BG_Sub: "गेम खेलें, स्कोर अर्जित करें और AI मानसिक स्वास्थ्य विश्लेषण प्राप्त करें",
      YourScores: "आपके स्कोर", GetAIReport: "🧠 AI रिपोर्ट प्राप्त करें",
      Analyzing: "विश्लेषण हो रहा है...", AIReport: "AI मानसिक स्वास्थ्य रिपोर्ट",
      Strengths: "ताकत", Improve: "सुधारें", PlayAgain: "फिर से खेलें",
      Moves: "चालें", Complete: "✓ पूरा हुआ!", Solved: "✓ हल हो गया!", Errors: "गलतियां"
    }
  },
  bn: {
    translation: {
      Home: "হোম", Knowledge: "জ্ঞান", Simulator: "সিমুলেটর", BrainGames: "ব্রেন গেমস",
      History: "ইতিহাস", Admin: "অ্যাডমিন", Logout: "লগআউট", SignIn: "সাইন ইন",
      Settings: "সেটিংস", CustomKeys: "কাস্টম API কী", Save: "সংরক্ষণ করুন", Close: "বন্ধ করুন",
      BG_Sub: "গেম খেলুন, স্কোর অর্জন করুন এবং AI মানসিক স্বাস্থ্য বিশ্লেষণ পান",
      YourScores: "আপনার স্কোর", GetAIReport: "🧠 AI রিপোর্ট পান",
      Analyzing: "বিশ্লেষণ করা হচ্ছে...", AIReport: "AI মানসিক স্বাস্থ্য রিপোর্ট",
      Strengths: "শক্তি", Improve: "উন্নতি", PlayAgain: "আবার খেলুন",
      Moves: "চাল", Complete: "✓ সম্পূর্ণ!", Solved: "✓ সমাধান হয়েছে!", Errors: "ভুল"
    }
  },
  mr: {
    translation: {
      Home: "होम", Knowledge: "ज्ञान", Simulator: "सिम्युलेटर", BrainGames: "ब्रेन गेम्स",
      History: "इतिहास", Admin: "अ‍ॅडमिन", Logout: "लॉगआउट", SignIn: "साइन इन",
      Settings: "सेटिंग्स", CustomKeys: "कस्टम API की", Save: "जतन करा", Close: "बंद करा",
      BG_Sub: "गेम खेळा, गुण मिळवा आणि AI मानसिक आरोग्य विश्लेषण मिळवा",
      YourScores: "तुमचे गुण", GetAIReport: "🧠 AI रिपोर्ट मिळवा",
      Analyzing: "विश्लेषण करत आहे...", AIReport: "AI मानसिक आरोग्य रिपोर्ट",
      Strengths: "ताकद", Improve: "सुधारा", PlayAgain: "पुन्हा खेळा",
      Moves: "चाली", Complete: "✓ पूर्ण झाले!", Solved: "✓ सोडवले!", Errors: "चुका"
    }
  },
  te: {
    translation: {
      Home: "హోమ్", Knowledge: "జ్ఞానం", Simulator: "సిమ్యులేటర్", BrainGames: "బ్రెయిన్ గేమ్స్",
      History: "చరిత్ర", Admin: "అడ్మిన్", Logout: "లాగౌట్", SignIn: "సైన్ ఇన్",
      Settings: "సెట్టింగ్స్", CustomKeys: "కస్టమ్ API కీ", Save: "సేవ్ చేయండి", Close: "మూసివేయి",
      BG_Sub: "గేమ్స్ ఆడండి, స్కోర్లు పొందండి మరియు AI విశ్లేషణను పొందండి",
      YourScores: "మీ స్కోర్లు", GetAIReport: "🧠 AI రిపోర్ట్ పొందండి",
      Analyzing: "విశ్లేషిస్తోంది...", AIReport: "AI మానసిక ఆరోగ్య రిపోర్ట్",
      Strengths: "బలాలు", Improve: "మెరుగుపరచండి", PlayAgain: "మళ్ళీ ఆడండి",
      Moves: "కదలికలు", Complete: "✓ పూర్తయింది!", Solved: "✓ పరిష్కరించబడింది!", Errors: "తప్పులు"
    }
  },
  ta: {
    translation: {
      Home: "முகப்பு", Knowledge: "அறிவு", Simulator: "சிமுலேட்டர்", BrainGames: "மூளை விளையாட்டுகள்",
      History: "வரலாறு", Admin: "நிர்வாகி", Logout: "வெளியேறு", SignIn: "உள்நுழைக",
      Settings: "அமைப்புகள்", CustomKeys: "தனிப்பயன் ஏபிஐ கீ", Save: "சேமி", Close: "மூடு",
      BG_Sub: "விளையாடுங்கள், மதிப்பெண்களைப் பெறுங்கள் மற்றும் AI பகுப்பாய்வைப் பெறுங்கள்",
      YourScores: "உங்கள் மதிப்பெண்கள்", GetAIReport: "🧠 AI அறிக்கை பெறுங்கள்",
      Analyzing: "பகுப்பாய்வு...", AIReport: "AI மனநல அறிக்கை",
      Strengths: "பலங்கள்", Improve: "மேம்படுத்தவும்", PlayAgain: "மீண்டும் விளையாடு",
      Moves: "நகர்வுகள்", Complete: "✓ முடிந்தது!", Solved: "✓ தீர்க்கப்பட்டது!", Errors: "பிழைகள்"
    }
  },
  gu: {
    translation: {
      Home: "હોમ", Knowledge: "જ્ઞાન", Simulator: "સિમ્યુલેટર", BrainGames: "બ્રેઇન ગેમ્સ",
      History: "ઇતિહાસ", Admin: "એડમિન", Logout: "લોગઆઉટ", SignIn: "સાઇન ઇન",
      Settings: "સેટિંગ્સ", CustomKeys: "કસ્ટમ API કી", Save: "સાચવો", Close: "બંધ કરો",
      BG_Sub: "ગેમ્સ રમો, સ્કોર મેળવો અને AI માનસિક સ્વાસ્થ્ય વિશ્લેષણ મેળવો",
      YourScores: "તમારા સ્કોર્સ", GetAIReport: "🧠 AI રિપોર્ટ મેળવો",
      Analyzing: "વિશ્લેષણ કરી રહ્યું છે...", AIReport: "AI માનસિક સ્વાસ્થ્ય રિપોર્ટ",
      Strengths: "તાકાત", Improve: "સુધારો", PlayAgain: "ફરી રમો",
      Moves: "ચાલ", Complete: "✓ પૂર્ણ!", Solved: "✓ ઉકેલાઈ ગયું!", Errors: "ભૂલો"
    }
  },
  ur: {
    translation: {
      Home: "ہوم", Knowledge: "علم", Simulator: "سمیلیٹر", BrainGames: "برین گیمز",
      History: "ہسٹری", Admin: "ایڈمن", Logout: "لاگ آؤٹ", SignIn: "سائن ان",
      Settings: "سیٹنگز", CustomKeys: "کسٹم API کیز", Save: "محفوظ کریں", Close: "بند کریں",
      BG_Sub: "گیمز کھیلیں، اسکورز حاصل کریں اور AI ذہنی صحت کا تجزیہ حاصل کریں",
      YourScores: "آپ کے اسکورز", GetAIReport: "🧠 AI رپورٹ حاصل کریں",
      Analyzing: "تجزیہ ہو رہا ہے...", AIReport: "AI ذہنی صحت کی رپورٹ",
      Strengths: "طاقتیں", Improve: "بہتر کریں", PlayAgain: "دوبارہ کھیلیں",
      Moves: "چالیں", Complete: "✓ مکمل!", Solved: "✓ حل ہو گیا!", Errors: "غلطیاں"
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