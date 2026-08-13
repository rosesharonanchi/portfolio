import Image from "next/image";
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
    <div>
      
         <Navbar/>
         <Hero/>
         <About/>
         <Experience/>
         <Skills/>
         <Projects/>
         <BeyondCode/>
         <Contact/>
         <Footer/>
        

    </div>
  );
}
