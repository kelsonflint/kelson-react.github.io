import React from "react";
import Project from "./project";
import { Parallax } from "react-parallax";

export default class ProjectList extends React.Component {

    render() {
        return (
            <div id="projects" >
                <h1 id="project-header">My Projects</h1>
                
                <div id="first" className="project-row">

                    <div class="col-12 col-md-8">
                        <Project 
                            id="big-card"
                            title="Amazon Web Services Summer Internship" 
                            description="Designed and implemented a full-stack solution for overhauling Amazon Oncall's notification system. I developed the back-end using Java and multiple AWS Services (Lambda, Step Functions, DynamoDB, S3). I built the UI using React/Redux to interact with my back-end services." 
                            image={require("../img/oncall.jpeg")} 
                            big={true}
                        />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <Project 
                            id="glimpseApp"
                            title="Glimpse iOS App" 
                            description="Startup app funded by Amazon Catalyst" 
                            image={require("../img/glimpse.png")}
                            detailed="/glimpse"
                            website="https://www.glimpsewearables.com/"  
                        />
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                        <Project
                            title="Spotify Jams"
                            description="React app that utlizes the Spotify API to build playlists"
                            image={require("../img/spotify.png")}
                            big={true}
                            git="https://github.com/kelsonflint/spotify-jams"
                            
                        />
                    </div>
                    <div class="col-lg col-md-4 col-sm-12 col-12">
                    <Project
                            title="Expresso API"
                            description="CRUD API built using Express.js and SQLite"
                            image={require("../img/expresso.png")}
                            big={true}
                            git="https://github.com/kelsonflint/Expresso"
                        />
                    </div>
                    
                </div>

                <Parallax bgImage={require("../img/burning-earth.jpg")} strength={500}>
                    <h1 id="project-header">Hot Stuff</h1>
                    <div  className="project-row">
                        <div class="col-lg col-md col-sm-6 col-12">
                            <Project
                                id="hot"
                                title="Climate Analysis Shiny App"
                                description="An interactive data analysis of the effects of greenhouse gases on global climate change." 
                                image={require("../img/shiny.png")}
                                big={true}
                                website="https://swierj.shinyapps.io/final-kelsonflint/"
                            />
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                            <Project
                                    id="hot"
                                    title="Tinder Bot"
                                    description="Infinite swipes using Python and Selenium"
                                    image={require("../img/tinder.png")}
                                    git="https://github.com/kelsonflint/tinderbot"
                            />
                        </div>
                    </div>
                </Parallax>

                <h1 id="project-header">Some Extras</h1>
                <div id="games" className="project-row">
                    <div class="col-lg col-md-6 col-sm-12 col-12">
                        <Project 
                            title="Tetris Remake" 
                            description="My first python project using Pygame" 
                            image={require("../img/tetris.png")}
                            git="https://github.com/kelsonflint/Tetris"
                        />
                    </div>
                    <div class="col-lg col-md-6 col-sm-12 col-12">
                        <Project
                            title="Brick Breaker" 
                            description="A simple Javascript web app" 
                            image={require("../img/brickbreaker.png")}
                            git="https://github.com/kelsonflint/brickbreaker"
                        />
                    </div>
                    
                </div>
                
            </div>
            
        )
    }
}