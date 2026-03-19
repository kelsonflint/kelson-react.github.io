import React from "react";
import PropTypes from "prop-types";

const HeroSection = ({ sunrise, onToggleSunrise }) => {
  return (
    <div className="top-container flex">
      <h1 className="wow fadeInDown">
        Kelson Flint
        <br />
        Full Stack Developer
      </h1>

      <div className="block-contact wow fadeInUp">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <a href="https://github.com/kelsonflint">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.instagram.com/kelsonflint/?hl=en">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/kelsonflint/">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>

      <div className="button-group">
        <button
          className="work-button"
          onClick={() => {
            const node = document.getElementById("games");
            if (node) {
              window.scrollTo({ top: node.offsetTop, behavior: "smooth" });
            }
          }}
        >
          Diamond Dawg Games
        </button>

        <button
          className="work-button"
          onClick={() => {
            let node = document.getElementById("life");
            window.scrollTo({ top: node.offsetTop, behavior: "smooth" });
          }}
        >
          View My Blogs
        </button>

        <button
          className="work-button"
          onClick={() => {
            const node = document.getElementById("about-container");
            if (node) {
              window.scrollTo({ top: node.offsetTop, behavior: "smooth" });
            }
          }}
        >
          View My Resume
        </button>


        <button onClick={onToggleSunrise} className="work-button" id="sunriseBtn">
          {sunrise ? "Back to Night" : "Something Cool"}
        </button>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  sunrise: PropTypes.bool,
  onToggleSunrise: PropTypes.func,
};

export default HeroSection;
