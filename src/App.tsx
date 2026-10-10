import BinaryMatrixBackground from "./components/BinaryMatrixBackground";
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
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BinaryMatrixBackground />
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
      <Footer />
    </>
  );
}

export default App;
