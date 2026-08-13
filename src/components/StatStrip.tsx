import Reveal from "./Reveal";
import { stats } from "../data/content";

export default function StatStrip() {
  return (
    <section className="border-y border-paper-line bg-card">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-5 px-4 py-7">
        {stats.map((s, i) => (
          <Reveal key={s.label} direction="up" delay={i * 0.1} className="min-w-[150px] flex-1 border-l-2 border-gold pl-3.5">
            <b className="block font-serif-hi text-[27px] font-bold text-red-deep">
              {s.value}
            </b>
            <span className="text-[12.5px] text-muted">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
