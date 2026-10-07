import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MockupStrip } from "@/components/mockup-strip";
import { Navbar } from "@/components/navbar";
import { SelectedProjects } from "@/components/selected-projects";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { TrustedBy } from "@/components/trusted-by";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <MockupStrip />
        <SelectedProjects />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
