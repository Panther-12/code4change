/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import './App.css';
import  LandingPage from './Landing-page'
import About from './about-page'
import Users from "./members-page"
import Top_nav from './top_nav';

// Function which stores all components rendered when server runs
function App() {
  return (
    <div className="App">
      <Top_nav/>
      <LandingPage/>
    </div>
  );
}

// Makes the app component available to all other components
export default App;
