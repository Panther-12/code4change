/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import {Link} from "react-router-dom"
import React, { Component } from "react"
import ReactPlayer from "react-player"
import { useState, useEffect, fetch } from "react"



// Function to handle submission of the form
function SubmitForm(){
        useEffect(() => {
            fetch('/api/AddUser',{
                method:'POST',
                body: JSON.stringify(this.state),
                headers:{
                    'content-type':'application/json',
                }
            }).then(res=>{
                if(res.status >=200 && res.status <= 300){
                    return res.json()
                }
                else{
                    return res.status(404).json({sucess:false, text:`User not added`})
                }
             }).then(json=> this.state.name(json.user)).catch(err => err)
        }, [])          
    }

// react-player is used to play videos
// The states store the values in the input fields to keep track of data before and after submission
// Without this hook it would be impossible to know what to send to the API
class Registration extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            age: '',
            email: '',
            password:''
        }
        // Binding custom functions to the class object
        this.UpdateName = this.UpdateName.bind(this)
        this.UpdateAge = this.UpdateAge.bind(this)
        this.UpdateEmail = this.UpdateEmail.bind(this)
        this.UpdatePassword = this.UpdatePassword.bind(this)
    }  

    // The actual functions 
    UpdateName(event) {
        this.setState({value:event.target.value})
    }
    UpdateAge(event) {
        this.setState({value:event.target.value})
    }
    UpdateEmail(event) {
        this.setState({value:event.target.value})
    }
    UpdatePassword(event) {
        this.setState({value:event.target.value})
    }
    render(){
        return(
            <div className="reg-form-wrapper">
                <div className="avatar-wrapper">
                </div>
                <div className="form-wrapper">
                    <form onSubmit={SubmitForm}>
                        <input  className="form-control" 
                            type = "text" 
                            value = {this.state.value}
                            placeholder="Enter username"
                            onChange={this.UpdateChange}
                        ></input>
                        <input className="form-control" 
                            type = "number"
                            value={this.state.value}
                            placeholder="Enter Age"
                            onChange={this.UpdateChange}
                        ></input>
                        <input className="form-control" 
                            type = "email"
                            value = {this.state.value} 
                            placeholder="Enter Email"
                            onChange={this.UpdateChange}
                        ></input>
                        <input className="form-control" 
                            type = "password" 
                            value={this.state.value}
                            placeholder="Enter Password"
                            onChange={this.UpdateChange}
                        ></input>
                        <button type="submit" className="btn btn-secondary">REGISTER</button>
                        <span className="question">Already a member ? <Link to="/login">Log in</Link></span>
                    </form>
                </div>
         </div>
        )
    }
}


export default Registration;