import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { bonuses, whatsappLink } from "../data/content";

export default function Bonus() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[1120px] px-4">
        <Reveal
          direction="scale"
          className="border border-paper-line bg-card p-6 shadow-[0_20px_44px_rgba(140,32,21,0.06)] sm:p-9"
        >
          <div className="mb-7 text-center">
            <span className="mb-2.5 block font-serif-hi text-[13px] font-bold tracking-wide text-red-deep">
              आज शुरुआत करने पर
            </span>
            <h2 className="mb-2 font-serif-hi text-[clamp(20px,2.8vw,26px)] font-bold text-ink">
              ₹3,500 मूल्य के 2 Bonus बिल्कुल फ्री
            </h2>
            <p className="mx-auto max-w-[480px] text-[13.8px] leading-relaxed text-muted">
              आज ही अपनी वेबसाइट या Facebook Ads ऑर्डर करें और दोनों बोनस सर्विसेज़ फ्री पाएं।
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {bonuses.map((b) => (
              <div key={b.title} className="border border-paper-line bg-gold-tint p-6">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-xs text-muted line-through">{b.was}</span>
                  <span className="font-serif-hi text-[11.5px] font-bold text-red-deep">
                    FREE
                  </span>
                </div>
                <h4 className="mb-2.5 font-serif-hi text-base font-bold text-ink">
                  {b.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-muted">{b.body}</p>
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
              className="inline-flex items-center justify-center rounded bg-red px-6 py-4 text-[15.5px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)]"
            >
              अभी फॉर्म भरें और बोनस क्लेम करें
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
