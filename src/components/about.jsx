import React from "react";
import PropTypes from "prop-types";
import '../style/about.css';




export default class About extends React.Component {
    render() {
        return (
            <div id="about-container" className="content-containers container text-center mt-5">
                <h1 id="project-header">About Me</h1>
                <body id="top">
                    <div id="cv" class="instaFade">
                        <div class="mainDetails">
                            <div id="name">
                                <h1 class="quickFade delayTwo">Kelson Flint</h1>
                                <h2 class="quickFade delayThree">Software Engineer</h2>
                            </div>
                    
                            <div id="contactDetails" class="quickFade delayFour">
                                <ul>
                                    <li>e: <a href="mailto:kelson.flint@gmail.com" target="_blank">kelson.flint@gmail.com</a></li>
                                    <li>w: <a href="http://www.kelsonflint.com">www.kelsonflint.com</a></li>
                                    <li>m: (818)-835-6130</li>
                                </ul>
                            </div>
                            <div class="clear"></div>
                        </div>
                
                        <div id="mainArea" class="quickFade delayFive">
                            <section>
                                <article>
                                    <div class="sectionTitle">
                                        <h1>Personal Profile</h1>
                                    </div>
                    
                                    <div class="sectionContent">
                            <p>I am a capable full-stack developer and an ambitious quick learner who is looking to explore the depths of computing through building intuitive software. I am a creative thinker who pays strong attention to detail and always thinks backward from the customer.</p>
                            <p>Pursuing a B.S. in Informatics with a minor in Mathematical Physics. Graduating in June 2021</p>
                                    </div>
                                </article>
                                <div class="clear"></div>
                            </section>
                    
                    
                            <section>
                                <div class="sectionTitle">
                                    <h1>Work Experience</h1>
                                </div>
                    
                                <div class="sectionContent">
                            <article>
                                <h2>Software Development Engineer Intern at Amazon</h2>
                                <p class="subDetails">June 2020 - September 2020</p>
                                <ul>
                                    <li>Designed and implemented a full-stack server-less solution for overhauling Amazon Oncall's notification system.</li>
                                    <li>Developed a functional back-end to store, process, and send notification data using Java and multiple AWS Services.</li>
                                    <li>Built a front-end UI using React/Redux to interact with my back-end services.</li>
                                    <li>Developed strong skills in debugging, unit testing, and performance optimization</li>
                                    <li>Worked well independently and on a team to solve problems.</li>
                                    <br/>
                            </ul>
                            </article>
                                    <article>
                                        <h2>Software developer at Glimpse Wearables</h2>
                                        <p class="subDetails">October 2018 - June 2019</p>
                                        <ul>
                                <li>Startup funded by Amazon Catalyst.</li>
                                <li>Led the development of a Swift iOS app that worked in conjunction with our own hardware.</li>
                                <li>Assisted the design and development backend services including databases, API’s, and customizable requests for all front-end services.</li>
                                <br/>
                            </ul>
                            </article>
                    
                                    <article>
                                        <h2>Intern at Revel</h2>
                                        <p class="subDetails">Summer 2017</p>
                                        <ul>
                                <li>Developed and updated the store interface using HTML, CSS, and JavaScript.</li>
                                <li>Exposed to back end development, marketing strategies, and Golang.</li>
                                <li>Learned the importance of communication and cross-functional teamwork.</li>
                                <br/>
                            </ul>
                                    </article>
                                </div>
                                <div class="clear"></div>
                            </section>
                    
                    
                            <section>
                                <div class="sectionTitle">
                                    <h1>Key Skills</h1>
                                </div>
                    
                                <div class="sectionContent">
                                    <ul class="keySkills">
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>Xcode w/ Swift</li>
                                        <li>Unity w/ C#</li>
                                        <li>Git</li>
                                        <li>Microsoft Office</li>
                                        <li>React.js</li>
                                        <li>R/Rstudio</li>
                                    </ul>
                                </div>
                                <div class="clear"></div>
                            </section>
                    
                    
                            <section>
                                <div class="sectionTitle">
                                    <h1>Education</h1>
                                </div>
                    
                                <div class="sectionContent">
                                    <article>
                                        <h2>University of Washington - Seattle</h2>
                                        <p class="subDetails">B.S. in Informatics (2021) - 3.60 GPA</p>
                                        <p>Concetration in Data Science and Information Architecture</p>
                            <p>Minor in Mathematical Physics</p>
                                    </article>
                    
                                </div>
                                <div class="clear"></div>
                            </section>
                    
                            <section>
                                <div class="sectionTitle">
                                    <h1>Interests</h1>
                                </div>
                    
                                <div class="sectionContent">
                                    <ul class="keySkills">
                                        <li>Software Development</li>
                                        <li>Quantum Computing</li>
                                        <li>Machine Learning</li>
                                        <li>Data Science</li>
                                        <li>Climbing</li>
                                        <li>Esports</li>
                                    </ul>
                                </div>
                                <div class="clear"></div>
                            </section>
                    
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
    tada: PropTypes.string,
};