import React from "react";
import "../App.css";

function Header() {
    return (
        <header className="header">
        <nav className="container">
        <h1 className="title"><a href="#About Me">Brian Adams</a></h1>
          <ul className="header">
            <li>
              <a href="#About Me">About Me</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Resumé">Resumé</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header; 