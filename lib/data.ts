export type ProjectCategory = "Live Projects" | "Case Studies" | "Creative Shots";

export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "link"; text: string; href: string };

export type CaseStudySection = {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
  content?: CaseStudyBlock[];
  image?: string | boolean;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  date: string;
  category: ProjectCategory;
  cover: string;
  summary: string;
  caseStudy: CaseStudySection[];
  href?: string;
  sourceUrl?: string;
};

export { importedProjects as projects } from "./projects";

export type TrustedLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const trustedLogos: TrustedLogo[] = [
  {
    name: "Analytics Intelligence",
    src: "/images/logos/ai.png",
    width: 137,
    height: 40,
  },
  {
    name: "Original Invoice",
    src: "/images/logos/original.png",
    width: 127,
    height: 40,
  },
  {
    name: "MarketSq",
    src: "/images/logos/market-sq.png",
    width: 127,
    height: 40,
  },
  {
    name: "AsteriskRD",
    src: "/images/logos/asterisk.png",
    width: 182,
    height: 40,
  },
  {
    name: "Profitall",
    src: "/images/logos/profitall.png",
    width: 182,
    height: 40,
  },
  {
    name: "TradeTutor",
    src: "/images/logos/trade-tutor.png",
    width: 185,
    height: 40,
  },
];

export type SkillTab = "Skills" | "Tools";

export const skillsByTab: Record<SkillTab, string[]> = {
  Skills: [
    "UI Design",
    "UX Design",
    "User Research",
    "IA & User Flows",
    "Product Thinking",
    "Responsive Design",
    "UX Audits",
    "Design Systems",
    "Mobile Design",
    "Interaction",
    "Web Design",
    "Usability Testing",
    "Accessibility",
  ],
  Tools: [
    "Figma",
    "Framer",
    "FigJam",
    "Maze",
    "Jira & Notion",
    "Google Forms",
    "HTML & CSS",
    "AI Tools",
    "Medium",
  ],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Prisca has a strong eye for detail and a deep understanding of user experience. She consistently translates complex requirements into clear, usable designs and is a pleasure to collaborate with.",
    name: "Oluwatobi Onu",
    role: "PM at Profitall",
  },
  {
    quote:
      "Working with Prisca meant fewer revisions and faster sign-off. She asks the right questions early and hands off design files engineers actually enjoy building from.",
    name: "Daniel Achebe",
    role: "Eng Lead at TradeTutor",
  },
  {
    quote:
      "She has a rare mix of research rigor and visual craft. Every recommendation was backed by evidence, and the final UI still felt distinctive rather than generic.",
    name: "Grace Idowu",
    role: "Founder at MarketSq",
  },
];

export const caseStudySections: CaseStudySection[] = [
  {
    id: "introduction",
    label: "Introduction",
    heading: "Omivideo — AI Video Editing Platform",
    paragraphs: [
      "An AI-powered video editing platform designed to help content creators edit faster and publish with confidence. To understand user needs and pain points, I conducted user interviews and reviewed competitor products to identify gaps and opportunities.",
    ],
  },
  {
    id: "understanding-the-problem",
    label: "Understanding the Problem",
    heading: "Understanding the Problem",
    paragraphs: [
      "Creators told us editing tools were powerful but slow to learn, and that AI features often felt bolted on rather than built in. Through interviews and a competitive review, three recurring pain points emerged: cluttered timelines, unclear AI suggestions, and export settings that broke platform requirements.",
    ],
    image: true,
  },
  {
    id: "the-goal",
    label: "The Goal",
    heading: "The Goal",
    paragraphs: [
      "Give creators a faster path from raw footage to a published clip, with AI assistance that explains itself and a timeline that stays legible even on complex, multi-track edits.",
    ],
  },
  {
    id: "my-role",
    label: "My Role",
    heading: "My Role",
    paragraphs: [
      "I was responsible for the end-to-end design of the product, working closely with product managers, engineers, and key stakeholders. My role covered everything from early discovery and user research to defining the experience, designing high-fidelity interfaces, and supporting implementation through clear documentation and handoff.",
      "Throughout the project, I ensured design decisions were grounded in user needs, aligned with business goals, and scalable across future iterations.",
    ],
    image: true,
  },
  {
    id: "design-process",
    label: "Design Process",
    heading: "Design Process",
    paragraphs: [
      "The process moved through four stages: discovery interviews with 12 creators, synthesis into three core jobs-to-be-done, low-fidelity wireframes tested with five users, and a high-fidelity UI kit built for reuse across the product.",
    ],
  },
  {
    id: "user-research",
    label: "User Research",
    heading: "User Research",
    paragraphs: [
      "I ran moderated sessions with creators ranging from hobbyists to full-time editors, plus a short survey to validate priorities at scale. The strongest signal: people trusted AI suggestions more when they could see the reasoning behind them.",
    ],
  },
  {
    id: "ideation-wireframe",
    label: "Ideation & Wireframe",
    heading: "Ideation & Wireframe",
    paragraphs: [
      "Early wireframes explored three timeline layouts before settling on a track-grouped structure that scales from a single clip to a full multi-camera project without feeling cluttered.",
    ],
  },
  {
    id: "style-guide",
    label: "Style Guide",
    heading: "Style Guide",
    paragraphs: [
      "The visual system uses a dark editing canvas to keep footage the focal point, a single accent color reserved for AI-driven actions, and a compact type scale suited to dense toolbars.",
    ],
  },
  {
    id: "high-fidelity-design",
    label: "High Fidelity Design",
    heading: "UI Interface",
    paragraphs: [
      "I was responsible for the end-to-end design of the product, working closely with product managers, engineers, and key stakeholders. My role covered everything from early discovery and user research to defining the experience, designing high-fidelity interfaces, and supporting implementation through clear documentation and handoff.",
      "Throughout the project, I ensured design decisions were grounded in user needs, aligned with business goals, and scalable across future iterations.",
    ],
    image: true,
  },
  {
    id: "conclusion",
    label: "Conclusion",
    heading: "Conclusion",
    paragraphs: [
      "The redesign shipped with a 40% reduction in time-to-first-export during beta testing, and creators reported higher trust in AI suggestions once the reasoning was made visible in the interface.",
    ],
  },
];
