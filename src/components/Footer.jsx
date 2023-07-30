import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="footer">
            <section className="contact">
          <div className="contact">
            <h3><a href="mailto:badams6453@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2xl" /></a></h3>
          </div>
          <p className="contact">
            <a href="https://www.linkedin.com/in/brian-adams-05ab8384/">
            <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
            </a>
                </p>
                <p className="contact">
            <a href="https://github.com/BrainAtoms/">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
          </p>
        </section>
      </footer>
    )
}

export default Footer; 