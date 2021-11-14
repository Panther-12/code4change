/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"


// The top navigation bar component
// The reason for using react router LINK instead of <A> is bacause it loads the required component
// unlike the <A> which loads the entire page
class Top_nav extends React.Component{
    render(){
        // javascript arrow function used to open the dropdown
        const openDropDown = () =>{
            const dropdown = document.querySelector('.dropdown-content')
            const dropdownOut = document.querySelector('.projbtn')
            if (dropdown || dropdownOut){
                dropdown.style.display = 'flex';
            }
            else{
                dropdown.style.display = 'none'
            }
            
        }
        const closeDropDown = ()=>{
            const dropDown = document.querySelector('.dropdown-content')
            dropDown.style.display = 'none'
        }
        return (
            <div className="top-nav">
                <div className="logo-wrapper">
                    <a href=""  id="inactive-link">1.1 INNOVATE</a>
                </div>
                <div className="right-side-wrapper">
                    <Link to="/">HOME</Link>
                    <Link to="/members">MEMBERS</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/projects">PROJECTS</Link>
                </div>
                <div className="sign-up">
                    <div className="login">
                        <Link to="/login">LOG-IN</Link>
                    </div>
                    <div className="register">
                    <Link to="/register">REGISTER</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Top_nav;