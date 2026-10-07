"use client";

import { useState } from "react";
import { skillsByTab, type SkillTab } from "@/lib/data";

const tabs: SkillTab[] = ["Skills", "Tools"];

export function Skills() {
  const [active, setActive] = useState<SkillTab>("Skills");

  return (
    <section className="bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted dark:border-white dark:bg-white dark:text-neutral-900">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Skills &amp;
          Tools
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Skills &amp; Capabilities
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
          A snapshot of the skills and tools I use to design, build, and deliver
          effective digital products.
        </p>

        <div
          role="tablist"
          aria-label="Skills or tools"
          className="mt-8 inline-flex gap-1 rounded-full border border-border bg-surface p-1 dark:border-white dark:bg-white dark:text-neutral-900"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === tab
                  ? "bg-accent text-accent-foreground"
                  : "text-muted hover:text-foreground dark:text-black dark:hover:text-neutral-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {skillsByTab[active].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground dark:border-white dark:bg-white dark:text-neutral-900"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
