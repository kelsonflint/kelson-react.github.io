import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Glimpse extends React.Component {
    render() {
      return (
        <div id="bricks">
          <div className="title">
            <div className="text-block">
              <h1>Brick Breaker</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <canvas id="myCanvas" width={640} height={480} />
            </div>
          </div>
          <div className="col-md-4">
            <h5>About the project:</h5>
            <p>A simple brick breaker webgame.</p>
            <br />
            <h5>Technology used:</h5>
            <p>JavaScript, Django</p>
            <br />
            <h5>Github:</h5>
            <p><a href="https://github.com/kelsonflint/brickbreaker">Brick Breaker</a></p>
            <br />
          </div>
        </div>
      );
    }
}
