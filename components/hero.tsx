import { File as FileIcon, Mail } from "lucide-react";
import Image from "next/image";
import {
  BehanceIcon,
  DribbbleIcon,
  FigmaIcon,
  MediumIcon,
} from "./brand-icons";

const tile =
  "absolute hidden h-[92px] w-[92px] items-center justify-center rounded-3xl bg-white shadow-xl shadow-black/10 ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10 lg:flex";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Wave background: subtle in light mode, inverted + dimmer in dark mode */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-60 dark:opacity-20 dark:invert"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-12 text-center sm:pt-14">
        {/* Floating tiles — positioned against the wide container, desktop only */}
        <span
          className={`${tile} left-12 top-44 -rotate-12  dark:border-white dark:bg-white dark:text-accent dark:hover:bg-neutral-200`}
        >
          <FigmaIcon className="h-12 w-12" />
        </span>
        <span
          className={`${tile} right-12 top-44 rotate-12  dark:border-white dark:bg-white dark:text-accent dark:hover:bg-neutral-200`}
        >
          <DribbbleIcon className="h-12 w-12 text-[#ea4c89]" />
        </span>
        <span
          className={`${tile} bottom-16 left-12 rotate-12  dark:border-white dark:bg-white`}
        >
          <MediumIcon className="h-12 w-12 text-black " />
        </span>
        <span
          className={`${tile} bottom-16 right-12 -rotate-12  dark:border-white dark:bg-white dark:text-accent dark:hover:bg-neutral-200`}
        >
          <BehanceIcon className="h-12 w-12 text-[#1769ff]" />
        </span>

        <Image
          src="/images/avatar.png"
          alt="Portrait of Prisca"
          width={140}
          height={140}
          className="h-[140px] w-[140px] rounded-full object-cover ring-4 ring-background"
          priority
        />

        <p className="mt-8 text-xl text-foreground">Hi, I&apos;m Prisca 👋</p>

        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          I craft digital experiences that
          <br className="hidden sm:block" /> deliver impact.
        </h1>

        <p className="mt-6 max-w-5xl text-base leading-relaxed text-muted sm:text-lg">
          A Product &amp; UI/UX Designer with extensive experience crafting
          user-centered, scalable products across AI, fintech, healthcare,
          e-commerce, and enterprise platforms. I blend UX principles, research,
          and modern design systems to deliver measurable results.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition hover:opacity-90"
          >
            <FileIcon className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10  dark:border-white dark:bg-white dark:text-accent dark:hover:bg-neutral-200"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
