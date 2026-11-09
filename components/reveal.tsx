"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// Content is visible in the server HTML, including when JavaScript is disabled.
// Only opt into hiding it once an observer is ready to reveal it.
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motion.matches || !("IntersectionObserver" in window)) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        frame = requestAnimationFrame(() => {
          element.dataset.reveal = "visible";
        });
        observer.disconnect();
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 },
    );

    element.dataset.reveal = "pending";
    observer.observe(element);
    const show = () => {
      if (motion.matches) {
        cancelAnimationFrame(frame);
        delete element.dataset.reveal;
        observer.disconnect();
      }
    };
    motion.addEventListener("change", show);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener("change", show);
      delete element.dataset.reveal;
    };
  }, []);

  return ref;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`motion-reveal ${className ?? ""}`}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-x": direction === "left" ? "-120px" : direction === "right" ? "120px" : "0px",
        "--reveal-y": direction === "up" ? "10px" : "0px",
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function AnimatedText({
  children,
  split = "words",
  scale = 1,
  delay = 0,
}: {
  children: string;
  split?: "words" | "letters" | "text";
  scale?: number;
  delay?: number;
}) {
  const ref = useReveal<HTMLSpanElement>();
  let index = 0;
  const part = (text: string) => {
    const current = index++;
    return (
      <span
        key={current}
        className="motion-text-part"
        style={{
          "--reveal-delay": `${delay + current * (split === "letters" ? 25 : 40)}ms`,
        } as CSSProperties}
      >
        {text}
      </span>
    );
  };

  return (
    <span
      ref={ref}
      className="motion-text"
      style={{ "--reveal-scale": scale } as CSSProperties}
    >
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {split === "text"
          ? part(children)
          : children.split(/(\s+)/).map((word, i) =>
              /^\s+$/.test(word) ? word : (
                <span className="motion-word" key={i}>
                  {split === "letters" ? Array.from(word).map(part) : part(word)}
                </span>
              ),
            )}
      </span>
    </span>
  );
}
