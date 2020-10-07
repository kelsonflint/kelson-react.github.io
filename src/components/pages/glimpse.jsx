import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Glimpse extends React.Component {

    render() {
        return (
            <div >
                <div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
                <div className="row">
                    <div className="col">
                        <img id="project-pic" src={require("../../img/glimpse.png")} alt="glimpse-app" width="50%"/>
                    </div>
                    <div id="highlight-info" className="col">
                        <h5>About the project:</h5>
                        <p>I led the development of this Swift iOS app while working on a research startup funded by Amazon Catalyst. The app worked in conjunction with our own custom hardware to capture and display moments from a rare perspective. </p>
                        <br/>
                        <h5>Technology used:</h5>
                        <p>SwiftUI, Python w/ Django, AWS</p>
                        <br/>
                        <h5>Github:</h5>
                        <p><a href="https://github.com/kelsonflint/GlimpseApp">Glimpse Repository</a></p>
                        <br/>
                        <h5>Website:</h5>
                        <p><a href="https://www.glimpsewearables.com/">Glimpse Wearables</a></p>
                    </div>
                </div>
            </div>
        )
    }

}