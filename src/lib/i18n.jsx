import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", call: "Call" },
    home: {
      eyebrow: "Creative software house & growth agency",
      title: "Websites, brands and marketing that make your business look premium.",
      intro: "HA Developers designs modern websites, SEO campaigns, digital ads, and brand visuals for businesses that want more trust, more leads, and a sharper online presence.",
      start: "Start a Project",
      portfolio: "See Portfolio",
      heroCardTitle: "Premium digital presence",
      heroCardText: "Strategy, design, development and marketing working together for visible growth.",
      servicesTitle: "Everything your business needs to grow online",
      servicesText: "A focused digital agency stack: websites, apps, branding, SEO, social media, ads, and design.",
      styleTitle: "Clean design, sharp messaging, and conversion-focused layouts",
      styleText: "We create a complete brand experience that guides visitors toward calls, WhatsApp messages, forms, and sales.",
      included: "Simple, focused delivery",
      portfolioTitle: "Work categories built for modern businesses",
      processTitle: "A simple process with polished execution",
      quote: "Get a free quote",
      owner: "Meet the owner",
      cta: "Let’s build a digital presence your customers trust.",
      ctaBtn: "Talk to HA Developers"
    },
    form: {
      name: "Your name",
      email: "Email address",
      phone: "Phone / WhatsApp",
      selectService: "Select service",
      language: "Website language",
      message: "Tell us about your project",
      send: "Send Request"
    },
    footer: { services: "Services", company: "Company", contact: "Contact", privacy: "Privacy Policy", line: "Creative software house & digital agency." }
  },
  ur: {
    nav: { home: "ہوم", about: "ہمارے بارے میں", services: "سروسز", portfolio: "پورٹ فولیو", contact: "رابطہ", call: "کال" },
    home: {
      eyebrow: "کری ایٹو سافٹ ویئر ہاؤس اور گروتھ ایجنسی",
      title: "ویب سائٹس، برانڈنگ اور مارکیٹنگ جو آپ کے بزنس کو پریمیم بنائے۔",
      intro: "HA Developers جدید ویب سائٹس، SEO، ڈیجیٹل ایڈز اور برانڈ ویژولز بناتا ہے تاکہ آپ کے بزنس کو زیادہ اعتماد، لیڈز اور بہتر آن لائن پہچان ملے۔",
      start: "پروجیکٹ شروع کریں",
      portfolio: "پورٹ فولیو دیکھیں",
      heroCardTitle: "پریمیم ڈیجیٹل موجودگی",
      heroCardText: "اسٹریٹجی، ڈیزائن، ڈیولپمنٹ اور مارکیٹنگ ایک ساتھ واضح گروتھ کے لیے۔",
      servicesTitle: "آپ کے بزنس کی آن لائن گروتھ کے لیے مکمل سروسز",
      servicesText: "ویب سائٹس، ایپس، برانڈنگ، SEO، سوشل میڈیا، ایڈز اور ڈیزائن۔",
      styleTitle: "صاف ڈیزائن، مضبوط میسجنگ اور کنورژن فوکسڈ لے آؤٹس",
      styleText: "ہم ایسا برانڈ تجربہ بناتے ہیں جو وزٹرز کو کال، واٹس ایپ، فارم اور سیلز کی طرف لے جائے۔",
      included: "سادہ اور فوکسڈ ڈیلیوری",
      portfolioTitle: "ماڈرن بزنسز کے لیے ورک کیٹیگریز",
      processTitle: "پالشڈ کام کے ساتھ آسان پراسیس",
      quote: "فری کوٹ حاصل کریں",
      owner: "اونر سے ملیں",
      cta: "آئیں ایسی ڈیجیٹل موجودگی بنائیں جس پر کسٹمرز اعتماد کریں۔",
      ctaBtn: "HA Developers سے بات کریں"
    },
    form: {
      name: "آپ کا نام",
      email: "ای میل ایڈریس",
      phone: "فون / واٹس ایپ",
      selectService: "سروس منتخب کریں",
      language: "ویب سائٹ کی زبان",
      message: "اپنے پروجیکٹ کے بارے میں لکھیں",
      send: "درخواست بھیجیں"
    },
    footer: { services: "سروسز", company: "کمپنی", contact: "رابطہ", privacy: "پرائیویسی پالیسی", line: "کری ایٹو سافٹ ویئر ہاؤس اور ڈیجیٹل ایجنسی۔" }
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", services: "الخدمات", portfolio: "الأعمال", contact: "تواصل", call: "اتصال" },
    home: {
      eyebrow: "شركة برمجيات ووكالة نمو رقمية",
      title: "مواقع وهوية وتسويق تجعل عملك يبدو احترافياً.",
      intro: "تصمم HA Developers مواقع حديثة وحملات SEO وإعلانات رقمية وهوية بصرية للشركات التي تريد ثقة أكبر وعملاء أكثر وحضوراً أقوى.",
      start: "ابدأ مشروعك",
      portfolio: "شاهد الأعمال",
      heroCardTitle: "حضور رقمي احترافي",
      heroCardText: "استراتيجية وتصميم وتطوير وتسويق يعملون معاً لتحقيق نمو واضح.",
      servicesTitle: "كل ما يحتاجه عملك للنمو أونلاين",
      servicesText: "مواقع، تطبيقات، هوية، SEO، سوشيال ميديا، إعلانات وتصميم.",
      styleTitle: "تصميم نظيف ورسائل قوية وتجربة موجهة للتحويل",
      styleText: "نصنع تجربة علامة تجارية تقود الزائر إلى الاتصال والواتساب والنماذج والمبيعات.",
      included: "تنفيذ واضح ومركّز",
      portfolioTitle: "تصنيفات أعمال للشركات الحديثة",
      processTitle: "عملية بسيطة بتنفيذ احترافي",
      quote: "احصل على عرض مجاني",
      owner: "تعرف على المالك",
      cta: "لنصنع حضوراً رقمياً يثق به عملاؤك.",
      ctaBtn: "تحدث مع HA Developers"
    },
    form: {
      name: "اسمك",
      email: "البريد الإلكتروني",
      phone: "الهاتف / واتساب",
      selectService: "اختر الخدمة",
      language: "لغة الموقع",
      message: "اكتب تفاصيل مشروعك",
      send: "إرسال الطلب"
    },
    footer: { services: "الخدمات", company: "الشركة", contact: "تواصل", privacy: "سياسة الخصوصية", line: "شركة برمجيات ووكالة رقمية إبداعية." }
  }
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("ha-language") || "en");

  useEffect(() => {
    localStorage.setItem("ha-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
