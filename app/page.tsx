import Image from "next/image";
import DevPreloader from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import SpaceBackground from "./components/SpaceBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BeyondCode from "./components/BeyondCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <DevPreloader />
      <ScrollProgress />
      <SpaceBackground />
      <main className="relative z-10 flex min-h-screen flex-col overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <BeyondCode />
        <Contact />
        <Footer />
      </main>
    </>
  );
}