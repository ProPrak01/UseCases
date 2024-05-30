import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="path-to-your-logo.png" alt="Learning Spiral" className="footer-logo" />
          <p>
            Learning Spiral, Data labeling company offers qualitative data annotation & data labeling services at scale.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> 5th floor, 3A, Auckland Rd, Elgin, Kolkata, West Bengal 700017
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 722 4061 676
          </p>
          <p>
            <i className="fas fa-envelope"></i> humans@learningspiral.ai
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 3rd Floor, Webel IT Park, Taratala Road, Kolkata, West Bengal 700088
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 524 Sunset View DR Davenport, FL 33837
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 501 5th floor, Atlantis the Corporate Park, Telibandha Ring Rd No 1, Raipur, Chhattisgarh 492001
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright 2020 Learning Spiral - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
