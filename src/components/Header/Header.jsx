import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ai from '../../assets/ai.jpg'
import logo from '../../assets/LOGO.webp';
const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
  
      <div className="logo">
        <img src={logo} alt="Learning Spiral" />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Our Services</Link>
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="/use-cases" className="dropdown-link">Use Cases</Link>
          {dropdownVisible && (
            <div className="dropdown-content">
              <Link to="/Facial_recognition">Facial recognition</Link>
              <Link to="/Self_driving_cars">Self driving car</Link>
              <Link to="/Drone_satellites">Drone satellites</Link>
              {/* <Link to="/Retail_ecommerce">Retail ecommerce</Link>
              <Link to="/Figure_detection">Figure detection</Link> */}
              <Link to="/Video_motion_tracking">Video motion tracking</Link>
              <Link to="/Sports_annotation">Sports annotation</Link>
              {/* <Link to="/Audio_annotation">Audio annotation</Link>
              <Link to="/Medical_annotation">Medical annotation</Link> */}

            </div>
          )}
        </div>
        <Link to="/">Blogs</Link>
        <Link to="/">Contact</Link>
      </nav>
      <div className="cta-button">
        <button>Call Us Now</button>
      </div>
      <div className="bgimage">
      <img src={ai} alt="" />
    </div>
    </header>
  );
};

export default Header;
