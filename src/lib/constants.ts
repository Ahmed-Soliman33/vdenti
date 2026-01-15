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

// Unsplash Images (Production-Ready)
export const IMAGES = {
  hero: {
    doctor:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    // Professional female dentist in medical attire
  },
  services: {
    orthodontics:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    // Close-up of braces/orthodontic treatment
    implants:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    // Dental implant or restoration work
    pediatric:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    // Child with healthy smile
  },
  about: {
    team: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80",
    // Medical team or dental professionals group photo
  },
  cta: {
    background:
      "https://images.unsplash.com/photo-1629909615957-be38f89d485e?auto=format&fit=crop&w=1600&q=80",
    // Modern dental clinic interior
  },
  partners: {
    placeholder:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&q=80",
  },
  avatars: [
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
  ],
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

// Partner Logos (Placeholder - will be replaced with actual logos)
export const PARTNERS = [
  { id: 1, name: "وزارة الصحة", logo: "/partners/moh.png" },
  { id: 2, name: "الهيئة السعودية للتخصصات الصحية", logo: "/partners/scfhs.png" },
  { id: 3, name: "رؤية 2030", logo: "/partners/vision2030.png" },
  { id: 4, name: "مجلس الضمان الصحي", logo: "/partners/chi.png" },
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
