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

        <Reveal direction="up">
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
            {demos.map((d) => (
              <div
                key={d.name}
                className="w-[85vw] max-w-[300px] shrink-0 snap-center sm:w-auto sm:max-w-none"
              >
                <article className="group flex h-full flex-col border border-paper-line bg-card shadow-[0_10px_24px_rgba(140,32,21,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(140,32,21,0.12)]">
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-card-preview group/preview relative block overflow-hidden bg-gray-100"
                    style={{ height: "148px" }}
                  >
                    <iframe
                      src={d.url}
                      title={d.name}
                      scrolling="no"
                      loading="lazy"
                      style={{
                        width: "200%",
                        height: "200%",
                        transform: "scale(0.5)",
                        transformOrigin: "top left",
                        border: "none",
                        pointerEvents: "none",
                      }}
                    />
                    <div className="overlay" />
                    <div className="absolute right-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-full bg-ink/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-md transition-transform group-hover/preview:scale-105">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live Site
                    </div>
                  </a>

                  <div className="relative flex min-h-[72px] flex-col justify-between border-b border-t border-black/[0.06] p-4 sm:p-5">
                    <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-red to-gold" />
                    <span className="font-serif-hi text-[10.5px] uppercase tracking-wide opacity-80">
                      {d.cat}
                    </span>
                    <span className="mt-2 font-serif-hi text-[16px] font-bold text-ink transition-colors group-hover:text-red-deep sm:text-[18px]">
                      {d.name}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4 pt-3">
                    <p className="mb-3 min-h-[48px] text-[12px] leading-relaxed text-muted sm:min-h-[52px] sm:text-[12.3px]">
                      {d.desc}
                    </p>
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 rounded border border-gold/40 bg-gold-tint/50 px-2.5 py-1 text-xs font-bold text-red-deep transition-all hover:border-gold hover:bg-gold-tint"
                    >
                      <span>Live Demo देखें</span>
                      <ArrowRight className="arrow-pulse h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[12.5px] font-bold text-red-deep sm:hidden">
            <span className="animate-[bounceLeft_1.4s_infinite_ease-in-out]">←</span>
            <span>स्वाइप करें (10 डेमोज़)</span>
            <span className="animate-[bounceRight_1.4s_infinite_ease-in-out]">→</span>
          </div>
        </Reveal>

        <Reveal
          direction="up"
          className="mt-8 border border-dashed border-gold-deep bg-gold-tint px-6 py-4 text-center text-[13.6px] leading-relaxed text-ink"
        >
          <b className="text-red-deep">आपका बिज़नेस लिस्ट में नहीं है?</b> कोई बात
          नहीं — हर तरह के बिज़नेस के लिए कस्टमाइज़्ड डिज़ाइन उपलब्ध हैं।{" "}
          WhatsApp पर मैसेज करें, तुरंत भेजेंगे।
        </Reveal>
      </div>
    </section>
  );
}
