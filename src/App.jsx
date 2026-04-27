import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import "./styles/index.css";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <Skills />
      <Process />
      <Services />
      <CTA />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
