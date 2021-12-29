/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Landingpage = () =>{
    return (
        <div className="homepage-wrapper">
            <div className="top-nav-wrapper">
                <div className="logo-wrapper">
                    <img src="file:///home/nimrod/CODE4CHANGE/react-frontend/src/images/LOGO.png"></img>
                </div>
                <div className="nav-wrapper">
                    <Link to="/">Home</Link>
                    <Link to="/tutorials">Tutorials</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="title-wrapper">
                    <p id="welcome">WELCOME TO </p>
                    <p id="site-name">CODE4CHANGE</p>
                </div>
                <div className="info-wrapper">

                </div>
            </div>
        </div>
    )
}


export default Landingpage;