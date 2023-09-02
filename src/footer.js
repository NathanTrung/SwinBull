// Footer.js
import React from 'react';
import './footer.css'; // Import your footer CSS

const Footer = () => {
  return (
    <footer className="footer-background">
      <div className="footer-column">
        <div className="footer-column-text"><span>Swinbull Corporation</span></div>
        <div className='column-text'><span>Swinbull Financial LLC (AU)</span></div>
      </div>
      <div className="footer-column">
        <div className="footer-column-text"><span>Our Story</span></div>
        <div className="footer-column-text"><span>Some description of your story</span></div>
      </div>
      <div className="footer-column">
        <div className="footer-column-text"><span>Email Us</span></div>
        <div className='column-text'><span>email@email.com</span></div>
      </div>
      <div className="footer-column">
        <div className="footer-column-text"><span>Call Us</span></div>
        <div className='column-text'><span>Your phone number</span></div>
      </div>
    </footer>
  );
};

export default Footer;
