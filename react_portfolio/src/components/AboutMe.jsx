import React from "react";

function AboutMe() {
  return (
    <article className="article">
      <img src={require("../images/IMG_5423.jpg")} alt="Brain_Atoms/"></img>
      <h2 className="titles" id="About Me">
        About Me
      </h2>
      <p className="content">
        I am a full-stack web developer based in Atlanta, GA with knowledge in
        both front-end and back-end code. Along with building engaging and
        user-friendly websites, my passions include playing guitar and chess. If
        you would like a custom-built website for your small business feel free
        to reach out to me!{" "}
      </p>
    </article>
  );
}

export default AboutMe;