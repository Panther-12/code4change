/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {useEffect, useState} from "react"


// The top navigation bar component
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
                    <a href="#home">HOME</a>
                    <a href="http://localhost:3001/api/members">MEMBERS</a>
                    <a href="http://localhost:3001/about">ABOUT</a>
                    <div className="dropdown">
                        <button className="projbtn" type="button"

                            onMouseOver={openDropDown}

                            >PROJECTS <i class="fa fa-caret-down"></i></button>
                        <div className="dropdown-content" 
                    
                            onMouseOut = {closeDropDown}
                            onMouseOver={openDropDown}>
                            <a href="">Create</a>
                            <a href="">Ongoing</a>
                            <a href="">Proposed</a>
                        </div>
                    </div>
                </div>
  
            </div>
        );
    }
}


export default Top_nav;