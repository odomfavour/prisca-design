export type ProjectCategory = "Case Studies" | "Live Projects" | "Design Shots";

export type CaseStudySection = {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
  image?: string;
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
};

export const projects: Project[] = [
  // =========================================================
  // MEDIMATE
  // =========================================================
  {
    slug: "medimate",
    title: "MediMate",
    role: "UI/UX Designer and Researcher",
    date: "Apr 17, 2025",
    category: "Case Studies",
    cover: "/images/portfolio.png",
    summary:
      "A medication-tracking app that helps patients stay on top of prescriptions, refills, and doctor check-ins.",

    caseStudy: [
      {
        id: "introduction",
        label: "Introduction",
        heading: "MediMate — Making Medication Management Simpler",
        paragraphs: [
          "MediMate is a medication-tracking experience designed to help people stay organized with prescriptions, refills, and doctor check-ins.",
          "The goal was to create a simple experience that reduces the mental effort involved in remembering medications and keeping track of important health-related tasks.",
        ],
        image: "/images/medimate/introduction.png",
      },

      {
        id: "understanding-the-problem",
        label: "Understanding the Problem",
        heading: "Managing medication can become overwhelming",
        paragraphs: [
          "Keeping track of multiple medications can quickly become difficult, especially when prescriptions have different schedules, refill dates, and instructions.",
          "The challenge was to bring these tasks into one clear experience without making the interface feel complicated or clinical.",
          "The design needed to make the most important information immediately visible while giving users enough detail when they needed it.",
        ],
        image: "/images/medimate/problem.png",
      },

      {
        id: "the-goal",
        label: "The Goal",
        heading: "Create a clearer way to stay on top of medication",
        paragraphs: [
          "The goal was to design a medication companion that makes daily tracking feel simple and predictable.",
          "The experience needed to help users understand what they need to take, what is coming next, and when they need to take action such as requesting a refill or preparing for a doctor check-in.",
        ],
      },

      {
        id: "my-role",
        label: "My Role",
        heading: "From research to final interface",
        paragraphs: [
          "I worked across the product experience, from understanding user needs and defining the information structure to designing the interface and refining the interaction patterns.",
          "My focus was on creating an experience that balanced clarity, accessibility, and ease of use while keeping the most important medication information easy to find.",
        ],
      },

      {
        id: "design-process",
        label: "Design Process",
        heading: "A user-centered approach",
        paragraphs: [
          "The design process started by understanding the challenges people face when managing medication and identifying the information they need most frequently.",
          "I then mapped the key user flows, explored different dashboard structures, created wireframes, and iterated toward a more focused visual system.",
          "The final interface was refined around the core actions users need to perform regularly: checking medications, tracking schedules, managing refills, and preparing for appointments.",
        ],
        image: "/images/medimate/process.png",
      },

      {
        id: "user-research",
        label: "User Research",
        heading: "Understanding real medication routines",
        paragraphs: [
          "Research focused on how people currently remember medications, organize prescriptions, and keep track of upcoming health-related tasks.",
          "A recurring design opportunity was reducing the amount of information users have to remember themselves.",
          "This influenced the decision to make upcoming medication actions, reminders, and refill information more prominent within the experience.",
        ],
        image: "/images/medimate/research.png",
      },

      {
        id: "ideation-wireframe",
        label: "Ideation & Wireframe",
        heading: "Turning complex information into simple flows",
        paragraphs: [
          "Early concepts explored different ways of presenting medication schedules and upcoming actions.",
          "The wireframes focused on hierarchy first rather than visual decoration, helping determine which information should be immediately visible and which could remain secondary.",
          "The final structure prioritized quick scanning so users could understand their medication status without navigating through multiple screens.",
        ],
        image: "/images/medimate/wireframe.png",
      },

      {
        id: "style-guide",
        label: "Style Guide",
        heading: "A calm and approachable visual system",
        paragraphs: [
          "The visual direction was designed to feel reassuring, organized, and approachable rather than overly clinical.",
          "Typography, spacing, cards, buttons, and status indicators were structured to create a consistent system that could scale across the product.",
          "Clear visual hierarchy was especially important because medication information can become dense when several prescriptions are displayed together.",
        ],
        image: "/images/medimate/style-guide.png",
      },

      {
        id: "high-fidelity-design",
        label: "High Fidelity Design",
        heading: "A focused medication management experience",
        paragraphs: [
          "The high-fidelity interface brings the main medication tasks into a clearer and more approachable experience.",
          "The dashboard gives users a quick overview of what requires attention, while dedicated views provide more detailed prescription and refill information.",
          "The final design keeps the interface lightweight while still providing the information users need to confidently manage their medication routine.",
        ],
        image: "/images/medimate/final-design.png",
      },

      {
        id: "conclusion",
        label: "Conclusion",
        heading: "Designing for confidence and clarity",
        paragraphs: [
          "MediMate demonstrates how a complex information problem can be simplified through clear hierarchy, focused flows, and thoughtful interaction design.",
          "The project reinforced the importance of designing around people's existing routines instead of asking them to learn an entirely new way of managing their medication.",
        ],
      },
    ],
  },

  // =========================================================
  // OMIVIDEO
  // =========================================================
  {
    slug: "omivideo",
    title: "Omivideo — AI Video Editing Platform",
    role: "UI/UX Designer and Researcher",
    date: "Mar 02, 2025",
    category: "Case Studies",
    cover: "/images/portfolio.png",
    summary:
      "An AI-powered video editing platform designed to help content creators edit faster and publish with confidence.",

    caseStudy: [
      {
        id: "introduction",
        label: "Introduction",
        heading: "Omivideo — AI Video Editing Platform",
        paragraphs: [
          "Omivideo is an AI-powered video editing platform designed to help content creators edit faster and publish with confidence.",
          "To understand user needs and pain points, I explored creator workflows, reviewed competing products, and identified opportunities where AI could make editing more efficient without taking control away from the creator.",
        ],
        image: "/images/omivideo/introduction.png",
      },

      {
        id: "understanding-the-problem",
        label: "Understanding the Problem",
        heading: "Powerful editing tools can still feel difficult to use",
        paragraphs: [
          "Creators told us that existing editing tools were powerful but often slow to learn and difficult to navigate.",
          "AI features also frequently felt disconnected from the main editing workflow instead of being naturally integrated into it.",
          "Three recurring pain points emerged: cluttered timelines, unclear AI suggestions, and export settings that could create problems when content needed to meet platform requirements.",
        ],
        image: "/images/omivideo/problem.png",
      },

      {
        id: "the-goal",
        label: "The Goal",
        heading: "Make the path from footage to published video faster",
        paragraphs: [
          "The goal was to give creators a faster path from raw footage to a published clip.",
          "AI assistance needed to feel useful rather than mysterious, so recommendations had to be understandable and easy to accept, modify, or dismiss.",
          "At the same time, the timeline needed to remain readable as projects became more complex.",
        ],
      },

      {
        id: "my-role",
        label: "My Role",
        heading: "End-to-end product design",
        paragraphs: [
          "I was responsible for the end-to-end design of the product, working across discovery, user research, information architecture, interaction design, visual design, and handoff.",
          "I worked closely with product managers, engineers, and stakeholders to translate user needs into practical product experiences.",
          "Throughout the project, I focused on keeping design decisions grounded in user needs while ensuring the system could scale across future product iterations.",
        ],
      },

      {
        id: "design-process",
        label: "Design Process",
        heading: "From discovery to a reusable editing system",
        paragraphs: [
          "The process moved through discovery interviews, synthesis, wireframing, usability testing, and high-fidelity design.",
          "Research insights were translated into core user needs and then explored through multiple timeline and AI interaction concepts.",
          "The final design system was structured to support repeated patterns across the editing experience instead of treating each screen as an isolated interface.",
        ],
        image: "/images/omivideo/process.png",
      },

      {
        id: "user-research",
        label: "User Research",
        heading: "Understanding how creators actually edit",
        paragraphs: [
          "I ran moderated sessions with creators ranging from hobbyists to full-time editors, alongside a short survey to validate priorities.",
          "One of the strongest signals was that creators trusted AI suggestions more when they could understand why a recommendation was being made.",
          "This insight directly influenced the interface by making AI actions more transparent and easier to evaluate.",
        ],
        image: "/images/omivideo/research.png",
      },

      {
        id: "ideation-wireframe",
        label: "Ideation & Wireframe",
        heading: "Exploring a timeline that stays manageable",
        paragraphs: [
          "Early wireframes explored multiple timeline structures and different ways of presenting AI recommendations alongside editing controls.",
          "The final direction used a track-grouped structure that could scale from a simple clip to a more complex multi-track project without making the workspace feel unnecessarily cluttered.",
          "Wireframes were tested before moving into the high-fidelity interface.",
        ],
        image: "/images/omivideo/wireframe.png",
      },

      {
        id: "style-guide",
        label: "Style Guide",
        heading: "A visual system built for focused editing",
        paragraphs: [
          "The visual system uses a dark editing canvas so the footage remains the focal point.",
          "A single accent color is reserved for AI-driven actions, helping users distinguish intelligent assistance from standard editing controls.",
          "A compact type scale and consistent spacing system support the dense toolbars and controls required by a professional editing environment.",
        ],
        image: "/images/omivideo/style-guide.png",
      },

      {
        id: "high-fidelity-design",
        label: "High Fidelity Design",
        heading: "Bringing AI naturally into the editing workflow",
        paragraphs: [
          "The high-fidelity interface combines the timeline, media controls, AI assistance, and export workflow into a more cohesive editing environment.",
          "AI suggestions are presented as part of the editing process rather than as a separate feature, allowing creators to understand and act on recommendations without losing control of their work.",
          "The final interface was designed to remain clear even as projects become more complex.",
        ],
        image: "/images/omivideo/final-design.png",
      },

      {
        id: "conclusion",
        label: "Conclusion",
        heading: "Making AI feel useful, understandable, and controllable",
        paragraphs: [
          "The redesign focused on reducing friction without removing creative control from the editor.",
          "The final experience made AI assistance more transparent while improving the overall structure of the editing workspace.",
          "The project reinforced an important principle: AI-powered products become more trustworthy when users understand what the system is doing and remain in control of the final decision.",
        ],
      },
    ],
  },

  // =========================================================
  // PROFITALL
  // =========================================================
  {
    slug: "profitall",
    title: "Profitall — Expense Intelligence",
    role: "Product Designer",
    date: "Jan 14, 2025",
    category: "Case Studies",
    cover: "/images/portfolio.png",
    summary:
      "A fintech dashboard that gives small business owners a clear, real-time read on cash flow and spend.",

    caseStudy: [
      {
        id: "introduction",
        label: "Introduction",
        heading: "Profitall — Expense Intelligence",
        paragraphs: [
          "Profitall is a fintech dashboard designed to give small business owners a clearer, real-time view of cash flow and spending.",
          "The project focused on turning financial information into a more understandable experience so business owners could quickly see where their money was going and identify areas that required attention.",
        ],
        image: "/images/profitall/introduction.png",
      },

      {
        id: "understanding-the-problem",
        label: "Understanding the Problem",
        heading: "Financial data is useful only when it is understandable",
        paragraphs: [
          "Small business owners often need to make financial decisions quickly, but financial dashboards can make important information difficult to interpret.",
          "Large amounts of transactions and financial metrics can create noise when users are primarily looking for answers to simple questions: How much money is coming in? Where is it going? What needs attention?",
          "The design challenge was to make financial information easier to scan while still providing enough detail for deeper investigation.",
        ],
        image: "/images/profitall/problem.png",
      },

      {
        id: "the-goal",
        label: "The Goal",
        heading: "Turn financial data into useful decisions",
        paragraphs: [
          "The goal was to create a dashboard that gives business owners an immediate understanding of their financial position.",
          "Instead of simply displaying numbers, the experience should help users identify patterns, understand spending, and recognize important changes in their cash flow.",
        ],
      },

      {
        id: "my-role",
        label: "My Role",
        heading: "Product design focused on clarity",
        paragraphs: [
          "As the Product Designer, I focused on the structure and usability of the dashboard experience.",
          "My work included organizing financial information, defining dashboard hierarchy, designing data visualization patterns, and refining the interface so important information could be understood quickly.",
          "I also considered how the system could support additional financial features as the product evolved.",
        ],
      },

      {
        id: "design-process",
        label: "Design Process",
        heading: "Simplifying complex financial information",
        paragraphs: [
          "The design process began by identifying the most important questions the dashboard needed to answer for business owners.",
          "I explored different information architectures and dashboard layouts before developing wireframes and testing the hierarchy of financial information.",
          "The final design focused on progressive disclosure: surface the most important information first, then allow users to explore more detail when needed.",
        ],
        image: "/images/profitall/process.png",
      },

      {
        id: "user-research",
        label: "User Research",
        heading: "Understanding what business owners need to see",
        paragraphs: [
          "Research focused on how small business owners think about expenses, cash flow, and financial performance.",
          "The main opportunity was not simply providing more data, but helping users understand which data mattered most at a particular moment.",
          "This led to a stronger emphasis on summaries, trends, categories, and contextual information instead of presenting transactions as an undifferentiated list.",
        ],
        image: "/images/profitall/research.png",
      },

      {
        id: "ideation-wireframe",
        label: "Ideation & Wireframe",
        heading: "Designing the financial dashboard structure",
        paragraphs: [
          "Early concepts explored several ways of organizing financial metrics, charts, transaction information, and spending categories.",
          "The wireframes focused on creating a clear hierarchy between high-level financial health and detailed transaction information.",
          "The resulting structure allows users to start with a quick overview and move deeper into the data when they need more context.",
        ],
        image: "/images/profitall/wireframe.png",
      },

      {
        id: "style-guide",
        label: "Style Guide",
        heading: "A visual language for financial information",
        paragraphs: [
          "The visual system was designed around clarity and consistency because financial dashboards contain many numbers, labels, charts, and states.",
          "Typography and spacing were used to create hierarchy between primary metrics and supporting information.",
          "Cards, charts, status indicators, and data tables were designed as reusable patterns so the interface could remain consistent as new financial features were introduced.",
        ],
        image: "/images/profitall/style-guide.png",
      },

      {
        id: "high-fidelity-design",
        label: "High Fidelity Design",
        heading: "A clearer view of cash flow and spending",
        paragraphs: [
          "The final dashboard brings cash-flow information, spending insights, and transaction details into one structured experience.",
          "High-level metrics provide an immediate snapshot while visualizations help users recognize changes and spending patterns.",
          "The interface balances information density with visual hierarchy so users can move from overview to detail without feeling overwhelmed.",
        ],
        image: "/images/profitall/final-design.png",
      },

      {
        id: "conclusion",
        label: "Conclusion",
        heading: "Making financial information easier to act on",
        paragraphs: [
          "Profitall demonstrates how product design can transform a large amount of financial information into a clearer decision-making experience.",
          "The project emphasized the value of hierarchy, reusable patterns, and thoughtful data presentation when designing for users who need to understand complex information quickly.",
          "The final direction provides a foundation that can scale as the product grows and more financial insights are introduced.",
        ],
      },
    ],
  },
];

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
