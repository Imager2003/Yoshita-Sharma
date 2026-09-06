import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MobileContactBar } from "@/components/MobileContactBar";
import { Navbar } from "@/components/Navbar";
import { Publication } from "@/components/Publication";
import { RecruiterSnapshot } from "@/components/RecruiterSnapshot";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Bottom padding clears the sticky mobile contact bar. */}
      <div className="pb-16 lg:pb-0">
        <main id="main">
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <SelectedWork />
          <Publication />
          <Education />
          <Achievements />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
      <MobileContactBar />
      <RecruiterSnapshot />
    </>
  );
}
