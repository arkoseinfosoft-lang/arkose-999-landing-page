import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { pricingPlans, whatsappLink } from "../data/content";

const toneStyles = {
  gold: {
    card: "border-[1.5px] border-gold shadow-[0_18px_40px_rgba(220,156,52,0.16)]",
    flag: "text-gold-deep",
    btn: "bg-gold text-[#2a1a05] shadow-[0_3px_0_var(--color-gold-deep)]",
  },
  muted: {
    card: "border border-paper-line shadow-[0_16px_34px_rgba(140,32,21,0.06)]",
    flag: "text-muted",
    btn: "bg-red text-white shadow-[0_3px_0_var(--color-red-deep)]",
  },
  red: {
    card: "border-[1.5px] border-red shadow-[0_18px_40px_rgba(195,53,38,0.14)]",
    flag: "text-red-deep",
    btn: "bg-red text-white shadow-[0_3px_0_var(--color-red-deep)]",
  },
};

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          center
          eyebrow="Pricing & Packages"
          title={
            <>
              हमारे <em className="not-italic text-red">सुपर-अफोर्डेबल</em> प्लान्स
            </>
          }
          body="वेबसाइट, फेसबुक एड्स और AI UGC वीडियो एड्स — पारदर्शी कीमतें, अपनी ज़रूरत के अनुसार प्लान चुनें।"
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pricingPlans.map((p, i) => {
            const tone = toneStyles[p.tone];
            return (
              <Reveal
                key={p.title}
                direction="up"
                delay={i * 0.12}
                className={`flex flex-col bg-card p-7 ${tone.card}`}
              >
                <span className={`mb-3.5 block font-serif-hi text-[11.5px] font-bold tracking-wide ${tone.flag}`}>
                  {p.flag}
                </span>
                <h3 className="mb-2 font-serif-hi text-[19px] font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mb-5 text-[13.3px] leading-relaxed text-muted">{p.desc}</p>
                <div className="mb-1.5 flex items-baseline gap-2.5">
                  <span className="font-serif-hi text-[32px] font-bold text-red-deep">
                    {p.now}
                  </span>
                  {p.was && (
                    <span className="text-sm text-[#b7a98a] line-through">{p.was}</span>
                  )}
                </div>
                <span className="mb-5 block text-[11.5px] text-muted">{p.unit}</span>
                <ul className="mb-5.5 flex flex-1 flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="relative pl-[18px] text-[13.3px] leading-snug text-ink">
                      <Check className="absolute left-0 top-[3px] h-[13px] w-[13px] text-gold-deep" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mb-4 block text-xs text-muted">{p.fine}</span>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 2 }}
                  href={whatsappLink(`Hi, mujhe "${p.title}" plan chahiye`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded px-6 py-3.5 text-[15.5px] font-bold ${tone.btn}`}
                >
                  {p.cta}
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
