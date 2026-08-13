import { EyeOff, TrendingDown, AlertTriangle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { problems } from "../data/content";

const icons = [EyeOff, TrendingDown, AlertTriangle];

export default function Problems() {
  return (
    <section className="section bg-paper-2">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          center
          eyebrow="असली समस्या"
          title={
            <>
              बिना वेबसाइट के आपका लोकल बिज़नेस{" "}
              <em className="not-italic text-red">पीछे छूट</em> रहा है
            </>
          }
          body="आज के डिजिटल दौर में, जो इंटरनेट पर नहीं दिखता, लोग उस पर भरोसा नहीं करते।"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={p.title}
                direction="up"
                delay={i * 0.12}
                className="border border-paper-line border-t-[3px] border-t-red bg-card p-7 shadow-[0_14px_30px_rgba(140,32,21,0.05)] transition-transform hover:-translate-y-1"
              >
                <Icon className="mb-4 h-6 w-6 text-red" strokeWidth={1.6} />
                <h3 className="mb-2.5 font-serif-hi text-base font-bold text-ink">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
