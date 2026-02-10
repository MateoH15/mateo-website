import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
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
