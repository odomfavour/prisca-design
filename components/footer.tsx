import {
  BehanceIcon,
  DribbbleIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "./brand-icons";
import { Logo } from "./logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Project" },
  { href: "#about", label: "About Me" },
  { href: "#contact", label: "Contact Me" },
];

const socials = [
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: DribbbleIcon, href: "https://dribbble.com", label: "Dribbble" },
  { icon: BehanceIcon, href: "https://behance.net", label: "Behance" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-accent px-6 pb-6 pt-12 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo dark />

        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/85">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 pt-6 text-center text-xs text-white/70">
        ©{new Date().getFullYear()} PriscaDesign. All Rights Reserved.
      </div>
    </footer>
  );
}
