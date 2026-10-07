import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-bold">{project.title}</h3>
          <span className="shrink-0 text-xs text-muted">{project.date}</span>
        </div>
        <p className="text-sm text-muted">{project.role}</p>
        <Link
          href={`/case-study/${project.slug}`}
          className="mt-auto flex w-fit items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground  dark:bg-white dark:text-accent dark:hover:bg-neutral-200"
        >
          View Case Study <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
