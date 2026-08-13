import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/content";

export default function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[999] w-full max-w-[100vw] border-t border-paper-line bg-paper/96 px-4 py-2 pb-[calc(8px+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_24px_rgba(140,32,21,0.12)] backdrop-blur-md sm:hidden"
      aria-label="Mobile Quick Action"
    >
      {/* Urgency strip */}
      <div className="slot-pulse mb-1.5 flex items-center justify-center gap-1.5 rounded-md bg-red-tint px-3 py-1 text-[11.5px] font-bold text-red-deep">
        <span className="text-[13px]">🔥</span>
        आज सिर्फ़ 3 स्लॉट बचे हैं — ऑफर सीमित समय के लिए
      </div>

      <a
        href={whatsappLink("Hi, mujhe apne business ke liye ₹999 website chahiye")}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded bg-red px-4 py-3 text-[14.5px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)]"
      >
        <MessageCircle className="h-[18px] w-[18px]" />
        <span>WhatsApp पर <span className="line-through opacity-60">₹4,999</span> → <span className="text-yellow-200">₹999</span> Demo बुक करें</span>
      </a>
    </div>
  );
}
