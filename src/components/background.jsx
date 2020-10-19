import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
    }
    
    navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
                
				<div className="top-container flex">
					<h1>
						Kelson Flint
						<br />
						Full Stack Developer
					</h1>
					<div className="block-contact">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                        <a href="https://github.com/kelsonflint"><i className="fa fa-github"></i></a>
                        <a href="https://www.instagram.com/kelsonflint/?hl=en"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/kelsonflint/"><i className="fa fa-linkedin"></i></a>
                    </div>
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById("projects");
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
                    <button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById("about-container");
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my resume
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};