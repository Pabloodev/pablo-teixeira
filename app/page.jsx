import Footer from "./ui/components/Footer";

// Sections
import Hero from "./ui/components/Hero";
import About from "./ui/components/About";
import Techs from "./ui/components/Techs";
import Projects from "./ui/components/Projects";
import Feedback from "./ui/components/Feedback";
import Work from "./ui/components/Work";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Techs />
      <Projects />
      <Feedback />
      <Work />
      <Footer />
    </div>
  );
}
