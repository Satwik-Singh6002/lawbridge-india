import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export const ScrollReveal = ({ children, className = "", direction = "up", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass = direction === "left"
    ? "animate-fade-in-left"
    : direction === "right"
    ? "animate-fade-in-right"
    : "animate-fade-in-up";

  return (
    <div
      ref={ref}
      className={`${visible ? animClass : "opacity-0"} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
