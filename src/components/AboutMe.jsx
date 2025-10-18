import React from "react";
import PropTypes from "prop-types";
import "../style/about.css";

export default class About extends React.Component {
  render() {
    return (
      <div id="about-container" className="content-containers container mt-5">
        <h1 id="project-header">About Me</h1>

        <div id="top">
          <div id="cv" className="instaFade">
            <div className="mainDetails">
              <div id="name">
                <h1 className="quickFade delayTwo">Kelson Flint</h1>
                <h2 className="quickFade delayThree">Software Engineer</h2>
              </div>

              <div id="contactDetails" className="quickFade delayFour">
                <ul>
                  <li>
                    e:{" "}
                    <a href="mailto:kelson.flint@gmail.com" target="_blank">
                      kelson.flint@gmail.com
                    </a>
                  </li>
                  <li>
                    w: <a href="http://www.kelsonflint.com">www.kelsonflint.com</a>
                  </li>
                  <li>m: +1 (818)-835-6130</li>
                </ul>
              </div>
              <div className="clear"></div>
            </div>

            <div id="mainArea" className="quickFade delayFive">
              <section>
                <article>
                  <div className="sectionTitle">
                    <h1>Personal Profile</h1>
                  </div>

                  <div className="sectionContent">
                    <p>
                        I am a full-stack software engineer with over 4 years of experience at AWS, 
                        primarily focusing on Android and iOS applications. I also have hands-on 
                        experience building containerized applications and serverless solutions 
                        using AWS technologies. I enjoy designing intuitive software that solves 
                        real-world problems and always prioritize performance, reliability, and 
                        user experience.
                    </p>
                    <p>
                        Since graduating with a B.S. in Informatics and a minor in Mathematical 
                        Physics, I have grown into a versatile engineer capable of working across 
                        mobile and cloud architectures while continuously learning new technologies 
                        and improving development workflows.
                    </p>
                  </div>
                </article>
                <div className="clear"></div>
              </section>

              <section>
                <div className="sectionTitle">
                  <h1>Work Experience</h1>
                </div>

                <div className="sectionContent">
                    <article>
                        <h2>Software Development Engineer II at Amazon Web Services (AWS)</h2>
                        <p className="subDetails">June 2023 - Present</p>
                        <ul>
                            <li>Architected and implemented a containerized cloud solution for a Backend For Frontend (BFF).</li>
                            <li>Lead development of mobile projects on Android and iOS, ensuring scalability and performance.</li>
                            <li>Mentor to junior engineers and interns.</li>
                            <li>Drive initiatives to improve reliability, efficiency, and code quality across teams.</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Software Development Engineer I at Amazon Web Services (AWS)</h2>
                        <p className="subDetails">August 2021 - June 2023</p>
                        <ul>
                            <li>Worked on Android and iOS application for internal services.</li>
                            <li>Participated in code reviews, testing, and performance optimization.</li>
                            <li>Collaborated with cross-functional teams to ensure high-quality software delivery.</li>
                        </ul>
                    </article>
                  <article>
                    <h2>Software Development Engineer Intern at Amazon Web Services (AWS)</h2>
                    <p className="subDetails">June 2020 - September 2020</p>
                    <ul>
                      <li>
                        Designed and implemented a full-stack server-less solution
                        for overhauling Amazon Oncall's notification system.
                      </li>
                      <li>
                        Developed a functional back-end to store, process, and
                        send notification data using Java and multiple AWS
                        Services.
                      </li>
                      <li>
                        Built a front-end UI using React/Redux to interact with
                        my back-end services.
                      </li>
                      <li>
                        Developed strong skills in debugging, unit testing, and
                        performance optimization.
                      </li>
                      <li>Worked well independently and on a team to solve problems.</li>
                    </ul>
                  </article>

                  <article>
                    <h2>Software developer at Glimpse Wearables</h2>
                    <p className="subDetails">October 2018 - June 2019</p>
                    <ul>
                      <li>Startup funded by Amazon Catalyst.</li>
                      <li>
                        Led the development of a Swift iOS app that worked in
                        conjunction with our own hardware.
                      </li>
                      <li>
                        Assisted the design and development of backend services
                        including databases, APIs, and customizable requests for
                        all front-end services.
                      </li>
                    </ul>
                  </article>

                  <article>
                    <h2>Intern at Revel</h2>
                    <p className="subDetails">Summer 2017</p>
                    <ul>
                      <li>Developed and updated the store interface using HTML, CSS, and JavaScript.</li>
                      <li>Exposed to back end development, marketing strategies, and Golang.</li>
                      <li>Learned the importance of communication and cross-functional teamwork.</li>
                    </ul>
                  </article>
                </div>
                <div className="clear"></div>
              </section>

              <section>
                <div className="sectionTitle">
                  <h1>Key Skills</h1>
                </div>

                <div className="sectionContent">
                  <ul className="keySkills">
                    <li>Kotlin</li>
                    <li>Python</li>
                    <li>Xcode w/ Swift</li>
                    <li>AWS cloud practioner</li>
                    <li>Microsoft Office</li>
                    <li>Git</li>
                    <li>React.js</li>
                    <li>Typescript</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="clear"></div>
              </section>

              <section>
                <div className="sectionTitle">
                  <h1>Education</h1>
                </div>

                <div className="sectionContent">
                  <article>
                    <h2>University of Washington - Seattle</h2>
                    <p className="subDetails">B.S. in Informatics (2021) - 3.60 GPA</p>
                    <p>Concentration in Data Science and Information Architecture</p>
                    <p>Minor in Mathematical Physics</p>
                  </article>
                </div>
                <div className="clear"></div>
              </section>

              <section>
                <div className="sectionTitle">
                  <h1>Interests</h1>
                </div>

                <div className="sectionContent">
                  <ul className="keySkills">
                    <li>Baking</li>
                    <li>Tennis and golf</li>
                    <li>Music production</li>
                    <li>Physics and biology</li>
                    <li>Travel</li>
                    <li>Esports</li>
                  </ul>
                </div>
                <div className="clear"></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
