import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { whatsappLink } from "../data/content";

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hi, mera naam ${name} hai. Mujhe apne ${
      type || "business"
    } ke liye ₹999 website chahiye. Mera number: ${phone}`;
    window.open(whatsappLink(message), "_blank");
  };

  return (
    <section className="section">
      <div className="mx-auto max-w-[1120px] px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_.9fr] md:gap-12">
          <Reveal direction="up">
            <span className="mb-2.5 block font-serif-hi text-[13px] font-bold tracking-wide text-red-deep">
              कोई बड़ा एडवांस पेमेंट नहीं
            </span>
            <h2 className="mb-3 font-serif-hi text-[clamp(22px,3.5vw,36px)] font-bold leading-[1.3] text-ink sm:mb-4">
              अपने बिज़नेस को 10x स्पीड से ऑनलाइन लाएं
            </h2>
            <p className="max-w-[440px] text-[14px] leading-relaxed text-muted sm:text-[14.5px]">
              सिर्फ़ एक छोटी फॉर्म एंट्री — हम 24–48 घंटे में आपके बिज़नेस की
              लाइव डेमो वेबसाइट बनाकर दिखाएंगे।
            </p>
          </Reveal>

          <Reveal
            direction="up"
            delay={0.1}
            className="border border-paper-line bg-card p-5 shadow-[0_20px_44px_rgba(140,32,21,0.08)] sm:p-7"
          >
            <form onSubmit={submit}>
              <label htmlFor="bname" className="mb-1.5 block font-serif-hi text-xs font-bold tracking-wide text-red-deep">
                आपका नाम
              </label>
              <input
                id="bname"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="जैसे — राहुल शर्मा"
                className="mb-4 w-full rounded border border-paper-line bg-paper px-3.5 py-3 text-base text-ink placeholder:text-[#a89a7a] focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <label htmlFor="bphone" className="mb-1.5 block font-serif-hi text-xs font-bold tracking-wide text-red-deep">
                WhatsApp नंबर
              </label>
              <input
                id="bphone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10 अंकों का मोबाइल नंबर"
                className="mb-4 w-full rounded border border-paper-line bg-paper px-3.5 py-3 text-base text-ink placeholder:text-[#a89a7a] focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <label htmlFor="btype" className="mb-1.5 block font-serif-hi text-xs font-bold tracking-wide text-red-deep">
                बिज़नेस टाइप
              </label>
              <input
                id="btype"
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="जैसे — सैलून, जिम, रियल एस्टेट..."
                className="mb-5 w-full rounded border border-paper-line bg-paper px-3.5 py-3 text-base text-ink placeholder:text-[#a89a7a] focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                type="submit"
                className="w-full rounded bg-red px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_3px_0_var(--color-red-deep)] sm:py-4 sm:text-[15.5px]"
              >
                फ्री Demo के लिए भेजें
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
