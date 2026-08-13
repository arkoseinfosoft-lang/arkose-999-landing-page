import { Zap, Globe2, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { whyUs } from "../data/content";

const icons = [Zap, Globe2, ShieldCheck];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          eyebrow="क्यों Arkose Infosoft"
          title={
            <>
              हम बाकियों से <em className="not-italic text-red">अलग</em> क्यों हैं
            </>
          }
          body="मार्केट में बहुत लोग हैं, लेकिन हमारी स्पीड और रिस्क-फ्री ऑफर का मुकाबला कोई नहीं कर सकता।"
        />
        <div className="flex flex-col border-t border-paper-line">
          {whyUs.map((w, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={w.title}
                direction="up"
                delay={i * 0.08}
                className="grid grid-cols-[32px_1fr] items-center gap-3.5 border-b border-paper-line py-5 sm:grid-cols-[44px_200px_1fr] sm:gap-5 sm:py-6"
              >
                <Icon className="h-5 w-5 text-gold-deep sm:h-6 sm:w-6" strokeWidth={1.6} />
                <h3 className="font-serif-hi text-base font-bold text-ink sm:col-auto sm:text-[17px]">
                  {w.title}
                </h3>
                <p className="col-span-2 text-[13px] leading-relaxed text-muted sm:col-span-1 sm:text-[13.7px]">
                  {w.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
