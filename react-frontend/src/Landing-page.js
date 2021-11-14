import React from "react"



class LandingPage extends React.Component{
    render(){
        return(
            <div className="content-wrapper">
                <div className="title-wrapper">
                    <h2>WELCOME TO 1.1 INNOVATE</h2>
                    <div className="buttons-wrapper">
                        <div className="explore-button">EXPLORE</div>
                        <div className="contact-button">CONTACT</div>
                </div>
                </div>
                <hr/>
                <div className="container description-wrapper">
                    <p> This is a site that aims at creating awareness in the field of technology among campus students. The fields engadged in are both <u>hardware</u> <i>(networking and robotics)</i> and <u>software</u>. The site is an effort of first year student members of the <b>TECHNOSCIENCE</b> club. It also provides help to those in need of skills or lessons through the click of a button. If you are the misfit or the one crazy enough to think that you can make change then this is the right place for you.</p>
                    <p><b>VISION:</b> Leave a mark of impact in the technology industry. </p>
                    <p><b>MISSION:</b> Using code as a tool for making an impact in the lives of others. </p>
                </div>
                
            </div>
        )
    }
}

export default LandingPage;