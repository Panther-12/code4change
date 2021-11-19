/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"



class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="user-guide-wrapper col">
                            <h3> USER GUIDE</h3>
                            <a href="">user manual</a>
                            <a href="">Terms and conditions</a>
                            <a href="">Privacy policy</a>
                        </div>
                        <div className="reach-wrapper col">
                            <h3>DEVELOPER</h3>
                            <a href="">About Developer</a>
                            <a href="">Linkedin</a>
                            <a href="">Facebook</a>
                            <p>Contact: 0740837666</p>
                        </div>
                        <div className="others-wrapper col">
                            <h3>ADDITIONAL PAGES</h3>
                            <a href="">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;