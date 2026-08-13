import logo from "../assets/logo.png";

const links = [
  { label: "About Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper-line bg-paper-2 pb-14 pt-11 text-muted sm:pb-12">
      <div className="mx-auto max-w-[1120px] px-4 text-center">
        <img
          src={logo}
          alt="Arkose Infosoft"
          className="mx-auto mb-3.5 h-16 max-w-[280px] object-contain"
        />
        <div className="mb-6 flex flex-wrap justify-center gap-5 text-[12.5px] font-semibold text-ink">
          {links.map((l, i) => (
            <span key={l.label} className="flex items-center gap-5">
              <a href={l.href} className="transition-colors hover:text-red-deep">
                {l.label}
              </a>
              {i < links.length - 1 && <span aria-hidden>·</span>}
            </span>
          ))}
        </div>
        <div className="mb-3 text-[12.5px]">
          Local Business Owners के लिए Premium Digital Web &amp; Ads Solutions
        </div>
        <div className="text-[12.5px]">
          Email:{" "}
          <a href="mailto:hello@arkoseinfosoft.com" className="font-semibold text-red-deep">
            hello@arkoseinfosoft.com
          </a>
          &nbsp;|&nbsp; Support: <span className="font-bold text-gold-deep">+91 90000 00000</span>
        </div>
        <div className="mt-4 text-[11px] opacity-75">
          Safe &amp; Secure Consultation · No Risk Guarantee · Independent Digital Agency
        </div>
      </div>
    </footer>
  );
}
