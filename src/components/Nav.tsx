import { MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { whatsappLink } from "../data/content";

export default function Nav() {
  return (
    <nav className="relative z-[50] w-full border-b border-paper-line/50 bg-paper/90 transition-colors duration-300">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-3 sm:py-3.5">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Arkose Infosoft"
            className="h-14 w-auto object-contain drop-shadow-sm transition-all duration-300 sm:h-16"
          />
        </a>
        <a
          href={whatsappLink("Hi, mujhe apne business ke liye ₹999 website chahiye")}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded bg-red px-4 py-2.5 text-[13.5px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)] transition-all hover:-translate-y-px active:translate-y-px active:shadow-[0_1px_0_var(--color-red-deep)] sm:px-5"
        >
          <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline">WhatsApp पर बात करें</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
