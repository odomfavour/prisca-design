import Image from "next/image";

export function MockupStrip() {
  return (
    <section className="border-b border-border bg-background px-6 py-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={`/images/mockup-${n}.png`}
              alt="Product mockup preview"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
