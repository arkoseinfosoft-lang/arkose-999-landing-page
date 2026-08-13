import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/content";

export default function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[999] border-t border-paper-line bg-paper/96 px-4 py-2.5 shadow-[0_-8px_24px_rgba(140,32,21,0.12)] backdrop-blur-md sm:hidden"
      aria-label="Mobile Quick Action"
    >
      <a
        href={whatsappLink("Hi, mujhe apne business ke liye ₹999 website chahiye")}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded bg-red px-4 py-3.5 text-[14.5px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)]"
      >
        <MessageCircle className="h-[18px] w-[18px]" />
        WhatsApp पर ₹999 Demo बुक करें
      </a>
    </div>
  );
}
