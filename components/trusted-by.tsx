import Image from "next/image";
import { trustedLogos } from "@/lib/data";

export function TrustedBy() {
  const loop = [...trustedLogos, ...trustedLogos];

  return (
    <section className="border-b border-border bg-background px-6 py-10 lg:px-10">
      <p className="text-center text-sm text-muted">
        Trusted by 200,000+ users worldwide
      </p>
      <div className="mx-auto mt-6 max-w-5xl overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8">
          {loop.map((logo, i) => {
            const whiteLogo = logo.src.replace(
              /\.(png|jpg|jpeg|webp|svg)$/,
              "-w.$1",
            );
            return (
              <div
                key={`${logo.name}-${i}`}
                className="flex shrink-0 items-center  px-4 py-2.5 shadow-sm]  transition duration-300 hover:grayscale-0"
              >
                <div className="dark:hidden">
                  <Image
                    src={whiteLogo}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                  />
                </div>

                {/* Dark mode */}
                <div className="hidden dark:block">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
