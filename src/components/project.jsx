import React from "react";
import {
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.description = props.description;
        this.image = props.image;
        this.big = props.big;
        this.detailed = props.detailed;
        this.website = props.website;
        this.git = props.git;
    }

    render() {
        return (
            
            <React.Fragment>
                {   !this.props.big ? 
                    <div class="col-md-4">
                        <div class="card text-white bg-dark mb-2">
                            <img class="card-img-top" src={this.props.image} alt="project image"/>
                            <div class="card-body">
                                <h5 id="card-title" class="card-title">{this.props.title}</h5>
                                <p id="card-description" class="card-text">{this.props.description}</p>
                                <div id="links">
                                    { this.props.website.length > 0 ? <a href={this.props.website} id="link" class="btn btn-primary"> Website </a> : <div></div>}
                                    { this.props.detailed.length > 0 ? <Link to={this.props.detailed} id="link" class="btn btn-primary">Read more</Link> : <div></div>}
                                    { this.props.git.length > 0 ? <a href={this.props.git} id="link" class="btn btn-primary"> Github </a> : <div></div>}
                                </div> 
                            </div>
                        </div>
                    </div> :
                    <div class="card text-white bg-dark mb-3">
                        <img class="card-img-top" src={this.props.image}  alt="project image"/>
                        <div class="card-body">
                        <h5 id="card-title" class="card-title">{this.props.title}</h5>
                        <p id="card-description" class="card-text">{this.props.description}</p>
                        <div>
                            { this.props.detailed ? <Link to="/glimpse" class="btn btn-primary">Read more</Link> : <div></div>}
                            { this.props.website.length > 0 ?  <a href={this.props.website} class="btn btn-primary"> Website </a> : <div></div>}
                            { this.props.git.length > 0 ? <a href={this.props.git} id="link" class="btn btn-primary"> Github </a> : <div></div>}
                        </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    big: PropTypes.bool,
    detailed: PropTypes.string,
    website: PropTypes.string,
    git: PropTypes.string,
};

Project.defaultProps = {
    title: "project",
    description: "project description",
    image: require('../img/project1.png'),
    big: false,
    detailed: "",
    website: "",
    git: "",
}