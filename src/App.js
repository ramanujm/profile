import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import particle from "./helper/particle";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skill from "./containers/skill";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

function App() {

  const handleInit = async (main) => {
    await loadFull(main);
  }
  return (
    <div className="App">
      {/* Particle js */}
      {/* <Particles id="particle" options={particle} init={handleInit} /> */}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Routes>
      </div>

    </div>
  );
}

export default App;
