import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section bg-paper-2">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          center
          eyebrow="FAQ"
          title={
            <>
              आपके मन में भी ये <em className="not-italic text-red">सवाल</em> होंगे
            </>
          }
        />
        <div className="mx-auto max-w-[780px]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} direction="up" delay={i * 0.06}>
                <div
                  className={`border-b border-paper-line py-5 ${
                    i === 0 ? "border-t-[1.5px] border-t-red" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 text-left font-serif-hi text-base font-bold text-ink"
                  >
                    <span>
                      <span className="mr-2.5 font-serif-hi text-[13px] text-red">
                        {f.q}
                      </span>
                      {f.question}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-gold-deep transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden pt-3.5 text-[13.8px] leading-relaxed text-muted">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
