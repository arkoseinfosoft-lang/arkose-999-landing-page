import { motion } from "framer-motion";
import { Star } from "lucide-react";

const AVATARS = [
  { initials: "RS", bg: "from-red to-gold" },
  { initials: "MK", bg: "from-gold-deep to-red" },
  { initials: "PV", bg: "from-red-deep to-gold" },
  { initials: "AJ", bg: "from-gold to-red-deep" },
  { initials: "SK", bg: "from-red to-gold-deep" },
];

export default function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="border-y border-paper-line bg-card/80 py-3"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-5">
        {/* Stacked avatars */}
        <div className="flex items-center">
          {AVATARS.map((a, i) => (
            <div
              key={a.initials}
              className={`-ml-${i === 0 ? "0" : "3"} flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${a.bg} font-serif-hi text-[11px] font-bold text-white ring-2 ring-card`}
              style={{ marginLeft: i === 0 ? 0 : -10, zIndex: AVATARS.length - i }}
            >
              {a.initials}
            </div>
          ))}
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-tint font-serif-hi text-[10px] font-bold text-gold-deep ring-2 ring-card"
            style={{ marginLeft: -10 }}
          >
            +315
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-0.5 sm:items-start">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-gold text-gold" />
            ))}
            <span className="ml-1 text-[12px] font-bold text-ink">4.9/5</span>
          </div>
          <p className="text-center text-[12.5px] font-semibold text-muted sm:text-left">
            <span className="text-red-deep font-bold">320+ बिज़नेस</span> ऑनलाइन हो चुके हैं — अगली बारी आपकी है
          </p>
        </div>

        {/* Divider pill */}
        <div className="hidden h-8 w-px bg-paper-line sm:block" />

        {/* Live indicator */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-[12px] font-semibold text-muted">
            अभी <b className="text-ink">7 लोग</b> यह पेज देख रहे हैं
          </span>
        </div>
      </div>
    </motion.div>
  );
}
