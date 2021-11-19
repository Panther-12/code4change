/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import './App.css';
import  LandingPage from './Landing-page'
import Members from './members'
import About from './about-page'
import Top_nav from './top_nav';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Registration from './register';
import SocialMedia  from './media-icons';
import Footer from './footer';
// Function which stores all components rendered when server runs
// React router tranfers routing from server to frontend
// API used to handle requests for data in a database
// The Route part can be further simplified to:
//         <Route exact path='/' component={Home}/>
// <Router> can be used in place of <BrowserRouter>
function App() {
  return (
    <div className="app">
      <Router>
      <Top_nav/>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
            <Footer/>
          </Route>
          <Route exact path="/members">
            <Members/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/register">
            <Registration/>
          </Route>
        </Switch>
        <SocialMedia/>
      </Router>
      
    </div>
  );
}

// Makes the app component available to all other components
export default App;
