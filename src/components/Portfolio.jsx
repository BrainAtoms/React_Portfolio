import React from "react";
import "../App.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
  return (
    <div>
      <h2 className="titles" id="Portfolio">
        Portfolio
      </h2>
      <section className="other-apps">
        <section className="first-app">
          <a href="https://www.arborlaborunion.com">
            <div id="desc">
              <h4>Arbor Labor Union Band Website</h4>
            </div>
            <img src={require("../images/IMG_9822.jpg")} alt="ALU/"></img>
          </a>
          <section className="text-block">
            <a href="https://github.com/BrainAtoms/ALU-site" className="link">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
          </section>
        </section>
        <section className="other-apps">
          <section className="other-app1">
            <a href="https://brainatoms.github.io/The_Grateful_Dead_Quiz/">
              <h4>The Grateful Dead Quiz</h4>
              <img
                src={require("../images/Screen Shot 2023-09-02 at 9.07.52 PM.png")}
                alt="Coding_Quiz/"
              ></img>
            </a>
            <section className="text-block2">
              <a
                href="https://github.com/BrainAtoms/The_Grateful_Dead_Quiz"
                className="link"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://damp-reaches-78303.herokuapp.com/">
              <h4>Snack Shack Appetizer Archive</h4>
              <img
                src={require("../images/Screen_Shot 2023-05-09 at 9.25.18 PM (2).png")}
                alt="Snack_Shack/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/BrainAtoms/Snack_Shack/"
                className="link"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://brainatoms.github.io/Weather_Dashboard/">
              <h4>Weather Dashboard- Search 5 Day Forecast</h4>
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
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </section>
          </section>
          {/* <section className="other-app2">
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
          </section> */}
          <section className="other-app2">
            <a href="https://brainatoms.github.io/Stat_Generator/">
              <h4>Character Generator- Randomize D&D Stats</h4>
              <img
                src={require("../images/Character_Generator.png")}
                alt="Character_Generator/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/BrainAtoms/Stat_Generator"
                className="link"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </section>
          </section>
          {/* <section className="other-app2">
            <a href="https://afternoon-mesa-22613-3fdd9a909bc7.herokuapp.com/">
              <h4>Trip Planner- Search and Save Food and Fun</h4>
              <img
                src={require("../images/Screen Shot 2023-07-14 at 12.22.40 AM (2).png")}
                alt="Trip_Planner/"
              ></img>
            </a>
            <section className="text-block3">
              <a href="https://github.com/Ruskin20/Travel-Log" className="link">
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </section>
          </section> */}
        </section>
      </section>
    </div>
  );
}

export default Portfolio;
