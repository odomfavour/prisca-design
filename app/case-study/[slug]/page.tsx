import { notFound } from "next/navigation";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { CaseStudyContent } from "@/components/case-study/case-study-content";
import { MobileToc } from "@/components/case-study/mobile-toc";
import { SidebarToc } from "@/components/case-study/sidebar-toc";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.title} — PriscaDesign`
      : "Case Study — PriscaDesign",
    description: project?.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const sections = project.caseStudy ?? [];

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const firstSectionId = sections[0]?.id;

  return (
    <>
      <Navbar />
      <main className="bg-background px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl gap-16">
          <SidebarToc sections={sections} />

          <div className="min-w-0 flex-1">
            <MobileToc sections={sections} />

            <div className="checkerboard aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border" />

            <div className="mt-16">
              <CaseStudyContent
                sections={sections}
                isFirst={(id) => id === firstSectionId}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> More
            Projects
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Related Projects
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((op) => (
              <ProjectCard key={op.slug} project={op} />
            ))}
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
