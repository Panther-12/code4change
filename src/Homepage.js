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
                    <p>Code4change is a site aimed at teaching coding skills as a way of advocating for technological advancements in african society. It is a personal initiative to equip african youths with knowledge on the fast growing computing industry. The fields offered include: React frontend, node js, express backend, flask backend, python programming, html and css. The tutorials are topic based and descriptive enough to allow newbies to grasp and understand programming principles easily. If where do I start? And what do I begin with? Are your questions, then this is the right place for you. </p>
                </div>
            </div>
        </div>
    )
}


export default Landingpage;