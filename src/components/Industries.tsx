import { useState } from "react";
import {
  Building2,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  ShoppingBag,
  GraduationCap,
  Scale,
  Plane,
  Dumbbell,
  Car,
  Layers,
  Briefcase,
  Sparkles,
  ArrowRight,
  Send,
  Check,
  Search,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import {
  industries,
  industryCategories,
  whatsappLink,
  type IndustryItem,
} from "../data/content";
import { sanitizeInput, safeOpenUrl } from "../lib/sanitize";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-5 w-5" />,
  Scissors: <Scissors className="h-5 w-5" />,
  Stethoscope: <Stethoscope className="h-5 w-5" />,
  UtensilsCrossed: <UtensilsCrossed className="h-5 w-5" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5" />,
  GraduationCap: <GraduationCap className="h-5 w-5" />,
  Scale: <Scale className="h-5 w-5" />,
  Plane: <Plane className="h-5 w-5" />,
  Dumbbell: <Dumbbell className="h-5 w-5" />,
  Car: <Car className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  Briefcase: <Briefcase className="h-5 w-5" />,
};

export default function Industries() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [customBiz, setCustomBiz] = useState<string>("");

  const filteredIndustries =
    activeTab === "all"
      ? industries
      : industries.filter((item) => item.category === activeTab);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = sanitizeInput(customBiz, 60) || "mere business";
    const link = whatsappLink(
      `Hi, mera business "${query}" ka hai. Mujhe ₹999 me website banwani hai, kripya demo dikhayein.`
    );
    safeOpenUrl(link);
  };

  return (
    <section className="section bg-paper relative overflow-hidden" id="industries">
      <div className="mx-auto max-w-[1120px] px-4">
        {/* Section Header */}
        <SectionHead
          center
          eyebrow="Designed for Every Industry"
          title="हर तरह के बिज़नेस के लिए ख़ास वेबसाइट सॉल्यूशंस"
          body="चाहे आपकी छोटी दुकान हो, क्लिनिक, सैलून, जिम या कोचिंग — हम हर केटेगरी की ज़रूरतों के हिसाब से हाई-कन्वर्टिंग वेबसाइट तैयार करते हैं।"
        />

        {/* Category Tabs */}
        <Reveal direction="up" className="mb-7 sm:mb-9">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden">
            {industryCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-[12.5px] font-bold transition-all sm:text-[13px] ${
                    isActive
                      ? "bg-red text-white shadow-[0_4px_12px_rgba(195,53,38,0.25)]"
                      : "border border-paper-line bg-card text-muted hover:border-gold hover:text-ink hover:bg-gold-tint/50"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Dynamic Industries Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {filteredIndustries.map((ind: IndustryItem) => (
            <div
              key={ind.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-paper-line bg-card p-4.5 shadow-[0_4px_16px_rgba(140,32,21,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_14px_30px_rgba(140,32,21,0.09)] sm:p-5"
            >
              {/* Top Subtle Shimmer Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-deep via-gold to-gold-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Card Header: Icon & Badge */}
                <div className="mb-3.5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold-tint text-red-deep shadow-xs transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-red-deep group-hover:text-white">
                    {iconMap[ind.iconName] || <Sparkles className="h-5 w-5" />}
                  </div>

                  {ind.popular ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-red/20 bg-red-tint px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider text-red-deep uppercase">
                      <span>🔥</span> Popular
                    </span>
                  ) : (
                    <span className="rounded-full border border-paper-line bg-paper px-2 py-0.5 text-[10px] font-bold text-muted uppercase">
                      Ready Demo
                    </span>
                  )}
                </div>

                {/* Title & Category */}
                <h3 className="font-serif-hi text-[16.5px] font-bold text-ink transition-colors group-hover:text-red-deep sm:text-[17.5px]">
                  {ind.name}
                </h3>
                <p className="mb-3 text-[12px] font-medium text-muted">
                  {ind.nameEn}
                </p>

                {/* Key Feature Micro-Pills */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {ind.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1 rounded-md border border-paper-line bg-paper-2/60 px-2 py-0.5 text-[11px] font-semibold text-ink/80 transition-colors group-hover:border-gold/40 group-hover:bg-gold-tint/40"
                    >
                      <Check className="h-3 w-3 text-gold-deep" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-2">
                <a
                  href={whatsappLink(
                    `Hi, mujhe apne business (${ind.nameEn} - ${ind.name}) ke liye ₹999 website chahiye. Demo dikhayein.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-between rounded-lg border border-gold/30 bg-gold-tint/40 px-3 py-2 text-[12.5px] font-bold text-red-deep transition-all duration-200 hover:border-gold hover:bg-gold-tint"
                >
                  <span>इस इंडस्ट्री का डेमो बनवाएं</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive "Don't see your industry?" Search Box */}
        <Reveal direction="up" className="mt-8 sm:mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-gold-deep/80 bg-gradient-to-r from-gold-tint/90 via-card to-gold-tint/90 p-5 shadow-[0_10px_28px_rgba(213,145,27,0.08)] sm:p-7">
            <div className="mx-auto max-w-[720px] text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-0.5 text-[11.5px] font-bold text-gold-deep shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                <span>कस्टम बिज़नेस सपोर्ट</span>
              </span>

              <h4 className="mt-2 text-[17px] font-bold text-ink sm:text-[20px]">
                क्या आपका बिज़नेस ऊपर की लिस्ट में नहीं दिखा?
              </h4>
              <p className="mt-1 text-[13px] text-muted sm:text-[13.5px]">
                चिंता मत कीजिए — हम भारत के हर छोटे-बड़े बिज़नेस, सर्विस या प्रोफेशन के लिए कस्टमाइज़्ड वेबसाइट बनाते हैं।
              </p>

              {/* Quick Input & WhatsApp Trigger Form */}
              <form
                onSubmit={handleCustomSubmit}
                className="mt-4.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-center"
              >
                <div className="relative flex-1 max-w-[420px]">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={customBiz}
                    onChange={(e) => setCustomBiz(e.target.value)}
                    placeholder="अपना बिज़नेस टाइप करें (उदा. स्टूडियो, टेलर, बेकरी...)"
                    className="w-full rounded-full border border-paper-line bg-white py-2.5 pl-10 pr-4 text-[13px] text-ink placeholder:text-muted/70 focus:border-red focus:outline-hidden focus:ring-1 focus:ring-red shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-5 py-2.5 text-[13.5px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>WhatsApp पर तुरंत डेमो मांगें</span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
