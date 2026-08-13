import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { demos } from "../data/content";

export default function Demos() {
  return (
    <section className="section bg-paper-2" id="demos">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          center
          eyebrow="लाइव प्रीव्यूज़"
          title="अपने बिज़नेस जैसा डिज़ाइन चुनें"
          body="नीचे दिए डेमोज़ में से मनपसंद डिज़ाइन चुनें — हम इसे आपके बिज़नेस के नाम, फोटो और डिटेल्स के साथ बदल देंगे।"
        />

        <div className="-mx-4 flex snap-x snap-mandatory gap-0 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {demos.map((d, i) => (
            <div
              key={d.name}
              className="w-full shrink-0 snap-center snap-always px-1 sm:w-auto sm:px-0"
            >
              <Reveal direction="up" delay={(i % 4) * 0.08} className="h-full">
                <article className="group flex h-full flex-col border border-paper-line bg-card shadow-[0_10px_24px_rgba(140,32,21,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(140,32,21,0.12)]">
                  <div className="relative flex min-h-[104px] flex-col justify-between border-b border-black/[0.06] p-5">
                    <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-red to-gold" />
                    <span className="font-serif-hi text-[10.5px] uppercase tracking-wide opacity-80">
                      {d.cat}
                    </span>
                    <span className="mt-4 font-serif-hi text-[19px] font-bold">
                      {d.name}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4 pt-3.5">
                    <p className="mb-3 min-h-[52px] text-[12.3px] leading-relaxed text-muted">
                      {d.desc}
                    </p>
                    <a
                      href="#pricing"
                      className="inline-flex w-fit items-center gap-1 border-b border-gold pb-0.5 text-xs font-bold text-red-deep"
                    >
                      Live Demo देखें
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[13px] font-bold text-red-deep sm:hidden">
          <span className="animate-[bounceLeft_1.4s_infinite_ease-in-out]">←</span>
          <span>स्वाइप करें</span>
          <span className="animate-[bounceRight_1.4s_infinite_ease-in-out]">→</span>
        </div>

        <Reveal
          direction="up"
          className="mt-8 border border-dashed border-gold-deep bg-gold-tint px-6 py-4 text-center text-[13.6px] leading-relaxed text-ink"
        >
          <b className="text-red-deep">आपका बिज़नेस लिस्ट में नहीं है?</b> कोई बात
          नहीं — हर तरह के बिज़नेस के लिए कस्टमाइज़्ड डिज़ाइन उपलब्ध हैं।
          WhatsApp पर मैसेज करें, तुरंत भेजेंगे।
        </Reveal>
      </div>
    </section>
  );
}
