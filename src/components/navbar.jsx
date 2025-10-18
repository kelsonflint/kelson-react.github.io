import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import WOW from "wowjs";

const Navbar = () => {
  useEffect(() => {
    new WOW.WOW().init();

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        
        
        <Link
            to="/"
            smooth={true}
            duration={600}
            className="navbar-brand"
            >
            KelsonFlint.com
        </Link>

        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button
                className="btn-style nav-link"
                onClick={() => {
                  const node = document.getElementById("life");
                  if (node) {
                    window.scrollTo({ top: node.offsetTop, behavior: "smooth" });
                  }
                }}
              >
                Blog
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn-style nav-link"
                onClick={() => {
                  const node = document.getElementById("about-container");
                  if (node) {
                    window.scrollTo({ top: node.offsetTop, behavior: "smooth" });
                  }
                }}
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
