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
      Moves: "Moves", Complete: "✓ Complete!", Solved: "✓ Solved!", Errors: "Errors",
      // HOME PAGE TRANSLATIONS
      AI_Badge: "⚡ AI-POWERED HEALTH ANALYSIS",
      Hero1: "Your Digital", Hero2: "Health Twin",
      HeroDesc: "Simulate your body, map organ risks, predict your future health — all powered by AI. Know your risks before they become problems.",
      OpenSim: "Open Simulator →", GetStarted: "Get Started Free →",
      Inputs: "Health Inputs", RiskMaps: "Organ Risk Maps", AIForecasts: "AI Forecasts", BGames: "Brain Games",
      SimDesc: "Enter your vitals and get AI-powered organ risk analysis with a 3D body map.",
      BrainDesc: "Test memory, reaction time, and pattern recognition. Get AI mental health scores.",
      KnowDesc: "Browse health articles, tips, and medical knowledge organized by category.",
      HistDesc: "Track your simulation history and monitor health trends over time.",
      OpenBtn: "Open →"
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
      Moves: "चालें", Complete: "✓ पूरा हुआ!", Solved: "✓ हल हो गया!", Errors: "गलतियां",
      AI_Badge: "⚡ एआई-संचालित स्वास्थ्य विश्लेषण",
      Hero1: "आपका डिजिटल", Hero2: "हेल्थ ट्विन",
      HeroDesc: "अपने शरीर को अनुकरण करें, अंग जोखिमों का नक्शा बनाएं, अपने भविष्य के स्वास्थ्य की भविष्यवाणी करें — सब कुछ एआई द्वारा संचालित।",
      OpenSim: "सिम्युलेटर खोलें →", GetStarted: "मुफ्त में शुरू करें →",
      Inputs: "स्वास्थ्य इनपुट", RiskMaps: "अंग जोखिम मानचित्र", AIForecasts: "एआई पूर्वानुमान", BGames: "ब्रेन गेम्स",
      SimDesc: "अपने महत्वपूर्ण अंग दर्ज करें और 3D बॉडी मैप के साथ एआई-संचालित अंग जोखिम विश्लेषण प्राप्त करें।",
      BrainDesc: "मेमोरी, प्रतिक्रिया समय और पैटर्न पहचान का परीक्षण करें। एआई मानसिक स्वास्थ्य स्कोर प्राप्त करें।",
      KnowDesc: "श्रेणी के अनुसार आयोजित स्वास्थ्य लेख, सुझाव और चिकित्सा ज्ञान ब्राउज़ करें।",
      HistDesc: "अपने सिमुलेशन इतिहास को ट्रैक करें और समय के साथ स्वास्थ्य प्रवृत्तियों की निगरानी करें।",
      OpenBtn: "खोलें →"
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
      Moves: "চাল", Complete: "✓ সম্পূর্ণ!", Solved: "✓ সমাধান হয়েছে!", Errors: "ভুল",
      AI_Badge: "⚡ এআই-চালিত স্বাস্থ্য বিশ্লেষণ",
      Hero1: "আপনার ডিজিটাল", Hero2: "হেলথ টুইন",
      HeroDesc: "আপনার শরীরের অনুকরণ করুন, অঙ্গের ঝুঁকি ম্যাপ করুন, আপনার ভবিষ্যতের স্বাস্থ্যের পূর্বাভাস দিন — সবই AI দ্বারা চালিত।",
      OpenSim: "সিমুলেটর খুলুন →", GetStarted: "বিনামূল্যে শুরু করুন →",
      Inputs: "স্বাস্থ্য ইনপুট", RiskMaps: "অঙ্গের ঝুঁকি ম্যাপ", AIForecasts: "এআই পূর্বাভাস", BGames: "ব্রেন গেমস",
      SimDesc: "আপনার গুরুত্বপূর্ণ তথ্য লিখুন এবং একটি 3D বডি ম্যাপ সহ AI-চালিত অঙ্গের ঝুঁকি বিশ্লেষণ পান।",
      BrainDesc: "মেমরি, প্রতিক্রিয়া সময় এবং প্যাটার্ন স্বীকৃতি পরীক্ষা করুন। AI মানসিক স্বাস্থ্য স্কোর পান।",
      KnowDesc: "বিভাগ দ্বারা সংগঠিত স্বাস্থ্য নিবন্ধ, টিপস, এবং চিকিৎসা জ্ঞান ব্রাউজ করুন।",
      HistDesc: "আপনার সিমুলেশন ইতিহাস ট্র্যাক করুন এবং সময়ের সাথে স্বাস্থ্য প্রবণতা নিরীক্ষণ করুন।",
      OpenBtn: "খুলুন →"
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
      Moves: "चाली", Complete: "✓ पूर्ण झाले!", Solved: "✓ सोडवले!", Errors: "चुका",
      AI_Badge: "⚡ AI-चालित आरोग्य विश्लेषण",
      Hero1: "तुमचा डिजिटल", Hero2: "हेल्थ ट्विन",
      HeroDesc: "तुमच्या शरीराचे अनुकरण करा, अवयवांच्या धोक्यांचा नकाशा तयार करा, तुमच्या भविष्यातील आरोग्याचा अंदाज घ्या — सर्व काही AI द्वारे समर्थित.",
      OpenSim: "सिम्युलेटर उघडा →", GetStarted: "मोफत सुरुवात करा →",
      Inputs: "आरोग्य इनपुट्स", RiskMaps: "अवयव धोका नकाशे", AIForecasts: "AI अंदाज", BGames: "ब्रेन गेम्स",
      SimDesc: "तुमची महत्त्वाची माहिती प्रविष्ट करा आणि 3D बॉडी मॅपसह AI-चालित अवयव धोका विश्लेषण मिळवा.",
      BrainDesc: "मेमरी, प्रतिक्रिया वेळ आणि पॅटर्न ओळखण्याची चाचणी घ्या. AI मानसिक आरोग्य गुण मिळवा.",
      KnowDesc: "श्रेणीनुसार आयोजित केलेले आरोग्य लेख, टिपा आणि वैद्यकीय ज्ञान ब्राउझ करा.",
      HistDesc: "तुमच्या सिम्युलेशन इतिहासाचा मागोवा घ्या आणि कालांतराने आरोग्य प्रवृत्तींचे निरीक्षण करा.",
      OpenBtn: "उघडा →"
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
      Moves: "కదలికలు", Complete: "✓ పూర్తయింది!", Solved: "✓ పరిష్కరించబడింది!", Errors: "తప్పులు",
      AI_Badge: "⚡ AI-ఆధారిత ఆరోగ్య విశ్లేషణ",
      Hero1: "మీ డిజిటల్", Hero2: "హెల్త్ ట్విన్",
      HeroDesc: "మీ శరీరాన్ని అనుకరించండి, అవయవ ప్రమాదాలను మ్యాప్ చేయండి, మీ భవిష్యత్తు ఆరోగ్యాన్ని అంచనా వేయండి — అన్నీ AI ద్వారా.",
      OpenSim: "సిమ్యులేటర్ తెరవండి →", GetStarted: "ఉచితంగా ప్రారంభించండి →",
      Inputs: "ఆరోగ్య ఇన్‌పుట్‌లు", RiskMaps: "అవయవ ప్రమాద మ్యాప్‌లు", AIForecasts: "AI అంచనాలు", BGames: "బ్రెయిన్ గేమ్స్",
      SimDesc: "మీ కీలక వివరాలను నమోదు చేయండి మరియు 3D బాడీ మ్యాప్‌తో AI విశ్లేషణను పొందండి.",
      BrainDesc: "జ్ఞాపకశక్తి, ప్రతిచర్య సమయం మరియు నమూనా గుర్తింపును పరీక్షించండి. AI మానసిక ఆరోగ్య స్కోర్‌లను పొందండి.",
      KnowDesc: "వర్గాల వారీగా నిర్వహించబడిన ఆరోగ్య కథనాలు, చిట్కాలు మరియు వైద్య జ్ఞానాన్ని బ్రౌజ్ చేయండి.",
      HistDesc: "మీ అనుకరణ చరిత్రను ట్రాక్ చేయండి మరియు కాలక్రమేణా ఆరోగ్య ధోరణులను పర్యవేక్షించండి.",
      OpenBtn: "తెరవండి →"
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
      Moves: "நகர்வுகள்", Complete: "✓ முடிந்தது!", Solved: "✓ தீர்க்கப்பட்டது!", Errors: "பிழைகள்",
      AI_Badge: "⚡ AI-ஆதரவு சுகாதார பகுப்பாய்வு",
      Hero1: "உங்கள் டிஜிட்டல்", Hero2: "ஹெல்த் ட்வின்",
      HeroDesc: "உங்கள் உடலை உருவகப்படுத்துங்கள், உறுப்பு அபாயங்களை வரைபடமாக்குங்கள், உங்கள் எதிர்கால ஆரோக்கியத்தை கணிக்கவும் — அனைத்தும் AI ஆல்.",
      OpenSim: "சிமுலேட்டரைத் திற →", GetStarted: "இலவசமாகத் தொடங்குங்கள் →",
      Inputs: "சுகாதார உள்ளீடுகள்", RiskMaps: "உறுப்பு அபாய வரைபடங்கள்", AIForecasts: "AI கணிப்புகள்", BGames: "மூளை விளையாட்டுகள்",
      SimDesc: "உங்கள் முக்கிய தரவை உள்ளிட்டு 3D வரைபடத்துடன் AI பகுப்பாய்வைப் பெறுங்கள்.",
      BrainDesc: "நினைவகம், எதிர்வினை நேரம் மற்றும் வடிவ அங்கீகாரத்தை சோதிக்கவும். AI மனநல மதிப்பெண்களைப் பெறுங்கள்.",
      KnowDesc: "வகை வாரியாக ஒழுங்கமைக்கப்பட்ட சுகாதார கட்டுரைகள் மற்றும் மருத்துவ அறிவை உலாவுக.",
      HistDesc: "உங்கள் உருவகப்படுத்துதல் வரலாற்றைக் கண்காணித்து, சுகாதாரப் போக்குகளைக் கண்காணிக்கவும்.",
      OpenBtn: "திற →"
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
      Moves: "ચાલ", Complete: "✓ પૂર્ણ!", Solved: "✓ ઉકેલાઈ ગયું!", Errors: "ભૂલો",
      AI_Badge: "⚡ AI-સંચાલિત આરોગ્ય વિશ્લેષણ",
      Hero1: "તમારું ડિજિટલ", Hero2: "હેલ્થ ટ્વીન",
      HeroDesc: "તમારા શરીરનું અનુકરણ કરો, અંગના જોખમોનો નકશો બનાવો, તમારા ભવિષ્યના સ્વાસ્થ્યની આગાહી કરો — બધું AI દ્વારા.",
      OpenSim: "સિમ્યુલેટર ખોલો →", GetStarted: "મફતમાં શરૂ કરો →",
      Inputs: "આરોગ્ય ઇનપુટ્સ", RiskMaps: "અંગ જોખમ નકશા", AIForecasts: "AI આગાહીઓ", BGames: "બ્રેઇન ગેમ્સ",
      SimDesc: "તમારી મહત્વપૂર્ણ માહિતી દાખલ કરો અને 3D બોડી મેપ સાથે AI-સંચાલિત અંગ જોખમ વિશ્લેષણ મેળવો.",
      BrainDesc: "મેમરી, પ્રતિક્રિયા સમય અને પેટર્ન માન્યતાનું પરીક્ષણ કરો. AI માનસિક સ્વાસ્થ્ય સ્કોર્સ મેળવો.",
      KnowDesc: "શ્રેણી દ્વારા આયોજિત આરોગ્ય લેખો, ટીપ્સ અને તબીબી જ્ઞાન બ્રાઉઝ કરો.",
      HistDesc: "તમારા સિમ્યુલેશન ઇતિહાસને ટ્રૅક કરો અને સમય જતાં આરોગ્યના વલણોનું નિરીક્ષણ કરો.",
      OpenBtn: "ખોલો →"
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
      Moves: "چالیں", Complete: "✓ مکمل!", Solved: "✓ حل ہو گیا!", Errors: "غلطیاں",
      AI_Badge: "⚡ AI سے چلنے والا صحت کا تجزیہ",
      Hero1: "آپ کا ڈیجیٹل", Hero2: "ہیلتھ ٹوئن",
      HeroDesc: "اپنے جسم کی نقل بنائیں، اعضاء کے خطرات کا نقشہ بنائیں، اپنی مستقبل کی صحت کی پیش گوئی کریں — سب AI کے ذریعے۔",
      OpenSim: "سمیلیٹر کھولیں →", GetStarted: "مفت شروع کریں →",
      Inputs: "ہیلتھ ان پٹس", RiskMaps: "اعضاء کے خطرے کے نقشے", AIForecasts: "AI پیش گوئیاں", BGames: "برین گیمز",
      SimDesc: "اپنے اہم اعداد و شمار درج کریں اور 3D باڈی میپ کے ساتھ AI سے چلنے والا اعضاء کے خطرے کا تجزیہ حاصل کریں۔",
      BrainDesc: "یادداشت، ردعمل کے وقت اور پیٹرن کی شناخت کا ٹیسٹ کریں۔ AI ذہنی صحت کے اسکور حاصل کریں۔",
      KnowDesc: "زمرہ کے لحاظ سے ترتیب دیئے گئے صحت کے مضامین، تجاویز، اور طبی علم براؤز کریں۔",
      HistDesc: "اپنی نقلی تاریخ کو ٹریک کریں اور وقت کے ساتھ ساتھ صحت کے رجحانات کی نگرانی کریں۔",
      OpenBtn: "کھولیں →"
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