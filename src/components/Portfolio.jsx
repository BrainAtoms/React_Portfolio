import React from "react";
import "../App.css";

function Portfolio() {
    return (
        <div>
        <h2 className="titles" id="Portfolio">
          Portfolio
        </h2>
<section className="other-apps">
        <section className="first-app">
          <a href="https://www.arborlaborunion.com">
            <img src={require("../images/IMG_9822.jpg")} alt="ALU/"></img>
          </a>
          <section className="text-block">
            <a href="https://github.com/BrainAtoms/ALU-site" className="link">
              <h4>Arbor Labor Union</h4>
              <p>Band Website</p>
            </a>
          </section>
        </section>
        <section className="other-apps">
          <section className="other-app1">
            <a href="https://brainatoms.github.io/Coding_Quiz/">
              <img
                src={require("../images/coding_quiz.png")}
                alt="Coding_Quiz/"
              ></img>
            </a>
            <section className="text-block2">
              <a href="https://github.com/BrainAtoms/Coding_Quiz" className="link">
                <h4>Coding Quiz</h4>
                <p>HTML, CSS, Javascript</p>
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://damp-reaches-78303.herokuapp.com/">
              <img
                src={require("../images/Screen_Shot 2023-05-09 at 9.25.18 PM (2).png")}
                alt="Snack_Shack/"
              ></img>
            </a>
            <section className="text-block3">
              <a href="https://github.com/BrainAtoms/Snack_Shack/" className="link">
                <h4>Snack Shack</h4>
                <p>Appetizer Archive</p>
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://brainatoms.github.io/Weather_Dashboard/">
              <img
                src={require("../images/Weather_Dashboard.png")}
                alt="Weather_Dashboard/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/BrainAtoms/Weather_Dashboard"
                className="link"
              >
                <h4>Weather Dashboard</h4>
                <p>Search 5 Day Forecast</p>
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://desolate-savannah-46202.herokuapp.com/">
              <img
                id="tech-blog"
                src={require("../images/Tech_Blog.png")}
                alt="Tech_Blog/"
              ></img>
            </a>
            <section className="text-block3">
              <a href="https://github.com/BrainAtoms/Tech_Blog/" className="link">
                <h4>Tech Blog</h4>
                <p>Create Posts About Tech</p>
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://thomasjshea.github.io/character-generator/">
              <img
                src={require("../images/Character_Generator.png")}
                alt="Character_Generator/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/BrainAtoms/character-generator"
                className="link"
              >
                <h4>Character Generator</h4>
                <p>Randomize D&D Stats</p>
              </a>
            </section>
            </section>
            <section className="other-app2">
            <a href="https://afternoon-mesa-22613-3fdd9a909bc7.herokuapp.com/">
              <img
                src={require("../images/Screen Shot 2023-07-14 at 12.22.40 AM (2).png")}
                alt="Trip_Planner/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/Ruskin20/Travel-Log"
                className="link"
              >
                <h4>Trip Planner</h4>
                <p>Search and Save Food and Fun</p>
              </a>
            </section>
          </section>
            </section>
            </section>
            </div>
            );
}
    
export default Portfolio; 