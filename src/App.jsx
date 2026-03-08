import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ marginTop: "80px" }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
