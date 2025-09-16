import { Building, Car, Home, MapPin, Phone } from "lucide-react";

export const navbarLinks = [
  {
    label: "الرئيسية",
    url: "/",
  },
  {
    label: "مشاريع",
    url: "#projects",
  },
  {
    label: "ابدا مشروعك",
    url: "#startyourproject",
  },
  {
    label: "ورش العمل",
    url: "#workshops",
  },
  {
    label: "الشركاء",
    url: "#partners",
  },

  {
    label: "المدونة",
    url: "#blog",
  },
];

export const projects = [
  {
    Icon: Building,
    title: "مشروع 1",
    description: "تطوير تطبيق ذكي يتيح الإبلاغ السريع عن المخاطر والحوادث.",
  },
  {
    Icon: Car,
    title: "مشروع 2",
    description:
      "منصة تعليمية رقمية مخصصة لنشر الوعي الوقائي في المدارس والجامعات.",
  },
  {
    Icon: Home,
    title: "مشروع 3",
    description:
      "تصميم حلول مستدامة وصديقة للبيئة لرفع مستويات السلامة في المرافق العامة.",
  },
];

export const partnersLogos = [
  {
    id: "1",
    src: "/images/partnersLogo/iceberg.svg",
    companyName: "Iceberg",
  },
  {
    id: "2",
    src: "/images/partnersLogo/miro.svg",
    companyName: "Miro",
  },
  {
    id: "3",
    src: "/images/partnersLogo/pinpoint.svg",
    companyName: "Pinpoint",
  },
  {
    id: "4",
    src: "/images/partnersLogo/rise.svg",
    companyName: "Rise",
  },
  {
    id: "5",
    src: "/images/partnersLogo/vision.svg",
    companyName: "Vision",
  },
  {
    id: "6",
    src: "/images/partnersLogo/sitemark.svg",
    companyName: "Sitemark",
  },
];

export const projectsIdeas = [
  {
    Icon: Building,
    title: "فكرة المشروع 1",
    description: "ابتكار جهاز ذكي للكشف المبكر عن الحرائق في المنازل.",
  },
  {
    Icon: Car,
    title: "فكرة المشروع 2",
    description:
      "تطوير تطبيق لتتبع مواقع الأطفال وضمان سلامتهم في الأماكن العامة.",
  },
  {
    Icon: Home,
    title: "فكرة المشروع 3",
    description: "حلول تقنية للتقليل من مخاطر الكوارث الطبيعية.",
  },
];

export const socialMediaLinks = [
  {
    id: "facebook",
    src: "/images/socialMediaLogos/facebook.svg",
    url: "https://www.facebook.com",
  },
  {
    id: "dribble",
    src: "/images/socialMediaLogos/dribble.svg",
    url: "https://www.dribble.com",
  },
  {
    id: "behance",
    src: "/images/socialMediaLogos/linkedin.svg",
    url: "https://www.linkedin.com",
  },
  {
    id: "x",
    src: "/images/socialMediaLogos/X.svg",
    url: "https://www.x.com",
  },
  {
    id: "github",
    src: "/images/socialMediaLogos/github.svg",
    url: "https://www.github.com",
  },
];

export const contactInfo = [
  {
    id: "1",
    icon: MapPin,
    title: "العنوان",
    description: "الرياض, المملكة العربية السعودية",
  },
  {
    id: "2",
    icon: Phone,
    title: "رقم الهاتف",
    description: "‎+966 567 234 890",
  },
];

export const workshopTags = [
  { id: "1", icon: Building, title: "ورشة الإسعافات الأولية." },
  { id: "2", icon: Building, title: "ورشة معايير السلامة في بيئة العمل." },
  { id: "3", icon: Building, title: "ورشة التوعية البيئية والاستدامة." },
];

export const blogs = [
  {
    img: "/images/blogsImages/blog1.png",
    date: "28 فبراير 2023",
    title: "استراتيجيات الحفاظ على الغابات والحد من مخاطر الحرائق.",
    description:
      "تتعرض النظم البيئية البحرية لمخاطر متزايدة بسبب النفايات الصناعية والتلوث الكيميائي. تسلط هذه المقالة الضوء على أهمية حماية البحار والمحيطات للحفاظ على التنوع البيولوجي وضمان استدامة الموارد البحرية للأجيال القادمة.",
    category: "البيئة البحرية 🌊",
  },
  {
    img: "/images/blogsImages/blog2.png",
    date: "28 فبراير 2023",
    title: "الطاقة المتجددة ودورها في تحقيق الاستدامة البيئية.",
    description:
      "تشكل مصادر الطاقة المتجددة، مثل الطاقة الشمسية والرياح، حلاً فعالاً للحد من الانبعاثات الضارة وتقليل الاعتماد على الوقود الأحفوري. توضح المقالة كيف تساهم الطاقة النظيفة في بناء مستقبل أكثر أماناً واستدامة.",
    category: "الطاقة المستدامة ⚡",
  },
  {
    img: "/images/blogsImages/blog3.png",
    date: "28 فبراير 2023",
    title: "أهمية حماية البيئة البحرية من الملوثات الصناعية.",
    description:
      "الغابات تعد رئة الكوكب ومصدراً أساسياً للتنوع البيولوجي. تستعرض المقالة أهم الاستراتيجيات والبرامج الوقائية للحد من مخاطر الحرائق وضمان استدامة الغطاء النباتي.",
    category: "الحفاظ على الموارد الطبيعية 🌲",
  },
];
