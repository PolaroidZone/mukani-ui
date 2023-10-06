import Me from "../../images/me.jpg"

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
              <img src={Me} alt=""/>
            </div>
          </div>
          <div className="about-box">
            <div className="about-title-subtitle">
              <h2>Who am I.</h2>
            </div>
            <div className="about-about">
              <p>
                Welcome to my portfolio website! I am a versatile developer with
                expertise in web development and Android mobile application
                development. With a primary focus on Android, I create
                innovative and user-friendly mobile applications that cater to
                diverse needs. I possess a strong understanding of Node.js, and
                I am proud to be certified by Edureka. Alongside my development
                skills, I have a practical understanding of Database Management
                Systems (DBMS), encompassing both NoSQL and MySQL. I strive to
                deliver efficient and scalable solutions that enhance user
                experiences and meet business objectives. Feel free to explore
                my projects and get in touch to discuss how we can collaborate
                on your next exciting venture.
              </p>
            </div>
            <div className="about-links">
              <div className="about-links-title">
                <h1>My socials.</h1>
              </div>
              <div className="about-links-con">
                <ul>
                  <li>
                    <a href="https://github.com/PolaroidZone">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/tsogang.mosweswe/?_rdc=1&_rdr">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tsogang-mosweswe-622608214">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-remue">
              <a href="">
                <div className="resume-btn">
                  <div className="reume-btn-title">
                    <h1>My Resume</h1>
                  </div>
                  <div className="resume-btn-icon">
                    <i className="fas fa-file"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
