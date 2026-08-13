import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { steps } from "../data/content";

export default function Steps() {
  return (
    <section className="section bg-paper-2">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          center
          eyebrow="कैसे काम करता है"
          title="3 आसान स्टेप्स में शुरुआत"
          body="बिना किसी एडवांस के अपनी वेबसाइट बनवाना बहुत सरल है।"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              direction="up"
              delay={i * 0.15}
              className="border-l-2 border-gold pl-6"
            >
              <div className="mb-3.5 font-serif-hi text-[32px] font-bold leading-none text-red">
                {s.num}
              </div>
              <h3 className="mb-2 font-serif-hi text-base font-bold text-ink">
                {s.title}
              </h3>
              <p className="max-w-[260px] text-[13.5px] leading-relaxed text-muted">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
