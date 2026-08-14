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
      className="fixed top-0 inset-x-0 z-[70] w-full border-b border-gold/35 bg-[#16120e] py-2.5 sm:py-3 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md"
      aria-label="Limited Time Offer Banner"
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-4">
        {/* Left message with live pulse indicator */}
        <div className="flex items-center gap-2 text-[13px] font-semibold sm:text-[14px]">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="hidden md:inline">
            ⚡ <span className="font-bold text-yellow-400">स्पेशल ऑफर:</span> इस हफ्ते ₹999 वेबसाइट के लिए केवल कुछ ही स्लॉट बाकी हैं!
          </span>
          <span className="hidden sm:inline md:hidden">
            ⚡ <span className="font-bold text-yellow-400">स्पेशल ऑफर:</span> ₹999 में सीमित स्लॉट बाकी हैं
          </span>
          <span className="text-[12.5px] font-bold sm:hidden">
            🔥 <span className="text-yellow-400">₹999 ऑफर:</span> सीमित स्लॉट
          </span>
        </div>

        {/* Right Countdown Timer */}
        <div className="flex shrink-0 items-center gap-1.5 font-mono sm:gap-2">
          {[
            { v: left.h, l: "घं" },
            { v: left.m, l: "मि" },
            { v: left.s, l: "से" },
          ].map((t) => (
            <div
              key={t.l}
              className="flex items-center gap-1 rounded-md border border-gold/40 bg-[#262019] px-2 py-1 shadow-xs"
            >
              <span className="text-[13px] font-bold tracking-wider text-white leading-none sm:text-[14px]">
                {t.v}
              </span>
              <small className="text-[10px] font-bold text-gold sm:text-[10.5px]">
                {t.l}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
