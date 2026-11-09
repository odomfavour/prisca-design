import Image from "next/image";
import type { CaseStudySection } from "@/lib/data";

export function CaseStudyContent({
  sections,
  isFirst,
}: {
  sections: CaseStudySection[];
  isFirst: (id: string) => boolean;
}) {
  return (
    <div className="flex flex-col gap-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2
            className={
              isFirst(section.id)
                ? "font-display text-3xl font-bold sm:text-4xl"
                : "font-display text-2xl font-bold sm:text-3xl"
            }
          >
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {section.content?.map((block, i) => {
              if (block.type === "image") {
                return (
                  <div key={i} className="my-8 overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={1200}
                      height={750}
                      className="h-auto w-full"
                    />
                  </div>
                );
              }
              if (block.type === "link") {
                return (
                  <a key={i} href={block.href} target="_blank" rel="noopener noreferrer"
                    className="block text-sm font-medium text-accent underline underline-offset-4">
                    {block.text} ↗
                  </a>
                );
              }
              return <p key={i} className="text-sm leading-relaxed text-muted sm:text-base">{block.text}</p>;
            })}
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted sm:text-base">
                {p}
              </p>
            ))}
          </div>

          {section.image && (
            <div className="checkerboard mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src={typeof section.image === "string" ? section.image : "/images/omivideo-screen.svg"}
                alt={`${section.heading} illustration`}
                width={1200}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
