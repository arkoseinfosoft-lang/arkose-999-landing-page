import { MapPin, ShieldCheck, Mail, PhoneCall } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi (NCR)",
  "Jammu & Kashmir",
  "Ladakh",
  "Chandigarh",
  "Puducherry",
  "Dadra & Nagar Haveli",
  "Daman & Diu",
  "Andaman & Nicobar",
];

export default function Footer() {
  return (
    <footer className="border-t border-paper-line bg-paper-2 pb-16 pt-12 text-muted sm:pb-12">
      <div className="mx-auto max-w-[1120px] px-4 text-center">
        {/* Brand Logo */}
        <img
          src={logo}
          alt="Arkose Infosoft"
          className="mx-auto mb-6 h-20 sm:h-24 max-w-[360px] object-contain drop-shadow-sm"
        />

        {/* States of India Section (SEO & National Reach) */}
        <div className="mb-8 rounded-2xl border border-paper-line bg-card/85 p-5 shadow-[0_4px_20px_rgba(140,32,21,0.03)] sm:p-7">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-gold-tint px-3 py-1 text-[11.5px] font-bold text-gold-deep border border-gold/30">
            <MapPin className="h-3.5 w-3.5 text-red-deep" />
            <span>Serving Clients Across India</span>
          </div>

          <h3 className="mb-1 text-[15px] font-bold text-ink sm:text-[17px]">
            Providing low cost website design &amp; development services in major states of India
          </h3>
          <p className="mx-auto mb-4 max-w-[620px] text-[12px] text-muted sm:text-[12.5px]">
            हम पूरे भारत के हर राज्य में लोकल बिज़नेसेज़ के लिए सिर्फ ₹999 में हाई-परफॉर्मेंस, मोबाइल-फ्रेंडली वेबसाइट्स बनाते हैं।
          </p>

          {/* All States Micro-Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {indianStates.map((state) => (
              <span
                key={state}
                className="rounded-full border border-paper-line bg-paper px-2.5 py-0.5 text-[11px] font-medium text-ink/80 transition-all duration-150 hover:border-gold hover:bg-gold-tint hover:text-red-deep"
              >
                {state}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="mb-5 flex flex-wrap justify-center gap-4 text-[12.5px] font-semibold text-ink sm:gap-6">
          {links.map((l, i) => (
            <span key={l.label} className="flex items-center gap-4 sm:gap-6">
              <a href={l.href} className="transition-colors hover:text-red-deep">
                {l.label}
              </a>
              {i < links.length - 1 && <span aria-hidden className="text-paper-line">·</span>}
            </span>
          ))}
        </div>

        {/* Agency Tagline */}
        <div className="mb-3 text-[12.5px] text-muted">
          Local Business Owners के लिए Premium Website Development Solutions
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-[12.5px] sm:gap-5">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-red-deep" />
            <span>Email:</span>
            <a
              href="mailto:hello@arkoseinfosoft.in"
              className="font-semibold text-red-deep transition-colors hover:underline"
            >
              hello@arkoseinfosoft.in
            </a>
          </span>
          <span aria-hidden className="hidden text-paper-line sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <PhoneCall className="h-3.5 w-3.5 text-gold-deep" />
            <span>Support:</span>
            <a
              href="tel:+919839591207"
              className="font-bold text-gold-deep transition-colors hover:text-ink"
            >
              +91 98395 91207
            </a>
          </span>
        </div>

        {/* Guarantee Badge */}
        <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] opacity-80">
          <ShieldCheck className="h-3.5 w-3.5 text-green-700" />
          <span>Safe &amp; Secure Consultation · 0% Risk Guarantee · Independent Digital Agency</span>
        </div>
      </div>
    </footer>
  );
}
