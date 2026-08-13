import { Check, ShieldCheck, Sparkles, Zap, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { pricingPlans, whatsappLink } from "../data/content";

// Countdown — persisted in sessionStorage so it doesn't reset on scroll
const DURATION = 25 * 60; // 25 minutes in seconds
function useCountdown() {
  const [secs, setSecs] = useState<number>(() => {
    const stored = sessionStorage.getItem("cdown");
    const t = stored ? parseInt(stored, 10) : DURATION;
    return isNaN(t) || t <= 0 ? DURATION : t;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setSecs((s) => {
        const next = s <= 1 ? DURATION : s - 1;
        sessionStorage.setItem("cdown", String(next));
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function Pricing() {
  const plan = pricingPlans[0];
  const countdown = useCountdown();

  return (
    <section className="section" id="pricing">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          center
          eyebrow="Pricing & Offer"
          title={
            <>
              हमारा <em className="not-italic text-red">सुपर-अफोर्डेबल</em> वेबसाइट प्लान
            </>
          }
          body="100% पारदर्शी कीमत, कोई छुपा चार्ज नहीं — सिर्फ़ ₹999 में अपने बिज़नेस को आज ही ऑनलाइन लाएं।"
        />

        <div className="mx-auto max-w-[820px]">
          <Reveal
            direction="up"
            className="relative overflow-hidden rounded-2xl border-2 border-gold bg-card p-4.5 pt-9 shadow-[0_24px_50px_rgba(220,156,52,0.18)] sm:p-10"
          >
            {/* Top decorative badge */}
            <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-l from-red to-red-deep px-3 py-1 font-serif-hi text-[11px] font-bold tracking-wider text-white shadow-sm sm:px-4 sm:py-1.5 sm:text-[12px]">
              80% OFF · LIMITED OFFER
            </div>

            <div className="mb-5 sm:mb-6">
              <span className="mb-1.5 inline-flex items-center gap-1.5 font-serif-hi text-[12px] font-bold tracking-wide text-gold-deep sm:text-[12.5px]">
                <Sparkles className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
                {plan.flag}
              </span>
              <h3 className="font-serif-hi text-[22px] font-bold text-ink sm:text-[32px]">
                {plan.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted sm:text-[15.5px]">
                {plan.desc}
              </p>
            </div>

            {/* Price Box */}
            <div className="mb-6 rounded-xl border border-paper-line bg-gold-tint/60 p-4 sm:mb-8 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-2.5 sm:gap-4">
                <span className="price-pulse font-serif-hi text-[36px] font-bold leading-none text-red-deep sm:text-[52px]">
                  {plan.now}
                </span>
                {plan.was && (
                  <span className="text-base text-[#a89a7a] line-through sm:text-xl">
                    {plan.was}
                  </span>
                )}
                <span className="rounded-full bg-red px-2.5 py-0.5 text-xs font-bold text-white">
                  {plan.discount}
                </span>
              </div>
              <span className="mt-2 block text-[12px] font-semibold text-muted sm:text-[13px]">
                {plan.unit}
              </span>
            </div>

            {/* Trust Highlights */}
            <div className="mb-6 grid grid-cols-2 gap-2 border-y border-paper-line py-3 sm:mb-8 sm:grid-cols-4 sm:gap-3 sm:py-4">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-ink sm:gap-2 sm:text-[12.5px]">
                <Zap className="h-3.5 w-3.5 shrink-0 text-gold-deep sm:h-4 sm:w-4" />
                <span>24–48 घंटे डिलीवरी</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-ink sm:gap-2 sm:text-[12.5px]">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-gold-deep sm:h-4 sm:w-4" />
                <span>0% एडवांस फीस</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-ink sm:gap-2 sm:text-[12.5px]">
                <Check className="h-3.5 w-3.5 shrink-0 text-gold-deep sm:h-4 sm:w-4" />
                <span>100% मोबाइल रेडी</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-ink sm:gap-2 sm:text-[12.5px]">
                <Check className="h-3.5 w-3.5 shrink-0 text-gold-deep sm:h-4 sm:w-4" />
                <span>फ्री लाइफटाइम होस्टिंग</span>
              </div>
            </div>

            {/* Features list */}
            <div className="mb-8">
              <h4 className="mb-4 font-serif-hi text-[15px] font-bold tracking-wide text-ink">
                इस पैकेज में सब कुछ शामिल है:
              </h4>
              <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="relative flex items-start gap-2.5 text-[13.8px] leading-snug text-ink"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-tint text-gold-deep">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fine print */}
            <div className="mb-6 rounded-lg bg-paper-2/70 p-3.5 text-center text-xs text-muted">
              💡 {plan.fine}
            </div>

            {/* ⏳ Countdown urgency bar */}
            <motion.div
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-red/30 bg-red-tint px-4 py-2.5 text-center"
            >
              <Clock className="h-4 w-4 shrink-0 text-red-deep" />
              <span className="text-[13px] font-bold text-red-deep">
                80% OFF खत्म होने में बचा समय:{" "}
                <span className="font-serif-hi text-[15px] tracking-wider">{countdown}</span>
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ y: 2, scale: 0.99 }}
              href={whatsappLink(`Hi, mujhe ₹999 Premium Website plan chahiye`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-red px-6 py-4 text-[16px] font-bold text-white shadow-[0_4px_0_var(--color-red-deep)] transition-all hover:bg-red-deep sm:text-[17px]"
            >
              <MessageCircle className="h-5 w-5" />
              {plan.cta}
            </motion.a>

            <p className="mt-3.5 text-center text-[12px] text-muted">
              🔒 कोई एडवांस पेमेंट नहीं · 100% रिस्क-फ्री · पसंद आने पर ही भुगतान करें
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
