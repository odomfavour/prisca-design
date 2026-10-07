"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { CaseStudySection } from "@/lib/data";

export function SidebarToc({ sections }: { sections: CaseStudySection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden shrink-0 lg:block lg:w-64">
      <div className="sticky top-24 flex flex-col gap-6">
        <button
          onClick={() => router.back()}
          className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-2"
        >
          <ArrowLeft className="h-4 w-4" /> Go Back
        </button>

        <nav aria-label="Case study sections" className="flex flex-col gap-3 text-sm">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`transition-colors ${
                activeId === section.id
                  ? "font-semibold text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
