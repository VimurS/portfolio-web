import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Components.css';
import me from "../media/me.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'fixed' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo"><img style={{borderRadius:"50%", width:"50px", border:"2px solid lime"}} src={me}></img></div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#LandingPageBG" className="nav-link"  onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#ProjectsPageBG" className="nav-link"  onClick={closeMenu}>
            Projects    
            </a>
          </li>
          <li className="nav-item">
            <a href="#AboutPage" className="nav-link" onClick={closeMenu}>
            About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#ContactPage" className="nav-link"  onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
