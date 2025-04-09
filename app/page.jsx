// Components
import Header from "./ui/components/header";
import Footer from "./ui/components/Footer";

// Sections
import Hero from "./ui/components/Hero";
import About from "./ui/components/About";
import Techs from "./ui/components/Techs";
import Projects from "./ui/components/Projects";
import Feedback from "./ui/components/Feedback";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Techs />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  );
}
