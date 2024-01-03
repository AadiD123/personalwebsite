import "./Home.css";

import { useState, useEffect } from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Work from "../components/Work";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in effect when the component mounts
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${fadeIn ? "fadeIn" : ""}`}>
      <div className="fixed left-10 top-1/2 transform -translate-y-1/2 hidden xl:flex">
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg hover:scale-150 transform transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-lg hover:scale-150 transform transition duration-300"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-lg hover:scale-150 transform transition duration-300"
          >
            Projects
          </button>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}
