import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "left" | "right" | "scale";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 40,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    const effDistance = isMobile ? Math.min(distance, 20) : distance;

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = effDistance;
    if (direction === "left") from.x = isMobile ? 0 : -effDistance;
    if (direction === "left" && isMobile) from.y = effDistance;
    if (direction === "right") from.x = isMobile ? 0 : effDistance;
    if (direction === "right" && isMobile) from.y = effDistance;
    if (direction === "scale") from.scale = 0.96;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
