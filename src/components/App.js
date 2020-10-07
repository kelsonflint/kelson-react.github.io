import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import Nav from "./nav";
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
        <Route path="/about">
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
          </div>
        </Route>
        <Route path="/">
          <div className="App">
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
