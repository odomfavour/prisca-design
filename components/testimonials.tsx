"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

type Testimonial = (typeof testimonials)[number];

const AUTOPLAY_MS = 4000;
const GAP = "1.25rem"; // matches gap-5

function Card({ t, className = "" }: { t: Testimonial; className?: string }) {
  return (
    <figure
      className={`flex h-full flex-col rounded-2xl border border-border bg-surface p-6 text-left transition-[transform,opacity,box-shadow] duration-500 dark:border-white dark:bg-white ${className}`}
    >
      <Quote className="h-6 w-6 text-accent" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted dark:text-neutral-600">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold dark:text-neutral-900">
            {t.name}
          </p>
          <p className="text-xs text-muted dark:text-neutral-500">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const n = testimonials.length;
  const [pos, setPos] = useState(0); // unbounded; wrapped with modulo when reading data
  const [paused, setPaused] = useState(false);

  const prev = () => setPos((p) => p - 1);
  const next = () => setPos((p) => p + 1);

  // Auto-advance one card at a time. Restarts after every change (incl. manual clicks).
  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setPos((p) => p + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [pos, paused, n]);

  // Render a small window around the current position: one card off-screen on
  // each side so cards slide in/out instead of popping.
  const slides = [-1, 0, 1, 2, 3].map((offset) => {
    const abs = pos + offset;
    return { abs, offset, t: testimonials[((abs % n) + n) % n] };
  });

  const mousePause = (value: boolean) => (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setPaused(value);
  };

  return (
    <section className="bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted dark:border-white dark:bg-white dark:text-neutral-900">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Testimonials
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          What clients, collaborators, and teams say about working with me.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
          Reflections on how my work has helped teams build better, more
          effective products.
        </p>

        <div
          onPointerEnter={mousePause(true)}
          onPointerLeave={mousePause(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
            className="-my-6 mt-4 overflow-hidden py-6"
          >
            {/* One grid cell; every card is stacked in it and slid with translateX */}
            <div className="grid grid-cols-1 md:grid-cols-[calc((100%_-_2.5rem)_/_3)]">
              {/* Invisible sizer: keeps the row as tall as the tallest testimonial */}
              {testimonials.map((t, i) => (
                <div
                  key={`size-${i}`}
                  aria-hidden
                  className="invisible col-start-1 row-start-1"
                >
                  <Card t={t} />
                </div>
              ))}

              {slides.map(({ abs, offset, t }) => (
                <div
                  key={abs}
                  aria-hidden={offset < 0 || offset > 2}
                  className="col-start-1 row-start-1 transition-transform duration-500 ease-in-out will-change-transform"
                  style={{
                    transform: `translateX(calc(${offset} * (100% + ${GAP})))`,
                  }}
                >
                  <Card
                    t={t}
                    className={
                      offset === 1
                        ? "md:scale-105 md:shadow-lg"
                        : "md:opacity-80 dark:md:opacity-90"
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
