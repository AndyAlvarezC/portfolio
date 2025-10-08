import { useEffect, useRef, useState, FC, ReactNode } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom";
  delay?: number;
}

export const Reveal: FC<RevealProps> = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollReveal();

  const animations: Record<
    NonNullable<RevealProps["animation"]>,
    string
  > = {
    "fade-up": "translate-y-6 opacity-0",
    "fade-down": "-translate-y-6 opacity-0",
    "fade-left": "translate-x-6 opacity-0",
    "fade-right": "-translate-x-6 opacity-0",
    zoom: "scale-95 opacity-0",
  };

  const visibleClass = "translate-y-0 translate-x-0 scale-100 opacity-100";

  return (
    <div ref={ref} className={className}>
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? visibleClass : animations[animation]
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

