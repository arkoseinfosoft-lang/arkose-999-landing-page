import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { bonuses, whatsappLink } from "../data/content";

export default function Bonus() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[1120px] px-4">
        <Reveal
          direction="up"
          className="border border-paper-line bg-card p-5 shadow-[0_20px_44px_rgba(140,32,21,0.06)] sm:p-9"
        >
          <div className="mb-6 text-center sm:mb-7">
            <span className="mb-2 block font-serif-hi text-[12.5px] font-bold tracking-wide text-red-deep sm:text-[13px]">
              आज शुरुआत करने पर
            </span>
            <h2 className="mb-2 font-serif-hi text-[clamp(19px,2.8vw,26px)] font-bold text-ink">
              ₹3,500 मूल्य के 2 Bonus बिल्कुल फ्री
            </h2>
            <p className="mx-auto max-w-[480px] text-[13.5px] leading-relaxed text-muted sm:text-[13.8px]">
              आज ही अपनी ₹999 वेबसाइट ऑर्डर करें और दोनों बोनस बिल्कुल फ्री पाएं।
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {bonuses.map((b) => (
              <div key={b.title} className="border border-paper-line bg-gold-tint p-4.5 sm:p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-muted line-through">{b.was}</span>
                  <span className="font-serif-hi text-[11px] font-bold text-red-deep sm:text-[11.5px]">
                    FREE
                  </span>
                </div>
                <h4 className="mb-2 font-serif-hi text-[15px] font-bold text-ink sm:text-base">
                  {b.title}
                </h4>
                <p className="text-[12.5px] leading-relaxed text-muted sm:text-[13px]">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
              href={whatsappLink("Hi, mujhe bonus ke saath website chahiye")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded bg-red px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)] sm:w-auto sm:py-4 sm:text-[15.5px]"
            >
              अभी फॉर्म भरें और बोनस क्लेम करें
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
