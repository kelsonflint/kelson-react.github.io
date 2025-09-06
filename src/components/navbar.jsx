import React from "react"
import Background from "./background.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about.jsx";
import ProjectList from "./projectList";




import WOW from "wowjs";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.projects = React.createRef();
        this.contact = React.createRef();

	}

	componentDidMount() {
        new WOW.WOW().init();
        window.addEventListener("scroll", this.handleScroll)
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			
		});
    }

    handleScroll = () => {
        if (window.scrollY > 100) {
            document.querySelector(".navbar").className = "navbar navbar-expand-md navbar-dark scroll";
        } else {
            document.querySelector(".navbar").className = "navbar navbar-expand-md navbar-dark";
        }
    };
    

	render() {
		return (
            
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
					bounceIn={"wow bounceIn"}
				/>
                <nav id="navbar" class="navbar navbar-expand-md navbar-dark">
                    <div class="container">
                        <a
							className="navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>KelsonFlint.com</a>

                        

                        <div id="main-nav" class="collapse navbar-collapse">
                            <ul class="navbar-nav ml-auto">
                                <li>
                                    <a  
                                        id="navlink"
                                        onClick={() => {
                                            let node = document.getElementById("projects");
                                            window.scrollTo({
                                                top: node.offsetTop,
                                                behavior: "smooth"
                                            });
                                        }}
                                        class="btn-style nav-item nav-link">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        id="navlink"
                                        onClick={() => {
                                            let node = document.getElementById("about-container");
                                            window.scrollTo({
                                                top: node.offsetTop,
                                                behavior: "smooth"
                                            });
                                        }}
                                        class="btn-style nav-item nav-link">
                                        About
								    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ProjectList 
                    ref={this.projects}
                    id="projects"
                />
                <About
                    ref={this.about}
                    id="about-container"
                    bounceLeft={"wow bounceInLeft"}
                    fadeInLeft={"wow fadeInLeft"}
                    fadeInRight={"wow fadeInRight"}
                    fadeIn={"wow fadeIn"}
                    tada={"wow fadeIn"}
                />

                
            </div>
        );
    }
}

export default Navbar;