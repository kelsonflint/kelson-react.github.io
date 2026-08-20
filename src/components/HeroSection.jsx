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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <a href="https://open.spotify.com/user/patatohead87?si=66af0fce09f2485f">
          <i className="fa-brands fa-spotify"></i>
        </a>
        <a href="https://www.instagram.com/kelsonflint/?hl=en">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/kelsonflint">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://account.venmo.com/u/Kelson-Flint" className="venmo-link">
          <img
            src="/venmo_icon.png"
            alt="Venmo"
          />
        </a>
      </div>

      <div className="hero-video">
        <iframe
          src="https://www.youtube.com/embed/JSkF4ZWp6Ko"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="button-group">
        <button onClick={onToggleSunrise} className="work-button" id="sunriseBtn">
          {sunrise ? "Back to Night" : "Something Cool"}
        </button>
        <button
          onClick={() =>
            document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })
          }
          className="work-button"
          id="playGamesBtn"
        >
          Play My Games!
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
