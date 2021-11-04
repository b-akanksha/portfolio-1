import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper" aria-label="Image source: https://unsplash.com/@evstyle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
      <div className="main-info">
        <h1> Web Developer!</h1>
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
        <a href="#" className="btn-main-contact">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
