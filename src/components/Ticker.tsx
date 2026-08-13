import { useEffect, useState } from "react";

const STORAGE_KEY = "arkose_timer_target";
const WINDOW_SECONDS = 8 * 3600 + 16 * 60 + 19;

function getTarget(): number {
  const stored = Number(sessionStorage.getItem(STORAGE_KEY));
  if (stored && Date.now() < stored) return stored;
  const target = Date.now() + WINDOW_SECONDS * 1000;
  sessionStorage.setItem(STORAGE_KEY, String(target));
  return target;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Ticker() {
  const [left, setLeft] = useState({ h: "08", m: "16", s: "19" });

  useEffect(() => {
    const target = getTarget();
    const tick = () => {
      const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      setLeft({ h: pad(h), m: pad(m), s: pad(s) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative z-[70] border-b border-gold/25 bg-[#16120e] py-2 text-white"
      aria-label="Limited Time Offer Banner"
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-4">
        <div className="flex items-center gap-2 text-[13px] font-semibold">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="hidden sm:inline">
            स्पेशल ऑफर — इस हफ्ते ₹999 वेबसाइट के लिए केवल कुछ ही स्लॉट बाकी हैं
          </span>
          <span className="sm:hidden">स्पेशल लॉन्च ऑफर</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono">
          {[
            { v: left.h, l: "घं" },
            { v: left.m, l: "मि" },
            { v: left.s, l: "से" },
          ].map((t) => (
            <div
              key={t.l}
              className="flex items-center gap-1 rounded border border-gold/30 bg-[#262019] px-1.5 py-0.5"
            >
              <span className="text-[13px] font-bold text-white">{t.v}</span>
              <small className="text-[10px] font-semibold text-gold">{t.l}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
