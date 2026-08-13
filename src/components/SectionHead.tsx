import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  body,
  center = false,
  ornament = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  center?: boolean;
  ornament?: boolean;
}) {
  return (
    <Reveal
      direction="up"
      className={`mb-10 max-w-[640px] ${center ? "mx-auto text-center" : ""}`}
    >
      {ornament && (
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-11 bg-gradient-to-r from-transparent to-gold-deep" />
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-gold-deep">
            <polygon points="12 3 19 12 12 21 5 12" />
          </svg>
          <span className="h-px w-11 bg-gradient-to-l from-transparent to-gold-deep" />
        </div>
      )}
      <span
        className={`inline-flex items-center gap-1.5 font-serif-hi text-[13px] font-bold tracking-wide text-red-deep ${
          center ? "w-full justify-center" : ""
        }`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-2.5 font-serif-hi text-[clamp(24px,3.1vw,33px)] font-bold leading-[1.32] text-ink">
        {title}
      </h2>
      {body && <p className="mt-3 text-[15px] leading-[1.7] text-muted">{body}</p>}
    </Reveal>
  );
}
