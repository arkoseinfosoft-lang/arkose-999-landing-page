import { Check, X } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { included, excluded } from "../data/content";

export default function Ledger() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[1120px] px-4">
        <SectionHead
          ornament
          center
          eyebrow="पूरी जानकारी, पढ़ने के बाद ही फॉर्म भरें"
          title={
            <>
              ₹999 में आपको <em className="not-italic text-red">असल में</em> क्या मिलता है
            </>
          }
          body="हम छोटे बिज़नेस ओनर्स के लिए तेज़, प्रीमियम 1-पेज सेल्स वेबसाइट बनाते हैं। नीचे साफ़-साफ़ लिखा है क्या शामिल है और क्या नहीं — कोई स्कैम नहीं, पूरी पारदर्शिता।"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal
            direction="left"
            className="flex flex-col rounded-xl border border-paper-line border-t-4 border-t-emerald-600 bg-card p-7 shadow-[0_14px_34px_rgba(140,32,21,0.06)]"
          >
            <h3 className="mb-4 flex items-center gap-2 font-serif-hi text-lg font-bold text-emerald-700">
              ✅ शामिल है
            </h3>
            <ul className="flex flex-1 flex-col gap-3.5">
              {included.map((line) => (
                <li key={line} className="relative pl-6 text-sm leading-relaxed text-ink">
                  <Check className="absolute left-0 top-[3px] h-4 w-4 text-emerald-600" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            direction="right"
            className="flex flex-col rounded-xl border border-paper-line border-t-4 border-t-red bg-card p-7 shadow-[0_14px_34px_rgba(140,32,21,0.06)]"
          >
            <h3 className="mb-4 flex items-center gap-2 font-serif-hi text-lg font-bold text-red-deep">
              ❌ शामिल नहीं है
            </h3>
            <ul className="flex flex-1 flex-col gap-3.5">
              {excluded.map((line) => (
                <li key={line} className="relative pl-6 text-sm leading-relaxed text-ink">
                  <X className="absolute left-0 top-[3px] h-4 w-4 text-red-deep" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal
          direction="up"
          delay={0.2}
          className="mt-6 rounded-lg bg-red-deep px-6 py-4 text-center text-[13.5px] font-semibold text-[#fff9ee] shadow-[0_8px_20px_rgba(140,32,21,0.12)]"
        >
          जो भी सीरियस बिज़नेस ओनर अभी शुरू करना चाहते हैं, नीचे फॉर्म भरें — हम जल्द कॉन्टैक्ट करेंगे
        </Reveal>
      </div>
    </section>
  );
}
