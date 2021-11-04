import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper" id="home" aria-label="Image source: https://unsplash.com/@evstyle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
      <div className="main-info">
        <h1>Hi, I'm Akanksha!</h1>
        <Typed
          className="typed-text"
          strings={[
            "HTML",
            "CSS",
            "Bootstrap",
            "Material UI",
            "Javascript",
            "Typescript",
            "React",
          ]}
          typeSpeed={100}
          backSpeed={80}
          loop
        />
        <br/>
        <a href="#contact-me" className="btn-main-contact">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
