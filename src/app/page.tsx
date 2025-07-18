import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HeroParticles from "@/components/hero-particles";
import InnovationProjects from "@/components/innovation-projects";
import Navbar from "@/components/navbar";
import Particles from "@/components/particles";
import Partners from "@/components/partners";
import StartYourProject from "@/components/start-your-project";
import Workshops from "@/components/workshops";
export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#040914]/95 bg-cover bg-center bg-no-repeat px-5 backdrop-blur-2xl lg:px-20">
        <HeroParticles />
        <Navbar />
        <Hero />
      </div>
      <div className="relative overflow-hidden px-5 lg:px-20">
        <Particles />
        <InnovationProjects />
        <StartYourProject />
        <Workshops />
        <Partners />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}
