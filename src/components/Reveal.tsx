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

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = distance;
    if (direction === "left") from.x = -distance;
    if (direction === "right") from.x = distance;
    if (direction === "scale") from.scale = 0.94;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
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
