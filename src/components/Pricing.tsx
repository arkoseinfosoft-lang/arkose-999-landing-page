import { Check, ShieldCheck, Sparkles, Zap, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { pricingPlans, whatsappLink } from "../data/content";

export default function Pricing() {
  const plan = pricingPlans[0];

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
            className="relative overflow-hidden rounded-2xl border-2 border-gold bg-card p-6 shadow-[0_24px_50px_rgba(220,156,52,0.18)] sm:p-10"
          >
            {/* Top decorative badge */}
            <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-l from-red to-red-deep px-4 py-1.5 font-serif-hi text-[12px] font-bold tracking-wider text-white shadow-sm">
              80% OFF · LIMITED OFFER
            </div>

            <div className="mb-6">
              <span className="mb-2 inline-flex items-center gap-1.5 font-serif-hi text-[12.5px] font-bold tracking-wide text-gold-deep">
                <Sparkles className="h-4 w-4 text-gold" />
                {plan.flag}
              </span>
              <h3 className="font-serif-hi text-[26px] font-bold text-ink sm:text-[32px]">
                {plan.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted sm:text-[15.5px]">
                {plan.desc}
              </p>
            </div>

            {/* Price Box */}
            <div className="mb-8 rounded-xl border border-paper-line bg-gold-tint/60 p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                <span className="font-serif-hi text-[42px] font-bold leading-none text-red-deep sm:text-[52px]">
                  {plan.now}
                </span>
                {plan.was && (
                  <span className="text-lg text-[#a89a7a] line-through sm:text-xl">
                    {plan.was}
                  </span>
                )}
                <span className="rounded-full bg-red px-2.5 py-0.5 text-xs font-bold text-white">
                  {plan.discount}
                </span>
              </div>
              <span className="mt-2 block text-[13px] font-semibold text-muted">
                {plan.unit}
              </span>
            </div>

            {/* Trust Highlights */}
            <div className="mb-8 grid grid-cols-2 gap-3 border-y border-paper-line py-4 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-[12.5px] font-bold text-ink">
                <Zap className="h-4 w-4 shrink-0 text-gold-deep" />
                <span>24–48 घंटे डिलीवरी</span>
              </div>
              <div className="flex items-center gap-2 text-[12.5px] font-bold text-ink">
                <ShieldCheck className="h-4 w-4 shrink-0 text-gold-deep" />
                <span>0% एडवांस फीस</span>
              </div>
              <div className="flex items-center gap-2 text-[12.5px] font-bold text-ink">
                <Check className="h-4 w-4 shrink-0 text-gold-deep" />
                <span>100% मोबाइल रेडी</span>
              </div>
              <div className="flex items-center gap-2 text-[12.5px] font-bold text-ink">
                <Check className="h-4 w-4 shrink-0 text-gold-deep" />
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
