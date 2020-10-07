import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import Nav from "./nav";
import Bricks from "./pages/bricks";
import Glimpse from "./pages/glimpse";
import '../style/App.css';



function App() {
  
  return (
    <Router>

      <Switch>
        
        <Route path="/glimpse">
          <Nav />
          <Glimpse />
        </Route>
        <Route path="/bricks">
          <Nav />
          <Bricks />
        </Route>
        <Route path="/">
        <div className="App">
          <head>
            <title>Kelson Flint</title>
          </head>
          <header className="App-header">
            <Navbar />
          </header>
        </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
