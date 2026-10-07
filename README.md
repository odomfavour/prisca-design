# PriscaDesign Portfolio

Built with **Next.js 16** (App Router, Turbopack) and **Tailwind CSS v4**.

## What's included

- **Home page** (`/`): hero, trusted-by marquee, mockup strip, Selected
  Projects (with working **Case Studies / Live Projects / Design Shots**
  tabs), About, Skills & Capabilities (with working **Skills / Tools**
  toggle), a Testimonials carousel, and a Contact section.
- **Case study pages** (`/case-study/[slug]`): one per project in
  `lib/data.ts`, with a sticky sidebar table of contents that highlights the
  section currently in view (scroll-spy), a mobile TOC, a "Go Back" button,
  and a related-projects grid.
- **Dark / light mode**, toggleable from the navbar, powered by `next-themes`
  and persisted across visits.
- **Working contact form** with client + server-side validation
  (`app/api/contact/route.ts`). It currently logs submissions to the server
  console — see "Wire up real email delivery" below to actually send them.
- Fully responsive, keyboard-accessible (visible focus states, semantic
  landmarks), and respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx              Root layout, theme provider
  page.tsx                Home page
  case-study/[slug]/      Dynamic case study route
  api/contact/route.ts    Contact form endpoint
components/               All UI sections and shared pieces
lib/data.ts                Projects, testimonials, skills — edit this to
                           change site content
public/images/             Placeholder SVG artwork — swap for real photos
```

## Customizing content

Almost everything text/data-driven lives in `lib/data.ts`:

- `projects` — add/edit case studies, live projects, and design shots.
  Each entry's `slug` becomes its URL (`/case-study/<slug>`).
- `caseStudySections` — the section list rendered on every case study page
  (currently shared across all slugs; give each project its own array if you
  want unique write-ups per case study).
- `testimonials`, `skillsByTab`, `trustedLogos` — content for those sections.

## Swapping in real images

Replace the files in `public/images/` (or point `cover` in `lib/data.ts` to
your own images) — avatar, portrait, project covers, and mockups are all
placeholder SVGs generated for this build.

Also replace `public/resume.pdf` with your actual resume — it's currently a
placeholder file.

## Fonts

This build ships with system font stacks because the sandbox this was built
in has no network access to Google Fonts. To use the intended pairing
(Plus Jakarta Sans for display type, Inter for body text), once you have the
project on a machine with internet access:

```tsx
// app/layout.tsx
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

// add `${jakarta.variable} ${inter.variable}` to the <body> className
```

Then in `app/globals.css`, restore:

```css
--font-display: var(--font-jakarta);
--font-sans: var(--font-inter);
```

## Wiring up real email delivery

`app/api/contact/route.ts` validates submissions and currently just logs
them. To actually send you an email, plug in a provider such as
[Resend](https://resend.com) or Nodemailer, using an API key stored in an
environment variable (`.env.local`, never committed).

## Theming

Colors live as CSS variables in `app/globals.css` (`:root` for light mode,
`.dark` for dark mode). Change `--accent` to re-theme the whole site.
