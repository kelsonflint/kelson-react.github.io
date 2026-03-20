import React from "react";
import PropTypes from "prop-types";

const HeroSection = ({ sunrise, onToggleSunrise }) => {
  return (
    <div className="top-container flex">
      <h1 className="hero-name wow fadeInDown">
        Kelson Flint
      </h1>
      <h2 className="hero-title wow fadeInDown">
        Full Stack Developer
      </h2>

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
        <a href="https://apps.apple.com/us/developer/diamond-dawg-games/id1878510416">
          <i className="fa fa-apple"></i>
        </a>
        <a href="https://play.google.com/store/apps/developer?id=Diamond+Dawg+Games&hl=en_US">
          <i className="fa fa-android"></i>
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
