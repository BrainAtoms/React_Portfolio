import "./App.css";
import React, {useState} from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resumé from "./components/Resumé";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [page, setPage] = useState("AboutMe")
    const handleClick = (newPage) => {
        setPage(newPage)
    }
  return (
    <div className="App">
      <header className="header">
        <nav className="container">
          <h1 className="title">Brian Adams</h1>
          <ul className="header">
            <li>
              <p className="navLink" onClick={() => handleClick("AboutMe")}>About Me</p>
            </li>
            <li>
              <p className="navLink" onClick={() => handleClick("Portfolio")}>Portfolio</p>
            </li>
            <li>
              <p className="navLink" onClick={() => handleClick("Resumé")}>Resumé</p>
            </li>
          </ul>
        </nav>
      </header>
      <p className="smileys">☺︎ ☺︎ ☺︎</p>
      {page === "AboutMe" && <AboutMe />}
      {page === "Portfolio" && <Portfolio />}
      {page === "Resumé" && <Resumé />}
      {page === "Contact" && <Contact />}
      <p className="smileys">☺︎ ☺︎ ☺︎</p>
      <Footer />
    </div>
  );
}

export default App;
