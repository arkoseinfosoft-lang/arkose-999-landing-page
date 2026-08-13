import Reveal from "./Reveal";
import { stats } from "../data/content";

export default function StatStrip() {
  return (
    <section className="border-y border-paper-line bg-card">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 px-4 py-6 sm:grid-cols-3 sm:gap-6 sm:py-7">
        {stats.map((s, i) => (
          <Reveal key={s.label} direction="up" delay={i * 0.1} className="border-l-2 border-gold pl-3.5 sm:pl-4">
            <b className="block font-serif-hi text-[24px] font-bold text-red-deep sm:text-[27px]">
              {s.value}
            </b>
            <span className="text-[12px] text-muted sm:text-[12.5px]">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
