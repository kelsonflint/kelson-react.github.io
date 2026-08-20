import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import WOW from "wowjs";
import '../style/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    new WOW.WOW().init();

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrolled = window.scrollY > 100;

      if (scrolled) {
        navbar.classList.add("scroll");
        setHasScrolled(true);
      } else {
        navbar.classList.remove("scroll");
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-dark ${hasScrolled ? 'navbar-visible' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand navbar-brand-mobile">
          KelsonFlint.com
        </Link>

        <button
          className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
        </button>

        <div className={`navbar-collapse ${menuOpen ? 'show' : 'collapse'}`} id="main-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blogs"
                className="nav-link"
                onClick={closeMenu}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-link"
                onClick={closeMenu}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
