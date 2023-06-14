import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <nav class="container">
          <h1 class="title">Brian Adams</h1>
          <ul class="header">
            <li>
              <a href="#About Me">About Me</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="https://github.com/BrainAtoms">Github</a>
            </li>
            <li>
              <a href="#Resumé">Resumé</a>
            </li>
          </ul>
        </nav>
      </header>
      <article class="article">
        <img src={require("./images/IMG_5423.jpg")} alt="Brain_Atoms/"></img>
        <h2 class="titles" id="About Me">
          About Me
        </h2>
        <p class="content">
          I am a full-stack web developer based in Atlanta, GA with knowledge in
          both front-end and back-end code. Along with building engaging and
          user-friendly websites, my passions include playing guitar and chess.
          If you would like a custom-built website for your small business feel
          free to reach out to me!{" "}
        </p>
      </article>
      <section class="first-app">
        <h2 class="titles" id="Work">
          Work
        </h2>
        <section class="first-app">
          <a href="https://www.arborlaborunion.com">
            <img src={require("./images/IMG_9822.jpg")} alt="ALU/"></img>
          </a>
          <section class="text-block">
            <a href="https://github.com/BrainAtoms/ALU-site" class="link">
              <h4>Arbor Labor Union</h4>
              <p>Band Website</p>
            </a>
          </section>
        </section>
        <section class="other-apps">
          <section class="other-app1">
            <a href="https://brainatoms.github.io/Coding_Quiz/">
              <img
                src={require("./images/coding_quiz.png")}
                alt="Coding_Quiz/"
              ></img>
            </a>
            <section class="text-block2">
              <a href="https://github.com/BrainAtoms/Coding_Quiz" class="link">
                <h4>Coding Quiz</h4>
                <p>HTML, CSS, Javascript</p>
              </a>
            </section>
          </section>
          <section class="other-app2">
            <a href="https://damp-reaches-78303.herokuapp.com/">
              <img
                src={require("./images/Screen_Shot 2023-05-09 at 9.25.18 PM (2).png")}
                alt="Snack_Shack/"
              ></img>
            </a>
            <section class="text-block3">
              <a href="https://github.com/BrainAtoms/Snack_Shack/" class="link">
                <h4>Snack Shack</h4>
                <p>Appetizer Archive</p>
              </a>
            </section>
          </section>
          <section class="other-app2">
            <a href="https://brainatoms.github.io/Weather_Dashboard/">
              <img
                src={require("./images/Weather_Dashboard.png")}
                alt="Weather_Dashboard/"
              ></img>
            </a>
            <section class="text-block3">
              <a
                href="https://github.com/BrainAtoms/Weather_Dashboard"
                class="link"
              >
                <h4>Weather Dashboard</h4>
                <p>Search 5 Day Forecast</p>
              </a>
            </section>
          </section>
          <section class="other-app2">
            <a href="https://desolate-savannah-46202.herokuapp.com/">
              <img
                id="tech-blog"
                src={require("./images/Tech_Blog.png")}
                alt="Tech_Blog/"
              ></img>
            </a>
            <section class="text-block3">
              <a href="https://github.com/BrainAtoms/Tech_Blog/" class="link">
                <h4>Tech Blog</h4>
                <p>Create Posts About Tech</p>
              </a>
            </section>
          </section>
          <section class="other-app2">
            <a href="https://thomasjshea.github.io/character-generator/">
              <img
                src={require("./images/Character_Generator.png")}
                alt="Character_Generator/"
              ></img>
            </a>
            <section class="text-block3">
              <a
                href="https://github.com/BrainAtoms/character-generator"
                class="link"
              >
                <h4>Character Generator</h4>
                <p>Randomize D&D Stats</p>
              </a>
            </section>
          </section>
              </section>
              <section id="Resumé">
                  <h3><a class="resumé" href="https://drive.google.com/file/d/1_YdsTapaJIV-1AHA3uOkDJM60JoAaB9h/view">View Resumé</a></h3>
              </section>
        <p class="smileys">☺︎ ☺︎ ☺︎</p>
      </section>
      <footer class="footer">
        <section class="contact">
          <h3 id="Contact">Contact:</h3>
          <p class="contact">
            <h3><a download href="mailto:badams6453@gmail.com">Badams6453@gmail.com</a></h3>
          </p>
          <p class="contact">
            <a href="https://www.linkedin.com/in/brian-adams-05ab8384/">
              LinkedIn
            </a>
          </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
