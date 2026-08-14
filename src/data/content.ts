import { sanitizeInput } from "../lib/sanitize";

export const WHATSAPP_NUMBER =
  (import.meta.env?.VITE_WHATSAPP_NUMBER as string) || "919839591207";




export const CONTACT_EMAIL =
  (import.meta.env?.VITE_CONTACT_EMAIL as string) || "hello@arkoseinfosoft.in";

export const SUPPORT_PHONE =
  (import.meta.env?.VITE_SUPPORT_PHONE as string) || "+91 98395 91207";

export const whatsappLink = (text: string) => {
  const clean = sanitizeInput(text, 500);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(clean)}`;
};

export const stats = [
  { value: "320+", label: "प्रीमियम वेबसाइट्स डिलीवर कीं" },
  { value: "₹999", label: "फिक्स प्राइस, कोई छुपा चार्ज नहीं" },
  { value: "24–48 घं.", label: "डिज़ाइन से डिलीवरी तक" },
];

export const included = [
  "बोनस: फ्री ब्रांड लोगो डिज़ाइन",
  "सर्विसेज़ की डिटेल और कस्टमर रिव्यू सेक्शन",
  "WhatsApp चैट बटन और क्लिक-टू-कॉल — सीधे लीड आपके पास",
  "SSL सर्टिफिकेट + Cloudflare CDN सिक्योरिटी",
  "24–48 घंटे में डिलीवरी, 100% मोबाइल-फ्रेंडली",
];

export const excluded = [
  "मल्टी-पेज साइट, यूज़र लॉगिन, ई-कॉमर्स कार्ट — इनके लिए अलग चार्ज लगेगा",
  "₹20,000–₹25,000 वाली प्रीमियम मल्टी-फीचर वेबसाइट चाहिए तो पहले हमसे बात करें",
];

export const problems = [
  {
    title: "Google पर गुमनामी",
    body: "जब आपके शहर के लोग आपकी सर्विस सर्च करते हैं, आपका बिज़नेस कहीं नहीं दिखता — ग्राहक ढूंढ ही नहीं पाते।",
  },
  {
    title: "Competitors ले जा रहे हैं ग्राहक",
    body: "जिनके पास सामान्य सी भी वेबसाइट है, लोग उन पर आसानी से भरोसा कर लेते हैं। हर दिन कस्टमर्स खो रहे हैं।",
  },
  {
    title: "भरोसे की कमी",
    body: "ग्राहक किसी भी दुकान पर जाने से पहले उसकी ऑनलाइन प्रोफाइल देखना पसंद करता है। वेबसाइट न होना साख घटाता है।",
  },
];

export const whyUs = [
  {
    title: "24–48 घंटे डिलीवरी",
    body: "Advanced AI setups और हमारी expert टीम मिलकर आपकी वेबसाइट 1–2 दिन में लाइव कर देगी।",
  },
  {
    title: "होस्टिंग में पूरी पारदर्शिता",
    body: "डोमेन-होस्टिंग आपकी रहेगी। बजट न हो तो Free Lifetime Hosting पर भी सेटअप कर देंगे — चॉइस आपकी।",
  },
  {
    title: "कोई एडवांस पेमेंट नहीं",
    body: "पहले लाइव वेबसाइट बनाकर दिखाएंगे, 100% पसंद आने पर ही भुगतान करें। पूरी तरह रिस्क-फ्री।",
  },
];

export const demos = [
  { cat: "Photography Studio", name: "Monika Studio Pro", desc: "प्रोफेशनल फोटोग्राफी पोर्टफोलियो, स्टूडियो बुकिंग और क्लाइंट गैलरी के साथ क्रिएटिव वेबसाइट।", url: "https://monika-studio-pro.vercel.app/" },
  { cat: "Hotel & Dining", name: "Hotel View Demo", desc: "डिजिटल मेन्यू कार्ड, रूम बुकिंग और टेबल रिज़र्वेशन के साथ प्रीमियम होटल वेबसाइट।", url: "https://hotel-view-demo.vercel.app/" },
  { cat: "Solar Energy", name: "Solis Solar", desc: "सोलर पैनल इंस्टॉलेशन, एनर्जी सेविंग कैलकुलेटर और लीड जेनरेशन के साथ सोलर कंपनी वेबसाइट।", url: "https://solis-solar.vercel.app/" },
  { cat: "Dental Clinic", name: "Aurelia Dental", desc: "ऑनलाइन अपॉइंटमेंट, डेंटल सर्विसेज़ और डॉक्टर प्रोफाइल के साथ मॉडर्न डेंटल क्लिनिक वेबसाइट।", url: "https://aurelia-dental-jade.vercel.app/" },
  { cat: "Education & Academy", name: "Uttarayan Academy", desc: "कोर्स लिस्टिंग, ऑनलाइन एडमिशन और स्टूडेंट पोर्टल के साथ प्रोफेशनल एकेडमी वेबसाइट।", url: "https://uttarayan-academy.vercel.app/" },
  { cat: "Cafe & Restaurant", name: "Luxe Cafe", desc: "डिजिटल मेन्यू, टेबल बुकिंग और स्पेशल ऑफर्स के साथ लग्जरी कैफे वेबसाइट।", url: "https://luxe-cafe-nu.vercel.app/" },
  { cat: "Law Firm", name: "Law Firm & Atelier Lumiere", desc: "लीगल सर्विसेज़, वकील प्रोफाइल और केस कंसल्टेशन बुकिंग के साथ प्रोफेशनल लॉ फर्म वेबसाइट।", url: "https://lawfirm-site-ochre.vercel.app/" },
  { cat: "Automobile & Luxury", name: "Auto Luxe", desc: "प्रीमियम कार शोरूम, टेस्ट ड्राइव बुकिंग और लक्जरी व्हीकल शोकेस के साथ ऑटो वेबसाइट।", url: "https://auto-luxe-seven.vercel.app/" },
  { cat: "Interior & Furniture", name: "Modular Luxe", desc: "मॉड्यूलर किचन, इंटीरियर डिज़ाइनिंग और मॉडर्न फर्नीचर शोकेस के लिए वेबसाइट।", url: "https://modular-luxe.vercel.app/" },
  { cat: "Creative Studio", name: "Atelier Lumiere", desc: "क्रिएटिव आर्ट स्टूडियो, पोर्टफोलियो शोकेस और क्लाइंट प्रोजेक्ट गैलरी के साथ बेहतरीन वेबसाइट।", url: "https://atelier-lumiere-xi.vercel.app/" },
];

export interface IndustryItem {
  id: string;
  name: string;
  nameEn: string;
  category: "all" | "services" | "retail" | "health" | "food" | "education";
  iconName: string;
  features: string[];
  popular?: boolean;
}

export const industryCategories = [
  { id: "health", label: "हेल्थ & ब्यूटी" },
  { id: "food", label: "फूड & रेस्टोरेंट" },
  { id: "retail", label: "दुकानें & रिटेल" },
  { id: "education", label: "एजुकेशन & फिटनेस" },
  { id: "services", label: "सर्विसेज़ & प्रोफेशनल्स" },
  { id: "all", label: "सभी (All 12+)" },
];

export const industries: IndustryItem[] = [
  {
    id: "real-estate",
    name: "प्रॉपर्टी & रियल एस्टेट",
    nameEn: "Real Estate & Builders",
    category: "services",
    iconName: "Building2",
    popular: true,
    features: ["प्रॉपर्टी लिस्टिंग", "लोकेशन मैप", "WhatsApp लीड्स"],
  },
  {
    id: "salons",
    name: "सैलून, स्पा & ब्यूटी",
    nameEn: "Salons & Spa",
    category: "health",
    iconName: "Scissors",
    popular: true,
    features: ["रेट लिस्ट मेन्यू", "अपॉइंटमेंट बुकिंग", "फोटो गैलरी"],
  },
  {
    id: "doctors",
    name: "डॉक्टर्स & क्लिनिक्स",
    nameEn: "Doctors & Clinics",
    category: "health",
    iconName: "Stethoscope",
    popular: true,
    features: ["ओपीडी टाइमिंग्स", "डॉक्टर प्रोफाइल", "ऑनलाइन अपॉइंटमेंट"],
  },
  {
    id: "restaurants",
    name: "रेस्टोरेंट, कैफे & ढाबा",
    nameEn: "Restaurants & Cafes",
    category: "food",
    iconName: "UtensilsCrossed",
    popular: true,
    features: ["डिजिटल मेन्यू कार्ड", "टेबल बुकिंग", "डायरेक्ट कॉल"],
  },
  {
    id: "retail",
    name: "दुकानें & शोरूम्स",
    nameEn: "Retail Stores & Shops",
    category: "retail",
    iconName: "ShoppingBag",
    features: ["प्रोडक्ट शोकेस", "ऑफर बैनर", "Google Maps"],
  },
  {
    id: "coaching",
    name: "कोचिंग & स्कूल",
    nameEn: "Schools & Coaching",
    category: "education",
    iconName: "GraduationCap",
    features: ["कोर्स डिटेल्स", "टॉपर्स रिजल्ट्स", "एडमिशन इन्क्वायरी"],
  },
  {
    id: "lawyers",
    name: "वकील & लीगल फर्म्स",
    nameEn: "Lawyers & Legal",
    category: "services",
    iconName: "Scale",
    features: ["केस कंसल्टेशन", "लीगल सर्विसेज़", "क्लाइंट फॉर्म"],
  },
  {
    id: "travel",
    name: "ट्रेवल & टूर एजेंसीज़",
    nameEn: "Tours & Travel",
    category: "services",
    iconName: "Plane",
    features: ["टूर पैकेजेस", "गाड़ी बुकिंग", "कस्टमर रिव्यू"],
  },
  {
    id: "gyms",
    name: "जिम & फिटनेस सेंटर",
    nameEn: "Gyms & Fitness",
    category: "education",
    iconName: "Dumbbell",
    popular: true,
    features: ["मेंबरशिप प्लान्स", "ट्रेनर प्रोफाइल", "फ्री ट्रायल"],
  },
  {
    id: "auto",
    name: "कार शोरूम & गैरेज",
    nameEn: "Auto & Mechanics",
    category: "services",
    iconName: "Car",
    features: ["गाड़ी मॉडल्स", "सर्विस बुकिंग", "इमरजेंसी नंबर"],
  },
  {
    id: "interior",
    name: "इंटीरियर & फर्नीचर",
    nameEn: "Interior & Decor",
    category: "retail",
    iconName: "Layers",
    features: ["3D वर्क शोकेस", "मटेरियल डिटेल", "फ्री कोटेशन"],
  },
  {
    id: "consultants",
    name: "कंसल्टेंट्स & CA",
    nameEn: "Consultants & CA",
    category: "services",
    iconName: "Briefcase",
    features: ["सर्विस पैकेजेस", "क्लाइंट टेस्टिमोनियल", "कॉल शेड्यूलिंग"],
  },
];

export const pricingPlans = [
  {
    flag: "स्पेशल लिमिटेड-टाइम ऑफर",
    tone: "gold" as const,
    title: "Premium Business Website",
    desc: "आपके बिज़नेस के लिए सुंदर, सुपर-फ़ास्ट और मोबाइल-फ्रेंडली सिंगल-पेज वेबसाइट",
    now: "₹999",
    was: "₹8,999",
    discount: "80% OFF",
    unit: "वन-टाइम फिक्स फीस · कोई छुपा चार्ज नहीं",
    features: [
      "Responsive Premium Layout (मोबाइल + कंप्यूटर)",
      "Free Lifetime Hosting सपोर्ट या आपकी पसंद का सर्वर सेटअप",
      "WhatsApp चैट और डायरेक्ट कॉल बटन (सीधे ग्राहक आपसे जुड़ेंगे)",
      "बिज़नेस फोटो गैलरी, सर्विसेज़ लिस्ट और रिव्यू सेक्शन",
      "Google Maps लोकेशन और कॉन्टैक्ट फॉर्म इंटीग्रेशन",
      "SSL Certificate (HTTPS) + Cloudflare सिक्योरिटी",
      "24–48 घंटे में सुपर-फ़ास्ट लाइव डिलीवरी",
      "0% एडवांस पेमेंट — पहले लाइव वेबसाइट देखें, पसंद आने पर ही पे करें",
    ],
    fine: "डोमेन चार्ज क्लाइंट का (~₹500–₹900/वर्ष) — वेबसाइट सेटअप व कोडिंग हमारा पूरी तरह फ्री",
    cta: "₹999 में अपनी वेबसाइट शुरू करें",
  },
];

export const steps = [
  { num: "01", title: "डिज़ाइन पसंद करें", body: "लाइव डेमोज़ देखें या अपने बिज़नेस का नाम और पसंद हमें बताएं।" },
  { num: "02", title: "डिटेल्स WhatsApp करें", body: "बिज़नेस का नाम, फोटो, ऑफर्स और सर्विसेज़ की लिस्ट भेजें।" },
  { num: "03", title: "लाइव देखें, फिर पे करें", body: "24–48 घंटे में वेबसाइट लाइव होगी। पसंद आने के बाद ही ₹999 भुगतान करें।" },
];

export const bonuses = [
  {
    id: "01",
    tag: "CUSTOM LOGO",
    was: "₹2,500",
    title: "Brand Logo Design",
    body: "आपके बिज़नेस की पहचान बनाने के लिए कस्टम-डिज़ाइन लोगो, वेबसाइट के साथ मुफ्त में।",
  },
  {
    id: "02",
    tag: "LOCAL SEO GUIDE",
    was: "₹1,000",
    title: "Google Maps Ranking Guide",
    body: "अपने बिज़नेस को Google Maps पर #1 रैंक कराने की सीक्रेट स्टेप-बाय-स्टेप PDF गाइड — लोकल कस्टमर्स की बाढ़ लाएं।",
  },
];

export const faqs = [
  { q: "Q1", question: "क्या यह ऑफर असली है?", answer: "बिल्कुल असली है। पहले वेबसाइट लाइव बनाकर दिखाते हैं, पसंद आने के बाद ही ₹999 का भुगतान लिया जाता है। जो शामिल है और जो नहीं, वो ऊपर साफ़ बताया गया है।" },
  { q: "Q2", question: "₹999 में कैसी वेबसाइट बनेगी?", answer: "प्रीमियम, मोबाइल-फ्रेंडली सिंगल-पेज वेबसाइट — WhatsApp बटन, कॉन्टैक्ट फॉर्म, गैलरी और सिक्योरिटी शामिल है। सिर्फ़ डोमेन का सालाना चार्ज (~₹500–₹1200) आपको वहन करना होगा।" },
  { q: "Q3", question: "काम कितने दिन में होगा?", answer: "आमतौर पर आपकी वेबसाइट 24–48 घंटों के अंदर लाइव डेमो के रूप में तैयार कर दी जाती है।" },
  { q: "Q4", question: "होस्टिंग का सालाना चार्ज देना होगा?", answer: "नहीं, बजट न हो तो Free Lifetime Hosting पर सेटअप कर देंगे। पेड होस्टिंग चाहें तो वह चॉइस भी आपकी है।" },
  { q: "Q5", question: "कोई एडवांस पेमेंट देना होगा?", answer: "बिल्कुल नहीं। पहले वेबसाइट बनाकर दिखाई जाती है, पसंद आने पर ही भुगतान लिया जाता है।" },
];
