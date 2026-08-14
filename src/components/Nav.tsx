import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { whatsappLink } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`sticky top-[43px] sm:top-[47px] z-[60] border-b transition-all duration-300 ${
        scrolled
          ? "border-paper-line bg-paper/95 backdrop-blur-md shadow-[0_4px_20px_rgba(140,32,21,0.06)]"
          : "border-transparent bg-paper/80 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1120px] items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Arkose Infosoft"
            className={`w-auto object-contain drop-shadow-sm transition-all duration-300 ${
              scrolled ? "h-16 sm:h-20" : "h-20 sm:h-28"
            }`}
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
    </motion.nav>
  );
}
