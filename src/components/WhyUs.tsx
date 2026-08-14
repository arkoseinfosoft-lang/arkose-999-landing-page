import { Zap, Globe2, ShieldCheck, CheckCircle2, ArrowRight, RefreshCcw } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { whyUs, whatsappLink } from "../data/content";

const icons = [Zap, Globe2, ShieldCheck];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[1120px] px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Column: Why Us Features */}
          <div>
            <SectionHead
              eyebrow="क्यों Arkose Infosoft"
              title={
                <>
                  हम बाकियों से <em className="not-italic text-red">अलग</em> क्यों हैं
                </>
              }
              body="मार्केट में बहुत लोग हैं, लेकिन हमारी स्पीड, क्वालिटी और 100% रिस्क-फ्री गारंटी का मुकाबला कोई नहीं कर सकता।"
            />
            <div className="mt-6 flex flex-col border-t border-paper-line">
              {whyUs.map((w, i) => {
                const Icon = icons[i];
                return (
                  <Reveal
                    key={w.title}
                    direction="up"
                    delay={i * 0.08}
                    className="grid grid-cols-[32px_1fr] items-center gap-3.5 border-b border-paper-line py-4.5 sm:grid-cols-[40px_170px_1fr] sm:gap-4 sm:py-5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold-tint/80">
                      <Icon className="h-4.5 w-4.5 text-gold-deep" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-serif-hi text-base font-bold text-ink sm:col-auto sm:text-[16.5px]">
                      {w.title}
                    </h3>
                    <p className="col-span-2 text-[13px] leading-relaxed text-muted sm:col-span-1 sm:text-[13.5px]">
                      {w.body}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: 100% Money-Back Guarantee Card with ATTEND LIVE style Badge */}
          <Reveal direction="up" delay={0.2} className="relative w-full">
            {/* Top Badge (Attending Live / Badge Style) */}
            <div className="absolute -top-3.5 left-6 z-20">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3.5 py-1 text-[11px] font-bold tracking-wider text-white shadow-md uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                <span>100% MONEY BACK GUARANTEE</span>
              </span>
            </div>

            {/* Main Guarantee Card */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-gradient-to-b from-card via-card to-gold-tint/35 p-6 pt-8 shadow-[0_16px_36px_rgba(140,32,21,0.09)] backdrop-blur-sm sm:p-7 sm:pt-9">
              {/* Background ambient watermarks */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-red/5 blur-2xl" />

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-gold-tint text-gold-deep shadow-xs">
                  <ShieldCheck className="h-6 w-6 text-gold-deep" />
                </div>
                <div>
                  <div className="text-[12px] font-bold tracking-wide text-red-deep uppercase">
                    100% रिस्क-फ्री वादा
                  </div>
                  <h3 className="font-serif-hi text-[20px] font-bold leading-tight text-ink sm:text-[22px]">
                    पसंद न आने पर <span className="text-red">तुरंत रिफंड</span>
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-[13.5px] leading-relaxed text-muted sm:text-[14px]">
                हम आपके काम की पूरी जिम्मेदारी लेते हैं। अगर बनाई गई वेबसाइट आपको 100% पसंद नहीं आती, तो आपका एडवांस ₹399 बिना किसी सवाल के तुरंत वापस कर दिया जाएगा।
              </p>

              {/* Feature Points */}
              <div className="mt-5 space-y-2.5 rounded-xl border border-paper-line/70 bg-paper/60 p-4">
                <div className="flex items-center gap-2 text-[12.5px] font-semibold text-ink sm:text-[13px]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>पहले 24–48 घंटे में लाइव डेमो वेबसाइट देखें</span>
                </div>
                <div className="flex items-center gap-2 text-[12.5px] font-semibold text-ink sm:text-[13px]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>पसंद आने पर ही बाकी ₹600 का भुगतान करें</span>
                </div>
                <div className="flex items-center gap-2 text-[12.5px] font-semibold text-ink sm:text-[13px]">
                  <RefreshCcw className="h-4 w-4 shrink-0 text-gold-deep" />
                  <span>नो-क्वेश्चन्स-आस्क्ड मनी-बैक पॉलिसी</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <a
                href={whatsappLink("Hi, mujhe 100% money back guarantee ke sath ₹999 website start karni hai")}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red px-5 py-3.5 text-[14.5px] font-bold text-white shadow-[0_4px_14px_rgba(195,53,38,0.35),0_3px_0_var(--color-red-deep)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_var(--color-red-deep)] sm:text-[15px]"
              >
                <span>गारंटी के साथ ₹999 में शुरू करें</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-2.5 text-center text-[11px] font-medium text-muted">
                ⚡ बिना किसी रिस्क के WhatsApp पर बातचीत शुरू करें
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
