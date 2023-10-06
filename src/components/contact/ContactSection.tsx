const ContactSection = () => {
  return (
    <div>
      <div className="contact-section">
        <div className="contact-heading">
          <div className="contact-heading-1">
            <h1 className="contact-heading2">Have questions in mind?</h1>
          </div>
          <div className="contact-heading-1">
            <h1 className="contact-heading2">Let’s get in</h1>
            <h1 className="project-tiGradiant2">contact</h1>
          </div>
        </div>
        <div className="contact-self-intro">
          <p className="bheader-subtitle">
            I'm Tsogang Mosweswe— a Web and moblie application developer who 
          </p>
          <p className="bheader-subtitle">is
            keen to innovate and push creative boundaries</p>
        </div>
        <div className="contact-me-button">
          <div className="btn-buttonp">
            <p>Contact Me</p>
            <button>
              <a href="/contact">
                <i className="fa fa-arrow-right"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
