/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import {Link} from "react-router-dom"
import ReactPlayer from "react-player"
import { useState, useEffect, fetch } from "react"

// react-player is used to play videos
// The states store the values in the input fields to keep track of data before and after submission
// Without this hook it would be impossible to know what to send to the API
const Registration = (props) =>{
    const [user, setUser] = useState(props.user)

    // handles submitting of the form
    const postData = (e)=>{
        e.preventDefault()
        // send a post request to express database
        fetch('http://localhost:3001/api/members/add_user',{
            method:'POST',
            body: JSON.stringify(),
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
        }).then(json=> setUser(json.user)).catch(err => err)
        }
    return (
        <div className="reg-form-wrapper">
            <div className="avatar-wrapper">
            </div>
            <div className="form-wrapper">
            <form onSubmit={postData}>
                <input  className="form-control" 
                    type = "text" 
                    value = {user.name}
                    placeholder="Enter username"
                    onChange={(e)=>setUser({...user, name:e.target.value})}
                ></input>
                <input className="form-control" 
                    type = "number"
                    value={user.age}
                    placeholder="Enter Age"
                    onChange={(e)=>setUser({...user, age:e.target.value})}
                ></input>
                <input className="form-control" 
                    type = "email"
                    value = {user.email} 
                    placeholder="Enter Email"
                    onChange={(e)=>setUser({...user, email:e.target.value})}
                ></input>
                <input className="form-control" 
                    type = "password" 
                    value={user.password}
                    placeholder="Enter Password"
                    onChange={(e)=>setUser({...user, password:e.target.value})}
                ></input>
                <button type="submit" className="btn btn-secondary">REGISTER</button>
                <span className="question">Already a member ? <Link to="/login">Log in</Link></span>
            </form>
            </div>
        </div>
    )


}

export default Registration;