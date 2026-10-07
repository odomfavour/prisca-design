import { File as FileIcon, Mail } from "lucide-react";
import Image from "next/image";
import {
  DribbbleIcon,
  LinkedInIcon,
  MediumIcon,
  YoutubeIcon,
} from "./brand-icons";

const socials = [
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "text-[#0A66C2]",
  },
  {
    icon: DribbbleIcon,
    href: "https://dribbble.com",
    label: "Dribbble",
    color: "text-[#EA4C89]",
  },
  {
    icon: MediumIcon,
    href: "https://medium.com",
    label: "Medium",
    color: "text-black",
  },
  {
    icon: YoutubeIcon,
    href: "https://youtube.com",
    label: "YouTube",
    color: "text-[#FF0000]",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface py-1 pl-1.5 pr-2.5 text-xs font-semibold text-muted dark:border-white dark:bg-white dark:text-neutral-900">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            About Me
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight dark:text-white sm:text-4xl">
            I design with intention, empathy, and a strong focus on outcomes.
          </h2>

          <p className="mt-5 text-sm leading-6 text-muted dark:text-white/90 sm:text-base">
            Over the years, I&apos;ve led end-to-end design processes—from
            research and strategy to high-fidelity design, prototyping, and
            handoff. I value clarity, simplicity, and intentional
            decision-making, and I&apos;m especially drawn to solving complex
            problems through structured thinking and strong design systems.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface transition-colors hover:bg-surface-2 dark:border-white dark:bg-white dark:hover:bg-neutral-200"
              >
                <Icon className={`h-5 w-5 ${color}`} />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex h-[42px] items-center gap-2.5 rounded-lg bg-accent px-4 text-base font-medium text-accent-foreground transition hover:opacity-90"
            >
              <FileIcon className="h-5 w-5" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex h-[42px] items-center gap-2.5 rounded-lg border  bg-surface px-4 text-base font-medium text-foreground transition-colors hover:bg-surface-2 border-accent dark:border-white dark:bg-white dark:text-accent dark:hover:bg-neutral-200"
            >
              <Mail className="h-5 w-5" /> Contact Me
            </a>
          </div>
        </div>

        <div className="aspect-[15/14] overflow-hidden rounded-xl">
          <Image
            src="/images/nneoma.png"
            alt="Portrait of Prisca"
            width={500}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
