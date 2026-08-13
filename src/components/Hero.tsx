import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Star, MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink } from "../data/content";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      <div className="mx-auto max-w-[1120px] px-4">
        <div className="grid grid-cols-1 items-center gap-10 pb-14 sm:gap-14 md:grid-cols-[1.05fr_.95fr] md:pb-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="mb-5 inline-flex items-center gap-2 font-serif-hi text-[13px] font-bold tracking-wide text-red-deep"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-deep" />
              फ्री लाइव डेमो उपलब्ध
            </motion.span>

            <motion.h1
              variants={item}
              className="font-serif-hi text-[clamp(28px,4.3vw,48px)] font-bold leading-[1.26] text-ink"
            >
              बिज़नेस कोई भी हो, अपनी वेबसाइट अब सिर्फ़{" "}
              <em className="not-italic text-red">₹999</em> में लाइव करें
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-[480px] text-[15px] leading-[1.75] text-muted sm:text-[16.5px]"
            >
              पहले हम आपके बिज़नेस की वेबसाइट बनाकर दिखाते हैं। पसंद आए तभी
              भुगतान करें — कोई एडवांस नहीं, कोई शर्त नहीं।
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col items-start gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                href={whatsappLink(
                  "Hi, mujhe apne business ke liye ₹999 website chahiye"
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded bg-red px-6 py-4 text-[15px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)] transition-shadow sm:w-auto sm:text-[15.5px]"
              >
                <MessageCircle className="h-[18px] w-[18px]" />
                WhatsApp पर फ्री Demo बुक करें
              </motion.a>
              <span className="text-[12.5px] text-muted">
                जानकारी भरते ही WhatsApp खुल जाएगा — बिना नंबर सेव किए चैट शुरू करें
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[360px] pt-7 md:pt-0"
          >
            {/* trust badge */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-1.5, 1, -1.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 left-1/2 z-20 flex w-[92%] max-w-[270px] -translate-x-1/2 items-center justify-center gap-2.5 rounded-xl border border-gold bg-card/95 px-3.5 py-2 shadow-[0_12px_30px_rgba(140,32,21,0.12)] backdrop-blur-md md:left-[-28px] md:top-[-20px] md:w-auto md:max-w-none md:translate-x-0 md:justify-start"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-tint">
                <ShieldCheck className="h-[18px] w-[18px] text-gold-deep" />
              </span>
              <span className="text-left">
                <b className="block text-xs font-bold leading-tight text-ink">
                  0% एडवांस पेमेंट
                </b>
                <span className="mt-0.5 block text-[10.5px] text-muted">
                  100% रिस्क-फ्री गारंटी
                </span>
              </span>
            </motion.div>

            {/* phone mockup */}
            <div className="mx-auto max-w-[360px] rounded-[20px] border border-paper-line bg-card p-3.5 shadow-[0_24px_50px_rgba(140,32,21,0.1)]">
              <div className="mb-3.5 flex items-center gap-2.5 border-b border-paper-line pb-3.5">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-br from-gold to-red font-serif-hi text-sm font-bold text-white">
                  RS
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    राहुल शर्मा · Fitness Club
                  </div>
                  <div className="text-[11px] text-red">Arkose Infosoft • online</div>
                </div>
              </div>
              <div className="flex min-h-[320px] flex-col gap-2.5 rounded-xl bg-[#f0ece0] p-3">
                <Bubble delay={0.9} align="left" time="10:14 AM">
                  नमस्ते, मुझे अपने जिम के लिए वेबसाइट चाहिए
                </Bubble>
                <Bubble delay={1.3} align="right" time="10:15 AM" ticks>
                  जी बिल्कुल! बिज़नेस का नाम और फोटो भेज दीजिए, हम 24–48 घंटे में लाइव डेमो बना देंगे
                </Bubble>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  className="max-w-[82%] self-start overflow-hidden rounded-[9px] rounded-tl-[2px] bg-white shadow-sm"
                >
                  <div className="flex h-[70px] items-end bg-gradient-to-br from-gold to-red p-2">
                    <b className="font-serif-hi text-xs text-white">
                      Fitness &amp; Gym Club
                    </b>
                  </div>
                  <div className="p-2.5 text-[12.5px] text-muted">
                    आपकी वेबसाइट लाइव है — देखिए और बताइए कैसी लगी
                  </div>
                </motion.div>
                <Bubble delay={2.1} align="left" time="10:52 AM">
                  वाह बहुत बढ़िया! पेमेंट कैसे करूं?
                </Bubble>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex w-fit gap-1 self-start rounded-[9px] rounded-tl-[2px] bg-white px-3 py-2.5"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      className="h-1.5 w-1.5 rounded-full bg-[#b7ae98]"
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* rating badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -bottom-6 right-1/2 z-10 flex w-[92%] max-w-[270px] translate-x-1/2 items-center justify-center gap-2.5 rounded-xl border border-paper-line border-l-[3.5px] border-l-red bg-card/95 px-3.5 py-2 shadow-[0_12px_30px_rgba(140,32,21,0.12)] backdrop-blur-md md:bottom-6 md:right-[-32px] md:w-auto md:max-w-none md:translate-x-0 md:justify-start"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff8e6]">
                <Star className="h-[16px] w-[16px] fill-gold text-gold" />
              </span>
              <span className="text-left">
                <b className="block text-xs font-bold leading-tight text-ink">
                  4.9 / 5 Rating
                </b>
                <span className="mt-0.5 block text-[10.5px] text-muted">
                  320+ खुश कस्टमर्स
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden justify-center pb-6 md:flex"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-muted"
          >
            <span className="text-[11px] tracking-wide">नीचे स्क्रॉल करें</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Bubble({
  children,
  align,
  time,
  ticks,
  delay,
}: {
  children: string;
  align: "left" | "right";
  time: string;
  ticks?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`max-w-[82%] rounded-[9px] px-3 pb-2 pt-2.5 text-[13.3px] leading-[1.55] shadow-sm ${
        align === "left"
          ? "self-start rounded-tl-[2px] bg-white text-ink"
          : "self-end rounded-tr-[2px] bg-[#e8f5df] text-[#1c3b12]"
      }`}
    >
      {children}
      <span className="mt-1 block text-right text-[10px] text-[#8a8270]">
        {time} {ticks && <span className="text-red">✓✓</span>}
      </span>
    </motion.div>
  );
}
