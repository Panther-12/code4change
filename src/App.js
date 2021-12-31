/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from './about';
import Landingpage from './Homepage';
import Projects from './projects';
import Admin from './Admin_panel';

// All C
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landingpage/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/admin">
            <Admin/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

// Makes the app component available to all other components
export default App;
