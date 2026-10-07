"use client";

import type { CaseStudySection } from "@/lib/data";

export function MobileToc({ sections }: { sections: CaseStudySection[] }) {
  return (
    <nav
      aria-label="Case study sections"
      className="-mx-6 mb-8 flex gap-2 overflow-x-auto px-6 pb-2 lg:hidden"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="shrink-0 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted transition-colors hover:text-foreground"
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
