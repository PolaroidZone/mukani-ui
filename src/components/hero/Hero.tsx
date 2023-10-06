import heroImage from "../../images/landing-glitch1.jpg"
const Hero = () => {
  return (
    <section className="container">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-Tcon">
            <h1 id="hero-h">Hi There!</h1>
            <h1 id="hero-hn">I am Tsogang</h1>
            <h1 id="hero-hn2">Web Developer</h1>
            <p id="hero-hp">
              “The first 90% of the code accounts for the first 90% of the
              development time. The remaining 10% of the code accounts for the
              other 90% of the development time.”{" "}
              <aside className="autherQuote"> – Tom Cargill</aside>
            </p>
          </div>
          <div className="hero-Tbutton">
            <a href="#about">
              <div className="button">
                <p>About me</p>
                <button>
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-imageCon">
          <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
