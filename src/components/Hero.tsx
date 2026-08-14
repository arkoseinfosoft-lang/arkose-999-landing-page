import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Star, MessageCircle, ChevronDown, Lock, Users } from "lucide-react";
import { whatsappLink } from "../data/content";
import rahulAvatar from "../assets/rahul-sharma.jpg";

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
              रिस्क-फ्री शुरुआत — पहले देखें, फिर तय करें
            </motion.span>

            <motion.h1
              variants={item}
              className="font-serif-hi text-[clamp(28px,4.3vw,48px)] font-bold leading-[1.26] text-ink"
            >
              अपने बिज़नेस के लिए प्रोफेशनल वेबसाइट, {" "}
              <em className="not-italic text-red">कम</em> कीमत में
            </motion.h1>

            {/* Price contrast block */}
            <motion.div
              variants={item}
              className="mt-5 inline-flex flex-wrap items-baseline gap-2.5 rounded-xl border border-gold bg-gold-tint/70 px-4 py-2.5"
            >
              <span className="font-serif-hi text-[13px] font-semibold text-muted line-through decoration-red/60">
                ₹8,999
              </span>
              <span className="price-pulse font-serif-hi text-[38px] font-bold leading-none text-red-deep sm:text-[44px]">
                ₹999
              </span>
              <span className="rounded-full bg-red px-2.5 py-0.5 text-[11px] font-bold text-white">
                90% OFF
              </span>
              <span className="w-full text-[11px] font-semibold text-gold-deep">
                एक बार में क्लियर · कोई सरप्राइज़ चार्ज नहीं
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-4 max-w-[480px] text-[15px] leading-[1.75] text-muted sm:text-[16.5px]"
            >
              हम भरोसे पर काम करते हैं —
              शर्तों का कोई झंझट नहीं।
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
                WhatsApp पर बात करके शुरू करें
              </motion.a>

              {/* Trust icon row */}
              <motion.div
                variants={item}
                className="flex flex-wrap items-center gap-2 pt-1"
              >
                {[
                  { icon: <Lock className="h-3 w-3" />, label: "SSL Secure" },
                  { icon: <ShieldCheck className="h-3 w-3" />, label: "Cloudflare" },
                  { icon: <Users className="h-3 w-3" />, label: "320+ Clients" },
                  { icon: <Star className="h-3 w-3 fill-gold text-gold" />, label: "4.9★ Rating" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1 rounded-full border border-paper-line bg-card px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm"
                  >
                    <span className="text-gold-deep">{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </motion.div>


            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="relative mx-auto hidden w-full max-w-[360px] md:block"
          >
            {/* trust badge */}
            <div className="absolute -top-3 inset-x-0 mx-auto z-20 flex justify-center md:inset-auto md:left-[-20px] md:top-[-16px] lg:left-[-28px] lg:top-[-20px]">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-1.5, 1, -1.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="flex w-[90%] max-w-[260px] items-center justify-center gap-2.5 rounded-xl border border-gold bg-card/95 px-3 py-2 shadow-[0_12px_30px_rgba(140,32,21,0.12)] backdrop-blur-md md:w-auto"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-tint sm:h-8 sm:w-8">
                  <ShieldCheck className="h-4 w-4 text-gold-deep sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="text-left">
                  <b className="block text-xs font-bold leading-tight text-ink">
                    ₹399 एडवांस पेमेंट
                  </b>
                  <span className="mt-0.5 block text-[10px] text-muted sm:text-[10.5px]">
                    100% रिस्क-फ्री गारंटी
                  </span>
                </span>
              </motion.div>
            </div>

            {/* phone mockup */}
            <div className="mx-auto w-full max-w-[360px] rounded-[20px] border border-paper-line bg-card p-3 shadow-[0_24px_50px_rgba(140,32,21,0.1)] sm:p-3.5">
              <div className="mb-3 flex items-center gap-2.5 border-b border-paper-line pb-3 sm:mb-3.5 sm:pb-3.5">
                <img
                  src={rahulAvatar}
                  alt="राहुल शर्मा"
                  className="h-[36px] w-[36px] rounded-full object-cover ring-2 ring-gold/40 shadow-xs sm:h-[38px] sm:w-[38px]"
                />
                <div>
                  <div className="text-xs font-semibold text-ink sm:text-sm">
                    राहुल शर्मा · Fitness Club
                  </div>
                  <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-emerald-600 sm:text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    online
                  </div>
                </div>
              </div>
              <div className="flex min-h-[300px] flex-col gap-2 rounded-xl bg-[#f0ece0] p-2.5 sm:min-h-[320px] sm:gap-2.5 sm:p-3">
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
                  className="max-w-[85%] self-end overflow-hidden rounded-[9px] rounded-tr-[2px] bg-white shadow-sm border border-paper-line"
                >
                  <div className="flex h-[55px] items-end bg-gradient-to-br from-gold to-red p-2 sm:h-[65px]">
                    <b className="font-serif-hi text-xs text-white">
                      Fitness &amp; Gym Club
                    </b>
                  </div>
                </motion.div>
                <Bubble delay={2.0} align="right" time="10:48 AM" ticks>
                  आपकी वेबसाइट लाइव है — देखिए और बताइए कैसी लगी
                </Bubble>
                <Bubble delay={2.4} align="left" time="10:52 AM">
                  वाह बहुत बढ़िया! पेमेंट कैसे करूं?
                </Bubble>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                  className="flex w-fit gap-1 self-end rounded-[9px] rounded-tr-[2px] bg-[#e8f5df] px-3 py-2 sm:py-2.5"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      className="h-1.5 w-1.5 rounded-full bg-[#82a975]"
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* rating badge */}
            <div className="absolute -bottom-4 inset-x-0 mx-auto z-10 flex justify-center md:inset-auto md:right-[-20px] md:bottom-6 lg:right-[-32px]">
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="flex w-[90%] max-w-[260px] items-center justify-center gap-2.5 rounded-xl border border-paper-line border-l-[3.5px] border-l-red bg-card/95 px-3 py-2 shadow-[0_12px_30px_rgba(140,32,21,0.12)] backdrop-blur-md md:w-auto"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff8e6] sm:h-8 sm:w-8">
                  <Star className="h-3.5 w-3.5 fill-gold text-gold sm:h-[16px] sm:w-[16px]" />
                </span>
                <span className="text-left">
                  <b className="block text-xs font-bold leading-tight text-ink">
                    4.9 / 5 Rating
                  </b>
                  <span className="mt-0.5 block text-[10px] text-muted sm:text-[10.5px]">
                    320+ खुश कस्टमर्स
                  </span>
                </span>
              </motion.div>
            </div>
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
      className={`max-w-[82%] rounded-[9px] px-3 pb-2 pt-2.5 text-[13.3px] leading-[1.55] shadow-sm ${align === "left"
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
