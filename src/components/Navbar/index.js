import React from "react";
import womanPhoto from '../../assets/woman.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img className="navbar-image" src={womanPhoto} alt="logo" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Icons made by Freepik!"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-me">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
