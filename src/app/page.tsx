import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import VideoShowcase from "@/components/VideoShowcase";
import PosterShowcase from "@/components/PosterShowcase";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <VideoShowcase />
      <PosterShowcase />
      <Services />
      <Contact />

      <footer className="py-12 border-t border-white/5 text-center text-white/40 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Ashish Panwar. Created with Next.js & Three.js.</p>
        </div>
      </footer>
    </>
  );
}
