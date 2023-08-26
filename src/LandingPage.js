import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import ProjectCard from "../src/Components/Projects";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import "./LandingPage.css";
import { FaMoon, FaSun } from "react-icons/fa";
import covns from "./media/covns.png";
import tindog from "./media/tindog.png";
import verb from "./media/Verb.png";
import Card from "react-bootstrap/Card";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Navbar />
      <button
          className={`theme-button ${isDarkMode ? "dark" : "light"}`}
          style={{margin:"20px"}}
          onClick={toggleTheme}
        >
          {isDarkMode ? <FaMoon className="famoon" /> : <FaSun className="fasun" />}
        </button>
      <div id="LandingPageBG" className={`LandingPageBG ${isDarkMode ? "dark" : "light"}`}>

        <Home />
      </div>

      <div id="ProjectsPageBG" className={`ProjectsPageBG ${isDarkMode ? "dark" : "light"}`}>
        <div style={{ textAlign: "center" }}>
          <h3 className="projectHead">Projects</h3>
        </div>
        <div className="projectcards">
          <Card style={{ backgroundColor: "black" }}>
            <ProjectCard
              name="Covn's Milk Brand"
              link="https://vimurs.github.io/Covns/"
              image={covns}
            />
          </Card>
        </div>

        <div className="projectcards">
          <Card style={{ backgroundColor: "black" }}>
            <ProjectCard
              name="VerB Health Hospital Management Sys"
              link="https://github.com/VimurS/VerbHealth.git"
              image={verb}
            />
          </Card>
        </div>

        <div className="projectcards">
          <Card style={{ backgroundColor: "black" }}>
            <ProjectCard
              name="Tindog (tinder for doggos)"
              link="https://vimurs.github.io/Tin-Dogs/"
              image={tindog}
            />
          </Card>
        </div>
      </div>

      <div id="AboutPage" className={`AboutPageBG ${isDarkMode ? "dark" : "light"} row`}>
      <div style={{ textAlign: "center" }}>
          <h3 className="AboutHead">About Me</h3>
        </div>
        <About />
      </div>

      <div id="ContactPage" className="ContactsPageBG">
      <div style={{ textAlign: "center" }}>
          <h3 className="ContactHead">Get In Touch</h3>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
