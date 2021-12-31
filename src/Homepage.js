/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Landingpage = () =>{
    return (
        <div className="homepage-wrapper">
            <div className="top-nav-wrapper">
                <div className="logo-wrapper">
                </div>
                <div className="nav-wrapper">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Tutorials</Link>
                    <Link to="/about">About</Link>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="title-wrapper">
                    <div className="header1" id="welcome">WELCOME TO </div>
                    <div className="header2" id="site-name">CODE4CHANGE</div>
                </div>
                <div className="info-wrapper">
                    <p>Code4change is a site aimed at teaching coding skills as a way of advocating for technological advancements in african society. It is a personal initiative to equip african youths with knowledge on the fast growing computing industry. The fields offered include: React frontend, node js, express backend, flask backend, python programming, html and css. The tutorials are topic based and descriptive enough to allow newbies to grasp and understand programming principles easily. If where do I start? And what do I begin with? Are your questions, then this is the right place for you. </p>
                </div>
            </div>
            <div className="buttons-wrapper">
                <div className="button1" id="btn1">GET STARTED</div>
                <div className="button1" id="btn2">ABOUT </div>
            </div>
        </div>
    )
}


export default Landingpage;