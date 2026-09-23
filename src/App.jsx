import { Navbar } from "./components/navigation/Navbar";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Hero } from "./components/hero/Hero";
import { SelectedWork } from "./components/projects/SelectedWork";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Process } from "./components/process/Process";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Process />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
