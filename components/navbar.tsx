"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Me" },
  { href: "#contact", label: "Contact Me" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // set correct state on mount (e.g. page loaded mid-scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open: close on Escape, and close if the screen grows to desktop size
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const headerStyle = open
    ? "border-b border-border bg-background"
    : scrolled
      ? "border-b border-border bg-background/80 backdrop-blur"
      : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${headerStyle}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/30 transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface-2"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Collapsible panel: animates height via grid rows, hidden from tab order when closed */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-in-out md:hidden ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-6 pb-6 pt-2">
            <nav className="flex flex-col text-base font-medium">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3.5 text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
