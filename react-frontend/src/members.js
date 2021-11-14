/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import React from "react"


// cors prevents random requests from different localhost and port from taking place
// This is a web browser to increase security
const Members = ()=>{

    // member data states
    const [Loading , setLoading] = useState(true)
    const [data , setData] = useState(null)
    const[error, setError] = useState(null)

    // Get request for all members
        useEffect(()=>{
            fetch('http://localhost:3001/api',{
                method:"GET",
                mode:"no-cors",
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(response =>{
                if(response.ok){
                    return response.json()
                }
                throw response
            })
            .then(data => {
                setData(data)
            })
            .catch(error=>{
                console.log('error fetching data:', error)
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })
        },[])
    return(
        <div className="specialists_wrapper">
            <div className="container">
                <div className="row">
                    <h5>{data}</h5>
                </div>
            </div>
        </div>
    )
}




export default Members;