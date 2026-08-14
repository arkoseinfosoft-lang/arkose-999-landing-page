import { motion } from "framer-motion";
import { Sparkles, Palette, MapPin, Gift, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { bonuses, whatsappLink } from "../data/content";

export default function Bonus() {
  const bonusIcons = [
    {
      icon: <Palette className="h-5 w-5 text-[#8A570E]" />,
      pillIcon: <Sparkles className="h-3 w-3 text-[#8A570E]" />,
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#8A570E]" />,
      pillIcon: <CheckCircle2 className="h-3 w-3 text-[#8A570E]" />,
    },
  ];

  return (
    <section className="section" id="bonus">
      <div className="mx-auto max-w-[1120px] px-4">
        <Reveal
          direction="up"
          className="border border-paper-line bg-card p-5 shadow-[0_20px_44px_rgba(140,32,21,0.06)] sm:p-9"
        >
          {/* Header */}
          <div className="mb-7 text-center sm:mb-9">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-tint px-3 py-1 font-serif-hi text-[12.5px] font-bold tracking-wide text-red-deep">
              <Gift className="h-3.5 w-3.5" />
              <span>लिमिटेड टाइम बोनस ऑफर</span>
            </span>
            <h2 className="mt-3 mb-1.5 font-serif text-[clamp(26px,4vw,38px)] font-bold text-ink leading-tight">
              फ्री <span className="font-serif italic text-red-deep"> बोनस पैक</span>
            </h2>
            <div className="font-serif-hi text-[clamp(16px,2vw,19px)] font-bold text-ink/90">
              ₹3,500 की वैल्यू वाले 2 गिफ्ट्स बिना किसी चार्ज के
            </div>
            <p className="mx-auto mt-2 max-w-[520px] text-[13.5px] leading-relaxed text-muted sm:text-[14px]">
              आज ऑर्डर करने वालों को ये दोनों बोनस बिना किसी चार्ज के मिलेंगे।
            </p>
          </div>

          {/* Ticket Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {bonuses.map((b, idx) => {
              const meta = bonusIcons[idx] || bonusIcons[0];
              return (
                <motion.div
                  key={b.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex overflow-hidden rounded-2xl border border-[#D79A2B]/40 bg-gradient-to-br from-[#EEB043] via-[#E4A02E] to-[#D5911E] shadow-[0_12px_28px_rgba(213,145,27,0.22),0_2px_6px_rgba(0,0,0,0.05)]"
                >
                  {/* Punch Holes / Ticket Cutouts */}
                  {/* Top perforation notch */}
                  <div
                    aria-hidden
                    className="absolute -top-3 left-[78px] z-20 h-6 w-6 rounded-full border-b border-paper-line bg-card shadow-[inset_0_-2px_4px_rgba(0,0,0,0.08)] sm:left-[88px]"
                  />
                  {/* Bottom perforation notch */}
                  <div
                    aria-hidden
                    className="absolute -bottom-3 left-[78px] z-20 h-6 w-6 rounded-full border-t border-paper-line bg-card shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] sm:left-[88px]"
                  />
                  {/* Left edge notch */}
                  <div
                    aria-hidden
                    className="absolute -left-3 top-1/2 z-20 h-5 w-5 -translate-y-1/2 rounded-full border-r border-paper-line bg-card shadow-[inset_-2px_0_3px_rgba(0,0,0,0.06)]"
                  />
                  {/* Right edge notch */}
                  <div
                    aria-hidden
                    className="absolute -right-3 top-1/2 z-20 h-5 w-5 -translate-y-1/2 rounded-full border-l border-paper-line bg-card shadow-[inset_2px_0_3px_rgba(0,0,0,0.06)]"
                  />

                  {/* Left Stub: Bonus Pass */}
                  <div className="relative flex w-[78px] shrink-0 flex-col items-center justify-center border-r-2 border-dashed border-[#8A570E]/30 bg-black/[0.03] py-4 pl-3 pr-2 sm:w-[88px] sm:pl-3.5">
                    {/* Vertical Bonus Pass Label */}
                    <span className="absolute left-1.5 top-1/2 -translate-y-1/2 -rotate-90 select-none text-[8px] font-black tracking-[0.24em] text-[#5C3704]/70 sm:text-[8.5px]">
                      BONUS&nbsp;PASS
                    </span>

                    {/* Circular Icon */}
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-[0_2px_8px_rgba(100,50,0,0.12)] sm:h-10 sm:w-10">
                      {meta.icon}
                    </div>

                    {/* Number */}
                    <div className="text-2xl font-black leading-none tracking-tight text-[#261402] sm:text-3xl">
                      {b.id}
                    </div>
                    <div className="mt-1 text-[8.5px] font-black tracking-widest text-[#5C3704] uppercase sm:text-[9px]">
                      BONUS
                    </div>
                  </div>

                  {/* Right Body: Content */}
                  <div className="flex flex-1 flex-col justify-between p-4 pl-3.5 sm:p-5 sm:pl-4">
                    <div>
                      {/* Pill Tag */}
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-[#8A570E]/25 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-black tracking-wider text-[#3F2302] uppercase shadow-xs">
                        {meta.pillIcon}
                        <span>{b.tag}</span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-2 text-[15.5px] font-bold leading-snug text-[#201001] sm:text-[17.5px]">
                        {b.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1 text-[12px] leading-relaxed text-[#3D2506] sm:text-[13px]">
                        {b.body}
                      </p>
                    </div>

                    <div>
                      {/* Dashed Separator */}
                      <div className="my-2.5 border-t border-dashed border-[#8A570E]/30 sm:my-3" />

                      {/* Bottom Row */}
                      <div className="flex items-center justify-between gap-2">
                        {/* Worth */}
                        <div>
                          <div className="text-[9px] font-black tracking-widest text-[#5C3704] uppercase">
                            WORTH
                          </div>
                          <div className="text-[16px] font-black text-[#2A1402] line-through decoration-[#B92B1C] decoration-2 sm:text-[18px]">
                            {b.was}
                          </div>
                        </div>

                        {/* Stamp Badge */}
                        <div className="relative -rotate-6 rounded-full border-2 border-dashed border-[#B92B1C] bg-white/40 px-2.5 py-0.5 text-center shadow-xs transition-transform hover:rotate-0">
                          <div className="flex items-center gap-1 text-[10.5px] font-black tracking-wider text-[#B92B1C] sm:text-[11.5px]">
                            <span className="text-[9px]">★</span>
                            <span>IT'S FREE</span>
                            <span className="text-[9px]">★</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-7 text-center sm:mt-8">
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ y: 2 }}
              href={whatsappLink("Hi, mujhe ₹3500 ke free bonuses ke saath ₹999 website order karni hai")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded bg-red px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(195,53,38,0.35),0_3px_0_var(--color-red-deep)] transition-all sm:w-auto sm:py-4 sm:text-[16px]"
            >
              <span>अभी क्लेम करें — दोनों बोनस फ्री</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
