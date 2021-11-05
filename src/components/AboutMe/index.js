import React from "react";
import womanPhoto from "../../assets/woman.png";
import linkedin from "../../assets/linkedin.png";

const AboutMe = () => {
  return (
    <div id="about-me" className="container about-me">
      <p className="section-title">About Me</p>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <img src={womanPhoto} alt="ABOUT ME" className="photo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 about-me-text">
          <p>
            A <b>Front End Developer</b> with one year experience in IT
            industry, I'm passionate about writing clean, elegant and efficient
            code.
          </p>
          <p className="connect-text">
            Let's connect!
            <a href="https://www.linkedin.com/in/akanksha-bhat-255b4315a/">
              <img
                className="linkedin-image"
                src={linkedin}
                alt="logo"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Icons made by Freepik!"
              />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 bio-data">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td className="badge bg-dark">Name</td>
                <td>Akanksha</td>
              </tr>
              <tr>
                <td className="badge bg-dark">Age</td>
                <td>23</td>
              </tr>
              <tr>
                <td className="badge bg-dark">Place</td>
                <td>India</td>
              </tr>
              <tr>
                <td className="badge bg-dark">Gender</td>
                <td>Female</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
