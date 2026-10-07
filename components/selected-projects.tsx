"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data";
import { ProjectCard } from "./project-card";

const tabs: ProjectCategory[] = [
  "Case Studies",
  "Live Projects",
  "Design Shots",
];

export function SelectedProjects() {
  const [active, setActive] = useState<ProjectCategory>("Case Studies");
  const filtered = projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted  dark:border-white dark:bg-white dark:text-neutral-900">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Projects
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Selected Projects
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            A selection of real-world projects and design explorations focused
            on solving problems and delivering impact.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-8 flex flex-wrap gap-2 sm:inline-flex sm:gap-1 sm:rounded-full sm:border sm:border-border sm:bg-surface sm:p-1 dark:sm:border-white dark:sm:bg-white"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === tab
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-surface text-muted hover:text-foreground sm:border-transparent sm:bg-transparent dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 dark:sm:border-transparent dark:sm:bg-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length ? (
            filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <p className="col-span-full py-10 text-center text-sm text-muted">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
