import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className="header">
    Header!!
      <div className="logo">
        <img src="path-to-your-logo.png" alt="Learning Spiral" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Our Services</a>
        <a href="#use-cases">Use Cases</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="cta-button">
        <button>Call Us Now</button>
      </div>
    </header>
  )
}

export default Header