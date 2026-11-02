import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { ExperienceSection } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { StatsStrip } from "@/components/stats-strip";

export default function Home() {
  return (
    <>
      <a
        href="#perfil"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <ExperienceSection />
        <Services />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
