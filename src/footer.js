import React from 'react';
import './footer.css'; // Import your footer CSS
import logo from './images/razor.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="footer-background">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p>SwinBull provides real-time cryptocurrency market data. In addition to tracking price, volume, and market capitalization, SwinBull enables users to learn more and purchase cryptocurrencies.</p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2> {/* Add the header for Quick Links */}
          <ul>
            <li><a href="/">Market</a></li> {/* Change the tab names */}
            <li><a href="/transaction-history">Transaction History</a></li>
            <li><a href="/learn-crypto">Learn Crypto</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <ul>
            <li><a href="mailto:103075742@student.swin.edu.au">Christian Cheng</a></li>
            <li><a href="mailto:104101363@student.swin.edu.au">Huu Ti Dang</a></li>
            <li><a href="mailto:@student.swin.edu.au">Nathan Trung</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} SwinBull. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
