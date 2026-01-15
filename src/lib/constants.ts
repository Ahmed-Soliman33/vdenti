// Image imports - Local assets
import heroImage from "@/assets/images/hero-image.webp";
import team1 from "@/assets/images/team-1.webp";
import team2 from "@/assets/images/team-2.webp";
import team3 from "@/assets/images/team-3.webp";
import team4 from "@/assets/images/team-4.webp";
import orthodonticsImage from "@/assets/images/orthodontics.webp";
import dentalImplantsImage from "@/assets/images/dental-implants.webp";
import childrenTeethImage from "@/assets/images/children-teeth.webp";
import aboutSectionImage from "@/assets/images/about-section.webp";
import bannerSectionImage from "@/assets/images/banner-section.webp";
import questionsImage from "@/assets/images/questions.webp";
import logoImage from "@/assets/images/logo.webp";
import heroFloatingIcon1 from "@/assets/images/hero-floating-icon-1.webp";
import heroFloatingIcon2 from "@/assets/images/hero-floating-icon-2.webp";
import partner1 from "@/assets/images/clients-logos/1.png";
import partner2 from "@/assets/images/clients-logos/2.png";
import partner3 from "@/assets/images/clients-logos/3.png";
import partner4 from "@/assets/images/clients-logos/4.png";

// Clinic Information (Placeholder - to be updated with real data)
export const CLINIC_INFO = {
  name: "ڤي دنتي",
  nameEn: "VDenti",
  phone: "+966 XX XXX XXXX",
  email: "info@vdenti.sa",
  whatsapp: "+966XXXXXXXXX",
  address: "الرياض، المملكة العربية السعودية",
  workingHours: "السبت - الخميس: 9 صباحاً - 9 مساءً",
  description:
    "عيادة طبية سعودية رائدة في مجال طب الأسنان تقدم أعلى مستويات الرعاية والجودة",
};

// Social Media Links (Placeholder)
export const SOCIAL_LINKS = {
  instagram: "#",
  twitter: "#",
  facebook: "#",
  snapchat: "#",
  tiktok: "#",
};

// Navigation Links for SPA
export const NAV_LINKS = [
  { id: "home", label: "الرئيسية", href: "#hero" },
  { id: "services", label: "خدماتنا", href: "#services" },
  { id: "about", label: "من نحن", href: "#about" },
  { id: "testimonials", label: "آراء عملائنا", href: "#testimonials" },
  { id: "faq", label: "الأسئلة الشائعة", href: "#faq" },
  { id: "contact", label: "تواصل معنا", href: "#cta" },
];

// Local Images (Production-Ready WebP/PNG)
export const IMAGES = {
  hero: {
    doctor: heroImage,
    floatingIcon1: heroFloatingIcon1,
    floatingIcon2: heroFloatingIcon2,
  },
  services: {
    orthodontics: orthodonticsImage,
    implants: dentalImplantsImage,
    pediatric: childrenTeethImage,
  },
  about: {
    team: aboutSectionImage,
  },
  cta: {
    background: bannerSectionImage,
  },
  faq: {
    background: questionsImage,
  },
  logo: logoImage,
  avatars: [team1, team2, team3, team4],
};

// Stats Data
export const STATS = [
  { value: "+9", label: "من الخبراء" },
  { value: "+6", label: "الأطباء الأمهر" },
  { value: "+10", label: "سنوات الخبرة" },
  { value: "+100", label: "عملاء راضيين" },
];

// Services Data
export const SERVICES = [
  {
    id: "orthodontics",
    icon: "braces",
    image: IMAGES.services.orthodontics,
  },
  {
    id: "implants",
    icon: "tooth",
    image: IMAGES.services.implants,
  },
  {
    id: "pediatric",
    icon: "child",
    image: IMAGES.services.pediatric,
  },
];

// Testimonials Data (Placeholder)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "عبدالله العتيبي",
    initial: "ع",
    rating: 5,
    text: "تجربة رائعة مع فريق طبي محترف جداً. العيادة نظيفة والخدمة ممتازة. أنصح بشدة!",
    color: "#E91E63",
  },
  {
    id: 2,
    name: "فاطمة الشمري",
    initial: "ف",
    rating: 5,
    text: "أفضل عيادة أسنان زرتها. الدكتورة كانت لطيفة جداً وصبورة. النتائج فاقت توقعاتي.",
    color: "#2196F3",
  },
  {
    id: 3,
    name: "محمد الغامدي",
    initial: "م",
    rating: 5,
    text: "خدمة احترافية من البداية للنهاية. التقويم كان مريح جداً والنتيجة مذهلة.",
    color: "#4CAF50",
  },
];

// FAQ Data (Placeholder)
export const FAQS = [
  {
    question: "هل يؤلم تنظيف الأسنان من الجير؟",
    answer:
      "تنظيف الأسنان من الجير إجراء بسيط وغير مؤلم في معظم الحالات. قد تشعر ببعض الحساسية الخفيفة، ولكن يمكن استخدام التخدير الموضعي إذا لزم الأمر.",
  },
  {
    question: "ما هي المدة المطلوبة لعلاج التقويم؟",
    answer:
      "تختلف مدة علاج التقويم حسب حالة الأسنان، ولكن عادة ما تتراوح بين 18-24 شهراً. سيقوم الطبيب بتقييم حالتك وإعطائك جدول زمني دقيق.",
  },
  {
    question: "هل زراعة الأسنان آمنة؟",
    answer:
      "نعم، زراعة الأسنان إجراء آمن وناجح بنسبة تصل إلى 98%. نستخدم أحدث التقنيات والمواد المعتمدة عالمياً لضمان أفضل النتائج.",
  },
  {
    question: "كم مرة يجب أن أزور طبيب الأسنان؟",
    answer:
      "يُنصح بزيارة طبيب الأسنان كل 6 أشهر للفحص الدوري والتنظيف. قد تحتاج لزيارات أكثر تكراراً حسب حالة أسنانك.",
  },
  {
    question: "هل تتعاملون مع شركات التأمين؟",
    answer:
      "نعم، نتعامل مع معظم شركات التأمين الطبي في المملكة. يرجى إحضار بطاقة التأمين الخاصة بك للتحقق من التغطية.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل الدفع النقدي، البطاقات الائتمانية (فيزا، ماستركارد، مدى)، والتحويل البنكي. كما نوفر خطط تقسيط مرنة للعلاجات الكبيرة.",
  },
];

// Partner Logos (Local images)
export const PARTNERS = [
  { id: 1, name: "شريك 1", logo: partner1 },
  { id: 2, name: "شريك 2", logo: partner2 },
  { id: 3, name: "شريك 3", logo: partner3 },
  { id: 4, name: "شريك 4", logo: partner4 },
];

// Features Data
export const FEATURES = [
  {
    id: "quality",
    icon: "star",
  },
  {
    id: "hygiene",
    icon: "heart",
  },
  {
    id: "experience",
    icon: "smile",
  },
];

// Service Types for Contact Form
export const SERVICE_TYPES = [
  { value: "orthodontics", label: "تقويم الأسنان" },
  { value: "implants", label: "زراعة الأسنان" },
  { value: "pediatric", label: "طب أسنان الأطفال" },
  { value: "cosmetic", label: "تجميل الأسنان" },
  { value: "general", label: "فحص عام" },
  { value: "emergency", label: "حالة طارئة" },
  { value: "other", label: "أخرى" },
];

// WhatsApp Helper Function
export const getWhatsAppUrl = (message?: string) => {
  const defaultMessage = `مرحباً، أود الاستفسار عن خدمات ${CLINIC_INFO.name}`;
  const text = message || defaultMessage;
  return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
};

// Phone Helper Function
export const formatPhoneNumber = (phone: string) => {
  // Format: +966 XX XXX XXXX
  return phone.replace(/(\+966)(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
};
