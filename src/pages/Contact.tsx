import React from "react";

import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="container">
      <div className="contact-me-container">
        <div className="contact-me-left">
          <div className="contact-me-title">
            <h1>Have questions in</h1>
          </div>
          <div className="contact-me-title">
            <h1>mind? Well Let’s get</h1>
          </div>
          <div className="contact-me-title">
            <h1 className="color-grad-contactT">in contact</h1>
          </div>
          <div className="contact-me-par">
            <p>
              Do you have something in mind you want to ask about? Contact me
              and I'll get back to you in the next 48 hours.
            </p>
          </div>
          <div className="contact-me-contactInfo">
            <div className="contact-contact-icon">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="contact-contact-info">
              <h1 className="contact-heading-4" style={{ color: "white" }}>
                tsogangamosweswe@gmail.com
              </h1>
            </div>
          </div>
          <div className="contact-me-contactInfo">
            <div className="contact-contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-contact-info">
              <h1 className="contact-heading-4" style={{ color: "white" }}>
                +267-777-818-95
              </h1>
            </div>
          </div>
        </div>
        <div className="contact-me-right">
          <form
            action="/contact/send-email"
            method="post"
            className="contact-form"
          >
            <div className="coontact-form-content">
              <div className="contact-form-top">
                <h3>fill the form below*</h3>
              </div>
              <div className="contact-field-name">
                <div className="field-container">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="contact-field-email">
                <div className="field-container">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="contact-field-message">
                <div className="field-container">
                  <i className="fas fa-comment"></i>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    id="message"
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <div className="contact-field-submit">
                <div className="form-submit-btn">
                  <button type="submit">
                    <div className="submit-label">
                      <label>Submit Message</label>
                    </div>
                    <div className="submit-icon-con">
                      <div className="submit-icon">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
