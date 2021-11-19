/* eslint-disable no-unused-vars */
import React from "react"
import {useState} from "react"


// About page component
function About(){
        const [text, setText] = useState('')
        const handleChange = (e) =>{
            setText(e.target.value)
            const text_box = [text]
            const para = document.querySelector('p').innerHTML = text_box
            return para
        }
        return (
            <div className="about-wrapper">
                <div className="container about-container">
                    <p></p>
                </div>
                <div className="input-wrapper">
                    <form onSubmit={handleChange}>
                        <textarea className="form-control" placeholder="Type the text here" onChange={handleChange}></textarea>
                        <button type="submit" className="btn btn-primary">Update content</button>
                    </form>
                </div>
            </div>
            
        );
}


export default About;