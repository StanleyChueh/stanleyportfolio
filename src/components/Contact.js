import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Let's connect and create something amazing together.</p>
      
      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-input"
          required
          aria-label="Your Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="form-input"
          required
          aria-label="Your Email"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="form-textarea"
          required
          aria-label="Your Message"
        ></textarea>
        <a href="mailto:stanleychueh28@gmail.com" className="send-button">
          Send Message <FaEnvelope />
        </a>
      </form>
      
      <div className="contact-info">
        <div className="connect-icons">
          <h3>Connect With Me</h3>
          <a href="mailto:stanleychueh28@gmail.com" className="contact-link">
            <FaEnvelope /> stanleychueh28@gmail.com
          </a>
          <a href="https://github.com/StanleyChueh" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/楷宸-闕-239421303" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <div className="location-section">
          <h3>Location</h3>
          <p>🇹🇼Taipei Taiwan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
