import AboutLinks from "./AboutLinks";
import AboutResume from "./AboutResume";
import AboutMessage from "./AboutMessage";

import Me from "../../images/me.jpg";

const About = () => {
  return (
    <div>
      <section className="container">
        <div className="abount-me" id="about">
          <div className="about-box">
            <div className="about-tile">
              <h1>.About Me</h1>
            </div>
            <div className="about-image">
              <img src={Me} alt="" />
            </div>
          </div>
          <div className="about-box">
            <div className="about-title-subtitle">
              <h2>Who am I.</h2>
            </div>
            <AboutMessage />
            <AboutLinks />
            <AboutResume />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
