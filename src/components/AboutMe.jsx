import React from "react";

function AboutMe() {
  return (
    <article className="article">
      <img
        src={require("../images/IMG_4A1A2878BFDE-1.jpeg")}
        alt="Brain_Atoms/"
      ></img>
      <h2 className="titles" id="About Me">
        About Me
      </h2>
      <p className="content">
        I am a full-stack (MERN) web developer based in Atlanta, GA. I am a
        graduate of The Georgia Institute of Technology's Full Stack Flex Web
        Developer Program. My programming knowledge and skills range from
        front-end (HTML, CSS, Javascript, React, etc.) to back-end (Express, Node.js, SQL,
        MongoDB, GraphQL, etc.). Along with building engaging and user-friendly
        websites, my passions include playing guitar, skateboarding and chess. If you would
        like a custom-built website for your small business feel free to reach
        out to me!{" "}
      </p>
    </article>
  );
}

export default AboutMe;
