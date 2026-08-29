import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Blogs from "./components/Blogs";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Mission />
        <Experience />
        <Projects />
        <Research />
        <Blogs />
        <Certifications />
        <Skills />
        <Journey />
        <Terminal />
        <Contact />
      </main>
    </>
  );
}

export default App;
